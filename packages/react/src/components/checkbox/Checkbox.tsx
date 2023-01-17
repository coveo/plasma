import classNames from 'clsx';
import {MouseEvent, Children, useRef, FunctionComponent, useEffect, PropsWithChildren} from 'react';
import {IInputProps, Input} from '../input/Input';
import {CheckboxContext} from './CheckboxContext';

export interface ICheckboxOwnProps {
    /**
     * A callback function that gets executed after the checkbox is clicked
     *
     * @param wasChecked Whether the checkbox was checked before it got toggled
     */
    handleOnClick?: (wasChecked: boolean) => void;
    /**
     * Makes the checkbox stand on its own line
     */
    clearSides?: boolean;
    /**
     * The id of the element that gives a label to this checkbox. Not needed when using the Label component in the checkbox's children.
     */
    'aria-labelledby'?: string;
}

export interface ICheckboxStateProps {
    /**
     * Whether the checkbox is disabled initially. Only useful with connected checkboxes because their disabled state is managed by the PlasmaState.
     */
    defaultDisabled?: boolean;
}

export interface ICheckboxProps extends ICheckboxOwnProps, ICheckboxStateProps, IInputProps {}

/**
 * @deprecated Use Mantine Checkbox instead: https://mantine.dev/core/checkbox/
 */
export const Checkbox: FunctionComponent<PropsWithChildren<ICheckboxProps>> = ({
    id,
    disabled,
    disabledTooltip,
    onClick,
    handleOnClick,
    checked,
    clearSides,
    children,
    indeterminate,
    classes,
    innerInputClasses,
    'aria-labelledby': labelledBy,
    ...attributes
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const updateIndeterminate = () => {
        if (ref?.current) {
            const inputElements = ref.current?.getElementsByTagName('input');
            if (inputElements.length) {
                inputElements[0].indeterminate = !!indeterminate;
            }
        }
    };

    useEffect(() => {
        updateIndeterminate();
    });

    const onToggle = (e: MouseEvent<HTMLElement>) => {
        if (!disabled) {
            if (onClick) {
                e.preventDefault();
                e.stopPropagation();
                onClick(e);
            }
            if (handleOnClick) {
                handleOnClick(checked);
            }
        }
    };

    const hasChildren = Children.count(children) > 0;
    const labelId = hasChildren && id ? `checkbox-${id}` : labelledBy;
    return (
        <Input
            {...attributes}
            id={id}
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            checked={checked}
            classes={[
                classNames('checkbox checkbox-label', {disabled: !!disabled, 'checkbox-clear': clearSides}, classes),
            ]}
            innerInputClasses={[
                classNames({'checkbox checkbox-label': !!disabledTooltip}, 'react-vapor-checkbox', innerInputClasses),
            ]}
            type="checkbox"
            onClick={onToggle}
            readOnly
            tooltipClasses={disabledTooltip ? 'flex center-align' : null}
            wrapperRef={ref}
        >
            <button
                type="button"
                role="checkbox"
                aria-checked={checked}
                aria-labelledby={labelId}
                tabIndex={0}
                disabled={!!disabled}
            />
            <CheckboxContext.Provider value={{labelId}}>{children}</CheckboxContext.Provider>
        </Input>
    );
};
