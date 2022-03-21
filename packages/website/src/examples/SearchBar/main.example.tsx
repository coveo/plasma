import {SearchBar} from '@coveord/plasma-react';
import * as React from 'react';

export default () => {
    const [isSearching, setSearching] = React.useState(false);
    const [value, setValue] = React.useState('');

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
