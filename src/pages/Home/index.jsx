import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchPosts from '../../components/Api/Products';
import * as S from '../../App.styles';
import Search from '../../components/Search';

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPosts()
      .then((result) => {
        setPosts(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Is Loading Posts</div>;
  }

  return (
    <>
      <Search onSearch={setSearchQuery} />
      <S.ProductCard>
        {filteredPosts.map((post) => (
          <Link to={`/product/${post.id}`} key={post.id}>
            <img src={post.imageUrl} alt={post.title} />
            <S.ProductPrice>
              <h2>{post.title}</h2>
              {post.price !== post.discountedPrice ? (
                <p>
                  <span className='normalPrice'>{post.price}</span> Now: ${post.discountedPrice}
                </p>
              ) : (
                <p>${post.discountedPrice}</p>
              )}
            </S.ProductPrice>
          </Link>
        ))}
      </S.ProductCard>
    </>
  );
}

export default Home;
