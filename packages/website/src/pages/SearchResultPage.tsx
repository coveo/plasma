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
import {Section} from '@coveord/plasma-react';

import {useSearchParams} from 'react-router-dom';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import React from 'react';

import {Tile} from '../building-blocs/Tile';
import {EngineContext} from '../search/engine/EngineContext';
import {NoSearchResultTemplate} from '../search/NoSearchResultTemplate';

interface ResultListProps {
    controller: HeadlessResultList;
    engine: SearchEngine;
    query: string;
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
    const {controller, engine, query} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    return (
        <>
            {!state.hasResults ? (
                <NoSearchResultTemplate engine={engine} query={query} />
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
