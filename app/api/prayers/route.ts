import { NextRequest } from "next/server"
import { z } from "zod"
import { checkRateLimit } from "@/lib/database/cache-middleware"

// Input validation schema for prayer queries
const prayerQuerySchema = z.object({
  category: z.enum(['basic', 'marian', 'devotional', 'liturgical', 'saints']).optional(),
  language: z.enum(['english', 'latin', 'spanish']).optional(),
  tag: z.string().optional(),
  limit: z.string().regex(/^\d+$/).transform(Number).pipe(z.number().min(1).max(100)).optional(),
  search: z.string().min(1).max(100).optional()
})

// Define prayer types
type Prayer = {
  id: string
  title: string
  text: string
  category: string
  language: string
  tags: string[]
}

// Sample prayers data
const prayers: Prayer[] = [
  {
    id: "our-father",
    title: "Our Father (The Lord's Prayer)",
    text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    category: "basic",
    language: "english",
    tags: ["essential", "daily"]
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    category: "marian",
    language: "english",
    tags: ["essential", "rosary"]
  },
  {
    id: "glory-be",
    title: "Glory Be (Doxology)",
    text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
    category: "basic",
    language: "english",
    tags: ["essential", "rosary"]
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
    text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    category: "creed",
    language: "english",
    tags: ["essential", "rosary"]
  },
  {
    id: "act-of-contrition",
    title: "Act of Contrition",
    text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of thy just punishments, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve with the help of Thy grace to sin no more and to avoid the near occasion of sin. Amen.",
    category: "penitential",
    language: "english",
    tags: ["confession", "reconciliation"]
  },
  {
    id: "memorare",
    title: "Memorare",
    text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
    category: "marian",
    language: "english",
    tags: ["marian"]
  }
]

export async function GET(req: NextRequest) {
  try {
    // Rate limiting
    const clientId = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'anonymous';
    
    const rateLimit = await checkRateLimit(clientId, 60, 60); // 60 req/min
    
    if (!rateLimit.allowed) {
      const retryAfterSeconds = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
      return Response.json(
        { error: 'Rate limit exceeded' },
        { 
          status: 429,
          headers: { 'Retry-After': String(retryAfterSeconds) }
        }
      );
    }
    
    const url = new URL(req.url)
    
    // Validate query parameters
    const queryParams = {
      category: url.searchParams.get("category"),
      tag: url.searchParams.get("tag"),
      search: url.searchParams.get("search"),
      limit: url.searchParams.get("limit")
    }
    
    const validationResult = prayerQuerySchema.safeParse(queryParams)
    
    if (!validationResult.success && !url.searchParams.get("id")) {
      return Response.json(
        { error: 'Invalid parameters', details: validationResult.error.flatten() },
        { status: 400 }
      )
    }
    
    const id = url.searchParams.get("id")
    const category = url.searchParams.get("category")
    const tag = url.searchParams.get("tag")
    const search = url.searchParams.get("search")?.toLowerCase()
    const limit = parseInt(url.searchParams.get("limit") || "0")
    
    // Get a specific prayer by ID
    if (id) {
      const prayer = prayers.find((p) => p.id === id)
      
      if (!prayer) {
        return Response.json({ error: "Prayer not found" }, { status: 404 })
      }
      
      return Response.json(prayer)
    }
    
    // Otherwise, filter prayers based on query parameters
    let filteredPrayers = [...prayers]
    
    // Filter by category
    if (category) {
      filteredPrayers = filteredPrayers.filter((p) => p.category === category)
    }
    
    // Filter by tag
    if (tag) {
      filteredPrayers = filteredPrayers.filter((p) => p.tags.includes(tag))
    }
    
    // Filter by search term
    if (search) {
      filteredPrayers = filteredPrayers.filter(p => 
        p.title.toLowerCase().includes(search) || 
        p.text.toLowerCase().includes(search)
      )
    }
    
    // Apply limit
    if (limit > 0) {
      filteredPrayers = filteredPrayers.slice(0, limit)
    }
    
    return Response.json(filteredPrayers)
  } catch (error) {
    // Log error securely (in production, use proper logging service)
    if (process.env.NODE_ENV === 'development') {
      console.error("Error fetching prayers:", error)
    }
    return Response.json(
      { error: "Failed to fetch prayer data" },
      { status: 500 }
    )
  }
}