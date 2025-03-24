import styles from "./Work.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkInfo from "../../components/WorkInfo";
import { useParams } from "react-router-dom";
import works from "../../json/works.js"
import NotFound from "../NotFound"

function Work() {
  const { id } = useParams();

  const work = works.find((work) => work.id.toString() === id);
  if (!work) {
    return <NotFound />
  }
  return (

    <section className={styles.body}>
      <Header />
      <section className={styles.background}>
        <WorkInfo work={work} />

      </section>
      {/* <section className={styles.comments}>
        <div class="add-comment">
          <div class="add-comment__title">
            <h2>Adicionar Comentário</h2>
          </div>
          <form action="" method="get" class="add-comment__add">
            <textarea id="add-comment__add" rows="4" placeholder="Essa obra é sensacional..." required></textarea>
            <button class="add-comment__submit">Enviar</button>
          </form>
        </div>

        <div class="comments js-comments">

        </div>
      </section> */}
      <Footer />
    </section>
  )
}

export default Work;



