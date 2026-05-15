import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HeroSplineBackground } from '@/components/HeroSplineBackground'
import './index.css'

const rootEl = document.getElementById('hero-spline-root')

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <HeroSplineBackground />
    </StrictMode>,
  )
}
