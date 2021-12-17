import '@demo-styling/standaloneSearchBar.scss';

import {buildSearchBox, SearchBox as HeadlessSearchBox} from '@coveo/headless';
import {FunctionComponent, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import {Button, IItemBoxProps, ListBox, Svg} from 'react-vapor';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';

interface ISearchboxProps {
    id: string;
}

const dummyItem: IItemBoxProps[] = [
    {value: 'Im a dummy result'},
    {value: 'im bad at css'},
    {value: 'why querySuggest not working'},
];

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
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <input
                    id={id}
                    className="search-bar"
                    type="text"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onKeyDown={(event) => event.key === 'Enter' && controller.submit()}
                />
                <button
                    disabled={state.value === ''}
                    className={classNames('close-button', {'search-not-empty': state.value !== ''})}
                    onClick={() => {
                        controller.updateText('');
                        controller.submit();
                    }}
                >
                    <Svg svgName="cross" svgClass="icon" />
                </button>
                <Button
                    classes={['mod-search-bar']}
                    onClick={() => {
                        controller.submit();
                    }}
                >
                    <Svg svgName={'search'} className="icon mod-stroke" />
                </Button>
                {state.value !== '' && (
                    <ListBox
                        classes={['search-results-container']}
                        isLoading={state.isLoadingSuggestions}
                        items={dummyItem}
                    />
                )}

                {/* {(state.suggestions.length > 0 || state.isLoadingSuggestions) && ( */}
                {/* <ListBox
                    classes={['search-results-container']}
                    isLoading={state.isLoadingSuggestions}
                    items={state.suggestions.map((s) => ({
                        value: s.rawValue,
                        displayValue: s.highlightedValue,
                    }))}
                /> */}
                {/* )} */}
            </form>
        </div>
    );
};

export const StandaloneSearchBar: FunctionComponent<ISearchboxProps> = ({id}) => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine, {options: {id}});
    return <SearchBoxRenderer controller={controller} id={id} />;
};
