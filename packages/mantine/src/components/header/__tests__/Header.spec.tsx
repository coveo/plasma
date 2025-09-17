import {Anchor} from '@mantine/core';
import {render, screen, within} from '@test-utils';

import {Header} from '../Header.js';

describe('Header', () => {
    it('renders a heading of level 1 with the specified children within', () => {
        render(
            <Header>
                <div data-testid="child" />
            </Header>,
        );

        const header = screen.getByRole('heading', {level: 1});
        expect(header.tagName).toBe('H1');
        expect(within(header).getByTestId('child')).toBeVisible();
    });

    it('renders a heading of level 3 when the variant is secondary', () => {
        render(
            <Header variant="secondary">
                <div data-testid="child" />
            </Header>,
        );

        const header = screen.getByRole('heading', {level: 3});
        expect(header.tagName).toBe('H3');
        expect(within(header).getByTestId('child')).toBeVisible();
    });

    it('renders the specified breadcrumbs above the title', async () => {
        const {rerender} = render(
            <Header>
                <Header.Breadcrumbs data-testid="breadcrumbs-after">
                    <Anchor>One</Anchor>
                    <Anchor>Two</Anchor>
                    <Anchor>Three</Anchor>
                </Header.Breadcrumbs>
                <div data-testid="title">Title</div>
            </Header>,
        );

        // title follows breadcrumbs even if declared after
        expect(screen.getByTestId('breadcrumbs-after').compareDocumentPosition(screen.getByTestId('title'))).toBe(
            Node.DOCUMENT_POSITION_FOLLOWING,
        );

        rerender(
            <Header>
                <div data-testid="title">Title</div>
                <Header.Breadcrumbs data-testid="breadcrumbs-after">
                    <Anchor>One</Anchor>
                    <Anchor>Two</Anchor>
                    <Anchor>Three</Anchor>
                </Header.Breadcrumbs>
            </Header>,
        );
        // title still follows breadcrumbs
        expect(screen.getByTestId('breadcrumbs-after').compareDocumentPosition(screen.getByTestId('title'))).toBe(
            Node.DOCUMENT_POSITION_FOLLOWING,
        );
    });

    it('renders a doc link icon if a doc anchor is provided', async () => {
        render(
            <Header>
                title
                <Header.DocAnchor href="/some/path" />
            </Header>,
        );

        const docLink = await screen.findByRole('link', {name: /question/i});
        expect(docLink).toHaveAttribute('href', '/some/path');
    });

    it('adds a separator underneath the header if borderBottom is true', () => {
        render(<Header borderBottom>title</Header>);
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('renders provided description in the header', () => {
        render(<Header description="description">title</Header>);

        expect(screen.getByText('description')).toBeInTheDocument();
    });

    it('renders provided components in Header.Right', () => {
        render(
            <Header>
                title
                <Header.Right>
                    <span>action 1</span>
                    <span>action 2</span>
                </Header.Right>
            </Header>,
        );

        expect(screen.getByText('action 1')).toBeInTheDocument();
        expect(screen.getByText('action 2')).toBeInTheDocument();
    });
});
