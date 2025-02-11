import { ProductCard } from "./ProductCard"


const PRODUCTS = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2LQDu5LSWXsMMmnckVyQ9mPjILT4A.png",
    countryFlag: "/placeholder.svg?height=20&width=30",
    companyName: "Golden Pacific Oils",
    rating: 4.8,
    category: "Agro & Agriculture",
    title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare..",
  },
  // Add more products as needed...
]

export function FeaturedProducts() {
  return (
    <section className="py-8 px-4">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <a href="#" className="text-primary hover:underline">
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

