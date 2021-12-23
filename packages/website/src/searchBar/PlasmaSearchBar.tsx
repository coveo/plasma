import '@demo-styling/plasmaSearchBar.scss';

import {
    buildResultList,
    buildSearchBox,
    SearchBox as HeadlessSearchBox,
    ResultList as HeadlessResultList,
    loadSearchHubActions,
    loadSearchActions,
    loadSearchAnalyticsActions,
} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import {Button, keyCode, Svg} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';
import {PlasmaSearchResultList} from './PlasmaSearchResultList';

interface ISearchboxProps {
    id: string;
}

const SearchBoxRenderer: FunctionComponent<{
    id: string;
    setSearchHub: (searchHub: string) => void;
    executeSearch: () => void;
    searchController: HeadlessSearchBox;
    resultListController: HeadlessResultList;
}> = (props) => {
    const {id, setSearchHub, executeSearch, searchController, resultListController} = props;
    const [state, setState] = useState(searchController.state);

    useEffect(() => searchController.subscribe(() => setState(searchController.state)), []);

    useEffect(() => {
        setSearchHub('plasmaComponents');
    }, []);

    const ClearButton = () => (
        <button
            disabled={state.value === ''}
            className={classNames('clear-button', {'search-not-empty': state.value !== ''})}
            onClick={() => {
                searchController.clear();
                // trouver une façon de clearer la listBox en même temps xD
            }}
        >
            <Svg svgName="cross" svgClass="icon" />
        </button>
    );

    const SearchButton = () => (
        <Button
            classes={['search-button']}
            onClick={() => {
                searchController.submit();
            }}
        >
            <Svg svgName={'search'} className="icon mod-stroke" />
        </Button>
    );

    return (
        <div className="plasmaSearchBar">
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();
                    executeSearch();
                }}
            >
                <input
                    id={id}
                    className="search-bar"
                    type="search"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => searchController.updateText(event.target.value)}
                    onKeyDown={(event) => event.keyCode === keyCode.enter && searchController.submit()}
                />
                <ClearButton />
                <SearchButton />
                <PlasmaSearchResultList controller={resultListController} />
            </form>
        </div>
    );
};

export const PlasmaSearchBar: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const {setSearchHub} = loadSearchHubActions(engine);
    const {executeSearch} = loadSearchActions(engine);
    const {logSearchboxSubmit} = loadSearchAnalyticsActions(engine);
    const controller = buildSearchBox(engine, {options: {id}});
    const resultListController = buildResultList(engine, {options: {fieldsToInclude: ['componentname']}});

    return (
        <SearchBoxRenderer
            setSearchHub={(searchHub) => engine.dispatch(setSearchHub(searchHub))}
            executeSearch={() => engine.dispatch(executeSearch(logSearchboxSubmit()))}
            searchController={controller}
            resultListController={resultListController}
            id={id}
        />
    );
};
