import {mount} from 'enzyme';
import * as React from 'react';

import {Loading} from '../../loading/Loading';
import {ITableChildLoadingRowProps, TableChildLoadingRow} from '../table-children/TableChildLoadingRow';
import {TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildLoadingRow />', () => {
    describe('render', () => {
        const mountComponentWithProps = (props: ITableChildLoadingRowProps) => {
            return mount(<TableChildLoadingRow {...props} />, {attachTo: document.getElementById('App')});
        };

        it('should render without error if basic props are passed with isInitialLoad true', () => {
            expect(() => {
                mountComponentWithProps({...tablePropsMock, isInitialLoad: true});
            }).not.toThrow();
        });

        it('should render without error if basic props are passed with isInitialLoad false', () => {
            expect(() => {
                mountComponentWithProps({...tablePropsMock, isInitialLoad: false});
            }).not.toThrow();
        });

        it('should render null if isInitialLoading is false', () => {
            expect(mountComponentWithProps({...tablePropsMock, isInitialLoad: false}).html()).toBeNull();
        });

        it('should render a tbody with a loading component if isInitialLoad is true', () => {
            const loadingRow = mountComponentWithProps({...tablePropsMock, isInitialLoad: true});
            expect(loadingRow.find('tbody').length).toBe(1);
            expect(loadingRow.find('tbody').find(Loading).length).toBe(1);
        });

        it('should render the default blanslate that spans accross all table columns', () => {
            expect(
                mountComponentWithProps({
                    ...tablePropsMock,
                    isInitialLoad: true,
                })
                    .find('td')
                    .prop('colSpan')
            ).toBe(tablePropsMock.headingAttributes.length);
        });

        it(
            'should render the default blanslate that spans accross all table columns + the collapsible toggle column ' +
                'when the table has at least one collapsible column',
            () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        isInitialLoad: true,
                        collapsibleFormatter: () => null,
                    })
                        .find('td')
                        .prop('colSpan')
                ).toBe(tablePropsMock.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT);
            }
        );
    });
});
