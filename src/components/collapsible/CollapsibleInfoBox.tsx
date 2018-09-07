import * as classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import {CollapsibleConnected} from './CollapsibleConnected';
import * as styles from './styles/CollapsibleInfoBox.scss';

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
                className={classNames(styles.container, 'text-grey-9 mod-rounded-border-2')}
                headerClasses='p1'
                toggleIconClassName='fill-medium-blue'
                headerContent={this.getHeader()}
                expandedOnMount={this.props.expandedOnMount}
            >
                <div className={classNames(styles.alignWithIcon, 'px1 pb1 mr3')}>
                    {this.props.children}
                </div>
            </CollapsibleConnected>
        );
    }

    private getHeader(): React.ReactNode {
        return this.props.isSection
            ? (
                <div className='inline-flex'>
                    <h2 className='text-medium-blue'>{this.props.title}</h2>
                    {
                        this.props.sectionAdditionalContent
                        && <span className={this.getAdditionalInfoClasses()}>{this.props.sectionAdditionalContent}</span>
                    }
                </div>
            )
            : (
                <div className='inline-flex'>
                    <Svg svgName='info' className='icon mod-20 mx1 js-info-svg' svgClass='fill-medium-grey' />
                    <h3 className='text-medium-blue'>{this.props.title}</h3>
                </div>
            );
    }

    private getAdditionalInfoClasses() {
        return classNames(
            this.props.sectionAdditionalContentClasses,
            {
                hidden: this.props.sectionAdditionalContentCondition && !this.props.sectionAdditionalContentCondition(),
            },
        );
    }
}
