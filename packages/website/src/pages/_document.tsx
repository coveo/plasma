import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import * as React from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="coveo-styleguide">
                    <div id="App">
                        <Main />
                    </div>
                    <div id="Modals" />
                    <div id="Drops" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
