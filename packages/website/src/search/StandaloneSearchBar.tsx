import {AtomicSearchBox, AtomicSearchInterface} from '@coveo/atomic-react';

import {useContext} from 'react';
import React from 'react';

import {useRouter} from 'next/router';
import {EngineContext} from './engine/EngineContext';

const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);
    const {pathname} = useRouter();

    const isSearchPage: boolean = pathname === '/Search';

    return (
        <div className="plasmaSearchBar form search-bar-patate">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <AtomicSearchInterface
                    engine={engine}
                    reflectStateInUrl={true}
                    // eslint-disable-next-line no-console
                    // onReady={async () => console.log(pathname)} // find what value is pathname
                >
                    <AtomicSearchBox
                        numberOfQueries={5}
                        redirectionUrl={isSearchPage ? undefined : '/Search'} // always redirect to real website
                        placeholder={'coucou'} // not working
                    ></AtomicSearchBox>
                </AtomicSearchInterface>
            </form>
        </div>
    );
};

export default StandaloneSearchBar;
