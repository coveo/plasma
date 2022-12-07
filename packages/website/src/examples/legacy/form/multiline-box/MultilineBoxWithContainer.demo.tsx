import {ReactNode, FocusEvent} from 'react';
import {compose} from 'redux';
import {
    FormProvider,
    MultilineBox,
    multilineBoxContainer,
    IMultilineSingleBoxProps,
    IMultilineParentProps,
    TextInput,
} from '@coveord/plasma-react';

interface MyData {
    name: string;
}

const containerNode = (child: ReactNode, data: Array<IMultilineSingleBoxProps<MyData>>, index: number) => (
    <div key={`${data[index].id}Container`} className="p2 m1">
        {child}
    </div>
);

const MultilineBoxWithContainer = compose(multilineBoxContainer({containerNode}))(MultilineBox);

export default () => (
    <FormProvider>
        <div className="highlight-padding highlight-margin">
            <MultilineBoxWithContainer
                id="multiline-box-container-id"
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
        </div>
    </FormProvider>
);
