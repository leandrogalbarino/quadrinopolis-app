import styles from "./Chapter.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import works from "../../json/works.js"
import NotFound from "../NotFound/index.js";

function Chapter() {

  const { id, chapter } = useParams();

  const work = works.find((work) => work.id.toString() === id);
  if (!work || work.chapters < chapter || chapter <= 0) {
    return <NotFound />
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        {`Obra ${work.name}, Capítulo ${chapter} `}
      </section>
      <Footer />
    </>
  );
}

export default Chapter;