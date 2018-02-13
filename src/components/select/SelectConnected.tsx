import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {ComponentContent} from '../../utils/ComponentUtils';
import {keyCode} from '../../utils/InputUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBoxConnected} from '../listBox/ListBoxConnected';
import {addSelect, closeSelect, removeSelect, toggleSelect} from './SelectActions';
import {ISelectState} from './SelectReducers';

export interface ISelectSpecificProps {
  button: ComponentContent;
  multi?: boolean;
}

export interface ISelectOwnProps {
  id: string;
}

export interface ISelectStateProps {
  items?: IItemBoxProps[];
  isOpen?: boolean;
}

export interface ISelectDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onDocumentClick?: () => void;
  onToggleDropdown?: () => void;
}

export interface ISelectButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export interface ISelectProps extends ISelectOwnProps, ISelectStateProps, ISelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: ISelectOwnProps): ISelectStateProps => {
  const select: ISelectState = _.findWhere(state.selects, {id: ownProps.id});

  return {
    isOpen: select ? select.open : false,
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
                            ownProps: ISelectOwnProps): ISelectDispatchProps => ({
  onRender: () => dispatch(addSelect(ownProps.id)),
  onDestroy: () => dispatch(removeSelect(ownProps.id)),
  onDocumentClick: () => dispatch(closeSelect(ownProps.id)),
  onToggleDropdown: () => dispatch(toggleSelect(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class SelectConnected extends React.Component<ISelectProps & ISelectSpecificProps, {}> {
  private dropdown: HTMLDivElement;
  private menu: HTMLDivElement;

  static getListBoxId = (ownId: string) => `${ownId}-list-box`;

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);

    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    const pickerClasses = classNames('dropdown', {open: this.props.isOpen});
    const dropdownClasses = classNames('dropdown-container absolute bg-pure-white', {hidden: !this.props.isOpen});
    return (
      <div className={pickerClasses} ref={(ref: HTMLDivElement) => this.dropdown = ref}>
        <Content content={this.props.button} componentProps={{
          onClick: () => this.onToggleDropdown(),
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => this.onKeyDown(e),
          onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => this.onKeyUp(e),
        }}/>
        <div className={dropdownClasses} ref={(ref: HTMLDivElement) => this.menu = ref} style={{
          border: '1px solid #000',
          zIndex: 1,
        }}>
          {this.props.children}
          <ListBoxConnected id={SelectConnected.getListBoxId(this.props.id)} items={this.props.items} multi={this.props.multi}/>
        </div>
      </div>
    );
  }

  private onToggleDropdown() {
    this.menu.style.minWidth = this.dropdown.clientWidth + 'px';
    if (this.props.onToggleDropdown) {
      this.props.onToggleDropdown();
    }
  }

  private onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (_.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode)) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  private onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (keyCode.escape === e.keyCode && this.props.isOpen) {
      this.onToggleDropdown();
    }
    if (keyCode.enter === e.keyCode) {
      this.onToggleDropdown();
    }
  }

  private handleDocumentClick = (e: MouseEvent) => {
    if (this.props.isOpen) {
      const dropdown: HTMLDivElement = ReactDOM.findDOMNode<HTMLDivElement>(this.dropdown);

      if (!dropdown.contains(e.target as Node) && this.props.onDocumentClick) {
        this.props.onDocumentClick();
      }
    }
  }
}
