import React from 'react'
import Link from 'next/Link'
import { Navbar, Nav, Container, Image, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const AuthTemplate = ({ title, children }) => {

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
            <Navbar expand="lg" bg="ligth" className="d-flex align-items-center">
                <Container >
                    <Image src="/images/logo_clean.png"
                        height="50"
                        alt="Pixer" />
                    <Nav className="ml-auto">
                        <Link href="/" >
                            <FontAwesomeIcon icon={faTimes} style={{ fontSize: 50 }} className="cursor-pointer" />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <main>
                {children}
            </main>
            <footer className="footer text-muted">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col sm={12} lg={6} className="d-flex flex-column">
                            <small className="text-center">* Ao se inscrever, você concorda com os nossos <Link href="/about/terms-of-use"><a>Termos de Uso</a></Link> e</small>
                            <small className="text-center">a receber emails e atualizações Pixer e</small>
                            <small className="text-center">reconhece que você leu nossa <Link href="/about/privacy"><a>Política de Privacidade</a></Link>.</small>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default AuthTemplate
