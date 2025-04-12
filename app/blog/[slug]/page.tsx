import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  // This is a simplified example with hardcoded content
  const post = {
    title: "The Top 10 Health Benefits of Makhana",
    date: "March 5, 2025",
    author: "Dr. Priya Sharma",
    category: "Health Benefits",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Makhana, also known as fox nuts or lotus seeds, has been a staple in traditional medicine for centuries. Modern research is now confirming what ancient wisdom has long known - that makhana is a nutritional powerhouse with numerous health benefits.</p>
      
      <h2>1. Rich in Protein</h2>
      <p>With approximately 9.7g of protein per 100g, makhana is an excellent plant-based protein source, making it ideal for vegetarians and vegans looking to increase their protein intake.</p>
      
      <h2>2. Low in Calories</h2>
      <p>Despite being nutrient-dense, makhana is relatively low in calories, making it an excellent snack option for those watching their caloric intake or trying to lose weight.</p>
      
      <h2>3. High in Antioxidants</h2>
      <p>Makhana contains powerful antioxidants that help combat oxidative stress and reduce inflammation in the body, potentially lowering the risk of chronic diseases.</p>
      
      <h2>4. Supports Heart Health</h2>
      <p>The magnesium and potassium in makhana help regulate blood pressure, while its low sodium content makes it heart-friendly. Regular consumption may help maintain healthy cholesterol levels.</p>
      
      <h2>5. Beneficial for Diabetics</h2>
      <p>With its low glycemic index, makhana causes a slower rise in blood sugar levels compared to many other snacks, making it suitable for people with diabetes or those at risk.</p>
      
      <h2>6. Promotes Digestive Health</h2>
      <p>The significant fiber content in makhana promotes healthy digestion by preventing constipation and supporting the growth of beneficial gut bacteria.</p>
      
      <h2>7. Supports Joint Health</h2>
      <p>Some studies suggest that compounds in makhana may have anti-inflammatory properties that could help alleviate joint pain and support overall joint health.</p>
      
      <h2>8. Improves Sleep Quality</h2>
      <p>Makhana contains magnesium, which is known to promote relaxation and improve sleep quality, potentially helping those who struggle with insomnia.</p>
      
      <h2>9. Enhances Skin Health</h2>
      <p>The antioxidants in makhana help combat free radicals that can damage skin cells, potentially reducing signs of aging and promoting a healthy complexion.</p>
      
      <h2>10. Supports Kidney Health</h2>
      <p>Traditional medicine has long used makhana to support kidney health, and some preliminary research suggests it may have diuretic properties that help flush toxins from the body.</p>
      
      <h2>Conclusion</h2>
      <p>Incorporating makhana into your diet is a simple way to boost your nutrition and potentially improve various aspects of your health. Whether enjoyed as a snack, added to soups, or used in desserts, this versatile superfood offers a wealth of benefits in a small package.</p>
    `,
  }

  return (
    <main className="flex-1">
      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all articles</span>
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="border-t border-b py-8 my-8">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Email
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog/makhana-vs-popcorn" className="text-primary hover:underline">
                    Makhana vs Popcorn: Which is the Healthier Snack?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/makhana-for-weight-loss" className="text-primary hover:underline">
                    How Makhana Can Support Your Weight Loss Journey
                  </Link>
                </li>
                <li>
                  <Link href="/blog/makhana-recipes" className="text-primary hover:underline">
                    5 Delicious Makhana Recipes to Try at Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

