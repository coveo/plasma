import * as React from 'react';

import * as classNames from 'classnames';
import {SlideY} from '../../animations/SlideY';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {Svg} from '../svg/Svg';

export interface CollapsibleOwnProps {
    id: string;
    expandedOnMount?: boolean;
    headerContent?: React.ReactNode;
    headerClasses?: string;
    toggleIconClassName?: string;
    className?: string;
    withBorders?: boolean;
}

export interface CollapsibleStateProps {
    expanded?: boolean;
}

export interface CollapsibleDispatchProps {
    onMount?: () => void;
    onUnmount?: () => void;
    onToggleExpandedState?: (currentExpandedState: boolean) => void;
}

export interface CollapsibleProps extends CollapsibleOwnProps, CollapsibleStateProps, CollapsibleDispatchProps {}

export class Collapsible extends React.Component<CollapsibleProps> {
    static TIMEOUT = 150;

    componentWillMount() {
        callIfDefined(this.props.onMount);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onUnmount);
    }

    render() {
        const headerClasses = classNames(
            'cursor-pointer flex space-between center-align',
            this.props.headerClasses,
            {'mod-border-bottom mod-border-top': this.props.withBorders},
        );

        return (
            <div className={classNames(this.props.className)}>
                <div
                    className={headerClasses}
                    onClick={() => this.handleHeaderClick()}
                >
                    {this.props.headerContent}
                    <Svg
                        svgName={this.props.expanded ? 'arrow-top-rounded' : 'arrow-bottom-rounded'}
                        svgClass={classNames('icon', this.props.toggleIconClassName)}
                        className='mr3'
                    />
                </div>
                <SlideY in={this.props.expanded} timeout={Collapsible.TIMEOUT} duration={Collapsible.TIMEOUT}>
                    {this.props.children}
                </SlideY>
            </div>
        );
    }

    private handleHeaderClick() {
        callIfDefined(this.props.onToggleExpandedState, this.props.expanded);
    }
}
