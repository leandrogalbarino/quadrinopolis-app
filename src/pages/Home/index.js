import Header from "../../components/Header";
import styles from "./Home.module.css";
import lupa from "./images/search/lupa.png";
import livro from "./images/search/livro.png";
import Container from "../../components/Container";
import SearchWorks from "../../components/SearchWorks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = search;
    if (name.trim() === '') {
      return;
    }
    navigate(`/?search=${encodeURIComponent(search)}`)
    setSearch('');
  }

  return (
    <>
      <Header />

      <Container>
        <section className={styles.container}>
          <div className={styles.logo}>
            <img src={livro} alt="livro" className={styles.logo_img} />
            <h2>Obras</h2>
          </div>
          <div className={styles.search}>
            <form onSubmit={handleSubmit} className={styles.search_form}>
              <button
                type="submit"
                className={styles.search_button}
              >
                <img src={lupa} alt="lupa" className={styles.search_button_img} />
              </button>
              <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={handleChange}
              />
            </form>
          </div>
        </section>

        <SearchWorks />

        <section className={styles.publish}>
          <Link to="/public" className={styles.publish_link}>
            Publicar Obra
          </Link>
        </section>
      </Container>


      <Footer />
    </>
  );
}

export default Home;