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
const PaymentPage = lazy(() => wait(1000).then(() => import("../../pages/payment-page")))
const OrderSuccessPage = lazy(() => wait(1000).then(() => import("../../pages/order-success-page")))
const LoginPage = lazy(() => wait(1000).then(() => import("../../pages/login-page")))
const RegisterPage = lazy(() => wait(1000).then(() => import("../../pages/register-page")))

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
      },
      {
        path: "/basket/payment",
        element: <PaymentPage />,
      },
      {
        path: "/success-order",
        element: <OrderSuccessPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ],
  },
]);
