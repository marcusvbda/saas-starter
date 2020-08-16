import React, { useState } from 'react'
import Link from 'next/Link'
import AuthTemplate from '@/components/auth'
import { Container, Row, Col } from 'react-bootstrap'
import FloatingLabelInput from '@/components/form/floating-label-input'
import { checkemail, checkpassword } from '@/utils/helpers'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isInvalidEmail, setIsInvalidEmail] = useState(false)
    const [isInvalidPassword, setIsInvalidPassword] = useState(false)

    const submitLogin = e => {
        e.preventDefault()
        console.log(email, password)
    }

    const isInvalidForm = () => (isInvalidEmail || isInvalidPassword)

    return (
        <AuthTemplate title="Entrar">
            <Container>
                <h1 className="text-center">Login</h1>
                <div className="text-center font-weight-light mb-5">
                    Novo no Pixer ? <Link href="/auth/signin"><a>Cadastrar-se</a></Link> 💜
                </div>
                <Row className="d-flex flex-row justify-content-center">
                    <Col sm={12} lg={8}>
                        <Row>
                            <Col sm={12} lg={6}>
                                <form onSubmit={e => submitLogin(e)}>
                                    <FloatingLabelInput
                                        id="email"
                                        label="Email"
                                        placeholder="Digite aqui o Email ..."
                                        value={email}
                                        onChange={el => setEmail(el.target.value)}
                                        error={isInvalidEmail}
                                        onBlur={() => setIsInvalidEmail(!checkemail(email))}
                                    />
                                    <FloatingLabelInput
                                        id="password"
                                        label="Senha"
                                        type="password"
                                        placeholder="Digite aqui a Senha ..."
                                        value={password}
                                        onChange={el => setPassword(el.target.value)}
                                        error={isInvalidPassword}
                                        onBlur={() => setIsInvalidPassword(!checkpassword(password))}
                                        description="Mínimo 6 caracteres"
                                    />
                                    <button type="submit" disabled={isInvalidForm()}>Vai</button>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AuthTemplate>
    )
}
export default Login
