import axios from "axios";
import React, { useRef, useState } from "react";
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [query, setQuery] = useState("react");
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 m-5"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {loading && (
        <div
          className="loading w-8 h-8 rounded-full border-blue-500
         border-4 border-r-4 border-r-transparent animate-spin"
        ></div>
      )}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}> {item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
