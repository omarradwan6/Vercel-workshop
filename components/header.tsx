import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-5 w-5"
            viewBox="0 0 76 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span className="font-semibold">Vercel Store</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}
