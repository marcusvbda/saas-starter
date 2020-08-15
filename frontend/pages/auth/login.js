import React from 'react'
import Link from 'next/Link'
import AuthTemplate from '@/components/auth'
import { Container, Row, Col } from 'react-bootstrap'
import FloatingLabelInput from '@/components/form/floating-label-input'

const Login = () => {

    return (
        <AuthTemplate title="Entrar">
            <Container>
                <h1 className="text-center">Login</h1>
                <div className="text-center font-weight-light mb-5">
                    Novo no Pixer ? <Link href="/auth/signin"><a>Cadastrar-se</a></Link> 🚀💜
                </div>
                <Row className="d-flex flex-row justify-content-center">
                    <Col sm={12} lg={8}>
                        <Row>
                            <Col sm={12} lg={6}>
                                <FloatingLabelInput id="email" label="Email" placeholder="Digite aqui o email ..." />
                                <FloatingLabelInput id="password" label="password" placeholder="Digite aqui a senha ..." />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AuthTemplate>
    )
}
export default Login
