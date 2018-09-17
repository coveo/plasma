import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {UUID} from '../../../utils/UUID';
import {FlatSelect, IFlatSelectProps} from '../FlatSelect';
import {selectFlatSelect} from '../FlatSelectActions';
import {FlatSelectConnected} from '../FlatSelectConnected';
import {IFlatSelectOptionProps} from '../FlatSelectOption';

describe('FlatSelect', () => {

    describe('<FlatSelectConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let flatSelect: ReactWrapper<IFlatSelectProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'flatSelect';
        const anOptionId: string = 'flatOption';
        const defaultOptions: IFlatSelectOptionProps[] = [
            {
                id: UUID.generate(),
                option: {
                    content: 'test',
                },
            }, {
                id: anOptionId,
                option: {
                    content: 'test 1',
                },
            },
        ];

        const renderDropdownSearchConnected = () => {
            wrapper = mount(
                <Provider store={store}>
                    <FlatSelectConnected id={id} options={defaultOptions} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            flatSelect = wrapper.find(FlatSelect).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        describe('mount and unmount', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should call onMount prop when mounted', () => {
                wrapper.unmount();
                store.dispatch(clearState());
                expect(store.getState().flatSelect.length).toBe(0);

                wrapper.mount();
                expect(store.getState().flatSelect.length).toBe(1);
            });

            it('should set the first selected option for selectedOptionId in the state on mount', () => {
                wrapper.unmount();
                store.dispatch(clearState());
                expect(store.getState().flatSelect.length).toBe(0);

                const newFlatSelect = <FlatSelectConnected id={id} options={defaultOptions} defaultSelectedOptionId={anOptionId} />;
                wrapper.setProps({children: newFlatSelect});

                wrapper.mount();
                expect(store.getState().flatSelect.length).toBe(1);
                expect(store.getState().flatSelect[0].selectedOptionId).toBe(anOptionId);
            });

            it('should call onDestroy prop when will unmount', () => {
                wrapper.unmount();
                expect(store.getState().flatSelect.length).toBe(0);
            });
        });

        describe('mapStateToProps', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should get an id as a prop', () => {
                const idProp = flatSelect.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(id);
            });

            it('should get the options as a prop', () => {
                const isOpenedProp = flatSelect.props().options;

                expect(isOpenedProp).toBeDefined();
                expect(isOpenedProp.length).toBe(2);
            });

            it('should get the first option for selectedOption if the selectedOption is undefined as a prop', () => {
                const optionsPropId = flatSelect.props().selectedOptionId;

                expect(optionsPropId).toBeDefined();
                expect(optionsPropId).toBe(defaultOptions[0].id);
            });

            it('should get the current selectedOption as a prop', () => {
                store.dispatch(selectFlatSelect(id, defaultOptions[1].id));
                wrapper.update();

                flatSelect = wrapper.find(FlatSelect).first();
                const optionsPropId = flatSelect.props().selectedOptionId;

                expect(optionsPropId).toBeDefined();
                expect(optionsPropId).toBe(defaultOptions[1].id);
            });
        });

        describe('mapDispatchToProps', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should get what to do on destroy as a prop', () => {
                const onDestroyProp = flatSelect.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on onMount as a prop', () => {
                const onMountProp = flatSelect.props().onRender;

                expect(onMountProp).toBeDefined();
            });

            it('should add the first option as optionSelection on onMount', () => {
                expect(store.getState().flatSelect[0].selectedOptionId).toBe(defaultOptions[0].id);
            });

            it('should get what to do on onOptionClick as a prop', () => {
                const onOptionClick = flatSelect.props().onOptionClick;

                expect(onOptionClick).toBeDefined();
            });

            it('should add the optionSelected in the state on onOptionClick', () => {
                expect(store.getState().flatSelect[0].selectedOptionId).toBe(defaultOptions[0].id);

                flatSelect.props().onOptionClick(defaultOptions[1]);

                expect(store.getState().flatSelect[0].selectedOptionId).toBe(defaultOptions[1].id);
            });
        });
    });
});
