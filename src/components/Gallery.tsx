import { useCallback, useEffect, useState } from 'react'
import { site } from '../content/site'

export function Gallery() {
  const { gallery } = site
  const items = gallery.items
  const [active, setActive] = useState<number | null>(null)
  const isOpen = active !== null

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  )
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + items.length) % items.length,
      ),
    [items.length],
  )

  // Keyboard nav + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, next, prev])

  return (
    <section
      id="galerie"
      className="border-t border-ink-line bg-ink py-20 md:py-32"
    >
      <div className="edge">
        <div className="reveal mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{gallery.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-bone md:text-5xl">
              {gallery.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/55 md:text-right">
            {gallery.caption}
          </p>
        </div>

        {/* Masonry: mixed portrait/landscape flow nicely in CSS columns */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Deschide imaginea: ${item.caption}`}
              className="reveal group relative mb-4 block w-full overflow-hidden rounded-sm lg:mb-5"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full transition-transform duration-[1200ms] ease-calm group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between gap-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                <span className="text-sm text-bone/90">{item.caption}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bone/40 text-bone backdrop-blur">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6M21 3l-8 8M9 21H3v-6M3 21l8-8" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galerie foto"
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:border-bone/60 hover:bg-bone/10 md:right-6 md:top-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Imaginea anterioară"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:border-bone/60 hover:bg-bone/10 md:left-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex max-h-[88vh] max-w-[92vw] flex-col items-center md:max-w-5xl"
          >
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 flex items-center gap-3 text-sm text-bone/70">
              <span>{items[active].caption}</span>
              <span className="text-bone/35">
                {active + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Imaginea următoare"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/25 text-bone transition hover:border-bone/60 hover:bg-bone/10 md:right-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
