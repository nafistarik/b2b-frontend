// import Image from "next/image"
// import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Connect with Verified Suppliers and Buyers Globally.
            </h1>
            <p className="max-w-[600px] text-lg text-gray-600">
              B2B-Business is a Global B2B Platform for Suppliers and Buyers to Find, Connect and Communicate -
              Digitally.
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600">Explore Products</button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yF0HFk9Jijwul1f00TnnO7ILJVraSl.png"
              alt="Global B2B Platform Illustration"
              width={600}
              height={400}
              className="object-contain"
              priority
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

