import classNames from 'classnames';
import * as React from 'react';

import {IClassName} from '../../utils/ClassNameUtils';
import {JSXRenderable} from '../../utils/JSXUtils';
import {LinkSvg} from '../svg/LinkSvg';
import {Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';
import {CollapsibleConnected} from './CollapsibleConnected';
import * as styles from './styles/CollapsibleContainer.scss';

export interface ICollapsibleContainerOwnProps {
    id: string;
    title: JSXRenderable;
    expandedOnMount?: boolean;
    informationUrl?: string;
    informationTooltip?: ITooltipProps;
    className?: IClassName;
    collapsibleHeaderClassName?: IClassName;
    collapsibleBodyClassName?: IClassName;
    withoutContentPadding?: boolean;
}

export interface ICollapsibleContainerStateProps {
    expanded?: boolean;
}

export interface ICollapsibleContainerProps extends ICollapsibleContainerOwnProps, ICollapsibleContainerStateProps {}

export class CollapsibleContainer extends React.Component<ICollapsibleContainerProps> {
    render() {
        const contentClasses = classNames(
            {[styles.content]: !this.props.withoutContentPadding},
            this.props.collapsibleBodyClassName,
            'mod-border-bottom'
        );

        return (
            <CollapsibleConnected
                id={this.props.id}
                className={classNames(this.props.className, styles.collapsible)}
                headerContent={this.getHeader()}
                expandedOnMount={this.props.expandedOnMount}
                headerClasses={classNames(styles.header, this.props.expanded ? 'bg-light-grey' : 'bg-white')}
                toggleIconClassName="fill-medium-blue mr4"
                withBorders
            >
                <div className={contentClasses}>{this.props.children}</div>
            </CollapsibleConnected>
        );
    }

    private getHeader = (): React.ReactNode => {
        const headerClasses = classNames(
            'inline-flex flex-center text-medium-blue caps p2 bold ml3',
            this.props.collapsibleHeaderClassName
        );
        return (
            <div className={headerClasses}>
                <div>{this.props.title}</div>
                {this.getCollapsibleHeaderIcon()}
            </div>
        );
    };

    private getSvgClass(): string {
        return classNames('icon mod-lg ml1', {
            'fill-orange': !!this.props.informationUrl,
            'fill-medium-grey': !this.props.informationUrl,
        });
    }

    private getCollapsibleHeaderIcon(): JSX.Element {
        if (!this.props.informationUrl && !this.props.informationTooltip) {
            return null;
        }

        const tooltipProps = {placement: 'right', ...this.props.informationTooltip};
        const svgProps = {svgName: this.props.informationUrl ? 'help' : 'info', svgClass: this.getSvgClass()};

        const collapsibleHeaderIcon = this.props.informationUrl ? (
            <LinkSvg url={this.props.informationUrl} target="_blank" tooltip={tooltipProps} svg={svgProps} />
        ) : (
            <Tooltip {...tooltipProps}>
                <Svg {...svgProps} />
            </Tooltip>
        );

        return <span className="round-contextual-help">{collapsibleHeaderIcon}</span>;
    }
}
