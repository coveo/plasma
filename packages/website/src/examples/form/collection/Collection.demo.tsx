import {Checkbox, Collection, TextInput, useForm} from '@coveord/plasma-mantine';

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
            todoList: (value) => (value.length < 2 ? `Don't be lazy, add just ${2 - value.length} more tasks` : null),
        },
    });

    return (
        <Collection<{name: string; done: boolean}>
            draggable
            addLabel="Add task"
            description="These will have to be done by next week"
            label="List of tasks"
            newItem={{name: '', done: false}}
            {...form.getInputProps('todoList', {type: 'collection'})}
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
};
export default Demo;
