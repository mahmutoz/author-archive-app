import { Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useMainContext } from "src/context/MainContext";
import Loading from "src/components/Loading/Loading";
import { routes } from "src/routes";
import { MainLayout, ArchiveLayout, PostLayout, AlbumLayout } from "src/layouts";

const App = () => {
  const { error, homePage, author, post, album } = routes;
  const { errorMsg } = useMainContext();

  return (
    <>
      {errorMsg &&
        Swal.fire({
          position: "bottom-right",
          icon: "error",
          title: errorMsg,
          showConfirmButton: false,
          timer: 3000
        })}
      <Loading />
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={homePage.element} path={homePage.path} exact />
          <Route element={<ArchiveLayout />}>
            <Route element={author.element} path={author.dynamicPath} />
            <Route element={<PostLayout />}>
              <Route element={post.element} path={post.dynamicPath} />
            </Route>
            <Route element={<AlbumLayout />}>
              <Route element={album.element} path={album.dynamicPath} />
            </Route>
          </Route>
        </Route>
        <Route element={error.element} path={error.path} />
      </Routes>
    </>
  );
};

export default App;
