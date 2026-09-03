import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { useInquiry } from '@/context/InquiryContext'
import {
  featuredTabs,
  featuredBrands,
  exploreCategories,
  values,
  exploreTags,
  blogPosts,
} from '@/data/content'

function Hero() {
  const { setOpen } = useInquiry()

  return (
    <section
      className="relative flex min-h-[420px] items-center overflow-hidden bg-cover bg-center sm:min-h-[480px] lg:min-h-[520px]"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="container-main relative w-full py-16 text-left sm:py-20">
        <div className="max-w-xl text-left">
          <h1 className="hero-enter text-left text-[72px] leading-[72px] font-normal text-white">
            Sunshine Blue
          </h1>
          <p className="hero-enter-delay-1 mt-4 text-left text-[18px] leading-[28px] font-normal text-white/90">
            Discover wholesale products from over 100,000 independent brands.
          </p>
          <div className="hero-enter-delay-2 mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Button
              onClick={() => setOpen(true)}
              className="h-11 rounded-md bg-white px-7 text-black hover:bg-white/90"
            >
              Submit inquiry
            </Button>
            <Link
              to="/sell"
              className="text-[15px] text-white underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Are you a brand? Sell on Sunshine Blue
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedBrands() {
  const [activeTab, setActiveTab] = useState('men-textiles')

  const activeTabData = featuredTabs.find((tab) => tab.id === activeTab)
  const visibleBrands = featuredBrands.filter((brand) => brand.category === activeTab)
  const brandsToShow = visibleBrands.length > 0 ? visibleBrands : featuredBrands.slice(0, 4)

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <AnimateOnScroll>
          <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[36px]">Featured brands</h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {featuredTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-black bg-black text-white'
                      : 'border-[#d1d1d1] bg-transparent text-black hover:border-black'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <Link
              to={`/catalog/${activeTabData?.slug ?? ''}`}
              className="shrink-0 text-sm underline underline-offset-4 link-hover"
            >
              Shop all {activeTabData?.name.toLowerCase()}
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandsToShow.map((brand, i) => (
            <AnimateOnScroll key={brand.id} delay={150 + i * 80}>
              <Link to="/catalog" className="group block">
                <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-lg bg-muted-bg">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover image-hover"
                  />
                </div>
                <h3 className="font-medium transition-opacity group-hover:underline">
                  {brand.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{brand.location}</p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-white">
      <div className="container-main py-14 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll direction="left">
            <h2 className="font-serif text-[28px] leading-tight sm:text-[32px] lg:text-[36px]">
              We&apos;re Sunshine Blue.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150}>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/store-owners.jpg"
                alt="Store owners in front of their shop"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function RetailerSection() {
  const { setOpen } = useInquiry()

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
          <AnimateOnScroll direction="left" className="hidden lg:block">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/categories/women.jpg"
                alt="Boutique clothing display"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex min-h-[200px] w-full items-center justify-center text-center font-serif text-[28px] leading-tight transition-opacity hover:opacity-70 sm:text-[32px] lg:min-h-[480px] lg:text-[36px]"
            >
              Submit inquiry
            </button>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={200} className="hidden lg:block">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/categories/beauty.jpg"
                alt="Beauty products display"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function CategoriesSection() {
  const scrollRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })
  const [isDragging, setIsDragging] = useState(false)

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -400 : 400,
      behavior: 'smooth',
    })
  }

  const onMouseDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    dragRef.current = {
      active: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    }
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    const el = scrollRef.current
    const drag = dragRef.current
    if (!el || !drag.active) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - drag.startX
    if (Math.abs(walk) > 3) drag.moved = true
    el.scrollLeft = drag.scrollLeft - walk
  }

  const endDrag = () => {
    dragRef.current.active = false
    setIsDragging(false)
  }

  const onCardClick = (e) => {
    if (dragRef.current.moved) {
      e.preventDefault()
      dragRef.current.moved = false
    }
  }

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <AnimateOnScroll>
          <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[36px]">
            Explore wholesale categories
          </h2>
        </AnimateOnScroll>

        <div className="relative mt-8">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-md transition-colors hover:bg-gray-50 lg:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-md transition-colors hover:bg-gray-50 lg:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {exploreCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalog/${cat.slug}`}
                draggable={false}
                onClick={onCardClick}
                className="group w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[380px]"
              >
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-xl text-white">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const { setOpen } = useInquiry()

  return (
    <section className="container-main py-14 lg:py-24">
      <AnimateOnScroll>
        <h2 className="font-serif text-[28px] sm:text-[32px]">Shop by your values</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {values.map((value) => (
            <span
              key={value}
              className="cursor-default rounded-full border border-border bg-white px-5 py-2 text-[13px] transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              {value}
            </span>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimateOnScroll direction="left" delay={150}>
          <div className="group overflow-hidden">
            <img
              src="/images/values/values-image.jpg"
              alt="Sustainable brand products"
              className="aspect-[4/3] w-full object-cover image-hover"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={200}>
          <blockquote className="font-serif text-[22px] leading-[1.45] sm:text-[26px]">
            &ldquo;Our love of community, sustainable materials, and the beautiful California
            landscape were all the driving inspirations for our brand. We believe in creating
            products that tell a story, from the materials we source to the hands that craft them.&rdquo;
          </blockquote>
          <p className="mt-5 text-[13px] text-muted">
            Woven Earth Fabrics<br />
            Brooklyn, New York
          </p>
          <Button variant="outline" className="mt-7 rounded-md" onClick={() => setOpen(true)}>
            Shop women owned
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const { setOpen } = useInquiry()

  const benefits = [
    {
      title: 'Low order minimums',
      description: 'Thousands of brands with low or no minimums across all categories',
    },
    {
      title: '60 days to pay, interest free',
      description: 'Buy now, pay invoices 60 days later with zero fees.',
    },
    {
      title: 'Free samples & easy returns',
      description: 'Get free samples on every first order with a brand.',
    },
  ]

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll direction="left">
            <h2 className="font-serif text-[28px] leading-tight sm:text-[32px] lg:text-[36px]">
              Try new brands in your store, with confidence.
            </h2>

            <div className="mt-8 space-y-6">
              {benefits.map((b) => (
                <div key={b.title}>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{b.description}</p>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="mt-8 h-11 rounded-md border-black px-6 hover:bg-black hover:text-white"
              onClick={() => setOpen(true)}
            >
              Submit inquiry
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150}>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/benefits-image.jpg"
                alt="Brand founder with products"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-4 text-sm text-muted">
              <p className="font-medium text-black">Maya Chen, Founder of Thread &amp; Loom</p>
              <p>Portland, Oregon</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <AnimateOnScroll>
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[36px]">
              Grow your retail business with Sunshine Blue
            </h2>
            <Link
              to="/blog"
              className="hidden shrink-0 text-sm underline underline-offset-4 link-hover sm:block"
            >
              Visit our blog
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <AnimateOnScroll key={post.title} delay={i * 80}>
              <Link to="/blog" className="group block">
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg bg-muted-bg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium leading-snug transition-opacity group-hover:opacity-70">
                  {post.title}
                </h3>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { setOpen } = useInquiry()

  return (
    <section className="overflow-hidden bg-white py-14 lg:py-20">
      <div className="container-main">
        <div className="relative">
          <div className="absolute top-0 left-0 hidden w-32 animate-float md:block lg:w-48">
            <img
              src="/images/products/product-1.jpg"
              alt="Featured product"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div
            className="absolute right-0 bottom-0 hidden w-32 animate-float md:block lg:w-48"
            style={{ animationDelay: '1.5s' }}
          >
            <img
              src="/images/products/product-2.jpg"
              alt="Featured product"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl py-12 text-center">
              <h2 className="font-serif text-[28px] leading-tight sm:text-[36px] lg:text-[48px]">
                The perfect{' '}
                <Link to="/catalog" className="underline underline-offset-4 link-hover">
                  products
                </Link>
                <br />
                for your store, right this way.
              </h2>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-6 text-[15px] underline underline-offset-4 link-hover"
              >
                Submit inquiry
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function ExploreTags() {
  const scrollRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false })
  const [scrollState, setScrollState] = useState({ left: 0, width: 100, canScroll: false })
  const [isDragging, setIsDragging] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth

    if (maxScroll <= 0) {
      setScrollState({ left: 0, width: 100, canScroll: false })
      return
    }

    const width = (clientWidth / scrollWidth) * 100
    const left = (scrollLeft / maxScroll) * (100 - width)
    setScrollState({ left, width, canScroll: true })
  }

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [])

  const scrollTags = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -280 : 280,
      behavior: 'smooth',
    })
  }

  const onMouseDown = (e) => {
    const el = scrollRef.current
    if (!el) return
    dragRef.current = {
      active: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    }
    setIsDragging(true)
  }

  const onMouseMove = (e) => {
    const el = scrollRef.current
    const drag = dragRef.current
    if (!el || !drag.active) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - drag.startX
    if (Math.abs(walk) > 3) drag.moved = true
    el.scrollLeft = drag.scrollLeft - walk
  }

  const endDrag = () => {
    dragRef.current.active = false
    setIsDragging(false)
  }

  const onTagClick = (e) => {
    if (dragRef.current.moved) {
      e.preventDefault()
      dragRef.current.moved = false
    }
  }

  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="container-main">
        <AnimateOnScroll>
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            className={`flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <span className="shrink-0 text-sm text-muted">More to explore</span>
            {exploreTags.map((tag) => (
              <Link
                key={tag}
                to="/catalog"
                draggable={false}
                onClick={onTagClick}
                className="shrink-0 rounded-full border border-[#9a9a9a] px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTags('left')}
              className="shrink-0 text-muted transition-opacity hover:opacity-60 disabled:opacity-30"
              disabled={!scrollState.canScroll}
              aria-label="Scroll tags left"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div className="relative h-1 flex-1 rounded-full bg-[#d9d9d9]">
              <div
                className="absolute top-0 h-full rounded-full bg-[#666] transition-[left,width] duration-150"
                style={{
                  left: `${scrollState.left}%`,
                  width: `${scrollState.width}%`,
                }}
              />
            </div>

            <button
              type="button"
              onClick={() => scrollTags('right')}
              className="shrink-0 text-muted transition-opacity hover:opacity-60 disabled:opacity-30"
              disabled={!scrollState.canScroll}
              aria-label="Scroll tags right"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedBrands />
      <AboutSection />
      <RetailerSection />
      <CategoriesSection />
      <ValuesSection />
      <BenefitsSection />
      <BlogSection />
      <CTASection />
      <ExploreTags />
    </>
  )
}
