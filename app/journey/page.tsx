import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Journey | Foxnami Makhana",
  description:
    "Learn about Foxnami's journey from the ponds of Bihar to bringing premium quality makhana to customers worldwide.",
}

export default function JourneyPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Foxnami journey"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Journey</h1>
            <p className="text-lg md:text-xl">
              From the pristine ponds of Bihar to your table - the story of Foxnami Makhana
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Foxnami was born from a deep connection to the land and traditions of Bihar, India. Our founder, who
                grew up watching his grandfather cultivate makhana in the pristine ponds of the Mithila region, was
                inspired to share this incredible superfood with the world.
              </p>
              <p>
                After years of working in the corporate world, he returned to his roots with a mission: to bring
                authentic, high-quality makhana to consumers while ensuring fair compensation for the farmers who have
                been cultivating this crop for generations.
              </p>
              <p>
                What started as a small operation working with just five farming families has now grown into a network
                of over 100 farmers across Bihar, all practicing traditional, sustainable farming methods that have been
                passed down through generations.
              </p>
              <p>
                The name "Foxnami" combines "fox nuts" (the English name for makhana) with "nami," which means
                "renowned" in Sanskrit - reflecting our commitment to making this ancient superfood renowned worldwide
                for its quality and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey Through the Years</h2>

          <div className="relative border-l border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl space-y-12 pl-8 md:pl-0">
            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8">
                <h3 className="text-xl font-semibold mb-2">2018</h3>
                <p className="text-muted-foreground">
                  Foxnami was founded with a mission to bring authentic Bihar makhana to the world while supporting
                  local farmers.
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div></div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div className="md:pl-8">
                <h3 className="text-xl font-semibold mb-2">2019</h3>
                <p className="text-muted-foreground">
                  Expanded our farmer network to 25 families and introduced our first flavored makhana products.
                </p>
              </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8">
                <h3 className="text-xl font-semibold mb-2">2020</h3>
                <p className="text-muted-foreground">
                  Despite pandemic challenges, we established our processing facility in Patna and received organic
                  certification.
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div></div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div className="md:pl-8">
                <h3 className="text-xl font-semibold mb-2">2021</h3>
                <p className="text-muted-foreground">
                  Launched our e-commerce platform and began shipping nationwide, reaching customers across India.
                </p>
              </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8">
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <p className="text-muted-foreground">
                  Implemented our farmer education program to promote sustainable farming practices and higher yields.
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div></div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div className="md:pl-8">
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-muted-foreground">
                  Expanded to international markets and introduced our premium gift boxes for corporate and retail
                  customers.
                </p>
              </div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8">
                <h3 className="text-xl font-semibold mb-2">2024</h3>
                <p className="text-muted-foreground">
                  Reached the milestone of working with over 100 farming families and launched our sustainable packaging
                  initiative.
                </p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div></div>
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div className="md:pl-8">
                <h3 className="text-xl font-semibold mb-2">2025</h3>
                <p className="text-muted-foreground">
                  Looking ahead: Our vision includes expanding our product line and establishing a farmer-owned
                  cooperative model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Farmers */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Farmers Behind Foxnami</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Makhana farmers in Bihar"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg">
                At the heart of Foxnami are the skilled farmers of Bihar who have been cultivating makhana for
                generations. Their expertise and traditional knowledge are irreplaceable.
              </p>
              <p className="text-lg">
                We work directly with over 100 farming families across the Mithila region, ensuring fair compensation
                and sustainable livelihoods. By eliminating middlemen, we're able to pay our farmers up to 40% more than
                they would typically receive.
              </p>
              <p className="text-lg">
                Our farmer education program provides training on sustainable farming practices, water conservation, and
                organic cultivation methods to improve yields while preserving the environment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Farmer story - Rajesh Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
                <p className="text-sm text-muted-foreground mb-4">Farming makhana for 25 years</p>
                <p className="text-muted-foreground">
                  "Working with Foxnami has transformed my life. The stable income has allowed me to send my children to
                  school and improve our home."
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Farmer story - Sunita Devi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sunita Devi</h3>
                <p className="text-sm text-muted-foreground mb-4">First-generation female makhana farmer</p>
                <p className="text-muted-foreground">
                  "I started farming makhana five years ago. The training from Foxnami helped me become one of the most
                  productive farmers in my village."
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Farmer story - Manoj Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Manoj Singh</h3>
                <p className="text-sm text-muted-foreground mb-4">Third-generation makhana farmer</p>
                <p className="text-muted-foreground">
                  "My grandfather taught me how to cultivate makhana. With Foxnami's support, I've been able to preserve
                  our traditions while adopting modern sustainable practices."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Sustainability</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                We promote organic farming practices that avoid chemical pesticides and fertilizers, preserving the
                natural ecosystem of the ponds where makhana grows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Packaging</h3>
              <p className="text-muted-foreground">
                We're transitioning to fully biodegradable packaging materials made from plant-based sources to reduce
                our environmental footprint.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Water Conservation</h3>
              <p className="text-muted-foreground">
                Our farmers implement water conservation techniques to maintain the health of the ponds and ensure
                sustainable water usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As we look ahead, we're committed to expanding our impact while staying true to our core values of
              quality, sustainability, and farmer welfare.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Farmer Cooperative:</strong> We're working towards establishing a farmer-owned cooperative that
                will give our farming partners greater ownership and decision-making power.
              </p>
              <p className="text-lg">
                <strong>Product Innovation:</strong> We're exploring new makhana-based products that make this superfood
                accessible in more ways while preserving its nutritional benefits.
              </p>
              <p className="text-lg">
                <strong>Global Reach:</strong> We aim to introduce the benefits of authentic Bihar makhana to
                health-conscious consumers worldwide.
              </p>
              <p className="text-lg">
                <strong>Research:</strong> We're partnering with agricultural universities to research and develop more
                sustainable farming methods and higher-yielding makhana varieties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Be Part of Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in bringing the authentic taste and benefits of Bihar's makhana to the world while supporting
            traditional farmers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary font-semibold" asChild>
              <Link href="/products">Explore Our Products</Link>
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

