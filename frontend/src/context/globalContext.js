import React, { createContext } from 'react'
export const GlobalContext = createContext()

const GlobalContextProvider = ({ children, app }) => {
    return (
        <GlobalContext.Provider value={{ app }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider