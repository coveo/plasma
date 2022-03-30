import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';

export interface IFilterBoxOwnProps extends React.ClassAttributes<typeof FilterBox> {
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

export const FilterBox: React.FunctionComponent<IFilterBoxProps> = ({
    className,
    containerClasses,
    onFilterCallback,
    onFilter,
    children,
    onKeyDown,
    onKeyUp,
    id,
    filterText,
    withTitleOnInput,
    filterPlaceholder,
    maxWidth,
    truncate,
    isAutoFocus = false,
    onBlur,
}) => {
    let filterInput: HTMLInputElement;
    // stackoverflow.com/questions/60216787/react-autofocus-attribute-is-not-rendered

    const handleChange = (nextInputValue: string) => {
        filterInput.value = nextInputValue;
        filterInput.nextElementSibling.setAttribute('class', filterInput.value.length ? '' : 'hidden');

        onFilterCallback?.(id, filterInput.value);
        onFilter?.(id, filterInput.value);
    };

    const clearValue = () => {
        filterInput.focus();
        handleChange('');
    };

    const placeCursorAtEndOfInputValue = (e: React.FocusEvent<any>) => {
        const input = e.target as HTMLInputElement;
        const temp = input.value;
        input.value = '';
        input.value = temp;
    };

    React.useEffect(() => {
        if (filterInput?.value !== filterText) {
            handleChange(filterText);
        }
    }, [filterText]);

    const inputMaxWidth = {maxWidth: `${maxWidth}px`};
    const placeholder = filterPlaceholder || FILTER_PLACEHOLDER;
    const filterBoxContainerClasses = classNames('filter-container', containerClasses);
    const filterInputClasses = classNames('filter-box', {truncate: truncate});
    const svgClearClasses = classNames({hidden: !(filterInput && filterInput.value)});

    return (
        <div className={className}>
            <div
                id={id}
                className={filterBoxContainerClasses}
                style={inputMaxWidth}
                title={filterInput && withTitleOnInput ? filterInput.value : undefined}
            >
                <input
                    ref={(input: HTMLInputElement) => {
                        filterInput = input;
                    }}
                    type="text"
                    className={filterInputClasses}
                    placeholder={placeholder}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e.currentTarget.value)}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                        placeCursorAtEndOfInputValue(e);
                    }}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    style={inputMaxWidth}
                    autoFocus={isAutoFocus}
                />
                <Svg svgName="clear" className={svgClearClasses} svgClass="icon mod-lg" onClick={() => clearValue()} />
                <Svg svgName="filter" className="filter-icon" svgClass="icon mod-lg" />
            </div>
            {children}
        </div>
    );
};
