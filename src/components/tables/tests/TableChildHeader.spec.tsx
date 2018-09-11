import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITableProps} from '../Table';
import {TableChildHeader} from '../table-children/TableChildHeader';
import {TableHeader} from '../TableHeader';
import {TableHeaderCell} from '../TableHeaderCell';
import {TableHeaderCellConnected} from '../TableHeaderCellConnected';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildHeader />', () => {
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
                    <TableChildHeader {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        it('should render without error if basic props are passed', () => {
            expect(() => {
                mountComponentWithProps(tablePropsMock);
            }).not.toThrow();
        });

        it('should have as many non-connected header cells as there are headerAttribute', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);

            expect(tableHeader.find(TableHeaderCell).length).toBe(tablePropsMock.headingAttributes.length);
        });

        it('should render with a mod-no-border-top and no mod-deactivate-pointer class by default', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock).find(TableHeader);

            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');
            expect(tableHeader.props().headerClass).not.toContain('mod-deactivate-pointer');
        });

        it('should render with a mod-no-border-top and a mod-deactivate-pointer class if table is loading', () => {
            const tableHeader = mountComponentWithProps({...tablePropsMock, tableCompositeState: {isLoading: true}} as any)
                .find(TableHeader);

            expect(tableHeader.props().headerClass).toContain('mod-no-border-top');
            expect(tableHeader.props().headerClass).toContain('mod-deactivate-pointer');
        });

        it('should render with class name if defined', () => {
            const newClassToAdd = 'wow';
            const tableHeader = mountComponentWithProps({...tablePropsMock, tableHeaderClasses: [newClassToAdd]}).find(TableHeader);

            expect(tableHeader.props().headerClass).toContain(newClassToAdd);
        });

        it('should have class on header when defined in the attributes', () => {
            const newClassToAdd = 'wow';
            const headerAttributesWithHeaderClasses = tablePropsMock.headingAttributes.map((attribute) => ({...attribute, headerClasses: [newClassToAdd]}));
            const tableHeader = mountComponentWithProps({...tablePropsMock, headingAttributes: headerAttributesWithHeaderClasses}).find(TableHeader);

            tableHeader.find(TableHeaderCell).forEach((headerCell) => {
                expect(headerCell.props().className).toContain(newClassToAdd);
            });
        });

        it('should have no connected header cells if no headerAttribute has sort', () => {
            const tableHeader = mountComponentWithProps(tablePropsMock)
                .find(TableHeader);

            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(0);
            expect(tableHeader.find(TableHeaderCell).length).not.toBe(0);
        });

        it('should have as many connected header cells as there are headerAttribute with sort', () => {
            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({...attribute, sort: true}));
            const tableHeader = mountComponentWithProps({...tablePropsMock, headingAttributes: headerAttributesWithSort}).find(TableHeader);

            expect(tableHeader.find(TableHeaderCellConnected).length).toBe(headerAttributesWithSort.length);
        });

        it('should have proper sort information for each connected header cell', () => {
            const headerAttributesWithSort = tablePropsMock.headingAttributes.map((attribute) => ({...attribute, sort: true}));
            const tableHeader = mountComponentWithProps({...tablePropsMock, headingAttributes: headerAttributesWithSort}).find(TableHeader);

            tableHeader.find(TableHeaderCellConnected).forEach((headerCell, index) => {
                expect(headerCell.props().tableId).toBe(tablePropsMock.id);
                expect(headerCell.props().attributeToSort).toBe(headerAttributesWithSort[index].attributeName);
            });
        });
    });
});
