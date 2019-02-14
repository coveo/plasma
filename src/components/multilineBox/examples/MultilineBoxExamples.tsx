import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {InputConnected} from '../../input/InputConnected';
import {multilineBoxContainer} from '../hoc/MultilineBoxContainer';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';

type IExampleData = IMultilineSingleBoxProps<IMultilineBoxExamplesProps>;

export interface IMultilineBoxExamplesProps {
    name: string;
    displayName: string;
}

const MultilineBoxWithContainer = _.compose(
    multilineBoxContainer({
        containerNode: (child: React.ReactNode, data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>, index: number) =>
            (
                <div
                    key={`${data[index].id}Container`}
                    className={'mod-border p1'}
                >
                    {child}
                </div>
            ),
    }),
)(MultilineBox);

export class MultilineBoxExamples extends React.PureComponent {
    render() {
        return (
            <div className='my2'>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with initial data
                    </label>
                    <MultilineBox<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
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
                        defaultProp={{
                            name: '',
                            displayName: '',
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with a container
                    </label>
                    <MultilineBoxWithContainer<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
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
                        defaultProp={{
                            name: '',
                            displayName: '',
                        }}
                    />
                </div>
            </div>
        );
    }
}
