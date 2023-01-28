import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../layouts/main-layout";
import HomePage from "../../pages/home-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
