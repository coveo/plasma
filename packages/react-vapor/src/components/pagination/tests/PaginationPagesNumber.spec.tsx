import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {getStoreMock} from '../../../utils/tests/TestUtils';
import {PaginationReduxActions} from '../../navigation/pagination';
import {Svg} from '../../svg';
import {IPaginationPagesNumberProps, PaginationPagesNumber} from '../PaginationPagesNumber';
import {PaginationSelect} from '../PaginationSelect';

describe('PaginationPagesNumber tests', () => {
    describe('<PaginationPagesNumber />', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(<PaginationPagesNumber id={'id'} totalPages={10} />, {}).dive();
                wrapper.unmount();
            });
        });

        describe('once mounted', () => {
            const id = 'test';
            const defaultStore = {paginationComposite: [{id, pageNb: 0}]};

            let wrapper: ShallowWrapper<IPaginationPagesNumberProps>;
            const shallowPaginationPagesNumber = (props?: Partial<IPaginationPagesNumberProps>, state = defaultStore) =>
                shallowWithState(<PaginationPagesNumber id={id} totalPages={10} {...props} />, state);

            describe('previous arrow', () => {
                it('should be disabled if the current page is equal to 0', () => {
                    wrapper = shallowPaginationPagesNumber({}).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(0)
                            .hasClass('disabled')
                    ).toBe(true);
                });

                it('should be selectable if the current page is not equal to 0', () => {
                    wrapper = shallowPaginationPagesNumber({}, {paginationComposite: [{id, pageNb: 1}]}).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(0)
                            .hasClass('selectable')
                    ).toBe(true);
                });

                it('should be hidden if the component is hidden', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {hidden: true},
                        {paginationComposite: [{id, pageNb: 5}]}
                    ).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(0)
                            .hasClass('hidden')
                    ).toBe(true);
                });

                it('should use the previous label set as prop if defined', () => {
                    const label = 'label';
                    wrapper = shallowPaginationPagesNumber(
                        {previousLabel: label},
                        {paginationComposite: [{id, pageNb: 5}]}
                    ).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(0)
                            .text()
                    ).toContain(label);
                });

                it('should have a <Svg />', () => {
                    wrapper = shallowPaginationPagesNumber().dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(0)
                            .find(Svg).length
                    ).toBe(1);
                });
            });

            describe('next arrow', () => {
                it('should disabled the next arrow if the current page is equal to the last page', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {totalPages: 11},
                        {paginationComposite: [{id, pageNb: 10}]}
                    ).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(1)
                            .hasClass('disabled')
                    ).toBe(true);
                });

                it('should be selectable if the current page is not equal to the last page', () => {
                    wrapper = shallowPaginationPagesNumber({}, {paginationComposite: [{id, pageNb: 5}]}).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(1)
                            .hasClass('selectable')
                    ).toBe(true);
                });

                it('should be hidden if the component is hidden', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {hidden: true},
                        {paginationComposite: [{id, pageNb: 5}]}
                    ).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(1)
                            .hasClass('hidden')
                    ).toBe(true);
                });

                it('should use the previous label set as prop if defined', () => {
                    const label = 'label';
                    wrapper = shallowPaginationPagesNumber(
                        {nextLabel: label},
                        {paginationComposite: [{id, pageNb: 5}]}
                    ).dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(1)
                            .text()
                    ).toContain(label);
                });

                it('should have a <Svg />', () => {
                    wrapper = shallowPaginationPagesNumber().dive();
                    expect(
                        wrapper
                            .find('a.flat-select-option')
                            .at(1)
                            .find(Svg).length
                    ).toBe(1);
                });
            });

            describe('PaginationSelect', () => {
                it('should show 3 pages if only 3 pages available', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {totalPages: 3},
                        {paginationComposite: [{id, pageNb: 2}]}
                    ).dive();
                    expect(wrapper.find(PaginationSelect).length).toBe(3);
                });

                it('should a maximum of 7 pages by default', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {totalPages: 12},
                        {paginationComposite: [{id, pageNb: 2}]}
                    ).dive();
                    expect(wrapper.find(PaginationSelect).length).toBe(7);
                });

                it('should not extend the numberOfPagesToShow defined as prop', () => {
                    wrapper = shallowPaginationPagesNumber(
                        {totalPages: 12, numberOfPagesToShow: 5},
                        {paginationComposite: [{id, pageNb: 2}]}
                    ).dive();
                    expect(wrapper.find(PaginationSelect).length).toBe(5);
                });
            });

            describe('dispatch', () => {
                let store: ReturnType<typeof getStoreMock>;

                it('should dispatch an addPagination on mount', () => {
                    store = getStoreMock();
                    shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();

                    expect(store.getActions()).toContain(PaginationReduxActions.addPagination(id));
                });

                it('should dispatch a removePagination on unmount', () => {
                    store = getStoreMock();
                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();
                    wrapper.unmount();

                    expect(store.getActions()).toContain(PaginationReduxActions.removePagination(id));
                });

                it('should dispatch a changePage on click on a <PaginationSelect />', () => {
                    store = getStoreMock();
                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();
                    wrapper
                        .find(PaginationSelect)
                        .at(0)
                        .props()
                        .onPageClick(2);

                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 2));
                });

                it('should dispatch a changePage on previous if the pageNb is greater than 0 and not equal to the current page', () => {
                    store = getStoreMock({paginationComposite: [{id, pageNb: 2}]});
                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();
                    wrapper
                        .find('a.flat-select-option')
                        .at(0)
                        .props()
                        .onClick({} as any);

                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 1));
                });

                it('should dispatch a changePage on next if the pageNb is greater than 0 and not equal to the current page', () => {
                    store = getStoreMock({paginationComposite: [{id, pageNb: 6}]});
                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();
                    wrapper
                        .find('a.flat-select-option')
                        .at(1)
                        .props()
                        .onClick({} as any);

                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 7));
                });

                it('should dispatch a changePage on update if the current page greater than the totalPage', () => {
                    store = getStoreMock({paginationComposite: [{id, pageNb: 6}]});
                    wrapper = shallowWithStore(<PaginationPagesNumber id={id} totalPages={10} />, store).dive();
                    wrapper.setProps({totalPages: 4});

                    expect(store.getActions()).toContain(PaginationReduxActions.changePage(id, 3));
                });
            });
        });
    });
});
