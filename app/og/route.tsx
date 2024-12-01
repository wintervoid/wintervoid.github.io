// This should be at the top of the file
export const runtime = 'edge'

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const title = searchParams.get('title') ?? 'Next.js Portfolio Starter'

    return new ImageResponse(
      (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '48px 16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ display: 'flex', flexDirection: 'column', fontSize: '2.25rem', fontWeight: 'bold', letterSpacing: '-0.025em', textAlign: 'left' }}>
              {title}
            </h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
