import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartList from "./Components/CartList.tsx";
import ProductList, { productListLoader } from "./Components/ProductList.tsx";
import Root from "./Root.tsx";
import ErrorPage from "./Components/ErrorPage.tsx";
import ProductDetails from "./Components/ProductDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <ProductList />,
        loader: productListLoader
      },
      {
        path: "/cart",
        element: <CartList />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


/* 
 - Add delete buttons for each of the cart
 - Display the amount of things in the cart from the shopping page
 - Add a "loading" message when clicking "Products"
 - Add details for each project
 - Add images for each sporting goods items
 - Change background
*/