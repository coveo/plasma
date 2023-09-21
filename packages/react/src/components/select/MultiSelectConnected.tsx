import {CrossSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {ComponentType, CSSProperties, PureComponent, ReactNode} from 'react';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {convertItemsBoxToStringList, convertStringListToItemsBox} from '../../reusableState';
import {IDispatch, IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {CollapsibleToggle} from '../collapsible';
import {Sortable} from '../dragAndDrop';
import {DraggableSelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';
import {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {
    clearListBoxOption,
    IListBoxPayload,
    reorderListBoxOption,
    unselectListBoxOption,
} from '../listBox/ListBoxActions';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectPayload} from './SelectActions';
import {ISelectButtonProps, ISelectOwnProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';

export interface IMultiSelectOwnProps extends Omit<ISelectOwnProps, 'button' | 'multi'> {
    /**
     * The text displayed in the multi select box when no items are selected
     *
     * @default "No selected option"
     */
    emptyPlaceholder?: string;
    /**
     * The text displayed when hovering over the deselect all button
     *
     * @default "Deselect All"
     */
    deselectAllTooltipText?: string;
    /**
     * Whether the selected items can be reordered using drag-and-drop
     *
     * @default false
     */
    sortable?: boolean;
    /**
     * Setting this to true allows to open the dropdown even if all the items are selected. It is useful if adding custom values is allowed.
     *
     * @default false
     */
    noDisabled?: boolean;
    /**
     * Additional CSS inline style to add on the multiselect container
     *
     * @default {}
     */
    multiSelectStyle?: CSSProperties;
    /**
     * Whether the multiselect is in read only mode. When in read only mode, only the selected option are displayed, greyed out.
     */
    readOnly?: boolean;
    addSelect?: () => IReduxAction<ISelectPayload>;
    removeSelect?: () => IReduxAction<ISelectPayload>;
    toggleDropdown?: () => IReduxAction<ISelectPayload>;
    selectValue?: (value: string, isMulti: boolean, index?: number) => void;
    setActive?: (diff: number) => IReduxAction<IListBoxPayload>;
    selectedValues?: string[];
    isOpened?: boolean;
    active?: number;
}

export interface IMultiSelectProps
    extends IMultiSelectOwnProps,
        ReturnType<ReturnType<typeof makeMapStateToProps>>,
        ReturnType<typeof mapDispatchToProps> {}

const makeMapStateToProps = () =>
    createStructuredSelector({
        selected: SelectSelector.getMultiSelectSelectedValues,
    });

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultiSelectOwnProps) => ({
    onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),
    onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),
    onReorder: (values: string[]) => dispatch(reorderListBoxOption(ownProps.id, values)),
});

/**
 * @deprecated Use Mantine MultiSelect instead: https://mantine.dev/core/multi-select/
 */
@ReduxConnect(makeMapStateToProps, mapDispatchToProps)
class MultiSelect extends PureComponent<IMultiSelectProps & {connectDropTarget: any}> {
    static defaultProps: Partial<IMultiSelectProps> = {
        placeholder: 'Select an option',
        emptyPlaceholder: 'No selected option',
        deselectAllTooltipText: 'Deselect All',
        sortable: false,
        noDisabled: false,
        multiSelectStyle: {},
    };

    render() {
        return (
            <SelectConnected
                id={this.props.id}
                key={this.props.id}
                {..._.pick(
                    this.props,
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
                button={this.Toggle}
                multi
            >
                {this.props.children}
            </SelectConnected>
        );
    }

    private getSelectedOptionComponents(): ReactNode {
        const selected = this.getSelectedOptions();

        if (selected.length) {
            return this.props.sortable ? (
                <Sortable items={this.props.selected} onReorder={this.props.onReorder}>
                    {selected.map(this.renderDraggableOption)}
                </Sortable>
            ) : (
                selected.map(this.renderOption)
            );
        }
        return <span className="multiselect-empty">{this.props.emptyPlaceholder}</span>;
    }

    private renderOption = (item: IItemBoxProps): JSX.Element => {
        const displayValue = item.selectedDisplayValue ?? item.displayValue ?? item.value;
        return (
            <SelectedOption
                label={displayValue}
                selectedTooltip={item.selectedTooltip}
                value={item.value}
                key={item.value}
                onRemoveClick={() => this.props.onRemoveClick(item)}
                readOnly={this.props.readOnly}
            >
                {displayValue}
            </SelectedOption>
        );
    };

    private renderDraggableOption = (item: IItemBoxProps, index: number): JSX.Element => (
        <div
            className={classNames('flex flex-row flex-center sortable-selected-option', {
                readOnly: this.props.readOnly,
            })}
            key={item.value}
        >
            <span className="mr1">{index + 1}</span>
            <DraggableSelectedOption
                parentId={this.props.id}
                label={item.selectedDisplayValue ?? item.displayValue ?? item.value}
                selectedTooltip={item.selectedTooltip}
                value={item.value}
                onRemoveClick={() => this.props.onRemoveClick(item)}
                readOnly={this.props.readOnly}
                onMoveOver={() => null}
            />
        </div>
    );

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        return this.getSelectedOptions().length > 1 && !this.props.readOnly ? (
            <Tooltip title={this.props.deselectAllTooltipText} placement="top" noSpanWrapper>
                <button
                    className="remove-all-selected-options ml1"
                    onClick={() => this.props.onRemoveAll()}
                    aria-label={this.props.deselectAllTooltipText}
                >
                    <CrossSize16Px height={16} />
                </button>
            </Tooltip>
        ) : null;
    }

    private Toggle = ({onClick, onKeyDown, onKeyUp, isOpen}: ISelectButtonProps): JSX.Element => {
        const classes = classNames('multiselect-input', {
            'mod-sortable': this.props.sortable,
        });
        const buttonAttrs =
            !this.props.noDisabled && (this.props.selected?.length ?? 0) === (this.props.items?.length ?? 0)
                ? {disabled: true}
                : {disabled: this.props.disabled};
        const buttonClasses = classNames(
            'btn dropdown-toggle multiselect-add dropdown-toggle-placeholder space-between',
            this.props.toggleClasses,
        );
        return (
            <div className={classes} style={this.props.multiSelectStyle}>
                <div className="multiselect-selected flex flex-center flex-auto full-content">
                    <div
                        className={classNames('selected-options-container truncate', {
                            readOnly: this.props.readOnly,
                        })}
                        role="list"
                    >
                        {this.getSelectedOptionComponents()}
                    </div>
                    {this.getRemoveAllSelectedOptionsButton()}
                </div>

                {!this.props.readOnly && (
                    <button
                        className={buttonClasses}
                        type="button"
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onClick={onClick}
                        {...buttonAttrs}
                    >
                        <span className="dropdown-no-value">{this.props.placeholder}</span>
                        <CollapsibleToggle expanded={isOpen} />
                    </button>
                )}
            </div>
        );
    };

    private getSelectedOptions(): IItemBoxProps[] {
        if (this.props.sortable) {
            return _.chain(this.props.selected)
                .map((selected: string) => _.findWhere(this.props.items, {value: selected}))
                .compact()
                .value();
        }

        const selectedItemsWithoutCustom: IItemBoxProps[] =
            this.props.items?.filter((option: IItemBoxProps) => _.contains(this.props.selected, option.value)) ?? [];
        const selectedItemsWithoutCustomItems: string[] = convertItemsBoxToStringList(selectedItemsWithoutCustom);
        const customItemsValues: string[] = _.difference(this.props.selected, selectedItemsWithoutCustomItems);
        const customItems: IItemBoxProps[] = convertStringListToItemsBox(customItemsValues);
        const selectedItems: IItemBoxProps[] = selectedItemsWithoutCustom.concat(customItems);

        return selectedItems;
    }
}

/**
 * @deprecated Use Mantine instead
 */
export const MultiSelectConnected: ComponentType<IMultiSelectOwnProps> = MultiSelect;
