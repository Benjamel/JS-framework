import styled from 'styled-components';

export const ReusableStyles = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .normalPrice {
    text-decoration: line-through;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    img {
      height: 400px;
      width: 100%;
      margin-bottom: 0;
    }
  }
`;

//Home page
export const ProductPrice = styled.div`
  margin: 10px;
`;

export const ProductCard = styled(ReusableStyles)`
  a {
    text-decoration: none;
    color: #333;
    margin-bottom: 15px;
  }

  a:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  h2 {
    font-size: 22px;
  }

  img {
    width: 300px;
  }
`;

//Single product page

export const ViewProduct = styled(ReusableStyles)`
  .productReviews {
    background-color: #e7e7e7;
    margin-top: 20px;
  }
`;

//Cart page

export const CartPage = styled(ReusableStyles)`
  .removeFromCart {
    margin-bottom: 20px;
  }

  hr {
    width: 100%;
  }

  h1 {
    margin-bottom: 20px;
  }

  .total-container {
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    .cart-item {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }

    .cart-item img {
      max-width: 300px;
      margin-right: 20px;
      height: auto;
    }

    .removeFromCart {
      margin-top: 10px;
    }
  }
`;

//Cart Success Page
export const CartSuccess = styled.div`
  text-align: center;
  margin-top: 50px;
`;
