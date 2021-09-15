/* eslint-disable no-console */
import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {ILinkSvgProps, LinkSvg} from '../svg/LinkSvg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ITitleProps {
    prefix?: string;
    text: React.ReactNode;
    withTitleTooltip?: boolean;
    documentationLink?: ILinkSvgProps;
    classes?: string[];
    htmlId?: string;
}

export const Title: React.FunctionComponent<ITitleProps> = (props) => {
    const ref = React.useRef<HTMLHRElement>();
    const [isTruncated, setIsTruncated] = React.useState(false);
    const linkClasses = classNames('inline-doc-link', props.documentationLink && props.documentationLink.linkClasses);
    const titleClasses: string = classNames('bolder', 'mr1', 'truncate', props.classes);
    const prefixClasses: string = classNames({mr1: !_.isEmpty(props.prefix)});
    const linkIcon = props.documentationLink && <LinkSvg {...props.documentationLink} linkClasses={[linkClasses]} />;
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
            </h4>
            {linkIcon}
            {props.children}
        </div>
    );
};

Title.defaultProps = {
    prefix: '',
    withTitleTooltip: false,
};
