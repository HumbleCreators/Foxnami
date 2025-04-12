import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | Foxnami Makhana",
  description:
    "Get in touch with Foxnami for inquiries about our premium makhana products, bulk orders, or wholesale opportunities.",
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <p className="mb-6 text-muted-foreground">
                  Interested in our products? Have questions about bulk orders or wholesale opportunities? Fill out the
                  form or contact us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-muted-foreground">info@foxnami.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-muted-foreground">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-muted-foreground">
                        123 Business Park, Sector 5<br />
                        Patna, Bihar 800001
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Input placeholder="Your Name" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                      <Input placeholder="Phone Number" />
                    </div>
                    <div>
                      <Input placeholder="Subject" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" className="min-h-[120px]" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is the minimum order quantity?</h3>
              <p className="text-muted-foreground">
                For retail customers, there is no minimum order quantity. For wholesale inquiries, our minimum order
                starts at 10kg.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Yes, we ship to select international locations. Please contact us for shipping details and costs to your
                specific location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is the shelf life of your products?</h3>
              <p className="text-muted-foreground">
                Our makhana products have a shelf life of 6-12 months when stored in a cool, dry place in an airtight
                container.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you offer custom packaging?</h3>
              <p className="text-muted-foreground">
                Yes, we offer custom packaging options for corporate gifting and bulk orders. Please contact us for more
                details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Are your products certified organic?</h3>
              <p className="text-muted-foreground">
                Yes, our products are certified organic by the relevant authorities. We can provide certification
                details upon request.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How can I become a distributor?</h3>
              <p className="text-muted-foreground">
                We're always looking for distribution partners. Please contact us with details about your business, and
                our team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Interested in Wholesale?</h2>
            <p className="text-center mb-8">
              We offer special pricing for bulk orders and wholesale customers. Fill out the form above or contact us
              directly for more information.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Restaurants & Cafes</h3>
                <p className="text-sm text-muted-foreground">Add a healthy, premium snack option to your menu</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Retail Stores</h3>
                <p className="text-sm text-muted-foreground">Stock authentic, high-quality makhana products</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Corporate Gifting</h3>
                <p className="text-sm text-muted-foreground">Unique, healthy gift options with custom packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

