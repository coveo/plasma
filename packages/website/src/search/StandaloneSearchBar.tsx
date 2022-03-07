import {AtomicSearchBox, AtomicSearchInterface} from '@coveo/atomic-react';

import {useContext} from 'react';
import React from 'react';

import {EngineContext} from './engine/EngineContext';

const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);
    return (
        <div className="plasmaSearchBar form search-bar-patate">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <AtomicSearchInterface
                    engine={engine}
                    reflectStateInUrl={true}
                    // eslint-disable-next-line no-console
                    onReady={async () => console.log('chuis ready')} // cancel first search here
                >
                    <AtomicSearchBox
                        numberOfQueries={5}
                        redirectionUrl={'/Search'} // always redirect to real website
                        placeholder={'coucou'}
                    ></AtomicSearchBox>
                </AtomicSearchInterface>
            </form>
        </div>
    );
};

export default StandaloneSearchBar;
