import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { useInquiry } from '@/context/InquiryContext'

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'Careers', href: '/careers' },
  { label: 'Affiliates', href: '/affiliates' },
  { label: 'Blog', href: '/blog' },
]

const exploreLinks = [
  { label: 'Help center', href: '/help' },
  { label: 'Sunshine Blue Markets', href: '/markets' },
  { label: 'Sell on Sunshine Blue', href: '/sell' },
  { label: 'POS integration', href: '/pos' },
  { label: 'How Sunshine Blue works', href: '/how-it-works' },
  { label: 'Refer a brand', href: '/refer' },
]

const legalLinks = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'IP Policy',
  'Accessibility Policy',
  'Sitemap',
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-sm font-medium">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label || link}>
            <Link
              to={link.href || '#'}
              className="text-sm text-black/70 transition-opacity hover:opacity-60"
            >
              {link.label || link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const { setOpen } = useInquiry()

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-main py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-2xl leading-tight lg:text-3xl">
              <span className="block whitespace-nowrap">The best selection of</span>
              <span className="block whitespace-nowrap">brands for your store,</span>
              <span className="block whitespace-nowrap">all in one place</span>
            </h2>
            <div className="mt-6">
              <Button
                variant="outline"
                className="h-auto rounded-md px-5 py-2.5 text-sm font-medium"
                onClick={() => setOpen(true)}
              >
                Submit inquiry
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <FooterColumn title="Company" links={companyLinks} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <FooterColumn title="Explore" links={exploreLinks} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div>
              <h3 className="mb-4 font-sans text-sm font-medium">Contact</h3>
              <a
                href="tel:4245124051"
                className="flex items-center gap-2 text-sm font-medium link-hover"
              >
                <Phone className="h-4 w-4" />
                424-512-4051
              </a>
              <div className="mt-5 flex gap-5">
                <a
                  href="https://www.instagram.com/sunshineblueglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/sunshineblueglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/sunshineblueglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-main flex flex-col items-center gap-4 py-5 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Sunshine Blue LLC</p>
          <a href="tel:4245124051" className="hidden items-center gap-1.5 link-hover sm:flex">
            <Phone className="h-3.5 w-3.5" />
            424-512-4051
          </a>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link} className="flex items-center">
                {i > 0 && <span className="mx-1.5">·</span>}
                <a href="#" className="link-hover">{link}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
