import * as React from 'react';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ModalComposite} from '../ModalComposite';

export interface IModalExamplesState {
    isOpened: boolean;
}

export class ModalCompositeExamples extends React.Component<{}, IModalExamplesState> {

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
                    <label className='form-control-label'>Modal Composite (initialize a modal with just one component)</label>
                    <div>
                        <button className='btn' onClick={() => this.openModal()}>Open Modal</button>
                        <ModalComposite
                            id='modal-composite'
                            isOpened={this.state.isOpened}
                            title='Modal composite'
                            onClose={() => this.closeModal()}
                            modalHeaderChildren={<Tooltip title='A tooltip for the title'><Svg svgName='help' className='icon mod-2x ml1' svgClass='fill-orange' /></Tooltip>}
                            modalBodyChildren='The content of the modal'
                            modalFooterChildren={<button className='btn' onClick={() => this.closeModal()}>Close</button>}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
