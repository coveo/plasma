import {Anchor} from '@mantine/core';
import {render, screen} from '@test-utils';

import {Header} from '../Header';

describe('Header', () => {
    it.skip('renders a heading of level 1 with the specified children within', () => {
        render(<Header>child</Header>);

        const header = screen.getByRole('heading');
        expect(header).toMatchInlineSnapshot(`
          <h1
            class="mantine-Text-root mantine-Title-root mantine-PlasmaHeader-title mantine-1o7jx33"
          >
            child
          </h1>
        `);
    });

    it.skip('renders the specified breadcrumbs above the title', async () => {
        const {container, rerender} = render(
            <Header>
                Title
                <Header.Breadcrumbs>
                    <Anchor>One</Anchor>
                    <Anchor>Two</Anchor>
                    <Anchor>Three</Anchor>
                </Header.Breadcrumbs>
            </Header>,
        );
        const titleFirst = container;

        rerender(
            <Header>
                <Header.Breadcrumbs>
                    <Anchor>One</Anchor>
                    <Anchor>Two</Anchor>
                    <Anchor>Three</Anchor>
                </Header.Breadcrumbs>
                Title
            </Header>,
        );
        const breadcrumbsFirst = container;

        expect(titleFirst).toMatchSnapshot();
        expect(breadcrumbsFirst).toEqual(titleFirst);
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

    it('renders provided actions in the header', () => {
        render(
            <Header>
                title
                <Header.Actions>
                    <span>action 1</span>
                    <span>action 2</span>
                </Header.Actions>
            </Header>,
        );

        expect(screen.getByText('action 1')).toBeInTheDocument();
        expect(screen.getByText('action 2')).toBeInTheDocument();
    });
});
