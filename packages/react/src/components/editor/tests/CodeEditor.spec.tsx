import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {render, waitFor, screen} from '@test-utils';

import {CollapsibleSelectors} from '../../collapsible/CollapsibleSelectors';
import {CodeEditor} from '../CodeEditor';
import {CodeEditorActions} from '../CodeEditorActions';
import {CodeMirrorModes} from '../EditorConstants';

describe('CodeEditor', () => {
    describe('<CodeEditor />', () => {
        beforeEach(() => {
            jest.spyOn(CollapsibleSelectors, 'isExpanded').mockReturnValue(false);
        });

        it('should get the value as a prop', async () => {
            render(<CodeEditor id="anId" value="aValue" mode={CodeMirrorModes.Python} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            expect(screen.getByText('aValue')).toBeVisible();
        });

        it('does not set the code-editor-no-cursor class when readOnly is false', async () => {
            const {container} = render(
                <CodeEditor id="anId" value="a value" mode={CodeMirrorModes.Python} readOnly={false} />
            );

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            // eslint-disable-next-line testing-library/no-container
            expect(container.querySelector('.code-editor-no-cursor')).not.toBeInTheDocument();
        });

        it('should set the code-editor-no-cursor className when in readOnly to hide the cursor', async () => {
            const {container} = render(<CodeEditor id="anId" value="a value" mode={CodeMirrorModes.Python} readOnly />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            // eslint-disable-next-line testing-library/no-container
            expect(container.querySelector('.code-editor-no-cursor')).toBeVisible();
        });

        it('should call onChange prop when its value prop changes', async () => {
            const onChangeSpy = jest.fn();
            const expectedValue: string = 'the expected value';

            render(<CodeEditor id="anId" value="" mode={CodeMirrorModes.Python} onChange={onChangeSpy} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            userEvent.type(screen.getByRole('textbox'), expectedValue);

            expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);
        });

        it(`should clear codemirror's history if we set a new value`, async () => {
            const {rerender} = render(<CodeEditor id="anId" value="firstValue" mode={CodeMirrorModes.Python} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            rerender(<CodeEditor id="anId" value="newValue" mode={CodeMirrorModes.Python} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            userEvent.type(screen.getByRole('textbox'), '{ctrl}z');

            expect(screen.queryByText('newValue')).toBeVisible();
            expect(screen.queryByText('firstValue')).not.toBeInTheDocument();
        });

        it('should add any extra keywords for the autocompletion if there are some in the props', async () => {
            const expectedNewKeywords = ['📈', '📉'];

            render(<CodeEditor id="anId" value="" mode={CodeMirrorModes.Python} extraKeywords={expectedNewKeywords} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            userEvent.type(screen.getByRole('textbox'), '{ctrl}{space}');

            expect(screen.getByText('📈')).toBeVisible();
            expect(screen.getByText('📉')).toBeVisible();
        });

        it('should have a border by default', async () => {
            const {container} = render(<CodeEditor id="anId" value="a value" mode={CodeMirrorModes.Python} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            // eslint-disable-next-line testing-library/no-container
            expect(container.querySelector('.mod-border')).toBeVisible();
        });

        it('updates the value in the store on mount and on change if mounted with an id', async () => {
            const updateSpy = jest.spyOn(CodeEditorActions, 'updateValue');
            render(<CodeEditor id="anId" value="a value" mode={CodeMirrorModes.Python} />);

            await waitFor(() => expect(screen.getByRole('textbox')).toBeVisible());

            expect(updateSpy).toHaveBeenCalledTimes(1);

            userEvent.type(screen.getByRole('textbox'), 'new value');
            screen.getByRole('textbox').blur();

            await waitFor(() => expect(updateSpy).toHaveBeenCalledTimes(2), {timeout: 2000});
        });

        it('removes the code editor from the store on unmount if mounted with an id', () => {
            const removeSpy = jest.spyOn(CodeEditorActions, 'remove');
            const {unmount} = render(<CodeEditor id="anId" value="a value" mode={CodeMirrorModes.Python} />);

            unmount();

            expect(removeSpy).toHaveBeenCalledTimes(1);
        });
    });
});
