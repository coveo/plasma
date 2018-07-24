import * as React from 'react';
import {CollapsibleConnected} from '../CollapsibleContainerConnected';

export const CollapsibleExamples = () =>
    <div className='mt2'>
        <div className='form-group'>
            <label className='form-control-label'>Basic collapsible</label>
            <div className='form-control'>
                <CollapsibleConnected
                    id='collapsible-example-1'
                    className='bg-white'
                    headerContent={
                        <h3 className='p2'>Collapsible header</h3>
                    }
                >
                    Collapsible content
                </CollapsibleConnected>
            </div>
        </div>
    </div>;
