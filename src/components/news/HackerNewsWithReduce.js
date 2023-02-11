import axios from "axios";
import React, { useReducer, useRef, useState } from "react";
// import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};

const hackerNewsReduces = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, hits: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_URL":
      return { ...state, url: action.payload };
    default:
      break;
  }
};

const HackerNewsReduce = () => {
  const [state, dispatch] = useReducer(hackerNewsReduces, initialState);
  const handleFetchData = useRef({});
  // const [query, setQuery] = useState("");
  // const [hits, setHits] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );
  // //c1
  // // const handelUpdateQuery = lodash.debounce((e) => {
  // //   setQuery(e.target.value);
  // // }, 500);

  // //c2
  // //   const handelUpdateQuery = (e) => {
  // //     setTimeout(() => {
  // //       setQuery(e.target.value);
  // //     }, 500);
  // //   };
  handleFetchData.current = async () => {
    // setLoading(true);

    try {
      const response = await axios.get(state.url);
      console.log(response.data?.hits);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_QUERY",
        payload: "",
      });
    } catch (error) {
      // setLoading(false);
      // setErrorMessage(`the error happen ${error}`);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `the error happen ${error}`,
      });
      dispatch({
        type: "SET_URl",
        payload: `the error happen ${error}`,
      });
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-xl shadow-md w-2/4">
      <div className="flex mb-5  gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md  p-5 transition-all
        focus:border-blue-400"
          placeholder="Typing your keyword....."
          defaultValue={state.query}
          // value={query}
          onChange={(e) => {
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            });
          }}
        />
        <button
          onClick={(e) => {
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          disabled={state.loading}
          className="bg-blue-500 text-white font-semibold rounded-md p-5 flex-shrink-0"
          style={{
            opacity: state.loading ? 0.25 : 1,
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div
          className="loading w-8 h-8 rounded-full border-blue-500
         border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"
        ></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) {
              return null;
            } else {
              return (
                <h3 className="p-3 bg-gray-100 rounded-sm" key={item.title}>
                  {item.title}
                </h3>
              );
            }
          })}
      </div>
    </div>
  );
};

export default HackerNewsReduce;
