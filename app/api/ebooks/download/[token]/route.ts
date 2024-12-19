import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-client";
import { verifyToken } from "@/lib/utils";
import { prismaDB } from "@/lib/prismal";

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const verifyResponse = await verifyToken(params.token);
    if (verifyResponse) {
      const bookId = verifyResponse.bookId! || "dumybookid";
      const bookName = verifyResponse.bookName! || "dummybookname";
      console.log("VerifiedResponse: ", verifyResponse)
      const book = await prismaDB.book.findFirst({
        where: {
          id: bookId,
        },
      });
      if(!book) {
        return NextResponse.json({
          status:404,
          message:"No book found to download"
        })
      }

      // Fetch the PDF content using Axios or Fetch API
      const bucketName = book.folderName
      const fileName = book.fileName
      console.table([bucketName, fileName])
      const { data, error } = await supabase.storage
        .from(bucketName)
        .download(fileName); 
      console.log("downloadError: ", error)
      if (!data) {
        return NextResponse.json({
          status: 500,
          message: "Something went wrong please try again!",
        });
      }
      console.log("data: ",data)
      
      return new NextResponse(data, {
        headers: {
          "Content-Disposition": `attachment; filename="ebook.pdf"`,
          "Content-Type": "application/pdf",
        },
      });
    } else {
      return NextResponse.json({
        status: 403,
        message: "You are not authorized person to download this e-book",
      });
    }
  } catch (error) {
    console.error("Error in download route:", error);
    return NextResponse.json(
      { error: "Invalid or expired token", info: error },
      { status: 400 }
    );
  }
}
