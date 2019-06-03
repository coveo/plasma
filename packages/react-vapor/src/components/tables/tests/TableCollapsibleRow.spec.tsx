import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {SlideY} from '../../../animations/SlideY';
import {ITableCollapsibleRowProps, TableCollapsibleRow} from '../TableCollapsibleRow';
import {TableError} from '../TableError';

describe('Tables', () => {

    describe('<TableCollapsibleRow />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <TableCollapsibleRow nbColumns={6} id='collapsible-row' />,
                );
            }).not.toThrow();
        });
    });

    describe('<TableCollapsibleRow />', () => {
        let tableCollapsibleRow: ReactWrapper<ITableCollapsibleRowProps, any>;
        let basicTableCollapsibleRowProps: ITableCollapsibleRowProps;

        beforeEach(() => {
            document.getElementById('App').innerHTML = '<table><tbody id="AppTableBody"></tbody></table>';

            basicTableCollapsibleRowProps = {
                id: 'collapsible-row',
                nbColumns: 6,
                isInError: true,
                opened: true,
                error: {
                    errorDescription: 'error',
                    errorPrecision: 'the row is in error',
                    errorTroubleshoot: 'you should do something',
                    errorStatus: 'urgent',
                    errorCode: 'error_1',
                },
            };

            tableCollapsibleRow = mount(
                <TableCollapsibleRow {...basicTableCollapsibleRowProps} />,
                {attachTo: document.getElementById('AppTableBody')},
            );
        });

        afterEach(() => {
            tableCollapsibleRow.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = tableCollapsibleRow.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(basicTableCollapsibleRowProps.id);
        });

        it('should get the number of columns as a prop', () => {
            const nbColumnsProp = tableCollapsibleRow.props().nbColumns;

            expect(nbColumnsProp).toBeDefined();
            expect(nbColumnsProp).toBe(basicTableCollapsibleRowProps.nbColumns);
        });

        it('should get if it is in error as a prop', () => {
            const isInErrorProp = tableCollapsibleRow.props().isInError;

            expect(isInErrorProp).toBeDefined();
            expect(isInErrorProp).toBe(basicTableCollapsibleRowProps.isInError);
        });

        it('should get if it is opened as a prop', () => {
            const openedProp = tableCollapsibleRow.props().opened;

            expect(openedProp).toBeDefined();
            expect(openedProp).toBe(basicTableCollapsibleRowProps.opened);
        });

        it('should get the error as a prop', () => {
            const errorProp = tableCollapsibleRow.props().error;

            expect(errorProp).toBeDefined();
            expect(errorProp).toEqual(jasmine.objectContaining(basicTableCollapsibleRowProps.error));
        });

        it('should render an <TableError /> component if is in error', () => {
            const newTableCollapsibleRowProps = _.extend({}, basicTableCollapsibleRowProps, {isInError: false});

            expect(tableCollapsibleRow.find(TableError).length).toBe(1);

            tableCollapsibleRow.setProps(newTableCollapsibleRowProps);
            expect(tableCollapsibleRow.find(TableError).length).toBe(0);
        });

        it('should have its id as a class', () => {
            expect(tableCollapsibleRow.find('tr').hasClass(basicTableCollapsibleRowProps.id)).toBe(true);
        });

        it('should have "in" as a class, and SlideY "in" prop set to true if opened', () => {
            const newTableCollapsibleRowProps = _.extend({}, basicTableCollapsibleRowProps, {opened: false});
            const openedClass = 'in';

            expect(tableCollapsibleRow.find('tr').hasClass(openedClass)).toBe(true);
            expect(tableCollapsibleRow.find(SlideY).prop('in')).toBe(true);

            tableCollapsibleRow.setProps(newTableCollapsibleRowProps);
            expect(tableCollapsibleRow.find('tr').hasClass(openedClass)).toBe(false);
            expect(tableCollapsibleRow.find(SlideY).prop('in')).toBe(false);
        });
    });
});
