import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  image: string
  countryFlag: string
  companyName: string
  rating: number
  title: string
  category: string
}

export function ProductCard({ image, countryFlag, companyName, rating, title, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src={countryFlag || "/placeholder.svg"}
            alt="Country flag"
            width={20}
            height={15}
            className="rounded"
          />
          <span className="text-sm font-medium">{companyName}</span>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{rating.toFixed(1)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-medium mb-4 line-clamp-2">{title}</h3>
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

