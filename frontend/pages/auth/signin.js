import React from 'react'
import Link from 'next/Link'
import AuthTemplate from '@/components/auth'
import { Container } from 'react-bootstrap'

const Signin = () => {

    return (
        <AuthTemplate title="Cadastro">
            <Container>
                <h1 className="text-center">Registre-se</h1>
                <div className="text-center font-weight-light mb-5">
                    Já tem uma conta Pixer 😎 ? <Link href="/auth/login"><a>login</a></Link>
                </div>
            </Container>
        </AuthTemplate>
    )
}
export default Signin
