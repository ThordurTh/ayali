import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [danish, setDanish] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleDanish = () => {
    setDanish(true);
  };
  const handleEnglish = () => {
    setDanish(false);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeBurger = (path) => {
    setNavbarOpen(false);
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header>
      <nav className={`header_nav ${navbarOpen ? " show_menu" : " "}`}>
        <div className="logo_burger">
          <Link href="/">
            <a onClick={closeBurger} className="logo_link">
              <Image
                className="logo"
                src={logo}
                alt="logo"
                width={96}
                height={87}
              />
            </a>
          </Link>
          <div
            className={`menu-btn ${navbarOpen ? " close" : " "}`}
            onClick={handleToggle}
          >
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
        </div>
        <div className={`desktop_links ${navbarOpen ? " open" : " "}`}>
          <Link href="/services">
            {danish ? (
              <a
                className={activeLink === "/services" ? "active" : ""}
                onClick={() => closeBurger("/services")}
              >
                SERVICES{" "}
              </a>
            ) : (
              <a
                className={activeLink === "/services" ? "active" : ""}
                onClick={() => closeBurger("/services")}
              >
                SERVICES{" "}
              </a>
            )}
          </Link>
          <Link href="/cases">
            {danish ? (
              <a
                className={activeLink === "/cases" ? "active" : ""}
                onClick={() => closeBurger("/cases")}
              >
                CASES
              </a>
            ) : (
              <a
                className={activeLink === "/cases" ? "active" : ""}
                onClick={() => closeBurger("/cases")}
              >
                CASES
              </a>
            )}
          </Link>
          <Link href="/packages">
            {danish ? (
              <a
                className={activeLink === "/packages" ? "active" : ""}
                onClick={() => closeBurger("/packages")}
              >
                PAKKER
              </a>
            ) : (
              <a
                className={activeLink === "/packages" ? "active" : ""}
                onClick={() => closeBurger("/packages")}
              >
                PACKAGES
              </a>
            )}
          </Link>
          <Link href="/company">
            {danish ? (
              <a
                className={activeLink === "/company" ? "active" : ""}
                onClick={() => closeBurger("/company")}
              >
                VIRKSOMHED
              </a>
            ) : (
              <a
                className={activeLink === "/company" ? "active" : ""}
                onClick={() => closeBurger("/company")}
              >
                COMPANY
              </a>
            )}
          </Link>
          <Link href="/contact">
            {danish ? (
              <a className="cta" onClick={closeBurger}>
                KONTAKT
              </a>
            ) : (
              <a className="cta" onClick={closeBurger}>
                CONTACT
              </a>
            )}
          </Link>

          <div className="nav2">
            <Link href="/blog">
              <a
                className={activeLink === "/blog" ? "active" : ""}
                onClick={() => closeBurger("/blog")}
              >
                BLOG
              </a>
            </Link>
            <div className="language_toggle">
              <span
                className={`language_btn ${danish ? " " : " selectedLang"}`}
                onClick={handleEnglish}
              >
                EN
              </span>
              <span
                className={`language_btn ${!danish ? " " : " selectedLang"}`}
                onClick={handleDanish}
              >
                DA
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
