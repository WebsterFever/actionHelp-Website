// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSearch } from "../context/SearchContext";
import styles from "./Home.module.css";
import TestimonialSection from "../components/TestimonialSection";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useLanguage();
  const { searchTerm } = useSearch();
  const home = t.home;
  const navigate = useNavigate();

  const heroImages = [
    "/images/mu.jpg",
    "/images/job.jpg",
    "/images/lang.jpg",
    "/images/education.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  /** ─── Services: autoplay → manual on click ───────────────────── */
  const [manualScroll, setManualScroll] = useState(false);
  const wrapperRef = useRef(null);

  // custom thin bar (optional)
  const [showBar, setShowBar] = useState(false);
  const [thumbW, setThumbW] = useState(60);
  const [thumbX, setThumbX] = useState(0);
  const trackRef = useRef(null);
  const [modalContent, setModalContent] = useState(null);

  const enterManualMode = () => {
    if (!manualScroll) setManualScroll(true);
  };

  const recalcThumb = () => {
    const wr = wrapperRef.current;
    const tr = trackRef.current;
    if (!wr || !tr) return;

    const overflow = wr.scrollWidth > wr.clientWidth + 1;
    setShowBar(manualScroll && overflow);

    const trackW = tr.clientWidth || 1;
    const ratio = wr.clientWidth / wr.scrollWidth;
    const w = Math.max(40, trackW * ratio);
    const maxX = Math.max(0, trackW - w);
    const scrollable = Math.max(1, wr.scrollWidth - wr.clientWidth);
    const x = (wr.scrollLeft / scrollable) * maxX;

    setThumbW(w);
    setThumbX(Number.isFinite(x) ? x : 0);
  };

  useEffect(() => {
    const wr = wrapperRef.current;
    if (!wr) return;
    recalcThumb();
    const onScroll = () => recalcThumb();
    const onResize = () => recalcThumb();
    wr.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      wr.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [manualScroll]);

  const onTrackDown = (e) => {
    enterManualMode();
    const wr = wrapperRef.current;
    const tr = trackRef.current;
    if (!wr || !tr) return;
    const rect = tr.getBoundingClientRect();
    const cx = (e.clientX ?? e.touches?.[0]?.clientX ?? 0) - rect.left;

    const trackW = tr.clientWidth || 1;
    const maxX = Math.max(0, trackW - thumbW);
    const nx = Math.max(0, Math.min(maxX, cx - thumbW / 2));
    setThumbX(nx);
    const scrollable = Math.max(1, wr.scrollWidth - wr.clientWidth);
    wr.scrollLeft = (nx / maxX) * scrollable;
  };

  const onThumbDown = (e) => {
    e.preventDefault();
    enterManualMode();
    const startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const startThumbX = thumbX;

    const move = (ev) => {
      const wr = wrapperRef.current;
      const tr = trackRef.current;
      if (!wr || !tr) return;
      const clientX = ev.clientX ?? ev.touches?.[0]?.clientX ?? 0;
      const trackW = tr.clientWidth || 1;
      const maxX = Math.max(0, trackW - thumbW);
      const nx = Math.max(0, Math.min(maxX, startThumbX + (clientX - startX)));
      setThumbX(nx);
      const scrollable = Math.max(1, wr.scrollWidth - wr.clientWidth);
      wr.scrollLeft = (nx / maxX) * scrollable;
    };

    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up, { once: true });
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up, { once: true });
  };
  /** ─────────────────────────────────────────────────────────────── */

  /* hero rotator */
  useEffect(() => {
    const id = setInterval(
      () => setCurrentImageIndex((p) => (p + 1) % heroImages.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  /* mobile flag */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* search highlight (optional, unchanged) */
  useEffect(() => {
    if (!searchTerm) return;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const els = document.querySelectorAll("h1, h2, h3, p, span, button, div");
    els.forEach((el) => {
      if (el.children.length > 0) return;
      el.innerHTML = el.textContent;
      if (regex.test(el.textContent)) {
        el.innerHTML = el.textContent.replace(
          regex,
          `<mark class="highlight">$1</mark>`
        );
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }, [searchTerm]);

  const toggleModal = (type) => {
    if (type === "about") {
      setModalContent({
        title: "Our Leadership",
        content: (
          <ul className={styles.leadershipList}>
            <li className={styles.leadershipItem}>
              <img
                src="/images/ronald.jpg"
                alt="Ronald SAINVIL"
                className={styles.leaderImg}
              />
              <p className={styles.leaderName}>Ronald SAINVIL</p>
              <p className={styles.leaderRole}>Executive Director</p>
              <p className={styles.leaderText}>
                is a former lawyer and sociologist from Haiti, currently
                pursuing a Doctorate in Business Administration (DBA). He
                brings over five years of experience working with the United
                Nations, supporting communities across multiple levels. His
                areas of expertise include risk and disaster management,
                Business and nonprofit administration, and information
                technology.
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img
                src="/images/midiva.jpg"
                alt="Mivida Domercant"
                className={styles.leaderImg}
              />
              <p className={styles.leaderName}>Mivida Domercant</p>
              <p className={styles.leaderRole}>Secretary</p>
              <p className={styles.leaderText}>
                Mivida Domercant is a multilingual interpreter, legal
                professional, and educator. With a legal background from Haiti,
                U.S. paralegal certification, and a Master’s in Education, she
                focuses on breaking language barriers and creating educational
                content. She develops resources to help immigrants and
                underserved communities understand their rights and
                opportunities, bringing cultural sensitivity and strong advocacy
                to her work.
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img
                src="/images/laroche.jpg"
                alt="Marie Ange Laroche"
                className={styles.leaderImg}
              />
              <p className={styles.leaderName}>Marie Ange Laroche</p>
              <p className={styles.leaderRole}>Director of Finance</p>
              <p className={styles.leaderText}>
                Marie Ange Laroche is an experienced paralegal known for her
                commitment to justice and community empowerment. Fluent in
                English, French, and Haitian Creole, she serves as a vital link
                between the legal system and the Haitian community, providing
                culturally sensitive support to help immigrants navigate complex
                legal challenges
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img
                src="/images/delva.jpg"
                alt="Gelin Delva"
                className={styles.leaderImg}
              />
              <p className={styles.leaderName}>Gelin Delva</p>
              <p className={styles.leaderRole}>Director of Education Programs</p>
              <p className={styles.leaderText}>
                Gelin Delva is an International Physician and Public Health
                Specialist with over 10 years of experience in hospitals,
                non-profits, and global organizations like the UN. Now based in
                the U.S., he supports immigrant communities through consulting
                and career advising. His expertise includes clinical research,
                program management, and capacity building, and he is also a
                Massachusetts Notary Public and entrepreneur.
              </p>
            </li>
          </ul>
        ),
      });
    } else if (type === "mission") {
      setModalContent({
        title: "Our Mission & Vision",
        content: (
          <p>
            We are dedicated to supporting immigrants in their journey toward
            integration, growth, and opportunity by offering programs that
            empower, educate, and uplift.
          </p>
        ),
      });
    }
  };

  const closeModal = () => setModalContent(null);

  return (
    <main className={styles.home}>
      {isMobile && (
        <div
          className={styles.donateBanner}
          onClick={() => navigate("/donate")}
        >
          {home.donateMessage}
        </div>
      )}

      <div className={styles.homeContainer}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroMainContent}>
            <div className={styles.heroTextBlock}>
              <h1 className={styles.wel}>{home.welcomeText}</h1>
              <p>{home.description}</p>
            </div>
            <img
              src={heroImages[currentImageIndex]}
              alt="Supportive"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.testimonials}>
            <TestimonialSection />
          </div>
        </section>

        {/* About & Mission (no duplicate subtitle labels) */}
        <section id="about" className={`${styles.aboutMission} ${styles.anchorFix}`}>
          <div className={styles.about}>
            {/* removed duplicate small subtitle */}
            <h2>{home.aboutTitle}</h2>
            <p>{home.aboutDescription}</p>
            <button
              className={styles.readMore}
              onClick={() => toggleModal("about")}
            >
              {t.read.readMore}
            </button>
          </div>

          <div id="mission" className={`${styles.mission} ${styles.anchorFix}`}>
            {/* removed duplicate small subtitle */}
            <h2>{home.missionTitle}</h2>
            <p>{home.missionDescription}</p>
            <button
              className={styles.readMore}
              onClick={() => toggleModal("mission")}
            >
              {t.read.readMore}
            </button>
          </div>
        </section>

        {/* Modal */}
        {modalContent && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modalShell}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{modalContent.title}</h2>
                <button onClick={closeModal} className={styles.modalClose}>
                  ×
                </button>
              </div>
              <div className={styles.modalBody}>{modalContent.content}</div>
            </div>
          </div>
        )}

        {/* Services */}
        <section id="services" className={`${styles.services} ${styles.anchorFix}`}>
          <div className={styles.ser}>
            <h2>{home.servicesTitle}</h2>
          </div>

          <div
            ref={wrapperRef}
            className={`${styles.serviceWrapper} ${
              manualScroll ? styles.manualScroll : styles.hiddenScroll
            }`}
          >
            <div
              className={manualScroll ? styles.scroller : styles.scrollerMarquee}
              onClick={enterManualMode}
              onTouchStart={enterManualMode}
            >
              {[...home.services, ...home.services].map((service, idx) => (
                <div key={idx} className={styles.cardContainer}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                      <div className={styles.flipCardFront}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className={styles.serviceImage}
                        />
                        <h3>{service.title}</h3>
                      </div>
                      <div className={styles.flipCardBack}>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={trackRef}
              className={`${styles.stickyBar} ${showBar ? styles.showBar : ""}`}
              onPointerDown={onTrackDown}
              onTouchStart={onTrackDown}
            >
              <div
                className={styles.stickyThumb}
                style={{
                  width: `${thumbW}px`,
                  transform: `translateX(${thumbX}px)`,
                }}
                onPointerDown={onThumbDown}
                onTouchStart={onThumbDown}
              />
            </div>
          </div>
        </section>

        <Newsletter />
        <FAQ />
      </div>
    </main>
  );
}
