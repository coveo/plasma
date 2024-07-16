import {loadFieldActions} from '@coveo/atomic-react';
import {FunctionComponent, PropsWithChildren, useEffect} from 'react';

import {searchEngine} from './Engine';
import {EngineContext} from './EngineContext';

const engine = searchEngine();

export const EngineProvider: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => {
    useEffect(() => {
        const actions = loadFieldActions(engine);
        engine.dispatch(actions.registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
