import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {Tooltip} from '../../tooltip/Tooltip';
import {ILinkSvgProps, LinkSvg} from '../LinkSvg';
import {Svg} from '../Svg';

describe('<LinkSvg>', () => {
    let linkSvgComponent: ReactWrapper<ILinkSvgProps, any>;
    let linkSvgProps: ILinkSvgProps;
    const linkSvgLabel = '🍦';

    beforeEach(() => {
        linkSvgProps = {
            url: 'www.google.ca',
        };
    });

    it('should render without error', () => {
        expect(() => shallow(<LinkSvg {...linkSvgProps} />)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            linkSvgComponent = mount(<LinkSvg {...linkSvgProps} />, {attachTo: document.getElementById('App')});
        }).not.toThrow();

        expect(() => {
            linkSvgComponent.unmount();
        }).not.toThrow();
    });

    describe('Props handling', () => {
        afterEach(() => {
            linkSvgComponent?.unmount();
        });

        const renderLinkSvg = (props: Partial<ILinkSvgProps> = {}) => {
            linkSvgComponent = mount(<LinkSvg {..._.extend(linkSvgProps, props)}>{linkSvgLabel}</LinkSvg>, {
                attachTo: document.getElementById('App'),
            });
        };

        it('should set the link on the <a> href', () => {
            renderLinkSvg();

            expect(linkSvgComponent.find(`a[href="${linkSvgProps.url}"]`).length).toBe(1);
        });

        it('should set the target on <a>', () => {
            renderLinkSvg({url: 'test', target: '_blank'});

            expect(linkSvgComponent.find(`a[target="_blank"]`).length).toBe(1);
        });

        it('should add custom class with linkClasses on <a>', () => {
            renderLinkSvg({linkClasses: ['test', 'test1']});

            const element = linkSvgComponent.find('a');

            expect(element.hasClass('test')).toBe(true);
            expect(element.hasClass('test1')).toBe(true);
        });

        it('should show a svg by default', () => {
            renderLinkSvg();

            expect(linkSvgComponent.find(Svg).length).toBe(1);
        });

        it('should show a tooltip', () => {
            renderLinkSvg({
                tooltip: {
                    title: 'test',
                },
            });

            expect(linkSvgComponent.find(Tooltip).length).toBe(1);
        });

        it('should render without href', () => {
            renderLinkSvg({
                url: undefined,
            });

            expect(linkSvgComponent.find('a').props().href).toBeUndefined();
        });

        it('should render a custom label as child', () => {
            renderLinkSvg();

            expect(linkSvgComponent.html()).toContain(linkSvgLabel);
        });
    });
});
