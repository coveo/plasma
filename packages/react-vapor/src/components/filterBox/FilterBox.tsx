import * as classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg/Svg';

export interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
    id?: string;
    containerClasses?: string[];
    filterPlaceholder?: string;
    onBlur?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    isAutoFocus?: boolean;
    maxWidth?: number;
    withTitleOnInput?: boolean;
    truncate?: boolean;
    onFilterCallback?: (id: string, filterText: string) => void;
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

    constructor(props: IFilterBoxProps) {
        super(props);
    }

    static defaultProps: Partial<IFilterBoxProps> = {
        isAutoFocus: false,
    };

    private handleChange = (nextInputValue: string) => {
        this.filterInput.value = nextInputValue;
        this.filterInput.nextElementSibling.setAttribute('class', this.filterInput.value.length ? '' : 'hidden');

        if (this.props.onFilterCallback) {
            this.props.onFilterCallback(this.props.id, this.filterInput.value);
        }

        if (this.props.onFilter) {
            this.props.onFilter(this.props.id, this.filterInput.value);
        }
    }

    private handleOnBlur() {
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    private handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    }

    private handleOnKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    }

    private clearValue = () => {
        this.filterInput.focus();
        this.handleChange('');
    }

    placeCursorAtEndOfInputValue(e: React.FocusEvent<any>) {
        const input = e.target as HTMLInputElement;
        const temp = input.value;
        input.value = '';
        input.value = temp;
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender(this.props.id);
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy(this.props.id);
        }
    }

    componentWillReceiveProps(nextProps: IFilterBoxProps) {
        if (this.props.filterText !== nextProps.filterText && this.filterInput.value !== nextProps.filterText) {
            this.handleChange(nextProps.filterText);
        }
    }

    render() {
        const inputMaxWidth = {maxWidth: `${this.props.maxWidth}px`};
        const filterPlaceholder = this.props.filterPlaceholder || FILTER_PLACEHOLDER;
        const filterBoxContainerClasses = classNames('filter-container', this.props.containerClasses);
        const filterInputClasses = classNames('filter-box', {'truncate': this.props.truncate});
        const svgClearClasses = classNames({'hidden': !(this.filterInput && this.filterInput.value)});

        return (
            <div className={this.props.className}>
                <div
                    id={this.props.id}
                    className={filterBoxContainerClasses}
                    style={inputMaxWidth}
                    title={this.filterInput && this.props.withTitleOnInput ? this.filterInput.value : undefined}>
                    <input
                        ref={(filterInput: HTMLInputElement) => this.filterInput = filterInput}
                        type='text'
                        className={filterInputClasses}
                        placeholder={filterPlaceholder}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e.currentTarget.value)}
                        onBlur={() => this.handleOnBlur()}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {this.placeCursorAtEndOfInputValue(e);}}
                        onKeyDown={(e) => this.handleOnKeyDown(e)}
                        onKeyUp={(e) => this.handleOnKeyUp(e)}
                        style={inputMaxWidth}
                        autoFocus={this.props.isAutoFocus}
                    />
                    <Svg svgName='clear' className={svgClearClasses} svgClass='icon mod-lg fill-medium-grey' onClick={() => this.clearValue()} />
                    <Svg svgName='filter' className='filter-icon' svgClass='icon fill-medium-grey mod-lg' />

                </div>
                {this.props.children}
            </div>
        );
    }
}
