import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="favicon/media/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="favicon/media/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="favicon/media/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="favicon/media/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="favicon/media/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="favicon/media/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="favicon/media/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="favicon/media/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="favicon/media/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="favicon/media/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="favicon/media/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="favicon/media/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="favicon/media/favicon-16x16.png"
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="favicon/media/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#ffffff" />

                    <link
                        rel="shortcut icon"
                        href="/favicon.ico"
                        type="image/x-icon"
                    />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link
                        rel="StyleSheet"
                        href="./fonts/style.css"
                        type="text/css"
                    />
                    <meta
                        name="google-site-verification"
                        content="Oz1GIfs1SOL8dT_GiwqN6q26lahUBJUHeLWRPe9vv-A"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
