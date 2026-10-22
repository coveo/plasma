import {render, screen, userEvent} from '@test-utils';

import {BadgeList} from '../BadgeList.js';

describe('BadgeList', () => {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    it('renders every item when maxDisplayed is not set', () => {
        render(<BadgeList data={data} />);

        data.forEach((item) => expect(screen.getByText(item)).toBeVisible());
        expect(screen.queryByText(/more/)).not.toBeInTheDocument();
    });

    it('renders the first maxDisplayed items and a default "more" label', () => {
        render(<BadgeList data={data} maxDisplayed={3} />);

        expect(screen.getByText('Item 3')).toBeVisible();
        expect(screen.queryByText('Item 4')).not.toBeInTheDocument();
        expect(screen.getByText('and 2 more')).toBeVisible();
    });

    it('lists the hidden items in the tooltip by default', async () => {
        const user = userEvent.setup();
        render(<BadgeList data={data} maxDisplayed={3} />);

        await user.hover(screen.getByText('and 2 more'));

        expect(await screen.findByText('Item 4')).toBeVisible();
        expect(screen.getByText('Item 5')).toBeVisible();
    });

    it('uses the custom more label, hidden count and tooltip', async () => {
        const user = userEvent.setup();
        render(
            <BadgeList
                data={data}
                maxDisplayed={3}
                hiddenCount={4}
                moreLabel={(count) => `+${count}`}
                moreTooltip="2 values and 2 relevance facets"
            />,
        );

        await user.hover(screen.getByText('+4'));

        expect(await screen.findByText('2 values and 2 relevance facets')).toBeVisible();
    });

    it('renders the empty label when there is no item', () => {
        render(<BadgeList data={[]} emptyLabel="No placement" />);

        expect(screen.getByText('No placement')).toBeVisible();
    });
});
