import * as React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import * as s from 'underscore.string';

export type JSXRenderable = JSX.Element | JSX.Element[] | string | number;

export const getReactNodeTextContent = (node: React.ReactNode): string => {
    const HTMLString = renderToStaticMarkup(<div>{node}</div>);
    return s.stripTags(HTMLString).replace(/\s{2,}/g, ' ');
};
