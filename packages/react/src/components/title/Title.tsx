import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren, ReactNode, useRef, useState} from 'react';
import * as _ from 'underscore';

import {ILinkSvgProps, LinkSvg} from '../linkSvg/LinkSvg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ITitleProps {
    prefix?: string;
    text: ReactNode;
    withTitleTooltip?: boolean;
    documentationLink?: ILinkSvgProps;
    classes?: string[];
    htmlId?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const Title: FunctionComponent<PropsWithChildren<ITitleProps>> = ({
    prefix = '',
    withTitleTooltip = false,
    text,
    documentationLink,
    classes,
    htmlId,
    children,
}) => {
    const ref = useRef<HTMLHeadingElement>(null);

    const [isTruncated, setIsTruncated] = useState(false);
    const linkClasses = classNames('inline-doc-link ml1', documentationLink?.className);
    const titleClasses: string = classNames('bolder truncate flex', classes);
    const prefixClasses: string = classNames({mr1: !_.isEmpty(prefix)});
    const linkIcon = documentationLink && <LinkSvg {...documentationLink} className={linkClasses} />;
    const tooltipProps = _.isString(text) ? {title: text} : {};

    const detection = () => {
        const titleOffSetWidth = ref.current.offsetWidth;
        const titleScrollWidth = ref.current.scrollWidth;

        setIsTruncated(titleOffSetWidth < titleScrollWidth);
    };

    const title =
        withTitleTooltip || isTruncated ? (
            <Tooltip {...tooltipProps} placement="left">
                {text}
            </Tooltip>
        ) : (
            text
        );

    return (
        <div className="flex flex-center full-content-x" onMouseEnter={detection}>
            <h4 ref={ref} className={titleClasses} id={htmlId}>
                <span className={prefixClasses}>{prefix}</span>
                {title}
                {linkIcon}
            </h4>
            {children}
        </div>
    );
};
