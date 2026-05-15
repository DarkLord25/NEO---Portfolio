'use client'

import { useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const HERO_SPLINE_SCENE =
  'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

type SplineAppWithGlobals = Application & {
  setGlobalEvents?: (enabled: boolean) => void
}

/**
 * Canvas-only raycasting misses the cursor when it is over `.hero-content` (higher z-index)
 * or on the left side of the hero where there is no canvas. Spline can listen on `window`
 * instead so look-at / head tracking uses the full viewport (see splinetool/react-spline#161).
 */
export function HeroSplineBackground() {
  const handleSplineLoad = useCallback((app: Application) => {
    ;(app as SplineAppWithGlobals).setGlobalEvents?.(true)
  }, [])

  return (
    <div className="hero-spline-inner relative h-full w-full overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <SplineScene
        scene={HERO_SPLINE_SCENE}
        className="h-full w-full"
        onLoad={handleSplineLoad}
      />
    </div>
  )
}
