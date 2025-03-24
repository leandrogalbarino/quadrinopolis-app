import styles from "./Chapters.module.css";
import ChapterLink from "../ChapterLink";
function Chapters({work}){
  return (
    <section className={styles.chapters}>
      {

        Array.from({ length: work.chapters }).map((_, i) => {
          return <ChapterLink work={work} chapter={i + 1} key={`${work.id}-${i}`}/>
        })
      }
    </section>
  );
}

export default Chapters;