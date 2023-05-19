import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>E-Mail: ayali@ayali.dk</li>
          <li>CPR: 123456-1234</li>
          <li>Tlf: 55 55 55 55</li>
          <li>Adrs: Porcælensvej 12567</li>
        </ul>
      </footer>
    </>
  );
}
