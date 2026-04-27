import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsContent } from "./products-content"
import { ProductsLoading } from "./products-loading"

interface ProductsPageProps {
  searchParams: Promise<{ q?: string; category?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-semibold text-foreground">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse our collection of premium Vercel merchandise
          </p>

          <Suspense fallback={<ProductsLoading />}>
            <ProductsContent
              initialQuery={params.q || ""}
              initialCategory={params.category || "All"}
            />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  )
}
