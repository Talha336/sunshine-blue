import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InquiryProvider } from '@/context/InquiryContext'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Catalog, PlaceholderPage } from '@/pages/Catalog'

function App() {
  return (
    <InquiryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog/:category?" element={<Catalog />} />
            <Route path="blog" element={<PlaceholderPage title="Blog" description="Retail tips, trends, and stories from independent brands." />} />
            <Route path="sell" element={<PlaceholderPage title="Sell on Sunshine Blue" description="Join over 100,000 independent brands selling wholesale on Sunshine Blue." />} />
            <Route path="about" element={<PlaceholderPage title="About Us" description="We're building the platform for retailers to discover amazing products." />} />
            <Route path="*" element={<PlaceholderPage title="Page not found" description="The page you're looking for doesn't exist." />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InquiryProvider>
  )
}

export default App
