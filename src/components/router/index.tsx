// Libraries
import { createBrowserRouter } from "react-router-dom";
// Layouts
import MainLayout from "../../layouts/main-layout";
// Pages
import HomePage from "../../pages/home-page";
import ShopPage from "../../pages/shop-page";
import ProductDetailPage from "../../pages/productDetail-page";
import SepetPage from "../../pages/sepet-page";
import FavoritesPage from "../../pages/favorites-page";
import SearchPage from "../../pages/search-page";
import ContactPage from "../../pages/contact-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetailPage />
      },
      {
        path: "/basket",
        element: <SepetPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ],
  },
]);
