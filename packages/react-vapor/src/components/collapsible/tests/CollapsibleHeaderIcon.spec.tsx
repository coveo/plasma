import * as VaporSVG from 'coveo-styleguide';
import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {LinkSvg} from '../../svg/LinkSvg';
import {Svg} from '../../svg/Svg';
import {CollapsibleHeaderIcon, CollapsibleHeaderIconProps} from '../CollapsibleHeaderIcon';

describe('CollapsibleHeaderIcon tests', () => {
    const defaultProps = {
        informationTooltip: {
            title: 'pomme',
        },
        informationUrl: 'peach',
    };
    let wrapper: ShallowWrapper<CollapsibleHeaderIconProps>;

    it('should mount and unmount without errors', () => {
        expect(() => {
            wrapper = shallow(<CollapsibleHeaderIcon {...defaultProps} />);
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once rendered', () => {
        const shallowCollapsibleHeaderIcon = (props: CollapsibleHeaderIconProps = defaultProps) =>
            shallow(<CollapsibleHeaderIcon {...props} />);

        it('should return null if informationTooltip and informationUrl is undefined', () => {
            wrapper = shallowCollapsibleHeaderIcon({} as CollapsibleHeaderIconProps);

            expect(wrapper.find('.round-contextual-help').length).toBe(0);
        });

        it('should fill documentation link icon color if the informationUrl is defined', () => {
            wrapper = shallowCollapsibleHeaderIcon();

            expect(wrapper.find(LinkSvg).props().svg.svgClass).toContain('documentation-link');
            expect(wrapper.find(LinkSvg).props().svg.svgClass).not.toContain('disabled');
        });

        it('should fill disabled color if the informationUrl is not defined', () => {
            wrapper = shallowCollapsibleHeaderIcon({
                informationTooltip: {
                    title: 'pomme',
                },
            } as CollapsibleHeaderIconProps);

            expect(wrapper.find(Svg).props().svgClass).toContain('disabled');
            expect(wrapper.find(Svg).props().svgClass).not.toContain('documentation-link');
        });

        it('should set the svg name for info if informationUrl is not defined', () => {
            wrapper = shallowCollapsibleHeaderIcon({
                informationTooltip: {
                    title: 'pomme',
                },
            } as CollapsibleHeaderIconProps);

            expect(wrapper.find(Svg).props().svgName).toBe(VaporSVG.svg.info.name);
        });

        it('should set the svg name for help if informationUrl is defined', () => {
            wrapper = shallowCollapsibleHeaderIcon();

            expect(wrapper.find(LinkSvg).props().svg.svgName).toBe(VaporSVG.svg.help.name);
        });
    });
});
