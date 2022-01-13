import {render, screen} from '@test-utils';
import * as React from 'react';
import {Tile} from '../Tile';

describe('Tile', () => {
    it('renders a tile with a title, a description and an icon', () => {
        render(
            <Tile
                title="My component"
                description="Look at my tile!! It's so pretty!!"
                href=""
                svgName="plasmaComponentBox"
            />
        );

        expect(screen.getByRole('img', {name: /plasmacomponentbox icon/i})).toBeInTheDocument();
        expect(screen.getByText(/my component/i)).toBeInTheDocument();
        expect(screen.getByText(/look at my tile!! it's so pretty!!/i)).toBeInTheDocument();
    });

    it('renders a tile with a link to the specified href', () => {
        render(
            <Tile
                title="My component"
                description="Look at my tile!! It's so pretty!!"
                href="/somewhere"
                svgName="plasmaComponentBox"
            />
        );

        expect(screen.getByRole('link', {name: /my component/i})).toHaveAttribute('href', '/somewhere');
    });

    it('does not render a link if no href is provided', () => {
        render(<Tile title="My tile" description="not a link" svgName="plasmaComponentBox" />);

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
