import { ChevronRight, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const CATEGORIES = [
  "Agro & Agriculture",
  "Apparel & Fashion",
  "Arts, Crafts & Gifts",
  "Industrial & Automobile",
  "Chemicals",
  "Computer & IT",
  "Construction & Real Estate",
  "Electronics & Electrical",
  "Energy & Power",
  "Food & Beverage",
  "Furniture & Décor",
  "Health & Medical",
  "Machinery & Industrial Supplies",
  "Materials & Raw Materials",
  "Office Supplies",
  "Paper, Printing & Packaging",
  "Rubber & Plastic Products",
  "Security & Protection",
  "Sports & Entertainment",
  "Textiles Leather & Jute",
]

const PRODUCTS = Array(9).fill({
  // image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EMN4WXpIyf26b5qtlZq9BFMxpHBOIS.png",
  countryFlag: "/placeholder.svg?height=20&width=30",
  companyName: "Golden Pacific Oils",
  rating: 4.8,
  category: "Agro & Agriculture",
  title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare..",
})

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src={product.countryFlag || "/placeholder.svg"}
            alt="Country flag"
            width={20}
            height={15}
            className="rounded"
          />
          <span className="text-sm font-medium">{product.companyName}</span>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-medium mb-4 line-clamp-2">{product.title}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Quick View
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function FeaturedProductsSection() {
  return (
    <section className="py-8 px-4">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <a href="#" className="text-primary hover:underline">
            See All
          </a>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Categories */}
          <div className="w-full lg:w-[280px] shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-medium mb-4">Product Category</h2>
              <div className="space-y-1">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className="w-full flex items-center justify-between py-1.5 px-2 text-sm hover:bg-gray-50 rounded-md text-left"
                  >
                    {category}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
              <button className="text-primary text-sm mt-2 hover:underline">See More</button>
              <div className="space-y-3 mt-6">
                <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">Get Found by Buyers</Button>
                <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">Showcase Your Product</Button>
                <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">Sell More - Grow Fast</Button>
              </div>
            </div>
          </div>

          {/* Right Side - Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

