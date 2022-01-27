import '@styles/plasmaSearchBar.scss';

import {useEffect, useState, FunctionComponent, useContext, useRef} from 'react';
import {buildSearchBox, SearchBox, SearchBoxState} from '@coveo/headless';
import React from 'react';
import {Button, Svg} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';
import {FeatureFlags} from '../FeatureFlags';
import useRoveFocus from '../building-blocs/RovingFocus';
import Item from '../building-blocs/Item';

interface SearchBarProps {
    controller: SearchBox;
}
const SearchBoxRerender: FunctionComponent<SearchBarProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState<SearchBoxState>(controller.state);
    const [rovefocus, setRoveFocus] = useRoveFocus(state.suggestions.length);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    const navigateToResultPage = () => {
        location.assign(`#/plasma-search/ResultPage?query=${state.value}`);
    };

    const ClearButton = () => (
        <button
            disabled={state.value === ''}
            className={classNames('clear-button', {
                'search-not-empty': state.value !== '',
            })}
            onClick={() => {
                controller.clear();
            }}
        >
            <Svg svgName="cross" svgClass="icon" />
        </button>
    );

    const SearchButton = () => (
        <Button
            classes={['search-button']}
            onClick={() => {
                controller.submit();
                navigateToResultPage();
            }}
        >
            <Svg svgName={'search'} className="icon mod-stroke" />
        </Button>
    );

    const CustomList = () => (
        <>
            {/* {inputFocused && (state.suggestions.length > 0 || state.isLoadingSuggestions) && ( */}
            {(state.suggestions.length > 0 || state.isLoadingSuggestions) && (
                <ul className="list-box relative search-results-container" role="listbox" tabIndex={0}>
                    {state.suggestions.map((suggestion, index) => {
                        const value = suggestion.rawValue;
                        const highlightedValue = suggestion.highlightedValue;
                        return (
                            <Item
                                key={value}
                                value={value}
                                setFocus={setRoveFocus}
                                index={index}
                                focus={rovefocus === index}
                                displayValue={highlightedValue}

                                //     controller.selectSuggestion(item);
                                //     location.assign(`#/plasma-search/ResultPage?query=${item}`);
                                // }}
                            />
                        );
                    })}
                </ul>
            )}
        </>
    );

    return (
        <div className="plasmaSearchBar">
            <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                <input
                    className="search-bar"
                    type="search"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            controller.submit();
                            navigateToResultPage();
                        } else if (event.key === 'Escape') {
                            controller.clear();
                            (event.target as HTMLInputElement).blur();
                        }
                    }}
                />
                <ClearButton />
                <SearchButton />
                <CustomList />
            </form>
        </div>
    );
};

/*
 * To toggle the feature flag, copy and paste those commands in the dev tool console:
 * sessionStorage.setItem('ff_plasma-search-bar', true) to show the bar
 * sessionStorage.setItem('ff_plasma-search-bar', false) to hide the bar
 * You need to reload the page for it to take effect.
 */
const PATATE = () => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine, {
        options: {
            highlightOptions: {
                notMatchDelimiters: {
                    open: '<strong>',
                    close: '</strong>',
                },
            },
        },
    });
    return FeatureFlags.get('plasma-search-bar') ? <SearchBoxRerender controller={controller} /> : null;
};

export default PATATE;
