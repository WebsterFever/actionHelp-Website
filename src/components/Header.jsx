import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { Moon, Sun, Search } from "lucide-react";
import SearchBar from "./SearchBar";
import AsideMenu from "../components/AsideMenu";

const MOBILE_QUERY = "(max-width: 1023px)"; // iPad behaves like mobile

const Header = ({ theme, setTheme }) => {
  const { t, changeLanguage } = useLanguage();
  const nav = t.nav;
  const home = t.home;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isContactPage = pathname === "/contact";

  // Keep JS in sync with CSS breakpoint (≤1023px)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  // Close menu & search on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowSearch(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMobile && (
        <div
          className={styles.donateBanner}
          onClick={() => navigate("/donate")}
        >
          {home.donateMessage}
        </div>
      )}

      <header className={styles.header}>
        {!showSearch && (
          <Link to="/" className={styles.logo}>
            <img
              src="/images/logo.png"
              alt="ActionHelp Logo"
              className={styles.logoImage}
            />
          </Link>
        )}

        {/* ✅ Mobile/iPad Controls */}
        <div className={styles.mobileRightGroup}>
          {showSearch ? (
            <input
              type="text"
              className={styles.searchInputMobile}
              placeholder="Search..."
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          ) : (
            <>
              <button
                className={styles.iconButton}
                onClick={() => setShowSearch(true)}
              >
                <Search size={18} />
              </button>

              <select
                className={styles.languageSelect}
                onChange={handleLanguageChange}
                defaultValue="en"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="ht">HT</option>
              </select>

              <button onClick={toggleTheme} className={styles.iconButton}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                className={styles.menuToggle}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? "✖" : "☰"}
              </button>
            </>
          )}
        </div>

        {/* ✅ Navigation */}
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navMobileOpen : ""}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {nav.home}
          </NavLink>

          {!isContactPage && (
            <>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                {nav.about}
              </a>
              <a href="#mission" onClick={() => setIsMobileMenuOpen(false)}>
                {nav.mission}
              </a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                {nav.services}
              </a>
            </>
          )}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {nav.contact}
          </NavLink>

          {/* ✅ AsideMenu (inside drawer on mobile/iPad) */}
          {isMobileMenuOpen && isMobile && (
            <div className={styles.mobileAsideWrapper}>
              <AsideMenu />
            </div>
          )}
        </nav>

        {/* ✅ Desktop Controls */}
        <div className={styles.rightControls}>
          <SearchBar />
          <select
            className={styles.languageSelect}
            onChange={handleLanguageChange}
            defaultValue="en"
          >
            <option value="en">English 🇺🇸</option>
            <option value="fr">Français 🇫🇷</option>
            <option value="es">Español 🇪🇸</option>
            <option value="ht">Kreyòl 🇭🇹</option>
          </select>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
