import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.bodyLogin}>
        <Header />

        <section className={styles.container}>
          <section className={styles.logo}>
            <div class={styles.logo_element}>
              Quadrinópolis
            </div>
          </section>
          <section className={styles.login}>
            <div class={styles.login_greeting}>
              <p>Bem Vindo!</p>
            </div>
            <div class={styles.login_container}>
              <form className={styles.login_form}>
                <h2>Entrar</h2>
                <input type="text" name="user-login" id="user-login" placeholder="Usúario" />
                <input type="text" name="password-login" id="password-login" placeholder="Senha" />
                <button className={styles.registrar_submit}>Entrar</button>
              </form>
              <div className={styles.login_redirect}>
                <p>Não possui cadastro?</p>
                <Link to="/register" className={styles.register_link}>Registrar</Link>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </section>
  );
}

export default Login;