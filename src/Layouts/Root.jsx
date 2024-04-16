import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;