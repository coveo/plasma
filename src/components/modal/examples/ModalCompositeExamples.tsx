import * as React from 'react';
import {useState} from 'react';

import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ModalComposite} from '../ModalComposite';

export const ModalCompositeExamples: React.SFC = () => {
    const [isOpened, setOpened] = useState(false);

    return (
        <div className='mt2'>
            <div className='form-group'>
                <label className='form-control-label'>Modal Composite (initialize a modal with just one component)</label>
                <div>
                    <button className='btn' onClick={() => setOpened(true)}>Open Modal</button>
                    <ModalComposite
                        id='modal-composite'
                        isOpened={isOpened}
                        title='Modal composite'
                        onClose={() => setOpened(false)}
                        modalHeaderChildren={(
                            <Tooltip title='A tooltip for the title'>
                                <Svg svgName='help' className='icon mod-2x ml1' svgClass='fill-orange' />
                            </Tooltip>
                        )}
                        modalBodyChildren='The content of the modal'
                        modalFooterChildren={<button className='btn' onClick={() => setOpened(false)}>Close</button>}
                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                    />
                </div>
            </div>
        </div>
    );
};
