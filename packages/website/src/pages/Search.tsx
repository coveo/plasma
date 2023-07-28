import {
    buildResultList,
    loadPaginationActions,
    loadQueryActions,
    loadSearchActions,
    loadSearchAnalyticsActions,
} from '@coveo/atomic-react';

import {useContext} from 'react';

import dynamic from 'next/dynamic';
import {EngineContext} from '../search/engine/EngineContext';
import {PlasmaLoading} from '../building-blocs/PlasmaLoading';

const isServer = () => typeof window === `undefined`;

const ResultListRenderer = dynamic(
    import('./../building-blocs/ResultList').then((mod) => mod.ResultList),
    {
        ssr: false,
        loading: () => <PlasmaLoading />,
    },
);

const ResultList = () => {
    let query: string;
    const engine = useContext(EngineContext);
    const data = localStorage.getItem('coveo-standalone-search-box-data');
    const {registerNumberOfResults} = loadPaginationActions(engine);

    if (data) {
        localStorage.removeItem('coveo-standalone-search-box-data');
        const {value, analytics} = JSON.parse(data);
        const {cause, metadata} = analytics;
        query = value;

        const {updateQuery} = loadQueryActions(engine);
        const {logOmniboxFromLink, logSearchFromLink} = loadSearchAnalyticsActions(engine);
        const {executeSearch} = loadSearchActions(engine);
        const event = cause === 'searchFromLink' ? logSearchFromLink() : logOmniboxFromLink(metadata);

        engine.dispatch(registerNumberOfResults(1000));
        engine.dispatch(updateQuery({q: value}));
        engine.dispatch(executeSearch(event) as any);
    } else {
        engine.dispatch(registerNumberOfResults(1000));
        engine.executeFirstSearch();
    }

    const controller = buildResultList(engine);
    return <ResultListRenderer controller={controller} engine={engine} query={query} />;
};

const Search = () => (isServer() ? <PlasmaLoading /> : ResultList());

export default Search;
