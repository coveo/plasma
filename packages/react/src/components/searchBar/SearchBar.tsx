import {SearchSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {ChangeEvent, Component} from 'react';

import {IClassName} from '../../utils/ClassNameUtils.js';
import {keyCode} from '../../utils/InputUtils.js';
import {LoadingSpinner} from '../loading/LoadingSpinner.js';

export interface ISearchBarConnectedProps {
    /**
     * If true, the search bar will be disabled in the UI and in the state on mount.
     *
     * @default false
     */
    disabledOnMount?: boolean;
}

export interface ISearchBarOwnProps extends ISearchBarConnectedProps {
    /**
     * The unique identifier of the SearchBar
     */
    id: string;
    /**
     * A callback function executed when a search is performed by either pressing Enter or clicking on the icon.
     *
     * @param filterText The current value
     */
    onSearch: (filterText: string) => void;
    /**
     * Additional CSS classes to set on the outermost element
     */
    containerClassNames?: IClassName;
    /**
     * Additional CSS classes to set on the inner input element
     */
    inputClassNames?: IClassName;
    /**
     * The text displayed inside the search bar when it is empty
     */
    placeholder?: string;
    /**
     * The minimum width of the SearchBar
     *
     * @default "500px"
     */
    minWidth?: string;
    /**
     * The maximum width of the SearchBar
     *
     * @default "500px"
     */
    maxWidth?: string;
}

export interface ISearchBarStateProps {
    /**
     * Whether the SearchBar is disabled. If disabled, it cannot be interracted with
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether a search is being performed. If true, a loading icon appears to indicate something is happening.
     *
     * @default false
     */
    searching?: boolean;
    /**
     * The value of the search bar. In other words, this is the text currently enterred in the SearchBar.
     *
     * @default ""
     */
    value?: string;
}

export interface ISearchBarDispatchProps {
    /**
     * A callback function executed when the component is mounted to the DOM
     */
    onMount?: () => void;
    /**
     * A callback function executed when the component is unmounted from the DOM
     */
    onUnmount?: () => void;
    /**
     * A callback function executed when the text in the SearchBar changes
     *
     * @param event The change event
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBarProps extends ISearchBarOwnProps, ISearchBarStateProps, ISearchBarDispatchProps {}

/**
 * @deprecated Use Mantine instead
 */
export class SearchBar extends Component<ISearchBarProps> {
    static defaultProps: Partial<ISearchBarProps> = {
        placeholder: '',
        disabled: false,
        searching: false,
        value: '',
        minWidth: '500px',
        maxWidth: '500px',
    };

    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount();
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount();
        }
    }

    render() {
        const {minWidth, maxWidth} = this.props;

        return (
            <div className={this.getContainerClasses()} style={{minWidth, maxWidth}}>
                <input
                    id={this.props.id}
                    type="text"
                    className={this.getInputClasses()}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled || this.props.searching}
                    value={this.props.value}
                    onKeyUp={(event) => event.keyCode === keyCode.enter && this.search()}
                    onChange={(event) => this.props.onChange && this.props.onChange(event)}
                />
                <div className="search-bar-icon-container flex">{this.getSearchIcon()}</div>
            </div>
        );
    }

    private getContainerClasses(): string {
        return classNames(
            'search-bar',
            {
                'search-bar-disabled': this.props.disabled,
                'search-bar-loading': this.props.searching,
            },
            this.props.containerClassNames
        );
    }

    private getInputClasses(): string {
        return classNames('search-bar-input', this.props.inputClassNames);
    }

    private getSearchIcon(): JSX.Element {
        const searchIcon = !this.props.searching ? (
            <SearchSize16Px height={16} className={this.props.disabled ? 'search-icon-disabled' : ''} />
        ) : (
            <LoadingSpinner size={16} />
        );

        return !this.props.searching && !this.props.disabled ? (
            <span onClick={() => this.search()}>{searchIcon}</span>
        ) : (
            searchIcon
        );
    }

    private search() {
        if (!this.props.disabled && !this.props.searching) {
            this.props.onSearch(this.props.value);
        }
    }
}
