import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror';
import * as _ from 'underscore';

import {CodeEditor, ICodeEditorProps} from '../CodeEditor';

describe('CodeEditor', () => {
    const basicProps: ICodeEditorProps = {
        value: 'any string',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<CodeEditor {...basicProps} />);
        }).not.toThrow();
    });

    describe('<CodeEditor />', () => {
        let codeEditor: ReactWrapper<ICodeEditorProps>;
        let codeEditorInstance: CodeEditor;

        const mountWithProps = (props: Partial<ICodeEditorProps> = {}) => {
            codeEditor = mount(
                <CodeEditor {..._.defaults(props, basicProps)} />,
                {attachTo: document.getElementById('App')},
            );
            codeEditorInstance = codeEditor.instance() as any;
        };

        beforeEach(() => {
            mountWithProps();
        });

        it('should get the value as a prop', () => {
            const valueProp: string = codeEditor.props().value;

            expect(valueProp).toBe(basicProps.value);
        });

        it('should get the readonly state as a prop', () => {
            let readOnlyProp: boolean = codeEditor.props().readOnly;

            expect(readOnlyProp).toBeUndefined();

            mountWithProps({readOnly: true});

            readOnlyProp = codeEditor.props().readOnly;

            expect(readOnlyProp).toBe(true);
        });

        it('should get what to do on change state as a prop if set', () => {
            let onChangeProp: (json: string) => void = codeEditor.props().onChange;

            expect(onChangeProp).toBeUndefined();

            mountWithProps({onChange: jasmine.createSpy('onChange')});

            onChangeProp = codeEditor.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should display a <CodeMirror /> component', () => {
            expect(codeEditor.find(ReactCodeMirror).length).toBe(1);
        });

        it('should call handleChange when the CodeMirror onChange prop is called', () => {
            const handleChangeSpy: jasmine.Spy = spyOn<any>(CodeEditor.prototype, 'handleChange');
            const expectedValue: string = 'anything at all really';

            codeEditor.find(ReactCodeMirror).props().onChange(expectedValue, ({} as any));

            expect(handleChangeSpy).toHaveBeenCalledTimes(1);
            expect(handleChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it('should call the onChange prop if set when calling handleChange', () => {
            const onChangeSpy: jasmine.Spy = jasmine.createSpy('onChange');
            const expectedValue: string = 'the expected value';

            mountWithProps({onChange: onChangeSpy});

            (codeEditorInstance as any).handleChange(expectedValue);

            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it('should not throw on change if the onChange prop is undefined', () => {
            expect(() => (codeEditorInstance as any).handleChange('expectedValue')).not.toThrow();
        });

        it(`should clear codemirror's history if we set a new value`, () => {
            const clearHistorySpy: jasmine.Spy = spyOn((codeEditorInstance as any).codemirror.getCodeMirror().getDoc(), 'clearHistory');

            codeEditor.setProps({value: 'a new value'});

            expect(clearHistorySpy).toHaveBeenCalledTimes(1);
        });

        it('should reset the value if we the value prop changes', () => {
            const setValueSpy: jasmine.Spy = spyOn((codeEditorInstance as any).codemirror.getCodeMirror(), 'setValue');

            codeEditor.setProps({value: 'a new value'});

            expect(setValueSpy).toHaveBeenCalledTimes(1);
        });
    });
});
