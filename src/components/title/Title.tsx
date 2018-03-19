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
}

export class Title extends React.Component<ITitleProps, {}> {

    static defaultProps: Partial<ITitleProps> = {
        prefix: '',
        withTitleTooltip: false,
    };

    private getLinkIcon(): JSX.Element {
        return this.props.documentationLink
            ? <LinkSvg {...this.props.documentationLink} />
            : null;
    }

    render() {
        const prefixClasses: string = classNames({
            'mr1': !_.isEmpty(this.props.prefix),
        });

        return (
            <div className='flex flex-center full-content-x'>
                <h1 className='bold text-medium-blue mr1 truncate'>
                    <span className={prefixClasses}>{this.props.prefix}</span>
                    <Tooltip title={this.props.withTitleTooltip ? this.props.text : ''} placement='left'>
                        {this.props.text}
                    </Tooltip>
                </h1>
                {this.getLinkIcon()}
            </div>);
    }
}
