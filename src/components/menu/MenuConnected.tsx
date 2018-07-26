import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';
import {Svg} from '../svg/Svg';
import {addMenu, removeMenu, toggleMenu} from './MenuActions';
import {IMenuState} from './MenuReducers';

export interface IMenuOwnProps {
    items: IItemBoxProps[];
    classes?: string[];
    id: string;
    svgName?: string;
    positionRight?: boolean;
}

export interface IMenuStateProps {
    isOpen?: boolean;
    list?: IItemBoxProps[];
}

export interface IMenuDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onToggleMenu?: () => void;
    onDocumentClick?: () => void;
}

export interface IMenuProps extends IMenuOwnProps, IMenuStateProps, IMenuDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: IMenuOwnProps): IMenuStateProps => {
    const menu: IMenuState = _.findWhere(state.menus, {id: ownProps.id});

    return {
        isOpen: menu && menu.open,
        list: (menu && menu.list) || ownProps.items,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IMenuOwnProps,
): IMenuDispatchProps => ({
    onRender: () => dispatch(addMenu(ownProps.id, ownProps.items)),
    onDestroy: () => dispatch(removeMenu(ownProps.id)),
    onToggleMenu: () => dispatch(toggleMenu(ownProps.id)),
    onDocumentClick: () => dispatch(toggleMenu(ownProps.id, false)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MenuConnected extends React.Component<IMenuProps, {}> {
    private icon: HTMLDivElement;
    private list: HTMLDivElement;

    static defaultProps: Partial<IMenuProps> = {
        svgName: 'more-append',
        classes: [],
        positionRight: false,
    };

    componentWillMount() {
        this.props.onRender();
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        this.props.onDestroy();
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    render() {
        const pickerClasses = classNames(
            'select-dropdown dropdown',
            this.props.classes,
            {
                open: this.props.isOpen,
            },
        );
        const dropdownClasses = classNames('select-dropdown-container absolute bg-pure-white', {
            hidden: !this.props.isOpen,
        });
        return (
            <div className={pickerClasses} ref={(ref: HTMLDivElement) => this.icon = ref}>
                <button
                    className={classNames('btn menu-toggle', {'bg-light-grey': this.props.isOpen})}
                    type='button'
                    onMouseUp={(e: React.MouseEvent<HTMLElement>) => this.onToggleMenu(e)}
                >
                    {this.getSvg()}
                </button>
                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => this.list = ref}>
                    <ListBox id={this.props.id} items={this.props.items} />
                </div>
            </div>
        );
    }

    private getSvg() {
        return (
            <Svg
                svgName={this.props.svgName}
                svgClass={'fill-medium-blue icon mod-lg'}
            />
        );
    }

    private getMenuToggle(): HTMLElement {
        return this.icon.querySelector('.menu-toggle');
    }

    private onToggleMenu(e: React.SyntheticEvent<HTMLElement>) {
        this.setListPosition();

        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleMenu();
    }

    private setListPosition() {
        const menuToggle = this.getMenuToggle();
        if (menuToggle) {
            this.list.style.minWidth = `${menuToggle.clientWidth}2px`;
            this.props.positionRight
                ? this.list.style.right = `${menuToggle.offsetLeft}px`
                : this.list.style.left = `${menuToggle.offsetLeft}px`;
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.contains(e.target as HTMLElement)) {
            const list: HTMLDivElement = ReactDOM.findDOMNode<HTMLDivElement>(this.list);

            if (!list.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }
}
