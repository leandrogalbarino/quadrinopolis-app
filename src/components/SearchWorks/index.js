import { useSearchParams } from "react-router-dom";
import Container from "../Container";
import works from "../../json/works.js";
import WorkLink from "../WorkLink/index.js";

function SearchWorks() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";


  const filterWorks = (w) => {
    return w.filter((w) => w.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <Container>
      {
        search === "" ? works.map((work) => <WorkLink work={work} />) : filterWorks(works).map((work) => <WorkLink work={work}  />)
      }
    </Container>
  );
}

export default SearchWorks;