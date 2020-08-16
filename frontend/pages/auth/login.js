import React, { useState, useEffect } from 'react'
import Link from 'next/Link'
import AuthTemplate from '@/components/auth'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import FloatingLabelInput from '@/components/form/floating-label-input'
import { isValidEmail, isValidPassword } from '@/utils/helpers'
import './styles.scss'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [remember, setRemember] = useState(true)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    useEffect(() => {
        if (!email) return setErrorEmail(false)
        const valid = isValidEmail(email)
        if (!valid) return setErrorEmail(true)
        return setErrorEmail(false)
    }, [email])

    useEffect(() => {
        if (!password) return setErrorPassword(false)
        const valid = isValidPassword(password)
        if (!valid) return setErrorPassword(true)
        return setErrorPassword(false)
    }, [password])

    const submitLogin = e => {
        e.preventDefault()
        if (!email || !password) return console.log("Formulario inválido")
        if (errorEmail || errorPassword) return console.log("Formulario inválido")
        setLoading(true)
        console.log("formulario válido")
    }

    const SignBtnContent = () => {
        if (!loading) return "Entrar"
        return (<>
            <span class="spinner-grow spinner-grow-sm mr-2" /> Entrando...
        </>)
    }

    return (
        <AuthTemplate title="Entrar">
            <Container>
                <h1 className="text-center">Login {errorEmail}</h1>
                <div className="text-center font-weight-light mb-5">
                    Novo no Pixer ? <Link href="/auth/signin"><a>Registre-se</a></Link> 💜
                </div>
                <Row className="d-flex flex-row justify-content-center mb-5">
                    <Col sm={12} lg={9} className="mt-5">
                        <Row>
                            <Col sm={12} lg={6} style={{ borderRight: `1px solid #e7e7e7` }} className="px-4">
                                <form onSubmit={e => submitLogin(e)}>
                                    <FloatingLabelInput
                                        className="mb-4"
                                        id="email"
                                        label="Email"
                                        placeholder="Digite aqui o Email ..."
                                        value={email}
                                        onChange={el => setEmail(el.target.value)}
                                        error={errorEmail}
                                    />
                                    <FloatingLabelInput
                                        className="mb-2"
                                        id="password"
                                        label="Senha"
                                        type="password"
                                        placeholder="Digite aqui a Senha ..."
                                        value={password}
                                        onChange={el => setPassword(el.target.value)}
                                        error={errorPassword}
                                    />
                                    <Row>
                                        <Col className="d-flex flex-row justify-content-between">
                                            <small>
                                                <Form.Group controlId="remeberMe">
                                                    <Form.Check type="checkbox" label="Lembrar de mim" checked={remember} onClick={() => setRemember(!remember)} />
                                                </Form.Group>
                                            </small>
                                            <small>
                                                <Link href="/auth/account-recovery">
                                                    <a>Esqueceu sua senha?</a>
                                                </Link>
                                            </small>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} lg={6}>
                                            <Button type="submit" variant={`${loading ? 'primary' : 'outline-primary'} rounded-pill mt-4`} block disabled={loading}>
                                                <SignBtnContent />
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                            <Col sm={12} lg={6} className="px-4 d-flex flex-column justify-content-center align-content-center">
                                <button className="social-btn facebook">
                                    <div className="buttonIcon">
                                        <Image src="/images/social/facebook-logo.svg" />
                                    </div>
                                    <div className="text-center w-100">Continuar com o Facebook</div>
                                </button>
                                <button className="social-btn google mt-3">
                                    <div className="buttonIcon">
                                        <Image src="/images/social/google-logo.svg" />
                                    </div>
                                    <div className="text-center w-100">Continuar com o Google</div>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AuthTemplate>
    )
}
export default Login
