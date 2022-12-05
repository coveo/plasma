import {Checkbox, Collection, TextInput, useForm} from '@coveord/plasma-mantine';

export default () => {
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
                name: (value) => (value.length < 2 ? "That can't be a task..." : null),
            },
        },
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
            {(task, index) => (
                <>
                    <TextInput
                        // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                        // autoFocus
                        error="That can't be a task..."
                        placeholder="Do something ..."
                        {...form.getInputProps(`todoList.${index}.name`)}
                        styles={{flex: 1}}
                    />
                    <Checkbox {...form.getInputProps(`todoList.${index}.done`, {type: 'checkbox'})} />
                </>
            )}
        </Collection>
    );
};
