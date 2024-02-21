import GlobalStyle from '/home/erick/www/alura/nextjs-curso/src/theme/GlobalStyle.js'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
