import Header from ".//Header";
import Footer from ".//Footer";
import {motion} from "framer-motion"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
