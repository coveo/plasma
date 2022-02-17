import {loadFieldActions} from '@coveo/headless';
import * as React from 'react';

import {headlessEngine} from './Engine';
import {EngineContext} from './EngineContext';

const engine = headlessEngine();

export const EngineProvider: React.FunctionComponent = ({children}) => {
    React.useEffect(() => {
        const {registerFieldsToInclude} = loadFieldActions(engine);
        engine.dispatch(registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
