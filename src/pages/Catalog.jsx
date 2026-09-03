import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { useInquiry } from '@/context/InquiryContext'
import { categoryCatalogs, formatPrice, getMoqNumber } from '@/data/catalog'

function ProductCard({ product }) {
  const [qty, setQty] = useState(getMoqNumber(product.moq))

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative aspect-square bg-muted-bg">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 bg-black px-2 py-1 text-xs text-white">
          {product.discount}% off
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-sans text-base font-semibold">{product.name}</h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm text-muted">{product.description}</p>
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <span className="font-sans text-base font-semibold">${formatPrice(product.price)}</span>
            <span className="ml-2 font-sans text-sm text-muted line-through">
              ${formatPrice(product.originalPrice)}
            </span>
          </div>
          <span className="font-sans text-xs text-muted">per {product.unit}</span>
        </div>
        <p className="mt-2 font-sans text-xs text-muted">
          MOQ: {product.moq} | {product.shipping}
        </p>
        <div className="mt-4 flex w-fit items-center rounded border border-border">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(getMoqNumber(product.moq), q - 1))}
            className="flex h-8 w-8 items-center justify-center link-hover"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="flex h-8 min-w-[40px] items-center justify-center border-x border-border font-sans text-sm">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center link-hover"
            aria-label="Increase quantity"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function Catalog() {
  const { category } = useParams()
  const catalog = category ? categoryCatalogs[category] : null

  if (!category) {
    return (
      <div className="container-main py-12">
        <h1 className="font-serif text-3xl">Product Catalog</h1>
        <p className="mt-2 font-sans text-muted">Browse wholesale products from independent brands.</p>
      </div>
    )
  }

  if (!catalog) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="font-serif text-3xl">Category not found</h1>
        <Link to="/" className="mt-4 inline-block font-sans text-sm underline link-hover">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="container-main py-8 sm:py-10">
      <p className="font-sans text-sm text-muted">
        <Link to="/" className="link-hover">Home</Link>
        {catalog.parentCategory ? (
          <>
            {' / '}
            {catalog.parentCategory}
            {' / '}
            <span className="font-semibold text-black">{catalog.name}</span>
          </>
        ) : (
          <>
            {' / '}
            {catalog.name}
          </>
        )}
      </p>

      <h1 className="mt-4 font-serif text-4xl">{catalog.name}</h1>
      <p className="mt-2 font-sans text-muted">{catalog.description}</p>

      {catalog.products.length === 0 ? (
        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl">No products yet</h2>
          <p className="mt-2 font-sans text-muted">This category is being restocked. Check back soon!</p>
          <Link to="/" className="mt-6 inline-block font-sans text-sm underline link-hover">
            Back to home
          </Link>
        </div>
      ) : (
        <>
          <p className="mt-8 font-sans text-sm text-muted">
            Showing {catalog.products.length} wholesale products
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {catalog.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function PlaceholderPage({ title, description }) {
  const { setOpen } = useInquiry()

  return (
    <div className="container-main py-20 text-center">
      <h1 className="font-serif text-3xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-md font-sans text-muted">{description}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 inline-flex h-10 items-center rounded-md bg-black px-6 text-sm text-white hover:bg-black/85"
      >
        Submit inquiry
      </button>
      <p className="mt-4">
        <Link to="/" className="font-sans text-sm underline link-hover">
          Back to home
        </Link>
      </p>
    </div>
  )
}
