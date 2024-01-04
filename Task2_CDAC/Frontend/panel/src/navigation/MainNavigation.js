import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./ContextProvider";
import Login from "../pages/Login";
import Sa_add_admin from "../pages/SuperAdmin/Sa_add_admin";
import Sa_admin_list from "../pages/SuperAdmin/Sa_admin_list";
import Protected from "./Protected";
import Register from "../pages/Register";

const MainNavigation = () => {

    const { isGlobalAccess, setGlobalAccess, isGlobalAccessType } = React.useContext(GlobalContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />



                <Route
                    path="/"
                    element={
                        <Protected isLoggedIn={isGlobalAccess ? true : false}>
                            {
                                isGlobalAccessType == "SA"
                                    ?
                                    <Sa_admin_list />
                                    :

                                    <Login />
                            }
                        </Protected>
                    }
                />
                <Route
                    path="/admin_list"
                    element={
                        <Protected isLoggedIn={isGlobalAccess ? true : false}>
                            {
                                isGlobalAccessType == "SA"
                                    ?
                                    <Sa_admin_list />
                                    :
                                    <Login />
                            }
                        </Protected>
                    }
                />
                <Route
                    path="/edit_admin"
                    element={
                        <Protected isLoggedIn={isGlobalAccess ? true : false}>
                            {
                                isGlobalAccessType == "SA"
                                    ?
                                    <Sa_add_admin />
                                    :
                                    <Login />
                            }
                        </Protected>
                    }
                />
                <Route
                    path="/create_admin"
                    element={
                        <Protected isLoggedIn={isGlobalAccess ? true : false}>
                            {
                                isGlobalAccessType == "SA"
                                    ?
                                    <Sa_add_admin />
                                    :
                                    <Login />
                            }
                        </Protected>
                    }
                />






            </Routes>
        </BrowserRouter>
    );
};

export default MainNavigation;
