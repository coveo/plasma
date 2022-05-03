import {Attributes, Component} from 'react';
import {
    Button,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    InputConnected,
    MultilineBox,
    UUID,
} from '@coveord/plasma-react';
import * as _ from 'underscore';

export type IExampleData = IMultilineSingleBoxProps<IMultilineBoxExamplesProps>;

export interface IMultilineBoxExamplesProps {
    name: string;
    displayName: string;
}

export class WrapperExample extends Component<Attributes, {id: string; data: IMultilineBoxExamplesProps[]}> {
    state = {
        id: UUID.generate(),
        data: [
            {
                name: 'Pear',
                displayName: 'Paris',
            },
        ],
    };

    render() {
        return (
            <>
                <div className="my2">
                    <Button
                        name={'Update initial data sent to the multiline box'}
                        onClick={() => {
                            this.setState({
                                data: [
                                    {
                                        name: 'Banana',
                                        displayName: 'Bahamas',
                                    },
                                    {
                                        name: 'Tomato',
                                        displayName: 'Tacoma',
                                    },
                                ],
                            });
                        }}
                    />
                </div>
                <MultilineBox<IMultilineBoxExamplesProps>
                    id={this.state.id}
                    data={this.state.data}
                    renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                        _.map(data, (cData: IExampleData) => (
                            <div key={cData.id}>
                                <InputConnected
                                    id={`${cData.id}1`}
                                    classes="mt0 inline-block mx1"
                                    defaultValue={cData.props.name}
                                    validate={(value: string) => cData.props.name === value}
                                    validateOnChange
                                    onChange={(value: string) => {
                                        if (value !== '' && cData.isLast) {
                                            defaultProps.addNewBox();
                                        }
                                    }}
                                />
                                <InputConnected
                                    id={`${cData.id}2`}
                                    classes="mt0 inline-block mx1"
                                    defaultValue={cData.props.displayName}
                                />
                            </div>
                        ))
                    }
                    defaultProps={{
                        name: '',
                        displayName: '',
                    }}
                />
            </>
        );
    }
}
