import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getBearerToken } from '../../../utils/Apis'
import { Constants } from '../../../utils/Constants'

const SideMenu = () => {

    const search = useLocation().pathname
    const navigate = useNavigate()
    const [openedMenu, setopenedMenu] = React.useState("")

    const fetch_acces_token = async () => {


        getBearerToken("updateAccessTokenUsingRefreshToken").then((result) => {
            if (result.error_code == 0) {
                alert("Updated")
            } else {
                // notify(JSON.stringify(result.messages))
            }
        })
    }

    React.useEffect(() => {
        openMenu()
    }, [])
    

    const openMenu = (val=null) => {
        if(val != null && openMenu==""){
            setopenedMenu(val)
            localStorage.setItem(Constants.OPENEDMENU , val)
        }
        if(val == null && openMenu!=""){
            setopenedMenu(val)
            localStorage.setItem(Constants.OPENEDMENU , openedMenu)
        }
        if(val != null && openMenu!=""){
            setopenedMenu(val)
            localStorage.setItem(Constants.OPENEDMENU , val)
        }
        if(val == null && openMenu==""){
            let z = localStorage.getItem(Constants.OPENEDMENU)
            if(z==undefined || z=="" || z==null){
                setopenedMenu("Admin")
            }else{
                setopenedMenu(z)
            }
        }
    }
    return (
        <nav className="side-nav">
            <ul>

                <li>
                    <div style={{cursor:"pointer"}} onClick={() => openMenu("Admin")} className={search == "/create_admin" || search == "/admin_list" || search == "/" ? "side-menu  side-menu--active" : "side-menu"}>
                        <div class="side-menu__icon"> <i data-lucide="home"></i> </div>
                        <div class="side-menu__title">
                            Contacts
                            <div class="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </div>
                    {
                        openedMenu == "Admin" 
                        ?
                        <ul class="side-menu__sub-open">
                        <li>
                            <a href="/admin_list" className={search == "/admin_list" || search == "/" ? "side-menu  side-menu--active" : "side-menu"}>
                                <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                                <div className="side-menu__title">
                                    Contact List
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/create_admin" className={search == "/create_admin" ? "side-menu  side-menu--active" : "side-menu"}>
                                <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                                <div className="side-menu__title">
                                    Add Contacts
                                </div>
                            </a>
                        </li>
                    </ul>
                        :
                        null
                    }
                    

                </li>
                <li>
                    <div className="side-menu" onClick={() => {
                        localStorage.clear()
                        navigate("/login")
                    }}>
                        <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                        <div className="side-menu__title">
                            Logout
                        </div>
                    </div>
                </li>

            </ul>
        </nav>
    )
}

export default SideMenu