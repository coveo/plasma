import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import * as _ from 'underscore';

import {mountWithStore, shallowWithStore} from 'enzyme-redux';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {ITextAreaProps, TextArea, TextAreaConnected} from '../TextArea';
import {TextAreaActions} from '../TextAreaActions';

describe('TextArea', () => {
    describe('<TextArea />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<TextArea id="textarea-id" />);
            }).not.toThrow();
        });
    });

    describe('<TextArea />', () => {
        let hookWrapper: ReactWrapper<ITextAreaProps, any>;
        let wrapper: ReactWrapper<ITextAreaProps, any>;

        beforeEach(() => {
            wrapper = mount(<TextArea id="textarea-id" />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should set textarea id when specified', () => {
            expect(wrapper.prop('id')).toBe('textarea-id');
        });

        it('should set className when specified', () => {
            const className = 'a-class';
            expect(wrapper.hasClass(className)).toBe(false);

            wrapper.setProps({className}).update();
            expect(wrapper.find('textarea').hasClass(className)).toBe(true);
        });

        it('should set additionalAttributes when specified', () => {
            expect(wrapper.prop('placeholder')).toBeUndefined();
            wrapper.setProps({additionalAttributes: {placeholder: 'not null'}}).update();
            expect(wrapper.find('textarea').prop('placeholder')).toBe('not null');
        });

        it('should set disabled prop when specified', () => {
            expect(wrapper.prop('disabled')).toBeUndefined();
            wrapper.setProps({disabled: true}).update();
            expect(wrapper.find('textarea').prop('disabled')).toBe(true);
        });

        it('should set validate prop when specified', () => {
            const validation = (value: string) => value !== '';

            expect(wrapper.prop('validate')).toBeUndefined();
            wrapper.setProps({validate: validation}).update();
            expect(wrapper.prop('validate')).toBe(validation);
        });

        it('should set value prop when specified', () => {
            expect(wrapper.prop('value')).toBeUndefined();
            wrapper.setProps({value: 'non empty'}).update();
            expect(wrapper.find('textarea').prop('value')).toBe('non empty');
        });

        it('should not throw if the onChange prop is not defined onChange', () => {
            wrapper.setProps({onChange: undefined}).update();

            expect(() => wrapper.find('textarea').simulate('change')).not.toThrow();
        });

        it('should not throw if the onChangeCallback prop is not defined onChange', () => {
            wrapper.setProps({onChangeCallback: undefined});

            expect(() => wrapper.find('textarea').simulate('change')).not.toThrow();
        });

        it('should call prop onChange on textarea change', () => {
            const onChange = jasmine.createSpy('onChange');

            wrapper.setProps({onChange}).update();
            wrapper.find('textarea').simulate('change');

            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('should call prop onChangeCallback on textarea change', () => {
            const onChangeCallback = jasmine.createSpy('onChangeCallback');

            wrapper.setProps({onChangeCallback}).update();
            wrapper.find('textarea').simulate('change');

            expect(onChangeCallback).toHaveBeenCalledTimes(1);
        });

        it('should contains validation message if debounced value is invalid', () => {
            jasmine.clock().install();
            const invalidValue = '';
            const validation = (value: string) => value !== invalidValue;
            const validationMessage = 'invalid value';

            wrapper.setProps({validate: validation, validationMessage: validationMessage, value: 'anyValue'});
            act(() => {
                wrapper.mount();
            });
            expect(wrapper.contains(validationMessage)).toBeFalsy(); // initial mount is not validated

            wrapper.setProps({value: invalidValue});
            act(() => {
                wrapper.update(); // set value to invalid value
            });
            jasmine.clock().tick(400);
            act(() => {
                wrapper.update(); // setTimeout call back set the debouncedValue
            });
            act(() => {
                wrapper.update(); // validation of the debouncedValue
            });

            expect(wrapper.contains(validationMessage)).toBeTruthy();
            jasmine.clock().uninstall();
        });

        it('should call prop validate on value change', () => {
            const validate = jasmine.createSpy('validate');
            hookWrapper = mount(<TextArea id="textarea-id" validate={validate} />);

            hookWrapper.find('textarea').simulate('change', {target: {value: 'new value'}});
            act(() => {
                hookWrapper.update();
            });

            expect(validate).toHaveBeenCalledTimes(1);
        });

        it('should call prop onMount on mount', () => {
            const onMount = jasmine.createSpy('onMount');

            hookWrapper = mount(<TextArea id="textarea-id" onMount={onMount} />);

            act(() => {
                hookWrapper.update();
            });

            expect(onMount).toHaveBeenCalledTimes(1);
        });

        it('should call prop onUnmount on Unmount', () => {
            const onUnmount = jasmine.createSpy('onUnmount');

            hookWrapper = mount(<TextArea id="textarea-id" onUnmount={onUnmount} />);

            act(() => {
                hookWrapper.unmount();
            });

            expect(onUnmount).toHaveBeenCalledTimes(1);

            wrapper.setProps({onUnmount}).unmount();

            expect(onUnmount).toHaveBeenCalledTimes(1);
        });

        describe('<TextAreaConnected />', () => {
            let store: ReactVaporMockStore;
            let textAreaProps: ITextAreaProps;

            const mountComponentWithProps = (props: ITextAreaProps) =>
                shallowWithStore(<TextAreaConnected {...props} />, store);

            beforeEach(() => {
                store = getStoreMock();
                textAreaProps = {id: 'textarea-id'};
            });

            afterEach(() => {
                store.clearActions();
                wrapper.detach();
            });

            describe('dispatch props', () => {
                it('should not throw when calling onMount with basic props', () => {
                    expect(() =>
                        mountComponentWithProps(textAreaProps)
                            .find(TextArea)
                            .prop('onMount')()
                    ).not.toThrow();
                });

                it('should not throw when calling onUnmount', () => {
                    expect(() =>
                        mountComponentWithProps(textAreaProps)
                            .find(TextArea)
                            .prop('onUnmount')()
                    ).not.toThrow();
                });

                it('should not throw when calling onChange', () => {
                    expect(() =>
                        mountComponentWithProps(textAreaProps)
                            .find(TextArea)
                            .prop('onChange')({target: {value: 'some value'}} as any)
                    ).not.toThrow();
                });
            });

            describe('onMount', () => {
                it('should add a textArea in the store with default values', () => {
                    const add = spyOn(TextAreaActions, 'add');
                    hookWrapper = mountWithStore(<TextAreaConnected id={'textarea-id'} onMount={add} />, store);
                    act(() => {
                        hookWrapper.update();
                    });

                    expect(add).toHaveBeenCalledTimes(1);
                });

                it('should add a textArea in the store with the valueOnMount if there is one in the props', () => {
                    const valueOnMount = 'non empty value';

                    hookWrapper = mountWithStore(
                        <TextAreaConnected {...textAreaProps} valueOnMount={valueOnMount} />,
                        store
                    );
                    act(() => {
                        hookWrapper.mount();
                    });
                    expect(store.getActions().find((action) => action.type === 'ADD_TEXTAREA')).toEqual(
                        jasmine.objectContaining({
                            payload: jasmine.objectContaining({id: textAreaProps.id, value: valueOnMount}),
                        })
                    );
                });

                it('should add a textArea in the store with the disabledOnMount value if there is one in the props', () => {
                    const disabledOnMount = true;

                    hookWrapper = mountWithStore(
                        <TextAreaConnected {...textAreaProps} disabledOnMount={disabledOnMount} />,
                        store
                    );
                    act(() => {
                        hookWrapper.mount();
                    });

                    expect(store.getActions().find((action) => action.type === 'ADD_TEXTAREA')).toEqual(
                        jasmine.objectContaining({
                            payload: jasmine.objectContaining({id: textAreaProps.id, disabled: disabledOnMount}),
                        })
                    );
                });
            });

            describe('onUnmount', () => {
                it('should remove the textArea from the store', () => {
                    store = getStoreMock();
                    const component = mountWithStore(<TextAreaConnected {...textAreaProps} />, store);
                    act(() => {
                        component.unmount();
                    });

                    expect(store.getActions().find((action) => action.type === 'REMOVE_TEXTAREA')).toEqual(
                        jasmine.objectContaining({payload: jasmine.objectContaining({id: textAreaProps.id})})
                    );
                });
            });

            describe('onChange', () => {
                it('should change the value in the store to the new value', () => {
                    store = getStoreMock();
                    const component = mountWithStore(<TextAreaConnected {...textAreaProps} />, store);

                    component.find('textarea').simulate('change', {target: {value: 'new value'}});
                    act(() => {
                        component.update();
                    });

                    expect(store.getActions().find((action) => action.type === 'CHANGE_VALUE_TEXTAREA')).toEqual(
                        jasmine.objectContaining({
                            payload: jasmine.objectContaining({id: textAreaProps.id, value: 'new value'}),
                        })
                    );
                });
            });
        });
    });
});
