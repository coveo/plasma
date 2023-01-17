import {ReactWrapper} from 'enzyme';
import {mountWithStore} from '@test-utils';

import {SlideY} from '../../../animations/SlideY.js';
import {PlasmaState} from '../../../PlasmaState.js';
import {getStoreMock} from '../../../utils/tests/TestUtils.js';
import {setCollapsibleExpanded} from '../CollapsibleActions.js';
import {CollapsibleConnected, CollapsibleOwnProps} from '../CollapsibleConnected.js';
import {CollapsibleToggle} from '../CollapsibleToggle.js';
import {collapsiblePossibleProps} from './CollapsibleTestCommon.mock.js';

describe('<CollapsibleConnected />', () => {
    let store: ReturnType<typeof getStoreMock>;
    let wrapper: ReactWrapper<CollapsibleOwnProps>;
    const collapsibleProps = collapsiblePossibleProps[0];

    const mountComponentWithProps = (props: Partial<CollapsibleOwnProps> = {}, expanded: boolean = true) => {
        store = getStoreMock({
            collapsibles: [{id: collapsibleProps.id, expanded}],
        } as PlasmaState);
        wrapper = mountWithStore(
            <CollapsibleConnected {...collapsibleProps} {...props}>
                dummy children
            </CollapsibleConnected>,
            store
        );
    };

    it('should mount and unmount without error', () => {
        expect(() => {
            mountComponentWithProps();
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        describe('Expansion/Toggling logic', () => {
            it('should toggle the expanded prop to false on click of the collapsible header button', () => {
                mountComponentWithProps();

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).toContainEqual(setCollapsibleExpanded(collapsibleProps.id, false));
            });

            it('should toggle the expanded prop to true on click of the collapsible header button', () => {
                mountComponentWithProps({}, false);

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).toContainEqual(setCollapsibleExpanded(collapsibleProps.id, true));
            });

            it('should not toggle the expanded prop on click of the collapsible header button if disabled', () => {
                mountComponentWithProps({disabled: true});

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(store.getActions()).not.toContain(setCollapsibleExpanded(collapsibleProps.id, true));
            });

            it('should call onClick prop if set when clicking the toggle', () => {
                const onClickSpy = jest.fn();
                mountComponentWithProps({disabled: false, onClick: onClickSpy});

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(onClickSpy).toHaveBeenCalled();
            });

            it('should not call onClick prop when clicking the toggle if disabled', () => {
                const onClickSpy = jest.fn();
                mountComponentWithProps({disabled: true, onClick: onClickSpy});

                wrapper.find(`.${collapsibleProps.headerClasses}`).simulate('click');

                expect(onClickSpy).not.toHaveBeenCalled();
            });

            it('should set the expended from the state to SlideY', () => {
                mountComponentWithProps({}, true);

                expect(wrapper.find(SlideY).props().in).toBe(true);
            });

            it('should set the expended to the slideY', () => {
                mountComponentWithProps({}, false);

                expect(wrapper.find(SlideY).props().in).toBe(false);
            });

            it('should render header content', () => {
                mountComponentWithProps({headerContent: <div className="test">test</div>});

                expect(wrapper.find('.test').length).toBe(1);
            });

            it('should render the CollapsibleToggle if no custom collapsible icon defined', () => {
                mountComponentWithProps();

                expect(wrapper.find(CollapsibleToggle).length).toBe(1);
            });

            it('should not render the CollapsibleToggle if a custom collapsible icon is defined', () => {
                mountComponentWithProps({collapsibleToggleIcon: <div className="test">test</div>});

                expect(wrapper.find(CollapsibleToggle).length).toBe(0);
            });

            it('should set the class disabled on collapsible if disabled', () => {
                mountComponentWithProps({disabled: true});

                expect(wrapper.find(CollapsibleToggle).props().className).toContain('disabled');
            });
        });
    });
});
