import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {CodeEditor} from '../CodeEditor';
import {CodeMirrorModes} from '../EditorConstants';
import {JSONEditor, JSONEditorProps} from '../JSONEditor';
import {JSONEditorUtils} from '../JSONEditorUtils';

describe('<JSONEditor />', () => {
    let component: ShallowWrapper;
    const basicProps: JSONEditorProps = {
        id: '💝',
        value: '{"value": "heart with ribbon"}',
    };

    const shallowComponent = (options?: Partial<JSONEditorProps>) =>
        (component = shallow(<JSONEditor {...basicProps} {...options} />));

    it('should mount and unmount without errors', () => {
        expect(() => {
            shallowComponent();
            component.unmount();
        }).not.toThrow();
    });

    it('should render a <CodeEditor /> component with CodeMirrorModes JSON', () => {
        shallowComponent();

        expect(component.find(CodeEditor).length).toBe(1);
        expect(component.find(CodeEditor).prop('mode')).toEqual(CodeMirrorModes.JSON);
    });

    it('should display the value prop', () => {
        shallowComponent();

        expect(component.find(CodeEditor).prop('value')).toBe(basicProps.value);
    });

    it('should pass the readOnly prop', () => {
        shallowComponent({readOnly: true});

        expect(component.find(CodeEditor).prop('readOnly')).toBe(true);
    });

    it('should validate value when editing json', () => {
        const expectedValue = '{}';
        const validateSpy = jest.spyOn(JSONEditorUtils, 'validateValue');

        shallowComponent();
        component.find(CodeEditor).prop('onChange')(expectedValue);

        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange prop if set when editing json', () => {
        const expectedValue = '';
        const onChangeSpy = jest.fn();

        shallowComponent({onChange: onChangeSpy});
        component.find(CodeEditor).prop('onChange')(expectedValue);

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy).toHaveBeenCalledWith(expectedValue, true);
    });

    it('should not throw on change if the onChange prop is undefined', () => {
        expect(() => shallowComponent({onChange: undefined})).not.toThrow();
    });

    it('should set the lint option to false by default', () => {
        shallowComponent();

        expect(component.find(CodeEditor).props().options.lint).toBe(false);
    });
});
