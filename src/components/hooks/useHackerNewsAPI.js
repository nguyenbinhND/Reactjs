import { useEffect, useRef, useState } from "react";
import lodash from "lodash";
import axios from "axios";

export default function useHackerNewAPI() {
  //   const [query, setQuery] = useState("react");
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(   `https://hn.algolia.com/api/v1/search?query=''`);
  const handleFetchData = useRef({});

  //   const handelUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);

  //   const handelUpdateQuery = (e) => {
  //     setTimeout(() => {
  //       setQuery(e.target.value);
  //     }, 500);
  //   };
  handleFetchData.current = async () =>  
    setLoading(true);

    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=''`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`the error happen ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    loading,
    setLoading,
    errorMessage,
    hits,
  };
}
