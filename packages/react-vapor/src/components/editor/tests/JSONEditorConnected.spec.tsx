import * as React from 'react';
import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {within} from '@testing-library/react';

import {JSONEditorProps} from '../JSONEditor';
import {JSONEditorConnected} from '../JSONEditorConnected';

describe('<JSONEditorConnected />', () => {
    const basicProps: JSONEditorProps = {
        id: '💙',
        value: '{}',
    };

    it('should mount and unmount without errors', () => {
        expect(() => {
            const {unmount} = render(<JSONEditorConnected id="💙" value={'{}'} />);
            unmount();
        }).not.toThrow();
    });

    it('should not throw when content changes', () => {
        render(<JSONEditorConnected id="💙" value={'{}'} />);

        expect(() => {
            userEvent.type(screen.getByRole('textbox'), 'hello');
        }).not.toThrow();
    });

    it('should render value from store', () => {
        const expectedValue = '{"test": "asdf"}';
        render(<JSONEditorConnected id="💙" value={'{}'} />, {
            initialState: {jsonEditors: [{id: basicProps.id, value: expectedValue, valid: true}]},
        });

        const container = document.querySelector('.CodeMirror-line [role="presentation"]') as HTMLElement;

        // the codemirror divide the text in multiple elements, by using textContent we "strip" the html
        const matcher = (_: string, element: HTMLElement) => element?.textContent === '{"test": "asdf"}';

        expect(within(container).getByText(matcher)).toBeVisible();
    });

    it('should call the onChange function from props if it is provided', () => {
        const expectedValue = '{}';
        const onChangeSpy = jest.fn();

        render(<JSONEditorConnected id="💙" value={''} onChange={onChangeSpy} />);

        userEvent.type(screen.getByRole('textbox'), expectedValue);

        expect(onChangeSpy).toHaveBeenCalledTimes(2);
        expect(onChangeSpy).toHaveBeenCalledWith('{', true);
        expect(onChangeSpy).toHaveBeenCalledWith('{}', false);
    });
});
