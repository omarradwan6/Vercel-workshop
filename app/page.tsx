import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { getFeaturedProducts } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Vercel Swag Store
            </h1>
            <p className="mt-4 max-w-xl text-balance text-lg text-muted-foreground">
              Premium merchandise for developers who ship fast. High-quality apparel and accessories featuring the Vercel brand.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Shop All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Featured Products</h2>
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
