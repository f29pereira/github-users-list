import styles from "./Nav.module.css";
import { FaGithub } from "../../icons/icons";

/**
 * Renders navigation bar
 */
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logoCont}>
          <FaGithub className={styles.logo} />
          <span className={styles.text}>Users List</span>
        </li>
      </ul>
    </nav>
  );
}
