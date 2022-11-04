import { Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useMainContext } from "src/context/MainContext";
import Loading from "src/components/Loading/Loading";
import { routes } from "src/routes";
import MainLayout from "src/layouts/MainLayout";

const App = () => {
  const { error, homePage } = routes;
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
        </Route>
        <Route element={error.element} path={error.path} />
      </Routes>
    </>
  );
};

export default App;
