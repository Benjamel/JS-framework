import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from '../../components/Cart/Context';
import * as S from '../../App.styles';

function Product() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPostDetails() {
      const url = `https://api.noroff.dev/api/v1/online-shop/${postId}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('No response');
        }

        const data = await response.json();
        setPost(data);

        document.title = data.title;
      } catch (error) {
        console.log(`Error ${error.message}`);
      }
    }

    fetchPostDetails();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const calculateDiscountPercentage = (price, discountedPrice) => {
    if (price === discountedPrice) {
      return null;
    }

    const percentage = ((price - discountedPrice) / price) * 100;
    return Math.round(percentage);
  };

  const discountPercentage = calculateDiscountPercentage(post.price, post.discountedPrice);

  const addToCart = (product) => {
    dispatch({ type: 'addToCart', payload: product });
  };

  return (
    <>
      <S.ViewProduct>
        <div>
          <img src={post.imageUrl} alt={post.title} />
        </div>
        <div>
          <h2>{post.title}</h2>
          <p>Now: ${post.discountedPrice}</p>
          {discountPercentage !== null && <h6>Discount: {discountPercentage}%</h6>}
          <p>{post.description}</p>
          <Button variant='dark' onClick={() => addToCart(post)}>
            Add to cart
          </Button>
          <div className='productReviews'>
            {post.reviews?.length ? (
              <>
                <h2>Reviews</h2>
                <p>Rating: {post.reviews[0].rating}/5</p>
                <h6>{post.reviews[0].username}</h6>
                <p>- {post.reviews[0].description}</p>
              </>
            ) : (
              <p>No reviews</p>
            )}
          </div>
        </div>
      </S.ViewProduct>
    </>
  );
}

export default Product;
