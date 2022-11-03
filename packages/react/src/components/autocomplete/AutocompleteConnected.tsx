import classNames from 'classnames';
import {KeyboardEvent, ChangeEvent, HTMLProps, Component} from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';

import {SlideY} from '../../animations/SlideY';
import {PlasmaState} from '../../PlasmaState';
import {mod} from '../../utils/DataStructuresUtils';
import {keyCode} from '../../utils/InputUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {defaultListBoxMatchFilter} from '../filterBox/FilterBoxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBoxConnected} from '../listBox/ListBoxConnected';
import {
    addAutocomplete,
    removeAutocomplete,
    setAutocompleteActive,
    setAutocompleteValue,
    toggleAutocomplete,
} from './AutocompleteActions';
import {IAutocompleteState} from './AutocompleteReducers';

export interface IAutocompleteOwnProps {
    id: string;
    items: IItemBoxProps[];
    inline?: boolean;
    matchFilter?: (filterValue: string, item: IItemBoxProps) => boolean;
}

export interface IAutocompleteStateProps {
    isOpen?: boolean;
    value?: string;
    visibleItems?: IItemBoxProps[];
    active?: number;
}

export interface IAutocompleteDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onDocumentClick?: () => void;
    onFocus?: () => void;
    onValueChange?: (value: string, open: boolean) => void;
    setActive?: (diff: number) => void;
}

export interface IAutocompleteProps
    extends IAutocompleteOwnProps,
        IAutocompleteStateProps,
        IAutocompleteDispatchProps {}

const mapStateToProps = (state: PlasmaState, ownProps: IAutocompleteOwnProps): IAutocompleteStateProps => {
    const autocomplete: IAutocompleteState = _.findWhere(state.autocompletes, {id: ownProps.id});
    const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});
    const defaultValue = listbox && listbox.selected && listbox.selected.length ? listbox.selected[0] : '';
    const value = (autocomplete && autocomplete.value) || defaultValue;

    const itemsWithHidden = _.map(ownProps.items, (item: IItemBoxProps): IItemBoxProps => {
        const visible = _.isFunction(ownProps.matchFilter)
            ? ownProps.matchFilter(value, item)
            : defaultListBoxMatchFilter(value, item);

        return {...item, hidden: !visible || !!item.hidden};
    });

    let index = 0;
    const activeIndex = autocomplete && autocomplete.active;
    const visibleLength = _.filter(itemsWithHidden, (item: IItemBoxProps) => !item.hidden && !item.disabled).length;
    const visibleItems = _.map(itemsWithHidden, (item: IItemBoxProps): IItemBoxProps => {
        let active = false;
        if (!item.hidden && !item.disabled) {
            active = mod(activeIndex, visibleLength) === index;
            index++;
        }
        return {...item, highlight: value, active};
    });

    return {
        value,
        visibleItems,
        active: autocomplete && autocomplete.active,
        isOpen: autocomplete && autocomplete.open,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IAutocompleteOwnProps): IAutocompleteDispatchProps => ({
    onRender: () => dispatch(addAutocomplete(ownProps.id)),
    onDestroy: () => dispatch(removeAutocomplete(ownProps.id)),
    onDocumentClick: () => dispatch(toggleAutocomplete(ownProps.id, false)),
    onFocus: () => dispatch(toggleAutocomplete(ownProps.id)),
    onValueChange: (value: string, open: boolean) => dispatch(setAutocompleteValue(ownProps.id, value, open)),
    setActive: (diff: number) => dispatch(setAutocompleteActive(ownProps.id, diff)),
});

/**
 * @deprecated Use Mantine Autocomplete instead: https://mantine.dev/core/autocomplete/
 */
@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class AutocompleteConnected extends Component<IAutocompleteProps & HTMLProps<AutocompleteConnected>> {
    private dropdown: HTMLDivElement;
    private menu: HTMLDivElement;

    static defaultProps: Partial<IAutocompleteOwnProps> = {
        inline: false,
    };

    componentDidMount() {
        this.props.onRender();
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
        this.props.onDestroy();
    }

    render() {
        const pickerClasses = classNames(this.props.className, 'autocomplete', {
            open: this.props.isOpen,
            dropdown: !this.props.inline,
        });
        const dropdownClasses = classNames('autocomplete-list-container', {
            hidden: !this.props.isOpen,
            absolute: !this.props.inline,
            'full-content-x': !this.props.inline,
            'show-on-top': !this.props.inline,
        });
        return (
            <div className={pickerClasses} ref={(ref: HTMLDivElement) => (this.dropdown = ref)}>
                <div className="input-wrapper validate input-field">
                    <input
                        onFocus={() => this.props.onFocus()}
                        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => this.onKeyUp(e)}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => this.onKeyDown(e)}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.props.onValueChange(e.target.value, true)}
                        value={this.props.value}
                        required
                    />
                    {this.props.children}
                </div>
                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => (this.menu = ref)}>
                    <SlideY in={this.props.isOpen} timeout={350}>
                        <ListBoxConnected id={this.props.id} classes={['relative']} items={this.props.visibleItems} />
                    </SlideY>
                </div>
            </div>
        );
    }

    private onToggleDropdown() {
        this.menu.style.minWidth = this.dropdown.clientWidth + 'px';

        this.props.onFocus();
    }

    private onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (_.contains([keyCode.tab, keyCode.downArrow, keyCode.upArrow], e.keyCode)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    private onKeyUp(e: KeyboardEvent<HTMLInputElement>) {
        if (keyCode.escape === e.keyCode && this.props.isOpen) {
            this.onToggleDropdown();
        }

        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpen) {
            const active = _.findWhere(this.props.visibleItems, {active: true});
            if (active) {
                this.props.onValueChange(active.value, false);
            }
        } else if (keyCode.enter === e.keyCode) {
            this.onToggleDropdown();
        }

        if (keyCode.downArrow === e.keyCode) {
            this.props.setActive(1);
        }

        if (keyCode.upArrow === e.keyCode) {
            this.props.setActive(-1);
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {
            const dropdown: Element | Text = ReactDOM.findDOMNode(this.dropdown);

            if (!dropdown.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    };
}
