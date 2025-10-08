# Elegance Boutique - AI-Powered Women's Fashion Store

Business website for a high-end women's clothing store located in downtown San Diego. Built with Next.js 14+, TypeScript, Tailwind CSS v4, and Shadcn/UI. Features an intelligent LLM RAG chatbot for answering fashion-related questions and assisting customers.

## Features

- 🎨 **Modern, Luxurious Design**: Bright and elegant UI with full dark/light mode support
- 👗 **Product Gallery**: Showcase of luxury dresses with pricing and detailed information
- 🤖 **AI Chatbot Assistant**: RAG-powered chatbot that answers questions about:
  - Store hours and location
  - Product collection and pricing
  - Appointment booking
  - Fashion and styling advice
  - Return policies and services
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Fast Performance**: Built with Next.js 14+ App Router for optimal speed
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI with Radix UI primitives
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **AI/RAG**: Simple vector similarity search with knowledge base

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   │   └── chat/          # Chatbot API endpoint
│   │   ├── chatbot/           # Chatbot UI page
│   │   ├── collection/        # Product collection page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/                # Shadcn UI components
│   │   ├── header.tsx         # Site header with navigation
│   │   ├── footer.tsx         # Site footer
│   │   ├── mode-toggle.tsx    # Dark/light mode toggle
│   │   └── theme-provider.tsx # Theme context provider
│   └── lib/                   # Utility functions
│       ├── data/              # Data and knowledge base
│       │   └── knowledge-base.ts
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── components.json            # Shadcn UI configuration
└── package.json              # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realharry/ai-clothes-store.git
cd ai-clothes-store
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Copy the environment variables file:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Hero section, featured products, and call-to-action
- **Collection** (`/collection`) - Full product catalog with 9 luxury dresses
- **About** (`/about`) - Store history, values, and location information
- **Contact** (`/contact`) - Contact form, store details, and map
- **Chatbot** (`/chatbot`) - AI fashion assistant with RAG capabilities

## AI Chatbot Features

The chatbot uses a simple but effective RAG (Retrieval-Augmented Generation) system:

1. **Knowledge Base**: 20+ curated documents about the store, products, and services
2. **Vector Search**: Simple embedding-based similarity search
3. **Contextual Responses**: Answers are grounded in the knowledge base
4. **Pattern Matching**: Smart detection of common query types
5. **Quick Questions**: Pre-configured buttons for common inquiries

### Chatbot Topics

- Store hours and location
- Product collection and pricing
- Appointment scheduling
- Fashion styling advice
- Care instructions for fabrics
- Return and exchange policies
- Gift services and special orders

## Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 346.8 77.2% 49.8%;  /* Main brand color */
  --secondary: 240 4.8% 95.9%;    /* Secondary color */
  /* ... more colors */
}
```

### Adding Products

Edit the products array in `src/app/collection/page.tsx` to add or modify products.

### Updating Knowledge Base

Add or modify entries in `src/lib/data/knowledge-base.ts` to update the chatbot's knowledge.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Then deploy the `.next` folder and `public` directory to your hosting provider.

## Business Information

**Elegance Boutique**
- Address: 789 Fashion Avenue, Downtown San Diego, CA 92101
- Phone: (619) 555-ELEGANT
- Email: hello@eleganceboutique.com
- Hours:
  - Monday - Friday: 10am - 7pm
  - Saturday: 10am - 8pm
  - Sunday: 11am - 6pm

## Future Enhancements

Potential features to add:
- Integration with real LLM APIs (OpenAI, Anthropic)
- ChromaDB for production-grade vector storage
- Shopping cart and checkout functionality
- User accounts and order history
- Email notifications
- Blog/magazine section
- Social media integration
- Customer reviews and testimonials

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Support

For questions or support, please open an issue on GitHub or contact hello@eleganceboutique.com.
