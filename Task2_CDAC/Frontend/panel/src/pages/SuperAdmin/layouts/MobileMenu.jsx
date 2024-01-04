import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const MobileMenu = () => {
    return (
        <>
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="Midone - HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
                </a>
                <a href="javascript:;" className="mobile-menu-toggler"> <MenuIcon className="w-8 h-8 text-white transform -rotate-90" />  </a>
            </div>
            <div className="scrollable">
                <a href="javascript:;" className="mobile-menu-toggler"> <HighlightOffIcon/> </a>
                <ul className="scrollable__content py-2">
                    
                    <li>
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <i data-lucide="home"></i> </div>
                            <div className="menu__title"> Dashboard <i data-lucide="chevron-down" className="menu__sub-icon transform rotate-180"></i> </div>
                        </a>
                        
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default MobileMenu