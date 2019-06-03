import * as React from 'react';
import {findWhere} from 'underscore';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {UUID} from '../../../utils/UUID';
import {setDisabledInput, validateInputValue} from '../InputActions';
import {InputConnected} from '../InputConnected';

const validate = (value: any) => !!value;

export const InputConnectedExamples = (): JSX.Element =>
    <div className='mt2'>
        <div className='form-group'>
            <InputConnected
                id='super-input'
                validate={validate}
                labelTitle='I am a connected input, and validated in real time'
                labelProps={{invalidMessage: 'Do not leave me empty'}}
                innerInputClasses='mb2'
                validateOnChange
            />
        </div>
        <div className='form-group'>
            <InputConnected
                id='super-input-2'
                validate={validate}
                labelTitle='I am a disabled connected input'
                labelProps={{invalidMessage: 'Do not leave me empty'}}
                disabledOnMount={true}
                innerInputClasses='mb2'
                defaultValue='I am disabled on mount'
            />
        </div>
        <div className='form-group'>
            <button className='mb2' onClick={() => {
                ReactVaporStore.dispatch(setDisabledInput(
                    'super-input-3',
                    !findWhere(ReactVaporStore.getState().inputs, {id: 'super-input-3'}).disabled,
                ));
            }}>
                Toggle disabled state
          </button>
            <InputConnected
                id='super-input-3'
                validate={validate}
                labelTitle='I am a connected input and you can toggle my disabled state with the button above'
                labelProps={{invalidMessage: 'Do not leave me empty'}}
                defaultValue='awesome disabled feature'
            />
        </div>
        <div className='form-group'>
            <button className='mt2 mb2' onClick={() => {
                ReactVaporStore.dispatch(validateInputValue(
                    'super-input-4',
                    validate(findWhere(ReactVaporStore.getState().inputs, {id: 'super-input-4'}).value),
                ));
            }}>
                Toggle valid state
          </button>
            <InputConnected
                id='super-input-4'
                classes='mt1'
                validate={validate}
                labelTitle='I am a connected input and you can toggle my valid state with the button above'
                labelProps={{invalidMessage: 'Do not leave me empty'}}
                defaultValue=''
            />
        </div>
        <div className='form-group'>
            <InputConnected
                id={UUID.generate()}
                classes='mt1'
                validate={(value: string) => value === ''}
                labelProps={{invalidMessage: 'not empty'}}
                defaultValue='valid only on change'
                validateOnChange
            />
        </div>
    </div>;
