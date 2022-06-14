import {loadFieldActions} from '@coveo/headless';
import {FunctionComponent, useEffect} from 'react';

import {searchEngine} from './Engine';

const engine = searchEngine();

export const EngineProvider: FunctionComponent = ({children}) => {
    useEffect(() => {
        const {registerFieldsToInclude} = loadFieldActions(engine);
        engine.dispatch(registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
