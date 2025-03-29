import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.header}>
        <div>
          <Link to="/" className={styles.logo_link}>Quadrinópolis</Link>
        </div>

        <div className={styles.login}>
          <Link to="/login" className={styles.login_link}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;