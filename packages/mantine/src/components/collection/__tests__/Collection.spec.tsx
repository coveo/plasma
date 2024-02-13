import {useForm} from '@mantine/form';
import {render, screen, userEvent, within} from '@test-utils';
import {useState} from 'react';
import {Collection} from '../Collection';
import {enhanceWithCollectionProps} from '../enhanceWithCollectionProps';

describe('Collection', () => {
    it('renders one item for each initial values in the form', () => {
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection<string> newItem="" {...form.getInputProps('fruits')}>
                    {(name) => <span data-testid="item">{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);

        const items = screen.getAllByTestId('item');
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
    });

    it('removes the item when clicking on its remove button', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="" {...form.getInputProps('fruits')}>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        let items = screen.getAllByTestId('item');
        expect(items).toHaveLength(2);
        /* eslint-disable-next-line testing-library/no-node-access */
        const removeBanana = await within(items[0].parentElement).findByRole('button', {name: /remove/i});

        await user.click(removeBanana);

        items = screen.getAllByTestId('item');
        // eslint-disable-next-line jest-dom/prefer-in-document
        expect(screen.getAllByTestId('item')).toHaveLength(1);
        expect(items[0]).toHaveTextContent('orange');
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["orange"]}');
    });

    it('calls the onRemoveItem function when clicking on a remove button', async () => {
        const user = userEvent.setup({delay: null});
        const onRemoveItemSpy = vi.fn();
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection newItem="" {...form.getInputProps('fruits')} onRemoveItem={onRemoveItemSpy}>
                    {(name) => <span data-testid="item">{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);
        let items = screen.getAllByTestId('item');
        expect(items).toHaveLength(2);
        /* eslint-disable-next-line testing-library/no-node-access */
        const removeOrange = await within(items[1].parentElement).findByRole('button', {name: /remove/i});
        await user.click(removeOrange);

        expect(onRemoveItemSpy).toHaveBeenCalledWith(1);

        items = screen.getAllByTestId('item');
        const removeBanana = await within(items[0].parentElement).findByRole('button', {name: /remove/i});
        await user.click(removeBanana);

        expect(onRemoveItemSpy).toHaveBeenCalledWith(0);
    });

    it('does not render the remove button when disabled', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const [disabled, setDisabled] = useState(false);
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <button onClick={() => setDisabled(true)}>disable</button>
                    <Collection newItem="" {...form.getInputProps('fruits')} disabled={disabled}>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                </>
            );
        };

        render(<Fixture />);
        await screen.findAllByRole('button', {name: /remove/i});
        await user.click(screen.getByRole('button', {name: /disable/i}));
        expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
    });

    it('adds a new item when clicking on the add button', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="new" {...form.getInputProps('fruits')}>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        const addItem = screen.getByRole('button', {name: /add/i});
        await user.click(addItem);

        const items = screen.getAllByTestId('item');
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(items[2]).toHaveTextContent('new');
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["banana","orange","new"]}');
    });

    it('disables the add button whenever allowAdd callback returns false', () => {
        const allowAdd = vi.fn().mockImplementation(() => false);
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="new" {...form.getInputProps('fruits')} allowAdd={allowAdd}>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        const {rerender} = render(<Fixture />);
        expect(screen.getByRole('button', {name: /add/i})).toBeDisabled();
        expect(allowAdd).toHaveBeenCalledWith(['banana', 'orange']);

        allowAdd.mockImplementation(() => true);
        rerender(<Fixture />);
        expect(screen.getByRole('button', {name: /add/i})).toBeEnabled();
    });

    describe('when required is true', () => {
        it("doesn't render the remove button on one item", async () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection data-testid="collection" {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();

            const items = screen.getAllByTestId('item');
            // eslint-disable-next-line jest-dom/prefer-in-document
            expect(items).toHaveLength(1);
            expect(items[0]).toHaveTextContent('banana');
        });

        it('render the remove button on the first row if length is 2', async () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection data-testid="collection" {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);
            await screen.findAllByRole('button', {name: /remove/i});
            /* eslint-disable-next-line testing-library/no-node-access */
            const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
            expect(removeButtons).toHaveLength(2);

            const items = screen.getAllByTestId('item');
            expect(items).toHaveLength(2);
            expect(items[0]).toHaveTextContent('banana');
            expect(items[1]).toHaveTextContent('orange');
        });

        it('not render the remove button after removing an item from a collection containing two items', async () => {
            const user = userEvent.setup({delay: null});
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection data-testid="collection" {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span data-testid="item">{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            await screen.findAllByRole('button', {name: /remove/i});
            /* eslint-disable-next-line testing-library/no-node-access */
            const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
            expect(removeButtons).toHaveLength(2);

            const items = screen.getAllByTestId('item');
            expect(items).toHaveLength(2);
            expect(items[0]).toHaveTextContent('banana');
            expect(items[1]).toHaveTextContent('orange');

            await user.click(removeButtons[1]);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
        });
    });

    describe('when the Collection is draggable', () => {
        it('renders drag n drop icons for each item', async () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <>
                        <Collection newItem="new" {...form.getInputProps('fruits')} draggable>
                            {(name) => <span data-testid="item">{name}</span>}
                        </Collection>
                    </>
                );
            };

            render(<Fixture />);

            const dragIcons = await screen.findAllByRole('button', {name: /dragAndDrop/i});
            expect(dragIcons).toHaveLength(2);
        });

        describe('when required is true', () => {
            it('not render the remove button after removing an item from a collection containing two items', async () => {
                const user = userEvent.setup({delay: null});
                const Fixture = () => {
                    const form = useForm({
                        initialValues: {fruits: ['banana', 'orange']},
                        enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                    });
                    return (
                        <Collection
                            data-testid="collection"
                            {...form.getInputProps('fruits')}
                            newItem="new"
                            required
                            draggable
                        >
                            {(name) => <span data-testid="item">{name}</span>}
                        </Collection>
                    );
                };

                render(<Fixture />);

                await screen.findAllByRole('button', {name: /remove/i});
                /* eslint-disable-next-line testing-library/no-node-access */
                const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
                expect(removeButtons).toHaveLength(2);

                const items = screen.getAllByTestId('item');
                expect(items).toHaveLength(2);
                expect(items[0]).toHaveTextContent('banana');
                expect(items[1]).toHaveTextContent('orange');

                await user.click(removeButtons[1]);

                expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            });
        });
    });
});
