import * as classNames from 'classnames';
import * as React from 'react';
import {InfiniteScrollProps} from 'react-infinite-scroll-component';
import * as _ from 'underscore';
import * as s from 'underscore.string';

import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {keyCode} from '../../utils/InputUtils';
import {Content} from '../content/Content';
import {FilterBox} from '../filterBox/FilterBox';
import {ISvgProps, Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';
import {DropdownSearchInfiniteScrollOptions} from './DropdownSearchInfiniteScrollOptions';

export interface IDropdownOption {
    svg?: ISvgProps;
    value: string;
    displayValue?: string;
    prefix?: string;
    selected?: boolean;
    custom?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    disabledTooltip?: ITooltipProps;
    default?: boolean;
    append?: string;
}

export interface IDropdownSearchStateProps {
    isOpened?: boolean;
    filterText?: string;
    options?: IDropdownOption[];
    activeOption?: IDropdownOption;
    setFocusOnDropdownButton?: boolean;
}

export interface IDropdownSearchOwnProps {
    id?: string;
    modMenu?: boolean;
    fixedPrepend?: string;
    containerClasses?: string[];
    defaultOptions?: IDropdownOption[];
    defaultSelectedOption?: IDropdownOption;
    filterPlaceholder?: string;
    maxWidth?: number | string;
    width?: number | string;
    hasFilterSuggestionBoxWidthFixed?: boolean;
    highlightThreshold?: number;
    highlightAllFilterResult?: boolean;
    noResultText?: string;
    createOptionText?: string;
    deselectAllTooltipText?: string;
    isDisabled?: boolean;
    onOptionClickCallBack?: (option: IDropdownOption) => void;
    onMountCallBack?: () => void;
    onClickCallBack?: () => void;
    supportSingleCustomOption?: boolean;
    searchThresold?: number;
    infiniteScroll?: InfiniteScrollProps;
    hasMoreItems?: () => boolean;
    customFiltering?: (filterText: string) => void;
}

export interface IDropdownSearchDispatchProps {
    onMount?: () => void;
    onDestroy?: () => void;
    onToggleDropdown?: () => void;
    onBlur?: (options: IDropdownOption[]) => void;
    onFocus?: () => void;
    onFilterTextChange?: (filterText: string) => void;
    onOptionClick?: (option: IDropdownOption) => void;
    onCustomOptionClick?: (displayValue: string) => void;
    onKeyDownFilterBox?: (keyCode: number, activeOption?: IDropdownOption) => void;
    onKeyDownDropdownButton?: (keyCode: number, activeOption?: IDropdownOption) => void;
    onMouseEnterDropdown?: (activeOption?: IDropdownOption) => void;
    onRemoveSelectedOption?: (value: string) => void;
    onRemoveAllSelectedOptions?: () => void;
    onClose?: () => void;
    updateOptions?: (options: IDropdownOption[]) => void;
}

export interface IDropdownSearchProps extends IDropdownSearchOwnProps, IDropdownSearchStateProps, IDropdownSearchDispatchProps {}

/**
 * @deprecated use components from SelectComponents instead
 */
export class DropdownSearch extends React.Component<IDropdownSearchProps, {}> {
    static defaultProps: Partial<IDropdownSearchProps> = {
        isOpened: false,
        highlightThreshold: 100,
        highlightAllFilterResult: false,
        noResultText: 'No results',
        searchThresold: 7,
    };

    filterInput: HTMLDivElement;
    ulElement: HTMLElement;

    protected dropdownButton: HTMLElement;

    componentDidUpdate() {
        this.updateScrollPositionBasedOnActiveElement();

        if (this.dropdownButton && this.props.setFocusOnDropdownButton && this.isSearchOn()) {
            this.dropdownButton.focus();
        }

        if (this.props.updateOptions && !this.props.options.length && this.props.defaultOptions && this.props.defaultOptions.length) {
            this.props.updateOptions(this.props.defaultOptions);
        }
    }

    componentWillMount() {
        if (this.props.onMount) {
            this.props.onMount();
        }

        if (this.props.onMountCallBack) {
            this.props.onMountCallBack();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {

        return (
            <div className={this.getClasses()} style={this.getStyles()}>
                {this.getMainInput()}
                {this.getDropdownMenu()}
            </div>
        );
    }

    protected getDropdownOptions(): JSX.Element[] {
        const ElementTag: string = this.props.infiniteScroll ? 'div' : 'li';
        const options = _.chain(this.getDisplayedOptions())
            .filter((option: IDropdownOption) => {
                const value = option.displayValue || option.value;
                return _.isEmpty(this.props.filterText)
                    || s.contains(value.toLowerCase(), this.props.filterText.toLowerCase());
            })
            .map((opt: IDropdownOption, index: number, opts: IDropdownOption[]) => {
                const optionClasses = classNames(
                    'dropdown-option',
                    {
                        'with-append': !_.isUndefined(opt.append),
                        'state-selected': opt.selected,
                    },
                );
                const wrapperClasses = classNames(
                    'option-wrapper',
                    {
                        'active': JSON.stringify(opt) === JSON.stringify(this.props.activeOption),
                        'disabled': !!opt.disabled,
                    },
                );

                const value = opt.displayValue || opt.value;
                const valueToShow = !!this.props.highlightAllFilterResult || opts.length <= this.props.highlightThreshold
                    ? this.getTextFiltered(value)
                    : value;

                const formattedOption = (
                    <ElementTag
                        key={opt.value}
                        className={wrapperClasses}
                        title={value}
                        data-value={opt.value}
                        onMouseDown={(e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e)}
                    >
                        <span className={optionClasses}>
                            {this.getDropdownPrepend(opt)}
                            {this.getSvg(opt)}
                            {valueToShow}
                        </span>
                        {this.getDropdownOptionAppend(opt)}
                    </ElementTag>
                );

                return opt.disabled && opt.disabledTooltip
                    ? <Tooltip key={opt.value} noSpanWrapper {...opt.disabledTooltip}>{formattedOption}</Tooltip>
                    : formattedOption;

            })
            .value();

        return options.length ? options : this.getNoOptions();
    }

    protected getSelectedOption(): IDropdownOption {
        return _.findWhere(this.props.options, {selected: true});
    }

    protected getSelectedOptions(): IDropdownOption[] {
        return _.where(this.props.options, {selected: true});
    }

    protected getDropdownOptionAppend(option?: IDropdownOption): JSX.Element {
        return option && option.append
            ? <div className='dropdown-option-append'>{option.append}</div>
            : null;
    }

    protected getNoOptions(): JSX.Element[] {
        return [
            <li key='noResultDropdownSearch'>
                <span className='no-search-results'>{this.props.noResultText}</span>
            </li>,
        ];
    }

    protected getSvg(option: IDropdownOption): JSX.Element {
        return option && option.svg
            ? (
                <span key={option.svg.name}
                    className='value-icon'>
                    <Svg {...option.svg} />
                </span>
            )
            : null;
    }

    protected getTextFiltered(text: string): Array<JSX.Element | string> | string {
        const originalText = (text || '').toString();
        if (!_.isEmpty(this.props.filterText)) {
            let highlightIndexKey: number = 0;
            const textFilterElements: Array<JSX.Element | string> = [''];
            let index: number = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
            while (index !== -1) {
                if (index > 0) {
                    textFilterElements.push(text.substring(0, index));
                }
                textFilterElements.push(
                    this.getTextElement(
                        text.substring(index, index + this.props.filterText.length),
                        originalText, highlightIndexKey,
                        'bold',
                    ),
                );
                text = text.substring(index + this.props.filterText.length);
                index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());
                highlightIndexKey += 1;
            }
            textFilterElements.push(text);

            return textFilterElements;
        }

        return text;
    }

    protected getTextElement(subText: string, text: string, highlightIndexKey: number, className: string = ''): JSX.Element {
        return (
            <span key={`${text}-${highlightIndexKey}`}
                className={className}>
                {subText}
            </span>
        );
    }

    protected getMainInputPrepend(option: IDropdownOption): JSX.Element {
        const prepend = this.props.fixedPrepend || (option && option.prefix);

        return prepend
            ? <Content key={prepend} classes={['dropdown-prepend']} content={prepend} />
            : null;
    }

    protected getDropdownPrepend(option: IDropdownOption): JSX.Element {
        return option && option.prefix
            ? <Content key={option.prefix} classes={['dropdown-prepend']} content={option.prefix} />
            : null;
    }

    protected getMainInput(): JSX.Element {
        const selectedOption: IDropdownOption = _.findWhere(this.props.options, {selected: true});
        const filterPlaceHolder: string = selectedOption && (selectedOption.displayValue || selectedOption.value)
            || this.props.filterPlaceholder;

        if (this.props.isOpened && (this.isSearchOn() || this.props.supportSingleCustomOption)) {
            return <FilterBox
                id={this.props.id}
                onFilter={(id, filterText) => this.handleOnFilterTextChange(filterText)}
                onBlur={() => this.handleOnBlur()}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}
                filterPlaceholder={filterPlaceHolder}
                isAutoFocus={true}
                filterText={this.props.filterText || ''}
            />;
        }
        const buttonClasses = classNames('btn dropdown-toggle dropdown-button-search-container mod-search', {
            'dropdown-toggle-placeholder': selectedOption && selectedOption.default === true,
        });

        return (
            <button
                className={buttonClasses}
                type='button'
                data-toggle='dropdown'
                onClick={() => this.handleOnClick()}
                onBlur={() => this.handleOnClose()}
                onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => this.handleOnKeyDownDropdownButton(e as any)}
                style={{
                    maxWidth: this.props.maxWidth,
                }}
                ref={(input: HTMLButtonElement) => this.dropdownButton = input}
                disabled={!!this.props.isDisabled}>
                {this.getMainInputPrepend(selectedOption)}
                {this.getSvg(selectedOption)}
                {this.getSelectedOptionElement()}
                {this.getDropdownOptionAppend(selectedOption)}
                <span className='dropdown-toggle-arrow'></span>
            </button>
        );
    }

    protected isScrolledIntoView(el: Element) {
        const boxTop = this.ulElement.getBoundingClientRect().top;
        const boxBottom = this.ulElement.getBoundingClientRect().bottom;
        const elTop = el.getBoundingClientRect().top;
        const elBottom = el.getBoundingClientRect().bottom;

        return (elTop >= boxTop) && (elBottom <= boxBottom);
    }

    protected getDisplayedOptions(): IDropdownOption[] {
        return _.reject(this.props.options, (option) => (!this.props.supportSingleCustomOption && option.custom) || option.hidden);
    }

    protected handleOnOptionClickOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.isKeyToPreventOnKeyDown(e)) {
            e.preventDefault();

            if (e.keyCode !== keyCode.upArrow && this.props.onOptionClickCallBack && this.props.activeOption) {
                this.props.onOptionClickCallBack(this.props.activeOption);
            }
        }
    }

    protected handleOnKeyDownFilterBox(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyDownFilterBox) {
            this.props.onKeyDownFilterBox(e.keyCode, this.props.activeOption);
        }

        this.handleOnOptionClickOnKeyDown(e);
    }

    protected getClasses() {
        return classNames(
            'dropdown',
            'mod-search',
            {
                'open': this.props.isOpened,
                'mod-menu': this.props.modMenu,
            },
            ...(this.props.containerClasses || []),
        );
    }

    protected getStyles() {
        return {
            width: this.props.width,
        };
    }

    private getDropdownMenu(): JSX.Element {
        if (!this.props.isOpened) {
            return null;
        }
        const dropdownOptions: JSX.Element[] = this.getDropdownOptions();
        return this.props.infiniteScroll
            ? (
                <DropdownSearchInfiniteScrollOptions
                    infiniteScroll={{
                        ...this.props.infiniteScroll,
                        dataLength: dropdownOptions.length,
                        hasMore: this.props.hasMoreItems && this.props.hasMoreItems(),
                    }}
                    onMouseEnter={() => this.handleOnMouseEnter()}
                    ulElementRefFunction={(menu: HTMLElement) => this.ulElement = menu}
                    options={dropdownOptions}
                />
            )
            : (
                <ul className='dropdown-menu'
                    ref={(menu: HTMLUListElement) => {this.ulElement = menu;}}
                    onMouseEnter={() => this.handleOnMouseEnter()}>
                    {dropdownOptions}
                </ul>
            );
    }

    private getSelectedOptionElement(): JSX.Element[] {
        if (this.props.options.length) {
            return _.map(this.getSelectedOptions(), (selectedOption: IDropdownOption) => {
                const displayValue = selectedOption.displayValue || selectedOption.value;
                return (
                    <span key={selectedOption.value}
                        className={classNames('dropdown-selected-value', {'with-append': !!selectedOption.append})}
                        data-value={selectedOption.value}
                        title={displayValue}>
                        {displayValue}
                    </span>
                );
            });
        }

        return null;
    }

    private isSearchOn(): boolean {
        return !!this.props.infiniteScroll || this.props.options.length > this.props.searchThresold;
    }

    private updateScrollPositionBasedOnActiveElement() {
        const activeLi: NodeListOf<Element> = this.ulElement ? this.ulElement.getElementsByClassName('active') : undefined;
        if (activeLi && activeLi.length) {
            const el: Element = activeLi[0];
            if (!this.isScrolledIntoView(el)) {
                if (el.getBoundingClientRect().bottom > this.ulElement.getBoundingClientRect().bottom) {
                    this.ulElement.scrollTop += el.getBoundingClientRect().bottom - this.ulElement.getBoundingClientRect().bottom;
                }
                if (el.getBoundingClientRect().top < this.ulElement.getBoundingClientRect().top) {
                    this.ulElement.scrollTop -= this.ulElement.getBoundingClientRect().top - el.getBoundingClientRect().top;
                }
            }
        }
    }

    private handleOnFilterTextChange(filterText: string) {
        if (this.props.customFiltering) {
            this.props.customFiltering(filterText);
        } else {
            callIfDefined(this.props.onFilterTextChange, filterText);
        }
    }

    private handleOnClick() {
        if (this.props.onClickCallBack) {
            this.props.onClickCallBack();
        }

        if (this.props.onToggleDropdown) {
            this.props.onToggleDropdown();
        }
    }

    private handleOnOptionClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (e.target) {
            const option = _.findWhere(this.props.options, {value: e.currentTarget.dataset.value});
            if (option && !option.disabled) {
                if (this.props.onOptionClick) {
                    this.props.onOptionClick(option);
                }

                if (this.props.onOptionClickCallBack) {
                    this.props.onOptionClickCallBack(option);
                }
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }

    private handleOnBlur() {
        if (this.props.onBlur && !this.props.setFocusOnDropdownButton) {
            this.props.onBlur(this.props.options);
        }
    }

    private handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    private isKeyToPreventOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        /**
         * Prevent Enter key because it triggers an undesirable click event
         * Prevent Tab key to prevent focusing on the next element when selecting an option
         * Prevent Up Arrow key when the first option in the dropdown is the active option to avoid two focus events to be triggered
         */
        return e.keyCode === keyCode.enter
            || e.keyCode === keyCode.tab
            || (e.keyCode === keyCode.upArrow && this.props.activeOption === this.props.options[0]);
    }

    private handleOnKeyDownDropdownButton(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyDownDropdownButton) {
            this.props.onKeyDownDropdownButton(e.keyCode, this.props.activeOption);
        }

        if (!this.isSearchOn()) {
            this.handleOnOptionClickOnKeyDown(e);
        }

        if (!this.isSearchOn()
            && _.contains([keyCode.downArrow, keyCode.upArrow], e.keyCode)) {
            e.preventDefault();
        }
    }

    private handleOnMouseEnter() {
        if (this.props.onMouseEnterDropdown) {
            this.props.onMouseEnterDropdown(this.props.activeOption);
        }
    }
}
