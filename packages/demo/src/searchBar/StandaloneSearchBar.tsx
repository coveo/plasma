import '@demo-styling/standaloneSearchBar.scss';

import {buildSearchBox, SearchBox as HeadlessSearchBox} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import {Button, ListBox, Svg} from 'react-vapor';

import {EngineContext} from './engine/EngineContext';

interface ISearchboxProps {
    id: string;
}

const SearchBoxRenderer: FunctionComponent<{
    id: string;
    controller: HeadlessSearchBox;
}> = (props) => {
    const {id, controller} = props;
    const [state, setState] = useState(controller.state);

    useEffect(() => controller.subscribe(() => setState(controller.state)), []);

    return (
        <div className="standaloneSearchBar">
            {/* Prevents chrome from providing autocompletions */}
            {/* <form autoComplete="off" onSubmit={(e) => e.preventDefault()}> */}
            <input
                id={id}
                className="search-bar"
                type="text"
                placeholder={'Find a component...'}
                disabled={state.isLoadingSuggestions}
                value={state.value}
                onChange={(event) => controller.updateText(event.target.value)}
                onKeyUp={(event) => (event.keyCode === 13 || event.key === 'Enter') && controller.submit()}
            />
            {/* </form> */}
            {state.value !== '' && (
                <button
                    onClick={() => {
                        controller.updateText('');
                        controller.submit();
                    }}
                >
                    <Svg svgName="close" svgClass="icon mod-16" />
                </button>
            )}

            {/* invisible prepend? */}
            <Button
                onClick={() => {
                    controller.submit();
                }}
                classes={['mod-search-bar']}
            >
                <Svg svgName={'search'} className="icon mod-stroke" />
            </Button>
            {state.suggestions.length > 0 && (
                <ListBox
                    isLoading={state.isLoadingSuggestions}
                    items={state.suggestions.map((s) => ({
                        value: s.rawValue,
                        displayValue: s.highlightedValue,
                    }))}
                />
            )}
        </div>
    );
};

export const StandaloneSearchBar: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine, {options: {id}});
    return <SearchBoxRenderer controller={controller} id={id} />;
};
