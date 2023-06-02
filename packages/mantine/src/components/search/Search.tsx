import {SearchSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon} from '@mantine/core';

export interface SearchProps {
    handleSearch: () => void;
}

const SearchButton: React.FunctionComponent<SearchProps> = ({handleSearch}) => (
    <ActionIcon onClick={handleSearch}>
        <SearchSize16Px height={16}></SearchSize16Px>
    </ActionIcon>
);

export const Search: React.FunctionComponent<SearchProps> = ({...params}) => <SearchButton {...params} />;
