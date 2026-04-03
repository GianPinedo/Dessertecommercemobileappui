import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SearchScreen from "./screens/SearchScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderTrackingScreen from "./screens/OrderTrackingScreen";
import ProfileScreen from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/category",
    Component: CategoryScreen,
  },
  {
    path: "/search",
    Component: SearchScreen,
  },
  {
    path: "/product/:id",
    Component: ProductDetailScreen,
  },
  {
    path: "/cart",
    Component: CartScreen,
  },
  {
    path: "/checkout",
    Component: CheckoutScreen,
  },
  {
    path: "/order-tracking/:orderId",
    Component: OrderTrackingScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
]);
