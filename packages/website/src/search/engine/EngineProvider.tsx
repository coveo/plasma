import {loadFieldActions} from '@coveo/atomic-react';
import {FunctionComponent, useEffect} from 'react';

import {searchEngine} from './Engine';
import {EngineContext} from './EngineContext';

const engine = searchEngine();

export const EngineProvider: FunctionComponent<React.PropsWithChildren> = ({children}) => {
    useEffect(() => {
        const {registerFieldsToInclude} = loadFieldActions(engine);
        engine.dispatch(registerFieldsToInclude(['description', 'thumbnail']));
    }, []);

    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
};
