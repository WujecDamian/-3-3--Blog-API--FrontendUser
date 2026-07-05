import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

const RootLayout () =>{
    return(
        <div>
        <NavBar></NavBar>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </div>
    )
}

export default RootLayout