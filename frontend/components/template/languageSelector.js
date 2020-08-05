import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import Cookie from "js-cookie"
import Router from 'next/router'

const LanguageSelector = () => {
    const { app } = useContext(GlobalContext)

    const setLanguage = lang => {
        Cookie.set("language", lang)
        Router.reload(window.location.pathname)
    }

    return (
        <div className="language-selector d-flex flex-row mr-3">
            <div className={`language-item brazil cursor-pointer ${app.language == "PT_BR" ? 'active' : ''}`} onClick={() => setLanguage("PT_BR")}></div>
            <div className={`language-item usa cursor-pointer ${app.language == "EN" ? 'active' : ''}`} onClick={() => setLanguage("EN")}></div>
        </div>
    )
}

export default LanguageSelector