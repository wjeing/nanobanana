import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://nanobanana.com",
    "X-Title": "Nano Banana AI Editor",
  },
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageUrl } = await request.json()

    if (!prompt || !imageUrl) {
      return NextResponse.json(
        { error: 'Missing prompt or image URL' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-image-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl
              }
            }
          ]
        }
      ],
    })

    const response = completion.choices[0].message.content

    return NextResponse.json({
      success: true,
      result: response,
      message: completion.choices[0].message
    })

  } catch (error) {
    console.error('Error calling Gemini API:', error)
    return NextResponse.json(
      { error: 'Failed to process image with Gemini API' },
      { status: 500 }
    )
  }
}