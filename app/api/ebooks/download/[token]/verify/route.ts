import { verifyToken } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const token = await (await params).token
    if (token) {
      const verifiedToken = await verifyToken(token);
      if (!verifiedToken) {
        return NextResponse.json({
          status: 400,
          message: "Verification failed",
        });
      }

      return NextResponse.json({
        status: 200,
        data: verifiedToken,
      });
    } else {
      return NextResponse.json({
        status: 400,
        message: "Token can not be empty",
      });
    }
  } catch (error: any) {
    console.log("VefifyDownload-Error: ", error);

    return NextResponse.json({
      status: 500,
      message: "Something went wrong.",
      info: error.message,
    });
  }
}
