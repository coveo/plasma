import {Checkbox, Collection, TextInput, enhanceWithCollectionProps, useForm} from '@coveord/plasma-mantine';

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
        enhanceGetInputProps: (payload) => ({...enhanceWithCollectionProps(payload, 'todoList')}),
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
};
export default Demo;
