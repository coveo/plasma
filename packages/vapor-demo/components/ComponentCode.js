import ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import html from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import {atomOneLight} from 'react-syntax-highlighter/dist/styles/hljs';

export const ComponentCode = ({children}) => {
    const HTMLString = ReactDOMServer.renderToStaticMarkup(children);
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
                style={atomOneLight}
                showLineNumbers
                lineNumberContainerStyle={{paddingRight: '2rem', float: 'left'}}
            >
                {formattedHTML}
            </SyntaxHighlighter>
        </div>
    );
};
export default ComponentCode;
