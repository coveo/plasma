import {render, screen, within} from '@test-utils';

import {PrerequisitesList} from '../PrerequisitesList.js';

describe('PrerequisitesList', () => {
    it('renders each item with its label and status icon', () => {
        render(
            <PrerequisitesList>
                <PrerequisitesList.Item label="Done" status="completed" />
                <PrerequisitesList.Item label="In progress" status="current" />
                <PrerequisitesList.Item label="Upcoming" status="next" />
            </PrerequisitesList>,
        );

        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(3);

        const [completed, current, next] = items;
        expect(within(completed).getByText('Done')).toBeInTheDocument();
        expect(within(completed).getByRole('img', {name: 'completed'})).toBeInTheDocument();

        expect(within(current).getByText('In progress')).toBeInTheDocument();
        expect(within(current).getByRole('img', {name: 'current'})).toBeInTheDocument();

        expect(within(next).getByText('Upcoming')).toBeInTheDocument();
        expect(within(next).getByRole('img', {name: 'next'})).toBeInTheDocument();
    });
});
