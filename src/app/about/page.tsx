import { Sparkles, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col py-12">
      <div className="container px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="font-playfair text-4xl font-bold mb-6 md:text-5xl">
            About Elegance Boutique
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2015, Elegance Boutique has been San Diego's premier destination 
            for luxury women's fashion. Located in the heart of downtown, we bring 
            together exceptional craftsmanship, timeless elegance, and personalized service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid gap-12 md:grid-cols-2 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Elegance Boutique was founded with a simple yet powerful vision: 
                to create a sanctuary where women could discover clothing that not only 
                fits perfectly but also empowers them to feel their absolute best.
              </p>
              <p>
                Our founder, inspired by the sophisticated charm of European fashion houses 
                and the vibrant energy of California, carefully curates each piece in our collection. 
                We believe that luxury is not just about price tags—it's about quality, 
                attention to detail, and the feeling you get when you wear something truly special.
              </p>
              <p>
                Today, we serve discerning clients from across Southern California and beyond, 
                offering them not just beautiful clothing, but an experience that celebrates 
                individuality and style.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Elegance Boutique Interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Curated Excellence
              </h3>
              <p className="text-muted-foreground">
                Every piece in our collection is personally selected and vetted for quality, 
                design, and timeless appeal. We don't follow trends—we set them.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Personal Touch
              </h3>
              <p className="text-muted-foreground">
                We offer one-on-one styling consultations, private appointments, 
                and personalized recommendations to ensure you find exactly what you're looking for.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Community Focus
              </h3>
              <p className="text-muted-foreground">
                We're proud to be part of downtown San Diego's vibrant community. 
                We support local artisans and participate in community events year-round.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Visit Us in Downtown San Diego
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience our collection in person at our beautiful downtown location. 
              Our expert stylists are ready to help you find the perfect piece.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold">789 Fashion Avenue</p>
              <p>Downtown San Diego, CA 92101</p>
              <p className="pt-2">Monday - Friday: 10am - 7pm</p>
              <p>Saturday: 10am - 8pm</p>
              <p>Sunday: 11am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
