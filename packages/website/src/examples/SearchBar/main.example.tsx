import {SearchBar} from '@coveord/plasma-react';
import {useState} from 'react';

export default () => {
    const [isSearching, setSearching] = useState(false);
    const [value, setValue] = useState('');

    return (
        <SearchBar
            id="search-bar-1"
            placeholder="Search for something..."
            value={value}
            disabled={false}
            searching={isSearching}
            onChange={(event) => setValue(event.target.value)}
            onSearch={() => {
                setSearching(true);
                setTimeout(() => {
                    setSearching(false);
                }, 800);
            }}
        />
    );
};
