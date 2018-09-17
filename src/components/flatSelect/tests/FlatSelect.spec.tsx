import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {FlatSelect, IFlatSelectOwnProps, IFlatSelectProps} from '../FlatSelect';
import {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption';

describe('FlatSelect', () => {

    const id = 'id';
    const defaultOptions: IFlatSelectOptionProps[] = [
        {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        }, {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        },
    ];

    const ownProps: IFlatSelectOwnProps = {
        id,
        options: defaultOptions,
        classes: ['test'],
        group: false,
        optionPicker: false,
    };

    describe('<FlatSelect />', () => {
        let flatSelect: ReactWrapper<IFlatSelectProps, any>;
        let flatSelectInstance: FlatSelect;

        const renderFlatSelect = (props?: IFlatSelectProps) => {
            flatSelect = mount(
                <FlatSelect {...props} />,
                {attachTo: document.getElementById('App')},
            );
            flatSelectInstance = flatSelect.instance() as FlatSelect;
        };

        afterEach(() => {
            flatSelect.detach();
        });

        describe('default props', () => {

            beforeEach(() => {
                renderFlatSelect(ownProps);
            });

            it('should have the same object sent has parameter than the component props', () => {
                expect(flatSelect.props()).toEqual(ownProps);
            });
        });

        describe('render', () => {
            it('should render without error', () => {
                expect(() => {
                    renderFlatSelect(_.extend({}, ownProps));
                }).not.toThrow();
            });

            it('should render without error with no options provided', () => {
                expect(() => {
                    renderFlatSelect(_.extend({}, ownProps, {
                        options: [],
                    }));
                }).not.toThrow();
            });
        });

        describe('event props', () => {

            beforeEach(() => {
                renderFlatSelect(ownProps);
            });

            it('should call onMount prop if set when mounting', () => {
                const onRenderSpy = jasmine.createSpy('onRender');

                expect(() => flatSelectInstance.componentWillMount()).not.toThrow();

                flatSelect.unmount();
                flatSelect.setProps({onRender: onRenderSpy});
                flatSelect.mount();

                expect(onRenderSpy).toHaveBeenCalled();
            });

            it('should call onDestroy prop if set when will unmount', () => {
                const onDestroy = jasmine.createSpy('onDestroy');

                expect(() => flatSelectInstance.componentWillUnmount()).not.toThrow();

                flatSelect.setProps({onDestroy});
                flatSelect.unmount();

                expect(onDestroy).toHaveBeenCalled();
            });

            it('should call onClick if defined when click the FlatSelectOption button', () => {
                const onClick = jasmine.createSpy('onClick');
                flatSelect.setProps({onClick});

                flatSelect.find(FlatSelectOption).first().props().onClick({} as any);

                expect(onClick).toHaveBeenCalled();
            });

            it('should call onOptionClick if defined when click the FlatSelectOption button', () => {
                const onOptionClick = jasmine.createSpy('onOptionClick');
                flatSelect.setProps({onOptionClick});

                flatSelect.find(FlatSelectOption).first().props().onClick({} as any);

                expect(onOptionClick).toHaveBeenCalled();
            });
        });

        describe('Props functionality', () => {

            it('should add the class mod-btn-group if group is set to true', () => {
                renderFlatSelect(_.extend({}, ownProps, {
                    group: true,
                }));

                expect(flatSelect.find('.flat-select').hasClass('mod-btn-group')).toBe(true);
            });

            it('should add the class mod-option-picker if optionPicker is set to true', () => {
                renderFlatSelect(_.extend({}, ownProps, {
                    optionPicker: true,
                }));

                expect(flatSelect.find('.flat-select').hasClass('mod-option-picker')).toBe(true);
            });
        });
    });
});
