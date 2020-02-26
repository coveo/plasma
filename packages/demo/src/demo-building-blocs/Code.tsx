import * as html from 'prettier/parser-html';
import * as typescript from 'prettier/parser-typescript';
import * as prettier from 'prettier/standalone';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import {prism as theme} from 'react-syntax-highlighter/dist/esm/styles/prism';

// tslint:disable-next-line
const prettierConfig = require('tsjs/prettier-config');

SyntaxHighlighter.registerLanguage('tsx', tsx);

export const Code: React.FunctionComponent<{language: string}> = ({language, children}) => {
    let formattedCode: React.ReactNode = children;
    if (language === 'html') {
        const HTMLString = ReactDOMServer.renderToStaticMarkup(children as React.ReactElement);
        formattedCode = prettier.format(HTMLString, {
            ...prettierConfig,
            plugins: [html],
            parser: 'html',
            htmlWhitespaceSensitivity: 'ignore',
        });
    } else if (language === 'tsx') {
        formattedCode = prettier.format(children as string, {
            ...prettierConfig,
            plugins: [typescript],
            parser: 'typescript',
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
export default Code;
