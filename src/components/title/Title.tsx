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
        const linkClasses = _.chain([
            'inline-doc-link',
            this.props.documentationLink && this.props.documentationLink.linkClasses,
        ]).flatten().compact().value();

        return this.props.documentationLink
            ? <LinkSvg {...this.props.documentationLink} linkClasses={linkClasses} />
            : null;
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

        return (
            <div className='flex flex-center full-content-x'>
                <h1 className={titleClasses}>
                    <span className={prefixClasses}>{this.props.prefix}</span>
                    <Tooltip title={this.props.withTitleTooltip ? this.props.text : ''} placement='left'>
                        {this.props.text}
                    </Tooltip>
                </h1>
                {this.getLinkIcon()}
            </div>);
    }
}
