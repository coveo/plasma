import * as React from 'react';
import {CollapsibleInfoBox} from '../CollapsibleInfoBox';

export const CollapsibleInfoBoxExamples = () => (
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

        <div className='form-group'>
            <label className='form-control-label'>Collapsible information box for a page section</label>
            <div className='form-control'>
                <CollapsibleInfoBox
                    id='collapsible-info-box-example-2'
                    title='Section A'
                    sectionAdditionalContent={<span style={{position: 'relative', top: '8px', marginLeft: '20px'}}>Add anything here</span>}
                    isSection
                >
                    Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </div>
        </div>

        <div className='form-group'>
            <label className='form-control-label'>Collapsible information box for a page section with additional information only showing if the minute is even</label>
            <div className='form-control'>
                <CollapsibleInfoBox
                    id='collapsible-info-box-example-2'
                    title='Section A'
                    sectionAdditionalContent={<span style={{position: 'relative', top: '8px', marginLeft: '20px'}}>Add anything here</span>}
                    sectionAdditionalContentCondition={() => !(new Date().getMinutes() % 2)}
                    isSection
                >
                    Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </div>
        </div>
    </div>
);
