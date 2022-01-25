import '@styles/plasmaSearchBar.scss';

import {useEffect, useState, FunctionComponent, useContext} from 'react';
import {buildSearchBox, SearchBox, SearchBoxState} from '@coveo/headless';
import React from 'react';
import {Button, IItemBoxProps, ListBox, Svg} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';
import {FeatureFlags} from '../FeatureFlags';

interface SearchBarProps {
    controller: SearchBox;
}
const SearchBoxRerender: FunctionComponent<SearchBarProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState<SearchBoxState>(controller.state);
    const [focused, setFocused] = useState(false);

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
            onClick={() => controller.clear()}
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

    const SuggestionListBox = () => {
        const results: IItemBoxProps[] = state.suggestions.map((result) => ({
            value: result.rawValue,
            displayValue: result.highlightedValue,
        }));

        return (
            <>
                {focused && (state.suggestions.length > 0 || state.isLoadingSuggestions) && (
                    <ListBox
                        classes={['search-results-container']}
                        isLoading={state.isLoadingSuggestions}
                        items={results}
                        onOptionClick={(item) => {
                            controller.selectSuggestion(item.value);
                            location.assign(`#/plasma-search/ResultPage?query=${item.value}`);
                        }}
                    />
                )}
            </>
        );
    };

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
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <ClearButton />
                <SearchButton />
                <SuggestionListBox />
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
