import {FunctionComponent, useContext, useEffect, useState} from 'react';
import React from 'react';

import {buildResultList, ResultList as HeadlessResultList, loadQueryActions, Result} from '@coveo/headless';
import {Section, Tile} from '@coveord/plasma-react';
import {useSearchParams} from 'react-router-dom';
import {useLocation} from 'react-router';
import {EngineContext} from '../../search/engine/EngineContext';

interface ResultListProps {
    controller: HeadlessResultList;
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState(controller.state);
    const location = useLocation();

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    // const isNewSearchEvent = () => {
    //     const currentSearchId = stateResultList.searchResponseId;

    //     if (currentSearchId !== previousSearchId.current) {
    //         previousSearchId.current = currentSearchId;
    //         return true;
    //     }
    //     return false;
    // };

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
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const engine = useContext(EngineContext);
    const {updateQuery} = loadQueryActions(engine);
    engine.dispatch(updateQuery({q: query}));
    engine.executeFirstSearch();

    const controller = buildResultList(engine);

    return <ResultListRenderer controller={controller} />;
};

export default ResultPage;
