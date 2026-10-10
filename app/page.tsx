"use client";

import { useState } from "react";

const INSTAGRAM = "https://www.instagram.com/abcreative13/";
const THREADS = "https://www.threads.com/@abcreative13";
const DM = "https://ig.me/m/abcreative13";

const inspiration = [
  {
    number: "01",
    title: "Party Inspiration",
    description:
      "A little inspiration for bringing your next celebration to life.",
    className: "inspoPink",
    art: "✳",
  },
  {
    number: "02",
    title: "Celebration Details",
    description:
      "The colors, creative touches, and memorable little moments.",
    className: "inspoLavender",
    art: "✦",
  },
  {
    number: "03",
    title: "Special Occasions",
    description:
      "Ideas for making meaningful moments feel extra special.",
    className: "inspoPeach",
    art: "♡",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home">
      <div className="demoBanner">
        INDEPENDENT WEBSITE CONCEPT — NOT THE OFFICIAL AB CREATIVE WEBSITE
      </div>

      <div className="topStrip">
        <span>✳</span> CELEBRATIONS WITH PERSONALITY <span>✳</span>
      </div>

      <header className="header">
        <a className="logo" href="#home" onClick={closeMenu}>
          AB<span>Creative</span>
          <small>PARTY PLANNING & CELEBRATIONS</small>
        </a>

        <nav
          id="main-menu"
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#inspiration" onClick={closeMenu}>
            Inspiration
          </a>
          <a href="#process" onClick={closeMenu}>
            Let's Celebrate
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Instagram ↗
          </a>
          <a
            className="navCta"
            href={DM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GET IN TOUCH ↗
          </a>
        </nav>

        <button
          className="menuToggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">✳ MAKE EVERY MOMENT A LITTLE MORE YOU</p>

          <h1>
            Life&apos;s a
            <br />
            <em>party.</em>
            <br />
            Make it
            <br />
            <span>yours.</span>
          </h1>

          <p className="heroDescription">
            Big celebrations, little details, and all the creative
            moments in between. Discover party inspiration with
            AB Creative.
          </p>

          <div className="heroActions">
            <a href="#inspiration" className="button dark">
              EXPLORE THE INSPIRATION <span>↗</span>
            </a>
            <a href={DM} target="_blank" rel="noopener noreferrer" className="textLink">
              HAVE AN EVENT IN MIND? ↗
            </a>
          </div>

          <div className="heroBottom">
            <span>ERIE, PENNSYLVANIA</span>
            <span>KEEP SCROLLING FOR THE FUN ↓</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Decorative illustration of a celebration">
          <div className="visualTop">
            <span>THE GOOD TIMES START HERE</span>
            <span>✳</span>
          </div>

          <div className="celebrationArt" aria-hidden="true">
            <div className="artRing" />
            <div className="balloon balloonOne" />
            <div className="balloon balloonTwo" />
            <div className="balloon balloonThree" />
            <div className="balloon balloonFour" />
            <div className="artStar starOne">✦</div>
            <div className="artStar starTwo">✳</div>
            <div className="artStar starThree">✧</div>
            <div className="artCenter">
              <span>LET&apos;S</span>
              <strong>CELEBRATE!</strong>
              <span>✳ ✦ ✳</span>
            </div>
            <div className="confetti confettiOne" />
            <div className="confetti confettiTwo" />
            <div className="confetti confettiThree" />
          </div>

          <div className="visualBottom">
            <span>CREATIVITY FOR EVERY OCCASION</span>
            <span>01 / 03</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          LET&apos;S CELEBRATE <span>✳</span> PARTY INSPIRATION <span>✳</span>
          CREATIVE MOMENTS <span>✳</span> GOOD TIMES AHEAD <span>✳</span>
          LET&apos;S CELEBRATE <span>✳</span> PARTY INSPIRATION <span>✳</span>
          CREATIVE MOMENTS <span>✳</span> GOOD TIMES AHEAD <span>✳</span>
        </div>
      </div>

      <section className="intro section" id="about">
        <div className="sectionLabel">
          <span>01 / ABOUT AB CREATIVE</span>
          <span>✳</span>
        </div>

        <div className="introGrid">
          <div>
            <p className="eyebrow accent">A LITTLE BIT OF CREATIVE MAGIC</p>
            <h2>
              Because
              <br />
              ordinary is
              <br />
              <em>overrated.</em>
            </h2>
          </div>

          <div className="introRight">
            <p>
              AB Creative is all about party planning for every need.
              Whether you&apos;re gathering ideas for an upcoming
              celebration or looking for creative inspiration, a
              memorable occasion starts with the details that make
              it personal.
            </p>

            <p>
              Explore the latest work and reach out directly to ask
              about your event.
            </p>

            <a
              className="roundLink"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCOVER AB CREATIVE ON INSTAGRAM ↗
            </a>
          </div>
        </div>
      </section>

      <section className="inspiration section" id="inspiration">
        <div className="sectionLabel">
          <span>02 / THE CREATIVE CORNER</span>
          <span>GOOD IDEAS LIVE HERE</span>
        </div>

        <div className="inspirationHeading">
          <div>
            <p className="eyebrow accent">EVERY OCCASION HAS A STORY</p>
            <h2>
              Made for
              <br />
              <em>memorable moments.</em>
            </h2>
          </div>
          <p>
            Browse some celebration themes and discover more of
            AB Creative&apos;s work on Instagram.
          </p>
        </div>

        <div className="inspirationGrid">
          {inspiration.map((item) => (
            <article className="inspirationCard" key={item.number}>
              <div className={`inspirationArt ${item.className}`}>
                <div className="artCircle" />
                <span className="artSymbol">{item.art}</span>
                <span className="artCaption">GOOD TIMES AHEAD</span>
              </div>
              <div className="inspirationDetails">
                <span>{item.number} / CELEBRATION IDEAS</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`See AB Creative's Instagram for ${item.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="inspirationNote">
          These are illustrative themes, not a confirmed service catalog.
          See{" "}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            AB Creative&apos;s Instagram
          </a>{" "}
          for real posts and examples.
        </p>
      </section>

      <section className="statement">
        <span className="statementStar">✳</span>
        <p>THERE&apos;S ALWAYS A REASON TO</p>
        <h2>
          <em>celebrate.</em>
        </h2>
        <span className="statementSmall">
          BIG DAYS. LITTLE WINS. BEAUTIFUL MEMORIES.
        </span>
      </section>

      <section className="process section" id="process">
        <div className="sectionLabel">
          <span>03 / START THE CONVERSATION</span>
          <span>✳</span>
        </div>

        <div className="processGrid">
          <div className="processCopy">
            <p className="eyebrow accent">YOUR CELEBRATION STARTS HERE</p>
            <h2>
              Got an idea?
              <br />
              <em>Let's talk.</em>
            </h2>
            <p>
              Planning something special? Send AB Creative a message
              with your event details and ask about options and
              availability.
            </p>
            <a
              href={DM}
              target="_blank"
              rel="noopener noreferrer"
              className="button purpleButton"
            >
              MESSAGE ON INSTAGRAM <span>↗</span>
            </a>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Share the occasion</h3>
                <p>Let AB Creative know what you&apos;re celebrating.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Talk about your ideas</h3>
                <p>Share your date, inspiration, and event details.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Explore the possibilities</h3>
                <p>Ask directly about services and availability.</p>
              </div>
              <span>↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contactInner">
          <p className="eyebrow">GOOD THINGS BEGIN WITH A HELLO</p>
          <h2>
            Let's make
            <br />
            <em>memories.</em>
          </h2>
          <p>Tell AB Creative what you have in mind.</p>
          <a
            href={DM}
            target="_blank"
            rel="noopener noreferrer"
            className="contactButton"
          >
            START A CONVERSATION <span>↗</span>
          </a>
        </div>
        <span className="contactDecoration" aria-hidden="true">
          ✳
        </span>
      </section>

      <footer className="footer">
        <div className="footerTop">
          <a className="footerLogo" href="#home">
            AB<span>Creative</span>
          </a>
          <p>Celebrations with personality.</p>
        </div>

        <div className="footerLinks">
          <div>
            <span>LOCATION</span>
            <p>Erie, Pennsylvania</p>
          </div>
          <div>
            <span>LET&apos;S CONNECT</span>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <a href={THREADS} target="_blank" rel="noopener noreferrer">
              Threads ↗
            </a>
          </div>
          <div>
            <span>EVENT ENQUIRIES</span>
            <a href={DM} target="_blank" rel="noopener noreferrer">
              Send a message ↗
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 AB CREATIVE — WEBSITE CONCEPT</span>
          <span>INDEPENDENT DEMO, NOT AN OFFICIAL BUSINESS WEBSITE</span>
        </div>
      </footer>
    </main>
  );
}