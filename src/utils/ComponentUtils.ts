import * as React from 'react';
import {ILinkSvgProps} from '../components/svg/LinkSvg';

/**
 * DisplayClass is a reflection of the atomic display classes available in Vapor
 * see https://github.com/coveo/vapor/blob/04372c42cbabb06ddd79130c13902137a7956ad7/scss/utility/layout.scss
 * for more details
 */
export const DisplayClass = {
    BLOCK: 'block',
    INLINE: 'inline',
    INLINE_BLOCK: 'inline-block',
    HIDDEN: 'hidden',
    TABLE: 'table',
    TABLE_CELL: 'table-cell',
};

export interface IDefaultComponentOwnProps {
    dataAttributes?: IDataAttribute;
}

export interface IDataAttribute {
    [dataAttribute: string]: string;
}

export type ComponentContent = (new () => React.Component) | string | ((props?: any) => JSX.Element);

export const getBasicDocumentLink = (url: string, title: string = ''): ILinkSvgProps => {
    return {
        url,
        target: '_blank',
        svg: {
            svgName: 'help',
            svgClass: 'fill-orange icon mod-20',
        },
        tooltip: {
            title,
            placement: 'bottom',
            container: 'body',
        },
    };
};
