import { site } from '../content/site'

export function Projects() {
  const { projects } = site
  return (
    <section id="proiecte" className="bg-ink py-20 md:py-32">
      <div className="edge">
        <div className="reveal mb-12 md:mb-16">
          <p className="eyebrow">{projects.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-bone md:text-5xl">
            {projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.items.map((p, i) => (
            <article
              key={p.title}
              className={`reveal group relative overflow-hidden rounded-sm ${
                i % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`overflow-hidden ${
                  i % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={p.image}
                  alt={`${p.title} - D-Zen Interiors, Cluj-Napoca`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-calm group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-display text-2xl font-light text-bone md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-bone/65">{p.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
