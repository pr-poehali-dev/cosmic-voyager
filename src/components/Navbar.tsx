const navLinks = [
  { href: "#features", label: "Преимущества" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#pricing", label: "Проекты" },
]

interface NavbarProps {
  onOrderClick?: () => void
}

export function Navbar({ onOrderClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-white/80 border border-zinc-200 backdrop-blur-md shadow-sm">
        <a href="/" className="font-display text-lg font-semibold text-zinc-900">
          КаркасДом
        </a>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-500 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOrderClick}
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition-colors"
          >
            Рассчитать стоимость
          </button>
        </div>
      </nav>
    </header>
  )
}