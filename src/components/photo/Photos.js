import React, { useEffect, useState } from "react";
import axios from "axios";

//1
// const getRandomPhotos = (page) => {
//   return (
//     axios
//       // .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//       .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//       .then((response) => {
//         // handle success
//         console.log(response);
//         return response.data;
//       })
//       .catch((error) => {
//         // handle error
//         console.log(error);
//       })
//       .finally(() => {
//         // always executed
//       })
//   );
// };

//2
const getRandomPhotos = async (page) => {
  try {
    const response = await axios
      // .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
      .get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// const Photos = () => {
//   const [randomPhotos, setRandomPhotos] = useState([]);
//   const [nextPage, setNextPage] = useState(1);
//   // useEffect(callback, [dependencies])
//   //   useEffect(function callback() {}, []);
//   //   https://picsum.photos/v2/list
//   //https://picsum.photos/200/300/?blur=2
//   const handleLoadMore = () => {
//     getRandomPhotos(nextPage).then((images) => {
//       console.log(images);
//       const newPhotos = [...randomPhotos, ...images];
//       console.log(newPhotos);
//       setRandomPhotos(newPhotos);
//       setNextPage(nextPage + 1);
//       console.log(nextPage);
//     });
//   };

//2
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // useEffect(callback, [dependencies])
  //   useEffect(function callback() {}, []);
  //   https://picsum.photos/v2/list
  //https://picsum.photos/200/300/?blur=2
  const handleLoadMore = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  //

  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-white shadow-md rounded-lg h-[200px]"
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-4 bg-yellow-600 text-white rounded-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
