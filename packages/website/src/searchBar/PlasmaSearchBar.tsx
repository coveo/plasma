import '@demo-styling/plasmaSearchBar.scss';

import {
    buildResultList,
    buildSearchBox,
    ResultList as HeadlessResultList,
    SearchBox as HeadlessSearchBox,
    loadSearchHubActions,
} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useRef, useState} from 'react';
import * as React from 'react';
import {Button, IItemBoxProps, keyCode, ListBox, Svg} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';

interface ISearchboxProps {
    id: string;
}

const SearchBoxRenderer: FunctionComponent<{
    id: string;
    setSearchHub: (searchHub: string) => void;
    searchController: HeadlessSearchBox;
    resultListController: HeadlessResultList;
}> = (props) => {
    const {id, setSearchHub, searchController, resultListController} = props;
    const [stateSearchBox, setStateSearchBox] = useState(searchController.state);
    const [stateResultList, setStateResultList] = useState(resultListController.state);
    const previousSearchId = useRef('');

    useEffect(() => {
        searchController.subscribe(() => setStateSearchBox(searchController.state));
        resultListController.subscribe(() => setStateResultList(resultListController.state));
        setSearchHub('plasmaComponents');
    }, []);

    const isNewSearchEvent = () => {
        const currentSearchId = stateResultList.searchResponseId;

        if (currentSearchId !== previousSearchId.current) {
            previousSearchId.current = currentSearchId;
            return true;
        }
        return false;
    };

    const ClearButton = () => (
        <button
            disabled={stateSearchBox.value === ''}
            className={classNames('clear-button', {'search-not-empty': stateSearchBox.value !== ''})}
            onClick={() => {
                searchController.clear();
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

    const ResultList = () => {
        const navigate = (item: IItemBoxProps) => {
            window.open(item.value, '_self');
        };

        const results: IItemBoxProps[] = stateResultList.results.map((result) => ({
            value: result.clickUri,
            displayValue: result.raw.componentname,
        }));

        return (
            <ListBox
                classes={['search-results-container']}
                isLoading={stateResultList.isLoading}
                items={results}
                onOptionClick={navigate}
            />
        );
    };

    return (
        <div className="plasmaSearchBar">
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    id={id}
                    className="search-bar"
                    type="search"
                    placeholder={'Find a component...'}
                    value={stateSearchBox.value}
                    onChange={(event) => searchController.updateText(event.target.value)}
                    onKeyDown={(event) => event.keyCode === keyCode.enter && searchController.submit()}
                />
                <ClearButton />
                <SearchButton />
                {isNewSearchEvent() && <ResultList />}
            </form>
        </div>
    );
};

export const PlasmaSearchBar: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const {setSearchHub} = loadSearchHubActions(engine);
    const controller = buildSearchBox(engine, {options: {id}});
    const resultListController = buildResultList(engine, {options: {fieldsToInclude: ['componentname']}});

    return (
        <SearchBoxRenderer
            setSearchHub={(searchHub) => engine.dispatch(setSearchHub(searchHub))}
            searchController={controller}
            resultListController={resultListController}
            id={id}
        />
    );
};
