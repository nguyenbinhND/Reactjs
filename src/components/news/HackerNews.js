import axios from "axios";
import React, { useRef, useState } from "react";
import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [query, setQuery] = useState("react");
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});

  const handelUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  //   const handelUpdateQuery = (e) => {
  //     setTimeout(() => {
  //       setQuery(e.target.value);
  //     }, 500);
  //   };
  handleFetchData.current = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`the error happen ${error}`);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-xl shadow-md w-2/4">
      <div className="flex mb-5  gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md  p-5 transition-all
        focus:border-blue-400"
          placeholder="Typing your keyword....."
          defaultValue={query}
          // value={query}
          onChange={handelUpdateQuery}
        />
        <button className="bg-blue-500 text-white font-semibold rounded-md p-5 flex-shrink-0">
          Fetching
        </button>
      </div>
      {loading && (
        <div
          className="loading w-8 h-8 rounded-full border-blue-500
         border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 className="p-3 bg-gray-100 rounded-sm" key={item.title}>
              {" "}
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
