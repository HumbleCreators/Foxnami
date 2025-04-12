import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Award, Heart, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Golden-roasted makhana"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Foxnami: Taste the Authentic, Nutrient-Rich Makhana of Bihar
              </h1>
              <p className="text-lg md:text-xl">
                Experience the premium quality of hand-harvested, traditionally processed fox nuts direct from the farms
                of Bihar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30"
                  asChild
                >
                  <Link href="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Preview Section */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Foxnami Makhana?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
                <p className="text-muted-foreground mb-4">Grown naturally without pesticides or chemicals</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nutrient-Rich</h3>
                <p className="text-muted-foreground mb-4">High in protein, low in calories, packed with antioxidants</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Naturally Healthy</h3>
                <p className="text-muted-foreground mb-4">Gluten-free, low glycemic index, heart-friendly snack</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="link" size="lg" className="gap-2 text-primary" asChild>
                <Link href="/benefits">
                  Learn more about the benefits
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Premium Makhana Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Classic Roasted Makhana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Classic Roasted Makhana</h3>
                  <p className="text-muted-foreground mb-4">
                    Our signature lightly salted makhana, perfectly roasted to bring out the natural flavors.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Spicy Masala Makhana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Spicy Masala Makhana</h3>
                  <p className="text-muted-foreground mb-4">
                    A tantalizing blend of traditional Indian spices for those who love a flavorful kick.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Premium Raw Makhana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Raw Makhana</h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality raw makhana, perfect for cooking or roasting at home with your favorite flavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Journey Preview */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-lg">
                  Foxnami was born from a passion to bring the authentic taste of Bihar's makhana to the world while
                  supporting the traditional farmers who have cultivated this superfood for generations.
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/journey">Read Our Story</Link>
                </Button>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Makhana farms in Bihar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Latest From Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Health Benefits of Makhana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">March 5, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">The Top 10 Health Benefits of Makhana</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover why nutritionists around the world are recommending makhana as a superfood...
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog/health-benefits-of-makhana">Read More</Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Makhana Farming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">February 20, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">Traditional Makhana Farming in Bihar</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore the centuries-old techniques used by farmers in the Mithila region to cultivate makhana...
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog/traditional-makhana-farming">Read More</Link>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Makhana Recipes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">January 15, 2025</p>
                  <h3 className="text-xl font-semibold mb-2">5 Delicious Makhana Recipes to Try at Home</h3>
                  <p className="text-muted-foreground mb-4">
                    From savory to sweet, these creative recipes will transform how you enjoy makhana...
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog/makhana-recipes">Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/blog">View All Blog Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Authentic Taste of Bihar</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our premium makhana products
            </p>
            <Button size="lg" variant="secondary" className="text-primary font-semibold text-lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

