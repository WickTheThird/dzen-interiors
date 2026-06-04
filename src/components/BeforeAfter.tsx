import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../content/site'

function Slider({
  before,
  after,
}: {
  before: string
  after: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const [pos, setPos] = useState(50)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [setFromClientX])

  return (
    <div
      ref={containerRef}
      className="reveal group relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm"
      onPointerDown={(e) => {
        draggingRef.current = true
        setFromClientX(e.clientX)
      }}
    >
      {/* Base layer: after */}
      <img
        src={after}
        alt="Spațiu după renovare și zugrăveli, Cluj-Napoca"
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Top layer: before, clipped from the left up to the handle */}
      <img
        src={before}
        alt="Spațiu înainte de renovare, perete nefinisat"
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <figcaption className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-wider2 text-bone/85 backdrop-blur">
        Înainte
      </figcaption>
      <figcaption className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-wider2 text-bone/85 backdrop-blur">
        După
      </figcaption>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-bone/80"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Trage pentru a compara înainte și după"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onPointerDown={(e) => {
            e.stopPropagation()
            draggingRef.current = true
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
            if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
          }}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-bone/40 bg-ink/70 text-bone backdrop-blur transition group-hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M9 7 4 12l5 5V7Zm6 0v10l5-5-5-5Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const { beforeAfter } = site
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="edge">
        <div className="reveal mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{beforeAfter.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-bone md:text-5xl">
              {beforeAfter.title}
            </h2>
          </div>
          <p className="text-sm text-bone/55 md:text-right">
            {beforeAfter.caption}
          </p>
        </div>

        <Slider before={beforeAfter.before} after={beforeAfter.after} />
      </div>
    </section>
  )
}
