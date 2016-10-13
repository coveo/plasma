///<reference types="chosen" /> Required since typings name (@types/chosen) is not the same as the npm package name (chosen-js)

import * as React from 'react';
import * as $ from 'jquery';

import 'chosen-js'; // Clean way to make Webpack import something that is not a module

export interface IChosenSelectProps {
  allowSingleDeselect?: boolean;
  defaultValue?: string;
  disableSearch?: boolean;
  disableSearchThreshold?: number;
  displayDisabledOptions?: boolean;
  displaySelectedOptions?: boolean;
  enableSplitWordSearch?: boolean;
  inheritSelectClasses?: boolean;
  maxSelectedOptions?: number;
  noResultsText?: string;
  onChange?: (event: JQueryEventObject, args: Chosen.SelectedData) => void;
  placeholderTextMultiple?: string;
  placeholderTextSingle?: string;
  searchContains?: boolean;
  singleBackstrokeDelete?: boolean;
  value?: string;
  width?: string;
}

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
      .change((event: JQueryEventObject, args: Chosen.SelectedData) => this.props.onChange && this.props.onChange(event, args));
  }

  componentWillUnmount() {
    $(this.refs.select)
      .off('change')
      .chosen('destroy');
  }

  render() {
    let selectProps = {
      value: this.props.value,
      defaultValue: this.props.defaultValue
    };
    return (
      <select {...selectProps} ref='select'>
        {this.props.children}
      </select>
    );
  }
}
