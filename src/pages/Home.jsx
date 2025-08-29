import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSearch } from "../context/SearchContext";
import styles from "./Home.module.css";
import AsideMenu from "../components/AsideMenu";
import TestimonialSection from "../components/TestimonialSection";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [manualScroll, setManualScroll] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const elements = document.querySelectorAll("h1, h2, h3, p, span, button, div");
    elements.forEach((el) => {
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

  const handleCardClick = () => setManualScroll(true);

  const toggleModal = (type) => {
    if (type === "about") {
      setModalContent({
        title: "Our Leadership",
        content: (
          <ul className={styles.leadershipList}>
            <li className={styles.leadershipItem}>
              <img src="/images/ronald.jpg" alt="Ronald SAINVIL" className={styles.leaderImg} />
              <p className={styles.leaderName}>Ronald SAINVIL</p>
              <p className={styles.leaderRole}>Executive Director</p>
              <p className={styles.leaderText}>
                Ronald SAINVIL is a former lawyer and sociologist from Haiti, currently pursuing a DBA. He has over five years of experience with the United Nations and specializes in risk and disaster management, business and nonprofit administration, and IT.
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img src="/images/midiva.jpg" alt="Mivida Domercant" className={styles.leaderImg} />
              <p className={styles.leaderName}>Mivida Domercant</p>
              <p className={styles.leaderRole}>Director of Community Engagement</p>
              <p className={styles.leaderText}>
                Former lawyer and sociologist from Haiti, currently pursuing a Doctorate in Business Administration...
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img src="/images/laroche.jpg" alt="Marie Ange Laroche" className={styles.leaderImg} />
              <p className={styles.leaderName}>Marie Ange Laroche</p>
              <p className={styles.leaderRole}>Director of Finance</p>
              <p className={styles.leaderText}>
                Marie Ange Laroche is an experienced paralegal known for her commitment to justice and community empowerment. Fluent in English, French, and Haitian Creole, she serves as a vital link between the legal system and the Haitian community, providing culturally sensitive support to help immigrants navigate complex legal challenges.
              </p>
            </li>
            <li className={styles.leadershipItem}>
              <img src="/images/delva.jpg" alt="Gelin Delva" className={styles.leaderImg} />
              <p className={styles.leaderName}>Gelin Delva</p>
              <p className={styles.leaderRole}>Director of Education Programs</p>
              <p className={styles.leaderText}>
                Gelin Delva is an International Physician and Public Health Specialist with over 10 years of experience in hospitals, non-profits, and global organizations like the UN. Now based in the U.S., he supports immigrant communities through consulting and career advising. His expertise includes clinical research, program management, and capacity building, and he is also a Massachusetts Notary Public and entrepreneur.
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
        <div className={styles.donateBanner} onClick={() => navigate("/donate")}>
          {home.donateMessage}
        </div>
      )}

      <section className={styles.hero}>
        <div className={styles.heroContentWithAside}>
          {isDesktop && <AsideMenu />}

          <section className={styles.hero}>
            <div className={styles.heroMainContent}>
              <div className={styles.heroTextBlock}>
                <h1 className={styles.wel}>{home.welcomeText}</h1>
                <p>{home.description}</p>
                <button className={styles.readMore} onClick={() => toggleModal("about")}>
                  {home.buttonText}
                </button>
              </div>
              <img src={heroImages[currentImageIndex]} alt="Supportive" className={styles.heroImage} />
            </div>
            <div className={styles.testimonials}>
              <TestimonialSection />
            </div>
          </section>
        </div>
      </section>

      <section id="about" className={styles.aboutMission}>
        <div className={styles.about}>
          <p className={styles.subTitle}>{t.bigTitle.about}</p>
          <h2>{home.aboutTitle}</h2>
          <p>{home.aboutDescription}</p>
          <button className={styles.readMore} onClick={() => toggleModal("about")}>
            {t.read.readMore}
          </button>
        </div>

        <div id="mission" className={styles.mission}>
          <p className={styles.subTitle}>{t.bigTitle.mission}</p>
          <h2>{home.missionTitle}</h2>
          <p>{home.missionDescription}</p>
          <button className={styles.readMore} onClick={() => toggleModal("mission")}>
            {t.read.readMore}
          </button>
        </div>
      </section>

      {modalContent && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            {modalContent.content}
            <button onClick={closeModal} className={styles.closeModal}>Close</button>
          </div>
        </div>
      )}

      <section id="services" className={styles.services}>
        <div className={styles.ser}>
          <h2>{home.servicesTitle}</h2>
        </div>

        <div className={styles.serviceWrapper}>
          <div className={`${styles.serviceScroller} ${manualScroll ? styles.manualScroll : ""}`}>
            {home.services.map((service, idx) => (
              <div key={idx} className={styles.cardContainer} onClick={handleCardClick}>
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <img src={service.image} alt={service.title} className={styles.serviceImage} />
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
        </div>
      </section>

      <Newsletter />
      <FAQ />
    </main>
  );
};

export default Home;
