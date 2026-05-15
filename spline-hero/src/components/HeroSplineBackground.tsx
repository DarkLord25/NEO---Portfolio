'use client'

import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const HERO_SPLINE_SCENE =
  'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

export function HeroSplineBackground() {
  return (
    <div className="hero-spline-inner relative h-full w-full overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <SplineScene scene={HERO_SPLINE_SCENE} className="h-full w-full" />
    </div>
  )
}
