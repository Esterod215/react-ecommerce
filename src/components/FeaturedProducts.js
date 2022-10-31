import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

import { useProductsContext } from "../context/products_context";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();

  if (products_loading) return <Loading />;
  if (products_error) return <Error />;

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured_products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
