import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

// Docs for the component: https://react-components.buildo.io/#textareaautosize

export const TextareaAutosizeExamples = (): JSX.Element =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>TextAreaConnected List</h1>
        <div className='mt2'>
            <div className='form-group'>
                <label className='form-control-label'>Default textarea autosize empty</label>
                <div className='form-control'>
                    <TextareaAutosize />
                </div>
            </div>
            <div className='form-group'>
                <label className='form-control-label'>Textarea with a placeholder</label>
                <div className='form-control'>
                    <TextareaAutosize
                        placeholder='Try to enter a lot of text here'
                    />
                </div>
            </div>
            <div className='form-group'>
                <label className='form-control-label'>Textarea with a default value</label>
                <div className='form-control'>
                    <TextareaAutosize
                        defaultValue='this is the default value'
                    />
                </div>
            </div>
        </div>
    </div>;
