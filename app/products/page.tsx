import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Products | Foxnami Makhana",
  description:
    "Explore our range of premium makhana products, from classic roasted to flavored varieties, all sourced directly from Bihar.",
}

export default function ProductsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Foxnami products"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Premium Makhana Products</h1>
            <p className="text-lg md:text-xl">
              Discover our range of high-quality makhana products, crafted with care and sourced directly from Bihar
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Classic Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic Makhana</h3>
                <p className="text-muted-foreground mb-4">
                  Our traditional makhana range includes raw and lightly roasted options, perfect for those who
                  appreciate the natural flavor.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Flavored Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Flavored Makhana</h3>
                <p className="text-muted-foreground mb-4">
                  Experience makhana in exciting flavors like spicy masala, cheese, caramel, and more - perfect for
                  snacking.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Bulk Makhana" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bulk Makhana</h3>
                <p className="text-muted-foreground mb-4">
                  Premium quality raw makhana available in bulk quantities for businesses, restaurants, and large
                  families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Classic Roasted Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Classic Roasted Makhana</h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Bestseller</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our signature lightly salted makhana, perfectly roasted to bring out the natural flavors.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Available in:</p>
                    <p className="font-medium">100g, 250g, 500g</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Spicy Masala Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Spicy Masala Makhana</h3>
                  <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">Popular</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A tantalizing blend of traditional Indian spices for those who love a flavorful kick.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Available in:</p>
                    <p className="font-medium">100g, 250g</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Premium Raw Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Premium Raw Makhana</h3>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Organic</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  High-quality raw makhana, perfect for cooking or roasting at home with your favorite flavors.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Available in:</p>
                    <p className="font-medium">250g, 500g, 1kg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Caramel Makhana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Caramel Makhana</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">New</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Sweet caramelized makhana that satisfies your sweet tooth while still being a healthier alternative to
                  candy.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Available in:</p>
                    <p className="font-medium">100g, 200g</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Cheese Makhana" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Cheese Makhana</h3>
                  <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">Popular</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Cheesy goodness meets the crunch of makhana in this irresistible snack that kids and adults both love.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Available in:</p>
                    <p className="font-medium">100g, 200g</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Makhana Gift Box"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Makhana Gift Box</h3>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Gift</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  An elegant assortment of our premium makhana varieties in a beautiful gift box, perfect for special
                  occasions.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Contains:</p>
                    <p className="font-medium">4 flavors, 100g each</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16">
        <div className="container">
          <div className="bg-slate-100 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bulk Orders & Wholesale</h2>
                <p className="text-lg mb-6">
                  We offer special pricing for bulk orders and wholesale customers. Our premium makhana is perfect for:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Restaurants and cafes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Health food stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Snack manufacturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Corporate gifting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Event catering</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Contact for Wholesale Pricing</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Bulk makhana packaging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Quality Commitment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Quality Testing"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigorous Testing</h3>
              <p className="text-muted-foreground">
                Every batch undergoes thorough quality testing to ensure it meets our high standards.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Sustainable Packaging"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Packaging</h3>
              <p className="text-muted-foreground">
                We use eco-friendly packaging materials to minimize our environmental impact.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Certifications"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
              <p className="text-muted-foreground">
                Our products are FSSAI approved and certified organic, ensuring the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to place your order or inquire about our products
          </p>
          <Button size="lg" variant="secondary" className="text-primary font-semibold text-lg" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

