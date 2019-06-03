import 'chosen-js'; // Clean way to make Webpack import something that is not a module
import * as $ from 'jquery';
import * as React from 'react';
import * as _ from 'underscore';

export interface IChosenSelectProps extends React.HTMLProps<ChosenSelect> {
    allowSingleDeselect?: boolean; // @default: false
    caseSensitiveSearch?: boolean; // @default: false
    disableSearch?: boolean; // @default: false
    disableSearchThreshold?: number; // @default: 0, a.k.a. always enabled
    displayDisabledOptions?: boolean; // @default: true
    displaySelectedOptions?: boolean; // @default: true
    enableSplitWordSearch?: boolean; // @default: true
    includeGroupLabelInSelected?: boolean; // @default: false
    inheritSelectClasses?: boolean; // @default: false
    maxSelectedOptions?: number; // @default: Infinity
    maxShownResults?: number; // @default: Infinity
    noResultsText?: string; // @default: "No results match"
    onChosenChange?: (event: JQueryEventObject, args: Chosen.SelectedData) => void;
    placeholderTextMultiple?: string; // @default: "Select Some Options"
    placeholderTextSingle?: string; // @default: "Select an Option"
    searchContains?: boolean; // @default: false
    singleBackstrokeDelete?: boolean; // @default: true
    width?: string; // @default: the width of the select chosen is replacing
}

/**
 * List of props that were passed to the <ChosenSelect> component but that should not be passed to the <select> element to avoid warnings.
 * @type {string[]}
 */
const chosenSelectPropsToOmit = [
    'allowSingleDeselect', 'children', 'disableSearch', 'disableSearchThreshold', 'displayDisabledOptions', 'displaySelectedOptions',
    'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'noResultsText', 'onChosenChange',
    'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'width',
];

/**
 * @deprecated use components from SelectComponents instead
 */
export class ChosenSelect extends React.Component<IChosenSelectProps, any> {
    select: JQuery;

    componentDidMount() {
        this.select
            .chosen({
                allow_single_deselect: this.props.allowSingleDeselect,
                case_sensitive_search: this.props.caseSensitiveSearch,
                disable_search: this.props.disableSearch,
                disable_search_threshold: this.props.disableSearchThreshold,
                display_disabled_options: this.props.displayDisabledOptions,
                display_selected_options: this.props.displaySelectedOptions,
                enable_split_word_search: this.props.enableSplitWordSearch,
                include_group_label_in_selected: this.props.includeGroupLabelInSelected,
                inherit_select_classes: this.props.inheritSelectClasses,
                max_selected_options: this.props.maxSelectedOptions,
                max_shown_results: this.props.maxShownResults,
                no_results_text: this.props.noResultsText,
                placeholder_text_multiple: this.props.placeholderTextMultiple,
                placeholder_text_single: this.props.placeholderTextSingle,
                search_contains: this.props.searchContains,
                single_backstroke_delete: this.props.singleBackstrokeDelete,
                width: this.props.width,
            })
            .change((event: JQueryEventObject, args: Chosen.SelectedData) => this.props.onChosenChange && this.props.onChosenChange(event, args));
    }

    componentWillUnmount() {
        this.select
            .off('change')
            .chosen('destroy');
    }

    /**
     * HACK: Since we cannot overrdide onChange method signature (provided by React.HTMLProps<HTMLSelectElement>), since onChange is
     * required by React when a value has been specified (component becomes "controlled") and because chosen does not trigger the change
     * event on the <select> and foces us to use jQuery, we added a onChosenChange prop and faked the onChange prop.
     * @returns {JSX.Element | null}
     */
    render() {
        // Omit ChosenSelect props to avoid warnings.
        const selectProps = _.extend({}, _.omit(this.props, chosenSelectPropsToOmit));
        return (
            <select {...selectProps} ref={(select: HTMLSelectElement) => this.select = $(select)} onChange={_.noop}>
                {this.props.children}
            </select>
        );
    }
}
