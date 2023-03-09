'use client'

import { ThemeProvider } from 'next-themes'
import DocumentHead from '../components/document-head'

const RootHead = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <DocumentHead />
  </ThemeProvider>
)

export default RootHead
