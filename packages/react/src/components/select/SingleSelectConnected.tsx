import {CrossSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {ComponentType, FunctionComponent, MouseEvent, ReactNode, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {TooltipPlacement} from '../../utils';
import {getReactNodeTextContent} from '../../utils/JSXUtils';
import {IDispatch, IReduxAction} from '../../utils/ReduxUtils';
import {CollapsibleToggle} from '../collapsible';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxPayload, clearListBoxOption} from '../listBox/ListBoxActions';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectPayload} from './SelectActions';
import {ISelectButtonProps, ISelectOwnProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';

export interface ISingleSelectOwnProps extends Omit<ISelectOwnProps, 'button' | 'multi'> {
    /**
     * A callback function executed after the selected item changes
     *
     * @param option The selected item value
     */
    onSelectOptionCallback?: (option: string) => void;
    /**
     * Content to display in the toggle button, before the selected option
     */
    buttonPrepend?: ReactNode;
    /**
     * If true, the dropdown content can have a width that is larger than the button
     */
    noFixedWidth?: boolean;
    /**
     * Whether a selected item can be unselected
     */
    canClear?: boolean;
    /**
     * The text that appears when hovering over the button to unselect an item
     */
    deselectTooltipText?: string;
    /**
     * A component to render instead of the default button. The button is what is displayed when the dropdown is not opened and used to open it.
     */
    customButton?: ComponentType<ISelectButtonProps>;
    addSelect?: () => IReduxAction<ISelectPayload>;
    removeSelect?: () => IReduxAction<ISelectPayload>;
    toggleDropdown?: () => IReduxAction<ISelectPayload>;
    selectValue?: (value: string, isMulti: boolean, index?: number) => void;
    setActive?: (diff: number) => IReduxAction<IListBoxPayload>;
    selectedValues?: string[];
    isOpened?: boolean;
    active?: number;
}

export type ISingleSelectProps = ISingleSelectOwnProps;

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const SingleSelectConnected: FunctionComponent<ISingleSelectProps> = ({
    placeholder = 'Select an option',
    deselectTooltipText = 'Deselect',
    ...props
}) => {
    const dispatch: IDispatch = useDispatch();

    const {customSelected, defaultSelected} = useSelector((state: PlasmaState) => ({
        customSelected: SelectSelector.getListState(state, props),
        defaultSelected: SelectSelector.getListBoxSelected(state, props)[0],
    }));

    const selectedOption = customSelected.length ? customSelected[customSelected.length - 1] : defaultSelected;

    const handleDeselect = (e: MouseEvent) => {
        e.stopPropagation();
        if (!props.disabled) {
            dispatch(clearListBoxOption(props.id));
        }
    };

    useEffect(() => {
        if (selectedOption) {
            props.onSelectOptionCallback?.(selectedOption);
        }
    }, [selectedOption]);

    const Toggle: FunctionComponent<ISelectButtonProps> = useMemo(
        () =>
            ({onClick, onKeyDown, onKeyUp, selectedOptions, isOpen}) => {
                const option = selectedOptions[0];
                const showClear = !!option && props.canClear && !props.disabled;
                const buttonClasses = classNames('btn dropdown-toggle', props.toggleClasses, {
                    'dropdown-toggle-placeholder': !option,
                    'single-select-fixed-width': !props.noFixedWidth,
                    'mod-append': showClear,
                });

                return (
                    <button
                        className={buttonClasses}
                        type="button"
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        disabled={props.disabled}
                    >
                        {props.buttonPrepend}
                        {option?.prepend ? <Content {...option.prepend} /> : null}
                        <SelectedOption option={option} placeholder={placeholder} />
                        {option?.append ? <Content {...option.append} /> : null}
                        <CollapsibleToggle expanded={isOpen} />
                        {showClear && (
                            <Tooltip title={deselectTooltipText} placement={TooltipPlacement.Top} noSpanWrapper>
                                <button onClick={handleDeselect} className="btn-append cursor-pointer">
                                    <CrossSize16Px height={16} />
                                </button>
                            </Tooltip>
                        )}
                    </button>
                );
            },
        [props.canClear, props.disabled, props.toggleClasses, props.noFixedWidth, props.buttonPrepend],
    );

    return (
        <SelectConnected
            {..._.pick(
                props,
                'button',
                'classes',
                'disabled',
                'dropClasses',
                'dropOption',
                'footer',
                'hasFocusableChild',
                'id',
                'isLoading',
                'items',
                'noActive',
                'noResultItem',
                'onUpdate',
                'placeholder',
                'selectClasses',
                'toggleClasses',
                'wrapItems',
                'addSelect',
                'removeSelect',
                'toggleDropdown',
                'setActive',
                'selectValue',
                'selectedValues',
                'isOpened',
                'active',
            )}
            placeholder={placeholder}
            button={props.customButton ?? Toggle}
            isLoading={props.isLoading}
        >
            {props.children}
        </SelectConnected>
    );
};

const SelectedOption: FunctionComponent<{placeholder: string; option: IItemBoxProps}> = ({
    option,
    placeholder,
}): JSX.Element => {
    if (option) {
        const displayValue =
            option.selectedDisplayValue || getReactNodeTextContent(option.displayValue) || option.value;
        return (
            <span
                key={option.value}
                className="dropdown-selected-value flex-auto left-align"
                data-value={option.value}
                title={displayValue}
            >
                {displayValue}
            </span>
        );
    }

    return <span className="dropdown-no-value">{placeholder}</span>;
};
