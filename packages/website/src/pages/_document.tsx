import {Head, Html, Main, NextScript} from 'next/document';
import {FunctionComponent} from 'react';

const Document: FunctionComponent<React.PropsWithChildren<unknown>> = () => (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/wqe4zqp.css" />
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

export default Document;
