import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import * as _ from 'underscore';
import {IJSONEditorProps, JSONEditor} from '../JSONEditor';

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
        let jsonEditor: ReactWrapper<IJSONEditorProps, any>;
        let jsonEditorInstance: JSONEditor;

        const mountWithProps = (props: Partial<IJSONEditorProps> = {}) => {
            jsonEditor = mount(
                <JSONEditor {..._.defaults(props, basicProps)} />,
                {attachTo: document.getElementById('App')},
            );
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
            let onChangeProp: (json: string) => void = jsonEditor.props().onChange;

            expect(onChangeProp).toBeUndefined();

            mountWithProps({onChange: jasmine.createSpy('onChange')});

            onChangeProp = jsonEditor.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should display a <CodeMirror /> component', () => {
            expect(jsonEditor.find(CodeMirror).length).toBe(1);
        });

        it('should call handleChange when the CodeMirror onChange prop is called', () => {
            const handleChangeSpy: jasmine.Spy = spyOn<any>(JSONEditor.prototype, 'handleChange');
            const expectedValue: string = 'anything at all really';

            jsonEditor.find(CodeMirror).props().onChange(expectedValue, ({} as any));

            expect(handleChangeSpy).toHaveBeenCalledTimes(1);
            expect(handleChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it('should call the onChange prop if set when calling handlChange', () => {
            const onChangeSpy: jasmine.Spy = jasmine.createSpy('onChange');
            const expectedValue: string = 'the expected value';

            mountWithProps({onChange: onChangeSpy});

            (jsonEditorInstance as any).handleChange(expectedValue);

            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it('should not throw on change if the onChange prop is undefined', () => {
            expect(() => (jsonEditorInstance as any).handleChange('expectedValue')).not.toThrow();
        });
    });
});
