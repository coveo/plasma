import {FunctionComponent, useContext, useEffect, useState} from 'react';
import React from 'react';

import {
    buildResultList,
    ResultList as HeadlessResultList,
    loadQueryActions,
    Result,
    buildUrlManager,
} from '@coveo/headless';
import {Tile} from '@coveord/plasma-react';
import {useSearchParams} from 'react-router-dom';
import {EngineContext} from '../../search/engine/EngineContext';

interface ResultListProps {
    controller: HeadlessResultList;
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    return (
        <>
            <div> COUCOU </div>
            {state.results.map((result: Result) => (
                <Tile title={result.title} href={result.clickUri} svgName={'search'} />
            ))}
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
    // return <div>It's a Me MARIIIO!!</div>;
};

export default ResultPage;
