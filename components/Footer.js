import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            E-Mail:{" "}
            <Link href="mailto:ayali@ayali.dk">
              <a>ayali@ayali.dk</a>
            </Link>
          </li>
          <li>CVR: 123456-1234</li>
          <li>
            Tlf:{" "}
            <Link href="tel:+4555555555">
              <a>+45 55 55 55 55</a>
            </Link>
          </li>
          <li>Adrs: Porcælensvej 12567</li>
        </ul>
      </footer>
    </>
  );
}
