import {
    buildResultList,
    loadPaginationActions,
    loadQueryActions,
    loadSearchActions,
    loadSearchAnalyticsActions,
    Result,
    ResultList as HeadlessResultList,
    SearchEngine,
} from '@coveo/headless';
import {Button, Section} from '@coveord/plasma-react';

import {useSearchParams} from 'react-router-dom';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import React from 'react';

import results_empty_state from '../../resources/results_empty_state.png';
import {Tile} from '../building-blocs/Tile';
import {EngineContext} from '../search/engine/EngineContext';

interface ResultListProps {
    controller: HeadlessResultList;
    engine: SearchEngine;
    query: string;
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
    const {controller, engine, query} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    const resetSearch = () => {
        const {updateQuery} = loadQueryActions(engine);
        engine.dispatch(updateQuery({q: ''}));
        location.assign(`#/search?q=${''}`);
    };

    const NoResultTemplate = () => (
        <div className="grid item-center">
            <img className="mb3" src={results_empty_state} />
            <div className="grid item-center">
                <span className="h4-book mb1 nowrap">
                    We couldn’t find anything for <span className="h4"> “{query}”</span>
                </span>
                <span className="h6-subdued mb3 nowrap">
                    You may want to try using different keywords, or checking for spelling mistakes.
                </span>
                <Button primary onClick={() => resetSearch()}>
                    Clear search
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {!state.hasResults ? (
                <NoResultTemplate />
            ) : (
                <Section className="home flex-auto overflow-auto demo-content">
                    <Section className="section">
                        <h2>Search Results:</h2>
                        <div className="body-l-book plasma-description">Patate King!</div>
                        <div className="tile-grid">
                            {state.results.map(({title, clickUri, excerpt, uniqueId}: Result) =>
                                title !== 'Plasma Design System' ? (
                                    <Tile
                                        key={uniqueId}
                                        title={title}
                                        href={clickUri.slice(clickUri.indexOf('#'))}
                                        description={excerpt}
                                    />
                                ) : null
                            )}
                        </div>
                    </Section>
                </Section>
            )}
        </>
    );
};

const SearchResultPage = () => {
    const engine = useContext(EngineContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const {updateQuery} = loadQueryActions(engine);
    const {logInterfaceLoad} = loadSearchAnalyticsActions(engine);
    const {registerNumberOfResults} = loadPaginationActions(engine);
    const {executeSearch} = loadSearchActions(engine);
    engine.dispatch(registerNumberOfResults(1000));
    engine.dispatch(updateQuery({q: query}));
    engine.dispatch(executeSearch(logInterfaceLoad()));
    const controller = buildResultList(engine);
    return <ResultListRenderer controller={controller} engine={engine} query={query} />;
};

export default SearchResultPage;
