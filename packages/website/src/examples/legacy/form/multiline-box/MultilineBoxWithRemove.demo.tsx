import {ReactNode, FocusEvent} from 'react';
import {compose} from 'redux';
import {
    FormProvider,
    MultilineBox,
    IMultilineSingleBoxProps,
    IMultilineParentProps,
    TextInput,
    multilineBoxWithRemoveButton,
    IButtonProps,
    defaultMultilineBoxRemoveButtonClasses,
} from '@coveord/plasma-react';

interface MyData {
    name: string;
}

const MultilineBoxWithRemove = compose(
    multilineBoxWithRemoveButton({
        containerNode: (child: ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode) => (
            <div className="inline-flex center-align">
                {child}
                {getRemoveButton({
                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto mb2'],
                })}
            </div>
        ),
    })
)(MultilineBox);

const Demo = () => (
    <FormProvider>
        <MultilineBoxWithRemove
            id="multiline-box-remove-id"
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
export default Demo;
