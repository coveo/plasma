import * as classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';
import {keyCode} from '../../utils/InputUtils';
import {Svg} from '../svg/Svg';

export interface ISearchBarConnectedProps {
    /**
     * If true, the search bar will be disabled in the UI and in the state on mount.
     * False by default.
     */
    disabledOnMount?: boolean;
}

export interface ISearchBarOwnProps extends ISearchBarConnectedProps {
    id: string;
    onSearch: (filterText: string) => void;
    containerClassNames?: IClassName;
    inputClassNames?: IClassName;
    placeholder?: string;
    minWidth?: string;
    maxWidth?: string;
}

export interface ISearchBarStateProps {
    disabled?: boolean;
    searching?: boolean;
    value?: string;
}

export interface ISearchBarDispatchProps {
    onMount?: () => void;
    onUnmount?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBarProps extends ISearchBarOwnProps, ISearchBarStateProps, ISearchBarDispatchProps {}

export class SearchBar extends React.Component<ISearchBarProps> {
    static defaultProps: Partial<ISearchBarProps> = {
        placeholder: '',
        disabled: false,
        searching: false,
        value: '',
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
                <input
                    id={this.props.id}
                    type='text'
                    className={this.getInputClasses()}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled || this.props.searching}
                    value={this.props.value}
                    onKeyUp={(event) => event.keyCode === keyCode.enter && this.search()}
                    onChange={(event) => this.props.onChange && this.props.onChange(event)}
                />
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

    private search() {
        if (!this.props.disabled && !this.props.searching) {
            this.props.onSearch(this.props.value);
        }
    }
}
