import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserContextProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_CLIENT_ID } = process.env;

root.render(
  <Auth0Provider
    domain={REACT_APP_AUTH_DOMAIN}
    clientId={REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserContextProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserContextProvider>
  </Auth0Provider>
);
