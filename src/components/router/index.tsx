// Libraries
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// Layouts
import MainLayout from "../../layouts/main-layout";
// Pages
const HomePage = lazy(() => import("../../pages/home-page"))
const ShopPage = lazy(() => import("../../pages/shop-page"))
const ProductDetailPage = lazy(() => import("../../pages/productDetail-page"))
const SepetPage = lazy(() => import("../../pages/sepet-page"))
const FavoritesPage = lazy(() => import("../../pages/favorites-page"))
const SearchPage = lazy(() => import("../../pages/search-page"))
const ContactPage = lazy(() => import("../../pages/contact-page"))


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
