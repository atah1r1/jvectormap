import { Html, Head, Main, NextScript } from 'next/document';
import '../utils/loader';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}