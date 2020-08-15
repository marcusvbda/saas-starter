import React from 'react'
import Link from 'next/Link'
import LandingTemplate from '@/components/landing'

import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    const RenderItems = () => {
        let items = []
        for (let i = 0;i < 3;i++) {
            items.push(
                <Col sm={12} lg={4} key={i}>
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" role="button">Fusce dapibus</a></p>
                </Col>
            )
        }
        return items
    }

    return (
        <LandingTemplate title="Lorem Ipsum">
            <Jumbotron>
                <Container>
                    <h1>Lorem ipsum!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sapien finibus, tincidunt justo vel, rhoncus dolor. Etiam tincidunt pulvinar metus ac mattis. Aliquam viverra consectetur libero, pulvinar sagittis ipsum egestas ac. Nunc sit amet blandit mauris. In placerat facilisis lacus sed faucibus. In quis ultrices nisl. Aliquam vestibulum in turpis luctus rutrum. Nam lacinia turpis ac mi vulputate, in interdum dui iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    <p>
                        <Link href="/auth/login">
                            <Button variant="primary">Entrar</Button>
                        </Link>
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <RenderItems />
                </Row>
            </Container>
        </LandingTemplate>
    )
}
export default Home
