import {render, screen, within, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {JSONEditorConnected} from '../JSONEditorConnected';

describe('<JSONEditorConnected />', () => {
    it('should mount and unmount without errors', () => {
        expect(() => {
            const {unmount} = render(<JSONEditorConnected id="💙" defaultValue={'{}'} />);
            unmount();
        }).not.toThrow();
    });

    it('will display brackets if no value/defaultValue is provided as it is a JSON editor', async () => {
        const {container} = render(<JSONEditorConnected id="💙" />);

        await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

        // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
        const line = container.querySelector('.CodeMirror-line [role="presentation"]') as HTMLElement;

        // the codemirror divide the text in multiple elements, by using textContent we "strip" the html
        const matcher = (_: string, element: HTMLElement) => element?.textContent === '{}';

        expect(within(line).getByText(matcher)).toBeVisible();
    });

    it('will not display error when rendering with (deprecated) value prop', async() => {
        render(<JSONEditorConnected id="💙" value={'{}'} />);

        await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

        expect(screen.queryByText(/JSON configuration is syntactically invalid/i)).not.toBeInTheDocument();
    });

    it('should not throw when content changes', async () => {
        render(<JSONEditorConnected id="💙" defaultValue={'{}'} />);

        await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

        expect(() => {
            userEvent.type(screen.getByRole('textbox'), 'hello');
        }).not.toThrow();
    });

    it('should render value from store', async () => {
        const expectedValue = '{"test": "asdf"}';
        const {container} = render(<JSONEditorConnected id="💙" defaultValue={'{}'} />, {
            initialState: {jsonEditors: [{id: '💙', value: expectedValue, valid: true}]},
        });

        await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

        // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
        const line = container.querySelector('.CodeMirror-line [role="presentation"]') as HTMLElement;

        // the codemirror divide the text in multiple elements, by using textContent we "strip" the html
        const matcher = (_: string, element: HTMLElement) => element?.textContent === '{"test": "asdf"}';

        expect(within(line).getByText(matcher)).toBeVisible();
    });

    it('should call the onChange function from props if it is provided', async () => {
        const expectedValue = 'hello';
        const onChangeSpy = jest.fn();

        render(<JSONEditorConnected id="💙" defaultValue={''} onChange={onChangeSpy} />);

        await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

        userEvent.type(screen.getByRole('textbox'), expectedValue);

        expect(onChangeSpy).toHaveBeenCalledTimes(5);
        expect(onChangeSpy).toHaveBeenCalledWith('{}h', true);
        expect(onChangeSpy).toHaveBeenCalledWith('{}he', true);
        expect(onChangeSpy).toHaveBeenCalledWith('{}hel', true);
        expect(onChangeSpy).toHaveBeenCalledWith('{}hell', true);
        expect(onChangeSpy).toHaveBeenCalledWith('{}hello', true);
    });
});
