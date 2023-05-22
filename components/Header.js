import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [danish, setDanish] = useState(false);
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

  const closeBurger = () => {
    setNavbarOpen(false);
  };

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
              <a onClick={closeBurger}>SERVICES </a>
            ) : (
              <a onClick={closeBurger}>SERVICES</a>
            )}
          </Link>
          <Link href="/cases">
            {danish ? (
              <a onClick={closeBurger}>CASES</a>
            ) : (
              <a onClick={closeBurger}>CASES</a>
            )}
          </Link>
          <Link href="/packages">
            {danish ? (
              <a onClick={closeBurger}>PAKKER</a>
            ) : (
              <a onClick={closeBurger}>PACKAGES</a>
            )}
          </Link>
          <Link href="/company">
            {danish ? (
              <a onClick={closeBurger}>VIRKSOMHED</a>
            ) : (
              <a onClick={closeBurger}>COMPANY</a>
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
              <a onClick={closeBurger}>BLOG</a>
            </Link>
            <div className="language_toggle">
              <span
                className={`language_btn ${danish ? " " : " selectedLang"}`}
                onClick={handleEnglish}
              >
                EN
              </span>
              <span>/</span>
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
