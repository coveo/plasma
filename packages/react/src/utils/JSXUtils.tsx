import classNames from 'classnames';
import {ReactNode, Children, isValidElement, cloneElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import * as _ from 'underscore';
import {clean, stripTags} from 'underscore.string';

import {decodeHtml} from './InputUtils';

export type JSXRenderable = JSX.Element | JSX.Element[] | string | number;

export const getReactNodeTextContent = (node: ReactNode): string =>
    _.compose(clean, decodeHtml, stripTags)(renderToStaticMarkup(<div>{node}</div>));

export const addClassNameToChildren = (children: ReactNode, className: string) =>
    Children.map(children, (child) =>
        isValidElement(child) ? (
            cloneElement(child, {className: classNames(child.props.className, className)})
        ) : (
            <span className={className}>{child}</span>
        )
    );
