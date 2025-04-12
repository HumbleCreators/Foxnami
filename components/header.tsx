import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Foxnami Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">Foxnami</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/benefits" className="text-sm font-medium hover:text-primary">
            Benefits
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary">
            Products
          </Link>
          <Link href="/journey" className="text-sm font-medium hover:text-primary">
            Our Journey
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-base font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/benefits" className="text-base font-medium hover:text-primary">
                  Benefits
                </Link>
                <Link href="/products" className="text-base font-medium hover:text-primary">
                  Products
                </Link>
                <Link href="/journey" className="text-base font-medium hover:text-primary">
                  Our Journey
                </Link>
                <Link href="/blog" className="text-base font-medium hover:text-primary">
                  Blog
                </Link>
                <Link href="/contact" className="text-base font-medium hover:text-primary">
                  Contact
                </Link>
                <Button className="mt-4" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

