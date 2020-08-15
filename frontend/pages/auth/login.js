import React from 'react'
import Link from 'next/Link'
import AuthTemplate from '@/components/auth'
import { Container } from 'react-bootstrap'

const Login = () => {

    return (
        <AuthTemplate title="Entrar">
            <Container>
                <h1 className="text-center">Login</h1>
                <div className="text-center font-weight-light mb-5">
                    Novo no Pixer ? <Link href="/auth/signin"><a>Cadastrar-se</a></Link> 🚀💜
                </div>
            </Container>
        </AuthTemplate>
    )
}
export default Login
