import {FormProvider, InputValidator, TextInput} from '@coveord/plasma-react';

const nonEmptyValidation: InputValidator = (value: string) => {
    const isEmpty = !value;
    const isWhiteSpace = !isEmpty && !value.trim();

    if (isWhiteSpace) {
        return {status: 'warning', message: 'A white space is not empty, but is not ideal.'};
    }

    if (isEmpty) {
        return {status: 'invalid', message: 'Cannot be empty.'};
    }

    return {status: 'valid'};
};

export default () => (
    <FormProvider>
        <TextInput
            required
            showValidationOnBlur
            validate={nonEmptyValidation}
            type="text"
            label="Label"
            title="Title"
            description="Description"
            helpText="Help text"
            tooltip="Tooltip"
        />
    </FormProvider>
);
