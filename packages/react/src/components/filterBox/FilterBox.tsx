import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';

export interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
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
    onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Callback function that runs onKeyUp
     *
     * @param evt the keyboard event
     */
    onKeyUp?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Wheter to  automatically focus on the filter box
     *
     * @default false
     */
    isAutoFocus?: boolean;
    /**
     * The maximum width in px of the filter box
     */
    maxWidth?: number;
    /**
     * Wheter to display a title on the input
     */
    withTitleOnInput?: boolean;
    /**
     * Wheter to truncate the input or not
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

export class FilterBox extends React.Component<IFilterBoxProps, any> {
    filterInput: HTMLInputElement;

    static defaultProps: Partial<IFilterBoxProps> = {
        isAutoFocus: false,
    };

    private handleChange = (nextInputValue: string) => {
        this.filterInput.value = nextInputValue;
        this.filterInput.nextElementSibling.setAttribute('class', this.filterInput.value.length ? '' : 'hidden');

        this.props.onFilterCallback?.(this.props.id, this.filterInput.value);
        this.props.onFilter?.(this.props.id, this.filterInput.value);
    };

    private clearValue = () => {
        this.filterInput.focus();
        this.handleChange('');
    };

    placeCursorAtEndOfInputValue(e: React.FocusEvent<any>) {
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
        const filterBoxContainerClasses = classNames('filter-container', this.props.containerClasses);
        const filterInputClasses = classNames('filter-box', {truncate: this.props.truncate});
        const svgClearClasses = classNames({hidden: !(this.filterInput && this.filterInput.value)});

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
                        onChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e.currentTarget.value)}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                            this.placeCursorAtEndOfInputValue(e);
                        }}
                        onBlur={this.props.onBlur}
                        onKeyDown={this.props.onKeyDown}
                        onKeyUp={this.props.onKeyUp}
                        style={inputMaxWidth}
                    />
                    <Svg
                        svgName="clear"
                        className={svgClearClasses}
                        svgClass="icon mod-lg"
                        onClick={() => this.clearValue()}
                    />
                    <Svg svgName="filter" className="filter-icon" svgClass="icon mod-lg" />
                </div>
                {this.props.children}
            </div>
        );
    }
}
