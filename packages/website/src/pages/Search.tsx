import {
    buildResultList,
    loadPaginationActions,
    loadQueryActions,
    loadSearchActions,
    loadSearchAnalyticsActions,
} from '@coveo/headless';
import {AppShell} from '@coveord/plasma-mantine';
import {useContext} from 'react';
import {ResultList} from '../building-blocs/ResultList';
import {EngineContext} from '../search/engine/EngineContext';

const Search = () => {
    const engine = useContext(EngineContext);

    if (!engine) {
        return null;
    }

    const query = (engine?.state?.query?.q as string) ?? '';
    const data = localStorage.getItem('coveo-standalone-search-box-data');
    const {registerNumberOfResults} = loadPaginationActions(engine);

    if (data) {
        localStorage.removeItem('coveo-standalone-search-box-data');
        const {value, analytics} = JSON.parse(data);
        const {cause, metadata} = analytics;

        const {updateQuery} = loadQueryActions(engine);
        const {logOmniboxFromLink, logSearchFromLink} = loadSearchAnalyticsActions(engine);
        const {executeSearch} = loadSearchActions(engine);
        const event = cause === 'searchFromLink' ? logSearchFromLink() : logOmniboxFromLink(metadata);

        engine.dispatch(registerNumberOfResults(1000));
        engine.dispatch(updateQuery({q: value}));
        engine.dispatch(executeSearch(event));
    } else {
        engine.dispatch(registerNumberOfResults(1000));
        engine.executeFirstSearch();
    }

    const controller = buildResultList(engine);
    return (
        <AppShell.Main>
            <ResultList controller={controller} engine={engine} query={query} />
        </AppShell.Main>
    );
};

export default Search;
