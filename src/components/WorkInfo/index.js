import styles from "./WorkInfo.module.css"
import Chapters from "../Chapters"
function WorkInfo({ work }) {
  return (
    // className={styles.container}
    <section >
      <div className={styles.author}>
        <span className={styles.author_name}>{work.author}</span>
      </div>

      <p className={styles.synopsis}>{work.synopsis}</p>

      <div className={styles.chapters}>
        <div className={styles.chapters_title}>
          <h2>Episódios</h2>
        </div>
        <Chapters work={work} />
      </div>
    </section>
  );
}
export default WorkInfo;