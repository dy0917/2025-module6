import Link from "next/link";
import styles from "./page.module.css";
// Save as page.jsx in app/about
export default function Dash() {
  return (
    <div className={styles.page}>
      <h1>Dash</h1>
      <p>
        This is the dash page. Nothing to see, go <Link href="/">home</Link>.
      </p>
    </div>
  );
}
