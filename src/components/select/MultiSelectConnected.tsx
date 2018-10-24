import * as classNames from 'classnames';
import * as React from 'react';
import {DragDropContext, DropTarget, IDropTargetProps} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DraggableSelectedOption, DraggableSelectedOptionType} from '../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';
import {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption, reorderListBoxOption, unselectListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';

export interface IMultiSelectOwnProps extends ISelectProps, IDropTargetProps {
    placeholder?: string;
    emptyPlaceholder?: string;
    deselectAllTooltipText?: string;
    sortable?: boolean;
}

export interface IMultiSelectStateProps {
    selected?: string[];
}

export interface IMultiSelectDispatchProps {
    onRemoveClick?: (item: IItemBoxProps) => void;
    onRemoveAll?: () => void;
    onReorder?: (values: string[]) => void;
}

export interface IMultiSelectProps extends IMultiSelectOwnProps, IMultiSelectStateProps, IMultiSelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultiSelectStateProps => ({
    selected: [...SelectSelector.getListBoxSelected(state, ownProps), ...SelectSelector.getListState(state, ownProps)],
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultiSelectOwnProps): IMultiSelectDispatchProps => ({
    onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),
    onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),
    onReorder: (values: string[]) => dispatch(reorderListBoxOption(ownProps.id, values)),
});

// This object is usefull when the drag happen outside of the DraggableSelectedOption,
// instead of making the child handle it, the parent catches the event
const parentDropTarget = {
    drop: _.noop,
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
@DragDropContext(HTML5Backend)
@DropTarget(DraggableSelectedOptionType, parentDropTarget, (connect: any) => ({
    connectDropTarget: connect.dropTarget(),
}))
export class MultiSelectConnected extends React.Component<IMultiSelectProps, {}> {
    static defaultProps: Partial<IMultiSelectProps> = {
        placeholder: 'Select an option',
        emptyPlaceholder: 'No selected option',
        deselectAllTooltipText: 'Deselect All',
        sortable: false,
    };

    render() {
        return (
            <SelectConnected
                id={this.props.id}
                button={(props: ISelectButtonProps) => this.getButton(props)}
                items={this.props.items}
                noResultItem={this.props.noResultItem}
                multi>
                {this.props.children}
            </SelectConnected>
        );
    }

    private getSelectedOptionComponents(): React.ReactNode {
        const selected = this.getSelectedOptions();

        if (selected.length) {
            return selected.map((item: IItemBoxProps, index: number) => this.props.sortable
                ? this.renderDraggableOption(item, index)
                : this.renderOption(item));
        }
        return <span className='multiselect-empty'>{this.props.emptyPlaceholder}</span>;
    }

    private renderOption(item: IItemBoxProps): JSX.Element {
        return <SelectedOption
            label={item.displayValue || item.value}
            value={item.value}
            key={item.value}
            onRemoveClick={() => this.props.onRemoveClick(item)}
        />;
    }

    private renderDraggableOption(item: IItemBoxProps, index: number): JSX.Element {
        return (
            <div className='flex flex-row flex-center sortable-selected-option'>
                <span className='mr1 text-medium-grey'>{index + 1}</span>
                <DraggableSelectedOption
                    label={item.displayValue || item.value}
                    value={item.value}
                    key={item.value}
                    onRemoveClick={() => this.props.onRemoveClick(item)}
                    index={index}
                    move={(dragIndex: number, hoverIndex: number) => this.move(dragIndex, hoverIndex)}
                />
            </div>
        );
    }

    private move(dragIndex: number, hoverIndex: number) {
        const moving = this.props.selected[dragIndex];
        const newOrder = [...this.props.selected];

        // Remove the element at position dragIndex
        newOrder.splice(dragIndex, 1);

        // Insert the moving element at hoverIndex
        newOrder.splice(hoverIndex, 0, moving);

        this.props.onReorder(newOrder);
    }

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        return this.getSelectedOptions().length > 1
            ? <Tooltip title={this.props.deselectAllTooltipText} placement='top' noSpanWrapper>
                <div className='remove-all-selected-options' onClick={() => this.props.onRemoveAll()}>
                    <Svg svgName='clear' svgClass='icon fill-medium-blue' />
                </div>
            </Tooltip>
            : null;
    }

    private getButton(props: ISelectButtonProps): JSX.Element {
        const classes = classNames('multiselect-input', {'mod-sortable': this.props.sortable});
        const buttonAttrs = this.props.selected && this.props.selected.length === this.props.items.length ? {disabled: true} : {};
        return (
            <div className={classes}>
                {this.props.connectDropTarget(
                    <div className='multiselect-selected flex flex-center flex-auto'>
                        <div className='selected-options-container'>
                            {this.getSelectedOptionComponents()}
                        </div>
                        {this.getRemoveAllSelectedOptionsButton()}
                    </div>,
                )}
                <button
                    className='btn dropdown-toggle multiselect-add dropdown-toggle-placeholder'
                    type='button'
                    onMouseUp={props.onMouseUp}
                    onKeyDown={props.onKeyDown}
                    onKeyUp={props.onKeyUp}
                    {...buttonAttrs}
                >
                    <span className='dropdown-no-value'>{this.props.placeholder}</span>
                    <span className='dropdown-toggle-arrow' />
                </button>
            </div>
        );
    }

    private getSelectedOptions(): IItemBoxProps[] {
        if (this.props.sortable) {
            return _.chain(this.props.selected)
                .map((selected: string) => _.findWhere(this.props.items, {value: selected}))
                .compact()
                .value();
        }

        return this.props.items
            .filter((option: IItemBoxProps) => _.contains(this.props.selected, option.value));
    }
}
