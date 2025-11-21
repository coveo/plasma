import {IconSearch} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import {ActionIcon} from '../../ActionIcon/ActionIcon.js';

export interface SearchProps {
    handleSearch: () => void;
}

const SearchButton: FunctionComponent<SearchProps> = ({handleSearch}) => (
    <ActionIcon.Quaternary onClick={handleSearch}>
        <IconSearch aria-label="Search" size={16} />
    </ActionIcon.Quaternary>
);

export const Search: FunctionComponent<SearchProps> = ({...params}) => <SearchButton {...params} />;
