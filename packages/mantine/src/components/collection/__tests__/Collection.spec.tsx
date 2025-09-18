import {useForm} from '@mantine/form';
import {render, screen, userEvent, within} from '@test-utils';
import {useState} from 'react';
import {Collection} from '../Collection.js';
import {enhanceWithCollectionProps} from '../enhanceWithCollectionProps.js';

describe('Collection', () => {
    it('renders one item for each initial values in the form', () => {
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection<string> newItem="" {...form.getInputProps('fruits')}>
                    {(name) => <span>{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);

        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);
        expect(screen.queryByTestId('item-0')).toHaveTextContent('banana');
        expect(screen.queryByTestId('item-1')).toHaveTextContent('orange');
        expect(screen.getByTestId('item-0')).toBeInTheDocument();
        expect(screen.getByTestId('item-1')).toBeInTheDocument();
    });

    it('renders one item for each initial values in the form with custom id', () => {
        const getItemId = (item: string) => `id-${item}`;

        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection<string> getItemId={getItemId} newItem="" {...form.getInputProps('fruits')}>
                    {(name) => <span>{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);

        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(screen.getByTestId('item-id-orange')).toBeInTheDocument();
        expect(screen.getByTestId('item-id-banana')).toBeInTheDocument();
    });

    it('renders one item for each initial values in the form with custom id based on index', () => {
        const getItemId = (_item: string, index: number) => `index-${index}`;

        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection<string> getItemId={getItemId} newItem="" {...form.getInputProps('fruits')}>
                    {(name) => <span>{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);

        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(screen.getByTestId('item-index-0')).toBeInTheDocument();
        expect(screen.getByTestId('item-index-1')).toBeInTheDocument();
    });

    it('removes the item when clicking on its remove button', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="" {...form.getInputProps('fruits')}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        let items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);

        const removeBanana = await within(screen.getByTestId('item-0')).findByRole('button', {name: /remove/i});
        await user.click(removeBanana);

        items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(1);
        expect(items[0]).toHaveTextContent('orange');
        expect(screen.queryByTestId('item-1')).not.toBeInTheDocument();
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["orange"]}');
    });

    it('removes the item when clicking on its remove button with custom id', async () => {
        const user = userEvent.setup();
        const getItemId = (item: string) => `id-${item}`;

        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection getItemId={getItemId} newItem="" {...form.getInputProps('fruits')}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        let items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);

        const removeBanana = await within(screen.queryByTestId('item-id-banana')).findByRole('button', {
            name: /remove/i,
        });
        await user.click(removeBanana);

        items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(1);
        expect(items[0]).toHaveTextContent('orange');
        expect(screen.getByTestId('item-id-orange')).toBeInTheDocument();
        expect(screen.queryByTestId('item-id-banana')).not.toBeInTheDocument();
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["orange"]}');
    });

    it('calls the onRemoveItem function when clicking on a remove button', async () => {
        const user = userEvent.setup();
        const onRemoveItemSpy = vi.fn();
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection newItem="" {...form.getInputProps('fruits')} onRemoveItem={onRemoveItemSpy}>
                    {(name) => <span>{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);
        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(2);
        const removeOrange = await within(screen.queryByTestId('item-1')).findByRole('button', {name: /remove/i});
        await user.click(removeOrange);

        expect(onRemoveItemSpy).toHaveBeenCalledWith(1);

        const removeBanana = await within(screen.queryByTestId('item-0')).findByRole('button', {name: /remove/i});
        await user.click(removeBanana);

        expect(onRemoveItemSpy).toHaveBeenCalledWith(0);
    });

    it('does not render the remove button when disabled', async () => {
        const user = userEvent.setup();
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
                        {(name) => <span>{name}</span>}
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
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="new" {...form.getInputProps('fruits')}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        const addItem = screen.getByRole('button', {name: /add/i});
        await user.click(addItem);

        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(items[2]).toHaveTextContent('new');
        expect(screen.getByTestId('item-2')).toBeInTheDocument();
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["banana","orange","new"]}');
    });

    it('adds a new item when clicking on the add button with custom id', async () => {
        const user = userEvent.setup();
        const getItemId = (item: string) => `id-${item}`;
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection getItemId={getItemId} newItem="new" {...form.getInputProps('fruits')}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        const addItem = screen.getByRole('button', {name: /add/i});
        await user.click(addItem);

        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(items[2]).toHaveTextContent('new');
        expect(screen.getByTestId('item-id-new')).toBeInTheDocument();
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
                        {(name) => <span>{name}</span>}
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
                    <Collection {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();

            const items = screen.getAllByTestId(/item-/);
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
                    <Collection {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);
            await screen.findAllByRole('button', {name: /remove/i});

            const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
            expect(removeButtons).toHaveLength(2);

            const items = screen.getAllByTestId(/item-/);
            expect(items).toHaveLength(2);
            expect(items[0]).toHaveTextContent('banana');
            expect(items[1]).toHaveTextContent('orange');
            expect(screen.getByTestId('item-0')).toBeInTheDocument();
            expect(screen.getByTestId('item-1')).toBeInTheDocument();
        });

        it('not render the remove button after removing an item from a collection containing two items', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection {...form.getInputProps('fruits')} newItem="new" required>
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            await screen.findAllByRole('button', {name: /remove/i});

            const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
            expect(removeButtons).toHaveLength(2);

            const items = screen.getAllByTestId(/item-/);
            expect(items).toHaveLength(2);
            expect(items[0]).toHaveTextContent('banana');
            expect(items[1]).toHaveTextContent('orange');
            expect(screen.getByTestId('item-0')).toBeInTheDocument();
            expect(screen.getByTestId('item-1')).toBeInTheDocument();

            const removeOrange = await within(screen.queryByTestId('item-1')).findByRole('button', {name: /remove/i});
            await user.click(removeOrange);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            expect(screen.queryByTestId('item-1')).not.toBeInTheDocument();
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
                            {(name) => <span>{name}</span>}
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
                const user = userEvent.setup();
                const Fixture = () => {
                    const form = useForm({
                        initialValues: {fruits: ['banana', 'orange']},
                        enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                    });
                    return (
                        <Collection {...form.getInputProps('fruits')} newItem="new" required draggable>
                            {(name) => <span>{name}</span>}
                        </Collection>
                    );
                };

                render(<Fixture />);

                await screen.findAllByRole('button', {name: /remove/i});

                const removeButtons = screen.queryAllByRole('button', {name: /remove/i});
                expect(removeButtons).toHaveLength(2);

                const items = screen.getAllByTestId(/item-/);
                expect(items).toHaveLength(2);
                expect(items[0]).toHaveTextContent('banana');
                expect(items[1]).toHaveTextContent('orange');

                const removeOrange = await within(screen.queryByTestId('item-1')).findByRole('button', {
                    name: /remove/i,
                });
                await user.click(removeOrange);

                expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            });
        });
    });
});
