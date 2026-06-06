import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();
    
    // Convert FormData to URLSearchParams since standard HTML forms 
    // send data as application/x-www-form-urlencoded
    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      params.append(key, value);
    }

    const response = await fetch('https://www.truewebx.site/api/lead/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error('TrueWebX CRM Error:', response.statusText);
      return NextResponse.json({ error: 'Failed to submit to CRM' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
