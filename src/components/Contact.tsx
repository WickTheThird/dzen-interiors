import { site } from '../content/site'

const channels = (c: typeof site.contact) => [
  { label: 'WhatsApp', href: c.whatsappHref },
  { label: 'Instagram', href: c.instagramHref },
  { label: 'Facebook', href: c.facebookHref },
]

export function Contact() {
  const { contact, brand } = site
  return (
    <section
      id="contact"
      className="border-t border-ink-line bg-ink-soft py-24 md:py-36"
    >
      <div className="edge text-center">
        <p className="eyebrow reveal">{contact.eyebrow}</p>
        <h2 className="reveal mx-auto mt-4 max-w-3xl font-display text-3xl font-light leading-tight tracking-tight text-bone md:text-6xl">
          {contact.title}
        </h2>

        <a
          href={contact.phoneHref}
          className="reveal mt-10 inline-block font-display text-4xl font-light tracking-tight text-bone transition-colors duration-500 hover:text-sand md:text-6xl"
        >
          {contact.phoneDisplay}
        </a>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          {channels(contact).map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              {ch.label}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs uppercase tracking-wider2 text-bone/40">
          © {new Date().getFullYear()} {brand} - Cluj-Napoca
        </p>
      </div>
    </section>
  )
}
