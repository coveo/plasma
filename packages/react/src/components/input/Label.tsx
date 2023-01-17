import classNames from 'clsx';
import {HTMLProps, FunctionComponent, useContext, PropsWithChildren} from 'react';
import {CheckboxContext, CheckboxContextProps} from '../checkbox/CheckboxContext';

export interface ILabelProps {
    type?: string;
    classes?: string[];
    validMessage?: string;
    invalidMessage?: string;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const Label: FunctionComponent<PropsWithChildren<ILabelProps & HTMLProps<HTMLLabelElement>>> = ({
    classes,
    validMessage,
    invalidMessage,
    children,
    ...attributes
}) => {
    const {labelId} = useContext<CheckboxContextProps>(CheckboxContext);
    return (
        <label
            className={classNames(classes)}
            data-valid-message={validMessage}
            data-invalid-message={invalidMessage}
            id={labelId}
            {...attributes}
        >
            {children}
        </label>
    );
};
