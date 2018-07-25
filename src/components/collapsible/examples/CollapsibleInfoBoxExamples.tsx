import * as React from 'react';
import {CollapsibleInfoBox} from '../CollapsibleInfoBox';

export const CollapsibleInfoBoxExamples = () =>
    <div className='mt2'>
        <div className='form-group'>
            <label className='form-control-label'>Collapsible information box</label>
            <div className='form-control'>
                <CollapsibleInfoBox
                    id='collapsible-info-box-example-1'
                    title='Lean more about collapsible info boxes.'
                >
                    Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </div>
        </div>
    </div>;
