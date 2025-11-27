import { useState } from "react";
import "./App.css";
import bingxLogo from "./assets/BingX.jpg";
import bitgetLogo from "./assets/bitget.png";
import bitmartLogo from "./assets/bitmart.png";
import bybitLogo from "./assets/bytbi.jpg";
import gateLogo from "./assets/GATEIO.png";
import htxLogo from "./assets/HTX.jpg";
import lbankLogo from "./assets/Lbank.jpg";
import logoAza from "./assets/logo-aza.png";
import mexcLogo from "./assets/MEXC.png";
import xtLogo from "./assets/XT.jpg";

import ASCENDEXLogo from "./assets/ASCENDEX.png";
import AZBITLogo from "./assets/AZBIT.png";
import BICONOMYLogo from "./assets/BICONOMY.jpg";
import CETOEXLogo from "./assets/CETOEX.png";
import COINEXLogo from "./assets/COINEX.jpg";
import COINSTORELogo from "./assets/COINSTORE.jpg";
import CoinWLogo from "./assets/CoinW.png";
import DEXTRADELogo from "./assets/DEXTRADE.jpg";
import DIGIFINEXLogo from "./assets/DIGIFINEX.png";
import KCEXLogo from "./assets/KCEX.jpg";
import P2BLogo from "./assets/P2B.jpg";
import POLONIEXLogo from "./assets/POLONIEX.png";
import TOOBITLogo from "./assets/TOOBIT.png";
import TRAPIXLogo from "./assets/TRAPIX.png";
import VINDAXLogo from "./assets/VINDAX.png";
import WEEXLogo from "./assets/WEEX.png";

const exchanges = [
  { name: "BYBIT", badge: "Top CEX", logo: bybitLogo },
  { name: "HTX", badge: "CEX", logo: htxLogo },
  { name: "GATE IO", badge: "CEX", logo: gateLogo },
  { name: "BITGET", badge: "CEX", logo: bitgetLogo },
  { name: "BINGX", badge: "Hot", logo: bingxLogo },
  { name: "MEXC", badge: "High Volume", logo: mexcLogo },
  { name: "BITMART", badge: "High Volume", logo: bitmartLogo },
  { name: "LBANK", badge: "CEX", logo: lbankLogo },
  { name: "XT.COM", badge: "High Volume", logo: xtLogo },

  { name: "COINSTORE", badge: "CEX", logo: COINSTORELogo },
  { name: "WEEX", badge: "CEX", logo: WEEXLogo },
  { name: "TOOBIT", badge: "New Gem", logo: TOOBITLogo },
  { name: "P2B", badge: "High Volume", logo: P2BLogo },
  { name: "COINEX", badge: "CEX", logo: COINEXLogo },
  { name: "ASCENDEX", badge: "Hot", logo: ASCENDEXLogo },
  { name: "DIGIFINEX", badge: "Hot", logo: DIGIFINEXLogo },
  { name: "POLONIEX", badge: "CEX", logo: POLONIEXLogo },
  { name: "CoinW", badge: "High Volume", logo: CoinWLogo },
  { name: "BICONOMY", badge: "Premium", logo: BICONOMYLogo },
  { name: "KCEX", badge: "CEX", logo: KCEXLogo },
  { name: "DEXTRADE", badge: "Hot", logo: DEXTRADELogo },
  { name: "AZBIT", badge: "Hot", logo: AZBITLogo },
  { name: "VINDAX", badge: "CEX", logo: VINDAXLogo },
  { name: "TRAPIX", badge: "Hot", logo: TRAPIXLogo },
  { name: "CETOEX", badge: "Hot", logo: CETOEXLogo },
];

const launchpads = [
  "BSCS",
  "KOM",
  "Seedify",
  "Fjord",
  "Gagarin",
  "Spores",
  "IXIRPAD",
  "Matic Launchpad",
  "KDG",
  "Gems",
  "Gempad",
  "BSCLaunch",
  "Siriuspad",
  "Bullperks",
  "Gamespad",
  "Binstarter",
  "Alphalaucher",
  "Moonstarter",
  "Finceptor",
  "Huostarter",
  "Daostarter",
  "Zenix Starter",
  "Torkpad",
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logoAza} alt="AZA Logo" className="logo-img" />
        <div className="logo-text">
          AZA - <span>Token Launch Services</span>
        </div>
      </div>
      <nav className="nav-right">
        <a href="#home">Home</a>
        <a href="#exchanges">Exchanges</a>
        <a href="#launchpads">Launchpads</a>
        <a href="#whyus">Why Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Get Your Token Listed <span>Fast & Secure</span>
        </h1>
        <p>
          Professional <strong>Exchange & Launchpad Connection</strong> service.
          We help you list your token on top CEX, launchpads, and build trust
          with global crypto communities.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            Get Your Token Listed
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px", marginLeft: "6px" }}
            >
              rocket
            </span>
          </a>
          <a href="#exchanges" className="btn ghost">
            View Exchanges
          </a>
        </div>
        <div className="hero-tags">
          <span>20+ CEX Connections</span>
          <span>20+ Launchpads</span>
          <span>300+ KOL & Community</span>
        </div>
      </div>
      <div className="hero-card">
        <p className="hero-label">EXCHANGE CONNECTION</p>
        <ul className="hero-exchange-list">
          {exchanges.slice(0, 6).map((ex) => (
            <li key={ex.name} className="hero-exchange-item">
              <div className="hero-exchange-left">
                <span className="bullet">🟢</span>

                {ex.logo ? (
                  <img
                    src={ex.logo}
                    alt={ex.name}
                    className="exchange-logo small"
                  />
                ) : null}

                <span className="exchange-name">{ex.name}</span>
              </div>

              <span className="exchange-badge-mini">{ex.badge}</span>
            </li>
          ))}
        </ul>

        <p className="hero-label">LAUNCHPAD CONNECTION</p>
        <p className="hero-mini">
          BSCS, KOM, Seedify, Fjord, Gagarin, Spores, Gempad, BSCLaunch, and
          more...
        </p>
      </div>
    </section>
  );
}

