import * as CodeMirror from 'codemirror';
import {ShallowWrapper} from 'enzyme';
import {mountWithState, shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror2';
import * as _ from 'underscore';
import {CollapsibleSelectors} from '../../collapsible/CollapsibleSelectors';

import {CodeEditor, CodeEditorState, ICodeEditorProps} from '../CodeEditor';
import {CodeMirrorModes} from '../EditorConstants';

describe('CodeEditor', () => {
    const basicProps: ICodeEditorProps = {
        value: 'any string',
        mode: CodeMirrorModes.Python,
    };
    let codeEditorInstance: typeof CodeEditor;

    it('should render without errors', () => {
        expect(() => {
            shallowWithState(<CodeEditor {...basicProps} />, {});
        }).not.toThrow();
    });

    describe('<CodeEditor />', () => {
        let wrapper: ShallowWrapper<any, any>;
        let codeEditor: ShallowWrapper<ICodeEditorProps, CodeEditorState>;

        const mountWithProps = (props: Partial<ICodeEditorProps> = {}) => {
            wrapper = shallowWithState(<CodeEditor {..._.defaults(props, basicProps)} />, {});
            codeEditor = wrapper.dive();
        };

        beforeEach(() => {
            jest.spyOn(CollapsibleSelectors, 'isExpanded').mockReturnValue(false);
            mountWithProps();
        });

        it('should get the value as a prop', () => {
            const valueProp: string = codeEditor.props().value;

            expect(valueProp).toBe(basicProps.value);
        });

        it('should get the readonly state as a prop', () => {
            let readOnlyProp: boolean = wrapper.props().readOnly;

            expect(readOnlyProp).toBeUndefined();

            mountWithProps({readOnly: true});

            readOnlyProp = wrapper.props().readOnly;

            expect(readOnlyProp).toBe(true);
        });

        it('should set the code-editor-no-cursor className when in readOnly to hide the cursor', () => {
            mountWithProps({readOnly: true});

            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).toContain('code-editor-no-cursor');

            mountWithProps();

            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).not.toContain(
                'code-editor-no-cursor'
            );
        });

        it('should get what to do on change state as a prop if set', () => {
            let onChangeProp: (json: string) => void = wrapper.props().onChange;

            expect(onChangeProp).toBeUndefined();

            mountWithProps({onChange: jest.fn()});

            onChangeProp = wrapper.props().onChange;

            expect(onChangeProp).toBeDefined();
        });

        it('should display a <CodeMirror /> component', () => {
            expect(codeEditor.find(ReactCodeMirror.Controlled).length).toBe(1);
        });

        it('should call onChange prop when its value prop changes', () => {
            const onChangeSpy: jest.Mock<any, any> = jest.fn();
            const expectedValue: string = 'the expected value';

            mountWithProps({onChange: onChangeSpy});

            codeEditor
                .find(ReactCodeMirror.Controlled)
                .first()
                .props()
                .onChange({} as CodeMirror.Editor, undefined, expectedValue);

            expect(onChangeSpy).toHaveBeenCalledTimes(1);
            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it(`should clear codemirror's history if we set a new value`, () => {
            const clearHistorySpy: jest.SpyInstance = jest.spyOn(
                (codeEditorInstance as any).editor.getDoc(),
                'clearHistory'
            );

            codeEditor.setProps({value: 'a new value'});

            expect(clearHistorySpy).toHaveBeenCalledTimes(1);
        });

        it('should add any extra keywords for the autocompletion if there are some in the props', () => {
            const currentKeywords: string[] = [...(CodeMirror as any).helpers.hintWords[basicProps.mode]];
            const expectedNewKeywords = ['one', 'two'];

            const codeEditorMounted = mountWithState(
                <CodeEditor {..._.extend({}, basicProps, {extraKeywords: expectedNewKeywords})} />,
                {
                    attachTo: document.getElementById('App'),
                }
            );

            mountWithProps(_.extend({}, basicProps, {extraKeywords: expectedNewKeywords}));
            codeEditorMounted.find(ReactCodeMirror.Controlled).first().props().editorDidMount;

            const newList: string[] = (CodeMirror as any).helpers.hintWords[basicProps.mode];

            expect(newList).not.toEqual(currentKeywords);
            expect(newList).toEqual(currentKeywords.concat(expectedNewKeywords));
        });

        it('should have a border by default', () => {
            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).toContain('mod-border');
        });
    });
});
