import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./pages/Layout";
import Product from "./components/Products/Product";
import CartPage from "./pages/Cart/CartPage";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "shop",
          children: [
            { index: true, element: <ShopPage /> },
            {
              path: ":product",
              element: <Product />,
            },
            {
              path: ":product/:id",
              element: <ProductDetail />,
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
