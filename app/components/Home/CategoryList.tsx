import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function CategoryList() {
  return (
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
  )
}

