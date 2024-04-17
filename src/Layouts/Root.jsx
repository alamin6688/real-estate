import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <>
        <div className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;