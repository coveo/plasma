import {Checkbox, Collection, TextInput} from '@coveord/plasma-mantine';
import {Controller, useForm, useFieldArray} from 'react-hook-form';

export default () => {
    const {control} = useForm({
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
};
