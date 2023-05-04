import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IActionOptions} from '../../actions/Action';
import {IData} from '../Table';
import {ITableChildBodyProps, TableChildBody} from '../table-children/TableChildBody';
import {TableCollapsibleRow} from '../TableCollapsibleRow';
import {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';
import {TableHeadingRow} from '../TableHeadingRow';

describe('<TableChildBody />', () => {
    let spyOnRowClick: jest.Mock<any, any>;
    let spyHandleOnRowClick: jest.Mock<any, any>;
    let someActions: IActionOptions[];
    let tableChildBodyProps: ITableChildBodyProps;
    let store: Store<PlasmaState>;

    beforeEach(() => {
        document.body.innerHTML += '<div id="App"></div>';
        spyOnRowClick = jest.fn();
        spyHandleOnRowClick = jest.fn();
        someActions = [
            {
                name: 'some-action',
                trigger: jest.fn(),
                enabled: true,
            },
        ];
        tableChildBodyProps = {
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
            getActions: jest.fn(() => someActions),
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
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('render', () => {
        let wrapper: ReactWrapper<any, any>;
        const mountComponentWithProps = (props: ITableChildBodyProps = tableChildBodyProps) => {
            if (wrapper && wrapper.length) {
                wrapper.unmount();
            }
            wrapper = mount(
                <Provider store={store}>
                    <TableChildBody {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            return wrapper.find(TableChildBody);
        };

        it('should render without error', () => {
            expect(() => mountComponentWithProps()).not.toThrow();
        });

        it('should add additional classes on the cell element for each row', () => {
            const component = mountComponentWithProps({
                ...tableChildBodyProps,
                headingAttributes: [
                    {
                        attributeName: 'email',
                        titleFormatter: _.identity,
                        attributeFormatter: _.escape,
                        filterFormatter: _.identity,
                        additionalCellClasses: [
                            {
                                className: 'new-class',
                            },
                        ],
                    },
                ],
            });

            expect(component.find('td.new-class')).toBeDefined();
        });

        it('should trigger an onClick event on click cell element', () => {
            const spy = jest.fn();

            const component = mountComponentWithProps({
                ...tableChildBodyProps,
                headingAttributes: [
                    {
                        ...tableChildBodyProps.headingAttributes[0],
                        onClickCell: spy,
                    },
                ],
            });

            component.find('td').simulate('click');

            expect(spy).toHaveBeenCalled();
        });

        it('should not render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is not defined', () => {
            expect(mountComponentWithProps().find(TableCollapsibleRowWrapper).length).toBe(0);
        });

        it('should render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is defined', () => {
            expect(
                mountComponentWithProps(
                    _.extend({}, tableChildBodyProps, {
                        collapsibleFormatter: () => <div></div>,
                    })
                ).find(TableCollapsibleRowWrapper).length
            ).toBe(1);
        });

        it('should render a <TableHeadingRow />', () => {
            expect(mountComponentWithProps().find(TableHeadingRow).length).toBe(1);
        });

        it('should not render a <TableCollapsibleRow /> if there is not a defined collapsibleFormatter ouput', () => {
            expect(mountComponentWithProps().find(TableCollapsibleRow).length).toBe(0);
        });

        it('should render a <TableCollapsibleRow /> if there is a defined collapsibleFormatter ouput', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                collapsibleFormatter: (rowData: IData) => rowData.url,
            });

            expect(mountComponentWithProps(newProps).find(TableCollapsibleRow).length).toBe(1);
        });

        it('should render a wrapper', () => {
            expect(mountComponentWithProps().find('.wrapper').length).toBe(1);
        });

        it('should call onRowClick with getActions result if it is defined on click of a heading row', () => {
            spyOnRowClick.mockReset();
            mountComponentWithProps().find(TableHeadingRow).simulate('click');

            expect(spyOnRowClick).toHaveBeenCalledTimes(1);
            expect(tableChildBodyProps.getActions).toHaveBeenCalled();

            expect(tableChildBodyProps.onRowClick).toHaveBeenCalledWith(someActions);
            expect(tableChildBodyProps.getActions).toHaveBeenCalledWith(tableChildBodyProps.rowData);
        });

        it('should call handleOnRowClick if it is defined on click of a heading row', () => {
            spyHandleOnRowClick.mockReset();
            mountComponentWithProps().find(TableHeadingRow).simulate('click');

            expect(spyHandleOnRowClick).toHaveBeenCalledTimes(1);

            expect(tableChildBodyProps.handleOnRowClick).toHaveBeenCalledWith(someActions, tableChildBodyProps.rowData);
        });

        it('should call getActions results with option callOnDoubleClick true on row double click', () => {
            const actionSpy = jest.fn();
            const twoActions: IActionOptions[] = [
                {
                    name: 'action that should not be called',
                    enabled: true,
                    trigger: () => {
                        throw new Error('This action should not be called');
                    },
                },
                {
                    name: 'action that should be called',
                    callOnDoubleClick: true,
                    enabled: true,
                    trigger: actionSpy,
                },
            ];
            const getActionsSpy = jest.fn().mockReturnValue(twoActions);

            mountComponentWithProps({...tableChildBodyProps, getActions: getActionsSpy})
                .find(TableHeadingRow)
                .simulate('dblclick');

            expect(getActionsSpy).toHaveBeenCalled();
            expect(actionSpy).toHaveBeenCalledTimes(1);
        });

        it('should send not send disabled as a class to the <TableHeadingRow /> if there is no enabled or disabled property on the row data', () => {
            expect(mountComponentWithProps().find('.disabled').length).toBe(0);
        });

        it('should send not send disabled as a class to the <TableHeadingRow /> if the enabled property is set to true on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: true}),
            });

            expect(mountComponentWithProps(newProps).find('.disabled').length).toBe(0);
        });

        it('should send disabled as a class to the <TableHeadingRow /> if the enabled property is set to false on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: false}),
            });

            expect(mountComponentWithProps(newProps).find('.disabled').length).toBeGreaterThanOrEqual(1);
        });

        it('should send disabled as a class to the <TableHeadingRow /> if the disabled property is set to true on the row data', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                rowData: _.extend({}, tableChildBodyProps.rowData, {disabled: true}),
            });

            expect(mountComponentWithProps(newProps).find('.disabled').length).toBeGreaterThanOrEqual(1);
        });

        it('should set the selectionDisabled prop to false on the <TableHeadingRow /> if there are actions defined for the row', () => {
            expect(mountComponentWithProps().find(TableHeadingRow).props().selectionDisabled).toBe(false);
        });

        it('should set the selectionDisabled prop to true on the <TableHeadingRow /> if there are no actions defined for the row', () => {
            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {
                getActions: jest.fn(() => []),
            });

            expect(mountComponentWithProps(newProps).find(TableHeadingRow).props().selectionDisabled).toBe(true);
        });
    });
});
