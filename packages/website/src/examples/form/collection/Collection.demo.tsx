import {
    Checkbox,
    Collection,
    TextInput,
    enhanceWithCollectionProps,
    formRootRule,
    useForm,
} from '@coveord/plasma-mantine';

interface TodoItem {
    name: string;
    done: boolean;
}

const Demo = () => {
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
        <Collection<TodoItem>
            draggable
            addLabel="Add task"
            description="These will have to be done by next week"
            addDisabledTooltip="You have reached the maximum number of tasks"
            label="List of tasks"
            allowAdd={(value) => value.length < 10}
            newItem={{name: '', done: false}}
            {...form.getInputProps('todoList')}
            columns={[
                {
                    header: 'Task',
                    cell: (_task, index) => (
                        <TextInput
                            // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                            // autoFocus
                            placeholder="Do something ..."
                            {...form.getInputProps(`todoList.${index}.name`)}
                        />
                    ),
                },
                {
                    header: 'Done',
                    cell: (_task, index) => (
                        <Checkbox {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})} />
                    ),
                    maxSize: 25,
                },
            ]}
        />
    );
};
export default Demo;
