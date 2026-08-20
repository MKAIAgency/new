const services = ["Strategy", "Automation", "Intelligence"]

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="MKAI Agency home">
          <img src="/mkai-agency-logo.png" alt="MKAI Agency" />
        </a>
        <a className="nav-link" href="mailto:hello@mkaiaagency.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">AI systems for ambitious teams</div>
        <h1>Make the next move<br /><em>intelligent.</em></h1>
        <p className="lede">MKAI Agency turns emerging technology into practical advantage — from the first clear idea to systems that scale.</p>
        <a className="button" href="mailto:hello@mkaiaagency.com">Start a conversation <span aria-hidden="true">↗</span></a>
        <div className="hero-art" aria-hidden="true"><img src="/hero-bg-vid_(2).gif" alt="" /></div>
      </section>

      <section className="services shell" id="services">
        <div className="section-label">What we do</div>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service" key={service}>
              <span className="service-number">0{index + 1}</span>
              <h2>{service}</h2>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} MKAI Agency</span>
        <span>Built for what&apos;s next.</span>
      </footer>
    </main>
  )
}
