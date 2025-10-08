import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

export default function CollectionPage() {
  const products = [
    {
      id: 1,
      name: "Silk Evening Gown",
      price: "$2,499",
      category: "Evening Wear",
      description: "Luxurious silk gown with hand-embroidered details",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Designer Cocktail Dress",
      price: "$1,899",
      category: "Cocktail",
      description: "Elegant cocktail dress with intricate beading",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Summer Maxi Dress",
      price: "$899",
      category: "Casual Elegance",
      description: "Flowing maxi dress in premium linen",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      name: "Velvet Ball Gown",
      price: "$3,299",
      category: "Evening Wear",
      description: "Stunning velvet gown with cathedral train",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      name: "Lace A-Line Dress",
      price: "$1,599",
      category: "Cocktail",
      description: "Delicate lace dress with modern silhouette",
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=600&fit=crop",
    },
    {
      id: 6,
      name: "Chiffon Wrap Dress",
      price: "$749",
      category: "Day Wear",
      description: "Elegant wrap dress in flowing chiffon",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    },
    {
      id: 7,
      name: "Satin Midi Dress",
      price: "$1,299",
      category: "Cocktail",
      description: "Sophisticated midi dress in luxe satin",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=600&fit=crop",
    },
    {
      id: 8,
      name: "Sequin Evening Gown",
      price: "$2,899",
      category: "Evening Wear",
      description: "Show-stopping gown with all-over sequins",
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=400&h=600&fit=crop",
    },
    {
      id: 9,
      name: "Floral Maxi Dress",
      price: "$999",
      category: "Casual Elegance",
      description: "Romantic maxi dress with hand-painted florals",
      image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400&h=600&fit=crop",
    },
  ]

  return (
    <div className="flex flex-col py-12">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-4xl font-bold mb-4 md:text-5xl">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated selection of luxury dresses and gowns. 
            Each piece is selected for its exceptional quality, timeless design, 
            and ability to make you feel extraordinary.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[2/3] relative overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
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
              <CardFooter className="p-6 pt-0 gap-2">
                <Button variant="default" className="flex-1" asChild>
                  <Link href="/contact">Inquire</Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/chatbot">Ask Assistant</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-2xl bg-muted p-12">
            <h2 className="font-playfair text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our AI assistant can help you find the perfect dress based on your preferences
            </p>
            <Button asChild size="lg">
              <Link href="/chatbot">Chat with Our Assistant</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
