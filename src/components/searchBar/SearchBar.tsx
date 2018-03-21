import * as classNames from 'classnames';
import * as React from 'react';
import {InputConnected} from '../../Index';
import {IClassName} from '../../utils/ClassNameUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IInputProps, Input} from '../input/Input';
import {Svg} from '../svg/Svg';

export interface ISearchBarOwnProps {
    id: string;
    containerClassNames?: IClassName;
    inputClassNames?: IClassName;
    placeholder?: string;
    width?: string;
    onSearch?: (
        event: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>,
        filterText: string,
        disabled: boolean,
    ) => void;
    additionalInputProps?: Partial<IInputProps>;
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
        width: '400px',
        additionalInputProps: {},
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
        return (
            <div className={this.getContainerClasses()} style={{width: this.props.width}}>
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
        return !this.props.searching
            ? <Svg svgName='search' svgClass={this.props.disabled ? 'fill-light-grey' : 'fill-medium-blue'} />
            : <div className='search-bar-spinner'></div>;
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
            onKeyUp: (event) => this.props.onSearch(event, this.props.searchText, this.props.disabled),
            onChangeCallback: (event) => this.props.onSearch(event, this.props.searchText, this.props.disabled),
            ...this.props.additionalInputProps,
        };

        return this.props.withReduxState
            ? <InputConnected {...inputProps} />
            : <Input {...inputProps} />;
    }
}
