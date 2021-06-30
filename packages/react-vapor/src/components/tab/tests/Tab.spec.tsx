import {render} from '@test-utils';
import {shallow} from 'enzyme';
import * as React from 'react';

import {UrlUtils} from '../../../utils';
import {Svg} from '../../svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ITabProps, Tab} from '../Tab';

describe('Tab', () => {
    const basicProps: ITabProps = {
        title: 'tab title',
    };

    it('should render and unmount without errors', () => {
        expect(() => {
            const tab = shallow(<Tab {...basicProps} />);
            tab.unmount();
        }).not.toThrow();
    });

    it('should call prop onRender on mounting if set', () => {
        const onRenderSpy = jest.fn();

        render(<Tab {...basicProps} onRender={onRenderSpy} />);

        expect(onRenderSpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onDestroy when unmounting if set', () => {
        const onDestroySpy = jest.fn();

        const {unmount} = render(<Tab {...basicProps} onDestroy={onDestroySpy} />);
        unmount();

        expect(onDestroySpy).toHaveBeenCalledTimes(1);
    });

    it('should call prop onSelect when tab is clicked and prop is set', () => {
        const onSelectSpy = jest.fn();

        const tab = shallow(<Tab {...basicProps} onSelect={onSelectSpy} />);
        tab.simulate('click');

        expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });

    it('should should not call onSelect prop when clicking on the tab and disabled is true', () => {
        const onSelectSpy = jest.fn();

        const tab = shallow(<Tab {...basicProps} onSelect={onSelectSpy} disabled />);
        tab.simulate('click');

        expect(onSelectSpy).not.toHaveBeenCalled();
    });

    it('should set active class on container when isActive is true', () => {
        const tab = shallow(<Tab {...basicProps} isActive />);

        expect(tab.hasClass('active')).toBe(true);
    });

    it('should set disabled class on container when disabled is true', () => {
        const tab = shallow(<Tab {...basicProps} disabled />);

        expect(tab.hasClass('enabled')).toBe(false);
        expect(tab.hasClass('disabled')).toBe(true);
    });

    it('should render a Tooltip if the tooltip prop is not empty', () => {
        const expectedTooltipText = 'I am a tooltip';
        const tab = shallow(<Tab {...basicProps} tooltip={expectedTooltipText} />);

        expect(tab.find(Tooltip).exists()).toBe(true);
        expect(tab.find(Tooltip).props().title).toBe(expectedTooltipText);
    });

    it("should render a children component if it's included", () => {
        const tab = shallow(
            <Tab {...basicProps}>
                <Svg svgName={'help'} svgClass={'icon mod-16 mr1'} />
            </Tab>
        );

        expect(tab.find(Svg).exists()).toBe(true);
        expect(tab.find(Svg).props().svgName).toBe('help');
    });

    it("should render a children component if it's set", () => {
        const tab = shallow(<Tab {...basicProps} children={<Svg svgName={'help'} svgClass={'icon mod-16 mr1'} />} />);

        expect(tab.find(Svg).exists()).toBe(true);
        expect(tab.find(Svg).props().svgName).toBe('help');
    });

    it('should redirect to specific URL if the url prop is set', () => {
        const navigateSpy = jest.spyOn(UrlUtils, 'redirectToUrl');

        const tab = shallow(
            <Tab
                {...basicProps}
                url="http://www.perdu.com"
                children={<Svg svgName={'help'} svgClass={'icon mod-16 mr1'} />}
            />
        );
        tab.simulate('click');

        expect(navigateSpy).toHaveBeenCalledWith('http://www.perdu.com');
    });
});
