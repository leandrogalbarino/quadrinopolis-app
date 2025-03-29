import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Register.module.css";
function Register() {
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
                <h2>Criar Conta</h2>
                <input type="text" name="user-register" id="user-register" placeholder="Usúario" />
                <input type="text" name="password-register" id="password-register" placeholder="Senha" />
                <input type="password" name="password-register2" id="password-register2"
                  placeholder="Confirmar Senha" />
                <button className={styles.registrar_submit}>Registrar</button>
              </form>
              <div className={styles.login_redirect}>
                <p>Já possui cadastro?</p>
                <Link to="/login" className={styles.register_link}>Entrar</Link>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </section>
  );
}

export default Register;