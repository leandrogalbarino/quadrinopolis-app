import { useSearchParams } from "react-router-dom";
import styles from "./SearchWorks.module.css";
import works from "../../json/works.js";
import WorkLink from "../WorkLink/index.js";

function SearchWorks() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";


  const filterWorks = (w) => {
    return w.filter((w) => w.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <section className={styles.container}>
        {
          search === "" ? works.map((work) => <WorkLink work={work} key={work.id}/>) : filterWorks(works).map((work) => <WorkLink work={work} key={`${work.id}-link`} />)
        }
    </section>
  );
}

export default SearchWorks;