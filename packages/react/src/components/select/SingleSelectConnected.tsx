import {svg} from '@coveord/plasma-style';
import classNames from 'classnames';
import {ReactNode, ComponentType, FunctionComponent, MouseEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {TooltipPlacement} from '../../utils';
import {getReactNodeTextContent} from '../../utils/JSXUtils';
import {IDispatch} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
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
}

const selectPropsKeys = [
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
];

export type ISingleSelectProps = ISingleSelectOwnProps;

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

    useEffect(() => {
        if (selectedOption) {
            props.onSelectOptionCallback?.(selectedOption);
        }
    }, [selectedOption]);

    const Toggle: FunctionComponent<ISelectButtonProps> = ({onClick, onKeyDown, onKeyUp, selectedOptions, isOpen}) => {
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
                {getSelectedOptionElement(option)}
                {option?.append ? <Content {...option.append} /> : null}
                <Svg
                    svgName={isOpen ? svg.chartUp.name : svg.chartDown.name}
                    svgClass={classNames('icon dropdown-toggle-arrow-size', {
                        'dropdown-toggle-arrow-style': !showClear,
                    })}
                />
                {showClear && getDeselectOptionButton()}
            </button>
        );
    };

    const getSelectedOptionElement = (option: IItemBoxProps): JSX.Element => {
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

    const getDeselectOptionButton = () => (
        <Tooltip title={deselectTooltipText} placement={TooltipPlacement.Top} noSpanWrapper>
            <Svg
                svgName={svg.clear.name}
                svgClass="icon mod-12"
                className="btn-append center-align"
                onClick={handleDeselect}
            />
        </Tooltip>
    );

    const handleDeselect = (e: MouseEvent) => {
        e.stopPropagation();
        if (!props.disabled) {
            dispatch(clearListBoxOption(props.id));
        }
    };

    return (
        <SelectConnected
            {..._.pick(props, selectPropsKeys)}
            button={props.customButton ?? Toggle}
            isLoading={props.isLoading}
        >
            {props.children}
        </SelectConnected>
    );
};
