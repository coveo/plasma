import {FunctionComponent, useContext, useEffect, useRef, useState} from 'react';
import React from 'react';

import {
    buildResultList,
    ResultList as HeadlessResultList,
    loadQueryActions,
    Result,
    SearchEngine,
} from '@coveo/headless';
import {Section, Tile} from '@coveord/plasma-react';
import {useSearchParams} from 'react-router-dom';
import {EngineContext} from '../../search/engine/EngineContext';

interface ResultListProps {
    controller: HeadlessResultList;
    query: string;
    engine: SearchEngine;
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
    const {controller, engine, query} = props;
    const [state, setState] = useState(controller.state);
    // const previousSearchId = useRef('');

    // const isNewSearchEvent = () => {
    //     const currentSearchId = state.searchResponseId;

    //     if (currentSearchId !== previousSearchId.current) {
    //         previousSearchId.current = currentSearchId;
    //         return true;
    //     }
    //     return false;
    // };

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);
    useEffect(() => {
        const {updateQuery} = loadQueryActions(engine);
        engine.dispatch(updateQuery({q: query}));
        engine.executeFirstSearch();
    }, [query]);

    return (
        <>
            <Section className="home flex-auto overflow-auto demo-content">
                <Section className="section">
                    <h2>Search Results:</h2>
                    <div className="body-l-book plasma-description">Patate King!</div>
                    <div className="tile-grid">
                        {state.results.map((result: Result) =>
                            result.title !== 'Vapor Design System' ? (
                                <Tile
                                    title={result.title}
                                    href={result.clickUri}
                                    description={result.excerpt}
                                    svgName={'plasmaComponentBox'}
                                />
                            ) : null
                        )}
                    </div>
                </Section>
            </Section>
        </>
    );
};

const ResultPage = () => {
    const engine = useContext(EngineContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const controller = buildResultList(engine);
    return <ResultListRenderer controller={controller} query={query} engine={engine} />;
};

export default ResultPage;
