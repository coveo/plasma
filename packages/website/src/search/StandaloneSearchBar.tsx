import {AtomicSearchBox, AtomicSearchInterface} from '@coveo/atomic-react';

import {useContext} from 'react';
import React from 'react';

import {EngineContext} from './engine/EngineContext';

const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);

    return (
        <div className="plasmaSearchBar">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <AtomicSearchInterface
                    engine={engine}
                    reflectStateInUrl={false}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onReady={async () => {}} // noop
                >
                    <AtomicSearchBox
                        numberOfQueries={5}
                        redirectionUrl={'/Search'} // always redirect to real website
                    ></AtomicSearchBox>
                </AtomicSearchInterface>
            </form>
        </div>
    );
};

export default StandaloneSearchBar;
