import { Link } from "react-router-dom";
import styles from "./Work.module.css"
function Work({ work }) {
  return (
    <Link to={`/works/${work.id}`} className={styles.work}>
      <img src={`/images/works/${work.cover}`} alt={work.name} />
    </Link>
  );
}

export default Work;