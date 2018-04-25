import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {keyCode} from '../../utils/InputUtils';
import {Svg} from '../svg/Svg';
import {SearchBar} from './SearchBar';
import {searchBarPropsScenarios} from './SearchBarPropsScenarios.spec';

describe('SearchBar', () => {
    const requiredProps = {...searchBarPropsScenarios[0]};
    it('should not throw on render', () => {
        expect(() => {
            searchBarPropsScenarios.forEach((props) => shallow(<SearchBar {...props} />));
        }).not.toThrow();
    });

    it('should have a container div with the search-bar class and without the search-bar-loading and search-bar-disabled classes by default', () => {
        const containerDiv = shallow(<SearchBar {...requiredProps} />).find('div').first();
        expect(containerDiv.hasClass('search-bar')).toBe(true);
        expect(containerDiv.hasClass('search-bar-loading')).toBe(false);
        expect(containerDiv.hasClass('search-bar-disabled')).toBe(false);
    });

    it('should have a container div with search-bar-loading class when searching is passed as prop', () => {
        const containerDiv = shallow(<SearchBar {...requiredProps} searching />).find('div').first();
        expect(containerDiv.hasClass('search-bar-loading')).toBe(true);
    });

    it('should have a container div with search-bar-disabled class when disabled is passed as prop', () => {
        const containerDiv = shallow(<SearchBar {...requiredProps} disabled />).find('div').first();
        expect(containerDiv.hasClass('search-bar-disabled')).toBe(true);
    });

    it('should add the extra container classes if passed as prop', () => {
        const containerDiv = shallow(<SearchBar {...requiredProps} containerClassNames='extra-class' />).find('div').first();
        expect(containerDiv.hasClass('extra-class')).toBe(true);
    });

    it('should have an input inside the div container with the search-bar-input class by default', () => {
        const component = shallow(<SearchBar {...requiredProps} />);
        expect(component.find('div').first().find('input').prop('className')).toBe('search-bar-input');
    });

    it('should have an input inside the div container with extra classes if passed as props', () => {
        const component = shallow(<SearchBar {...requiredProps} inputClassNames='extra-class' />);
        expect(component.find('div').first().find('input').prop('className')).toContain('extra-class');
    });

    it('should have a clickable span containing an svg by default, which when clicked, the search method is called', () => {
        const searchSpy = spyOn(SearchBar.prototype as any, 'search');
        const component = shallow(<SearchBar {...requiredProps} />);
        const clickableSpan = component.find('div .search-bar-icon-container span');

        (clickableSpan.props() as any).onClick();
        expect(searchSpy).toHaveBeenCalledTimes(1);

        const svg = clickableSpan.find(Svg);
        expect(svg.length).toBe(1);
        expect(svg.prop('svgName')).toBe('search');
        expect(svg.prop('svgClass')).toBe('fill-medium-blue');
    });

    it('should have an unclickable grey search svg if SearchBar is disabled', () => {
        const component = shallow(<SearchBar {...requiredProps} disabled />);
        expect(component.find('div .search-bar-icon-container span').length).toBe(0);

        const svg = component.find('div .search-bar-icon-container').find(Svg);
        expect(svg.length).toBe(1);
        expect(svg.prop('svgName')).toBe('search');
        expect(svg.prop('svgClass')).toBe('fill-light-grey');
    });

    it('should have an unclickable loading animation if searching is passed as prop', () => {
        const component = shallow(<SearchBar {...requiredProps} searching />);

        expect(component.find('div .search-bar-icon-container span').length).toBe(0);
        expect(component.find('div .search-bar-icon-container').find(Svg).length).toBe(0);
        expect(component.find('div .search-bar-icon-container .search-bar-spinner').length).toBe(1);
    });

    it('should call onChange on input change if it is defined', () => {
        const onChange = jasmine.createSpy('onChange');
        const props = {...requiredProps, onChange};
        const component = mount(<SearchBar {...props} />);
        component.find('input').simulate('change');

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should call search on enter keyup', () => {
        const searchSpy = spyOn(SearchBar.prototype as any, 'search');
        const component = mount(<SearchBar {...requiredProps} />);
        component.find('input').simulate('keyup', {keyCode: keyCode.enter} as any);

        expect(searchSpy).toHaveBeenCalledTimes(1);
    });

    it('should not call search on keyups other than enter', () => {
        const searchSpy = spyOn(SearchBar.prototype as any, 'search');
        const component = mount(<SearchBar {...requiredProps} />);
        component.find('input').simulate('keyup', {keyCode: keyCode.leftArrow} as any);

        expect(searchSpy).not.toHaveBeenCalled();
    });

    describe('on calling search', () => {
        it('should call the onSearch prop even if value is empty', () => {
            const component = new SearchBar({...requiredProps});
            spyOn(component.props, 'onSearch');
            (component as any).search();

            expect(component.props.onSearch).toHaveBeenCalledTimes(1);
        });

        it('should not call the onSearch prop if value is not empty, searching is false, but disabled is true', () => {
            const component = new SearchBar({...requiredProps, value: 'non empty', disabled: true});
            spyOn(component.props, 'onSearch');
            (component as any).search();

            expect(component.props.onSearch).not.toHaveBeenCalled();
        });

        it('should not call the onSearch prop if value is not empty, disabled is false, but searching is true', () => {
            const component = new SearchBar({...requiredProps, value: 'non empty', searching: true});
            spyOn(component.props, 'onSearch');
            (component as any).search();

            expect(component.props.onSearch).not.toHaveBeenCalled();
        });

        it('should call the onSearch prop if value is not empty, disabled is false, and searching is false', () => {
            const component = new SearchBar({...requiredProps, value: 'non empty'});
            spyOn(component.props, 'onSearch');
            (component as any).search();

            expect(component.props.onSearch).toHaveBeenCalledTimes(1);
        });
    });
});
