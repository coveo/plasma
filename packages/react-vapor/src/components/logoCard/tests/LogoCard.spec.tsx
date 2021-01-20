import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {
    DEFAULT_LOGO_CARD_CLASSNAME,
    DEFAULT_LOGO_ICON,
    DEFAULT_LOGO_ICON_CLASSNAME,
    DEFAULT_LOGO_ICON_SIZE,
    ILogoCardProps,
    LogoCard,
} from '../LogoCard';
import {Tooltip} from '../../tooltip';

describe('LogoCard', () => {
    let logoCard: ReactWrapper<ILogoCardProps>;
    const mountWithProps = (props: Partial<ILogoCardProps>) => {
        logoCard = mount(<LogoCard {..._.defaults(props, {title: 'test card'})} />, {
            attachTo: document.getElementById('App'),
        });
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<LogoCard title="test card" />);
        }).not.toThrow();
    });

    describe('Default <LogoCard />', () => {
        let defaultLogoCardProps: Partial<ILogoCardProps>;

        beforeAll(() => {
            defaultLogoCardProps = {
                onClick: jest.fn(),
                title: 'some logocard title',
            };
        });

        beforeEach(() => {
            mountWithProps(defaultLogoCardProps);
        });

        it('should have the default logo-card class', () => {
            expect(logoCard.html()).toContain(DEFAULT_LOGO_CARD_CLASSNAME);
        });

        it('should render the specied title as props', () => {
            expect(logoCard.find('.logo-card-title').text()).toEqual(defaultLogoCardProps.title);
        });

        it('should trigger the specified onClick prop if any', () => {
            logoCard.props().onClick();

            expect(defaultLogoCardProps.onClick).toHaveBeenCalledTimes(1);
        });

        it('should render no badges if no badges are specified as props', () => {
            expect(logoCard.find('Badge').length).toBe(0);
        });

        it('should render the logo icon with the default icon class and size', () => {
            expect(logoCard.find('Svg').hasClass(DEFAULT_LOGO_ICON_CLASSNAME)).toBe(true);
            expect(logoCard.find('Svg').hasClass(DEFAULT_LOGO_ICON_SIZE)).toBe(true);
        });

        it('should have the default "source-custom" icon logo', () => {
            expect(logoCard.props().svgName).toBeDefined();
            expect(logoCard.props().svgName).toEqual(DEFAULT_LOGO_ICON);
        });
    });

    describe('Disabled <LogoCard />', () => {
        let disabledLogoCardProps: Partial<ILogoCardProps>;

        beforeAll(() => {
            disabledLogoCardProps = {
                disabled: true,
                onClick: jest.fn(),
                tooltip: 'Tooltip',
            };
        });

        beforeEach(() => {
            mountWithProps(disabledLogoCardProps);
        });

        it('should have the disabled class', () => {
            expect(logoCard.html()).toContain('disabled');
        });

        it('should not call onClick when clicking on the logoCard', () => {
            logoCard.simulate('click');

            expect(disabledLogoCardProps.onClick).not.toHaveBeenCalled();
        });

        it('should render a tooltip if the props are given', () => {
            expect(logoCard.find(Tooltip).length).toBe(1);
        });
    });

    describe('<LogoCard /> with badges, description', () => {
        const thisLogoCardProps: Partial<ILogoCardProps> = {
            badges: [
                {
                    label: 'badge 1',
                },
                {
                    label: 'badge 2',
                },
            ],
            description: 'some description',
            extraContainerClasses: ['some-extra-class'],
            svgName: 'source-rss',
        };

        beforeEach(() => {
            mountWithProps(thisLogoCardProps);
        });

        it('should render as many badges as specified in the props if any', () => {
            expect(logoCard.find('Badge').length).toBe(thisLogoCardProps.badges.length);
        });

        it('should render extra container classes if specified as props', () => {
            expect(logoCard.html()).toContain('some-extra-class');
        });

        it('should have the svgName specified as props', () => {
            expect(logoCard.props().svgName).toBeDefined();
            expect(logoCard.props().svgName).toEqual('source-rss');
        });
    });
});
