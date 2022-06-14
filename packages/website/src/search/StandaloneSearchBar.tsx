import {useContext} from 'react';
import {useRouter} from 'next/router';

import {EngineContext} from './engine/EngineContext';

const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);
    const router = useRouter();

    return (
        <div className="plasmaSearchBar">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <AtomicSearchInterface
                    engine={engine}
                    reflectStateInUrl={false}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onReady={async () => {}} // noop
                >
                    <AtomicSearchBox numberOfQueries={5} redirectionUrl={`${router.basePath}/Search`} />
                </AtomicSearchInterface>
            </form>
        </div>
    );
};

export default StandaloneSearchBar;
