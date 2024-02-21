import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./pages/Layout";
import CartPage from "./pages/Cart/CartPage";
import ProductPage, {
  loader as productLoader,
} from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <h1>This is test</h1>,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "shop",
          id: "product-type",
          loader: productLoader,
          children: [
            { index: true, element: <ShopPage /> },
            {
              path: ":product",
              element: <ProductPage />,
            },
            {
              path: ":product/:id",
              element: <ProductDetailPage />,
            },
          ],
        },
        { path: "cart", element: <CartPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
