import {ReactWrapper} from 'enzyme';
import {mountWithStore} from 'enzyme-redux';
import * as React from 'react';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {Svg} from '../../svg/Svg';
import {CollapsibleOwnProps} from '../CollapsibleConnected';
import {CollapsibleContainerConnected, ICollapsibleContainerOwnProps} from '../CollapsibleContainerConnected';
import {CollapsibleHeaderIcon} from '../CollapsibleHeaderIcon';
import * as styles from '../styles/CollapsibleContainer.scss';
import {collapsiblePossibleProps} from './CollapsibleTestCommon.spec';

describe('<CollapsibleContainerConnected />', () => {
    let store: Store<IReactVaporState>;
    let wrapper: ReactWrapper<CollapsibleOwnProps>;
    const collapsibleProps = collapsiblePossibleProps[0];

    const mountComponentWithProps = (props: Partial<ICollapsibleContainerOwnProps> = {}, expanded: boolean = true) => {
        store = getStoreMock({
            collapsibles: [{id: collapsibleProps.id, expanded}],
        } as IReactVaporState);
        wrapper = mountWithStore(
            <CollapsibleContainerConnected {...collapsibleProps} {...props}>
                dummy children
            </CollapsibleContainerConnected>,
            store
        );
    };

    describe('Header Svg logic', () => {
        it('should render with no svg if no informationUrl and informationTooltip are passed', () => {
            mountComponentWithProps();

            expect(wrapper.find(`.${collapsibleProps.headerClasses}`).find(Svg).length).toBe(0);
        });

        it('should render a CollapsibleHeaderIcon', () => {
            mountComponentWithProps({
                ...collapsibleProps,
                informationUrl: 'http://whatever.com',
            });

            expect(wrapper.find(`.${styles.header}`).find(CollapsibleHeaderIcon).length).toBe(1);
        });
    });
});
