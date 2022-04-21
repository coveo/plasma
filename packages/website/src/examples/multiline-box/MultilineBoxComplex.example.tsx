import * as React from 'react';
import {compose} from 'redux';
import {
    FormProvider,
    MultilineBox,
    IButtonProps,
    IMultilineSingleBoxProps,
    IMultilineParentProps,
    TextInput,
    defaultMultilineBoxRemoveButtonClasses,
    multilineBoxWithRemoveButton,
    multilineBoxWithDnD,
    multilineBoxContainer,
} from '@coveord/plasma-react';
import {DragAndDropSize16Px} from '@coveord/plasma-react-icons';

interface MyData {
    name: string;
}

const containerNodeExample = (child: React.ReactNode, data: Array<IMultilineSingleBoxProps<MyData>>, index: number) => (
    <div key={`${data[index].id}Container`} className="p1">
        {child}
    </div>
);

const ComplexMultilineBox = compose(
    multilineBoxWithDnD({
        DnDContainerProps: {
            draggableContainerProps: {
                className: 'inline-flex center-align',
            },
            icon: <DragAndDropSize16Px className="mb2 mr1" />,
        },
    }),
    multilineBoxWithRemoveButton({
        containerNode: (
            child: React.ReactNode,
            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode
        ) => (
            <div className="inline-flex center-align">
                {child}
                {getRemoveButton({
                    classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto mb2'],
                })}
            </div>
        ),
    }),
    multilineBoxContainer({
        containerNode: containerNodeExample,
    })
)(MultilineBox);

export default () => (
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
                        onBlur={(evt: React.FocusEvent<HTMLInputElement>) => {
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
