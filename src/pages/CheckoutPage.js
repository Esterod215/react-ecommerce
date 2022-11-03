import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageHero, StripeCheckout } from "../components";

import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero currentPage="Checkout" />
      <Wrapper className="page">
        {cart.length > 0 ? (
          <StripeCheckout />
        ) : (
          <div className="empty">
            <h2> Your Cart is Empty </h2>
            <Link to="/products" className="btn">
              Back To Products
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
