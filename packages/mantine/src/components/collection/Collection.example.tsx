import {Checkbox, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

import {Collection} from './Collection';

export default () => {
    const form = useForm({
        initialValues: {
            todoList: [
                {name: 'wash the dishes', done: true},
                {name: 'take out the trash', done: false},
                {name: 'vacuum the floors', done: true},
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
                        autoFocus
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
