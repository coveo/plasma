import {factory, Select as MantineSelect, SelectFactory} from '@mantine/core';
import {readOnlyInputStyles} from '../ReadOnly/ReadOnlyInputStyles.js';

const ReadOnlySelect = MantineSelect.withProps({styles: readOnlyInputStyles});

export const Select = factory<SelectFactory>((props, ref) => {
    if (props.readOnly && !props.disabled) {
        return <ReadOnlySelect ref={ref} {...props} />;
    }
    return <MantineSelect ref={ref} {...props} />;
});
