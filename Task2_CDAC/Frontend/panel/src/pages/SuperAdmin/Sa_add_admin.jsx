import React, { useState } from 'react'
import SideMenu from './layouts/SideMenu'
import TopBar from './layouts/TopBar'
import MobileMenu from './layouts/MobileMenu'
import { DataGrid } from '@mui/x-data-grid';
import GeneralReport from './layouts/GeneralReport';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Modal } from '@mui/material';
import './cssClasses/custom.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getBearerToken, postBearerToken, putBearerToken } from '../../utils/Apis';
import { useLocation } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

const Sa_add_admin = () => {

    const location = useLocation()
    console.log(location)
    React.useEffect(() => {
        const LoadExternalScript = () => {
            const externalScript = document.createElement("script");
            // externalScript.onerror = loadError;
            externalScript.id = "external";
            externalScript.async = true;
            externalScript.type = "text/javascript";
            externalScript.setAttribute("crossorigin", "anonymous");
            document.body.appendChild(externalScript);
            externalScript.src = '../dist/js/app.js';
        };
        LoadExternalScript();
        return () => {
            // document.body.removeChild(externalScript);
        };
    }, []);


    const [firstName, setfirstName] = React.useState("")
    const [phone, set_phone] = React.useState("")
    const [email, set_email] = React.useState("")
    const [user_message, set_user_message] = React.useState("")

    const [message, setmessage] = useState("")
    const [messageView, setmessageView] = useState(false)
    const [loader, setloader] = useState(false)
    const [fetchLoader, setfetchLoader] = useState(false)

    const [user_data, setuser_data] = useState(null)

    

    const submit = async () => {
        setloader(true)


        postBearerToken("contacts", {
            name:firstName,
            phone:phone,
            email:email,
            message:user_message

        }).then((result) => {
            if (result.error == 0) {
                setfirstName("")
                set_phone("")
                set_user_message("")
                set_email("")
                setmessage("Success")
                setmessageView(true)
                setloader(false)
            } else {
                setmessage(result.message)
                setmessageView(true)
                setloader(false)

            }

        })



    }



    return (
        <div className="py-5 md:py-0">
            {/* <!-- BEGIN: Mobile Menu --> */}
            <div className="mobile-menu md:hidden">
                <MobileMenu />

            </div>
            {/* <!-- END: Mobile Menu -->
        <!-- BEGIN: Top Bar --> */}
            <TopBar />
            {/* <!-- END: Top Bar --> */}
            <div className="flex overflow-hidden">
                {/* <!-- BEGIN: Side Menu --> */}
                <SideMenu />
                {/* <!-- END: Side Menu -->
            <!-- BEGIN: Content --> */}
                <div className="content">
                    
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-12">



                            {fetchLoader == false ?

                                <div class="grid grid-cols-12 gap-6 mt-5">
                                    <div class="intro-y col-span-12 lg:col-span-12">
                                        <div class="intro-y box p-5">
                                            

                                            <div className='mt-2' >
                                                <label style={{ display: "flex", justifyContent: "start" }}>Full Name</label>
                                                <input id="crud-form-1"
                                                    value={firstName}
                                                    onChange={(e) => setfirstName(e.target.value)}
                                                    type="text" class="form-control w-full" />
                                            </div>
                                            <div className='mt-2' >
                                                <label style={{ display: "flex", justifyContent: "start" }}>Mobile Number</label>

                                                <input id="crud-form-1"
                                                    value={phone}
                                                    onChange={(e) => set_phone(e.target.value)}
                                                    type="text" class="form-control w-full" />
                                            </div>
                                            <div className='mt-2' >
                                                <label style={{ display: "flex", justifyContent: "start" }}>Email</label>

                                                <input id="crud-form-1"
                                                    value={email}
                                                    onChange={(e) => set_email(e.target.value)}
                                                    type="text" class="form-control w-full" />
                                            </div>
                                            <div className='mt-2' >
                                                <label style={{ display: "flex", justifyContent: "start" }}>Message</label>

                                                <input id="crud-form-1"
                                                    value={user_message}
                                                    onChange={(e) => set_user_message(e.target.value)}
                                                    type="text" class="form-control w-full" />
                                            </div>
                                            
                                            <div class="intro-y col-span-12 lg:col-span-12">

                                                {messageView ?
                                                    <div onClick={() => setmessageView(false)} className='w-100' style={{ background: "lightblue", borderWidth: 1, borderRadius: 3, padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                                        <label>{message}</label>
                                                        <div onClick={() => setmessageView(false)} style={{ cursor: "pointer" }} className="side-menu__icon"> <i data-lucide="x"></i> </div>
                                                    </div>
                                                    : null}

                                            </div>
                                            {
                                                loader
                                                    ?
                                                    <div class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
                                                        <i data-loading-icon="circles" class="w-8 h-8"></i>
                                                        <div class="text-center text-xs mt-2">Loading</div>
                                                    </div>
                                                    :
                                                    <div class="text-right mt-5">
                                                        {/* <button type="button" class="btn btn-outline-secondary w-24 mr-1">Cancel</button> */}
                                                        <button onClick={() => submit()} type="button" class="btn btn-primary w-24">Save</button>
                                                    </div>
                                            }


                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>

                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>


        </div>
    )
}

export default Sa_add_admin