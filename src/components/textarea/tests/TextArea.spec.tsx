import {HTMLAttributes, mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {findWhere} from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITextAreaProps, TextArea, TextAreaConnected} from '../TextArea';
import {ITextAreaState} from '../TextAreaReducers';

describe('TextArea', () => {
    describe('<TextArea />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <TextArea id='textarea-id' />,
                );
            }).not.toThrow();
        });
    });

    describe('<TextArea />', () => {
        let wrapper: ReactWrapper<ITextAreaProps, any>;
        let textArea: ReactWrapper<HTMLAttributes, any>;

        beforeEach(() => {
            wrapper = mount(
                <TextArea id='textarea-id' />,
                {attachTo: document.getElementById('App')},
            );

            textArea = wrapper.find('textarea').first();
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should set textarea id when specified', () => {
            expect(textArea.prop('id')).toBe('textarea-id');
        });

        it('should set className when specified', () => {
            const className = 'a-class';
            expect(textArea.hasClass(className)).toBe(false);

            wrapper.setProps({className}).update();
            expect(wrapper.find('textarea').hasClass(className)).toBe(true);
        });

        it('should set additionalAttributes when specified', () => {
            expect(textArea.prop('placeholder')).toBeUndefined();
            wrapper.setProps({additionalAttributes: {placeholder: 'not null'}}).update();
            expect(wrapper.find('textarea').prop('placeholder')).toBe('not null');
        });

        it('should set disabled prop when specified', () => {
            expect(textArea.prop('disabled')).toBeUndefined();
            wrapper.setProps({disabled: true}).update();
            expect(wrapper.find('textarea').prop('disabled')).toBe(true);
        });

        it('should set value prop when specified', () => {
            expect(textArea.prop('value')).toBeUndefined();
            wrapper.setProps({value: 'non empty'}).update();
            expect(wrapper.find('textarea').prop('value')).toBe('non empty');
        });

        it('should not throw if the onChange prop is not defined onChange', () => {
            wrapper.setProps({onChange: undefined}).update();

            expect(() => (wrapper.instance() as any).handleOnChange()).not.toThrow();
        });

        it('should not throw if the onChangeCallback prop is not defined onChange', () => {
            wrapper.setProps({onChangeCallback: undefined});

            expect(() => (wrapper.instance() as any).handleOnChange()).not.toThrow();
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

        it('should call prop onMount on mount', () => {
            const onMount = jasmine.createSpy('onMount');

            wrapper.setProps({onMount}).unmount().mount();

            expect(onMount).toHaveBeenCalledTimes(1);
        });

        it('should call prop onUnmount on Unmount', () => {
            const onUnmount = jasmine.createSpy('onUnmount');

            wrapper.setProps({onUnmount}).unmount();

            expect(onUnmount).toHaveBeenCalledTimes(1);
        });

        describe('<TextAreaConnected />', () => {
            let store: Store<IReactVaporState>;
            let textAreaProps: ITextAreaProps;

            const getTextAreaStateFromId = (id: string): ITextAreaState => findWhere(store.getState().textAreas, {id});

            const mountComponentWithProps = (props: ITextAreaProps) => mount(
                <Provider store={store}>
                    <TextAreaConnected {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );

            beforeEach(() => {
                store = TestUtils.buildStore();
                textAreaProps = {id: 'textarea-id'};
            });

            afterEach(() => {
                store.dispatch(clearState());
                wrapper.detach();
            });

            describe('dispatch props', () => {
                it('should not throw when calling onMount with basic props', () => {
                    expect(() => mountComponentWithProps(textAreaProps).find(TextArea).prop('onMount')()).not.toThrow();
                });

                it('should not throw when calling onUnmount', () => {
                    expect(() => mountComponentWithProps(textAreaProps).find(TextArea).prop('onUnmount')()).not.toThrow();
                });

                it('should not throw when calling onChange', () => {
                    expect(() => mountComponentWithProps(textAreaProps).find(TextArea).prop('onChange')({target: {value: 'some value'}} as any)).not.toThrow();
                });
            });

            describe('onMount', () => {
                it('should add a textArea in the store with default values', () => {
                    mountComponentWithProps(textAreaProps);

                    const connectedTextArea: ITextAreaState = getTextAreaStateFromId(textAreaProps.id);
                    expect(connectedTextArea.value).toBe('');
                    expect(connectedTextArea.disabled).toBe(false);
                });

                it('should add a textArea in the store with the valueOnMount if there is one in the props', () => {
                    const valueOnMount = 'non empty value';
                    mountComponentWithProps({...textAreaProps, valueOnMount});

                    const connectedTextArea: ITextAreaState = getTextAreaStateFromId(textAreaProps.id);
                    expect(connectedTextArea.value).toBe(valueOnMount);
                    expect(connectedTextArea.disabled).toBe(false);
                });

                it('should add a textArea in the store with the disabledOnMount value if there is one in the props', () => {
                    const disabledOnMount = true;
                    mountComponentWithProps({...textAreaProps, disabledOnMount});

                    const connectedTextArea: ITextAreaState = getTextAreaStateFromId(textAreaProps.id);
                    expect(connectedTextArea.value).toBe('');
                    expect(connectedTextArea.disabled).toBe(disabledOnMount);
                });
            });

            describe('onUnmount', () => {
                it('should remove the textArea from the store', () => {
                    const connectedTextArea = mountComponentWithProps(textAreaProps);

                    expect(getTextAreaStateFromId(textAreaProps.id)).toBeDefined();

                    connectedTextArea.unmount();

                    expect(getTextAreaStateFromId(textAreaProps.id)).toBeUndefined();
                });
            });

            describe('onChange', () => {
                it('should change the value in the store to the new value', () => {
                    const connectedTextArea = mountComponentWithProps(textAreaProps);
                    const oldTextAreaState: ITextAreaState = getTextAreaStateFromId(textAreaProps.id);
                    expect(oldTextAreaState.value).toBe('');

                    (document.querySelector(`#${textAreaProps.id}`) as HTMLTextAreaElement).value = 'new value';
                    connectedTextArea.find('textarea').simulate('change', {target: {value: 'new value'}});

                    const newTextAreaState: ITextAreaState = getTextAreaStateFromId(textAreaProps.id);
                    expect(newTextAreaState.value).toBe('new value');
                });
            });
        });
    });
});
