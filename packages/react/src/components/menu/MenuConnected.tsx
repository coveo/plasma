import {DotsSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {Component, MouseEvent, ReactNode, SyntheticEvent} from 'react';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Button, IButtonProps} from '../button/Button';
import {addMenu, removeMenu, toggleMenu} from './MenuActions';
import {IMenuState} from './MenuReducers';

export interface IMenuOwnProps {
    id: string;
    className?: string;
    toggleClassName?: string;
    dropdownClassName?: string;
    positionRight?: boolean;
    closeOnSelectItem?: boolean;
    buttonSvg?: ReactNode;
    customOffset?: number;
    buttonProps?: Partial<IButtonProps>;
    children?: ReactNode;
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

const mapStateToProps = (state: PlasmaState, ownProps: IMenuOwnProps): IMenuStateProps => {
    const menu: IMenuState = state.menus[ownProps.id];

    return {
        isOpen: menu && menu.open,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMenuOwnProps): IMenuDispatchProps => ({
    onRender: () => dispatch(addMenu(ownProps.id)),
    onDestroy: () => dispatch(removeMenu(ownProps.id)),
    onToggleMenu: () => dispatch(toggleMenu(ownProps.id)),
    onDocumentClick: () => dispatch(toggleMenu(ownProps.id, false)),
});

/**
 * @deprecated Use Mantine Menu instead: https://mantine.dev/core/menu/
 */
@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MenuConnected extends Component<IMenuProps> {
    private list: HTMLDivElement;
    private button: HTMLDivElement;

    static defaultProps: Partial<IMenuProps> = {
        positionRight: false,
        closeOnSelectItem: true,
        customOffset: 0,
    };

    componentDidMount() {
        this.props.onRender();
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        this.props.onDestroy();
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    render() {
        const pickerClasses = classNames('select-dropdown dropdown', this.props.className, {
            open: this.props.isOpen,
        });
        const dropdownClasses = classNames('select-dropdown-container absolute', this.props.dropdownClassName, {
            hidden: !this.props.isOpen,
        });

        return (
            <div className={pickerClasses}>
                <div
                    ref={(ref: HTMLDivElement) => {
                        this.button = ref;
                    }}
                >
                    <Button
                        classes={classNames('btn menu-toggle', this.props.toggleClassName)}
                        onMouseUp={(e: MouseEvent<HTMLElement>) => this.onToggleMenu(e)}
                        {...this.props.buttonProps}
                    >
                        {this.props.buttonSvg ? this.props.buttonSvg : this.getDefaultSvg()}
                    </Button>
                </div>
                <div
                    className={dropdownClasses}
                    ref={(ref: HTMLDivElement) => {
                        this.list = ref;
                    }}
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
        return <DotsSize24Px height={24} />;
    }

    private onToggleMenu(e: SyntheticEvent<HTMLElement>) {
        this.setListPosition();

        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleMenu();
    }

    private setListPosition() {
        if (this.button) {
            this.list.style.minWidth = `${this.button.clientWidth + 2}px`;
            this.props.positionRight
                ? (this.list.style.right = `${this.button.offsetLeft + this.props.customOffset}px`)
                : (this.list.style.left = `${this.button.offsetLeft + this.props.customOffset}px`);
        }
    }

    private handleDocumentClick = (e: globalThis.MouseEvent) => {
        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {
            const list: HTMLDivElement = this.list;
            const button: HTMLDivElement = this.button;

            if (!list.contains(e.target as Node) && !button.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    };
}
