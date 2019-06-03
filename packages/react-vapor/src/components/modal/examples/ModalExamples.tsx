import * as React from 'react';
import {ActionableItem} from '../../actionable-item/ActionableItem';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {Modal} from '../Modal';
import {ModalBackdrop} from '../ModalBackdrop';
import {ModalBody} from '../ModalBody';
import {ModalFooter} from '../ModalFooter';
import {ModalHeader} from '../ModalHeader';

export interface IModalExamplesState {
    isOpened: boolean;
}

export class ModalExamples extends React.Component<any, IModalExamplesState> {

    constructor(props: any) {
        super(props);
        this.state = {isOpened: false};
    }

    openModal() {
        this.setState({isOpened: true});
    }

    closeModal() {
        this.setState({isOpened: false});
    }

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Modal</label>
                    <div>
                        <button className='btn' onClick={() => {this.openModal();}}>Open Modal</button>
                        <Modal id='modal1' isOpened={this.state.isOpened}>
                            <ModalHeader title='Simple Modal' onClose={() => this.closeModal()}>
                                <Tooltip title='I am a tooltip'>
                                    <Svg svgName='help' className='icon mod-2x ml1' svgClass='fill-orange' />
                                </Tooltip>
                            </ModalHeader>
                            <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                                Modal content
                                <ActionableItem actions={[{value: 'hello', onOptionClick: () => 1}]}>hello</ActionableItem>
                            </ModalBody>
                            <ModalFooter>
                                <button className='btn' onClick={() => this.closeModal()}>Close</button>
                            </ModalFooter>
                        </Modal>
                        <ModalBackdrop display={this.state.isOpened} onClick={() => this.closeModal()} />
                    </div>
                </div>
            </div>
        );
    }
}
