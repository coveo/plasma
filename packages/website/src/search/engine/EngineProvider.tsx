import * as React from 'react';

import {searchEngine} from './Engine';
import {EngineContext} from './EngineContext';

const engine = searchEngine();

export const EngineProvider: React.FunctionComponent = ({children}) => (
    <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>
);
