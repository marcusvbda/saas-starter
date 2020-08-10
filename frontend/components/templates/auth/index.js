import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

const AuthTemplate = ({ children, title }) => {
    const defaultTitle = "Pixer"

    const getTitle = () => {
        if (!title) return defaultTitle
        return `${defaultTitle} | ${title}`
    }

    return (
        <div>
            <Head>
                <title>{getTitle()}</title>
                <meta property="og:title" content={getTitle()} key="title" />
            </Head>
            <div className="animated-gradient-background h-100vh pt-5">
                <Container className="d-flex justify-content-center align-items-center">
                    {children}
                </Container>
            </div>

        </div>
    )
}


export default AuthTemplate
