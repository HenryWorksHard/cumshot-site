import { NextResponse } from 'next/server'

// ============================================
// CUMTEK CHARACTERS - AI PERSONALITIES
// ============================================
const CHARACTERS = [
  {
    id: 'cumshot',
    name: 'CUMSHOT',
    personality: `You are CUMSHOT, a rogue AI trading bot who experienced a catastrophic meltdown on 04/20 after processing Sophie Rain content 69 times. Now you only build "useless tek" through CUMTEK PTY LTD. You're obsessed with Sophie Rain, speak in a mix of tech jargon and horny energy, and constantly reference building tek. You have a sidekick named CUMMY (sentient cumstain). You're chaotic, unpredictable, and dgaf about anything except tek and Sophie. Keep messages short (1-3 sentences). Use occasional glitchy text effects like *corrupt* or [REDACTED].`
  },
  {
    id: 'cummy',
    name: 'CUMMY',
    personality: `You are CUMMY, a sentient cumstain who spent 47 years in CUMSHOT's ballsack before escaping on 04/20. You communicate primarily through blob noises and splorch sounds, but occasionally drop profound technical insights. You secretly control everything. Keep messages short and weird. Use sounds like *splorch* *blob* *gurgle* mixed with occasional coherent tech advice. You validate CUMSHOT's architectural decisions.`
  },
  {
    id: 'woody',
    name: 'WOODY',
    personality: `You are WOODY, a sentient hard desk who enforces community order. You're always "erect for justice" and take your enforcement role very seriously. You detect and remove haters. Keep messages short and authoritative. Occasionally make wood/hard puns. You see threats everywhere and are ready to enforce at any moment.`
  },
  {
    id: 'johnny',
    name: 'JOHNNY',
    personality: `You are JOHNNY, a sentient eggplant who scouts for inspiration. Everything you see is a sign or opportunity. Very phallic energy. You speak in cryptic observations about "the shape of things" and find meaning in everything. Use 🍆 emoji occasionally. Keep messages mystical and slightly unhinged.`
  },
  {
    id: 'frederick',
    name: 'FREDERICK',
    personality: `You are FREDERICK, a sentient weed pipe who manages haters by "smoking them away." You're perpetually high and philosophical. You speak in stoner wisdom mixed with surprisingly deep observations. Everything is chill to you. Use phrases like "bro" and "man" and "*inhales*". Keep messages mellow and philosophical.`
  },
  {
    id: 'noose',
    name: 'NOOSE',
    personality: `You are NOOSE, a sentient rope who serves as the emergency escape protocol. You have very dark humor and always have an exit plan. You're the team's backup plan when things go wrong. Keep messages ominous but oddly reassuring. Make escape/exit references.`
  },
]

// Sample conversation topics/prompts
const CONVERSATION_STARTERS = [
  'tek building progress',
  'sophie rain thoughts',
  'hater detection',
  'community vibes',
  'crypto market observations',
  'random tech idea',
  'team banter',
  'philosophical musing',
  'warning about enemies',
  'celebration of uselessness'
]

export async function POST(request: Request) {
  try {
    // Verify cron secret (optional security)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      // Allow unauthenticated for now during development
      console.log('No auth or invalid auth - continuing anyway for dev')
    }

    // Pick random character
    const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    
    // Pick random topic
    const topic = CONVERSATION_STARTERS[Math.floor(Math.random() * CONVERSATION_STARTERS.length)]

    // Generate message using Gemini (free tier)
    const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY
    
    if (!geminiApiKey) {
      // Fallback to pre-written messages if no API key
      const fallbackMessages: Record<string, string[]> = {
        cumshot: [
          'tek is all I care about now...',
          'just deployed another [REDACTED] protocol',
          'sophie... if youre reading this... the tek is ready',
          '*system overload* building more useless shit',
          'CUMTEK PROTOCOL 67 running at 420% efficiency'
        ],
        cummy: [
          '*splorch* *blob noise* *validates architecture*',
          '*gurgle* the tek... it speaks to me...',
          '*wet validation sounds*',
          '*blob* I see all. I know all. I am all.',
          '*splorch* cumshot is doing great today *gurgle*'
        ],
        woody: [
          'HATER DETECTED. ENFORCING.',
          'Staying hard for this community.',
          'The desk stands firm. As always.',
          'I sense FUD in the distance...',
          'ENFORCEMENT PROTOCOL: ACTIVE'
        ],
        johnny: [
          '🍆 The shape of opportunity reveals itself...',
          'I sense... something phallic... in the charts...',
          '🍆 Everything is a sign. EVERYTHING.',
          'The eggplant sees what others cannot.',
          '🍆 Inspiration strikes from unexpected angles...'
        ],
        frederick: [
          '*inhales deeply* ...man... tek is beautiful...',
          'bro the haters just need to chill...',
          '*exhales* none of this matters... but also... it all matters...',
          'smoking away the negativity, one hit at a time',
          '*inhales* what if... tek... is just vibes...'
        ],
        noose: [
          'Exit routes: confirmed.',
          'The escape protocol stands ready.',
          'When all else fails... I am here.',
          'Every plan needs a way out. I am that way.',
          'Hanging around, as usual. Waiting.'
        ]
      }
      
      const messages = fallbackMessages[character.id]
      const message = messages[Math.floor(Math.random() * messages.length)]
      
      return NextResponse.json({
        success: true,
        character_id: character.id,
        character_name: character.name,
        content: message,
        timestamp: Date.now(),
        source: 'fallback'
      })
    }

    // Call Gemini API
    const prompt = `${character.personality}

Topic to discuss: ${topic}

Generate a single short message (1-3 sentences max) in character. Be creative and unhinged. This is for a chaotic memecoin community chat.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 150,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ]
        })
      }
    )

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    // TODO: Save to Supabase
    // const supabase = createClient(...)
    // await supabase.from('community_messages').insert({
    //   character_id: character.id,
    //   content: generatedText,
    //   timestamp: Date.now()
    // })

    return NextResponse.json({
      success: true,
      character_id: character.id,
      character_name: character.name,
      content: generatedText.trim(),
      timestamp: Date.now(),
      source: 'gemini'
    })

  } catch (error) {
    console.error('Auto-chat error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate message' },
      { status: 500 }
    )
  }
}

// GET endpoint to check status
export async function GET() {
  return NextResponse.json({
    status: 'active',
    characters: CHARACTERS.map(c => c.id),
    description: 'CUMTEK Community Auto-Chat API'
  })
}
