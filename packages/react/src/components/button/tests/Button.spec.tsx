import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';

import {Tooltip} from '../../tooltip.js';
import {Button, IButtonProps} from '../Button.js';

describe('Button', () => {
    let buttonComponent: ReactWrapper<IButtonProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Button enabled={true} />);
        }).not.toThrow();
    });

    describe('<Button /> with default props', () => {
        beforeEach(() => {
            buttonComponent = mount(<Button enabled={true} />, {attachTo: document.getElementById('App')});
        });

        it('should render the default name', () => {
            expect(buttonComponent.find('button').text()).toEqual('');
        });

        it('should render the button not primary', () => {
            expect(buttonComponent.find('button').hasClass('mod-primary')).toBe(false);
        });
    });

    describe('<Button /> with custom props', () => {
        const showButton = (props: Partial<IButtonProps>) => {
            buttonComponent = mount(<Button {..._.defaults(props, {enabled: true})} />, {
                attachTo: document.getElementById('App'),
            });
        };

        it('should render the custom name', () => {
            showButton({
                name: 'test',
            });

            expect(buttonComponent.find('button').text()).toEqual('test');
        });

        it('should render the button mod primary', () => {
            showButton({
                primary: true,
            });

            expect(buttonComponent.find('button').hasClass('mod-primary')).toBe(true);
        });

        it('should render the button mod small', () => {
            showButton({
                small: true,
            });

            expect(buttonComponent.find('button').hasClass('mod-small')).toBe(true);
        });

        it('should render the default button disabled with enabled at false', () => {
            showButton({
                enabled: false,
            });

            expect(buttonComponent.find('button').prop('disabled')).toBe(true);
            expect(buttonComponent.find('button').hasClass('disabled')).toBe(true);
        });

        it('should call the onClick props on click', () => {
            const spyOnClick = jest.fn();

            showButton({
                onClick: spyOnClick,
            });
            buttonComponent.find('button').simulate('click');

            expect(spyOnClick).toHaveBeenCalledTimes(1);
        });

        it('should add <Tooltip/> if tooltip is defined', () => {
            showButton({
                tooltip: 'tooltip test',
            });

            expect(buttonComponent.find(Tooltip).length).toBe(1);
        });

        describe('with the link button', () => {
            const link: string = 'link';

            it('should render the custom name', () => {
                showButton({
                    name: 'test',
                    link,
                });

                expect(buttonComponent.find('a').text()).toEqual('test');
            });

            it('should render the link button disabled with enabled at false', () => {
                showButton({
                    enabled: false,
                    link,
                });

                expect(buttonComponent.find('a').prop('disabled')).toBe(true);
                expect(buttonComponent.find('a').hasClass('disabled')).toBe(true);
            });

            it('should add the link in a href', () => {
                showButton({
                    link,
                });

                expect(buttonComponent.find('a').prop('href')).toEqual(link);
            });

            it('should add the rel default value', () => {
                showButton({
                    link,
                });

                expect(buttonComponent.find('a').prop('rel')).toEqual('noopener noreferrer');
            });

            it('should add empty target by default', () => {
                showButton({
                    link,
                });

                expect(buttonComponent.find('a').prop('target')).toEqual('');
            });

            it('should use the target send in options', () => {
                const target: string = 'target';
                showButton({
                    link,
                    target,
                });

                expect(buttonComponent.find('a').prop('target')).toEqual(target);
            });

            it('should add <Tooltip/> on link button if tooltip is defined', () => {
                showButton({
                    tooltip: 'tooltip test',
                    link,
                });

                expect(buttonComponent.find(Tooltip).length).toBe(1);
            });

            it('should call the onClick props on click', () => {
                const spyOnClick = jest.fn();

                showButton({
                    onClick: spyOnClick,
                    link,
                });
                buttonComponent.find('a').simulate('click');

                expect(spyOnClick).toHaveBeenCalledTimes(1);
            });
        });

        describe('with the isLoading props', () => {
            it("shouldn't render the loading button by default", () => {
                showButton({isLoading: false});

                expect(buttonComponent.find('button').hasClass('mod-loading')).toBe(false);
                expect(buttonComponent.find('[role="alert"]')[0]).not.toBeDefined();
            });

            it("shouldn't render the loading button for a standard button", () => {
                showButton({isLoading: true});

                expect(buttonComponent.find('button').hasClass('mod-loading')).toBe(false);
                expect(buttonComponent.find('[role="alert"]')[0]).not.toBeDefined();
            });

            it('should render the loading button for a disabled button', () => {
                showButton({isLoading: true, enabled: false});

                expect(buttonComponent.find('button').hasClass('mod-loading')).toBe(true);
                expect(buttonComponent.find('[role="alert"]').hasClass('loading-spinner')).toBe(true);
            });

            it("shouldn't render the loading button for a primary button", () => {
                showButton({isLoading: true, primary: true});

                expect(buttonComponent.find('button').hasClass('mod-loading')).toBe(false);
                expect(buttonComponent.find('[role="alert"]')[0]).not.toBeDefined();
            });

            it('should render the loading button for a primary disabled button', () => {
                showButton({isLoading: true, primary: true, enabled: false});

                expect(buttonComponent.find('button').hasClass('mod-loading')).toBe(true);
                expect(buttonComponent.find('[role="alert"]').hasClass('loading-spinner')).toBe(true);
            });
        });
    });
});
