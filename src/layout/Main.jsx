import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";


const Main = () => {
    return (
        <div className=" min-h-screen">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;