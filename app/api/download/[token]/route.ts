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

    // In a real application, you would use the bookId to fetch the correct file
    const filePath = path.join(process.cwd(), 'public', 'ebook.pdf')
    const fileBuffer = await fs.readFile(filePath)

    return new NextResponse(fileBuffer, {
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

