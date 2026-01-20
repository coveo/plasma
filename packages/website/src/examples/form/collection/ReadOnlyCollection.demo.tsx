import {Checkbox, Collection, TextInput, enhanceWithCollectionProps, useForm} from '@coveord/plasma-mantine';

interface TodoItem {
    name: string;
    done: boolean;
}

const Demo = () => {
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
        <Collection<TodoItem>
            draggable
            addLabel="Add task"
            description="These will have to be done by next week"
            label="List of tasks"
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
