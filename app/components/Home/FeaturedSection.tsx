import { CategoryList } from "./CategoryList"
import { ProductCard } from "./ProductCard"


const PRODUCTS = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O8JOckwZWiiJApOQSo7sCaugvJ5iHF.png",
    countryFlag: "/placeholder.svg?height=20&width=30",
    companyName: "Golden Pacific Oils",
    rating: 4.8,
    category: "Agro & Agriculture",
    title: "Refined Sunflower Oil Wholesale Supplier for Cooking & Skincare..",
  },
  // Duplicate this object 8 more times for the grid
]

export function FeaturedSection() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        {/* Left Side - Category List */}
        <div className="lg:block">
          <CategoryList />
        </div>

        {/* Right Side - Featured Products */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <a href="#" className="text-primary hover:underline">
              See All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

