import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {LinkSvg} from '../../svg/LinkSvg';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ICollapsibleContainerOwnProps} from '../CollapsibleContainer';
import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';
import * as styles from '../styles/CollapsibleContainer.scss';
import {collapsibleContainerPossibleProps} from './CollapsibleTestCommon.spec';

describe('<CollapsibleContainerConnected />', () => {
    let store: Store<IReactVaporState>;
    let basicCollapsibleContainerProps: ICollapsibleContainerOwnProps;

    beforeEach(() => {
        store = TestUtils.buildStore();
        basicCollapsibleContainerProps = {...collapsibleContainerPossibleProps[0]};
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: ICollapsibleContainerOwnProps) => {
        return mount(
            <Provider store={store}>
                <CollapsibleContainerConnected {...props}>
                    dummy children
                </CollapsibleContainerConnected>
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
    };

    describe('Header Svg logic', () => {
        it('should render with no svg if no informationUrl and informationTooltip are passed', () => {
            const collapsibleHeader = mountComponentWithProps(basicCollapsibleContainerProps);
            expect(collapsibleHeader.find(`.${basicCollapsibleContainerProps.collapsibleHeaderClassName}`).find(Svg).length).toBe(0);
        });

        it('should render with an orange LinkSvg if informationUrl is passed', () => {
            const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps, informationUrl: 'http://whatever.com'});
            expect(collapsible.find(`.${styles.header}`).find(LinkSvg).length).toBe(1);
            expect(collapsible.find(`.${styles.header}`).find(LinkSvg).prop('svg').svgClass).toContain('fill-orange');
        });

        it('should render with a grey Svg nested in a Tooltip if informationTooltip is passed and not informationUrl', () => {
            const collapsible = mountComponentWithProps({...basicCollapsibleContainerProps, informationTooltip: {title: 'whatever'}});
            expect(collapsible.find(`.${styles.header}`).find(Tooltip).length).toBe(1);
            expect(collapsible.find(`.${styles.header}`).find(Tooltip).find(Svg).length).toBe(1);
            expect(collapsible.find(`.${styles.header}`).find(Tooltip).find(Svg).prop('svgClass')).toContain('fill-medium-grey');
        });
    });
});
