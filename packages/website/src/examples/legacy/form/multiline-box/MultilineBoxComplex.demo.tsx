import {
    defaultMultilineBoxRemoveButtonClasses,
    FormProvider,
    IButtonProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
    multilineBoxWithDnD,
    multilineBoxWithRemoveButton,
    TextInput,
} from '@coveord/plasma-react';
import {FocusEvent, ReactNode} from 'react';
import {compose} from 'redux';

interface MyData {
    name: string;
}

const ComplexMultilineBox = compose(
    multilineBoxWithRemoveButton({
        containerNode: (child: ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode) => (
            <div className="inline-flex center-align">
                {child}
                {getRemoveButton({
                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto mb2'],
                })}
            </div>
        ),
    }),
    multilineBoxWithDnD(),
)(MultilineBox);

const Demo = () => (
    <FormProvider>
        <ComplexMultilineBox
            id="multiline-box-complex-id"
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
