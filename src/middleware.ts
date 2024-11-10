import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: ['/', '/movies/:path*'],
}

export function middleware(request: NextRequest) {
    let token = request.cookies.get('token')
    if(!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        console.log('HAY TOKEN PUEDE PASAR', token)
    }
}