import * as React from 'react';
import {Label, setDisabledTextArea, TextAreaConnected} from 'react-vapor';
import {findWhere} from 'underscore';

import {Store} from '../../Store';

export const TextAreaExamples = (): JSX.Element => (
    <div className="mt2">
        <div className="mt2">
            <div className="form-group">
                <TextAreaConnected
                    id="super-textarea"
                    className="admin-invisible-textbox mod-border"
                    additionalAttributes={{
                        placeholder: 'I am a simple text area',
                    }}
                />
            </div>
            <div className="form-group">
                <TextAreaConnected
                    id="awesome-textarea-2"
                    className="admin-invisible-textbox mod-border"
                    additionalAttributes={{
                        placeholder: 'I am a simple text area with validation!',
                    }}
                    valueOnMount="I have a non empty value on mount and should not be empty!"
                    validate={(value: string) => !!value}
                    validationMessage="TextArea should not be empty!"
                    isAutosize
                />
            </div>
            <div className="form-group">
                <TextAreaConnected
                    id="super-textarea-3"
                    className="admin-invisible-textbox mod-border"
                    additionalAttributes={{
                        placeholder: 'I am a simple text area',
                    }}
                    valueOnMount="I am disabled on mount, enable me!"
                    disabledOnMount
                />
                <button
                    className="mb2 block"
                    onClick={() => {
                        Store.dispatch(
                            setDisabledTextArea(
                                'super-textarea-3',
                                !findWhere(Store.getState().textAreas, {id: 'super-textarea-3'}).disabled
                            )
                        );
                    }}
                >
                    Toggle TextArea disabled state
                </button>
            </div>
            <div className="form-group input-field">
                <TextAreaConnected
                    id="super-textarea-4"
                    validate={(value: string) => !!value}
                    validationMessage="TextArea should not be empty!"
                >
                    <Label htmlFor="super-textarea-4"> Simple text area with label </Label>
                </TextAreaConnected>
            </div>
            <div className="form-group">
                <label className="form-control-label">Default textarea autosize empty</label>
                <div className="form-control">
                    <TextAreaConnected id="super-textarea-5" isAutosize />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Textarea with a placeholder</label>
                <div className="form-control">
                    <TextAreaConnected
                        id="super-textarea-6"
                        additionalAttributes={{placeholder: 'Try to enter a lot of text here'}}
                        isAutosize
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Textarea with a default value</label>
                <div className="form-control">
                    <TextAreaConnected id="super-textarea-7" valueOnMount="this is the default value" isAutosize />
                </div>
            </div>
            <div className="form-group input-field validate">
                <TextAreaConnected
                    id="super-textarea-8"
                    isAutosize
                    additionalAttributes={{
                        required: true,
                    }}
                >
                    <Label htmlFor="super-textarea-8">Beautiful Textarea</Label>
                </TextAreaConnected>
            </div>
        </div>
    </div>
);
