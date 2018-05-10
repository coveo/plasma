import * as classNames from 'classnames';
import * as React from 'react';
import {SlideY} from '../../animations/SlideY';
import {IClassName} from '../../utils/ClassNameUtils';
import {JSXRenderable} from '../../utils/JSXUtils';
import {LinkSvg} from '../svg/LinkSvg';
import {Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface ICollapsibleContainerOwnProps {
    id: string;
    title: JSXRenderable;
    expandedOnMount?: boolean;
    informationUrl?: string;
    informationTooltip?: ITooltipProps;
    className?: IClassName;
    collapsibleHeaderClassName?: IClassName;
    collapsibleBodyClassName?: IClassName;
}

export interface ICollapsibleContainerStateProps {
    expanded?: boolean;
}

export interface ICollapsibleContainerDispatchProps {
    onMount?: () => void;
    onUnmount?: () => void;
    onToggleExpandedState?: (currentExpandedState: boolean) => void;
}

export interface ICollapsibleContainerProps extends
    ICollapsibleContainerOwnProps,
    ICollapsibleContainerStateProps,
    ICollapsibleContainerDispatchProps {}

export class CollapsibleContainer extends React.Component<ICollapsibleContainerProps> {
    private getCollapsibleHeaderClass(): string {
        return classNames(
            'collapsible-header btn',
            {
                active: this.props.expanded,
            },
            this.props.collapsibleHeaderClassName,
        );
    }

    private getCollapsibleBodyClass(): string {
        return classNames(
            'collapsible-body-visible',
            this.props.collapsibleBodyClassName,
        );
    }

    private getCollapsibleBody(): JSX.Element {
        return <div className={this.getCollapsibleBodyClass()}>{this.props.children}</div>;
    }

    private getSvgClass(): string {
        return classNames(
            'icon mod-lg ml1',
            {
                'fill-orange': !!this.props.informationUrl,
                'fill-medium-grey': !this.props.informationUrl,
            },
        );
    }

    private getCollapsibleHeaderIcon(): JSX.Element {
        if (!this.props.informationUrl && !this.props.informationTooltip) {
            return null;
        }

        const tooltipProps = {placement: 'right', ...this.props.informationTooltip};
        const svgProps = {svgName: this.props.informationUrl ? 'help' : 'info', svgClass: this.getSvgClass()};

        const collapsibleHeaderIcon = this.props.informationUrl
            ? <LinkSvg url={this.props.informationUrl} target='_blank' tooltip={tooltipProps} svg={svgProps} />
            : <Tooltip {...tooltipProps}><Svg {...svgProps} /></Tooltip>;

        return <span className='round-contextual-help'>{collapsibleHeaderIcon}</span>;
    }

    componentWillMount() {
        if (this.props.onMount) {
            this.props.onMount();
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount();
        }
    }

    render() {
        return (
            <div id={this.props.id} className={classNames('collapsible', this.props.className)}>
                <button
                    type='button'
                    className={this.getCollapsibleHeaderClass()}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.props.onToggleExpandedState(this.props.expanded)}>
                    {this.props.title}
                    {this.getCollapsibleHeaderIcon()}
                </button>
                <SlideY in={this.props.expanded} timeout={350}>
                    {this.getCollapsibleBody()}
                </SlideY>
            </div>
        );
    }
}
