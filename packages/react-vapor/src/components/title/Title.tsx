import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {ILinkSvgProps, LinkSvg} from '../svg/LinkSvg';
import {Tooltip} from '../tooltip/Tooltip';

export interface ITitleProps extends React.ClassAttributes<Title> {
    prefix?: string;
    text: string;
    withTitleTooltip?: boolean;
    documentationLink?: ILinkSvgProps;
    classes?: string[];
}

export class Title extends React.Component<ITitleProps, {}> {

    static defaultProps: Partial<ITitleProps> = {
        prefix: '',
        withTitleTooltip: false,
    };

    private getLinkIcon(): JSX.Element {
        if (!this.props.documentationLink) {
            return null;
        }

        const linkClasses = classNames(
            'inline-doc-link',
            this.props.documentationLink.linkClasses,
        ).split(' ');

        return <LinkSvg {...this.props.documentationLink} linkClasses={linkClasses} />;
    }

    render() {
        const prefixClasses: string = classNames({
            'mr1': !_.isEmpty(this.props.prefix),
        });

        const titleClasses: string = classNames('bold',
            'text-medium-blue',
            'mr1',
            'truncate',
            this.props.classes,
        );

        const title = this.props.withTitleTooltip
            ? <Tooltip title={this.props.text} placement='left'>
                {this.props.text}
            </Tooltip>
            : this.props.text;

        return (
            <div className='flex flex-center full-content-x'>
                <h1 className={titleClasses}>
                    <span className={prefixClasses}>{this.props.prefix}</span>
                    {title}
                </h1>
                {this.getLinkIcon()}
            </div>);
    }
}
