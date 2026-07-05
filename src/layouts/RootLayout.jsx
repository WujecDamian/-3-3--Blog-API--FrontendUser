import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
