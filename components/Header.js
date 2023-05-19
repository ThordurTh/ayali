import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <header>
      <nav className="header_nav">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/cases">CASES</Link>
        <Link href="/packages">PACKAGES</Link>
        <Link href="/company">COMPANY</Link>
        <Link className="cta" href="/contact">
          CONTACT
        </Link>
        <div>
          <Link href="/blog">BLOG</Link>
          <Link href="">EN</Link>
          <Link href="">DA</Link>
        </div>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg> */}
      </nav>
    </header>
  );
}
