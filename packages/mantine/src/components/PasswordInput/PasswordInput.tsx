import {factory, PasswordInput as MantinePasswordInput, type PasswordInputFactory} from '@mantine/core';
import {readOnlyInputStyles} from '../ReadOnly/ReadOnlyInputStyles.js';

const ReadOnlyPasswordInput = MantinePasswordInput.withProps({styles: readOnlyInputStyles});

export const PasswordInput = factory<PasswordInputFactory>((props, ref) => {
    if (props.readOnly && !props.disabled) {
        return <ReadOnlyPasswordInput ref={ref} {...props} />;
    }
    return <MantinePasswordInput ref={ref} {...props} />;
});
