import {CrossSize16Px, FilterSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {ClassAttributes, Component, FocusEvent, FormEvent, KeyboardEvent, ReactNode} from 'react';

export interface IFilterBoxOwnProps extends ClassAttributes<FilterBox> {
    /**
     * The unique identifier of that filter box
     */
    id?: string;
    /**
     * list of CSS classes to add on the container
     */
    containerClasses?: string[];
    /**
     * Placeholder of the input element
     */
    filterPlaceholder?: string;
    /**
     * Callback function that run when the filter box lose the focus
     */
    onBlur?: () => void;
    /**
     * Callback function that runs onKeyDown
     *
     * @param evt the keyboard event
     */
    onKeyDown?: (evt: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Callback function that runs onKeyUp
     *
     * @param evt the keyboard event
     */
    onKeyUp?: (evt: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Whether to automatically focus on the filter box
     *
     * @default false
     */
    isAutoFocus?: boolean;
    /**
     * Whether to disable the filter box
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The maximum width in px of the filter box
     */
    maxWidth?: number;
    /**
     * Whether to display a title on the input
     */
    withTitleOnInput?: boolean;
    /**
     * Whether to truncate the input or not
     */
    truncate?: boolean;
    /**
     * Callback funtion that runs when the filter changes
     *
     * @param id the unique identifier of the filter box
     * @param filterText the value of the filter box
     */
    onFilterCallback?: (id: string, filterText: string) => void;
    /**
     * CSS class to add on the element
     */
    className?: string;
    children?: ReactNode;
}

export interface IFilterBoxStateProps {
    filterText?: string;
}

export interface IFilterBoxDispatchProps {
    onRender?: (id: string) => void;
    onDestroy?: (id: string) => void;
    onFilter?: (id: string, filterText: string) => void;
}

export interface IFilterBoxProps extends IFilterBoxOwnProps, IFilterBoxStateProps, IFilterBoxDispatchProps {}

export const FILTER_PLACEHOLDER: string = 'Filter';

/**
 * @deprecated use Mantine instead
 */
export class FilterBox extends Component<IFilterBoxProps, any> {
    filterInput: HTMLInputElement;

    static defaultProps: Partial<IFilterBoxProps> = {
        isAutoFocus: false,
        disabled: false,
    };

    private handleIcons = (inputValue: string) => {
        if (inputValue.length !== 0) {
            this.filterInput?.nextElementSibling?.classList?.add('hidden'); // hide filter icon
            this.filterInput?.nextElementSibling?.nextElementSibling?.classList?.remove('hidden'); // show clear icon
        } else {
            this.filterInput?.nextElementSibling?.classList?.remove('hidden'); // show filter icon
            this.filterInput?.nextElementSibling?.nextElementSibling?.classList?.add('hidden'); // hide clear icon
        }
    };

    private handleChange = (nextInputValue: string) => {
        this.filterInput.value = nextInputValue;
        this.handleIcons(nextInputValue);
        this.props.onFilterCallback?.(this.props.id, this.filterInput.value);
        this.props.onFilter?.(this.props.id, this.filterInput.value);
    };

    private clearValue = () => {
        this.filterInput.focus();
        this.handleChange('');
    };

    placeCursorAtEndOfInputValue(e: FocusEvent<any>) {
        const input = e.target as HTMLInputElement;
        const temp = input.value;
        input.value = '';
        input.value = temp;
    }

    componentDidMount() {
        this.props.onRender?.(this.props.id);
    }

    componentWillUnmount() {
        this.props.onDestroy?.(this.props.id);
    }

    componentDidUpdate(prevProps: IFilterBoxProps) {
        if (this.props.filterText !== prevProps.filterText && this.filterInput?.value !== this.props.filterText) {
            this.handleChange(this.props.filterText);
        }
    }

    render() {
        const inputMaxWidth = {maxWidth: `${this.props.maxWidth}px`};
        const filterPlaceholder = this.props.filterPlaceholder || FILTER_PLACEHOLDER;
        const filterBoxContainerClasses = classNames(
            'flex filter-container',
            {disabled: this.props.disabled},
            this.props.containerClasses,
        );
        const filterInputClasses = classNames('flex filter-box', {truncate: this.props.truncate});

        return (
            <div className={this.props.className}>
                <div
                    id={this.props.id}
                    className={filterBoxContainerClasses}
                    style={inputMaxWidth}
                    title={this.filterInput && this.props.withTitleOnInput ? this.filterInput.value : undefined}
                >
                    <input
                        ref={(filterInput: HTMLInputElement) => {
                            this.filterInput = filterInput;

                            if (this.props.isAutoFocus) {
                                this.filterInput?.focus?.();
                            }
                        }}
                        type="text"
                        className={filterInputClasses}
                        placeholder={filterPlaceholder}
                        onChange={(e: FormEvent<HTMLInputElement>) => this.handleChange(e.currentTarget.value)}
                        onFocus={(e: FocusEvent<HTMLInputElement>) => {
                            this.placeCursorAtEndOfInputValue(e);
                        }}
                        onBlur={this.props.onBlur}
                        onKeyDown={this.props.onKeyDown}
                        onKeyUp={this.props.onKeyUp}
                        style={inputMaxWidth}
                        disabled={this.props.disabled}
                    />
                    <FilterSize16Px
                        height={16}
                        className="flex filter-box-icon"
                        aria-hidden={!!this.filterInput?.value}
                    />
                    <CrossSize16Px
                        height={16}
                        className="flex filter-box-icon clear-icon hidden"
                        onClick={() => this.clearValue()}
                        aria-hidden={!this.filterInput?.value}
                    />
                </div>
                {this.props.children}
            </div>
        );
    }
}
