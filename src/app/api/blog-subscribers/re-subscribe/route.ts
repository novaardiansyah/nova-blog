import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    const headers: HeadersInit = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const response = await fetch(`${API_URL}/blog-subscribers/re-subscribe`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to connect to server' },
      { status: 500 }
    );
  }
}
