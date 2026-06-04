import { site } from '../content/site'

export function Instagram() {
  const { instagram } = site
  return (
    <section id="instagram" className="bg-ink py-20 md:py-32">
      <div className="edge">
        <div className="reveal mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{instagram.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-bone md:text-5xl">
              {instagram.title}
            </h2>
          </div>
          <a
            href={instagram.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-bone/70 transition-colors hover:text-sand"
          >
            {instagram.handle}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {instagram.tiles.map((src, i) => (
            <a
              key={i}
              href={instagram.url}
              target="_blank"
              rel="noreferrer"
              className="reveal group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt={`Postare Instagram ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-calm group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
