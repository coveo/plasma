import * as React from 'react';
import {findWhere} from 'underscore';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {TextAreaConnected} from '../TextArea';
import {setDisabledTextArea} from '../TextAreaActions';
import {TextAreaLabel} from '../TextAreaLabel';

export const TextAreaExamples = (): JSX.Element =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>TextAreaConnected List</h1>
        <div className='mt2'>
            <div className='form-group'>
                <TextAreaConnected
                    id='super-textarea'
                    className='admin-invisible-textbox mod-border'
                    additionalAttributes={{
                        placeholder: 'I am a simple text area',
                    }}
                />
            </div>
            <div className='form-group'>
                <TextAreaConnected
                    id='awesome-textarea-2'
                    className='admin-invisible-textbox mod-border'
                    additionalAttributes={{
                        placeholder: 'I am a simple text area',
                    }}
                    valueOnMount='I have a non empty value on mount'
                />
            </div>
            <div className='form-group'>
                <TextAreaConnected
                    id='super-textarea-3'
                    className='admin-invisible-textbox mod-border'
                    additionalAttributes={{
                        placeholder: 'I am a simple text area',
                    }}
                    valueOnMount='I am disabled on mount, enable me!'
                    disabledOnMount
                />
                <button
                    className='mb2 block'
                    onClick={() => {
                        ReactVaporStore.dispatch(setDisabledTextArea(
                            'super-textarea-3',
                            !findWhere(ReactVaporStore.getState().textAreas, {id: 'super-textarea-3'}).disabled,
                        ));
                    }}>
                    Toggle TextArea disabled state
                </button>
            </div>
            <div className='form-group'>
                <TextAreaLabel label='simple text area with label'>
                    <TextAreaConnected
                        id='super-textarea-4'
                    />
                </TextAreaLabel>
            </div>
            <div className='form-group'>
                <label className='form-control-label'>Default textarea autosize empty</label>
                <div className='form-control'>
                    <TextAreaConnected
                        id='super-textarea-5'
                        isAutosize
                    />
                </div>
            </div>
            <div className='form-group'>
                <label className='form-control-label'>Textarea with a placeholder</label>
                <div className='form-control'>
                    <TextAreaConnected
                        id='super-textarea-6'
                        autosizeProps={{placeholder: 'Try to enter a lot of text here'}}
                        isAutosize
                    />
                </div>
            </div>
            <div className='form-group'>
                <label className='form-control-label'>Textarea with a default value</label>
                <div className='form-control'>
                    <TextAreaConnected
                        id='super-textarea-7'
                        valueOnMount='this is the default value'
                        isAutosize
                    />
                </div>
            </div>
        </div>
    </div>;
