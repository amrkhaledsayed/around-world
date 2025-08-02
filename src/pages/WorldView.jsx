import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function WorldView() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default WorldView;
