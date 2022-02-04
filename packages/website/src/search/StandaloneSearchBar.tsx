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
    const inputIsFocused = document.activeElement === inputRef.current;

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    const clearSearchOnClick = (event: any) => {
        const suggestionsListExist = document.body.contains(
            document.querySelector('.search-results-container') as HTMLElement
        );
        const searchBarWasClicked = (document.querySelector('.plasmaSearchBar') as HTMLElement).contains(event.target);

        if (suggestionsListExist && !searchBarWasClicked) {
            controller.clear();
        }
    };

    useEffect(() => {
        document.addEventListener('click', clearSearchOnClick, false);
        return () => {
            document.removeEventListener('click', clearSearchOnClick, false);
        };
    }, [clearSearchOnClick]);

    const handleSearchOnClick = (suggestion: string) => {
        controller.selectSuggestion(suggestion);
        navigateToResultPage(suggestion);
    };

    const listHandleKeyDown = (event: React.KeyboardEvent<HTMLElement>, value: string) => {
        const isEnter = event.key === 'Enter';
        const isBackspace = event.key === 'Backspace';

        if (!inputIsFocused) {
            if (isEnter) {
                handleSearchOnClick(value);
            } else if (isBackspace) {
                (document.querySelector('input.search-bar') as HTMLInputElement).focus();
            }
        }
    };

    const inputHandleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        const isDown = event.key === 'ArrowDown';
        const isEnter = event.key === 'Enter';
        const isEscape = event.key === 'Escape';

        if (inputIsFocused) {
            if (isEnter) {
                handleSearchOnClick(state.value);
            } else if (isEscape) {
                controller.clear();
                (event.target as HTMLInputElement).focus();
            } else if (isDown && state.suggestions.length > 0) {
                (document.querySelector('li.item-box') as HTMLInputElement).focus();
            }
        }
    };

    const ClearButton = () => (
        <button
            disabled={state.value === ''}
            className={classNames('clear-button', {
                'search-not-empty': state.value !== '',
            })}
            onClick={() => {
                controller.clear();
                (document.querySelector('input.search-bar') as HTMLInputElement).focus();
            }}
        >
            <Svg svgName="cross" svgClass="icon" />
        </button>
    );

    const SearchButton = () => (
        <Button
            classes={['search-button']}
            onClick={() => {
                handleSearchOnClick(state.value);
            }}
        >
            <Svg svgName="search" className="icon mod-stroke" />
        </Button>
    );

    const CustomList = () => (
        <>
            {state.suggestions.length > 0 && (
                <ul className="list-box relative search-results-container" role="listbox">
                    {state.suggestions.map((suggestion, index) => {
                        const value = suggestion.rawValue;
                        return (
                            <Item
                                key={value}
                                value={value}
                                setFocus={setRoveFocus}
                                index={index}
                                focus={document.activeElement !== inputRef.current && roveFocus === index}
                                onClick={() => handleSearchOnClick(value)}
                                onKeyDown={(event) => listHandleKeyDown(event, value)}
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
                    onKeyDown={(event) => inputHandleKeyDown(event)}
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
