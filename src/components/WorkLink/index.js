import { Link } from "react-router-dom";
import styles from "./Work.module.css";
import iconFavorite from "./images/favorite.png";
import iconUnfavorite from "./images/unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Work({ work }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === work.id);
  const ico = !isFavorite ? iconFavorite : iconUnfavorite;
  return (
    <section className={styles.container}>
      <Link to={`/works/${work.id}`} className={styles.work}>
        <img src={`/images/works/${work.cover}`} alt={work.name} />
      </Link>
      <figure className={styles.icon}>
        <img
          src={ico}
          alt="Favoritar Vídeo"
          onClick={() => addFavorite(work)}

        />
      </figure>
    </section>
  );
}

export default Work;