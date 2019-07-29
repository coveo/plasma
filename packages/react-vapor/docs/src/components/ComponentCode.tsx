import * as React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

// @ts-ignore
import {tomorrow as theme} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ComponentCode: React.FunctionComponent = ({children}) => {
    return (
        <div
            className="mt2"
            style={{fontFamily: 'source_code_pro_regular, monospace', fontSize: '16px', lineHeight: '1.2'}}
        >
            <SyntaxHighlighter
                language="tsx"
                style={theme}
                showLineNumbers
                lineNumberContainerStyle={{paddingRight: '2rem', float: 'left'}}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};
