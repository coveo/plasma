import {Checkbox, Collection, TextInput} from '@coveord/plasma-mantine';
import {Controller, useForm, useFieldArray, useWatch} from 'react-hook-form';

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
    const collectionWatched = useWatch({control, name: 'todoList'});
    const {fields, insert, move, remove} = useFieldArray({control, keyName: itemId, name: 'todoList'});
    const controlledFields = fields.map((field, index) => ({
        ...field,
        ...collectionWatched[index],
    }));

    return (
        <Controller
            control={control}
            name="todoList"
            render={({fieldState}) => (
                <Collection<{name: string; done: boolean}>
                    draggable
                    addLabel="Add task"
                    description="These will have to be done by next week"
                    label="List of tasks"
                    newItem={{name: '', done: false}}
                    error={fieldState.error?.message}
                    onReorderItem={({from, to}: ReorderPayload) => {
                        move(from, to);
                    }}
                    onRemoveItem={remove}
                    onInsertItem={(value: T, index: number) => {
                        insert(index, value);
                    }}
                    value={controlledFields}
                    getItemId={(item) => item[itemId]}
                >
                    {(_task, index) => (
                        <>
                            <Controller
                                control={control}
                                name={`todoList.${index}.name` as const}
                                render={({field, fieldState}) => (
                                    <TextInput
                                        {...field}
                                        error={fieldState.error?.message}
                                        placeholder="Do something ..."
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name={`todoList.${index}.done` as const}
                                render={({field: {value, ...restField}, fieldState}) => (
                                    <Checkbox checked={value} {...restField} error={fieldState.error?.message} />
                                )}
                            />
                        </>
                    )}
                </Collection>
            )}
        />
    );
};
