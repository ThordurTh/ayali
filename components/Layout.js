import Header from ".//Header";
import Footer from ".//Footer";

export default function Layout({
  children,
  activeLink,
  setActiveLink,
  lang,
  setLang,
}) {
  return (
    <>
      <Header
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        lang={lang}
        setLang={setLang}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
