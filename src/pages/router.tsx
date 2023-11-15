import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "category/:categoryId",
    element: <CategoryPage />,
  },
]);

export default router;