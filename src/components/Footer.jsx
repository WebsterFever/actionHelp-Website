// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h4>{t.quickLinks?.getInvolvedTitle || "Get Involved"}</h4>
        <ul>
          <li>{t.quickLinks.volunteer}</li>
          <li>{t.quickLinks.donate}</li>
          <li>{t.quickLinks.collaborate}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>{t.quickLinks?.resourcesTitle || "Resources"}</h4>
        <ul>
          <li>{t.quickLinks.immigrationGuides}</li>
          <li>{t.quickLinks.resumeTemplates}</li>
          <li>{t.quickLinks.supportLinks}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>{t.quickLinks?.newsEventsTitle || "News & Events"}</h4>
        <ul>
          <li>{t.quickLinks.workshops}</li>
          <li>{t.quickLinks.communityStories}</li>
          <li>{t.quickLinks.advocacyUpdates}</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>{t.nav.contact}</h4>
        <ul>
          <li>📞 (555) 123-4567</li>
          <li>📧 info@actionhelp.org</li>
          <li>📍 Springfield, MA</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
