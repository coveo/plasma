import * as CodeMirror from 'codemirror';
import {ShallowWrapper} from 'enzyme';
import {mountWithState, mountWithStore, shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror2';
import * as _ from 'underscore';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {CollapsibleSelectors} from '../../collapsible/CollapsibleSelectors';
import {CodeEditor, CodeEditorState, ICodeEditorProps} from '../CodeEditor';
import {CodeEditorActionTypes} from '../CodeEditorActions';
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

        it('should set the code-editor-no-cursor className when in readOnly to hide the cursor', () => {
            mountWithProps({readOnly: true});

            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).toContain('code-editor-no-cursor');

            mountWithProps();

            expect(codeEditor.find(ReactCodeMirror.Controlled).props().className).not.toContain(
                'code-editor-no-cursor'
            );
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
            codeEditorInstance = codeEditor.dive().instance() as any;
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

        it('should modify the store on mount with a value, on change if mounted with an Id and on unmount with a clear', () => {
            jest.useFakeTimers();
            const store = getStoreMock();

            const component = mountWithStore(<CodeEditor id="anId" value="a value" />, store);

            jest.advanceTimersByTime(500);
            jest.useFakeTimers();
            expect(store.getActions().length).toBe(1);
            expect(store.getActions()[0].type).toBe(CodeEditorActionTypes.update);

            component
                .find('Controlled')
                .props()
                .onChange('' as any);

            jest.advanceTimersByTime(500);

            expect(store.getActions().length).toBe(2);
            expect(store.getActions()[1].type).toBe(CodeEditorActionTypes.update);

            component.unmount();

            expect(store.getActions().length).toBe(3);
            expect(store.getActions()[2].type).toBe(CodeEditorActionTypes.remove);
        });
    });
});
