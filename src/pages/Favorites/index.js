import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import WorkLink from "../../components/WorkLink";
import { useFavoriteContext } from "../../contexts/Favorites";
import ContainerWorks from "../../components/ContainerWorks";

function Favorites() {
  const { favorite } = useFavoriteContext();
    
  const quantFavorite = favorite.length;
  let mensage = 'Não há comics favoritadas.';
  if (quantFavorite > 0) {
    mensage = quantFavorite === 1 ? `${quantFavorite} comic favoritada.` : `${quantFavorite} comics favoritadas.`;  
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Meus Favoritos</h2>
        <p>{mensage}</p>
        <ContainerWorks>
          {favorite.map((work) => <WorkLink work={work} key={work.id} />)}
        </ContainerWorks>
      </Container>
      <Footer />
    </>
  );
}
export default Favorites;