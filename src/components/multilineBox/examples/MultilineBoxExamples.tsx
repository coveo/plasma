import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {InputConnected} from '../../input/InputConnected';
import {multilineBoxContainer} from '../hoc/MultilineBoxContainer';
import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {multilineBoxWithRemoveButton} from '../hoc/MultilineBoxWithRemoveButton';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';

type IExampleData = IMultilineSingleBoxProps<IMultilineBoxExamplesProps>;

export interface IMultilineBoxExamplesProps {
    name: string;
    displayName: string;
}

const MultilineBoxWithContainer = _.compose(
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'mod-border p1',
            },
        },
    }),
)(MultilineBox);

const MultilineBoxWithRemoveButton = _.compose(
    multilineBoxWithRemoveButton(),
)(MultilineBox);

const MultilineBoxWithContainerAndRemoveButton = _.compose(
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'p1',
            },
        },
    }),
)(MultilineBox);

const MultilineBoxWithContainerAndTwoRemoveButton = _.compose(
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'mod-border p1',
            },
        },
    }),
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'mod-border p1',
            },
        },
    }),
)(MultilineBox);

const MultilineBoxWithDragAndDrop = _.compose(
    multilineBoxWithDnD(),
)(MultilineBox);

const ComplexMultilineBox = _.compose(
    multilineBoxWithRemoveButton(),
    multilineBoxWithDnD(),
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'mod-border p1',
            },
        },
    }),
)(MultilineBox);

const ComplexMultilineBox2 = _.compose(
    multilineBoxWithDnD({
        DnDContainerProps: {
            draggableContainerElement: {
                tag: 'div',
                props: {
                    className: 'inline-flex center-align',
                },
            },
        },
        nativeTagDnDWrapper: {
            tag: 'div',
            props: {
                className: 'inline-flex',
            },
        },
    }),
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        container: {
            tag: 'div',
            props: {
                className: 'mod-border p1',
            },
        },
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
                        Multiline box with default values
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
                            name: 'Patate',
                            displayName: 'Pasdfsa',
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
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
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
                        Multiline box with a button to remove the box
                    </label>
                    <MultilineBoxWithRemoveButton<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with a button to remove the box
                    </label>
                    <MultilineBoxWithContainerAndRemoveButton<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                        defaultProp={{
                            name: 'Patate',
                            displayName: 'Pasdfsa',
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with 2 containers to wrap a remove button
                    </label>
                    <MultilineBoxWithContainerAndTwoRemoveButton<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with drag and drop
                    </label>
                    <MultilineBoxWithDragAndDrop<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Complex multiline box hoc
                    </label>
                    <ComplexMultilineBox<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Complex multiline box hoc without icon when dragging
                    </label>
                    <ComplexMultilineBox2<IMultilineBoxExamplesProps>
                        id={UUID.generate()}
                        data={[{
                            name: 'Poire',
                            displayName: 'Pear',
                        }]}
                        renderBody={(data: IExampleData[], defaultProps: IMultilineParentProps) =>
                            _.map(data, (cData: IExampleData) => (
                                <React.Fragment key={cData.id}>
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
                                </React.Fragment>
                            ),
                            )
                        }
                    />
                </div>
            </div>
        );
    }
}
