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

        const removeBanana = await within(screen.getByTestId('item-id-banana')).findByRole('button', {
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
        const removeOrange = await within(screen.getByTestId('item-1')).findByRole('button', {name: /remove/i});
        await user.click(removeOrange);

        expect(onRemoveItemSpy).toHaveBeenCalledExactlyOnceWith(1);

        onRemoveItemSpy.mockReset();

        const removeBanana = await within(screen.getByTestId('item-0')).findByRole('button', {name: /remove/i});
        await user.click(removeBanana);

        expect(onRemoveItemSpy).toHaveBeenCalledExactlyOnceWith(0);
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

    it('adds a new item when newItem is a function', async () => {
        const user = userEvent.setup();
        const newItemFactory = vi.fn().mockReturnValue('dynamic');
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem={newItemFactory} {...form.getInputProps('fruits')}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        const addItem = screen.getByRole('button', {name: /add/i});
        await user.click(addItem);

        expect(newItemFactory).toHaveBeenCalledOnce();
        const items = screen.getAllByTestId(/item-/);
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent('banana');
        expect(items[1]).toHaveTextContent('orange');
        expect(items[2]).toHaveTextContent('dynamic');
        expect(screen.getByTestId('form-state')).toHaveTextContent('{"fruits":["banana","orange","dynamic"]}');
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

    it('disables the add button if allowAdd is false', () => {
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <>
                    <Collection newItem="new" {...form.getInputProps('fruits')} allowAdd={false}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                    <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                </>
            );
        };

        render(<Fixture />);
        expect(screen.getByRole('button', {name: /add/i})).toBeDisabled();
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
        expect(allowAdd).toHaveBeenCalledExactlyOnceWith(['banana', 'orange']);

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

            const removeOrange = await within(screen.getByTestId('item-1')).findByRole('button', {name: /remove/i});
            await user.click(removeOrange);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            expect(screen.queryByTestId('item-1')).not.toBeInTheDocument();
        });
    });

    it('labels the remove buttons with removeLabel', () => {
        const Fixture = () => {
            const form = useForm({
                initialValues: {fruits: ['banana', 'orange']},
                enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
            });
            return (
                <Collection<string> {...form.getInputProps('fruits')} newItem="" removeLabel="Remove fruit">
                    {(name) => <span>{name}</span>}
                </Collection>
            );
        };

        render(<Fixture />);

        expect(screen.getAllByRole('button', {name: 'Remove fruit'})).toHaveLength(2);
    });

    describe('when allowRemove is set', () => {
        it('hides the remove button of the items that are not removable', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection<string>
                        {...form.getInputProps('fruits')}
                        newItem=""
                        allowRemove={(fruit) => fruit !== 'banana'}
                    >
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            expect(
                within(screen.getByTestId('item-0')).queryByRole('button', {name: /remove/i}),
            ).not.toBeInTheDocument();
            expect(within(screen.getByTestId('item-1')).getByRole('button', {name: /remove/i})).toBeEnabled();
        });

        it('renders a disabled remove button with a tooltip when removeDisabledTooltip returns a message', async () => {
            const user = userEvent.setup();
            const onRemoveItem = vi.fn();
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection<string>
                        {...form.getInputProps('fruits')}
                        onRemoveItem={onRemoveItem}
                        newItem=""
                        allowRemove={(fruit) => fruit !== 'banana'}
                        removeDisabledTooltip={(fruit) => `${fruit} cannot be removed`}
                    >
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            const removeBanana = within(screen.getByTestId('item-0')).getByRole('button', {name: /remove/i});
            expect(removeBanana).toBeDisabled();

            await user.hover(removeBanana.parentElement!);
            expect(await screen.findByRole('tooltip', {name: 'banana cannot be removed'})).toBeInTheDocument();

            await user.click(removeBanana);
            expect(onRemoveItem).not.toHaveBeenCalled();
        });

        it('hides every remove button when allowRemove is false', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection<string> {...form.getInputProps('fruits')} newItem="" allowRemove={false}>
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
        });

        it('does not render the remove buttons when disabled', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {fruits: ['banana', 'orange']},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'fruits')}),
                });
                return (
                    <Collection<string>
                        {...form.getInputProps('fruits')}
                        newItem=""
                        disabled
                        allowRemove={(fruit) => fruit !== 'banana'}
                        removeDisabledTooltip={(fruit) => `${fruit} cannot be removed`}
                    >
                        {(name) => <span>{name}</span>}
                    </Collection>
                );
            };

            render(<Fixture />);

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

                const removeOrange = await within(screen.getByTestId('item-1')).findByRole('button', {
                    name: /remove/i,
                });
                await user.click(removeOrange);

                expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            });
        });
    });

    describe('form validation', () => {
        it('triggers validation when items are removed and displays error', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const form = useForm({
                    validateInputOnChange: true,
                    initialValues: {fruits: ['banana', 'orange']},
                    validate: {
                        fruits: (value) => (value.length < 2 ? 'Need at least 2 items' : null),
                    },
                    enhanceGetInputProps: (payload) => ({
                        ...enhanceWithCollectionProps(payload, 'fruits', {validateInputOnChange: true}),
                    }),
                });
                return (
                    <>
                        <Collection newItem="new" {...form.getInputProps('fruits')}>
                            {(name) => <span>{name}</span>}
                        </Collection>
                        <div data-testid="form-errors">{JSON.stringify(form.errors)}</div>
                    </>
                );
            };

            render(<Fixture />);

            // Initially no errors
            expect(screen.getByTestId('form-errors')).toHaveTextContent('{}');

            // Remove one item to get below minimum
            const removeBanana = await within(screen.getByTestId('item-0')).findByRole('button', {name: /remove/i});
            await user.click(removeBanana);

            // Should show validation error
            expect(screen.getByTestId('form-errors')).toHaveTextContent('{"fruits":"Need at least 2 items"}');

            // Error should also be displayed in the UI
            expect(screen.getByText('Need at least 2 items')).toBeInTheDocument();
        });
    });
});
