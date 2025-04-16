import {IconSearch} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import {ActionIcon} from '../../action-icon';

export interface SearchProps {
    handleSearch: () => void;
}

const SearchButton: FunctionComponent<SearchProps> = ({handleSearch}) => (
    <ActionIcon.Quaternary onClick={handleSearch}>
        <IconSearch size={20} />
    </ActionIcon.Quaternary>
);

export const Search: FunctionComponent<SearchProps> = ({...params}) => <SearchButton {...params} />;
