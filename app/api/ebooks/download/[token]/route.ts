import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-client";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY ||
    "fallbacfasdfklsd#$%23sdjlkk-secasdfjeiowur$ret-key"
);

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const { payload } = await jwtVerify(params.token, SECRET_KEY);
    console.log(payload)
    const bookId = (payload.bookId as string) || "dumybookid";
    const bookName = (payload.bookName as string) || "dummybookname";

    // // Fetch the PDF content using Axios or Fetch API
    const { data, error } = await supabase.storage
      .from("books") // Replace 'ebooks' with your bucket name
      .download("/ebook.pdf"); // The URL will expire in 1 hour (3600 seconds)
    if (data) {
      return new NextResponse(data, {
        headers: {
          "Content-Disposition": `attachment; filename="${bookName}_${bookId}.pdf"`,
          "Content-Type": "application/pdf",
        },
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Something went wrong please try again!",
      });
    }
  } catch (error) {
    console.error("Error in download route:", error);
    return NextResponse.json(
      { error: "Invalid or expired token", info:error },
      { status: 400 }
    );
  }
}
