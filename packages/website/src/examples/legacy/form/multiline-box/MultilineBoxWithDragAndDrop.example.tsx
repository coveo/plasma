import {FocusEvent} from 'react';
import {compose} from 'redux';
import {
    FormProvider,
    MultilineBox,
    IMultilineSingleBoxProps,
    IMultilineParentProps,
    TextInput,
    multilineBoxWithDnD,
} from '@coveord/plasma-react';

interface MyData {
    name: string;
}

const MultilineBoxWithDragAndDrop = compose(multilineBoxWithDnD())(MultilineBox);

export default () => (
    <FormProvider>
        <MultilineBoxWithDragAndDrop
            id="multiline-box-dnd-id"
            data={[{name: 'Poire'}, {name: 'Apple'}]}
            renderBody={(data: Array<IMultilineSingleBoxProps<MyData>>, defaultProps: IMultilineParentProps) =>
                Object.values(data).map(({id, isLast, props}: IMultilineSingleBoxProps<MyData>) => (
                    <TextInput
                        id={id}
                        key={id}
                        required={!isLast}
                        showValidationOnBlur
                        type="text"
                        label="Label"
                        defaultValue={props.name}
                        onBlur={(evt: FocusEvent<HTMLInputElement>) => {
                            if (evt.target.value !== '' && isLast) {
                                defaultProps.addNewBox();
                            }
                        }}
                    />
                ))
            }
            defaultProps={{name: ''}}
        />
    </FormProvider>
);
