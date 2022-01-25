import '@styles/plasmaSearchBar.scss';

import {useEffect, useState, FunctionComponent, useContext} from 'react';
import {buildStandaloneSearchBox, StandaloneSearchBox} from '@coveo/headless';
import React from 'react';
import {Button, IItemBoxProps, ListBox, Svg, UrlUtils} from '@coveord/plasma-react';

import classNames from 'classnames';
import {EngineContext} from './engine/EngineContext';
import {FeatureFlags} from '../FeatureFlags';

interface SearchBarProps {
    controller: StandaloneSearchBox;
}
const SearchBoxRerender: FunctionComponent<SearchBarProps> = (props) => {
    const {controller} = props;
    const [state, setState] = useState(controller.state);
    const [focused, setFocused] = useState(false);

    useEffect(() => controller.subscribe(() => setState(controller.state)), [controller]);

    useEffect(() => {
        const {redirectTo, value} = controller.state;
        if (redirectTo) {
            UrlUtils.redirectToUrl(`${redirectTo}?query=${value}`);
        }
    }, [state.redirectTo]);

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
        <Button classes={['search-button']} onClick={() => controller.submit()}>
            <Svg svgName={'search'} className="icon mod-stroke" />
        </Button>
    );

    const SuggestionListBox = () => {
        const results: IItemBoxProps[] = state.suggestions.map((s) => ({
            value: s.rawValue,
            displayValue: s.highlightedValue,
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
                        }}
                    />
                )}
            </>
        );
    };

    return (
        <div className="plasmaSearchBar">
            <form
                autoComplete="off"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    className="search-bar"
                    type="search"
                    placeholder={'Find a component...'}
                    value={state.value}
                    onChange={(event) => controller.updateText(event.target.value)}
                    onKeyDown={(event) => event.key === 'Enter' && controller.submit()}
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
    const options = {redirectionUrl: '#/plasma-search/ResultPage'};
    const controller = buildStandaloneSearchBox(engine, {options});
    return FeatureFlags.get('plasma-search-bar') ? <SearchBoxRerender controller={controller} /> : null;
};

export default StandaloneSearchBar;
