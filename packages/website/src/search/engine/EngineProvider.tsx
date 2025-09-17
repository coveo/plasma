import {loadFieldActions} from '@coveo/headless';
import {FunctionComponent, PropsWithChildren, useEffect} from 'react';

import {searchEngine} from './Engine.js';
import {EngineContext} from './EngineContext.js';

const engine = searchEngine();

export const EngineProvider: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => {
    useEffect(() => {
        const actions = loadFieldActions(engine);
        engine.dispatch(actions.registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
