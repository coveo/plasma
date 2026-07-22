import {render, screen, within} from '@test-utils';

import {PrerequisitesList} from '../PrerequisitesList.js';

describe('PrerequisitesList', () => {
    it('renders each item with its label and status icon', () => {
        render(
            <PrerequisitesList>
                <PrerequisitesList.Item label="Done" status="complete" />
                <PrerequisitesList.Item label="In progress" status="incomplete" />
            </PrerequisitesList>,
        );

        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(2);

        const [completed, current] = items;
        expect(within(completed).getByText('Done')).toBeInTheDocument();
        expect(within(completed).getByRole('img', {name: 'complete'})).toBeInTheDocument();

        expect(within(current).getByText('In progress')).toBeInTheDocument();
        expect(within(current).getByRole('img', {name: 'incomplete'})).toBeInTheDocument();
    });
});
