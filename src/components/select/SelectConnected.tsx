import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';

import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {mod} from '../../utils/DataStructuresUtils';
import {keyCode} from '../../utils/InputUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {selectListBoxOption, setActiveListBoxOption} from '../listBox/ListBoxActions';
import {ListBoxConnected} from '../listBox/ListBoxConnected';
import {IListBoxState} from '../listBox/ListBoxReducers';
import {addSelect, removeSelect, toggleSelect} from './SelectActions';
import {ISelectState} from './SelectReducers';

export interface ISelectSpecificProps {
    button: React.ReactNode;
    multi?: boolean;
}

export interface ISelectOwnProps {
    id: string;
    placeholder?: string;
    noResultItem?: IItemBoxProps;
}

export interface ISelectStateProps {
    items?: IItemBoxProps[];
    isOpen?: boolean;
    active?: number;
    selectedValues?: string[];
    selectedLength?: number;
}

export interface ISelectDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onDocumentClick?: () => void;
    onToggleDropdown?: () => void;
    onSelectValue?: (value: string, isMulti: boolean) => void;
    setActive?: (diff: number) => void;
}

export interface ISelectButtonProps {
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    placeholder?: string;
}

export interface ISelectProps extends ISelectOwnProps, ISelectStateProps, ISelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: ISelectOwnProps): ISelectStateProps => {
    const select: ISelectState = _.findWhere(state.selects, {id: ownProps.id});
    const list: IListBoxState = _.findWhere(state.listBoxes, {id: ownProps.id});

    return {
        isOpen: select && select.open,
        active: list && list.active,
        selectedValues: list && list.selected,
        selectedLength: list && list.selected.length || 0,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ISelectOwnProps & ISelectSpecificProps,
): ISelectDispatchProps => ({
    onRender: () => dispatch(addSelect(ownProps.id)),
    onDestroy: () => dispatch(removeSelect(ownProps.id)),
    onDocumentClick: () => dispatch(toggleSelect(ownProps.id, false)),
    onToggleDropdown: () => dispatch(toggleSelect(ownProps.id)),
    onSelectValue: (value: string, isMulti: boolean) => dispatch(selectListBoxOption(ownProps.id, isMulti, value)),
    setActive: (diff: number) => dispatch(setActiveListBoxOption(ownProps.id, diff)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class SelectConnected extends React.Component<ISelectProps & ISelectSpecificProps, {}> {
    private dropdown: HTMLDivElement;
    private menu: HTMLDivElement;
    private keepFocus: boolean;

    componentWillMount() {
        this.props.onRender();
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
        this.props.onDestroy();
    }

    componentWillUpdate(nextProps: ISelectProps): any {
        const button = this.getButton();
        this.keepFocus = !nextProps.isOpen && document.activeElement === button;
    }

    componentDidUpdate(prevProps: ISelectProps, prevState: null, snapshot: any) {
        if (this.keepFocus || (prevProps.isOpen && !this.props.isOpen && prevProps.selectedLength <= this.props.selectedLength)) {
            this.focusOnButton();
        }
    }

    render() {
        const pickerClasses = classNames('select-dropdown dropdown', {
            open: this.props.isOpen,
            'mod-multi': this.props.multi,
        });
        const dropdownClasses = classNames('select-dropdown-container absolute bg-pure-white', {hidden: !this.props.isOpen});
        return (
            <div className={pickerClasses} ref={(ref: HTMLDivElement) => this.dropdown = ref}>
                <Content content={this.props.button} classes={['select-dropdown-button']} componentProps={{
                    onMouseUp: (e: React.MouseEvent<HTMLElement>) => this.onToggleDropdown(e),
                    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                    placeholder: this.props.placeholder,
                }} />
                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => this.menu = ref}>
                    {this.renderChildren()}
                    <ListBoxConnected id={this.props.id} items={this.props.items} multi={this.props.multi} noResultItem={this.props.noResultItem || undefined} />
                </div>
            </div>
        );
    }

    private renderChildren() {
        if (this.props.children && this.props.isOpen) {
            const newChildren = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
                if (child) {
                    return React.cloneElement(child, {
                        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                        onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                    });
                }
            });
            return (
                <div className='flex p2 flex-center bg-white flex-column mod-border-bottom'>
                    {newChildren}
                </div>
            );
        }
        return null;
    }

    private getButton(): HTMLElement {
        return this.dropdown.querySelector('.dropdown-toggle');
    }

    private focusOnButton() {
        this.getButton() && this.getButton().focus();
    }

    private setDropdownPosition() {
        const button = this.getButton();
        if (button) {
            this.menu.style.minWidth = button.clientWidth + 2 + 'px';
            this.menu.style.left = button.offsetLeft + 'px';
        }
    }

    private onToggleDropdown(e: React.SyntheticEvent<HTMLElement>) {
        this.setDropdownPosition();

        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleDropdown();
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        if (_.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode)
            || (e.keyCode === keyCode.tab && this.props.isOpen)) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private onKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        if (keyCode.escape === e.keyCode && this.props.isOpen) {
            this.onToggleDropdown(e);
            this.focusOnButton();
        }

        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpen) {
            const actives = _.chain(this.props.items)
                .filter((item: IItemBoxProps) => !item.hidden && (!this.props.multi || !_.contains(this.props.selectedValues, item.value)) && !item.disabled)
                .value();
            const active = actives[mod(this.props.active, actives.length)];
            if (active) {
                this.props.onSelectValue(active.value, this.props.multi);
            }
        } else if (keyCode.enter === e.keyCode) {
            this.onToggleDropdown(e);
        }

        if (keyCode.downArrow === e.keyCode) {
            this.setDropdownPosition();
            this.props.setActive(this.props.isOpen ? 1 : 0);
        }

        if (keyCode.upArrow === e.keyCode) {
            this.setDropdownPosition();
            this.props.setActive(this.props.isOpen ? -1 : 0);
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.contains(e.target as HTMLElement)) {
            const dropdown: Element | Text = ReactDOM.findDOMNode(this.menu);

            if (!dropdown.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }
}
