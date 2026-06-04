import { site } from '../content/site'

export function Hero() {
  const { hero } = site
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full">
      {/* Background photograph */}
      <img
        src={hero.image}
        alt="Interior renovat de D-Zen Interiors, zugrav și finisaje în Cluj-Napoca"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Directional darkening: keeps the bright hallway visible, dark where text sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />

      <div className="edge relative flex h-full flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="reveal mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
            {hero.subline}
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a href={hero.primaryCta.href} className="btn-solid">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone/40">
        <span className="block h-10 w-px animate-pulse bg-bone/30" />
      </div>
    </section>
  )
}
