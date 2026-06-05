export default function Home() {
  const blinkies = [
    'ULTRA HTML',
    'Y2K MODE',
    'HELLO DENYS',
    'WEBMASTER ENERGY',
    '100% HAND-CRAFTED CHAOS',
    'BEST VIEWED WITH ATTITUDE',
  ];

  const stats = [
    { label: 'Guestbook vibe', value: 'MAXED OUT' },
    { label: 'Table layout aura', value: 'ASCENDANT' },
    { label: 'MSN energy', value: 'CRITICAL' },
  ];

  return (
    <main className="page y2k-page">
      <div className="stars" />
      <div className="sparkle sparkle-a" />
      <div className="sparkle sparkle-b" />
      <div className="grid" />

      <div className="browser-chrome">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-url">http://supersite2000.biz/hello-denys.html</div>
      </div>

      <section className="hero-card y2k-card">
        <div className="top-stamp">★ OFFICIAL DENYS GREETING PORTAL ★</div>
        <div className="gif-row" aria-hidden="true">
          <span>✦</span>
          <span>💿</span>
          <span>⚡</span>
          <span>🦋</span>
          <span>⚡</span>
          <span>💿</span>
          <span>✦</span>
        </div>

        <p className="eyebrow">WELCOME 2 THE INTERNET</p>
        <h1 className="y2k-title">
          Hello <span>Denys!</span>
        </h1>

        <div className="subtitle-wrap">
          <p className="lede y2k-lede">
            Stuart requested a full 2000s HTML fever dream, so naturally this page now exists somewhere
            between a fan site, a MySpace profile, and a front page built after three energy drinks and
            a dangerous relationship with gradients.
          </p>
        </div>

        <div className="chip-row blink-row">
          {blinkies.map((chip) => (
            <span key={chip} className="chip blink-chip">{chip}</span>
          ))}
        </div>

        <div className="cta-row">
          <a className="button primary y2k-button" href="#main-event">ENTER SITE</a>
          <a className="button secondary y2k-button alt" href="#cool-zone">COOL ZONE</a>
        </div>

        <div className="under-construction">
          <span>🚧 UNDER CONSTRUCTION BUT STILL ICONIC 🚧</span>
        </div>
      </section>

      <section className="marquee-wrap y2k-marquee" aria-label="decorative greeting banner">
        <div className="marquee-track">
          <span>HELLO DENYS</span>
          <span>WELCOME 2 THE SITE</span>
          <span>HIGH BANDWIDTH AURA</span>
          <span>HELLO DENYS</span>
          <span>WELCOME 2 THE SITE</span>
          <span>HIGH BANDWIDTH AURA</span>
        </div>
      </section>

      <section id="main-event" className="panel-row y2k-panels">
        <article className="panel y2k-panel hot-pink">
          <div className="kicker">Mood.exe</div>
          <h2>Maximum nostalgia</h2>
          <p>
            Chrome gradients. Faux browser bars. Glitter energy. Shameless excess. The sacred aesthetics of a more innocent internet.
          </p>
        </article>

        <article className="panel y2k-panel blue-burst">
          <div className="kicker">Official status</div>
          <h2>Denys welcomed</h2>
          <p>
            Not casually. Not politely. Properly. With dramatic web design choices and absolutely no restraint.
          </p>
        </article>

        <article className="panel y2k-panel pulse gold-flare">
          <div className="kicker">Certified</div>
          <h2>Elite microsite behavior</h2>
          <p>
            A tiny page with the confidence of a full portal empire. Geocities would have understood.
          </p>
        </article>
      </section>

      <section id="cool-zone" className="stats-shell">
        <div className="stats-header">:: SYSTEM READOUT ::</div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-note">
        <span>Made with reckless affection, bright gradients, and absolutely no modern restraint.</span>
      </footer>
    </main>
  );
}
