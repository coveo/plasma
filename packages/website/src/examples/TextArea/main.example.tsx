import {Label, TextArea} from '@coveord/plasma-react';
import * as React from 'react';

export default () => {
    const [value, setValue] = React.useState('');

    return (
        <div className="input-field">
            <TextArea
                id="textarea-1"
                value={value}
                validationMessage="Cannot be empty."
                validate={(val) => !!val.trim()}
                onChange={(e) => setValue(e.currentTarget.value)}
                additionalAttributes={{required: true}}
                isAutosize
            >
                <Label htmlFor="textarea-1">Label</Label>
            </TextArea>
        </div>
    );
};
