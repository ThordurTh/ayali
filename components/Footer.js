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
          <li>CVR: 42878979</li>
          <li>
            Tlf:{" "}
            <Link href="tel:+4530270469">
              <a>+45 30 27 04 69</a>
            </Link>
          </li>
          <li>Adrs: Porcælensvej 12567</li>
        </ul>
      </footer>
    </>
  );
}
