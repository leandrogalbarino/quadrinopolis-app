import Header from "../../components/Header";
import styles from "./NotFound.module.css"
function NotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <p className={styles.texto}>Página não encontrada.</p>
      </section>  

    </>
  );
}

export default NotFound;