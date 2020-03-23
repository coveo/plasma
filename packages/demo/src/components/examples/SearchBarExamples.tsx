import * as React from 'react';
import {
    ISearchBarProps,
    ISearchBarStateProps,
    SearchBar,
    SearchBarConnected,
    toggleSearchBarDisabled,
    toggleSearching,
} from 'react-vapor';
import {findWhere} from 'underscore';

import {Store} from '../../Store';

class SearchBarExample extends React.Component<{}, ISearchBarStateProps> {
    constructor(props: ISearchBarProps) {
        super(props);

        this.state = {
            value: '',
            disabled: false,
            searching: false,
        };
    }

    render() {
        return (
            <SearchBar
                id="search-bar-1"
                placeholder="Search awesome things"
                value={this.state.value}
                disabled={this.state.disabled}
                searching={this.state.searching}
                onChange={(event) => this.setState({value: event.target.value})}
                onSearch={(filterText: string) => {
                    this.setState({searching: true});
                    setTimeout(() => {
                        this.setState({searching: false});
                        (document.querySelector('#search-bar-1') as HTMLElement).focus();
                    }, 800);
                }}
            />
        );
    }
}

export class SearchBarExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">SearchBar disabled</label>
                    <div className="text-dark-grey">
                        <SearchBar
                            id="search-bar-2"
                            disabled
                            placeholder="Currently disabled."
                            onSearch={() => alert('Implement your own search logic with the onSearch prop.')}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">SearchBar searching</label>
                    <div className="text-dark-grey">
                        <SearchBar
                            id="search-bar-3"
                            searching
                            placeholder="Searching for something"
                            onSearch={() => alert('Implement your own search logic with the onSearch prop.')}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">SearchBar not connected but fully working</label>
                    <div className="text-dark-grey">
                        <SearchBarExample />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">SearchBarConnected</label>
                    <div className="text-dark-grey">
                        <SearchBarConnected
                            id="search-bar-4"
                            placeholder="Type something and press enter, or click the loupe"
                            onSearch={(filterText: string) => {
                                Store.dispatch(toggleSearching('search-bar-4', true));
                                setTimeout(() => {
                                    Store.dispatch(toggleSearching('search-bar-4', false));
                                    (document.querySelector('#search-bar-4') as HTMLElement).focus();
                                }, 800);
                            }}
                        />
                        <button
                            className="btn mt1"
                            type="button"
                            onClick={() => {
                                const searchBar = findWhere(Store.getState().searchBars, {
                                    id: 'search-bar-4',
                                });
                                Store.dispatch(toggleSearchBarDisabled('search-bar-4', !searchBar.disabled));
                            }}
                        >
                            Toggle disabled state
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
