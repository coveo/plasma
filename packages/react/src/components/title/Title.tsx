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
export const Title: FunctionComponent<PropsWithChildren<ITitleProps>> = (props) => {
    const ref = useRef<HTMLHeadingElement>();

    const [isTruncated, setIsTruncated] = useState(false);
    const linkClasses = classNames('inline-doc-link ml1', props.documentationLink?.className);
    const titleClasses: string = classNames('bolder truncate flex', props.classes);
    const prefixClasses: string = classNames({mr1: !_.isEmpty(props.prefix)});
    const linkIcon = props.documentationLink && <LinkSvg {...props.documentationLink} className={linkClasses} />;
    const tooltipProps = _.isString(props.text) ? {title: props.text} : {};

    const detection = () => {
        const titleOffSetWidth = ref.current.offsetWidth;
        const titleScrollWidth = ref.current.scrollWidth;

        setIsTruncated(titleOffSetWidth < titleScrollWidth);
    };

    const title =
        props.withTitleTooltip || isTruncated ? (
            <Tooltip {...tooltipProps} placement="left">
                {props.text}
            </Tooltip>
        ) : (
            props.text
        );

    return (
        <div className="flex flex-center full-content-x" onMouseEnter={detection}>
            <h4 ref={ref} className={titleClasses} id={props.htmlId}>
                <span className={prefixClasses}>{props.prefix}</span>
                {title}
                {linkIcon}
            </h4>
            {props.children}
        </div>
    );
};

Title.defaultProps = {
    prefix: '',
    withTitleTooltip: false,
};
