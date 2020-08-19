import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Button, Image, Container } from 'react-bootstrap'
import Head from 'next/head'

const LandingTemplate = ({ title, children }) => {

    const GetYear = () => {
        const date = new Date()
        const start_date = '2019'
        const current_date = date.getFullYear()
        if (start_date == current_date) return current_date
        return `${start_date} - ${date.getFullYear()}`
    }

    const GetTitle = () => {
        const defaultTitle = "Pixer"
        if (!title) return defaultTitle
        return `${title} | ${defaultTitle}`
    }

    return (
        <>
            <Head>
                <title>{GetTitle()}</title>
                <meta property="og:title" content={GetTitle()} key="title" />
            </Head>
            <Navbar expand="lg" bg="ligth">
                <Container>
                    <Link href="">
                        <Navbar.Brand className="cursor-pointer">
                            <Image src="/images/logo_clean.png"
                                height="30"
                                alt="Pixer" />
                        </Navbar.Brand>
                    </Link>
                    <Nav className="ml-auto">
                        <Link href="/auth/login">
                            <Button variant="outline-success rounded-pill">Entrar</Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <main>
                {children}
            </main>
            <footer className="footer container text-muted mt-4">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <Image src="/images/logo_clean.png"
                        height="25"
                        alt="Pixer" />
                    <GetYear />
                </div>
            </footer>
        </>
    )
}
export default LandingTemplate
