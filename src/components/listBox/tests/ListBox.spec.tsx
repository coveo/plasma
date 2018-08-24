import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {ItemBox} from '../../itemBox/ItemBox';
import {IListBoxProps, ListBox} from '../ListBox';

describe('ListBox', () => {

    let listBoxComponent: ReactWrapper<IListBoxProps, any>;

    const spyOnOptionClick = jasmine.createSpy('onOptionClick');

    const defaultProps: IListBoxProps = {
        items: [
            {value: 'test'},
            {value: 'test1', onOptionClick: spyOnOptionClick},
            {value: 'test2'},
            {value: 'test3'},
            {value: 'test4'},
            {value: 'test5'},
            {value: 'test6'},
            {value: 'test7'},
        ],
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<ListBox {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<BoxItem /> with default props', () => {

        beforeEach(() => {
            listBoxComponent = mount(
                <ListBox {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            listBoxComponent.detach();
        });

        it('should render with the box-item class', () => {
            expect(listBoxComponent.find(ItemBox).length).toBe(defaultProps.items.length);
        });

        it('should not throw on umount', () => {
            expect(() => listBoxComponent.unmount()).not.toThrow();
        });
    });

    describe('<BoxItem /> with custom props', () => {

        const renderListBox = (props: Partial<IListBoxProps> = {}) => {
            listBoxComponent = mount(
                <ListBox {...defaultProps} {...props} />,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            listBoxComponent.detach();
        });

        it('should call onRender on mount', () => {
            const onRenderSpy = jasmine.createSpy('onRender');
            renderListBox({
                onRender: onRenderSpy,
            });

            expect(onRenderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onRender on mount', () => {
            const onDestroySpy = jasmine.createSpy('onDestroy');
            renderListBox({
                onDestroy: onDestroySpy,
            });

            expect(onDestroySpy).not.toHaveBeenCalled();

            listBoxComponent.unmount();
            expect(onDestroySpy).toHaveBeenCalledTimes(1);
        });

        it('should render items with events on onOptionClick on the item', () => {
            renderListBox();

            (listBoxComponent.find(ItemBox).at(1).instance() as any).handleOnOptionClick({target: 'target'});
            expect(spyOnOptionClick).toHaveBeenCalled();
        });

        it('should render items with events on onOptionClick', () => {
            const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');
            renderListBox({
                onOptionClick,
            });

            (listBoxComponent.find(ItemBox).first().instance() as any).handleOnOptionClick({target: 'target'});
            expect(onOptionClick).toHaveBeenCalled();
        });

        it('should not trigger onOptionClick if the clicked item is disabled', () => {
            const onOptionClick: jasmine.Spy = jasmine.createSpy('onOptionClick');
            renderListBox({
                items: [{value: 'test', disabled: true}],
                onOptionClick,
            });

            (listBoxComponent.find(ItemBox).instance() as any).handleOnOptionClick({target: 'target'});
            expect(onOptionClick).not.toHaveBeenCalled();
        });

        it('should show the no result <BoxItem/> if the items array is empty', () => {
            renderListBox({
                items: [],
            });

            expect(listBoxComponent.find(ItemBox).props().value).toBe(ListBox.defaultProps.noResultItem.value);
        });

        it('should show the no result <BoxItem/> if all items are hidden', () => {
            renderListBox({
                items: [{value: 'test', hidden: true}, {value: 'test 1', hidden: true}],
            });

            expect(listBoxComponent.find(ItemBox).props().value).toBe(ListBox.defaultProps.noResultItem.value);
        });

        it('should not show the no result <BoxItem/> if one item is not hidden', () => {
            renderListBox({
                items: [{value: 'test', hidden: false}, {value: 'test 1', hidden: true}],
            });

            expect(listBoxComponent.find(ItemBox).props().value).not.toBe(ListBox.defaultProps.noResultItem.value);
        });
    });
});
