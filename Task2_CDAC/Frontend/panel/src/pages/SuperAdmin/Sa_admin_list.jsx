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
import { useNavigate } from 'react-router-dom';

const Sa_admin_list = () => {
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


    const navigate = useNavigate()
    const [rows, setrows] = React.useState([])
    const [rendered, setrendered] = useState(0)
    React.useEffect(() => {
        fetch_users()
    }, [rendered])


    const editAdmin = async (id, type) => {
        if (type == "E") {
            navigate("/edit_admin", { state: { id: id } })
        } else {
            putBearerToken("users?_id=" + id, { deleted_at: new Date() }).then((result) => {
                if (result.error == 0) {

                    setrendered(o => o + 1)

                } else {


                }

            })

        }

    }

    const fetch_users = async () => {
        getBearerToken("contacts").then((result) => {
            if (result.error == 0) {
                console.log(result.data)
                setrows(result.data)
            } else {
                // notify(JSON.stringify(result.messages))
            }
        })
    }


    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            headerClassName: "grid-header",
            flex: 1,

        },
        {
            field: 'phone',
            headerName: 'Phone',
            headerClassName: "grid-header",
            flex: 1,

        },
        {
            field: 'email',
            headerName: 'Email',
            headerClassName: "grid-header",
            flex: 1,

        },
        {
            field: 'message',
            headerName: 'Message',
            headerClassName: "grid-header",
            flex: 1,

        },

    ];


    return (
        <div className="py-5 md:py-0">
            {/* <!-- BEGIN: Mobile Menu --> */}
            <div className="mobile-menu md:hidden">
                <MobileMenu />

            </div>
            {/* <!-- END: Mobile Menu -->
        <!-- BEGIN: Top Bar --> */}
            <TopBar level1={"Contacts Management"} />
            {/* <!-- END: Top Bar --> */}
            <div className="flex overflow-hidden">
                {/* <!-- BEGIN: Side Menu --> */}
                <SideMenu />
                {/* <!-- END: Side Menu -->
            <!-- BEGIN: Content --> */}
                <div className="content">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-12">

                            <div class="grid grid-cols-12 gap-6 mt-5">
                                <div class="intro-y col-span-12 lg:col-span-6">

                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-6">
                                {/* <!-- BEGIN: General Report --> */}

                                <div className="col-span-12 mt-6">
                                    <div className="intro-y block sm:flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Admins
                                        </h2>
                                        {/* <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                            <button onClick={() => handleOpenAddModal()} className="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="plus" className="hidden sm:block w-4 h-4 mr-2"></i> Add New </button>
                                            <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                            <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                        </div> */}
                                    </div>
                                    <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                        <DataGrid
                                            sx={{ mt: 1 }}
                                            rows={rows}
                                            columns={columns}
                                            getRowId={(data) => data._id}
                                            showCellVerticalBorder
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        pageSize: 15,
                                                    },
                                                },
                                            }}
                                            pageSizeOptions={[9]}
                                        // onCellEditCommit={(params) => update(params)}
                                        />
                                    </div>

                                </div>
                                {/* <!-- END: Weekly Top Products --> */}
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>


        </div>
    )
}

export default Sa_admin_list