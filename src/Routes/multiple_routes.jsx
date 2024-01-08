import { createBrowserRouter } from "react-router-dom";
import  {LoginScreen, RegisterScreen} from "../components/index"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is Home</h1>,
  }, {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/signup",
    element: <RegisterScreen />,
  },
]);
