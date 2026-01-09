import {TextInput, useForm} from '@coveord/plasma-mantine';
import {render, screen, userEvent, within} from '@test-utils';
import {Collection} from '../Collection.js';
import {enhanceWithCollectionProps} from '../enhanceWithCollectionProps.js';

interface TestItem {
    name: string;
    email: string;
}

describe('Collection with columns', () => {
    describe('Column API', () => {
        it('renders columns with headers', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {
                        items: [
                            {name: 'Alice', email: 'alice@example.com'},
                            {name: 'Bob', email: 'bob@example.com'},
                        ],
                    },
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item, index) => (
                                    <TextInput {...form.getInputProps(`items.${index}.name`)} />
                                ),
                            },
                            {
                                header: 'Email',
                                cell: (item, index) => (
                                    <TextInput {...form.getInputProps(`items.${index}.email`)} />
                                ),
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(screen.getByText('Name')).toBeInTheDocument();
            expect(screen.getByText('Email')).toBeInTheDocument();
        });

        it('renders cells with correct values', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {
                        items: [
                            {name: 'Alice', email: 'alice@example.com'},
                            {name: 'Bob', email: 'bob@example.com'},
                        ],
                    },
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                            {
                                header: 'Email',
                                cell: (item) => <div>{item.email}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('alice@example.com')).toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
            expect(screen.getByText('bob@example.com')).toBeInTheDocument();
        });

        it('calls cell render function with correct parameters', () => {
            const cellSpy = vi.fn((item: TestItem) => <div>{item.name}</div>);

            const Fixture = () => {
                const form = useForm({
                    initialValues: {
                        items: [{name: 'Alice', email: 'alice@example.com'}],
                    },
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: cellSpy,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(cellSpy).toHaveBeenCalledWith(
                {name: 'Alice', email: 'alice@example.com'},
                0,
                expect.objectContaining({
                    draggable: false,
                    disabled: false,
                }),
            );
        });

        it('handles function header', () => {
            const headerSpy = vi.fn(() => <div>Custom Header</div>);

            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: headerSpy,
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(headerSpy).toHaveBeenCalledWith(expect.objectContaining({index: 0}));
            expect(screen.getByText('Custom Header')).toBeInTheDocument();
        });

        it('handles missing header', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            // Should not throw
            render(<Fixture />);
            expect(screen.getByText('Alice')).toBeInTheDocument();
        });
    });

    describe('HorizontalLayout (default)', () => {
        it('uses HorizontalLayout by default when columns are provided', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            // Should render in horizontal layout with header above
            expect(screen.getByText('Name')).toBeInTheDocument();
            expect(screen.getByText('Alice')).toBeInTheDocument();
        });

        it('renders items in rows with remove buttons', async () => {
            const _user = userEvent.setup();
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            const removeButton = await within(screen.getByTestId('item-0')).findByRole('button', {
                name: /remove/i,
            });
            expect(removeButton).toBeInTheDocument();
        });
    });

    describe('VerticalLayout', () => {
        it('renders items with vertical layout', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        layout={Collection.Layouts.Vertical}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                            {
                                header: 'Email',
                                cell: (item) => <div>{item.email}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            // In vertical layout, headers appear within each item
            expect(screen.getAllByText('Name')).toHaveLength(1);
            expect(screen.getAllByText('Email')).toHaveLength(1);
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('alice@example.com')).toBeInTheDocument();
        });
    });

    describe('Feature preservation', () => {
        it('adds items with columns', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <>
                        <Collection<TestItem>
                            newItem={{name: 'New', email: 'new@example.com'}}
                            {...form.getInputProps('items')}
                            columns={[
                                {
                                    header: 'Name',
                                    cell: (item) => <div>{item.name}</div>,
                                },
                            ]}
                        />
                        <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                    </>
                );
            };

            render(<Fixture />);

            const addButton = screen.getByRole('button', {name: /add/i});
            await user.click(addButton);

            const items = screen.getAllByTestId(/item-/);
            expect(items).toHaveLength(2);
            expect(screen.getByTestId('form-state')).toHaveTextContent(
                '{"items":[{"name":"Alice","email":"alice@example.com"},{"name":"New","email":"new@example.com"}]}',
            );
        });

        it('removes items with columns', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const form = useForm({
                    initialValues: {
                        items: [
                            {name: 'Alice', email: 'alice@example.com'},
                            {name: 'Bob', email: 'bob@example.com'},
                        ],
                    },
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <>
                        <Collection<TestItem>
                            newItem={{name: '', email: ''}}
                            {...form.getInputProps('items')}
                            columns={[
                                {
                                    header: 'Name',
                                    cell: (item) => <div>{item.name}</div>,
                                },
                            ]}
                        />
                        <div data-testid="form-state">{JSON.stringify(form.values)}</div>
                    </>
                );
            };

            render(<Fixture />);

            const removeButton = await within(screen.getByTestId('item-0')).findByRole('button', {
                name: /remove/i,
            });
            await user.click(removeButton);

            const items = screen.getAllByTestId(/item-/);
            expect(items).toHaveLength(1);
            expect(screen.getByTestId('form-state')).toHaveTextContent(
                '{"items":[{"name":"Bob","email":"bob@example.com"}]}',
            );
        });

        it('respects allowAdd prop', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        allowAdd={false}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(screen.getByRole('button', {name: /add/i})).toBeDisabled();
        });

        it('hides remove button when required and only one item', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        required
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
        });

        it('disables controls when disabled prop is true', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        disabled
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /remove/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('button', {name: /add/i})).not.toBeInTheDocument();
        });
    });

    describe('Backward compatibility', () => {
        it('throws error when both columns and children are provided', () => {
            // Suppress console.error for this test
            const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    >
                        {(item) => <div>{item.name}</div>}
                    </Collection>
                );
            };

            expect(() => render(<Fixture />)).toThrow(
                'Collection: Cannot use both "columns" and "children" props',
            );

            consoleError.mockRestore();
        });

        it('throws error when layout is provided without columns', () => {
            // Suppress console.error for this test
            const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        layout={Collection.Layouts.Horizontal}
                    >
                        {(item) => <div>{item.name}</div>}
                    </Collection>
                );
            };

            expect(() => render(<Fixture />)).toThrow(
                'Collection: "layout" prop can only be used with "columns" prop',
            );

            consoleError.mockRestore();
        });
    });

    describe('Drag and drop', () => {
        it('renders drag handles when draggable is true', () => {
            const Fixture = () => {
                const form = useForm({
                    initialValues: {items: [{name: 'Alice', email: 'alice@example.com'}]},
                    enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'items')}),
                });

                return (
                    <Collection<TestItem>
                        newItem={{name: '', email: ''}}
                        {...form.getInputProps('items')}
                        draggable
                        columns={[
                            {
                                header: 'Name',
                                cell: (item) => <div>{item.name}</div>,
                            },
                        ]}
                    />
                );
            };

            render(<Fixture />);

            // DragAndDropSize24Px component has role="button" by default from the icon
            const dragHandles = screen.getAllByRole('button', {name: /dragAndDrop/i});
            expect(dragHandles.length).toBeGreaterThan(0);
        });
    });
});
