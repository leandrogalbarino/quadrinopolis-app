import { Link } from "react-router-dom";
import styles from "./ChapterLink.module.css"

function ChapterLink({work, chapter}){
  return (
    <div className={styles.chapter}>
      <Link to={`/works/${work.id}/${chapter}`} className={styles.link}>{`Capítulo ${chapter}`}</Link>
    </div>
  );
}

export default ChapterLink;