import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.header}>
        <div>
          <Link to="/" className={styles.logo_link}>Quadrinópolis</Link>
        </div>

        <div className={styles.links}>
          <Link to="/favorites" className={styles.link}>Favoritos</Link>
            <Link to="/login" className={styles.link}>Entrar</Link>
          {/* <div className={styles.login}> */}
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;