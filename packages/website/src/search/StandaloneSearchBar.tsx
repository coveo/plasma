import '@styles/plasmaSearchBar.scss';

import {buildSearchBox, SearchBox, SearchBoxState} from '@coveo/headless';
import {Button, Svg} from '@coveord/plasma-react';
import classNames from 'classnames';
import {FunctionComponent, useContext, useEffect, useRef, useState} from 'react';
import React from 'react';

import {FeatureFlags} from '../FeatureFlags';
import {EngineContext} from './engine/EngineContext';
import useRoveFocus from '../building-blocs/RovingFocus';
import Item from '../building-blocs/Item';

interface SearchBarProps {
    controller: SearchBox;
}

const navigateToResultPage = (query: string) => {
    location.assign(`#/search?q=${query}`);
};

const SearchBoxRerender: FunctionComponent<SearchBarProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState<SearchBoxState>(controller.state);
    const [roveFocus, setRoveFocus] = useRoveFocus(state.suggestions.length);
    const inputRef = useRef(null);

    useEffect(() => {
        controller.subscribe(() => setState(controller.state));
        inputRef.current.focus();
    }, [controller]);

    const onKeyDown = (event: any) => {
        const isDown = event.key === 'ArrowDown';
        const isEnter = event.key === 'Enter';
        const isEscape = event.key === 'Escape';
        const isBackspace = event.key === 'Backspace';
        const inputIsFocused = document.activeElement === inputRef.current;

        if (inputIsFocused && isEnter) {
            controller.submit();
            navigateToResultPage('');
        } else if (isEscape) {
            controller.clear();
            (event.target as HTMLInputElement).blur();
        } else if (inputIsFocused && isDown) {
            (document.querySelector('li.item-box') as HTMLInputElement).focus();
        } else if (!inputIsFocused && isBackspace) {
            // put back focus in input on backspace
            (document.querySelector('input.search-bar') as HTMLInputElement).focus();
        }
    };

    const ClearButton = () => (
        <button
            disabled={state.value === ''}
            className={classNames('clear-button', {
                'search-not-empty': state.value !== '',
            })}
            onClick={() => controller.clear()}
        >
            <Svg svgName="cross" svgClass="icon" />
        </button>
    );

    const SearchButton = () => (
        <Button
            classes={['search-button']}
            onClick={() => {
                navigateToResultPage(state.value);
            }}
        >
            <Svg svgName="search" className="icon mod-stroke" />
        </Button>
    );

    const CustomList = () => (
        <>
            {(state.suggestions.length > 0 || state.isLoadingSuggestions) && (
                <ul className="list-box relative search-results-container" role="listbox">
                    {state.suggestions.map((suggestion, index) => {
                        const value = suggestion.rawValue;
                        const highlightedValue = suggestion.highlightedValue;
                        return (
                            <Item
                                key={value}
                                value={value}
                                setFocus={setRoveFocus}
                                index={index}
                                focus={document.activeElement !== inputRef.current && roveFocus === index}
                                displayValue={highlightedValue}
                                onClick={() => {
                                    controller.selectSuggestion(value);
                                    location.assign(`#/search?q=${value}`);
                                }}
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
                    ref={inputRef}
                    className="search-bar"
                    type="search"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onKeyDown={(event) => onKeyDown(event)}
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
const StandaloneSearchBar = () => {
    const engine = useContext(EngineContext);
    const controller = buildSearchBox(engine);
    return FeatureFlags.get('plasma-search-bar') ? <SearchBoxRerender controller={controller} /> : null;
};

export default StandaloneSearchBar;
