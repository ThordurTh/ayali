import Image from "next/image";
import logo from "../assets/logo.webp";
import Link from "next/link";
import { useState, useEffect } from "react";
import en from "../locales/en";
import da from "../locales/da";
import { useRouter } from "next/router";

export default function Header({ activeLink, setActiveLink, lang, setLang }) {
  const router = useRouter();
  const { locale } = router;
  console.log(lang);
  // const [lang, setLang] = useState(en);
  // const t = lang;

  // const [activeLink, setActiveLink] = useState("");

  const handleDanish = () => {
    setLang(da);
    const locale = {
      locale: "da",
    };
    router.push(router.pathname, router.asPath, locale);
  };
  const handleEnglish = () => {
    setLang(en);
    const locale = {
      locale: "en",
    };
    router.push(router.pathname, router.asPath, locale);
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
                // width={96}
                // height={87}
                layout="fill"
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
            <a onClick={() => closeBurger("/services")}>{lang.header.nav1}</a>
          </Link>
          <Link href="/cases">
            <a onClick={() => closeBurger("/cases")}>{lang.header.nav2}</a>
          </Link>
          <Link href="/packages">
            <a onClick={() => closeBurger("/packages")}>{lang.header.nav3}</a>
          </Link>
          <Link href="/company">
            <a onClick={() => closeBurger("/company")}>{lang.header.nav4}</a>
          </Link>
          <Link href="/contact">
            <a className="cta" onClick={() => closeBurger("/kontakt")}>
              {lang.header.nav5}
            </a>
          </Link>

          <div className="nav2">
            <Link href="/blog">
              <a onClick={() => closeBurger("/blog")}>{lang.header.nav6}</a>
            </Link>
            <div className="language_toggle">
              <span
                onClick={handleEnglish}
                className={`language_btn ${lang === en ? "selectedLang" : " "}`}
              >
                EN
              </span>
              <span
                className={`language_btn ${
                  lang === da ? "selectedLang " : " "
                }`}
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
