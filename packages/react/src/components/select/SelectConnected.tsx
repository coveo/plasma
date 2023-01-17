import classNames from 'clsx';
import {
    ComponentType,
    MouseEvent,
    KeyboardEvent,
    ReactElement,
    SyntheticEvent,
    createRef,
    Children,
    cloneElement,
    PureComponent,
    ReactNode,
} from 'react';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {IComponentBehaviour} from '../../utils/ComponentUtils';
import {mod} from '../../utils/DataStructuresUtils';
import {keyCode} from '../../utils/InputUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop} from '../drop/Drop';
import {IDropPodProps} from '../drop/DropPod';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IItemBoxPropsWithIndex, IListBoxOwnProps} from '../listBox/ListBox';
import {selectListBoxOption, setActiveListBoxOption} from '../listBox/ListBoxActions';
import {ListBoxConnected} from '../listBox/ListBoxConnected';
import {addSelect, removeSelect, toggleSelect} from './SelectActions';
import {SelectConstants} from './SelectConstants';
import {SelectSelector} from './SelectSelector';

export interface ISelectOwnProps extends IListBoxOwnProps, IComponentBehaviour {
    /**
     * Unique identifier
     */
    id: string;
    button: ComponentType<ISelectButtonProps>;
    /**
     * The text displayed in the button when no item is selected
     *
     * @default "Select an option"
     */
    placeholder?: string;
    /**
     * Additional CSS classes to set on the outermost element
     */
    selectClasses?: string;
    /**
     * Additional CSS classes to set on the dropdown element
     */
    dropClasses?: string;
    /**
     * Whether the dropdown has a child that needs to receive the focus upon opening the dropdown, for example: a filter input.
     */
    hasFocusableChild?: boolean;
    /**
     * Whether the SingleSelect is disabled
     */
    disabled?: boolean;
    /**
     * A callback function that is executed whenever an update of the items array is required. For example if a filter was applied and the filter is done on the server.
     */
    onUpdate?: () => void;
    /**
     * Additional Drop props to set on the Drop component (see IDropPodProps interface)
     */
    dropOption?: Partial<IDropPodProps>;
    /**
     * Additional CSS classes to set on the toggle button
     */
    toggleClasses?: string;
    children?: ReactNode;
}

const listBoxProps = [
    'classes',
    'footer',
    'id',
    'isLoading',
    'items',
    'multi',
    'noActive',
    'noResultItem',
    'wrapItems',
];

export interface ISelectButtonProps {
    onClick: (e: MouseEvent) => void;
    onKeyUp: (e: KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
    selectedOptions: IItemBoxProps[];
    placeholder?: string;
    isOpen?: boolean;
}

const makeMapStateToProps = () =>
    createStructuredSelector({
        selectedValues: SelectSelector.getListBoxSelected,
        isOpened: SelectSelector.getSelectOpened,
        active: SelectSelector.getListBoxActive,
    });

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISelectOwnProps) => ({
    addSelect: () => dispatch(addSelect(ownProps.id)),
    removeSelect: () => dispatch(removeSelect(ownProps.id)),
    toggleDropdown: () => dispatch(toggleSelect(ownProps.id)),
    selectValue: (value: string, isMulti: boolean, index?: number) => {
        dispatch(selectListBoxOption(ownProps.id, isMulti, value, index));
    },
    setActive: (diff: number) => dispatch(setActiveListBoxOption(ownProps.id, diff)),
});

export type ISelectProps = ISelectOwnProps &
    ReturnType<typeof mapDispatchToProps> &
    ReturnType<ReturnType<typeof makeMapStateToProps>>;

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
@ReduxConnect(makeMapStateToProps, mapDispatchToProps)
export class SelectConnected extends PureComponent<ISelectProps> {
    /* @deprecated use SelectConstants.DropGroupId instead */
    static DropGroup = SelectConstants.DropGroupId;
    private dropdown = createRef<HTMLDivElement>();

    componentDidMount() {
        this.props.addSelect();
    }

    componentWillUnmount() {
        this.props.removeSelect();
    }

    componentDidUpdate(prevProps: ISelectProps) {
        const wentFromOpenedToClosed = prevProps.isOpened && !this.props.isOpened;
        const selectionChanged = prevProps.selectedValues.length <= this.props.selectedValues.length;

        if ((this.props.isOpened && !this.props.hasFocusableChild) || (wentFromOpenedToClosed && selectionChanged)) {
            this.focusOnButton();
        }
    }

