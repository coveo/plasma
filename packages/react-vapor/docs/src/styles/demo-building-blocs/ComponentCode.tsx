import * as html from 'prettier/parser-html';
import * as prettier from 'prettier/standalone';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import {atomOneLight as theme} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const ComponentCode: React.FunctionComponent = ({children}) => {
    const HTMLString = ReactDOMServer.renderToStaticMarkup(children as React.ReactElement);
    const formattedHTML = prettier.format(HTMLString, {
        plugins: [html],
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore',
        tabWidth: 4,
    });

    return (
        <div className="sg-component-source">
            <SyntaxHighlighter
                language="html"
                style={theme}
                showLineNumbers
                lineNumberContainerStyle={{paddingRight: '2rem', float: 'left'}}
            >
                {formattedHTML}
            </SyntaxHighlighter>
        </div>
    );
};
export default ComponentCode;
