"use server";
import { resend } from "@/lib/resend";
import ConfirmedEmail from "@/email/confirmed-email";
import { supabase } from "@/lib/supabase-client";
const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "fallback-secret-key"
);
import { JWK, SignJWT } from "jose"

export type EmailPayload = {
  customerEmail: string;
  customerName: string;
  bookTitle: string;
  bookId: string;
  bookName: string;
};
export async function onGenerateDownloadLink(bucketName:string,filePath:string,) {
 

  const { data, error } = await supabase.storage
    .from(bucketName) // Replace 'ebooks' with your bucket name
    .createSignedUrl(filePath, 60 * 60 * 12 * 365, {download:true}); // The URL will expire in 1 hour (3600 seconds)

  if (error) {
    console.log("linkError: ", error)
    throw new Error(error.message);
  }
  if (data.signedUrl) {
    console.log("download url: ", data.signedUrl)
    return data.signedUrl;
  }
  return null;
}


export async function onSendPurchaseEmail({
  customerEmail,
  customerName,
  bookTitle,
  bookId,
  bookName,
}: EmailPayload) {
  try {

    const tokenPayload = {
      bookId,
      bookName,
      customerName
    }

    const currentDate = new Date()
    const expireDate = new Date()
    expireDate.setFullYear(currentDate.getFullYear()+1, currentDate.getMonth(), currentDate.getDate())
    
    const token =await new SignJWT(tokenPayload).setProtectedHeader({alg:"HS256"}).setExpirationTime(expireDate).sign(SECRET_KEY)

    const downloadLink = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/ebooks/download/${token}`;

    // Construct the image URL
    const imgUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/book.webp`;

    // Send the email with Resend
    const { data, error } = await resend.emails.send({
      from: "eboibd <noreply@eboibd.com>",
      to: [customerEmail],
      subject: "Your E-book Purchase Confirmation",
      react: ConfirmedEmail({ customerName, bookTitle, downloadLink, imgUrl }),
    });

    if (error) {
      console.error("onSendPurchaseEmail-Error: ", error);
      return {
        status: 400,
        message: "Failed to send email",
        info:error
      };
    }

    return { status: 200, message: "Email sent successfully", downloadLink };
  } catch (error:any) {
    console.error("onSendPurchaseEmail-Error:", error);
    return {
      status: 500,
      message: error.message,
      downloadLink: null,
    };
  }
}
