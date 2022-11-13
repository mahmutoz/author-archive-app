import { Error, Home, Author, Post, Album } from "src/pages";

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
  album: {
    path: "/album",
    dynamicPath: "/album/:id",
    title: "Album",
    element: <Album />
  },
  error: {
    path: "*",
    title: "Error",
    element: <Error />
  }
};
