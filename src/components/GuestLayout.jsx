import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";

export default function GuestLayout() {

    const {token} = useStateContext()
    console.log(token)
    /*Checking if user is authenticated */
    if (token) {
        return <Navigate to="/" />
    }
    return (
        <div id="guestLayout"> 
         <Outlet />
        </div>
    );
}