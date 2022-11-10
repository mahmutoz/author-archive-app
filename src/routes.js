import { Error, Home, Author } from "src/pages";

export const routes = {
  homePage: {
    path: "/",
    title: "Home",
    element: <Home />
  },
  author: {
    path: "/author",
    dynamicPath: "/author/:id",
    title: "Author",
    element: <Author />
  },
  error: {
    path: "*",
    title: "Error",
    element: <Error />
  }
};
