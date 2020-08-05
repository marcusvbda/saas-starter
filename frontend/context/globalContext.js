import React, { useEffect, createContext, useState } from 'react'
import Cookie from "js-cookie"
import PT_BR from "../langs/PT_BR"
import EN from "../langs/EN"
export const GlobalContext = createContext()

const GlobalContextProvider = ({ children, app }) => {
    return (
        <GlobalContext.Provider value={{ app }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider