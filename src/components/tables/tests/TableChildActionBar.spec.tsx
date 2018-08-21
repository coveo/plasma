import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ActionBarConnected} from '../../actions/ActionBarConnected';
import {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';
import {SELECTION_BOXES} from '../../datePicker/examples/DatePickerExamplesCommon';
import {DropdownSearchConnected} from '../../dropdownSearch/DropdownSearchConnected';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {Loading} from '../../loading/Loading';
import {ITableProps} from '../Table';
import {TableChildActionBar} from '../table-children/TableChildActionBar';
import {TABLE_PREDICATE_DEFAULT_VALUE} from '../TableConstants';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildActionBar />', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('render', () => {
        const mountComponentWithProps = (props: ITableProps) => {
            return mount(
                <Provider store={store}>
                    <TableChildActionBar {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        describe('render without error', () => {
            it('should render without error if basic props are passed', () => {
                expect(() => {
                    mountComponentWithProps(tablePropsMock);
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop is passed', () => {
                expect(() => {
                    mountComponentWithProps({...tablePropsMock, actionBar: true});
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop and a filter prop are passed', () => {
                expect(() => {
                    mountComponentWithProps({...tablePropsMock, actionBar: true, filter: true});
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop and a datePicker prop are passed', () => {
                expect(() => {
                    mountComponentWithProps({...tablePropsMock, actionBar: true, datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'}});
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop, a filter prop, and one predicate are passed', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        actionBar: true,
                        filter: true,
                        predicates: [
                            {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                        ],
                    });
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop, a filter prop, and two predicate are passed', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        actionBar: true,
                        filter: true,
                        predicates: [
                            {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                            {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},
                        ],
                    });
                }).not.toThrow();
            });

            it('should render without error if an actionBar prop, a filter prop, a datePicker prop and two predicate are passed', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        actionBar: true,
                        filter: true,
                        predicates: [
                            {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                            {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},
                        ],
                        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},
                    });
                }).not.toThrow();
            });
        });

        describe('render content', () => {
            it('should render with null if no action bar is passed as prop', () => {
                expect(mountComponentWithProps(tablePropsMock).html()).toBeNull();
            });

            it('should render with an action bar if there is an actionBar prop', () => {
                expect(mountComponentWithProps({...tablePropsMock, actionBar: true}).find(ActionBarConnected).length).toBe(1);
            });

            it('should render with an action bar and a filter inside it if there is an actionBar prop and a filter prop', () => {
                const tableActionBar = mountComponentWithProps({...tablePropsMock, actionBar: true, filter: true});
                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
                expect(tableActionBar.find(ActionBarConnected).find(FilterBoxConnected).length).toBe(1);
            });

            it('should render with an action bar and a datePicker inside it if there is an actionBar prop and a datePicker prop', () => {
                const tableActionBar = mountComponentWithProps({...tablePropsMock, actionBar: true, datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'}});
                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
                expect(tableActionBar.find(ActionBarConnected).find(DatePickerDropdownConnected).length).toBe(1);
            });

            it('should render with an action bar and a predicate inside it if there is an actionBar prop and one predicate', () => {
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    actionBar: true,
                    predicates: [
                        {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                    ],
                });
                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(1);
            });

            it('should render with an action bar and two predicates inside it if there is an actionBar prop and two predicates', () => {
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    actionBar: true,
                    predicates: [
                        {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                        {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},
                    ],
                });
                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(2);
            });

            it('should render with an action bar and prefix content inside it if there is an actionBar prop and prefixContent', () => {
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    actionBar: true,
                    prefixContent: {
                        content: Loading,
                    },
                });
                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);
                expect(tableActionBar.find(ActionBarConnected).find(Loading).length).toBe(1);
            });

            it('should call onPredicateOptionClick if onOptionClickCallback of a dropdownSearch connected is called', () => {
                const onPredicateOptionClickSpy = jasmine.createSpy('onPredicateOptionClickSpy');
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    onPredicateOptionClick: onPredicateOptionClickSpy,
                    actionBar: true,
                    predicates: [
                        {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                    ],
                });
                tableActionBar.find(ActionBarConnected)
                    .find(DropdownSearchConnected).first().props().onOptionClickCallBack({value: 'test'});

                expect(onPredicateOptionClickSpy).toHaveBeenCalledTimes(1);
            });

            it('should put the option TABLE_PREDICATE_DEFAULT_VALUE as defaultSelectedOption by default', () => {
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    actionBar: true,
                    predicates: [
                        {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},
                    ],
                });

                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected)
                    .prop('defaultSelectedOption')).toEqual({value: TABLE_PREDICATE_DEFAULT_VALUE});
            });

            it('should put the option with defaut: true as defaultSelectedOption (if there is one)', () => {
                const customDefaultValue = 'myDefault';
                const tableActionBar = mountComponentWithProps({
                    ...tablePropsMock,
                    actionBar: true,
                    predicates: [
                        {
                            attributeName: 'userName', attributeNameFormatter: _.identity, props:
                                {defaultOptions: [{value: customDefaultValue, default: true}]},
                        },
                    ],
                });

                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected)
                    .prop('defaultSelectedOption')).toEqual({value: customDefaultValue});
            });
        });
    });
});
