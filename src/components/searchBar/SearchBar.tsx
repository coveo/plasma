import * as classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';
import {keyCode} from '../../utils/InputUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IInputProps, Input} from '../input/Input';
import {InputConnected} from '../input/InputConnected';
import {Svg} from '../svg/Svg';

export interface ISearchBarOwnProps {
    id: string;
    onSearch: (filterText: string) => void;
    containerClassNames?: IClassName;
    inputClassNames?: IClassName;
    placeholder?: string;
    minWidth?: string;
    maxWidth?: string;
    onChangeCallback?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

export interface ISearchBarStateProps extends IReduxStatePossibleProps {
    disabled?: boolean;
    searching?: boolean;
    searchText?: string;
}

export interface ISearchBarDispatchProps {
    onMount?: () => void;
    onUnmount?: () => void;
}

export interface ISearchBarProps extends ISearchBarOwnProps, ISearchBarStateProps, ISearchBarDispatchProps {}

export class SearchBar extends React.Component<ISearchBarProps> {
    static defaultProps: Partial<ISearchBarProps> = {
        placeholder: '',
        disabled: false,
        searching: false,
        searchText: '',
        minWidth: '500px',
        maxWidth: '500px',
    };

    componentWillMount() {
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
                {this.getInput()}
                <div className='search-bar-icon-container'>
                    {this.getSearchIcon()}
                </div>
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
            this.props.containerClassNames,
        );
    }

    private getInputClasses(): string {
        return classNames(
            'search-bar-input',
            this.props.inputClassNames,
        );
    }

    private getSearchIcon(): JSX.Element {
        const searchIcon = !this.props.searching
            ? <Svg svgName='search' svgClass={this.props.disabled ? 'fill-light-grey' : 'fill-medium-blue'} />
            : <div className='search-bar-spinner'></div>;

        return !this.props.searching && !this.props.disabled
            ? <span onClick={() => this.search()}>{searchIcon}</span>
            : searchIcon;
    }

    private getInput(): JSX.Element {
        const inputProps: IInputProps = {
            id: this.props.id,
            type: 'text',
            innerInputClasses: this.getInputClasses(),
            placeholder: this.props.placeholder,
            disabled: this.props.disabled || this.props.searching,
            value: this.props.searchText,
            rawInput: true,
            onKeyUp: (event) => event.keyCode === keyCode.enter && this.search(),
            onChangeCallback: (event) => this.props.onChangeCallback && this.props.onChangeCallback(event),
        };

        return this.props.withReduxState
            ? <InputConnected {...inputProps} />
            : <Input {...inputProps} />;
    }

    private search() {
        if (!this.props.disabled && !this.props.searching && !!this.props.searchText) {
            this.props.onSearch(this.props.searchText);
        }
    }
}
