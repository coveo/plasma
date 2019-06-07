import ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import html from 'prettier/parser-html';
import prettier from 'prettier/standalone';

export const ComponentCode = ({children}) => {
    const HTMLString = ReactDOMServer.renderToStaticMarkup(children);
    const formattedHTML = prettier.format(HTMLString, {
        plugins: [html],
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore',
    });

    return (
        <div className="sg-component-source">
            <SyntaxHighlighter language="html">{formattedHTML}</SyntaxHighlighter>
        </div>
    );
};
export default ComponentCode;
