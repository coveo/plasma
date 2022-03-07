import {Section} from '@coveord/plasma-react';

import {useContext} from 'react';
import React from 'react';

import {AtomicNoResults, AtomicQuerySummary, AtomicResultList, AtomicSearchInterface} from '@coveo/atomic-react';
import {Tile, TileProps} from '../building-blocs/Tile';
import {EngineContext} from '../search/engine/EngineContext';

const customStyle = ``;

const Search = () => {
    const engine = useContext(EngineContext);
    return (
        <Section className="home flex-auto overflow-auto demo-content">
            <AtomicSearchInterface engine={engine}>
                <Section className="section">
                    <AtomicQuerySummary></AtomicQuerySummary>
                </Section>
                <AtomicNoResults enableCancelLastAction={true}></AtomicNoResults>

                <AtomicResultList
                    display={'grid'}
                    template={(result) => (
                        <>
                            <style>{customStyle}</style>
                            <Tile
                                key={result.uniqueId}
                                title={result.title}
                                href={result.clickUri.replace(/.+plasma\.coveo\.com\//, '')}
                                description={result.raw.description as string}
                                thumbnail={result.raw.thumbnail as TileProps['thumbnail']}
                            />
                        </>
                    )}
                />
            </AtomicSearchInterface>
        </Section>
    );
};

export default Search;
