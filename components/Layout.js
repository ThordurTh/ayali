import Header from ".//Header";
import Footer from ".//Footer";

export default function Layout({ children, activeLink, setActiveLink }) {
  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
