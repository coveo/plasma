import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {Button} from '../../button/Button';
import {InputConnected} from '../../input/InputConnected';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';

export type IExampleData = IMultilineSingleBoxProps<IMultilineBoxExamplesProps>;

export interface IMultilineBoxExamplesProps {
    name: string;
    displayName: string;
}

export class WrapperExample extends React.Component<{}, {id: string, data: IMultilineBoxExamplesProps[]}> {

    constructor(props: any, state: any) {
        super(props, state);

        this.state = {
            id: UUID.generate(),
            data: [{
                name: 'Pear',
                displayName: 'Paris',
            }],
        };
    }

    render() {
        return (
            <>
                <div className='my2'>
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
                                    classes='mt0 inline-block mx1'
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
                                    classes='mt0 inline-block mx1'
                                    defaultValue={cData.props.displayName}
                                />
                            </div>
                        ),
                        )
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
