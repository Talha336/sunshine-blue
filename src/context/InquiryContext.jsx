import { createContext, useContext, useState } from 'react'

const InquiryContext = createContext(null)

export function InquiryProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <InquiryContext.Provider value={{ open, setOpen }}>
      {children}
    </InquiryContext.Provider>
  )
}

export function useInquiry() {
  const context = useContext(InquiryContext)
  if (!context) throw new Error('useInquiry must be used within InquiryProvider')
  return context
}
