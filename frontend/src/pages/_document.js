import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    getDescription() {
        return "Lorem ipsum here you have to type your page description"
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/images/small_logo.png" />
                    <meta property="og:image" content="/images/small_logo.png" />
                    <meta property="og:url" content="image/png" />
                    <meta property="og:description" content={this.getDescription()} />
                    <meta property="og:type" content="website" />
                    <meta name="description" content={this.getDescription()} />
                    {/* <meta name="google-site-verification" content="EjVfNL7-L50qFZGgRVeOhwjXySQrbkU4_XTsic2lvGM" /> */}
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