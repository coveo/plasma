import * as React from 'react';
import { tablePropsMock } from './TableTestCommon';
import { TableChildLoadingRow, ITableChildLoadingRowProps } from '../table-children/TableChildLoadingRow';
import { mount } from 'enzyme';
import { Loading } from '../../loading/Loading';

describe('<TableChildLoadingRow />', () => {
    describe('render', () => {
        const mountComponentWithProps = (props: ITableChildLoadingRowProps) => {
            return mount(
                <TableChildLoadingRow {...props} />,
                { attachTo: document.getElementById('App') },
            );
        };

        it('should render without error if basic props are passed with isInitialLoad true', () => {
            expect(() => {
                mountComponentWithProps({ ...tablePropsMock, isInitialLoad: true });
            }).not.toThrow();
        });

        it('should render without error if basic props are passed with isInitialLoad false', () => {
            expect(() => {
                mountComponentWithProps({ ...tablePropsMock, isInitialLoad: false });
            }).not.toThrow();
        });

        it('should render null if isInitialLoading is false', () => {
            expect(mountComponentWithProps({ ...tablePropsMock, isInitialLoad: false }).html()).toBeNull();
        });

        it('should render a tbody with a loading component if isInitialLoad is true', () => {
            const loadingRow = mountComponentWithProps({ ...tablePropsMock, isInitialLoad: true });
            expect(loadingRow.find('tbody').length).toBe(1);
            expect(loadingRow.find('tbody').find(Loading).length).toBe(1);
        });
    });
});
