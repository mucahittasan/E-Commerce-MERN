// Libraries
import { createBrowserRouter } from "react-router-dom";
// Layouts
import MainLayout from "../../layouts/main-layout";
// Pages
import HomePage from "../../pages/home-page";
import ShopPage from "../../pages/shop-page";
import ProductDetailPage from "../../pages/productDetail-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // loader: homePageLoader
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetailPage />
      }
    ],
  },
]);
