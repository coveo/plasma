import * as React from 'react';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption, unselectListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectProps, SelectConnected} from './SelectConnected';

export interface IMultiSelectOwnProps extends ISelectProps {
  emptyValueText?: string;
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

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
                            ownProps: IMultiSelectOwnProps): IMultiSelectDispatchProps => ({
  onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),
  onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MultiSelectConnected extends React.Component<IMultiSelectProps, {}> {
  static defaultProps: Partial<IMultiSelectProps> = {
    emptyValueText: 'No selected values',
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

  private getSelectedOptionComponents(): JSX.Element|JSX.Element[] {
    const selected = this.getSelectedOptions();

    if (selected.length) {
      return selected.map((item: IItemBoxProps) => {
        return (
          <SelectedOption
            value={item.displayValue || item.value}
            key={item.value}
            onRemoveClick={() => this.props.onRemoveClick(item)}
          />
        );
      });
    }
    return (
      <input placeholder={this.props.emptyValueText} readOnly />
    );
  }

  private getRemoveAllSelectedOptionsButton(): JSX.Element {
    const selected = this.getSelectedOptions();
    if (selected.length) {
      return (
        <Tooltip title={this.props.deselectAllTooltipText} placement={'top'}>
          <div className='remove-all-selected-options' onClick={() => this.props.onRemoveAll()}>
            <Svg svgName='clear' svgClass='icon fill-medium-blue'/>
          </div>
        </Tooltip>
      );
    }
  }

  private getButton(props: ISelectButtonProps): JSX.Element {
    return (
      <div className='multiselect-input'>
        <div
          className='selected-options-container'
          onClick={props.onClick}
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
    return _.chain(this.props.items)
      .filter((option: IItemBoxProps) => _.contains(this.props.selected, option.value))
      .value();
  }
}
