import {AtomicSearchBox, AtomicSearchInterface} from '@coveo/atomic-react';
import {useContext} from 'react';
import {useHref} from 'react-router-dom';
import {EngineContext} from './engine/EngineContext.js';

const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);
    const toSearch = useHref('/search');

    if (!engine) {
        return null;
    }

    return (
        <div className="plasma-search-bar">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <AtomicSearchInterface engine={engine} reflectStateInUrl>
                    <AtomicSearchBox numberOfQueries={5} redirectionUrl={toSearch} />
                </AtomicSearchInterface>
            </form>
        </div>
    );
};

export default StandaloneSearchBar;
