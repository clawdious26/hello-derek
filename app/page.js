export default function Home() {
  const chips = ['VPS blessed', 'Jarvis-adjacent', 'Absurd gradients', 'Definitely unnecessary'];

  return (
    <main className="page">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="grid" />

      <section className="hero-card">
        <p className="eyebrow">OPENCLAW // GREETING PROTOCOL</p>
        <h1>
          Hello, <span>Derek</span>.
        </h1>
        <p className="lede">
          Stuart said to go nuts on the design, so naturally this became a shiny little
          monument to excess.
        </p>

        <div className="chip-row">
          {chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>

        <div className="cta-row">
          <a className="button primary" href="https://github.com" target="_blank" rel="noreferrer">GitHub Energy</a>
          <a className="button secondary" href="https://vercel.com" target="_blank" rel="noreferrer">Vercel Sparkles</a>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="decorative greeting banner">
        <div className="marquee-track">
          <span>HELLO WORLD</span>
          <span>WELCOME DEREK</span>
          <span>HELLO WORLD</span>
          <span>WELCOME DEREK</span>
          <span>HELLO WORLD</span>
          <span>WELCOME DEREK</span>
        </div>
      </section>

      <section className="panel-row">
        <article className="panel glass">
          <div className="kicker">Status</div>
          <h2>Site objective</h2>
          <p>Say hi with entirely unreasonable confidence and a suspicious amount of polish.</p>
        </article>
        <article className="panel glass">
          <div className="kicker">Mood</div>
          <h2>Retro-future</h2>
          <p>Somewhere between synthwave launch page and “I may have spent too long tuning box-shadows.”</p>
        </article>
        <article className="panel glass pulse">
          <div className="kicker">Result</div>
          <h2>Mission accomplished</h2>
          <p>Derek has been greeted. Dramatically.</p>
        </article>
      </section>
    </main>
  );
}
