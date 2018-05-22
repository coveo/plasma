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
import {addSelect, removeSelect, toggleSelect} from './SelectActions';
import {ISelectState} from './SelectReducers';

export interface ISelectSpecificProps {
    button: ComponentContent;
    multi?: boolean;
}

export interface ISelectOwnProps {
    id: string;
    placeholder?: string;
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
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    placeholder?: string;
}

export interface ISelectProps extends ISelectOwnProps, ISelectStateProps, ISelectDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: ISelectOwnProps): ISelectStateProps => {
    const select: ISelectState = _.findWhere(state.selects, {id: ownProps.id});

    return {
        isOpen: select && select.open,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ISelectOwnProps,
): ISelectDispatchProps => ({
    onRender: () => dispatch(addSelect(ownProps.id)),
    onDestroy: () => dispatch(removeSelect(ownProps.id)),
    onDocumentClick: () => dispatch(toggleSelect(ownProps.id, false)),
    onToggleDropdown: () => dispatch(toggleSelect(ownProps.id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class SelectConnected extends React.Component<ISelectProps & ISelectSpecificProps, {}> {
    private dropdown: HTMLDivElement;
    private menu: HTMLDivElement;

    componentWillMount() {
        this.props.onRender();
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
        this.props.onDestroy();
    }

    render() {
        const pickerClasses = classNames('select-dropdown dropdown', {open: this.props.isOpen});
        const dropdownClasses = classNames('select-dropdown-container absolute bg-pure-white', {hidden: !this.props.isOpen});
        return (
            <div className={pickerClasses} ref={(ref: HTMLDivElement) => this.dropdown = ref}>
                <Content content={this.props.button} componentProps={{
                    onMouseUp: (e: React.MouseEvent<HTMLElement>) => this.onToggleDropdown(e),
                    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                    placeholder: this.props.placeholder,
                }} />
                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => this.menu = ref}>
                    {this.renderChildren()}
                    <ListBoxConnected id={this.props.id} items={this.props.items} multi={this.props.multi} />
                </div>
            </div>
        );
    }

    private renderChildren() {
        if (this.props.children) {
            return (
                <div className='flex p2 flex-center bg-white flex-column mod-border-bottom'>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }

    private onToggleDropdown(e: React.SyntheticEvent<HTMLElement>) {
        this.menu.style.minWidth = this.dropdown.clientWidth + 'px';
        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleDropdown();
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        if (_.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode)) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private onKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        if (keyCode.escape === e.keyCode && this.props.isOpen) {
            this.onToggleDropdown(e);
        }
        if (keyCode.enter === e.keyCode) {
            this.onToggleDropdown(e);
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.contains(e.target as HTMLElement)) {
            const dropdown: HTMLDivElement = ReactDOM.findDOMNode<HTMLDivElement>(this.dropdown);

            if (!dropdown.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }
}
