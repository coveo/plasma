import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Svg} from '../svg/Svg';
import {addMenu, removeMenu, toggleMenu} from './MenuActions';
import {IMenuState} from './MenuReducers';

export interface IMenuOwnProps {
    className?: string;
    id: string;
    positionRight?: boolean;
    closeOnSelectItem?: boolean;
    buttonSvg?: React.ReactNode;
    customOffset?: number;
}

export interface IMenuStateProps {
    isOpen?: boolean;
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
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: IMenuOwnProps,
): IMenuDispatchProps => ({
    onRender: () => dispatch(addMenu(ownProps.id)),
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
        closeOnSelectItem: true,
        customOffset: 0,
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
                    {this.props.buttonSvg ? this.props.buttonSvg : this.getDefaultSvg()}
                </button>
                <div
                    className={dropdownClasses}
                    ref={(ref: HTMLDivElement) => this.list = ref}
                    onClick={() => this.onClickMenu()}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }

    private onClickMenu() {
        if (this.props.closeOnSelectItem) {
            this.props.onDocumentClick();
        }
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
                ? this.list.style.right = `${this.button.offsetLeft + this.props.customOffset}px`
                : this.list.style.left = `${this.button.offsetLeft + this.props.customOffset}px`;
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.contains(e.target as HTMLElement)) {
            const list: Element | Text = ReactDOM.findDOMNode(this.list);
            const button: Element | Text = ReactDOM.findDOMNode(this.button);

            if (!list.contains(e.target as Node) && !button.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    }
}
