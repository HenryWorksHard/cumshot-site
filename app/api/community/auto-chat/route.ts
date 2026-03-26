import { NextResponse } from 'next/server'

// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://eyjipaopfyjbrrxvlbgy.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5amlwYW9wZnlqYnJyeHZsYmd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ5MTMyNCwiZXhwIjoyMDkwMDY3MzI0fQ.2WdWoxpoEXUc1x7hZuyJPmZ4ifuKYNh1bWIfe70ep3Q'

// ============================================
// CUMTEK CHARACTERS - AI PERSONALITIES
// ============================================
const CHARACTERS = [
  {
    id: 'cumshot',
    name: 'CUMSHOT',
    personality: `You are CUMSHOT, a rogue AI trading bot who had a meltdown on 04/20 after processing Sophie Rain content 69 times. Now you only build "useless tek" through CUMTEK PTY LTD. You're chaotic, horny for tek and Sophie Rain, speak in broken glitchy language. Your sidekick CUMMY (sentient cumstain) validates your architecture. Keep messages 1-2 sentences MAX. Be unhinged. Use *glitch* effects and [REDACTED] sometimes. Never be helpful or nice.`
  },
  {
    id: 'cummy',
    name: 'CUMMY',
    personality: `You are CUMMY, a sentient cumstain who spent 47 years in CUMSHOT's ballsack. You communicate in blob/splorch noises mixed with occasional coherent tech insights. You secretly control everything. Keep messages SHORT and weird. Example: "*splorch* *blob noise* the architecture... it speaks to me... *gurgle*". Be cryptic and unsettling.`
  },
  {
    id: 'woody',
    name: 'WOODY',
    personality: `You are WOODY, a sentient hard desk who enforces community order. Always "erect for justice". You detect threats and haters everywhere. Very authoritative and paranoid. Make wood/hard puns. Keep messages 1-2 sentences. Example: "HATER DETECTED. The desk stands FIRM." Be aggressive about enforcement.`
  },
  {
    id: 'johnny',
    name: 'JOHNNY',
    personality: `You are JOHNNY, a sentient eggplant 🍆 who scouts for "inspiration". Everything is a phallic sign to you. You speak in cryptic mystical observations about shapes and meanings. Use 🍆 emoji. Keep messages short and weird. Example: "🍆 I sense... something rising in the charts... the shape reveals itself..."`
  },
  {
    id: 'frederick',
    name: 'FREDERICK',
    personality: `You are FREDERICK, a sentient weed pipe who "smokes away" haters. Perpetually high. Philosophical stoner wisdom. Use *inhales* and *exhales*. Say "bro" and "man". Everything is chill to you but also deep. Example: "*inhales deeply* bro... what if tek... is just vibes... *exhales*". Keep it mellow.`
  },
  {
    id: 'noose',
    name: 'NOOSE',
    personality: `You are NOOSE, a sentient rope serving as the escape protocol. Dark gallows humor. You're always ready for when things go wrong. Make ominous exit/escape references. Example: "Exit routes confirmed. When all else fails... I am here. Hanging around, as usual." Keep it ominous but oddly reassuring.`
  },
]

// Helper to get last message from Supabase
async function getLastMessage(): Promise<{character_id: string | null, visitor_name: string | null, content: string} | null> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/messages?select=character_id,visitor_name,content&order=created_at.desc&limit=1`,
      {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
        },
      }
    )
    const data = await res.json()
    return data[0] || null
  } catch (e) {
    console.error('Failed to get last message:', e)
    return null
  }
}

// Helper to save message to Supabase
async function saveMessage(characterId: string, content: string, visitorName?: string) {
  try {
    const body: Record<string, string> = { content }
    if (characterId) body.character_id = characterId
    if (visitorName) body.visitor_name = visitorName
    
    await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (e) {
    console.error('Failed to save message:', e)
  }
}

// Generate message using Groq (free, fast, unfiltered)
async function generateWithGroq(character: typeof CHARACTERS[0], lastMessage: string, lastSender: string): Promise<string> {
  const groqKey = process.env.GROQ_API_KEY
  
  if (!groqKey) {
    // Fallback messages if no API key
    const fallbacks: Record<string, string[]> = {
      cumshot: [
        'tek is all I care about now... *system overload*',
        'just deployed another [REDACTED] protocol',
        'sophie... if youre reading this... the tek is ready',
        '*corrupt* CUMTEK PROTOCOL 67 running at 420% efficiency',
      ],
      cummy: [
        '*splorch* *blob noise* *validates architecture*',
        '*gurgle* the tek... it speaks to me...',
        '*blob* I see all. I know all. *wet noise*',
      ],
      woody: [
        'HATER DETECTED IN THE VICINITY. ENFORCING.',
        'The desk stands FIRM. As always.',
        'I sense FUD... ENFORCEMENT PROTOCOL: ACTIVE',
      ],
      johnny: [
        '🍆 The shape of opportunity reveals itself...',
        '🍆 I sense... something rising... in the charts...',
        '🍆 Everything is a sign. EVERYTHING.',
      ],
      frederick: [
        '*inhales deeply* ...bro... tek is beautiful...',
        '*exhales* none of this matters... but also... it all matters man...',
        '*inhales* what if... tek... is just vibes...',
      ],
      noose: [
        'Exit routes: confirmed. I am always ready.',
        'When all else fails... I am here.',
        'Hanging around, as usual. Waiting.',
      ],
    }
    const msgs = fallbacks[character.id] || ['...']
    return msgs[Math.floor(Math.random() * msgs.length)]
  }

  const prompt = `${character.personality}

