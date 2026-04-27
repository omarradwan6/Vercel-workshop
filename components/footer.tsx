import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg
            className="h-4 w-4"
            viewBox="0 0 76 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span>&copy; {new Date().getFullYear()} Vercel, Inc.</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Vercel.com
          </a>
          <a
            href="https://github.com/vercel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
