import React, { useState, useEffect } from 'react';

const url = 'https://api.noroff.dev/api/v1/online-shop';

async function fetchPosts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response didnt work properly');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error ${error.message}`);
  }
}

export default fetchPosts;

// function GetApi() {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const response = await fetch(url);
//         const json = await response.json();
//         setPosts(json);
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//       }
//     }

//     getData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading posts</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div>
//       {posts.map((post) => (
//         <div>
//           <img src={post.imageUrl} alt={post.title} />
//           <h2>{post.title}</h2>
//           <p>{post.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetApi;
