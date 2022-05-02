import {render, screen} from '@test-utils';

import {fakeJSON, fakeJSON1, JSONToString} from '../../../utils/JSONUtils';
import {DiffViewer} from '../DiffViewer';

describe('DiffViewer', () => {
    it('should render the diffViewer table', () => {
        const {container} = render(<DiffViewer oldValue={JSONToString(fakeJSON)} newValue={JSONToString(fakeJSON1)} />);
        const firstChild = container.firstChild as HTMLElement;

        expect(firstChild.className).toContain('diff-container');
    });

    it('should render the blankSlate and not the diffViewer table if the two values are the same', () => {
        const {container} = render(
            <DiffViewer
                oldValue={JSONToString(fakeJSON)}
                newValue={JSONToString(fakeJSON)}
                noChangesLabel={'no changes'}
            />
        );
        const firstChild = container.firstChild as HTMLElement;
        expect(firstChild.className).not.toContain('diff-container');
        expect(screen.getByText(/no changes/)).toBeVisible();
    });
});
