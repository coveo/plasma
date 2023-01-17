import classNamesPkg from 'classnames';
const classNames = classNamesPkg as unknown as typeof classNamesPkg.default;
import {Children, cloneElement, isValidElement, ReactNode} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import * as _ from 'underscore';
import s from 'underscore.string';

import {decodeHtml} from './InputUtils.js';

export type JSXRenderable = JSX.Element | JSX.Element[] | string | number;

export const getReactNodeTextContent = (node: ReactNode): string =>
    _.compose(s.clean, decodeHtml, s.stripTags)(renderToStaticMarkup(<div>{node}</div>));

export const addClassNameToChildren = (children: ReactNode, className: string) =>
    Children.map(children, (child) =>
        isValidElement(child) ? (
            cloneElement<{className?: string; [key: string]: any}>(child, {
                className: classNames(child.props.className, className),
            })
        ) : (
            <span className={className}>{child}</span>
        )
    );
