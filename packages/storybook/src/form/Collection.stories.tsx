import {Checkbox, enhanceWithCollectionProps, formRootRule, TextInput, useForm} from '@coveord/plasma-mantine';
import {Collection} from '@coveord/plasma-mantine/components/Collection';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Controller, useFieldArray, useForm as useReactHookForm} from 'react-hook-form';

const meta: Meta<typeof Collection> = {
    title: '@components/form/Collection',
    component: Collection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Collection>;

export const Default: Story = {
    render: () => {
        const form = useForm({
            validateInputOnChange: true,
            initialValues: {
                todoList: [
                    {name: 'wash the dishes', done: true},
                    {name: 'take out the trash', done: false},
                    {name: 'vacuum the floors', done: false},
                ],
            },
            validate: {
                todoList: {
                    [formRootRule]: (value) =>
                        value.length < 2 ? `Don't be lazy, add just ${2 - value.length} more tasks` : null,
                    name: (value) => (value === '' ? 'Task name cannot be empty' : null),
                },
            },
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'todoList', {validateInputOnChange: true}),
            }),
        });
        return (
            <Collection<{name: string; done: boolean}>
                draggable
                addLabel="Add task"
                description="These will have to be done by next week"
                addDisabledTooltip="You have reached the maximum number of tasks"
                label="List of tasks"
                allowAdd={(value) => value.length < 10}
                newItem={{name: '', done: false}}
                {...form.getInputProps('todoList')}
            >
                {(_task, index) => (
                    <>
                        <TextInput
                            // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                            // autoFocus
                            placeholder="Do something ..."
                            {...form.getInputProps(`todoList.${index}.name`)}
                        />
                        <Checkbox
                            label="Done"
                            {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})}
                            style={{alignSelf: 'center'}}
                        />
                    </>
                )}
            </Collection>
        );
    },
};

export const CollectionWithReactHookForm: Story = {
    render: () => {
        const {control} = useReactHookForm({
            defaultValues: {
                todoList: [
                    {name: 'wash the dishes', done: true},
                    {name: 'take out the trash', done: false},
                    {name: 'vacuum the floors', done: false},
                ],
            },
            mode: 'onBlur',
        });

        const itemId = 'internal-id';
        const {fields, insert, move, remove} = useFieldArray({control, keyName: itemId, name: 'todoList'});
        return (
            <Controller
                control={control}
                name="todoList"
                render={({fieldState: {error}}) => (
                    <Collection<{name: string; done: boolean; 'internal-id'?: string}>
                        draggable
                        addLabel="Add task"
                        description="These will have to be done by next week"
                        label="List of tasks"
                        newItem={{name: '', done: false}}
                        error={error?.message}
                        onReorderItem={({from, to}) => {
                            move(from, to);
                        }}
                        onRemoveItem={remove}
                        onInsertItem={(value, index: number) => {
                            insert(index, value);
                        }}
                        value={fields}
                        getItemId={(item) => item[itemId]}
                    >
                        {(_task, index) => (
                            <>
                                <Controller
                                    control={control}
                                    name={`todoList.${index}.name` as const}
                                    render={({field, fieldState: {error: errorFieldName}}) => (
                                        <TextInput
                                            {...field}
                                            error={errorFieldName?.message}
                                            placeholder="Do something ..."
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name={`todoList.${index}.done` as const}
                                    render={({field: {value, ...restField}, fieldState: {error: errorFieldDone}}) => (
                                        <Checkbox checked={value} {...restField} error={errorFieldDone?.message} />
                                    )}
                                />
                            </>
                        )}
                    </Collection>
                )}
            />
        );
    },
};

export const DisabledCollection: Story = {
    render: () => {
        const form = useForm({
            initialValues: {
                todoList: [
                    {name: 'wash the dishes', done: true},
                    {name: 'take out the trash', done: false},
                    {name: 'vacuum the floors', done: false},
                ],
            },
            enhanceGetInputProps: (payload) => ({disabled: true, ...enhanceWithCollectionProps(payload, 'todoList')}),
        });
        return (
            <Collection<{name: string; done: boolean}>
                draggable
                addLabel="Add task"
                description="These will have to be done by next week"
                label="List of tasks"
                newItem={{name: '', done: false}}
                {...form.getInputProps('todoList')}
            >
                {(_task, index) => (
                    <>
                        <TextInput
                            // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                            // autoFocus
                            placeholder="Do something ..."
                            {...form.getInputProps(`todoList.${index}.name`)}
                        />
                        <Checkbox {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})} />
                    </>
                )}
            </Collection>
        );
    },
};

export const ReadOnlyCollection: Story = {
    render: () => {
        const form = useForm({
            initialValues: {
                todoList: [
                    {name: 'wash the dishes', done: true},
                    {name: 'take out the trash', done: false},
                    {name: 'vacuum the floors', done: false},
                ],
            },
            enhanceGetInputProps: (payload) => ({readOnly: true, ...enhanceWithCollectionProps(payload, 'todoList')}),
        });
        return (
            <Collection<{name: string; done: boolean}>
                draggable
                addLabel="Add task"
                description="These will have to be done by next week"
                label="List of tasks"
                newItem={{name: '', done: false}}
                {...form.getInputProps('todoList')}
            >
                {(_task, index) => (
                    <>
                        <TextInput
                            // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                            // autoFocus
                            placeholder="Do something ..."
                            {...form.getInputProps(`todoList.${index}.name`)}
                        />
                        <Checkbox {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})} />
                    </>
                )}
            </Collection>
        );
    },
};
