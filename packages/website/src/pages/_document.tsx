import {createGetInitialProps} from '@mantine/next';
import NextDocument, {Head, Html, Main, NextScript} from 'next/document';

const getInitialProps = createGetInitialProps();

export default class Document extends NextDocument {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/wqe4zqp.css" />
                    <link rel="stylesheet" href="https://static.cloud.coveo.com/atomic/v2/themes/coveo.css"></link>
                </Head>
                <body className="coveo-styleguide">
                    <div id="App">
                        <Main />
                    </div>
                    <div id="Modals" />
                    <div id="plasma-dropdowns" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
