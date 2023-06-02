import {SearchSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon} from '@mantine/core';

export interface SearchProps {
    /**
     * Called each time the search button is clicked.
     */
    handleSearch: () => void;
}

const SearchButton: React.FunctionComponent<SearchProps> = ({handleSearch}) => (
    <ActionIcon onClick={handleSearch}>
        <SearchSize16Px height={16}></SearchSize16Px>
    </ActionIcon>
);

export const Search: React.FunctionComponent<SearchProps> = ({...others}) => <SearchButton {...others} />;
