import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getDescription() {
        return "SocialStore is a ecommerce platform to social networks selling"
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/images/favicon.jpg" />
                    <meta property="og:image" content="/images/favicon.jpg" />
                    <meta property="og:url" content="image/jpg" />
                    <meta property="og:description" content={this.getDescription()} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={this.getDescription()} />
                    <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default _Document