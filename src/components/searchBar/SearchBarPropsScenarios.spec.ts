import {noop} from 'underscore';
import {ISearchBarProps} from './SearchBar';

export const searchBarPropsScenarios: ISearchBarProps[] = [
    {
        id: 'super-search-bar',
        onSearch: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
        onChangeCallback: noop,
        disabled: true,
        searching: false,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
        onChangeCallback: noop,
        disabled: false,
        searching: true,
        searchText: 'txetHcreas',
    },
];

export const searchBarConnectedPropsScenarios: ISearchBarProps[] = [
    {
        id: 'super-search-bar',
        onSearch: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
        onChangeCallback: noop,
    },
    {
        id: 'super-search-bar',
        onSearch: noop,
        inputClassNames: 'world-class',
        placeholder: 'hold me tight',
        minWidth: '200px',
        maxWidth: '300px',
        additionalInputProps: {
            type: 'number',
        },
        onChangeCallback: noop,
    },
];
