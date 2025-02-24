import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