    render() {
        if (this.props.isLoading && !this.props.selectedValues) {
            return (
                <div
                    className={
                        'single-select-fixed-width btn dropdown-toggle mod-rounded-border-2 cursor-auto mod-no-border'
                    }
                />
            );
        }

        const pickerClasses = classNames('select-dropdown dropdown', this.props.selectClasses, {
            open: this.props.isOpened,
            'mod-multi': this.props.multi,
        });
        const minWidth = this.dropdown.current?.clientWidth || undefined;
        return (
            <Drop
                id={this.props.id}
                groupId={SelectConnected.DropGroup}
                positions={[DropPodPosition.bottom, DropPodPosition.top]}
                buttonContainerProps={{className: pickerClasses}}
                renderOpenButton={this.renderToggle}
                minWidth={minWidth}
                closeOnClickDrop={false}
                {...this.props.dropOption}
            >
                <div className={classNames('select-dropdown-container', this.props.dropClasses)} style={{minWidth}}>
                    {this.renderChildren()}
                    <ListBoxConnected {..._.pick(this.props, listBoxProps)} />
                </div>
            </Drop>
        );
    }

    private get selectedOptions(): IItemBoxProps[] {
        return (
            this.props.items?.filter((option: IItemBoxProps) => _.contains(this.props.selectedValues, option.value)) ??
            []
        );
    }

    private renderToggle = (openDropdown: () => void) => (
        <div className="js-drop-button-container" ref={this.dropdown}>
            <this.props.button
                onClick={openDropdown}
                onKeyDown={(e: KeyboardEvent<HTMLElement>) => this.onKeyDown(e)}
                onKeyUp={(e: KeyboardEvent<HTMLElement>) => this.onKeyUp(e)}
                placeholder={this.props.placeholder}
                selectedOptions={this.selectedOptions}
                isOpen={this.props.isOpened}
            />
        </div>
    );

    private renderChildren() {
        if (this.props.children && this.props.isOpened) {
            const newChildren = Children.map(this.props.children, (child: ReactElement<any>) => {
                if (child) {
                    return cloneElement(child, {
                        onKeyDown: (e: KeyboardEvent<HTMLElement>) => this.onKeyDown(e),
                        onKeyUp: (e: KeyboardEvent<HTMLElement>) => this.onKeyUp(e),
                    });
                }
            });
            return <div className="flex p2 flex-center flex-column select-dropdown-filter">{newChildren}</div>;
        }
        return null;
    }

    private focusOnButton() {
        const button: HTMLElement = this.dropdown.current?.querySelector('.dropdown-toggle');
        button?.focus();
    }

    private onToggleDropdown(e: SyntheticEvent<HTMLElement>) {
        e.stopPropagation();
        e.preventDefault();

        this.props.toggleDropdown();
        this.focusOnButton();
    }

    private onKeyDown(e: KeyboardEvent<HTMLElement>) {
        if (
            _.contains([keyCode.escape, keyCode.downArrow, keyCode.upArrow, keyCode.enter], e.keyCode) ||
            (e.keyCode === keyCode.tab && this.props.isOpened)
        ) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private onKeyUp(e: KeyboardEvent<HTMLElement>) {
        if (keyCode.escape === e.keyCode && this.props.isOpened) {
            this.onToggleDropdown(e);
        }
        let realIndex = 0;
        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpened) {
            const actives: IItemBoxPropsWithIndex[] = _.chain(this.props.items)
                .filter(
                    (item: IItemBoxProps) =>
                        !item.hidden &&
                        (!this.props.multi || !_.contains(this.props.selectedValues, item.value)) &&
                        !item.disabled
                )
                .map((item: IItemBoxProps) => ({...item, index: realIndex++}))
                .value();
            const active = actives[mod(this.props.active, actives.length)];
            if (active) {
                this.props.selectValue(active.value, this.props.multi, active.index);
            }
        } else if (_.contains([keyCode.enter, keyCode.downArrow, keyCode.upArrow], e.keyCode) && !this.props.isOpened) {
            this.onToggleDropdown(e);
        } else if (keyCode.downArrow === e.keyCode) {
            this.props.setActive(this.props.isOpened ? 1 : 0);
        } else if (keyCode.upArrow === e.keyCode) {
            this.props.setActive(this.props.isOpened ? -1 : 0);
        }
    }
}
