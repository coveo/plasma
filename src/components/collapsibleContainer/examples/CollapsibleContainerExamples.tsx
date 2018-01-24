import * as React from 'react';
import { CollapsibleContainer } from '../CollapsibleContainer';

export const CollapsibleContainerExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>CollapsibleContainer List</h1>
        <div className='form-group'>
            <label className='form-control-label'>CollapsibleContainer</label>
            <div className='form-control'>
                <CollapsibleContainer title={'hello!'} informationUrl='hey' expanded />
                <CollapsibleContainer title={'hello!'}>hello!</CollapsibleContainer>
            </div>
        </div>
    </div>;
