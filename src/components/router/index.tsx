// Libraries
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// Layouts
import MainLayout from "../../layouts/main-layout";
// Pages
const HomePage = lazy(() => wait(1000).then(() => import("../../pages/home-page")))
const ShopPage = lazy(() => wait(1000).then(() => import("../../pages/shop-page")))
const ProductDetailPage = lazy(() => wait(1000).then(() => import("../../pages/productDetail-page")))
const SepetPage = lazy(() => wait(1000).then(() => import("../../pages/sepet-page")))
const FavoritesPage = lazy(() => wait(1000).then(() => import("../../pages/favorites-page")))
const SearchPage = lazy(() => wait(1000).then(() => import("../../pages/search-page")))
const ContactPage = lazy(() => wait(1000).then(() => import("../../pages/contact-page")))

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });


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
