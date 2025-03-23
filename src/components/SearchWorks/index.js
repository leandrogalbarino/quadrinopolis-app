import { useSearchParams } from "react-router-dom";
import Container from "../Container";
import styles from "./SearchWorks.module.css";
import works from "../../json/works.js";

function SearchWorks() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";


  const filterWorks = (w) => {
    return w.filter((w) => w.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <Container>
      {
        search === "" ? works.map((work) => <Work />) : filterWorks(works).map((work) => <Work />)
      }
    </Container>
  );
}

export default SearchWorks;