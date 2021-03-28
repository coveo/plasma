import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import {CollapsibleConnected} from './CollapsibleConnected';
export interface CollapsibleInfoBoxProps {
    id: string;
    title: string;
    expandedOnMount?: boolean;
    isSection?: boolean;
    sectionAdditionalContent?: React.ReactNode;
    sectionAdditionalContentCondition?: () => boolean;
    sectionAdditionalContentClasses?: string;
}

export class CollapsibleInfoBox extends React.PureComponent<CollapsibleInfoBoxProps> {
    render() {
        return (
            <CollapsibleConnected
                id={this.props.id}
                className={'collapsible-info-box container label mod-rounded-border-2'}
                headerClasses="p1"
                headerContent={this.getHeader()}
                expandedOnMount={this.props.expandedOnMount}
            >
                <div className={'collapsible-info-box align-with-icon px1 pb1 mr3'}>{this.props.children}</div>
            </CollapsibleConnected>
        );
    }

    private getHeader(): React.ReactNode {
        return this.props.isSection ? (
            <div className="flex pl1">
                <h2>{this.props.title}</h2>
                {this.props.sectionAdditionalContent && (
                    <span className={this.getAdditionalInfoClasses()}>{this.props.sectionAdditionalContent}</span>
                )}
            </div>
        ) : (
            <div className="inline-flex">
                <Svg svgName="info" className="icon mod-20 mx1 js-info-svg" />
                <h3>{this.props.title}</h3>
            </div>
        );
    }

    private getAdditionalInfoClasses() {
        return classNames(this.props.sectionAdditionalContentClasses, {
            hidden: this.props.sectionAdditionalContentCondition && !this.props.sectionAdditionalContentCondition(),
        });
    }
}
