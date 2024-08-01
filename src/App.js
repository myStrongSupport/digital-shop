import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as BestSellerLoader } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./pages/Layout";
import CartPage from "./pages/Cart/CartPage";
import ProductPage, {
  loader as productLoader,
} from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import ErrorPage from "./pages/Error/ErrorPage";
import SignUpPage from "./pages/Sign/SignUpPage";
import LoginPage from "./pages/Sign/LoginPage";
import LayoutSign from "./pages/Sign/LayoutSign";
import UserPage from "./pages/User/UserPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        // HomePage
        {
          index: true,
          element: <HomePage />,
          id: "best-seller",
          loader: BestSellerLoader,
        },
        // Shop path  list of all products that existed
        {
          path: "shop",
          id: "product-type",
          loader: productLoader,
          children: [
            // Shop page
            { index: true, element: <ShopPage /> },
            // Product page
            {
              path: ":product",
              element: <ProductPage />,
            },
            // Product detail
            {
              path: ":product/:id",
              element: <ProductDetailPage />,
            },
          ],
        },
        // Cart
        { path: "cart", element: <CartPage /> },
        // Sign up page
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
    {
      element: <LayoutSign />,
      id: "user",
      children: [
        { path: "/sign_up", element: <SignUpPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/user", element: <UserPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
