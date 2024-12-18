import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY || 'fallback-secret-key')

export async function GET(request: NextRequest, { params }: { params: { token: string } }) {
  try {
    const { payload } = await jwtVerify(params.token, SECRET_KEY)
    const bookId = payload.bookId as string
    const bookName = payload.bookName as string

    // Serve the PDF via URL instead of file system
    const pdfUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/ebook.pdf`;

    // Fetch the PDF content using Axios or Fetch API
    const pdfContent = await fetch(pdfUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch the PDF file.");
        return res.arrayBuffer();
      })
      .then((buffer) => Buffer.from(buffer));

    return new NextResponse(pdfContent, {
      headers: {
        'Content-Disposition': `attachment; filename="${bookName}_${bookId}.pdf"`,
        'Content-Type': 'application/pdf',
      },
    })
  } catch (error) {
    console.error('Error in download route:', error)
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
  }
}

