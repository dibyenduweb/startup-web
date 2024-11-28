import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";



const Root = () => {
    return(
        <>
        <Outlet>
        <Home/>
        </Outlet>
        </>
    )}
export default Root;