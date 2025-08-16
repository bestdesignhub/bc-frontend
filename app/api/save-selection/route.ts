
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { size, price } = await req.json();

    // Option 1: Save to session or a DB (or temporary storage like Redis)
    // For demo: store in cookie
    const response = NextResponse.json({ status: 'ok' });
    response.cookies.set('selectedSize', size);
    response.cookies.set('selectedPrice', String(price));

    return response;
}