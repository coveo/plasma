import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from '../../tooltip/Tooltip';
import {Button, IButtonProps} from '../Button';

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
            const spyOnClick = jasmine.createSpy('onClick');

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
                expect(buttonComponent.find('a').hasClass('text-medium-grey')).toBe(true);
            });

            it('should not add the text-medium-grey if the button is disabled and primary', () => {
                showButton({
                    enabled: false,
                    primary: true,
                    link,
                });

                expect(buttonComponent.find('a').prop('disabled')).toBe(true);
                expect(buttonComponent.find('a').hasClass('disabled')).toBe(true);
                expect(buttonComponent.find('a').hasClass('text-medium-grey')).toBe(false);
            });

            it('should add the link in a href', () => {
                showButton({
                    link,
                });
                expect(buttonComponent.find('a').prop('href')).toEqual(link);
            });

            it('should have the class btn-container', () => {
                showButton({
                    link,
                });

                expect(buttonComponent.find('.btn-container').length).toBe(1);
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
                const spyOnClick = jasmine.createSpy('onClick');

                showButton({
                    onClick: spyOnClick,
                    link,
                });
                buttonComponent.find('a').simulate('click');

                expect(spyOnClick).toHaveBeenCalledTimes(1);
            });
        });
    });
});
