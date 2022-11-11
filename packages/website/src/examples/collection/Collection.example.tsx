import {Checkbox, Collection, TextInput, useForm} from '@coveord/plasma-mantine';

export default () => {
    const form = useForm({
        initialValues: {
            todoList: [
                {name: 'wash the dishes', done: true},
                {name: 'take out the trash', done: false},
                {name: 'vacuum the floors', done: false},
            ],
        },
    });

    return (
        <Collection<{name: string; done: boolean}>
            draggable
            addLabel="Add task"
            newItem={{name: '', done: false}}
            {...form.getInputProps('todoList')}
        >
            {(task, index) => (
                <>
                    <TextInput
                        // Autofocus is annoying when playing with the sandbox but you should have this on otherwise
                        // autoFocus
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
