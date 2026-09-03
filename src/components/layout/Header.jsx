import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Globe, ChevronDown, Menu } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useInquiry } from '@/context/InquiryContext'
import { categories } from '@/data/content'

const textileOptions = [
  { label: 'Men textile', href: '/catalog/men-textile' },
  { label: 'Women textile', href: '/catalog/women-textile' },
  { label: 'Home textile', href: '/catalog/home-textile' },
]

export function Header() {
  const { setOpen } = useInquiry()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [textilesOpen, setTextilesOpen] = useState(false)
  const [mobileTextilesOpen, setMobileTextilesOpen] = useState(false)
  const textilesRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (textilesRef.current && !textilesRef.current.contains(e.target)) {
        setTextilesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-border">
        <p className="py-2.5 text-center text-xs sm:text-[13px]">
          Shop wholesale from over 100,000 independent brands.
        </p>
      </div>

      <div className="border-b border-border">
        <div className="container-main flex items-center gap-4 py-4 lg:gap-10">
          <Link to="/" className="shrink-0">
            <span className="font-serif text-[17px] tracking-[0.2em] sm:text-[19px]">
              SUNSHINE BLUE
            </span>
          </Link>

          <div className="relative hidden flex-1 md:block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Search wholesale products and brands"
              className="h-11 border-[#ddd] bg-white pl-11 text-[15px] placeholder:text-[#999]"
            />
          </div>

          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            <button className="hidden items-center gap-1.5 text-[13px] link-hover sm:flex">
              <Globe className="h-4 w-4" />
              EN-US
              <ChevronDown className="h-3 w-3" />
            </button>
            <Link to="/blog" className="hidden text-[13px] link-hover sm:block">
              Blog
            </Link>
            <Link to="/sell" className="hidden text-[13px] link-hover lg:block">
              Sell on Sunshine Blue
            </Link>
            <Button
              size="sm"
              onClick={() => setOpen(true)}
              className="hidden h-9 rounded-md px-4 text-[13px] sm:inline-flex"
            >
              Submit inquiry
            </Button>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-4 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input placeholder="Search wholesale products and brands" className="h-10 pl-11" />
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-border lg:block">
        <div className="container-main py-3.5">
          <ul className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <li key={cat.slug} className={cat.hasDropdown ? 'relative' : undefined} ref={cat.hasDropdown ? textilesRef : undefined}>
                {cat.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setTextilesOpen((open) => !open)}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-[13px] transition-all ${
                        textileOptions.some((o) => location.pathname === o.href)
                          ? 'bg-black text-white'
                          : 'border border-border hover:border-black'
                      }`}
                    >
                      {cat.name}
                      <ChevronDown className={`h-3 w-3 transition-transform ${textilesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {textilesOpen && (
                      <div className="absolute left-0 top-full z-50 mt-2 min-w-[160px] border border-border bg-white py-2 shadow-sm">
                        {textileOptions.map((option) => (
                          <Link
                            key={option.href}
                            to={option.href}
                            className="block px-4 py-2 text-[13px] link-hover"
                            onClick={() => setTextilesOpen(false)}
                          >
                            {option.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={`/catalog/${cat.slug}`}
                    className={`rounded-full px-4 py-2 text-[13px] transition-all ${
                      location.pathname === `/catalog/${cat.slug}`
                        ? 'bg-black text-white'
                        : 'border border-border hover:border-black'
                    }`}
                  >
                    {cat.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-white lg:hidden">
          <nav className="container-main py-4">
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  {cat.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileTextilesOpen((open) => !open)}
                        className="flex w-full items-center justify-between text-sm link-hover"
                      >
                        {cat.name}
                        <ChevronDown className={`h-3 w-3 transition-transform ${mobileTextilesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileTextilesOpen && (
                        <ul className="mt-2 space-y-2 border-l border-border pl-4">
                          {textileOptions.map((option) => (
                            <li key={option.href}>
                              <Link
                                to={option.href}
                                className="block text-sm link-hover"
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setMobileTextilesOpen(false)
                                }}
                              >
                                {option.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={`/catalog/${cat.slug}`}
                      className="block text-sm link-hover"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="border-t border-border pt-3">
                <Link to="/blog" className="block text-sm link-hover" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sell" className="block text-sm link-hover" onClick={() => setMobileMenuOpen(false)}>
                  Sell on Sunshine Blue
                </Link>
              </li>
              <li className="pt-2">
                <Button className="w-full" onClick={() => { setOpen(true); setMobileMenuOpen(false) }}>
                  Submit inquiry
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
