import {MultiSelect, Select} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useState} from 'react';

import {render, screen, userEvent} from '@test-utils';
import {getCreateOptionValue, useCreatableData} from '../useCreatableData.js';

const baseData = ['React', 'Angular', 'Vue', 'Svelte'];

describe('useCreatableData', () => {
    describe('with Select component', () => {
        const SelectWithUseState = () => {
            const [value, setValue] = useState<string | null>(null);
            const creatable = useCreatableData({data: baseData});

            return (
                <Select
                    {...creatable}
                    searchable
                    label="Framework"
                    value={value}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        setValue(val ? getCreateOptionValue(val) : null);
                    }}
                    data-testid="creatable-select"
                />
            );
        };

        const SelectWithUseForm = () => {
            const form = useForm({initialValues: {framework: ''}});
            const creatable = useCreatableData({data: baseData});

            return (
                <Select
                    {...creatable}
                    searchable
                    label="Framework"
                    {...form.getInputProps('framework')}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        form.setFieldValue('framework', val ? getCreateOptionValue(val) : '');
                    }}
                    data-testid="creatable-select-form"
                />
            );
        };

        describe('with useState', () => {
            it('renders and displays all base options sorted', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                expect(screen.getAllByRole('option')).toHaveLength(baseData.length);
            });

            it('selects an existing option', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.click(screen.getByRole('option', {name: /react/i}));
                expect(screen.getByRole('textbox')).toHaveValue('React');
            });

            it('shows a create option when typing a new value', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');

                expect(await screen.findByRole('option', {name: /create "Solid"/i})).toBeVisible();
            });

            it('does not show a create option when typing an existing value', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'React');

                expect(screen.queryByRole('option', {name: /create/i})).not.toBeInTheDocument();
            });

            it('creates and selects a new value (prefix stripped)', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                expect(screen.getByRole('textbox')).toHaveValue('Solid');
            });

            it('persists created values so they appear in subsequent opens', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseState />);

                // Create "Solid"
                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                // Re-open: "Solid" should be a regular option
                await user.click(screen.getByRole('textbox'));
                expect(screen.getByRole('option', {name: 'Solid'})).toBeVisible();
                expect(screen.getAllByRole('option')).toHaveLength(baseData.length + 1);
            });
        });

        describe('with useForm', () => {
            it('selects an existing option and updates form value', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseForm />);

                await user.click(screen.getByRole('textbox'));
                await user.click(screen.getByRole('option', {name: /vue/i}));
                expect(screen.getByRole('textbox')).toHaveValue('Vue');
            });

            it('creates a new value and updates form value (prefix stripped)', async () => {
                const user = userEvent.setup();
                render(<SelectWithUseForm />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Qwik');
                await user.click(await screen.findByRole('option', {name: /create "Qwik"/i}));

                expect(screen.getByRole('textbox')).toHaveValue('Qwik');
            });
        });
    });

    describe('with MultiSelect component', () => {
        const MultiSelectWithUseState = () => {
            const [value, setValue] = useState<string[]>([]);
            const creatable = useCreatableData({data: baseData});

            return (
                <MultiSelect
                    {...creatable}
                    searchable
                    label="Frameworks"
                    value={value}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        setValue(vals.map(getCreateOptionValue));
                    }}
                    data-testid="creatable-multiselect"
                />
            );
        };

        const MultiSelectWithUseForm = () => {
            const form = useForm<{frameworks: string[]}>({initialValues: {frameworks: []}});
            const creatable = useCreatableData({data: baseData});

            return (
                <MultiSelect
                    {...creatable}
                    searchable
                    label="Frameworks"
                    {...form.getInputProps('frameworks')}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        form.setFieldValue('frameworks', vals.map(getCreateOptionValue));
                    }}
                    data-testid="creatable-multiselect-form"
                />
            );
        };

        describe('with useState', () => {
            it('selects multiple existing options', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.click(screen.getByRole('option', {name: /react/i}));
                await user.click(screen.getByRole('option', {name: /vue/i}));

                expect(screen.getByText('React')).toBeVisible();
                expect(screen.getByText('Vue')).toBeVisible();
            });

            it('shows a create option when typing a new value', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');

                expect(await screen.findByRole('option', {name: /create "Solid"/i})).toBeVisible();
            });

            it('creates a new value as a pill', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                expect(screen.getByText('Solid')).toBeVisible();
            });

            it('creates multiple new values', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseState />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                await user.type(screen.getByRole('textbox'), 'Qwik');
                await user.click(await screen.findByRole('option', {name: /create "Qwik"/i}));

                expect(screen.getByText('Solid')).toBeVisible();
                expect(screen.getByText('Qwik')).toBeVisible();
            });
        });

        describe('with useForm', () => {
            it('creates a new value and updates form state', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseForm />);

                await user.click(screen.getByRole('textbox'));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                expect(screen.getByText('Solid')).toBeVisible();
            });

            it('selects existing and creates new values together', async () => {
                const user = userEvent.setup();
                render(<MultiSelectWithUseForm />);

                await user.click(screen.getByRole('textbox'));
                await user.click(screen.getByRole('option', {name: /angular/i}));
                await user.type(screen.getByRole('textbox'), 'Solid');
                await user.click(await screen.findByRole('option', {name: /create "Solid"/i}));

                expect(screen.getByText('Angular')).toBeVisible();
                expect(screen.getByText('Solid')).toBeVisible();
            });
        });
    });
});
