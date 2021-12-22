import {useEffect, useState, FunctionComponent} from 'react';
import {ResultList as HeadlessResultList} from '@coveo/headless';
import React from 'react';
import {IItemBoxProps, ListBox} from '@coveord/plasma-react';

interface ResultListProps {
    controller: HeadlessResultList;
}

export const PlasmaSearchResultList: FunctionComponent<ResultListProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), []);

    const triggerAlertFunction = (item: IItemBoxProps) => {
        alert(`The item value triggered is ${item.value}`);
    };

    const results: IItemBoxProps[] = state.results.map((s) => ({
        value: s.clickUri,
        displayValue: s.excerpt,
    }));

    return (
        <>
            {(state.isLoading || state.hasResults) && (
                <ListBox
                    classes={['search-results-container']}
                    isLoading={state.isLoading}
                    items={results}
                    onOptionClick={triggerAlertFunction}
                />
            )}
        </>
    );
};
