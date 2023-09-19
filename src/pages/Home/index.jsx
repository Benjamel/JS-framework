import React, { useEffect, useState } from 'react';
import fetchData from '../../components/Api/Products';

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Is Loading Posts</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <img src={post.imageUrl} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
