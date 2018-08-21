import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {ITableEmptyRowProps, TableEmptyRow} from '../TableEmptyRow';

describe('Tables', () => {
    const tableEmptyRowBasicProps: ITableEmptyRowProps = {
        text: 'No result',
        nbColumns: 2,
    };

    describe('<TableEmptyRow />', () => {
        it('should render without errors', () => {

            expect(() => {
                shallow(
                    <TableEmptyRow {...tableEmptyRowBasicProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<TableEmptyRow />', () => {
        let tableEmptyRow: ReactWrapper<ITableEmptyRowProps, any>;

        beforeEach(() => {
            document.getElementById('App').innerHTML = '<table id="AppTable"></table>';

            tableEmptyRow = mount(
                <TableEmptyRow {...tableEmptyRowBasicProps} />,
                {attachTo: document.getElementById('AppTable')},
            );
        });

        afterEach(() => {
            tableEmptyRow.detach();
        });

        it('should get its text as a prop', () => {
            const textProp = tableEmptyRow.props().text;

            expect(textProp).toBeDefined();
            expect(textProp).toBe(tableEmptyRowBasicProps.text);
        });

        it('should get the number of columns as a prop', () => {
            const nbColumnsProp = tableEmptyRow.props().nbColumns;

            expect(nbColumnsProp).toBeDefined();
            expect(nbColumnsProp).toBe(tableEmptyRowBasicProps.nbColumns);
        });

        it('should display the text received as prop', () => {
            expect(tableEmptyRow.html()).toContain(tableEmptyRowBasicProps.text);
        });

        it('should have the number of columns received as prop set as the colspan', () => {
            expect(tableEmptyRow.find('td').props().colSpan).toBe(tableEmptyRowBasicProps.nbColumns);
        });
    });
});
