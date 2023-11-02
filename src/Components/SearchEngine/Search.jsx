// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function Search() {
//   const imageStyle = {
//     backgroundImage: `url(./images/search-img.jpg)`,
//     backgroundSize: '100% 100%',
//     backgroundPosition: 'center',
//     height: '50vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadImages();
//   }, [currentPage, searchTerm]);

//   const loadImages = () => {
//     setLoading(true);
//     const apiKey = 'bNMIupbjBRCezwUcdo5fXJMiTpdaw91Esi9jz9K6sXqJD6DWpyeQAQLq'; 
//     const perPage = 15;
//     let searchTerm = null;
//     let apiUrl;
//     if (searchTerm) {
//       apiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`;
//     } else {
//       apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
//     }

//     axios
//       .get(apiUrl, {
//         headers: { Authorization: apiKey },
//       })
//       .then((response) => {
//         setImages((prevImages) => [...prevImages, ...response.data.photos]);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Failed to load images:', error);
//         setLoading(false);
//       });
//   };

//   const loadMoreImages = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       setSearchTerm(e.target.value);
//       setCurrentPage(1);
//       setImages([]); // Clear previous images
//     }
//   };

// const showLightbox = (name, img) => {
//   // Showing lightbox and setting img source, name, and button attribute
//   // Implement your logic for showing the lightbox here
// };

// const downloadImg = (imgUrl) => {
//   // Converting received img to blob, creating its download link, & downloading it
//   // Implement your logic for downloading the image here
// };

//   return (
//     <div className="App">
//       <div className="lightbox">
//         <div className="wrapper">
//           <header>
//             <div className="photographer">
//               <i className="uil uil-camera"></i>
//               <span></span>
//             </div>
//             <div className="buttons">
//               <i className="uil uil-import"></i>
//               <i className="close-icon uil uil-times"></i>
//             </div>
//           </header>
//         </div>
//       </div>
//       <section className="search bg-gray-100">
//         <div className="image-container" style={imageStyle}>
//           <div className="content  text-center">
//             <h1 className="text-4xl text-white font-semibold">Explore the World in Snapshots</h1>
//             <p className="text-white text-lg">Search and download any images within a second</p>
//             <div className="search-box  justify-center items-center mt-4 flex items-center bg-white rounded-lg p-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-search text-gray-400 mr-2"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search images"
//                 className="outline-none w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="gallery p-8">
//   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//     {images.map((img) => (
//       <li key={img.id} className="card">
//         <img
//           onClick={() => showLightbox(img.photographer, img.src.large2x)}
//           src={img.src.large2x}
//           alt="img"
//         />
//         <div className="details">
//           <div className="photographer">
//             <i className="uil uil-camera"></i>
//             <span>{img.photographer}</span>
//           </div>
//           <button onClick={() => downloadImg(img.src.large2x)}>
//             <i className="uil uil-import"></i>
//           </button>
//         </div>
//       </li>
//     ))}
//   </ul>
//   {loading && <p>Loading...</p>}
//   {!loading && (
//     <button
//       className="load-more bg-blue-500 text-white py-2 px-4 rounded-md"
//       onClick={loadMoreImages}
//     >
//       Load More
//     </button>
//   )}
// </div>

//     </div>
//   );
// }

// export default Search;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Download, Camera } from 'lucide-react';


function Search() {
  const imageStyle = {
    backgroundImage: `url(./images/search-img.jpg)`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadImages();
  }, [currentPage, searchTerm]);

  const loadImages = () => {
    setLoading(true);
    const apiKey = 'bNMIupbjBRCezwUcdo5fXJMiTpdaw91Esi9jz9K6sXqJD6DWpyeQAQLq'; // Replace with your Pexels API key
    const perPage = 15;

    let apiUrl;
    if (searchTerm) {
      apiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`;
    } else {
      apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
    }

    axios
      .get(apiUrl, {
        headers: { Authorization: apiKey },
      })
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data.photos]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load images:', error);
        setLoading(false);
      });
  };

  const loadMoreImages = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
      setImages([]);
    }
  };

  const downloadImg = (imgUrl) => {
    // Converting received img to blob, creating its download link, & downloading it
    fetch(imgUrl).then(res => res.blob()).then(blob => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = new Date().getTime();
      a.click();
    }).catch(() => alert("Failed to download image!"));
  }
  const [hoveredImg, setHoveredImg] = useState(null);

  const lightbox = document.querySelector(".lightbox");
  const downloadImgBtn = document.querySelector(".gallery .uil-import");

  return (
    <div className="App">
      <div className="lightbox">
        <div className="wrapper">
          <header>
            <div className="photographer">
              <i className="uil uil-camera"></i>
              <span></span>
            </div>
            <div className="buttons">
              <i className="uil uil-import"></i>
              <i className="close-icon uil uil-times"></i>
            </div>
          </header>
        </div>
      </div>
      <section className="search bg-gray-100">
        <div className="image-container" style={imageStyle}>
          <div className="content  text-center">
            <h1 className="text-4xl text-white font-semibold">Explore the World in Snapshots</h1>
            <p className="text-white text-lg">Search and download any images within a second</p>
            <div className="search-box  justify-center items-center mt-4 flex items-center bg-white rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search text-gray-400 mr-2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search images"
                className="outline-none w-full"
                onKeyPress={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="gallery p-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((img) => (
            <li key={img.id} className="card">
              <img
                onClick={() => showLightbox(img.photographer, img.src.large2x)}
                src={img.src.large2x}
                alt="img"
                className='cursor-pointer'
              />
              <div className="details">
                <div className="photographer">
                  <i className="uil uil-camera"></i>
                  <span>{img.photographer}</span>
                </div>
                <button onClick={() => downloadImg(img.src.large2x)}>
                  <i className="uil uil-import"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        {loading && <p>Loading...</p>}
        {!loading && (
          <button
            className="load-more bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={loadMoreImages}
          >
            Load More
          </button>
        )}
      </div> */}

      <div className="gallery p-8">
        <ul className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((img) => (
            <li key={img.id} className="card">
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredImg(img)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src={img.src.large2x}
                  alt={img.photographer}
                />
                {hoveredImg === img && (
                  <div className="overlay">
                    {/* <Camera className='absolute top-2 left-2 w-8 h-8 p-2 text-black text-lg' style={{ backgroundColor: 'white' }} /> */}
                    <p className="image-name text-white absolute bottom-4 left-4">{img.photographer}</p>
                    <button
                      onClick={() => downloadImg(img.src.large2x)}
                      className="download-btn absolute bottom-2 right-2 "
                    >
                      <Download className='text-black p-2  w-8 h-8' style={{ backgroundColor: 'white' }} />

                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {loading && <p>Loading...</p>}
        {!loading && (
          <button
            className="load-more bg-blue-500 mt-12 text-white py-2 px-4 rounded-md"
            onClick={loadMoreImages}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;



