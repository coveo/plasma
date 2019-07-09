import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {ILinkSvgProps, LinkSvg} from '../svg/LinkSvg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ITitleProps {
    prefix?: string;
    text: string;
    withTitleTooltip?: boolean;
    documentationLink?: ILinkSvgProps;
    classes?: string[];
}

export const Title: React.FunctionComponent<ITitleProps> = (props) => {
    const linkClasses = classNames('inline-doc-link', props.documentationLink && props.documentationLink.linkClasses);
    const titleClasses: string = classNames('bold', 'text-medium-blue', 'mr1', 'truncate', props.classes);
    const prefixClasses: string = classNames({mr1: !_.isEmpty(props.prefix)});

    const linkIcon = props.documentationLink && <LinkSvg {...props.documentationLink} linkClasses={[linkClasses]} />;
    const title = props.withTitleTooltip ? (
        <Tooltip title={props.text} placement="left">
            {props.text}
        </Tooltip>
    ) : (
        props.text
    );

    return (
        <div className="flex flex-center full-content-x">
            <h1 className={titleClasses}>
                <span className={prefixClasses}>{props.prefix}</span>
                {title}
            </h1>
            {linkIcon}
            {props.children}
        </div>
    );
};

Title.defaultProps = {
    prefix: '',
    withTitleTooltip: false,
};
