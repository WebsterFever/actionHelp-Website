// AsideMenu.jsx
import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import styles from "./AsideMenu.module.css";

const MOBILE_QUERY = "(max-width: 1023px)"; // <= iPad

const AsideMenu = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  return (
    <aside className={styles.aside}>
      {/* BLOG */}
      <div className={`${styles.section} ${isMobile && openBlog ? styles.open : ""}`}>
        {/* Always render the toggle; CSS hides it on desktop */}
        <button
          className={styles.sectionToggle}
          onClick={() => setOpenBlog((v) => !v)}
          aria-expanded={isMobile ? openBlog : true}
          type="button"
        >
          <span>{t.menuSections.blog}</span>
        </button>

        {/* Keep a visible title for desktop (CSS hides it on mobile/tablet) */}
        <p className={styles.sectionTitle}>{t.menuSections.blog}</p>

        <ul>
          <li><NavLink to="/blog/volunteer">{t.quickLinks.volunteer}</NavLink></li>
          <li><NavLink to="/donate" className={styles.flashDonate}>{t.quickLinks.donate} 💖</NavLink></li>
          <li><NavLink to="/blog/collaborate">{t.quickLinks.collaborate}</NavLink></li>
          <li><NavLink to="/blog/immigration-guides">{t.quickLinks.immigrationGuides}</NavLink></li>
          <li><NavLink to="/blog/resume-templates">{t.quickLinks.resumeTemplates}</NavLink></li>
          <li><NavLink to="/blog/support-links">{t.quickLinks.supportLinks}</NavLink></li>
          <li><NavLink to="/blog/workshops">{t.quickLinks.workshops}</NavLink></li>
          <li><NavLink to="/blog/community-stories">{t.quickLinks.communityStories}</NavLink></li>
          <li><NavLink to="/blog/advocacy-updates">{t.quickLinks.advocacyUpdates}</NavLink></li>
        </ul>
      </div>

      {/* SERVICES */}
      <div className={`${styles.section} ${isMobile && openServices ? styles.open : ""}`}>
        <button
          className={styles.sectionToggle}
          onClick={() => setOpenServices((v) => !v)}
          aria-expanded={isMobile ? openServices : true}
          type="button"
        >
          <span>{t.menuSections.services}</span>
        </button>

        <p className={styles.sectionTitle}>{t.menuSections.services}</p>

        <ul>
          <li><NavLink to="/services/immigration-assistance">{t.quickLinks.immigrationAssistance}</NavLink></li>
          <li><NavLink to="/services/job-placement">{t.quickLinks.jobPlacement}</NavLink></li>
          <li><NavLink to="/services/language-programs">{t.quickLinks.languagePrograms}</NavLink></li>
          <li><NavLink to="/services/education-support">{t.quickLinks.educationSupport}</NavLink></li>
          <li><NavLink to="/services/housing-resources">{t.quickLinks.housingResources}</NavLink></li>
          <li><NavLink to="/services/community-integration">{t.quickLinks.communityIntegration}</NavLink></li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideMenu;
