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
import {useRouter} from 'next/router';

import {FunctionComponent, useContext, useEffect, useState} from 'react';
import React from 'react';

import {Tile, TileProps} from '../building-blocs/Tile';
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
            {!state.hasResults && !state.isLoading ? (
                <NoSearchResultTemplate engine={engine} query={query} />
            ) : (
                <Section className="home flex-auto overflow-auto demo-content">
                    <Section className="section">
                        <h4 className="h4-book">
                            Showing results for <span className="h4">{query}</span>
                        </h4>
                        <p>
                            <span className="body-m">{state.results.length}</span>
                            {state.results.length === 1 ? ' result' : ' results'}
                        </p>
                        <div className="tile-grid">
                            {state.results.map(({title, raw, uniqueId, clickUri}: Result) => (
                                <Tile
                                    key={uniqueId}
                                    title={title}
                                    // href={clickUri.replace(/.+plasma\.coveo\.com\//, process.env.basePath)}
                                    href={clickUri.replace(/.+\/PR-2454\//, process.env.basePath)}
                                    description={raw.description as string}
                                    thumbnail={raw.thumbnail as TileProps['thumbnail']}
                                />
                            ))}
                        </div>
                    </Section>
                </Section>
            )}
        </>
    );
};

const Search = () => {
    const engine = useContext(EngineContext);
    const {query} = useRouter();
    const {updateQuery} = loadQueryActions(engine);
    const {logInterfaceLoad} = loadSearchAnalyticsActions(engine);
    const {registerNumberOfResults} = loadPaginationActions(engine);
    const {executeSearch} = loadSearchActions(engine);
    engine.dispatch(registerNumberOfResults(1000));
    engine.dispatch(updateQuery({q: query.q as string}));
    engine.dispatch(executeSearch(logInterfaceLoad()));
    const controller = buildResultList(engine);
    return <ResultListRenderer controller={controller} engine={engine} query={(query?.q as string) ?? ''} />;
};

export default Search;
