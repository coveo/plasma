import {render, screen} from '@test-utils';

import {Header} from '../Header';

describe('Header', () => {
    it('renders no breadcrumb separator if there is only one child', () => {
        render(<Header>child 1</Header>);

        const header = screen.getByRole('heading');
        expect(header).toMatchInlineSnapshot(`
          <h4
            class="mantine-Text-root mantine-Title-root mantine-xv5lu6"
          >
            <div
              class="mantine-Group-root mantine-fila1z"
            >
              <div
                class="mantine-Breadcrumbs-root mantine-16ttirm"
              >
                <div
                  class="mantine-1iqrsug mantine-Breadcrumbs-breadcrumb"
                >
                  child 1
                </div>
              </div>
            </div>
          </h4>
        `);
    });

    it('renders a arrow head icon between each children', async () => {
        render(
            <Header>
                <span>A</span>
                <span>B</span>
                <span>C</span>
            </Header>
        );

        const separators = await screen.findAllByRole('img', {name: /arrowHeadRight/i});
        expect(separators).toHaveLength(2);
    });

    it('renders a doc link icon if a doc link url is provided', async () => {
        render(<Header docLink="/some/path">title</Header>);

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
            <Header
                actions={
                    <>
                        <span>action 1</span>
                        <span>action 2</span>
                    </>
                }
            >
                title
            </Header>
        );

        expect(screen.getByText('action 1')).toBeInTheDocument();
        expect(screen.getByText('action 2')).toBeInTheDocument();
    });
});