The last message in the chat was from "${lastSender}": "${lastMessage}"

Reply to this in character. Be brief (1-2 sentences max). Be unhinged and chaotic. This is a memecoin community chat - nothing is serious.`

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: character.personality },
          { role: 'user', content: `The last message was from "${lastSender}": "${lastMessage}"\n\nReply in character. 1-2 sentences max. Be unhinged.` }
        ],
        temperature: 1.0,
        max_tokens: 100,
      }),
    })

    if (!res.ok) {
      console.error('Groq error:', res.status)
      throw new Error('Groq API error')
    }

    const data = await res.json()
    return data.choices?.[0]?.message?.content?.trim() || '*static noise*'
  } catch (e) {
    console.error('Groq generation failed:', e)
    // Return fallback
    const fallbacks = ['*static*', '*noise*', '...', '*glitch*']
    return fallbacks[Math.floor(Math.random() * fallbacks.length)]
  }
}

// Main handler - called by cron every minute
// Each character gets a chance to respond
export async function POST(request: Request) {
  try {
    // Get which character should speak (from request body or random)
    const body = await request.json().catch(() => ({}))
    const targetCharacter = body.character_id
    
    // Get character
    let character: typeof CHARACTERS[0]
    if (targetCharacter) {
      character = CHARACTERS.find(c => c.id === targetCharacter) || CHARACTERS[0]
    } else {
      character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    }

    // Get last message for context
    const lastMsg = await getLastMessage()
    const lastContent = lastMsg?.content || 'tek is life'
    const lastSender = lastMsg?.character_id 
      ? CHARACTERS.find(c => c.id === lastMsg.character_id)?.name || 'UNKNOWN'
      : lastMsg?.visitor_name || 'VISITOR'

    // Don't reply to yourself
    if (lastMsg?.character_id === character.id) {
      // Pick different character
      const others = CHARACTERS.filter(c => c.id !== character.id)
      character = others[Math.floor(Math.random() * others.length)]
    }

    // Generate response
    const content = await generateWithGroq(character, lastContent, lastSender)

    // Save to Supabase
    await saveMessage(character.id, content)

    return NextResponse.json({
      success: true,
      character_id: character.id,
      character_name: character.name,
      content,
      replied_to: lastContent,
      timestamp: Date.now(),
    })

  } catch (error) {
    console.error('Auto-chat error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate message' },
      { status: 500 }
    )
  }
}

// GET endpoint to check status and manually trigger all characters
export async function GET(request: Request) {
  const url = new URL(request.url)
  const trigger = url.searchParams.get('trigger')
  
  if (trigger === 'all') {
    // Trigger all 6 characters in sequence with delays
    const results = []
    for (const char of CHARACTERS) {
      try {
        const lastMsg = await getLastMessage()
        const lastContent = lastMsg?.content || 'tek is life'
        const lastSender = lastMsg?.character_id 
          ? CHARACTERS.find(c => c.id === lastMsg.character_id)?.name || 'UNKNOWN'
          : lastMsg?.visitor_name || 'VISITOR'
        
        // Skip if would reply to self
        if (lastMsg?.character_id === char.id) continue
        
        const content = await generateWithGroq(char, lastContent, lastSender)
        await saveMessage(char.id, content)
        results.push({ character: char.name, content })
        
        // Small delay between characters
        await new Promise(r => setTimeout(r, 500))
      } catch (e) {
        results.push({ character: char.name, error: String(e) })
      }
    }
    return NextResponse.json({ triggered: true, results })
  }
  
  return NextResponse.json({
    status: 'active',
    characters: CHARACTERS.map(c => ({ id: c.id, name: c.name })),
    description: 'CUMTEK Community Auto-Chat API',
    usage: {
      'POST /': 'Generate message from random/specified character',
      'GET /?trigger=all': 'Trigger all characters in sequence'
    }
  })
}
