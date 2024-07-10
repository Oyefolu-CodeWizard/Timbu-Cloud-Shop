import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import PaymentSuccessful from "../pages/PaymentSuccessful";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <NavBar />,
      },
    ],
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/successful",
    element: <PaymentSuccessful />,
  },
]);

export default router;
