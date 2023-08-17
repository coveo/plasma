import userEvent from '@testing-library/user-event';
import {render, screen} from '@test-utils';

import {SingleSelectConnected} from '../../SingleSelectConnected';
import {selectWithInfiniteScroll} from '../SelectWithInfiniteScroll';

describe('SelectWithInfiniteScroll', () => {
    const SingleSelectWithInfiniteScroll = selectWithInfiniteScroll(SingleSelectConnected);
    const id = 'to-infinity-and-beyond';

    it('contains the items', async () => {
        const user = userEvent.setup();
        const items = [{value: '🏹'}, {value: '💘'}, {value: '👼'}];

        render(<SingleSelectWithInfiniteScroll id={id} next={() => []} totalEntries={5000} items={items} />);

        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));

        const listitems = screen.getAllByRole('option');
        expect(listitems.length).toBe(3);
        expect(listitems[0]).toHaveTextContent('🏹');
        expect(listitems[1]).toHaveTextContent('💘');
        expect(listitems[2]).toHaveTextContent('👼');
    });

    it('calls the next prop when the user scrolls to the bottom of the list', async () => {
        const user = userEvent.setup();
        const nextSpy = jest.fn();
        const items = [{value: '1'}, {value: '2'}, {value: '3'}];

        render(<SingleSelectWithInfiniteScroll id={id} next={nextSpy} totalEntries={5000} items={items} />);

        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));

        const list = screen.getByRole('listbox');
        const scrollEvent = new Event('scroll');
        list.dispatchEvent(scrollEvent);

        expect(nextSpy).toHaveBeenCalledTimes(1);
    });

    it('does not call the next prop when there is no more items and the user scrolls to the bottom of the list', async () => {
        const user = userEvent.setup();
        const nextSpy = jest.fn();
        const items = [{value: '1'}, {value: '2'}, {value: '3'}];

        render(<SingleSelectWithInfiniteScroll id={id} next={nextSpy} totalEntries={3} items={items} />);

        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));

        const list = screen.getByRole('listbox');
        const scrollEvent = new Event('scroll');
        list.dispatchEvent(scrollEvent);

        expect(nextSpy).toHaveBeenCalledTimes(0);
    });

    it('does not displays a loading when the user scrolls to the bottom of the list and there is no more items to display', async () => {
        const user = userEvent.setup();
        const items = [{value: '1'}, {value: '2'}, {value: '3'}];

        render(<SingleSelectWithInfiniteScroll id={id} next={() => []} totalEntries={3} items={items} />);

        // open the dropdown
        await user.click(screen.getByRole('button', {name: /select an option/i}));

        const list = screen.getByRole('listbox');
        const scrollEvent = new Event('scroll');
        list.dispatchEvent(scrollEvent);

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});
