import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
