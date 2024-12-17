"use server";

import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import fs from "fs/promises";
import path from "path";
import { resend } from "@/lib/resend";
import ConfirmedEmail from "@/email/confirmed-email";
import { revalidatePath } from "next/cache";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "fallback-secret-key"
);

export type EmailPayload = {
  customerEmail: string;
  customerName: string;
  bookTitle: string;
  bookId: string;
  bookName:string
};
export async function onGenerateDownloadLink(bookId: string, bookName:string) {
  const token = await new SignJWT({ bookId, bookName })
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("525960m") // Set to expire in 1 year
    .sign(SECRET_KEY);

  const downloadLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/download/${token}`;
  return downloadLink;
}
export async function onSendPurchaseEmail({
  customerEmail,
  customerName,
  bookTitle,
  bookId,
  bookName
}:EmailPayload) {
  try {
    // Generate download link
    const downloadLink = await onGenerateDownloadLink(bookId, bookName );

    // Read the PDF file
    const pdfPath = path.join(process.cwd(), "public", "ebook.pdf");
    const pdfContent = await fs.readFile(pdfPath);
    const imgUrl = `${process.env.NEXT_PUBLIC_APP_URL}//book.webp`;

    const { data, error } = await resend.emails.send({
      from: "eboibd <noreply@eboibd.com>",
      to: [customerEmail],
      subject: "Your E-book Purchase Confirmation",
      react: ConfirmedEmail({ customerName, bookTitle, downloadLink, imgUrl }),
      attachments: [
        {
          filename: `${bookTitle}.pdf`,
          content: pdfContent,
        },
      ],
    });

    if (error) {
      console.error("onSendPurchaseEmail-Error: ", error);
      return {
        status: 400,
        message: "Failed to send email",
        downloadLink: null,
      };
    }

    revalidatePath("/dashboard/orders")
    return { status: 200, message: "Email sent successfully", downloadLink };
  } catch (error) {
    console.error("onSendPurchaseEmail-Error:", error);
    return {
      status: 500,
      message: "Something went wrong",
      downloadLink: null,
    };
  }
}
