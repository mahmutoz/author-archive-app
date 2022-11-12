import { Error, Home, Author, Post } from "src/pages";

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
  post: {
    path: "/post",
    dynamicPath: "/post/:id",
    title: "Post",
    element: <Post />
  },
  error: {
    path: "*",
    title: "Error",
    element: <Error />
  }
};
