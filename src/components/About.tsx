import { site } from '../content/site'

export function About() {
  const { about } = site
  return (
    <section id="despre" className="border-t border-ink-line bg-ink-soft py-20 md:py-32">
      <div className="edge grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal order-2 md:order-1">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight text-bone md:text-5xl">
            {about.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70 md:text-lg">
            {about.paragraph}
          </p>
        </div>
        <div className="reveal order-1 md:order-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={about.image}
              alt="Lucrare de finisaje și zugrăveli realizată de D-Zen Interiors în Cluj-Napoca"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
