///<reference types="chosen" /> Required since typings name (@types/chosen) is not the same as the npm package name (chosen-js)

import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'underscore';

import 'chosen-js'; // Clean way to make Webpack import something that is not a module

export interface IChosenSelectProps extends React.HTMLProps<HTMLSelectElement> {
  allowSingleDeselect?: boolean;
  disableSearch?: boolean;
  disableSearchThreshold?: number;
  displayDisabledOptions?: boolean;
  displaySelectedOptions?: boolean;
  enableSplitWordSearch?: boolean;
  inheritSelectClasses?: boolean;
  maxSelectedOptions?: number;
  noResultsText?: string;
  onChosenChange?: (event: JQueryEventObject, args: Chosen.SelectedData) => void;
  placeholderTextMultiple?: string;
  placeholderTextSingle?: string;
  searchContains?: boolean;
  singleBackstrokeDelete?: boolean;
  width?: string;
}

/**
 * List of props that where passed to the <ChosenSelect> component but that should not be passed to the <select> element to avoid warnings.
 * @type {string[]}
 */
const chosenSelectPropsToOmit = [
  'allowSingleDeselect', 'children', 'disableSearch', 'disableSearchThreshold', 'displayDisabledOptions', 'displaySelectedOptions',
  'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'noResultsText', 'onChosenChange', 'placeholderTextMultiple',
  'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'width'
];

export class ChosenSelect extends React.Component<IChosenSelectProps, any> {
  refs: {
    [key: string]: (Element);
    select: HTMLSelectElement;
  };

  componentDidMount() {
    $(this.refs.select)
      .chosen({
        allow_single_deselect: this.props.allowSingleDeselect,
        disable_search: this.props.disableSearch,
        disable_search_threshold: this.props.disableSearchThreshold,
        display_disabled_options: this.props.displayDisabledOptions,
        display_selected_options: this.props.displaySelectedOptions,
        enable_split_word_search: this.props.enableSplitWordSearch,
        inherit_select_classes: this.props.inheritSelectClasses,
        max_selected_options: this.props.maxSelectedOptions,
        no_results_text: this.props.noResultsText,
        placeholder_text_multiple: this.props.placeholderTextMultiple,
        placeholder_text_single: this.props.placeholderTextSingle,
        search_contains: this.props.searchContains,
        single_backstroke_delete: this.props.singleBackstrokeDelete,
        width: this.props.width
      })
      .change((event: JQueryEventObject, args: Chosen.SelectedData) => this.props.onChosenChange && this.props.onChosenChange(event, args));
  }

  componentWillUnmount() {
    $(this.refs.select)
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
    let selectProps = _.extend({}, _.omit(this.props, chosenSelectPropsToOmit));
    return (
      <select {...selectProps} ref='select' onChange={_.noop}>
        {this.props.children}
      </select>
    );
  }
}
