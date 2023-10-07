import styled from 'styled-components';

//Home page
export const ProductPrice = styled.div`
  margin: 10px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;

  a {
    text-decoration: none;
    color: #333;
    margin-bottom: 15px;
  }

  a:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    // box-shadow: 2px 2px 2px black;
  }

  h2 {
    font-size: 22px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    img {
      height: 400px;
      width: 300px;
      margin-bottom: 0;
    }
  }
`;

//Single product page

export const ViewProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .productReviews {
    background-color: #e7e7e7;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    img {
      height: 400px;
      width: 300px;
      margin-bottom: 0;
    }
  }
`;

//Cart page

export const CartPage = styled.div`
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

  .removeFromCart {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

//Cart Success Page
export const CartSuccess = styled.div`
  text-align: center;
  margin-top: 50px;
`;
