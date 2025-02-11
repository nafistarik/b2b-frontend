import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="container flex h-12 items-center space-x-8 px-4">
        <Link href="/" className="text-sm font-medium text-blue-500">
          Home
        </Link>
        <Link href="/product" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Product
        </Link>
        <Link href="/directory" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Business Director
        </Link>
        <Link href="/buyer" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Buyer
        </Link>
        <Link href="/suppliers" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          Suppliers
        </Link>
      </div>
    </nav>
  )
}