function ExchangesSection() {
  return (
    <section id="exchanges" className="section">
      <div className="section-header">
        <h2>Exchange Connection</h2>
        <p>
          We can connect your project to a wide range of centralized exchanges —
          from top-tier CEX to fast-growing platforms.
        </p>
      </div>
      <div className="grid">
        {exchanges.map((ex) => (
          <div className="card exchange-card" key={ex.name}>
            <div className="card-header">
              <div className="card-icon">
                {ex.logo ? (
                  <img src={ex.logo} alt={ex.name} className="exchange-logo" />
                ) : (
                  ex.name[0] // fallback: huruf pertama
                )}
              </div>
              <h3 className="exchange-title">{ex.name}</h3>
            </div>

            <span className="badge">{ex.badge}</span>
            <p>
              Direct listing support, communication with listing managers, and
              guidance on requirements & documentation.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LaunchpadsSection() {
  const featured = launchpads.slice(0, 6); // 6 launchpad pertama sebagai unggulan
  const others = launchpads.slice(6);

  return (
    <section id="launchpads" className="section">
      <div className="section-header">
        <h2>Launchpad Connection</h2>
        <p>
          Ready to raise funds and build hype? We&apos;ve got access to multiple
          launchpads and strong KOL & community connections.
        </p>
      </div>

      <div className="launchpad-layout">
        {/* Featured */}
        <div className="launchpad-column">
          <h3 className="launchpad-title">Featured Launchpads</h3>
          <ul className="launchpad-list">
            {featured.map((lp, idx) => (
              <li key={lp} className="launchpad-item featured">
                <span className="lp-index">#{idx + 1}</span>
                <span className="lp-name">{lp}</span>
                <span className="lp-tag">Priority</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Others */}
        <div className="launchpad-column">
          <h3 className="launchpad-title">More Partners</h3>
          <ul className="launchpad-pill-list">
            {others.map((lp) => (
              <li key={lp} className="launchpad-pill">
                {lp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="highlight-box">
        <p>
          <strong>KOL & Community Connection:</strong> 300+ communities ready to
          support your IDO/IGO/INO campaign. We help you with marketing,
          branding, and awareness.
        </p>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="whyus" className="section">
      <div className="section-header">
        <h2>Why Work With Us?</h2>
        <p>
          We are not just a connector. We act as your partner from listing
          strategy to execution.
        </p>
      </div>
      <div className="grid three">
        <div className="card">
          <h3>Real Exchange Contacts</h3>
          <p>
            We work directly with listing teams and BD managers from each
            exchange to accelerate your listing process.
          </p>
        </div>
        <div className="card">
          <h3>End-to-End Support</h3>
          <p>
            From documentation, due diligence, to marketing coordination, our
            team supports you in every step.
          </p>
        </div>
        <div className="card">
          <h3>Trust & Transparency</h3>
          <p>
            Need more trust? We can verify ourselves or our team and provide
            references from previous projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [projectName, setProjectName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [need, setNeed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
New Listing Request
-----------------------
Project       : ${projectName}
Contact       : ${contact}
Website / Deck: ${website || "-"}
Needs         : ${need}
`;

    const encodedMessage = encodeURIComponent(message);

    // buka chat Telegram ke @pemyla dengan pesan sudah terisi
    window.open(`https://t.me/pemyla?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Let&apos;s List Your Token</h2>
        <p>
          Send us your project details and we will get back to you with a custom
          listing strategy.
        </p>
      </div>
      <div className="contact-layout">
        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Project Name</label>
            <input
              placeholder="Your project / token name"
              required
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Telegram / WhatsApp</label>
            <input
              placeholder="@username or phone number"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Website / Deck (optional)</label>
            <input
              placeholder="https://yourwebsite.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="field">
            <label>What do you need?</label>
            <textarea
              rows={4}
              placeholder="Exchange listing, launchpad, KOLs, or all of them?"
              required
              value={need}
              onChange={(e) => setNeed(e.target.value)}
            />
          </div>
          <button type="submit" className="btn primary full">
            Send Request
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px", marginLeft: "6px" }}
            >
              rocket
            </span>
          </button>
        </form>

        <div className="contact-info">
          <div className="card">
            <h3>Direct Contact</h3>
            <p>You can contact our main representative quickly here:</p>

            <ul className="contact-list">
              <li>
                <a
                  href="https://t.me/HuichanCEX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @HuichanCEX
                </a>
              </li>
            </ul>

            <h3 style={{ marginTop: "18px" }}>Contact Person</h3>

            <ul className="contact-list">
              <li>
                <a
                  href="https://t.me/Pemyla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @Pemyla
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/aza_ceo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @aza_ceo
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/HuichanAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @HuichanAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} TokenLaunch Connections. All rights
        reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ExchangesSection />
        <LaunchpadsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
