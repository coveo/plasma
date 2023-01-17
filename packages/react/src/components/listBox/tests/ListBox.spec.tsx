import {mount, ReactWrapper, shallow} from 'enzyme';
import {ReactNode} from 'react';

import {ItemBox} from '../../itemBox/ItemBox.js';
import {ItemBoxLoading} from '../../loading/components/ItemBoxLoading.js';
import {IListBoxProps, ListBox} from '../ListBox.js';

describe('ListBox', () => {
    let listBoxComponent: ReactWrapper<IListBoxProps, any>;

    const spyOnOptionClick = jest.fn();

    const defaultProps: IListBoxProps = {
        id: '🍄',
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

    it('render without errors', () => {
        expect(() => {
            shallow(<ListBox {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<BoxItem /> with default props', () => {
        beforeEach(() => {
            listBoxComponent = mount(<ListBox {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            if (listBoxComponent && listBoxComponent.exists()) {
                listBoxComponent?.unmount();
            }
        });

        it('render with the box-item class', () => {
            expect(listBoxComponent.find(ItemBox).length).toBe(defaultProps.items.length);
        });

        it('does not throw on unmount', () => {
            expect(() => listBoxComponent.unmount()).not.toThrow();
        });
    });

    describe('<BoxItem /> with custom props', () => {
        const renderListBox = (props: Partial<IListBoxProps> = {}) => {
            listBoxComponent = mount(<ListBox {...defaultProps} {...props} />, {
                attachTo: document.getElementById('App'),
            });
        };

        afterEach(() => {
            if (listBoxComponent && listBoxComponent.exists()) {
                listBoxComponent?.unmount();
            }
        });

        it('call onRender on mount', () => {
            const onRenderSpy = jest.fn();
            renderListBox({
                onRender: onRenderSpy,
            });

            expect(onRenderSpy).toHaveBeenCalledTimes(1);
        });

        it('call onDestroy on unmount', () => {
            const onDestroySpy = jest.fn();
            renderListBox({
                onDestroy: onDestroySpy,
            });

            expect(onDestroySpy).not.toHaveBeenCalled();

            listBoxComponent.unmount();

            expect(onDestroySpy).toHaveBeenCalledTimes(1);
        });

        it('render items with events on onOptionClick on the item', () => {
            renderListBox();

            (listBoxComponent.find(ItemBox).at(1).instance() as any).handleOnOptionClick({target: 'target'});

            expect(spyOnOptionClick).toHaveBeenCalled();
        });

        it('render items with events on onOptionClick', () => {
            const onOptionClick: jest.Mock<any, any> = jest.fn();
            renderListBox({
                onOptionClick,
            });

            (listBoxComponent.find(ItemBox).first().instance() as any).handleOnOptionClick({target: 'target'});

            expect(onOptionClick).toHaveBeenCalled();
        });

        it('not trigger onOptionClick if the clicked item is disabled', () => {
            const onOptionClick: jest.Mock<any, any> = jest.fn();
            renderListBox({
                items: [{value: 'test', disabled: true}],
                onOptionClick,
            });

            (listBoxComponent.find(ItemBox).instance() as any).handleOnOptionClick({target: 'target'});

            expect(onOptionClick).not.toHaveBeenCalled();
        });

        it('show the no result <BoxItem/> if the items array is empty', () => {
            renderListBox({
                items: [],
            });

            expect(listBoxComponent.find(ItemBox).props().value).toBe(ListBox.defaultProps.noResultItem.value);
        });

        it('show the no result <BoxItem/> if all items are hidden', () => {
            renderListBox({
                items: [
                    {value: 'test', hidden: true},
                    {value: 'test 1', hidden: true},
                ],
            });

            expect(listBoxComponent.find(ItemBox).props().value).toBe(ListBox.defaultProps.noResultItem.value);
        });

        it('not show the no result <BoxItem/> if one item is not hidden', () => {
            renderListBox({
                items: [
                    {value: 'test', hidden: false},
                    {value: 'test 1', hidden: true},
                ],
            });

            expect(listBoxComponent.find(ItemBox).props().value).not.toBe(ListBox.defaultProps.noResultItem.value);
        });

        it('wrap the items using the result from the "wrapItems" prop', () => {
            const wrapItems = (items: ReactNode) => <div className="wrapping-those-items-real-hard">{items}</div>;
            const list = shallow(<ListBox {...defaultProps} wrapItems={wrapItems} />);

            expect(list.childAt(0).childAt(0).hasClass('wrapping-those-items-real-hard')).toBe(true);
        });

        it('render 7 ItemBoxLoading components when isLoading prop is true', () => {
            const listItems = shallow(<ListBox {...defaultProps} isLoading />)
                .find('ul')
                .children();

            expect(listItems.length).toBe(7);
            listItems.forEach((item) => {
                expect(item.type()).toBe(ItemBoxLoading);
            });
        });

        it('render without active on any item if noActive is set as a prop', () => {
            renderListBox({
                noActive: true,
            });

            listBoxComponent.find(ItemBox).forEach((itemBox) => {
                expect(itemBox.prop('active')).toBe(false);
            });
        });
    });
});
