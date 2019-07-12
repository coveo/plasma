import * as classNames from 'classnames';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {Defaults} from '../../Defaults';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {mod} from '../../utils/DataStructuresUtils';
import {keyCode} from '../../utils/InputUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {Content} from '../content/Content';
import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop} from '../drop/Drop';
import {DropActions} from '../drop/redux/DropActions';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {selectListBoxOption, setActiveListBoxOption} from '../listBox/ListBoxActions';
import {ListBoxConnected} from '../listBox/ListBoxConnected';
import {addSelect, removeSelect, toggleSelect} from './SelectActions';
import {SelectSelector} from './SelectSelector';

export interface ISelectSpecificProps {
    button: React.ReactNode;
    multi?: boolean;
}

export interface ISelectOwnProps {
    id: string;
    placeholder?: string;
    noResultItem?: IItemBoxProps;
    selectClasses?: string;
    dropClasses?: string;
    items?: IItemBoxProps[];
    hasFocusableChild?: boolean;
    disabled?: boolean;
}

export interface ISelectStateProps {
    isOpened: boolean;
    active: number;
    selectedValues: string[];
}

export type ISelectDispatchProps = ReturnType<typeof mapDispatchToProps>;

export interface ISelectButtonProps {
    onClick: (e: React.MouseEvent) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    placeholder?: string;
}

export interface ISelectProps extends ISelectOwnProps, Partial<ISelectStateProps>, Partial<ISelectDispatchProps> {}

const makeMapStateToProps = () => {
    const statePropsSelector = createStructuredSelector({
        selectedValues: SelectSelector.getListBoxSelected,
        isOpened: SelectSelector.getSelectOpened,
        active: SelectSelector.getListBoxActive,
    });

    return (state: IReactVaporState, ownProps: ISelectOwnProps): ISelectStateProps =>
        statePropsSelector(state, ownProps);
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ISelectOwnProps & ISelectSpecificProps
) => ({
    onRender: () => dispatch(addSelect(ownProps.id)),
    onDestroy: () => dispatch(removeSelect(ownProps.id)),
    onToggleDropdown: () => dispatch(toggleSelect(ownProps.id)),
    onSelectValue: (value: string, isMulti: boolean) => {
        dispatch(selectListBoxOption(ownProps.id, isMulti, value));
        dispatch(DropActions.toggle(ownProps.id, SelectConnected.DropGroup, false));
    },
    setActive: (diff: number) => dispatch(setActiveListBoxOption(ownProps.id, diff)),
});

@ReduxConnect(makeMapStateToProps, mapDispatchToProps)
export class SelectConnected extends React.PureComponent<ISelectProps & ISelectSpecificProps> {
    static DropGroup = 'select';
    private dropdown: HTMLDivElement;

    componentDidMount() {
        this.props.onRender();
    }

    componentWillUnmount() {
        this.props.onDestroy();
    }

    componentDidUpdate(prevProps: ISelectProps) {
        const wentFromOpenedToClosed = prevProps.isOpened && !this.props.isOpened;
        const selectionChanged = prevProps.selectedValues.length <= this.props.selectedValues.length;

        if ((this.props.isOpened && !this.props.hasFocusableChild) || (wentFromOpenedToClosed && selectionChanged)) {
            this.focusOnButton();
        }
    }

    render() {
        const pickerClasses = classNames('select-dropdown dropdown', this.props.selectClasses, {
            open: this.props.isOpened,
            'mod-multi': this.props.multi,
        });
        const minWidth = (this.dropdown && this.dropdown.clientWidth) || undefined;
        return (
            <Drop
                id={this.props.id}
                groupId={SelectConnected.DropGroup}
                selector={Defaults.DROP_ROOT}
                positions={[DropPodPosition.bottom, DropPodPosition.top]}
                buttonContainerProps={{className: pickerClasses}}
                renderOpenButton={(onClick: () => void) => (
                    <div className="js-drop-button-container" ref={(ref: HTMLDivElement) => (this.dropdown = ref)}>
                        <Content
                            content={this.props.button}
                            classes={['select-dropdown-button']}
                            componentProps={{
                                onClick,
                                onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                                onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                                placeholder: this.props.placeholder,
                            }}
                            key={`${this.props.id}-button`}
                        />
                    </div>
                )}
                minWidth={minWidth}
                closeOnClickDrop={false}
            >
                <div
                    className={classNames('select-dropdown-container bg-pure-white', this.props.dropClasses)}
                    style={{minWidth}}
                >
                    {this.renderChildren()}
                    <ListBoxConnected
                        id={this.props.id}
                        items={this.props.items}
                        multi={this.props.multi}
                        noResultItem={this.props.noResultItem || undefined}
                    />
                </div>
            </Drop>
        );
    }

    private renderChildren() {
        if (this.props.children && this.props.isOpened) {
            const newChildren = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
                if (child) {
                    return React.cloneElement(child, {
                        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                        onKeyUp: (e: React.KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                    });
                }
            });
            return <div className="flex p2 flex-center bg-white flex-column mod-border-bottom">{newChildren}</div>;
        }
        return null;
    }

    private getButton(): HTMLElement {
        return this.dropdown && this.dropdown.querySelector('.dropdown-toggle');
    }

    private focusOnButton() {
        const button = this.getButton();
        button && button.focus();
    }

    private onToggleDropdown(e: React.SyntheticEvent<HTMLElement>) {
        e.stopPropagation();
        e.preventDefault();

        this.props.onToggleDropdown();
        this.focusOnButton();
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        if (
            _.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode) ||
            (e.keyCode === keyCode.tab && this.props.isOpened)
        ) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private onKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        if (keyCode.escape === e.keyCode && this.props.isOpened) {
            this.onToggleDropdown(e);
        }

        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpened) {
            const actives = _.chain(this.props.items)
                .filter(
                    (item: IItemBoxProps) =>
                        !item.hidden &&
                        (!this.props.multi || !_.contains(this.props.selectedValues, item.value)) &&
                        !item.disabled
                )
                .value();
            const active = actives[mod(this.props.active, actives.length)];
            if (active) {
                this.props.onSelectValue(active.value, this.props.multi);
            }
        } else if (keyCode.enter === e.keyCode) {
            this.onToggleDropdown(e);
        }

        if (keyCode.downArrow === e.keyCode) {
            this.props.setActive(this.props.isOpened ? 1 : 0);
        }

        if (keyCode.upArrow === e.keyCode) {
            this.props.setActive(this.props.isOpened ? -1 : 0);
        }
    }
}
