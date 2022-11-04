import { Error, Home } from "src/pages";

export const routes = {
  homePage: {
    path: "/",
    title: "Home",
    element: <Home />
  },
  error: {
    path: "*",
    title: "Error",
    element: <Error />
  }
};
