import { Navigate } from "react-router-dom";
import React from 'react'
import { GlobalContext } from "./ContextProvider";

const Protected = ({ isLoggedIn, children }) => {
    const {isGlobalAccess} = React.useContext(GlobalContext)
    
    console.log("isGlobalSpinnerOn" , isGlobalAccess )

    if (!isLoggedIn) {
        if(isGlobalAccess){
            return <Navigate to="/" replace />;
        }else{
            return <Navigate to="/login" replace />;
        }
    }
    return children;
};
export default Protected;