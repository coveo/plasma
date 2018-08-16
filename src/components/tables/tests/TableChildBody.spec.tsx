import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IActionOptions} from '../../actions/Action';
import {IData} from '../Table';
import {ITableChildBodyProps, TableChildBody} from '../table-children/TableChildBody';
import {TableCollapsibleRow} from '../TableCollapsibleRow';
import {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';
import {TableHeadingRow} from '../TableHeadingRow';

describe('<TableChildBody />', () => {
    const spyOnRowClick: jasmine.Spy = jasmine.createSpy('onRowClick');
    const spyHandleOnRowClick: jasmine.Spy = jasmine.createSpy('handleOnRowClick');
    const someActions: IActionOptions[] = [{
        name: 'some-action',
        trigger: jasmine.createSpy('triggerMethod'),
        enabled: true,
    }];
    const tableChildBodyProps: ITableChildBodyProps = {
        tableId: 'best-table',
        rowData: {
            id: 'random-row',
            email: 'someone@somewhere.com',
            url: 'www.somewher.com',
            aProperty: false,
        },
        isLoading: false,
        onRowClick: spyOnRowClick,
        handleOnRowClick: spyHandleOnRowClick,
        getActions: jasmine.createSpy('getActions').and.returnValue(someActions),
        headingAttributes: [
            {
                attributeName: 'email',
                titleFormatter: _.identity,
                attributeFormatter: _.escape,
                filterFormatter: _.identity,
            },
        ],
        isMultiSelect: false,
    };

    let store: Store<IReactVaporState>;

    beforeAll(() => {
        document.body.innerHTML += '<div id="App"></div>';
    });

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('render', () => {
        const mountComponentWithProps = (props: ITableChildBodyProps = tableChildBodyProps) => {
            const wrapper: ReactWrapper<any, any> = mount(
                <Provider store={store}>
                    <TableChildBody {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            return wrapper.find(TableChildBody);
        };

        it('should render without error', () => {
            expect(() => mountComponentWithProps()).not.toThrow();
        });

        it('should add additional classes on the cell element for each row', () => {
            const component = mountComponentWithProps({
                ...tableChildBodyProps,
                headingAttributes: [{
                    attributeName: 'email',
                    titleFormatter: _.identity,
                    attributeFormatter: _.escape,
                    filterFormatter: _.identity,
                    additionalCellClasses: [{
                        className: 'new-class',
                    }],
                }],
            });
            expect(component.find('td.new-class')).toBeDefined();
        });

        it('should trigger an onClick event on click cell element', () => {
            const spy = jasmine.createSpy('onclickcell');

            const component = mountComponentWithProps({
                ...tableChildBodyProps,
                headingAttributes: [{
                    ...tableChildBodyProps.headingAttributes[0],
                    onClickCell: spy,
                }],
            });

            component.find('td').simulate('click');
            expect(spy).toHaveBeenCalled();
        });

        it('should not render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is not defined', () => {
            expect(mountComponentWithProps().find(TableCollapsibleRowWrapper).length).toBe(0);
        });

        it('should render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is defined', () => {
            expect(mountComponentWithProps(_.extend({}, tableChildBodyProps, {
                collapsibleFormatter: () => <div></div>,
            })).find(TableCollapsibleRowWrapper).length).toBe(1);
        });

        it('should render a <TableHeadingRow />', () => {
            expect(mountComponentWithProps().find(TableHeadingRow).length).toBe(1);
        });

        it('should not render a <TableCollapsibleRow /> if there is not a defined collapsibleFormatter ouput', () => {
            expect(mountComponentWithProps().find(TableCollapsibleRow).length).toBe(0);
        });

        it('should render a <TableCollapsibleRow /> if there is a defined collapsibleFormatter ouput', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {collapsibleFormatter: (rowData: IData) => rowData.url});
            expect(mountComponentWithProps(newProps).find(TableCollapsibleRow).length).toBe(1);
        });

        it('should render a wrapper', () => {
            expect(mountComponentWithProps().find('.wrapper').length).toBe(1);
        });

        it('should call onRowClick with getActions result if it is defined on click of a heading row', () => {
            spyOnRowClick.calls.reset();
            mountComponentWithProps().find(TableHeadingRow).simulate('click');

            expect(spyOnRowClick).toHaveBeenCalledTimes(1);
            expect(tableChildBodyProps.getActions).toHaveBeenCalled();

            expect(tableChildBodyProps.onRowClick).toHaveBeenCalledWith(someActions);
            expect(tableChildBodyProps.getActions).toHaveBeenCalledWith(tableChildBodyProps.rowData);
        });

        it('should call handleOnRowClick if it is defined on click of a heading row', () => {
            spyHandleOnRowClick.calls.reset();
            mountComponentWithProps().find(TableHeadingRow).simulate('click');

            expect(spyHandleOnRowClick).toHaveBeenCalledTimes(1);

            expect(tableChildBodyProps.handleOnRowClick).toHaveBeenCalledWith(someActions, tableChildBodyProps.rowData);
        });

        it('should call getActions results with option callOnDoubleClick true on row double click', () => {
            const actionSpy: jasmine.Spy = jasmine.createSpy('actionSpy');
            const twoActions: IActionOptions[] = [{
                name: 'action that should not be called',
                enabled: true,
                trigger: () => {
                    throw new Error('This action should not be called');
                },
            }, {
                name: 'action that should be called',
                callOnDoubleClick: true,
                enabled: true,
                trigger: actionSpy,
            }];
            const getActionsSpy: jasmine.Spy = jasmine.createSpy('getActions').and.returnValue(twoActions);
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {getActions: getActionsSpy});

            mountComponentWithProps(newProps).find(TableHeadingRow).simulate('dblclick');

            expect(getActionsSpy).toHaveBeenCalled();
            expect(actionSpy).toHaveBeenCalledTimes(1);
        });

        it('should send not send disabled as a class to the <TableHeadingRow /> if there is no enabled or disabled property on the row data', () => {
            expect(mountComponentWithProps().find('.disabled').length).toBe(0);
        });

        it('should send not send disabled as a class to the <TableHeadingRow /> if the enabled property is set to true on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: true})});
            expect(mountComponentWithProps(newProps).find('.disabled').length).toBe(0);
        });

        it('should send disabled as a class to the <TableHeadingRow /> if the enabled property is set to false on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: false})});
            expect(mountComponentWithProps(newProps).find('.disabled').length).toBe(1);
        });

        it('should send disabled as a class to the <TableHeadingRow /> if the disabled property is set to true on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {rowData: _.extend({}, tableChildBodyProps.rowData, {disabled: true})});
            expect(mountComponentWithProps(newProps).find('.disabled').length).toBe(1);
        });

        it('should set the selectionDisabled prop to false on the <TableHeadingRow /> if there are actions defined for the row', () => {
            expect(mountComponentWithProps().find(TableHeadingRow).props().selectionDisabled).toBe(false);
        });

        it('should set the selectionDisabled prop to true on the <TableHeadingRow /> if there are no actions defined for the row', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                getActions: jasmine.createSpy('getActions').and.returnValue([]),
            });

            expect(mountComponentWithProps(newProps).find(TableHeadingRow).props().selectionDisabled).toBe(true);
        });
    });
});
