import {
    AtomicQuerySummary,
    AtomicSearchInterface,
    Result,
    loadClickAnalyticsActions,
    ResultList as HeadlessResultList,
    SearchEngine,
} from '@coveo/atomic-react';
import {Section} from '@coveord/plasma-react';
import {FunctionComponent, useEffect, useState} from 'react';
import {Tile, TileProps} from '../building-blocs/Tile';
import {NoSearchResultTemplate} from '../search/NoSearchResult';

interface ResultListProps {
    controller: HeadlessResultList;
    engine: SearchEngine;
    query: string;
}

export const ResultList: FunctionComponent<ResultListProps> = ({controller, engine, query}) => {
    const [state, setState] = useState(controller.state);
    const {logDocumentOpen} = loadClickAnalyticsActions(engine);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    return (
        <>
            {!state.hasResults && !state.isLoading ? (
                <div style={{width: '100%'}}>
                    <AtomicSearchInterface engine={engine}>
                        <NoSearchResultTemplate engine={engine} query={query} />
                    </AtomicSearchInterface>
                </div>
            ) : (
                <Section className="home flex-auto overflow-auto">
                    <Section className="section">
                        <AtomicSearchInterface engine={engine}>
                            <AtomicQuerySummary />
                        </AtomicSearchInterface>
                        <div className="tile-grid">
                            {state.results.map((result: Result) => (
                                <Tile
                                    key={result.uniqueId}
                                    title={result.title}
                                    href={result.clickUri}
                                    description={result.raw.description as string}
                                    thumbnail={result.raw.thumbnail as TileProps['thumbnail']}
                                    sendAnalytics={() => engine.dispatch(logDocumentOpen(result))}
                                />
                            ))}
                        </div>
                    </Section>
                </Section>
            )}
        </>
    );
};
