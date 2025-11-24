import {render, screen, userEvent} from '@test-utils';
import {Search} from '../Search.js';

describe('Search', () => {
    describe('handleSearch', () => {
        it('should call handleSearch when the search button is clicked', async () => {
            const handleSearchSpy = vi.fn();
            const user = userEvent.setup();
            render(<Search handleSearch={handleSearchSpy} />);

            await user.click(screen.getByRole('button', {name: /search/i}));

            expect(handleSearchSpy).toHaveBeenCalled();
        });
    });
});
