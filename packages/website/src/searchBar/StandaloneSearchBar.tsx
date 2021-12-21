import '@demo-styling/standaloneSearchBar.scss';

import {buildSearchBox, SearchBox as HeadlessSearchBox} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import {Button, ListBox, Svg} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';

interface ISearchboxProps {
    id: string;
}

const SearchBoxRenderer: FunctionComponent<{
    id: string;
    controller: HeadlessSearchBox;
}> = (props) => {
    const {id, controller} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), []);

    const ClearButton = () => (
        <button
            disabled={state.value === ''}
            className={classNames('clear-button', {'search-not-empty': state.value !== ''})}
            onClick={() => {
                controller.updateText('');
                controller.submit();
            }}
        >
            <Svg svgName="cross" svgClass="icon" />
        </button>
    );

    const SearchButton = () => (
        <Button
            classes={['search-button']}
            onClick={() => {
                controller.submit();
            }}
        >
            <Svg svgName={'search'} className="icon mod-stroke" />
        </Button>
    );

    const SearchResultListBox = () => (
        <>
            {(state.suggestions.length > 0 || state.isLoadingSuggestions) && (
                <ListBox
                    classes={['search-results-container']}
                    isLoading={state.isLoadingSuggestions}
                    items={state.suggestions.map((s) => ({
                        value: s.rawValue,
                        displayValue: s.highlightedValue,
                    }))}
                />
            )}
        </>
    );

    return (
        <div className="standaloneSearchBar">
            {/* Prevents chrome from providing autocompletions */}
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <input
                    id={id}
                    className="search-bar"
                    type="text"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onKeyDown={(event) => event.key === 'Enter' && controller.submit()}
                />
                <ClearButton />
                <SearchButton />
                <SearchResultListBox />
            </form>
        </div>
    );
};

export const StandaloneSearchBar: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine, {options: {id}});
    return <SearchBoxRenderer controller={controller} id={id} />;
};
