import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Clock, MessageCircle } from "lucide-react"

export default function Home() {
  const featuredProducts = [
    {
      name: "Silk Evening Gown",
      price: "$2,499",
      description: "Luxurious silk gown perfect for formal occasions",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    },
    {
      name: "Designer Cocktail Dress",
      price: "$1,899",
      description: "Elegant cocktail dress with intricate beading",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    },
    {
      name: "Summer Maxi Dress",
      price: "$899",
      description: "Flowing maxi dress in premium linen",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Where Luxury Meets{" "}
              <span className="text-primary">Elegance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover exquisite women's fashion in the heart of downtown San Diego. 
              Each piece in our collection is carefully curated to embody sophistication and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/collection">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/chatbot">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with Our Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-20">
          <Sparkles className="h-24 w-24 text-primary" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces from our latest arrivals, each one a masterpiece of design and craftsmanship
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[2/3] relative overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="font-playfair text-xl mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/collection">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/collection">
                View Full Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Curated Excellence
              </h3>
              <p className="text-muted-foreground">
                Each piece is meticulously selected to ensure the highest quality and unique design
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Personal Appointments
              </h3>
              <p className="text-muted-foreground">
                Book a private styling session with our expert fashion consultants
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                AI Fashion Assistant
              </h3>
              <p className="text-muted-foreground">
                Get instant answers to your fashion questions with our intelligent chatbot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 p-12 text-center text-white">
            <h2 className="font-playfair text-3xl font-bold mb-4 md:text-4xl">
              Visit Our Downtown San Diego Location
            </h2>
            <p className="text-lg mb-8 opacity-90">
              789 Fashion Avenue, Downtown San Diego, CA 92101
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
