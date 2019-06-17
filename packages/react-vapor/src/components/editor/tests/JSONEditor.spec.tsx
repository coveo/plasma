import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {CodeEditor} from '../CodeEditor';
import {IJSONEditorProps, IJSONEditorState, JSONEditor} from '../JSONEditor';

describe('JSONEditor', () => {
    const basicProps: IJSONEditorProps = {
        value: 'any string',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<JSONEditor {...basicProps} />);
        }).not.toThrow();
    });

    describe('<JSONEditor />', () => {
        let jsonEditor: ReactWrapper<IJSONEditorProps, IJSONEditorState>;
        let jsonEditorInstance: JSONEditor;

        const mountWithProps = (props: Partial<IJSONEditorProps> = {}) => {
            jsonEditor = mount(<JSONEditor {..._.defaults(props, basicProps)} />, {
                attachTo: document.getElementById('App'),
            });
            jsonEditorInstance = jsonEditor.instance() as any;
        };

        beforeEach(() => {
            mountWithProps();
        });

        it('should get the value as a prop', () => {
            const valueProp: string = jsonEditor.props().value;

            expect(valueProp).toBe(basicProps.value);
        });

        it('should get the readonly state as a prop', () => {
            let readOnlyProp: boolean = jsonEditor.props().readOnly;

            expect(readOnlyProp).toBeUndefined();

            mountWithProps({readOnly: true});

            readOnlyProp = jsonEditor.props().readOnly;

            expect(readOnlyProp).toBe(true);
        });

        it('should get what to do on change state as a prop if set', () => {
            let onChangeProp: (json: string, inError: boolean) => void = jsonEditor.props().onChange;

            expect(onChangeProp).toBeUndefined();

            mountWithProps({onChange: jasmine.createSpy('onChange')});

            onChangeProp = jsonEditor.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should display a <CodeEditor /> component', () => {
            expect(jsonEditor.find(CodeEditor).length).toBe(1);
        });

        it('should call handleChange when the CodeMirror onChange prop is called', () => {
            const handleChangeSpy: jasmine.Spy = spyOn<any>(JSONEditor.prototype, 'handleChange');
            const expectedValue: string = 'anything at all really';

            jsonEditor
                .find(CodeEditor)
                .props()
                .onChange(expectedValue);

            expect(handleChangeSpy).toHaveBeenCalledTimes(1);
            expect(handleChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it('should call the onChange prop if set when calling handleChange', () => {
            const onChangeSpy: jasmine.Spy = jasmine.createSpy('onChange');
            const expectedValue: string = 'the expected value';

            mountWithProps({onChange: onChangeSpy});

            (jsonEditorInstance as any).handleChange(expectedValue);

            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue, true);
        });

        it('should call onChange prop when the value prop changes', () => {
            const onChangeSpy: jasmine.Spy = jasmine.createSpy('onChange');
            const expectedValue: string = 'the expected value';

            mountWithProps({onChange: onChangeSpy});
            jsonEditor.setProps({value: expectedValue});

            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue, true);
        });

        it('should set the isInError to true when calling handleChange if the JSON cannot be parsed', () => {
            (jsonEditorInstance as any).handleChange('this is not a JSON');

            expect(jsonEditor.state().isInError).toBe(true);
        });

        it('should set the isInError to false when calling handleChange if the JSON can be parsed', () => {
            (jsonEditorInstance as any).handleChange('{ "JSON": true }');

            expect(jsonEditor.state().isInError).toBe(false);
        });

        it('should not throw on change if the onChange prop is undefined', () => {
            expect(() => (jsonEditorInstance as any).handleChange('expectedValue')).not.toThrow();
        });
    });
});
