import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {selectWithInfiniteScroll, SelectWithInfiniteScrollProps} from '../hoc/SelectWithInfiniteScroll';
import {ISelectProps} from '../SelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';

describe('SelectWithInfiniteScroll', () => {
    const SingleSelectWithInfiniteScroll = selectWithInfiniteScroll(SingleSelectConnected);
    const basicProps: ISingleSelectOwnProps & SelectWithInfiniteScrollProps = {
        id: 'to-infinity-and-beyond',
        next: () => [],
        totalEntries: 0,
    };

    const items = [<span>1</span>, <span>2</span>, <span>3</span>];
    const itemsProps: IItemBoxProps[] = [
        {value: '1', displayValue: <span>1</span>},
        {value: '2', displayValue: <span>2</span>},
        {value: '3', displayValue: <span>3</span>},
    ];

    it('should not throw when rendering and unmounting', () => {
        expect(() => {
            const component = shallowWithStore(
                <SingleSelectWithInfiniteScroll {...basicProps} />,
                getStoreMock()
            ).dive();
            component.unmount();
        }).not.toThrow();
    });

    it('should wrap the items with an infinite scroll component', () => {
        const component: ShallowWrapper<ISelectProps> = shallowWithStore(
            <SingleSelectWithInfiniteScroll {...basicProps} />,
            getStoreMock()
        ).dive();

        expect(component.prop('wrapItems')).toBeDefined();

        const wrappedItems = shallow(<div>{component.prop('wrapItems')(items)}</div>);

        expect(wrappedItems.find(InfiniteScroll).exists()).toBe(true);
        expect(wrappedItems.find(InfiniteScroll).contains(items)).toBe(true);
    });

    it('should set hasMore prop to false on the infinite scroll component when the total number of items is less than the totalEntries prop', () => {
        const component: ShallowWrapper<ISelectProps> = shallowWithStore(
            <SingleSelectWithInfiniteScroll {...basicProps} totalEntries={3} items={itemsProps} />,
            getStoreMock()
        ).dive();

        const wrappedItems = shallow(<div>{component.prop('wrapItems')(items)}</div>);

        expect(wrappedItems.find(InfiniteScroll).prop('hasMore')).toBe(false);
    });

    it('should set hasMore prop to true on the infinite scroll component when the total number of items is less than the totalEntries prop', () => {
        const component: ShallowWrapper<ISelectProps> = shallowWithStore(
            <SingleSelectWithInfiniteScroll {...basicProps} totalEntries={4} items={itemsProps} />,
            getStoreMock()
        ).dive();

        const wrappedItems = shallow(<div>{component.prop('wrapItems')(items)}</div>);

        expect(wrappedItems.find(InfiniteScroll).prop('hasMore')).toBe(true);
    });

    it('should set dataLength prop to the number of items on the infinite scroll', () => {
        const component: ShallowWrapper<ISelectProps> = shallowWithStore(
            <SingleSelectWithInfiniteScroll {...basicProps} items={itemsProps} />,
            getStoreMock()
        ).dive();

        const wrappedItems = shallow(<div>{component.prop('wrapItems')(items)}</div>);

        expect(wrappedItems.find(InfiniteScroll).prop('dataLength')).toBe(itemsProps.length);
    });
});
