import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxProps, ListBox} from '../listBox/ListBox';
import {Svg} from '../svg/Svg';
import {addMenu, removeMenu, toggleMenu} from './MenuActions';
import {IMenuState} from './MenuReducers';

export interface IMenuOwnProps {
    listBox: IListBoxProps;
    className?: string;
    id: string;
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
    const menu: IMenuState = state.menus[ownProps.id];

    return {
        isOpen: menu && menu.open,
        list: (menu && menu.list) || ownProps.listBox.items,
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: IMenuOwnProps,
): IMenuDispatchProps => ({
    onRender: () => dispatch(addMenu(ownProps.id, ownProps.listBox.items)),
    onDestroy: () => dispatch(removeMenu(ownProps.id)),
    onToggleMenu: () => dispatch(toggleMenu(ownProps.id)),
    onDocumentClick: () => dispatch(toggleMenu(ownProps.id, false)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MenuConnected extends React.Component<IMenuProps, {}> {
    private list: HTMLDivElement;
    private button: HTMLButtonElement;

    static defaultProps: Partial<IMenuProps> = {
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
            this.props.className,
            {
                open: this.props.isOpen,
            },
        );
        const dropdownClasses = classNames('select-dropdown-container absolute bg-pure-white', {
            hidden: !this.props.isOpen,
        });
        return (
            <div className={pickerClasses}>
                <button
                    className={classNames('btn menu-toggle', {'bg-light-grey': this.props.isOpen})}
                    type='button'
                    onMouseUp={(e: React.MouseEvent<HTMLElement>) => this.onToggleMenu(e)}
                    ref={(ref: HTMLButtonElement) => this.button = ref}
                >
                    {this.props.children ? this.props.children : this.getDefaultSvg()}
                </button>
                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => this.list = ref}>
                    <ListBox id={this.props.id} {...this.props.listBox} />
                </div>
            </div>
        );
    }

    private getDefaultSvg() {
        return (
            <Svg
                svgName='more-append'
                svgClass='fill-medium-blue icon mod-lg'
            />
        );
    }

    private onToggleMenu(e: React.SyntheticEvent<HTMLElement>) {
        this.setListPosition();

        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleMenu();
    }

    private setListPosition() {
        if (this.button) {
            this.list.style.minWidth = `${this.button.clientWidth + 2}px`;
            this.props.positionRight
                ? this.list.style.right = `${this.button.offsetLeft}px`
                : this.list.style.left = `${this.button.offsetLeft}px`;
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.contains(e.target as HTMLElement)) {
            const list: Element | Text = ReactDOM.findDOMNode(this.list);

            if (!list.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }
}
