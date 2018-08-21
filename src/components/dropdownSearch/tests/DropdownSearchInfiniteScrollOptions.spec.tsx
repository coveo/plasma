import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';

import {DropdownSearchInfiniteScrollOptions, DropdownSearchInfiniteScrollOptionsProps} from '../DropdownSearchInfiniteScrollOptions';

describe('DropdownSearchInfiniteScrollOptions', () => {
    let basicProps: DropdownSearchInfiniteScrollOptionsProps;

    beforeEach(() => {
        basicProps = {
            onMouseEnter: jasmine.createSpy('onMouseEnter'),
            options: [
                <div key='1'>1</div>,
                <div key='2'>2</div>,
            ],
            ulElementRefFunction: jasmine.createSpy('refFunction'),
            infiniteScroll: {
                dataLength: 42,
                hasMore: true,
                next: jasmine.createSpy('next'),
                endMessage: 'The end.',
            },
        };
    });

    it('should render without errors', () => {
        expect(() => shallow(<DropdownSearchInfiniteScrollOptions {...basicProps} />)).not.toThrow();
    });

    describe('<DropdownSearchInfiniteScrollOptions />', () => {
        let infiniteScrollOptions: ReactWrapper<DropdownSearchInfiniteScrollOptionsProps, any>;

        beforeEach(() => {
            infiniteScrollOptions = mount(
                <DropdownSearchInfiniteScrollOptions {...basicProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            infiniteScrollOptions.detach();
        });

        it('should get what to do on mouse enter as a prop', () => {
            const onMouseEnterProp = infiniteScrollOptions.props().onMouseEnter;

            expect(onMouseEnterProp).toBeDefined();

            onMouseEnterProp();

            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);
        });

        it('should get the options as a prop', () => {
            const optionsProp = infiniteScrollOptions.props().options;

            expect(optionsProp).toBeDefined();
            expect(optionsProp.length).toBe(basicProps.options.length);
        });

        it('should get the menu ref function as a prop and call it on render', () => {
            const ulElementRefFunctionProp = infiniteScrollOptions.props().ulElementRefFunction;

            expect(ulElementRefFunctionProp).toBeDefined();
            expect(ulElementRefFunctionProp).toHaveBeenCalledTimes(1);
        });

        it('should get the infiniteScroll props as a prop', () => {
            const infiniteScrollProps = infiniteScrollOptions.props().infiniteScroll;

            expect(infiniteScrollProps).toBeDefined();
            expect(infiniteScrollProps.dataLength).toBe(basicProps.infiniteScroll.dataLength);
            expect(infiniteScrollProps.hasMore).toBe(basicProps.infiniteScroll.hasMore);
            expect(infiniteScrollProps.endMessage).toBe(basicProps.infiniteScroll.endMessage);
            expect(infiniteScrollProps.next).toBeDefined();

            infiniteScrollProps.next();

            expect(basicProps.infiniteScroll.next).toHaveBeenCalledTimes(1);
        });

        it('should display a <InfiniteScroll /> component', () => {
            expect(infiniteScrollOptions.find(InfiniteScroll).length).toBe(1);
        });

        it('should call onMouseEnter prop on mouse enter', () => {
            infiniteScrollOptions.find('.dropdown-menu').simulate('mouseenter');

            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);
        });
    });
});
