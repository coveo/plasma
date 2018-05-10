import * as React from 'react';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption, unselectListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectProps, SelectConnected} from './SelectConnected';

export interface IMultiSelectOwnProps extends ISelectProps {
    placeholder?: string;
    deselectAllTooltipText?: string;
}

export interface IMultiSelectStateProps {
    selected?: string[];
}

export interface IMultiSelectDispatchProps {
    onRemoveClick?: (item: IItemBoxProps) => void;
    onRemoveAll?: () => void;
}

export interface IMultiSelectProps extends IMultiSelectOwnProps, IMultiSelectStateProps, IMultiSelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultiSelectStateProps => {
    const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});
    return {
        selected: listbox && listbox.selected ? listbox.selected : undefined,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultiSelectOwnProps): IMultiSelectDispatchProps => ({
    onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),
    onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MultiSelectConnected extends React.Component<IMultiSelectProps, {}> {
    static defaultProps: Partial<IMultiSelectProps> = {
        placeholder: 'No selected values',
        deselectAllTooltipText: 'Deselect All',
    };

    render() {
        return (
            <SelectConnected
                id={this.props.id}
                button={(props: ISelectButtonProps) => this.getButton(props)}
                items={this.props.items}
                multi>
                {this.props.children}
            </SelectConnected>
        );
    }

    private getSelectedOptionComponents(): JSX.Element | JSX.Element[] {
        const selected = this.getSelectedOptions();

        return selected.length
            ? selected.map((item: IItemBoxProps) => <SelectedOption
                label={item.displayValue || item.value}
                value={item.value}
                key={item.value}
                onRemoveClick={() => this.props.onRemoveClick(item)}
            />)
            : <input placeholder={this.props.placeholder} readOnly />;
    }

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        return this.getSelectedOptions().length
            ? <Tooltip title={this.props.deselectAllTooltipText} placement='top'>
                <div className='remove-all-selected-options' onClick={() => this.props.onRemoveAll()}>
                    <Svg svgName='clear' svgClass='icon fill-medium-blue' />
                </div>
            </Tooltip>
            : null;
    }

    private getButton(props: ISelectButtonProps): JSX.Element {
        return (
            <div className='multiselect-input'>
                <div
                    className='selected-options-container'
                    onMouseUp={props.onMouseUp}
                    onKeyDown={props.onKeyDown}
                    onKeyUp={props.onKeyUp}
                >
                    {this.getSelectedOptionComponents()}
                </div>
                {this.getRemoveAllSelectedOptionsButton()}
            </div>
        );
    }

    private getSelectedOptions() {
        return this.props.items
            .filter((option: IItemBoxProps) => _.contains(this.props.selected, option.value));
    }
}
