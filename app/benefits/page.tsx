import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Award, MapPin, Heart, ThumbsUp, ShieldCheck, Brain, Dumbbell } from "lucide-react"

export const metadata = {
  title: "Benefits of Makhana | Foxnami",
  description:
    "Discover the numerous health benefits of Foxnami Makhana, from being nutrient-rich to supporting heart health and weight management.",
}

export default function BenefitsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Makhana benefits"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">The Incredible Benefits of Makhana</h1>
            <p className="text-lg md:text-xl">
              Discover why this ancient superfood from Bihar has become a modern health sensation
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nature's Perfect Snack</h2>
            <p className="text-lg text-muted-foreground">
              Makhana, also known as fox nuts or lotus seeds, has been consumed for centuries in traditional Indian and
              Chinese medicine. Today, modern science is confirming what ancient wisdom has long known - makhana is a
              nutritional powerhouse with numerous health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-muted-foreground">
                Our makhana is grown naturally in the pristine ponds of Bihar without any pesticides, chemicals, or
                artificial fertilizers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutrient-Rich</h3>
              <p className="text-muted-foreground">
                Packed with protein, fiber, magnesium, potassium, phosphorus, iron, and antioxidants while being low in
                sodium and fat.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct from Bihar</h3>
              <p className="text-muted-foreground">
                Sourced directly from traditional farmers in Bihar, ensuring authenticity, quality, and support for
                local communities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Naturally Healthy</h3>
              <p className="text-muted-foreground">
                Gluten-free, low glycemic index, and heart-friendly, making it an ideal snack for people of all ages and
                dietary needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deliciously Crunchy</h3>
              <p className="text-muted-foreground">
                Perfect roasted texture with authentic flavor that makes it a satisfying alternative to unhealthy
                snacks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Antioxidant Power</h3>
              <p className="text-muted-foreground">
                Rich in antioxidants that help fight free radicals, reduce inflammation, and support overall cellular
                health.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brain Health</h3>
              <p className="text-muted-foreground">
                Contains nutrients that support cognitive function and may help improve memory and concentration.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weight Management</h3>
              <p className="text-muted-foreground">
                Low in calories but high in protein and fiber, helping you feel full longer and support healthy weight
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Information */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nutritional Profile</h2>
              <p className="text-lg mb-6">
                Makhana is a nutritional powerhouse packed with essential nutrients while being low in calories. Here's
                what you get in every serving:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Protein</span>
                  <span>9.7g per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Carbohydrates</span>
                  <span>76.9g per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Fat</span>
                  <span>0.1g per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Fiber</span>
                  <span>14.5g per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Calcium</span>
                  <span>60mg per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Iron</span>
                  <span>1.4mg per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Magnesium</span>
                  <span>67mg per 100g</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span className="font-medium">Calories</span>
                  <span>347 kcal per 100g</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Makhana nutritional benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Health Benefits of Makhana</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Heart Health</h3>
              <p className="text-muted-foreground mb-4">
                Makhana is low in sodium and contains magnesium which helps regulate blood pressure. The antioxidants
                present in makhana help reduce inflammation and oxidative stress, which are risk factors for heart
                disease.
              </p>
              <p className="text-muted-foreground">
                Regular consumption may help maintain healthy cholesterol levels and improve overall cardiovascular
                health.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Diabetes Management</h3>
              <p className="text-muted-foreground mb-4">
                With its low glycemic index, makhana causes a slower rise in blood sugar levels compared to many other
                snacks. This makes it an excellent option for people with diabetes or those at risk.
              </p>
              <p className="text-muted-foreground">
                The high fiber content also helps in slowing down the absorption of sugar in the bloodstream.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Digestive Health</h3>
              <p className="text-muted-foreground mb-4">
                The significant fiber content in makhana promotes healthy digestion by preventing constipation and
                supporting the growth of beneficial gut bacteria.
              </p>
              <p className="text-muted-foreground">
                It also has a mild diuretic effect which helps in detoxifying the body and maintaining kidney health.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Anti-Aging Properties</h3>
              <p className="text-muted-foreground mb-4">
                Rich in antioxidants, makhana helps combat oxidative stress and free radical damage, which are major
                contributors to aging and age-related diseases.
              </p>
              <p className="text-muted-foreground">
                Regular consumption may help maintain youthful skin and reduce the appearance of fine lines and
                wrinkles.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Who Can Benefit from Makhana?</h3>
            <ul className="space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Fitness Enthusiasts:</strong> High protein, low calorie snack that supports muscle recovery
                  and growth
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Weight Watchers:</strong> Filling snack that satisfies hunger without adding excessive
                  calories
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Diabetics:</strong> Low glycemic index food that helps maintain stable blood sugar levels
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Heart Patients:</strong> Low sodium, heart-healthy snack that supports cardiovascular health
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Children:</strong> Nutritious snack that supports growth and development
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Elderly:</strong> Easy-to-digest food that provides essential nutrients for aging bodies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Pregnant Women:</strong> Source of folate and other nutrients important during pregnancy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Benefits of Foxnami Makhana</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to incorporate this superfood into your diet? Explore our range of premium makhana products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary font-semibold" asChild>
              <Link href="/products">View Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

