import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import GlobalContextProvider from '@/context/globalContext'
import ParseCookies from '@/utils/parseCookies'
import "@/scss/app.scss"
import PT_BR from '@/langs/PT_BR'
import EN from '@/langs/EN'
import { isTrue } from "@/utils/helpers"

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, app }) => {
    return (
        <GlobalContextProvider app={app}>
            <Component {...pageProps} />
        </GlobalContextProvider>
    )
}

App.getInitialProps = async ({ Component, ctx }) => {
    const getChildProps = async (comp, ctx) => {
        let pageProps = {}
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
        return pageProps
    }

    const getAppConfigProps = ctx => {
        const { req } = ctx
        let { language } = ParseCookies(req)
        language = isTrue(language) ? language : "PT_BR"
        const contents = { PT_BR, EN }
        return {
            language,
            translate: contents[language]
        }
    }
    return { pageProps: await getChildProps(Component, ctx), app: getAppConfigProps(ctx) }
}


export default App