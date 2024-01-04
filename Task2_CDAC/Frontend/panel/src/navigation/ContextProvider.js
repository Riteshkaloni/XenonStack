import React, { useState, createContext } from 'react'
import { Constants } from '../utils/Constants'
export const GlobalContext = createContext()
const ContextProvider = (props) => {
    console.log(" global session provider", localStorage.getItem(Constants.JWT))
    const [isGlobalAccess, setGlobalAccess] = useState(localStorage.getItem(Constants.APP_KEY) == "" || localStorage.getItem(Constants.APP_KEY) == undefined ? false : true)
    const [isGlobalAccessType, setGlobalAccessType] = useState(localStorage.getItem(Constants.USERTYPE) == "" || localStorage.getItem(Constants.USERTYPE) == undefined ? "" : localStorage.getItem(Constants.USERTYPE))
    
    return (
        <GlobalContext.Provider value={{
            isGlobalAccess, setGlobalAccess, isGlobalAccessType, setGlobalAccessType
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider