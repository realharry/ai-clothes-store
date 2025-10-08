import { NextRequest, NextResponse } from 'next/server'
import { knowledgeBase } from '@/lib/data/knowledge-base'

// Simple RAG implementation without external dependencies
// This will search the knowledge base for relevant information

function cosineSimilarity(vec1: number[], vec2: number[]): number {
  const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0)
  const mag1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0))
  const mag2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0))
  return dotProduct / (mag1 * mag2)
}

function simpleEmbedding(text: string): number[] {
  // Simple word-based embedding for demo purposes
  const words = text.toLowerCase().split(/\W+/).filter(Boolean)
  const vocab = new Set([
    'store', 'boutique', 'location', 'address', 'hours', 'open', 'closed',
    'dress', 'gown', 'clothing', 'fashion', 'style', 'wear',
    'price', 'cost', 'expensive', 'luxury', 'quality',
    'appointment', 'booking', 'schedule', 'reservation',
    'silk', 'velvet', 'lace', 'chiffon', 'satin', 'fabric',
    'evening', 'cocktail', 'casual', 'formal', 'elegant',
    'size', 'fit', 'alteration', 'tailor',
    'return', 'exchange', 'policy',
    'care', 'clean', 'wash', 'maintain',
    'parking', 'contact', 'email', 'phone',
    'gift', 'special', 'order', 'custom'
  ])
  
  const embedding = Array.from(vocab).map(word => 
    words.filter(w => w.includes(word) || word.includes(w)).length
  )
  
  return embedding
}

function findRelevantContext(query: string, topK: number = 3): string[] {
  const queryEmbedding = simpleEmbedding(query)
  
  const scoredDocs = knowledgeBase.map(doc => ({
    content: doc.content,
    score: cosineSimilarity(queryEmbedding, simpleEmbedding(doc.content))
  }))
  
  scoredDocs.sort((a, b) => b.score - a.score)
  
  return scoredDocs.slice(0, topK).map(doc => doc.content)
}

function generateResponse(query: string, context: string[]): string {
  const contextStr = context.join('\n\n')
  
  // Simple pattern matching for common queries
  const lowerQuery = query.toLowerCase()
  
  if (lowerQuery.includes('hour') || lowerQuery.includes('open') || lowerQuery.includes('closed')) {
    return `We are open:\n• Monday - Friday: 10:00 AM - 7:00 PM\n• Saturday: 10:00 AM - 8:00 PM\n• Sunday: 11:00 AM - 6:00 PM\n\nYou can visit us at 789 Fashion Avenue, Downtown San Diego, CA 92101. Feel free to call us at (619) 555-ELEGANT if you need any assistance!`
  }
  
  if (lowerQuery.includes('location') || lowerQuery.includes('address') || lowerQuery.includes('where')) {
    return `Elegance Boutique is located at:\n\n789 Fashion Avenue\nDowntown San Diego, CA 92101\n\nWe're in the heart of downtown San Diego's Gaslamp Quarter. Complimentary valet parking is available, and there's also a public parking garage on Fashion Avenue. Looking forward to seeing you!`
  }
  
  if (lowerQuery.includes('appointment') || lowerQuery.includes('booking') || lowerQuery.includes('schedule')) {
    return `We'd love to help you book a personal styling appointment! You can schedule one by:\n\n• Calling us at (619) 555-ELEGANT\n• Emailing hello@eleganceboutique.com\n• Visiting our contact page\n\nWe recommend booking at least 48 hours in advance. Private appointments are complimentary with a purchase. Our stylists will provide personalized recommendations based on your preferences and occasion.`
  }
  
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('expensive')) {
    return `Our collection features luxury pieces ranging from $749 to $3,299:\n\n• Evening Gowns: $2,499 - $3,299\n• Cocktail Dresses: $1,299 - $1,899\n• Casual Elegant Wear: $749 - $999\n\nEach piece is crafted from premium materials like silk, velvet, lace, and satin. We also offer alteration services and can special order specific sizes or styles. Would you like to know more about a specific type of dress?`
  }
  
  if (lowerQuery.includes('return') || lowerQuery.includes('exchange') || lowerQuery.includes('refund')) {
    return `Our return policy:\n\n• Returns accepted within 14 days of purchase\n• Items must be unworn with original tags\n• Store credit provided for full-price items\n• Sale items are final sale\n• Altered items cannot be returned\n\nWe want you to love your purchase! Exchanges are always welcome, and our team is happy to help you find the perfect piece.`
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('email')) {
    return `You can reach us:\n\n📞 Phone: (619) 555-ELEGANT\n📧 Email: hello@eleganceboutique.com\n📍 Address: 789 Fashion Avenue, Downtown San Diego, CA 92101\n\nPhone hours: Monday - Saturday, 10am - 7pm\nWe respond to emails within 24 hours.\n\nHow else can I assist you today?`
  }
  
  if (lowerQuery.includes('dress') || lowerQuery.includes('gown') || lowerQuery.includes('collection')) {
    return `Our exquisite collection includes:\n\n✨ Evening Wear: Silk Evening Gowns, Velvet Ball Gowns, Sequin Gowns ($2,499-$3,299)\n\n🥂 Cocktail Dresses: Designer beaded dresses, Lace A-line dresses, Satin midi dresses ($1,299-$1,899)\n\n🌸 Casual Elegant: Summer maxi dresses, Floral dresses, Chiffon wrap dresses ($749-$999)\n\nEach piece is carefully curated for quality and timeless elegance. Would you like styling advice for a specific occasion?`
  }
  
  // Default response using context
  if (context.length > 0 && contextStr.length > 50) {
    return `Based on our boutique information:\n\n${contextStr}\n\nIs there anything specific you'd like to know more about? I'm here to help!`
  }
  
  return `Thank you for your interest in Elegance Boutique! I'm here to help you with:\n\n• Store hours and location\n• Our dress collection and pricing\n• Booking styling appointments\n• Fashion and styling advice\n• Return policies and services\n• Any other questions about our boutique\n\nWhat would you like to know?`
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }
    
    // Find relevant context from knowledge base
    const relevantContext = findRelevantContext(message)
    
    // Generate response
    const response = generateResponse(message, relevantContext)
    
    return NextResponse.json({ 
      response,
      sources: relevantContext 
    })
    
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
