import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {IButtonProps} from '../../button/Button';
import {InputConnected} from '../../input/InputConnected';
import {multilineBoxContainer} from '../hoc/MultilineBoxContainer';
import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {defaultMultilineBoxRemoveButtonClasses, multilineBoxWithRemoveButton} from '../hoc/MultilineBoxWithRemoveButton';
import {IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';
import {IExampleData, IMultilineBoxExamplesProps, WrapperExample} from './MultilineBoxExampleUtils';

const containerNodeExample = (child: React.ReactNode, data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>, index: number) =>
    (
        <div
            key={`${data[index].id}Container`}
            className={'mod-border p1 flex'}
        >
            {child}
        </div>
    );

const containerNodeMaxWidthExample = (child: React.ReactNode, data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>, index: number) =>
    (
        <div
            key={`${data[index].id}Container`}
            className={'mod-border p1 flex'}
            style={{width: '500px', height: '70px'}}
        >
            {child}
        </div>
    );

const MultilineBoxWithDefaultContainer = _.compose(
    multilineBoxContainer(),
)(MultilineBox);

const MultilineBoxWithContainer = _.compose(
    multilineBoxContainer({
        containerNode: containerNodeExample,
    }),
)(MultilineBox);

const DefaultMultilineBoxWithRemoveButton = _.compose(
    multilineBoxWithRemoveButton(),
)(MultilineBox);

const MultilineBoxWithRemoveButton = _.compose(
    multilineBoxWithRemoveButton({
        containerNode: (child: React.ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode) =>
            (
                <>
                    {child}
                    {getRemoveButton({
                        classes: [defaultMultilineBoxRemoveButtonClasses, 'flex-auto full-content-y'],
                    })}
                </>
            ),
    },
    ),
    multilineBoxContainer({
        containerNode: containerNodeMaxWidthExample,
    }),
)(MultilineBox);

const MultilineBoxWithContainerAndTwoRemoveButton = _.compose(
    multilineBoxWithRemoveButton({
        containerNode: (child: React.ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode) =>
            (
                <>
                    {child}
                    {getRemoveButton({
                        classes: [defaultMultilineBoxRemoveButtonClasses, 'bg-light-grey full-content-y'],
                    })}
                </>
            ),
    }),
    multilineBoxContainer({
        containerNode: (child: React.ReactNode, data: Array<IMultilineSingleBoxProps<IMultilineBoxExamplesProps>>, index: number) =>
            (
                <div
                    key={`${data[index].id}Container`}
                    className={'p1 bg-light-grey'}
                >
                    {child}
                </div>
            ),
    }),
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        containerNode: containerNodeExample,
    }),
)(MultilineBox);

const MultilineBoxWithDragAndDrop = _.compose(
    multilineBoxWithDnD(),
)(MultilineBox);

const ComplexMultilineBox = _.compose(
    multilineBoxWithRemoveButton(),
    multilineBoxWithDnD(),
    multilineBoxContainer({
        containerNode: containerNodeExample,
    }),
)(MultilineBox);

const ComplexMultilineBox2 = _.compose(
    multilineBoxWithDnD({
        DnDContainerProps: {
            draggableContainerProps: {
                className: 'inline-flex center-align',
            },
        },
    }),
    multilineBoxWithRemoveButton(),
    multilineBoxContainer({
        containerNode: containerNodeExample,
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
                        defaultProps={{
                            name: '',
                            displayName: '',
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with initial data and a button to update data
                    </label>
                    <WrapperExample />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with a default container
                    </label>
                    <MultilineBoxWithDefaultContainer<IMultilineBoxExamplesProps>
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
                        defaultProps={{
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
                        defaultProps={{
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
                        defaultProps={{
                            name: '',
                            displayName: '',
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Multiline box with a default hoc remove button
                    </label>
                    <DefaultMultilineBoxWithRemoveButton<IMultilineBoxExamplesProps>
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
                        Multiline box with a hoc remove button wrapped in a container to style the button position right
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
                                        validate={(value: string) => {
                                            if (value !== '') {
                                                if (cData.isLast) {
                                                    defaultProps.addNewBox();
                                                }
                                                return true;
                                            }

                                            return false;
                                        }}
                                        labelProps={{invalidMessage: 'Do not leave me empty'}}
                                        validateOnChange
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
