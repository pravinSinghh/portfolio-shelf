import { useEffect, useRef } from "react";

import { CompleteShelfLandingPage } from "./CompleteShelfLandingPage";

export function PortfolioLanding() {
  const shelfSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = shelfSectionRef.current;
    if (!section) return;

    const updateTransition = () => {
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - section.getBoundingClientRect().top) /
            window.innerHeight,
        ),
      );
      section.style.setProperty("--shelf-progress", progress.toFixed(3));
    };

    updateTransition();
    window.addEventListener("scroll", updateTransition, { passive: true });
    window.addEventListener("resize", updateTransition);
    return () => {
      window.removeEventListener("scroll", updateTransition);
      window.removeEventListener("resize", updateTransition);
    };
  }, []);

  return (
    <main className="portfolio-page">
      <section id="intro" className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-hero__grain" aria-hidden="true" />
        <header className="portfolio-hero__topline">
          <span>Portfolio / 2026</span>
          <span>Generative AI · Full-stack systems</span>
        </header>

        <div className="portfolio-hero__content">
          <div className="portfolio-hero__copy">
            <p className="portfolio-hero__eyebrow">Hello, I am</p>
            <h1 id="portfolio-title">
              Pravin
              <br />
              Singh
              <br />
              Rajbhar
            </h1>
            <p className="portfolio-hero__intro">
              MCA student and builder of practical AI, backend, and cloud
              systems.
            </p>
            <a className="portfolio-hero__cta" href="#volumes">
              <span>Enter the volumes</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className="portfolio-hero__portrait">
            <div className="portfolio-hero__portrait-frame">
              <img
                src="/images/pravin-singh-rajbhar.png"
                alt="Portrait of Pravin Singh Rajbhar"
              />
            </div>
            <figcaption>
              <span>01</span>
              <span>Curious by nature · precise by practice</span>
            </figcaption>
          </figure>
        </div>

        <div className="portfolio-hero__scroll-hint" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="portfolio-hero__scroll-line" />
        </div>
      </section>

      <section
        ref={shelfSectionRef}
        id="volumes"
        className="portfolio-shelf"
        aria-label="Portfolio volumes"
      >
        <div className="portfolio-shelf__sticky">
          <div className="portfolio-shelf__transition" aria-hidden="true" />
          <a className="portfolio-shelf__back" href="#intro">
            <span aria-hidden="true">↑</span>
            Back to introduction
          </a>
          <CompleteShelfLandingPage
            headingFont="iowan-old-style"
            bodyFont="inter"
            headingWeight="400"
            bodyWeight="400"
            primaryColor="#c87046"
            headingSize={60}
            bodySize={12}
            headingLetterSpacing={-0.055}
          />
        </div>
      </section>
    </main>
  );
}
