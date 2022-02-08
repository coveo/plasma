import {SvgName} from '@coveord/plasma-style';
import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {ISvgProps, Svg} from '../Svg';

describe('Svg', () => {
    let svg: ReactWrapper<ISvgProps, any>;

    const BASIC_SVG: ISvgProps = {
        svgName: 'clear',
        className: 'icon',
        svgClass: '🎩',
    };

    const INVALID_SVG_NAME: ISvgProps = {
        svgName: 'someInvalidSvgName' as SvgName,
        className: 'icon',
        svgClass: '🎩',
    };

    const DASHED_SVG_NAME: ISvgProps = {
        svgName: 'sourceCustom',
        className: 'icon',
        svgClass: '🎩',
    };

    const CAMELIZED_SVG_NAME: ISvgProps = {
        svgName: 'sourceCustom',
        className: 'icon',
        svgClass: '🎩',
    };

    it('should render without error', () => {
        expect(() => shallow(<Svg {...BASIC_SVG} />)).not.toThrow();
    });

    describe('<Svg />', () => {
        const mountWithProps = (props: ISvgProps) => {
            svg = mount(<Svg {...props} />, {attachTo: document.getElementById('App')});
        };

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                mountWithProps(BASIC_SVG);
            }).not.toThrow();

            expect(() => {
                svg.unmount();
            }).not.toThrow();
        });

        describe('Valid svg name', () => {
            let svgDomNode: SVGSVGElement;

            beforeEach(() => {
                mountWithProps(BASIC_SVG);
                svgDomNode = svg.getDOMNode().querySelector('svg');
            });

            it('should render a non-empty svg tag', () => {
                expect(svgDomNode).toBeDefined();
                expect(svgDomNode.hasChildNodes()).toBe(true);
            });

            it('should render the svgClass on the svg tag if specified', () => {
                expect(svgDomNode.classList.toString()).toBe(BASIC_SVG.svgClass);

                expect(
                    mount(<Svg svgName="home" svgClass="icon" />)
                        .getDOMNode()
                        .querySelector('svg')
                        .classList.toString()
                ).toBe('icon');
            });
        });

        describe('Invalid svg name', () => {
            beforeEach(() => {
                mountWithProps(INVALID_SVG_NAME);
            });

            it('should render an empty svg tag', () => {
                expect(svg.find('svg').exists()).toBe(true);
            });

            it('should render the svgClass if specified as props on the svg tag', () => {
                expect(svg.find('svg').hasClass(INVALID_SVG_NAME.svgClass)).toBe(true);
            });

            it('should render className prop on the container', () => {
                expect(svg.hasClass(INVALID_SVG_NAME.className)).toBe(true);
            });
        });

        describe('Dashed svg name', () => {
            let svgDomNode: SVGSVGElement;

            beforeEach(() => {
                mountWithProps(DASHED_SVG_NAME);
                svgDomNode = svg.getDOMNode().querySelector('svg');
            });

            it('should render an non-empty svg tag', () => {
                expect(svgDomNode).toBeDefined();
                expect(svgDomNode.hasChildNodes()).toBe(true);
            });

            it('should render the svgClass if specified as props on the svg tag', () => {
                expect(svgDomNode.classList.toString()).toBe(DASHED_SVG_NAME.svgClass);
            });

            it('should render className prop on the container', () => {
                expect(svg.hasClass(DASHED_SVG_NAME.className)).toBe(true);
            });
        });

        describe('Camelized svg name', () => {
            let svgDomNode: SVGSVGElement;

            beforeEach(() => {
                mountWithProps(CAMELIZED_SVG_NAME);
                svgDomNode = svg.getDOMNode().querySelector('svg');
            });

            it('should render an non-empty svg tag', () => {
                expect(svgDomNode).toBeDefined();
                expect(svgDomNode.hasChildNodes()).toBe(true);
            });

            it('should render the svgClass if specified as props on the svg tag', () => {
                expect(svgDomNode.classList.toString()).toBe(CAMELIZED_SVG_NAME.svgClass);
            });

            it('should render className prop on the container', () => {
                expect(svg.hasClass(CAMELIZED_SVG_NAME.className)).toBe(true);
            });
        });

        it('should render the same svg for both of its names', () => {
            mountWithProps(DASHED_SVG_NAME);

            const dashedSVG = svg.getDOMNode().querySelector('svg').innerHTML;

            mountWithProps(CAMELIZED_SVG_NAME);

            const camelizedSVG = svg.getDOMNode().querySelector('svg').innerHTML;

            expect(dashedSVG).toBe(camelizedSVG);
        });
    });
});
