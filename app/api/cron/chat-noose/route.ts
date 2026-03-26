import { NextResponse } from 'next/server'

const API_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'http://localhost:3000'

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/community/auto-chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ character_id: 'noose' }),
    })
    const data = await res.json()
    return NextResponse.json({ triggered: 'noose', ...data })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
