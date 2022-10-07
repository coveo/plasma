import {loadFieldActions} from '@coveo/atomic-react';
import {FunctionComponent, PropsWithChildren, useEffect} from 'react';

import {searchEngine} from './Engine';
import {EngineContext} from './EngineContext';

const engine = searchEngine();

export const EngineProvider: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => {
    useEffect(() => {
        const {registerFieldsToInclude} = loadFieldActions(engine);
        engine.dispatch(registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
