import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {DropdownSearchAutoInfiniteScroll, IDropdownSearchAutoInfiniteScrollProps} from '../DropdownSearchAutoInfiniteScroll';
import {DropdownSearchInfiniteScrollOptions} from '../DropdownSearchInfiniteScrollOptions';

describe('DropdownSearchAutoInfiniteScroll', () => {
    let basicProps: IDropdownSearchAutoInfiniteScrollProps;
    const totalOptions = 23;
    const optionsPerPage = 10;

    function getOptions(prependText: string, total: number) {
        return _.times(total, (n: number) => <div key={n}>{prependText} {n}</div>);
    }

    beforeEach(() => {
        basicProps = {
            onMouseEnter: jasmine.createSpy('onMouseEnter'),
            options: getOptions('Test', totalOptions),
            ulElementRefFunction: jasmine.createSpy('refFunction'),
            endMessage: 'the end',
            optionsPerPage,
        };
    });

    it('should render without errors', () => {
        expect(() => shallow(<DropdownSearchAutoInfiniteScroll {...basicProps} />)).not.toThrow();
    });

    describe('<DropdownSearchAutoInfiniteScroll />', () => {
        let autoInfiniteScroll: ReactWrapper<IDropdownSearchAutoInfiniteScrollProps, any>;

        beforeEach(() => {
            autoInfiniteScroll = mount(
                <DropdownSearchAutoInfiniteScroll {...basicProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            autoInfiniteScroll.detach();
        });

        it('should get what to do on mouse enter as a prop', () => {
            const onMouseEnterProp = autoInfiniteScroll.props().onMouseEnter;

            expect(onMouseEnterProp).toBeDefined();

            onMouseEnterProp();

            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);
        });

        it('should get the options as a prop', () => {
            const optionsProp = autoInfiniteScroll.props().options;

            expect(optionsProp).toBeDefined();
            expect(optionsProp.length).toBe(basicProps.options.length);
        });

        it('should get the menu ref function as a prop and call it on render', () => {
            const ulElementRefFunctionProp = autoInfiniteScroll.props().ulElementRefFunction;

            expect(ulElementRefFunctionProp).toBeDefined();
            expect(ulElementRefFunctionProp).toHaveBeenCalledTimes(1);
        });

        it('should display a <DropdownSearchInfiniteScrollOptions /> component', () => {
            expect(autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions)).toBeDefined();
        });

        it('should call onMouseEnter prop on mouse enter', () => {
            autoInfiniteScroll.find('.dropdown-menu').simulate('mouseenter');

            expect(basicProps.onMouseEnter).toHaveBeenCalledTimes(1);
        });

        it('should update activeOptions and respect the paging when loading additional options', () => {
            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options.slice(0, optionsPerPage));

            autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.next();
            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options.slice(0, optionsPerPage * 2));

            autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.next();
            expect(autoInfiniteScroll.state('activeOptions')).toEqual(basicProps.options);
        });

        it('should update activeOptions and respect the paging when setting new options', () => {
            const newOptions = getOptions('Other options', 33);

            autoInfiniteScroll.setProps({options: newOptions});
            expect(autoInfiniteScroll.state('activeOptions')).toEqual(newOptions.slice(0, optionsPerPage));
        });

        it('should not show endMessage if infinite scrolling is unused (less options shown then per page)', () => {
            expect(autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.endMessage).toBe(basicProps.endMessage);

            const newOptions = getOptions('Other options', optionsPerPage - 1);
            autoInfiniteScroll.setProps({options: newOptions});

            expect(autoInfiniteScroll.find(DropdownSearchInfiniteScrollOptions).props().infiniteScroll.endMessage).toBeNull();
        });
    });
});
