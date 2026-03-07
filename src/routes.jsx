import { App } from "./components/App";
import { Homepage } from "./components/Homepage";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { ErrorPage } from "./components/ErrorPage";

const routes = [
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <Homepage /> },
         { path: "shop", element: <Shop /> },
         { path: "cart", element: <Cart /> },
      ],
   },
];

export default routes;
