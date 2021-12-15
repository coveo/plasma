import '@demo-styling/standaloneSearchBox.scss';

import {buildSearchBox, SearchBox as HeadlessSearchBox} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import classNames from 'classnames';
import * as React from 'react';
import {ListBox, SearchBar, Svg} from 'react-vapor';

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
        <div className="standaloneSearchBox">
            {/* Prevents chrome from providing autocompletions */}
            <form autoComplete="off" className="searchbox-form" onSubmit={(e) => e.preventDefault()}>
                <SearchBar
                    id={id}
                    placeholder="Search"
                    searching={state.isLoading}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onSearch={() => controller.submit()}
                    containerClassNames={classNames({
                        'mod-rounded-border-4': state.value === '',
                        'mod-rounded-border-left-4': state.value !== '',
                    })}
                />
            </form>
            {state.value !== '' && (
                <button
                    onClick={() => {
                        controller.updateText('');
                        controller.submit();
                    }}
                    className="px2 mod-border-right mod-border-top mod-border-bottom mod-rounded-border-right-4"
                >
                    <Svg svgName="close" svgClass="icon mod-16" />
                </button>
            )}
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

export const SearchBox: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine, {options: {id}});
    return <SearchBoxRenderer controller={controller} id={id} />;
};
