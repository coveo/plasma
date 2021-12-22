import '@demo-styling/plasmaSearchBar.scss';

import {
    buildResultList,
    buildSearchBox,
    SearchBox as HeadlessSearchBox,
    ResultList as HeadlessResultList,
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
    searchController: HeadlessSearchBox;
    resultListController: HeadlessResultList;
}> = (props) => {
    const {id, searchController, resultListController} = props;
    const [state, setState] = useState(searchController.state);

    useEffect(() => searchController.subscribe(() => setState(searchController.state)), []);

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
            {/* Prevents chrome from providing autocompletions */}
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <input
                    id={id}
                    className="search-bar"
                    type="text"
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
    const controller = buildSearchBox(engine, {options: {id}});
    const resultListController = buildResultList(engine, {options: {fieldsToInclude: ['componentname']}});
    return <SearchBoxRenderer searchController={controller} resultListController={resultListController} id={id} />;
};
