import { Outlet } from "react-router";

const AuthorLayout = () => {
  return (
    <>
      <h2>Author Page</h2>
      <Outlet />
    </>
  );
};

export default AuthorLayout;
