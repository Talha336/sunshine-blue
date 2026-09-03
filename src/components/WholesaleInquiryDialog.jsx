import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useInquiry } from '@/context/InquiryContext'

export function WholesaleInquiryDialog() {
  const { open, setOpen } = useInquiry()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Wholesale Order Inquiry</DialogTitle>
          <DialogDescription>
            Tell us about your store and what you&apos;re looking for. We&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="font-serif text-lg">Thank you for your inquiry!</p>
            <p className="mt-2 text-sm text-muted">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 max-h-[60vh] space-y-4 overflow-y-auto pr-1">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Contact name</label>
              <Input required name="contactName" placeholder="Jane Smith" className="rounded-md" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business name</label>
              <Input required name="businessName" placeholder="Your store name" className="rounded-md" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <Input required name="email" type="email" placeholder="you@store.com" className="rounded-md" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Phone</label>
                <Input required name="phone" type="tel" placeholder="424-512-4051" className="rounded-md" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business address</label>
              <Input required name="businessAddress" placeholder="Street, city, state, zip" className="rounded-md" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Website / social media</label>
              <Input name="website" placeholder="https://yourstore.com or @handle" className="rounded-md" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Products interested in</label>
              <textarea
                required
                name="productsInterested"
                rows={3}
                placeholder="Categories, brands, or products you're interested in..."
                className="flex w-full resize-none rounded-md border border-border bg-white px-4 py-2 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Quantity / order details</label>
              <textarea
                required
                name="orderDetails"
                rows={3}
                placeholder="Estimated quantities, MOQ needs, timeline, etc."
                className="flex w-full resize-none rounded-md border border-border bg-white px-4 py-2 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Additional notes</label>
              <textarea
                name="additionalNotes"
                rows={3}
                placeholder="Anything else we should know..."
                className="flex w-full resize-none rounded-md border border-border bg-white px-4 py-2 text-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit inquiry
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
