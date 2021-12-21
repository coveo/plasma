import {SearchEngine, loadSearchActions, loadSearchAnalyticsActions, loadFieldActions} from '@coveo/headless';
import * as React from 'react';

import {headlessEngine} from './Engine';
import {EngineContext} from './EngineContext';

export const EngineProvider: React.FunctionComponent = ({children}) => {
    const [engine, setEngine] = React.useState<SearchEngine | null>(null);

    React.useEffect(() => {
        if (engine) {
            const {executeSearch} = loadSearchActions(engine);
            const {logSearchboxSubmit} = loadSearchAnalyticsActions(engine);
            engine.dispatch(executeSearch(logSearchboxSubmit()));
        }
    }, [engine]);

    React.useEffect(() => {
        const newEngine = headlessEngine();
        const {registerFieldsToInclude} = loadFieldActions(newEngine);
        newEngine.dispatch(registerFieldsToInclude(['componentname']));
        setEngine(newEngine);
    }, []);

    if (!engine) {
        return <main>Waiting for engine</main>;
    }

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
