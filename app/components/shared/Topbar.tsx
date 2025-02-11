import { Search } from "lucide-react"
import Link from "next/link"
// import { Button } from "@/components/ui/button"

export default function Topbar() {
  return (
    <div className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary" />
            <span className="text-lg font-semibold">Business</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center px-8">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button  className="absolute right-0 top-0 h-full rounded-l-none">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/pricing" className="hidden md:block text-sm font-medium">
            Pricing
          </Link>
          <Link href="/signin" className="hidden md:block text-sm font-medium">
            Sign In
          </Link>
          <button  className="bg-blue-500 hover:bg-blue-600">
            Join Free
          </button>
        </div>
      </div>
    </div>
  )
}

