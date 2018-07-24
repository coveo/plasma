import * as classNames from 'classnames';
import * as React from 'react';

import {CollapsibleConnected} from '../collapsibleContainer/CollapsibleContainerConnected';
import {Svg} from '../svg/Svg';
import * as styles from './styles/collapsibleInfoBox.scss';

export interface CollapsibleInfoBoxProps {
    id: string;
    title: string;
    expandedOnMount?: boolean;
}

export class CollapsibleInfoBox extends React.PureComponent<CollapsibleInfoBoxProps> {
    render() {
        return (
            <CollapsibleConnected
                id={this.props.id}
                className={classNames(styles.roundedBorders, 'bg-white text-grey-9 p1')}
                toggleIconClassName='fill-medium-blue'
                headerContent={this.getHeader()}
                expandedOnMount={this.props.expandedOnMount}
            >
                <div className={classNames(styles.alignWithIcon, 'py1 pr1')}>
                    {this.props.children}
                </div>
            </CollapsibleConnected>
        );
    }

    private getHeader(): React.ReactNode {
        return (
            <div className='inline-flex'>
                <Svg svgName='info' className='icon mod-20 mx1' svgClass='fill-medium-grey' />
                <h3 className='text-medium-blue'>{this.props.title}</h3>
            </div>
        );
    }
}
