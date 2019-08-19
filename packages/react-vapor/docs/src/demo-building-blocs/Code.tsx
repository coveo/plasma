import * as html from 'prettier/parser-html';
import * as prettier from 'prettier/standalone';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// @ts-ignore
import {prism as theme} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ComponentCode: React.FunctionComponent<{language: string}> = ({language, children}) => {
    let formattedCode: React.ReactNode = children;
    if (language === 'html') {
        const HTMLString = ReactDOMServer.renderToStaticMarkup(children as React.ReactElement);
        formattedCode = prettier.format(HTMLString, {
            plugins: [html],
            parser: 'html',
            htmlWhitespaceSensitivity: 'ignore',
            tabWidth: 4,
        });
    }

    return (
        <SyntaxHighlighter
            language={language}
            style={theme}
            showLineNumbers
            customStyle={{fontFamily: 'source_code_pro_regular, monospace', fontSize: '16px', lineHeight: '1.2'}}
            lineNumberContainerStyle={{paddingRight: '2rem', float: 'left'}}
        >
            {formattedCode}
        </SyntaxHighlighter>
    );
};
export default ComponentCode;
