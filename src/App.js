import "./App.css";
import { useEffect, useState } from "react";
import ImageComp from "./ImageComp";

function App() {
  const [search, setsearch] = useState("code");
  const [query, setquery] = useState("");
  const [data, setdata] = useState([]);

  function getSearch(e) {
    e.preventDefault();
    setquery(search);
    setsearch("");
  }

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };

  const getData = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=AhUIn8vy-d1agOsPkXMUQaee72cMyTKeKoRTEGr8dGs`
    );
    const data = await response.json();
    // console.log(data);
    setdata(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className="App">
      <nav>
        <div>
          <h2>GeekGallery</h2>
        </div>
        <form onSubmit={getSearch}>
          <input
            type="search"
            placeholder="search it!"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-btn">Search</button>
        </form>
      </nav>
      <div className="results">
        <span>Search results for : </span>
        <span className="query"> {query}</span>
      </div>
      <div className="container">
        {data.map((item, key) => (
          <ImageComp
            keys={key}
            dloads={item.urls.download}
            url={item.urls.small}
            users={item.user.name}
            created={item.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
