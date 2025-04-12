import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Blog | Foxnami Makhana",
  description: "Explore our blog for articles about makhana benefits, recipes, farming practices, and more.",
}

export default function BlogPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Foxnami blog"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Foxnami Blog</h1>
            <p className="text-lg md:text-xl">
              Insights, recipes, and stories about makhana and the communities that cultivate it
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Post</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="The Ancient History of Makhana"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">March 10, 2025</p>
              <h3 className="text-2xl font-bold">
                The Ancient History of Makhana: From Royal Tables to Modern Superfood
              </h3>
              <p className="text-lg text-muted-foreground">
                For centuries, makhana has been revered in Indian and Chinese cultures for its nutritional and medicinal
                properties. Once reserved for royalty and special occasions, this aquatic crop has a fascinating history
                that spans continents and civilizations.
              </p>
              <p className="text-lg text-muted-foreground">
                In this comprehensive article, we explore the historical significance of makhana, its cultural
                importance in different regions, and how it has evolved to become a globally recognized superfood in
                modern times.
              </p>
              <Button asChild>
                <Link href="/blog/ancient-history-of-makhana">Read Full Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                  Discover why nutritionists around the world are recommending makhana as a superfood. From its
                  impressive protein content to its antioxidant properties, we explore the many ways makhana can
                  contribute to your health and wellbeing.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/health-benefits-of-makhana">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                  Explore the centuries-old techniques used by farmers in the Mithila region to cultivate makhana. From
                  pond preparation to harvesting and processing, learn about the skilled craftsmanship that goes into
                  every kernel of makhana.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/traditional-makhana-farming">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                  From savory to sweet, these creative recipes will transform how you enjoy makhana. Whether you're
                  looking for a healthy snack, a crunchy addition to soups, or a unique dessert ingredient, these
                  recipes have you covered.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/makhana-recipes">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Makhana vs Popcorn"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">January 5, 2025</p>
                <h3 className="text-xl font-semibold mb-2">Makhana vs Popcorn: Which is the Healthier Snack?</h3>
                <p className="text-muted-foreground mb-4">
                  In this nutritional showdown, we compare two popular snacks: makhana and popcorn. See how they stack
                  up in terms of calories, protein, fiber, and overall nutritional value to make an informed choice for
                  your snacking needs.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/makhana-vs-popcorn">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Makhana for Weight Loss"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">December 10, 2024</p>
                <h3 className="text-xl font-semibold mb-2">How Makhana Can Support Your Weight Loss Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for a satisfying snack that won't derail your diet? Discover how makhana's unique nutritional
                  profile makes it an excellent ally for weight management, and learn practical tips for incorporating
                  it into your daily routine.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/makhana-for-weight-loss">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sustainable Makhana Farming"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">November 25, 2024</p>
                <h3 className="text-xl font-semibold mb-2">
                  Sustainable Makhana Farming: Preserving Tradition and Environment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn how traditional makhana farming practices are inherently sustainable and how modern innovations
                  are helping farmers increase yields while minimizing environmental impact. Discover Foxnami's
                  commitment to eco-friendly cultivation.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/sustainable-makhana-farming">Read More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link
              href="/blog/category/health-benefits"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-6 rounded-lg text-center"
            >
              <h3 className="font-semibold text-primary">Health Benefits</h3>
              <p className="text-sm text-muted-foreground mt-2">8 articles</p>
            </Link>

            <Link
              href="/blog/category/recipes"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-6 rounded-lg text-center"
            >
              <h3 className="font-semibold text-primary">Recipes</h3>
              <p className="text-sm text-muted-foreground mt-2">12 articles</p>
            </Link>

            <Link
              href="/blog/category/farming"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-6 rounded-lg text-center"
            >
              <h3 className="font-semibold text-primary">Farming</h3>
              <p className="text-sm text-muted-foreground mt-2">6 articles</p>
            </Link>

            <Link
              href="/blog/category/nutrition"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-6 rounded-lg text-center"
            >
              <h3 className="font-semibold text-primary">Nutrition</h3>
              <p className="text-sm text-muted-foreground mt-2">9 articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">Stay updated with our latest articles, recipes, and product announcements.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                required
              />
              <Button variant="secondary" className="text-primary font-medium">
                Subscribe
              </Button>
            </form>
            <p className="text-xs mt-4 text-white/80">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

