import {loadQueryActions, SearchEngine} from '@coveo/headless';
import {Button} from '@coveord/plasma-react';

import {FunctionComponent} from 'react';
import React from 'react';

import results_empty_state from '../../resources/results_empty_state.png';

interface NoResultTemplateProps {
    engine: SearchEngine;
    query: string;
}

export const NoSearchResultTemplate: FunctionComponent<NoResultTemplateProps> = (props) => {
    const {engine, query} = props;

    const resetSearch = () => {
        const {updateQuery} = loadQueryActions(engine);
        engine.dispatch(updateQuery({q: ''}));
        location.assign(`#/search?q=${''}`);
    };

    return (
        <div className="grid item-center">
            <img className="mt3 mb3" src={results_empty_state} />
            <div className="grid item-center">
                <span className="h4-book mb1 nowrap">
                    We couldn’t find anything for <span className="h4"> “{query}”</span>
                </span>
                <span className="h6-subdued mb3 nowrap">
                    You may want to try using different keywords, or checking for spelling mistakes.
                </span>
                <Button primary onClick={() => resetSearch()}>
                    Clear search
                </Button>
            </div>
        </div>
    );
};
