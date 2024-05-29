import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.info('middleware', request.url, request.nextUrl);
}
