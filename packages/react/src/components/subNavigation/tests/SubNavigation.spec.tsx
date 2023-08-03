import {mount, shallow, ShallowWrapper} from 'enzyme';
import {act} from 'react-dom/test-utils';
import {noop} from 'underscore';
import {ISubNavigationProps, SubNavigation} from '../SubNavigation';

describe('SubNavigation', () => {
    it('should render without errors', () => {
        expect(() => shallow(<SubNavigation items={[]} selected="" />)).not.toThrow();
        expect(() => shallow(<SubNavigation items={[]} selected="hello" />)).not.toThrow();
        expect(() => shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected="a" />)).not.toThrow();
        expect(() =>
            shallow(
                <SubNavigation
                    items={[
                        {id: 'a', label: 'A'},
                        {id: 'b', label: 'B'},
                    ]}
                    selected="b"
                />,
            ),
        ).not.toThrow();

        expect(() =>
            shallow(
                <SubNavigation
                    items={[
                        {id: 'a', label: 'A'},
                        {id: 'b', label: 'B'},
                    ]}
                    selected="b"
                    description="alphabet soup"
                />,
            ),
        ).not.toThrow();

        expect(() =>
            shallow(<SubNavigation items={[{id: 'a', label: 'A'}]} selected="not-existing-id" />),
        ).not.toThrow();
    });

    it('should call onRender when the element is created', () => {
        const spy = jest.fn();
        const wrapper = mount(<SubNavigation items={[]} defaultSelected="" onRender={spy} />);
        act(() => {
            wrapper.update();
        });

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onDestroy when the element is created', () => {
        const spy = jest.fn();
        const subNav = mount(<SubNavigation items={[]} defaultSelected="" onDestroy={spy} />);
        subNav.unmount();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('<SubNavigation />', () => {
        let subNavigation: ShallowWrapper<ISubNavigationProps>;
        const basicProps: ISubNavigationProps = {
            items: [
                {id: 'a', label: 'A'},
                {id: 'b', label: 'B'},
            ],
        };

        const propsWithDescription: ISubNavigationProps = {
            items: [
                {id: 'a', label: 'A'},
                {id: 'b', label: 'B', description: 'Apple'},
            ],
        };

        const propsWithCustomLabel: ISubNavigationProps = {
            items: [
                {id: 'a', label: <h1>Hello World</h1>},
                {id: 'b', label: 'B', description: 'hello hello'},
            ],
        };

        it('should render one navigation link per item', () => {
            subNavigation = shallow(<SubNavigation {...basicProps} />);

            expect(subNavigation.find('li').length).toBe(basicProps.items.length);
        });

        it('should render a description', () => {
            subNavigation = shallow(<SubNavigation {...propsWithDescription} />);
            expect(subNavigation.find('div').length).toBe(3);
            expect(subNavigation.find('div').last().hasClass('sub-navigation-item-description')).toBe(true);
        });

        it('should create items in div elements', () => {
            subNavigation = shallow(<SubNavigation {...propsWithDescription} />);
            expect(subNavigation.find('div').length).toBe(3);
            expect(subNavigation.find('div').first().hasClass('sub-navigation-item-link-with-description-label')).toBe(
                true,
            );
        });

        it('should respect the label when a description is supplied', () => {
            subNavigation = shallow(<SubNavigation {...propsWithCustomLabel} />);
            expect(subNavigation.find('div').length).toBe(2);
            expect(
                subNavigation.find('div').last().hasClass('sub-navigation-item-description body-m-book-subdued'),
            ).toBe(true);
            expect(subNavigation.find('h1').length).toBe(1);
        });

        it('should have the "mod-selected" class on the selected item', () => {
            const selectedItem = 'b';

            subNavigation = shallow(<SubNavigation {...basicProps} selected={selectedItem} />);

            expect(
                subNavigation
                    .find('li')
                    .findWhere((node) => node.key() === selectedItem)
                    .hasClass('mod-selected'),
            ).toBe(true);
        });

        it('should not have the mod-selected class on the default item if another item was selected', () => {
            const selectedItem = shallow(<SubNavigation {...basicProps} defaultSelected={'a'} selected={'b'} />)
                .find('li')
                .find('.mod-selected');

            expect(selectedItem.length).toBe(1);
            expect(selectedItem.getElement().key).toBe('b');
        });

        it('should have the "disabled" class on the disabled item', () => {
            const disabledItem: ISubNavigationProps = {
                items: [{id: 'a', label: 'A', disabled: true}],
            };
            subNavigation = shallow(<SubNavigation {...disabledItem} />);

            expect(subNavigation.find('a').hasClass('disabled')).toBe(true);
        });

        it('should call the onClickItem prop when clicking on an item', () => {
            const clickedItem = 'b';
            const spy = jest.fn();

            subNavigation = shallow(<SubNavigation {...basicProps} onClickItem={spy} />);
            subNavigation
                .find('li')
                .findWhere((node) => node.key() === clickedItem)
                .find('.sub-navigation-item-link')
                .simulate('click', {preventDefault: noop});

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(clickedItem);
        });
    });
});
