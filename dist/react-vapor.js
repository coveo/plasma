(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jquery"), require("underscore"), require("react-dom"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jquery", "underscore", "react-dom", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["ReactVapor"] = factory(require("react"), require("jquery"), require("underscore"), require("react-dom"), require("react-redux"));
	else
		root["ReactVapor"] = factory(root["React"], root["$"], root["_"], root["ReactDOM"], root["ReactRedux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_125__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChosenSelect_1 = __webpack_require__(1);
	exports.ChosenSelect = ChosenSelect_1.ChosenSelect;
	var Popover_1 = __webpack_require__(6);
	exports.Popover = Popover_1.Popover;
	var Svg_1 = __webpack_require__(11);
	exports.Svg = Svg_1.Svg;
	var Tooltip_1 = __webpack_require__(13);
	exports.Tooltip = Tooltip_1.Tooltip;
	var LastUpdated_1 = __webpack_require__(15);
	exports.LastUpdated = LastUpdated_1.LastUpdated;
	var LastUpdatedConnected_1 = __webpack_require__(123);
	exports.LastUpdatedConnected = LastUpdatedConnected_1.LastUpdatedConnected;
	var LastUpdatedReducers_1 = __webpack_require__(127);
	exports.lastUpdatedCompositeReducer = LastUpdatedReducers_1.lastUpdatedCompositeReducer;
	var LastUpdatedActions_1 = __webpack_require__(126);
	exports.changeLastUpdated = LastUpdatedActions_1.changeLastUpdated;
	var FilterBox_1 = __webpack_require__(128);
	exports.FilterBox = FilterBox_1.FilterBox;
	var FilterBoxConnected_1 = __webpack_require__(129);
	exports.FilterBoxConnected = FilterBoxConnected_1.FilterBoxConnected;
	var FilterBoxReducers_1 = __webpack_require__(131);
	exports.filterBoxesReducer = FilterBoxReducers_1.filterBoxesReducer;
	var FilterBoxActions_1 = __webpack_require__(130);
	exports.filterThrough = FilterBoxActions_1.filterThrough;
	var Facet_1 = __webpack_require__(132);
	exports.Facet = Facet_1.Facet;
	var FacetConnected_1 = __webpack_require__(211);
	exports.FacetConnected = FacetConnected_1.FacetConnected;
	var FacetReducers_1 = __webpack_require__(212);
	exports.facetsReducer = FacetReducers_1.facetsReducer;
	var FacetActions_1 = __webpack_require__(135);
	exports.changeFacet = FacetActions_1.changeFacet;
	exports.emptyFacet = FacetActions_1.emptyFacet;
	var FacetActions_2 = __webpack_require__(135);
	exports.FacetActions = FacetActions_2.FacetActions;
	var Loading_1 = __webpack_require__(213);
	exports.Loading = Loading_1.Loading;
	var LoadingConnected_1 = __webpack_require__(214);
	exports.LoadingConnected = LoadingConnected_1.LoadingConnected;
	var LoadingReducers_1 = __webpack_require__(216);
	exports.loadingsReducer = LoadingReducers_1.loadingsReducer;
	var LoadingActions_1 = __webpack_require__(215);
	exports.addLoading = LoadingActions_1.addLoading;
	exports.removeLoading = LoadingActions_1.removeLoading;
	exports.turnOnLoading = LoadingActions_1.turnOnLoading;
	exports.turnOffLoading = LoadingActions_1.turnOffLoading;
	var LoadingActions_2 = __webpack_require__(215);
	exports.LoadingActions = LoadingActions_2.LoadingActions;
	var Navigation_1 = __webpack_require__(217);
	exports.Navigation = Navigation_1.Navigation;
	var NavigationConnected_1 = __webpack_require__(226);
	exports.NavigationConnected = NavigationConnected_1.NavigationConnected;
	var NavigationPagination_1 = __webpack_require__(219);
	exports.NavigationPagination = NavigationPagination_1.NavigationPagination;
	var NavigationPaginationConnected_1 = __webpack_require__(218);
	exports.NavigationPaginationConnected = NavigationPaginationConnected_1.NavigationPaginationConnected;
	var NavigationPerPage_1 = __webpack_require__(223);
	exports.NavigationPerPage = NavigationPerPage_1.NavigationPerPage;
	var NavigationPerPageConnected_1 = __webpack_require__(222);
	exports.NavigationPerPageConnected = NavigationPerPageConnected_1.NavigationPerPageConnected;
	var NavigationPaginationReducers_1 = __webpack_require__(227);
	exports.paginationCompositeReducer = NavigationPaginationReducers_1.paginationCompositeReducer;
	var NavigationPerPageReducers_1 = __webpack_require__(228);
	exports.perPageCompositeReducer = NavigationPerPageReducers_1.perPageCompositeReducer;
	var NavigationPaginationActions_1 = __webpack_require__(221);
	exports.addPagination = NavigationPaginationActions_1.addPagination;
	exports.changePage = NavigationPaginationActions_1.changePage;
	exports.resetPaging = NavigationPaginationActions_1.resetPaging;
	var NavigationPaginationActions_2 = __webpack_require__(221);
	exports.PaginationActions = NavigationPaginationActions_2.PaginationActions;
	var NavigationPerPageActions_1 = __webpack_require__(225);
	exports.addPerPage = NavigationPerPageActions_1.addPerPage;
	exports.changePerPage = NavigationPerPageActions_1.changePerPage;
	var NavigationPerPageActions_2 = __webpack_require__(225);
	exports.PerPageActions = NavigationPerPageActions_2.PerPageActions;
	var Dropdown_1 = __webpack_require__(229);
	exports.Dropdown = Dropdown_1.Dropdown;
	var DropdownConnected_1 = __webpack_require__(230);
	exports.DropdownConnected = DropdownConnected_1.DropdownConnected;
	var DropdownReducers_1 = __webpack_require__(232);
	exports.dropdownsReducer = DropdownReducers_1.dropdownsReducer;
	var ActionBar_1 = __webpack_require__(233);
	exports.ActionBar = ActionBar_1.ActionBar;
	var ActionBarConnected_1 = __webpack_require__(245);
	exports.ActionBarConnected = ActionBarConnected_1.ActionBarConnected;
	var ActionBarReducers_1 = __webpack_require__(249);
	exports.actionBarsReducer = ActionBarReducers_1.actionBarsReducer;
	var ActionBarActions_1 = __webpack_require__(246);
	exports.addActionsToActionBar = ActionBarActions_1.addActionsToActionBar;
	var ActionBarActions_2 = __webpack_require__(246);
	exports.ActionBarActions = ActionBarActions_2.ActionBarActions;
	var TableHeader_1 = __webpack_require__(250);
	exports.TableHeader = TableHeader_1.TableHeader;
	var TableHeadingRow_1 = __webpack_require__(252);
	exports.TableHeadingRow = TableHeadingRow_1.TableHeadingRow;
	var TableHeadingRowConnected_1 = __webpack_require__(254);
	exports.TableHeadingRowConnected = TableHeadingRowConnected_1.TableHeadingRowConnected;
	var TableCollapsibleRow_1 = __webpack_require__(256);
	exports.TableCollapsibleRow = TableCollapsibleRow_1.TableCollapsibleRow;
	var TableCollapsibleRowConnected_1 = __webpack_require__(258);
	exports.TableCollapsibleRowConnected = TableCollapsibleRowConnected_1.TableCollapsibleRowConnected;
	var TableRowReducers_1 = __webpack_require__(259);
	exports.tableRowsReducer = TableRowReducers_1.tableRowsReducer;
	var TableRowActions_1 = __webpack_require__(255);
	exports.toggleRow = TableRowActions_1.toggleRow;
	var TableRowActions_2 = __webpack_require__(255);
	exports.TableRowActions = TableRowActions_2.TableRowActions;
	var InlinePromptReducers_1 = __webpack_require__(260);
	exports.promptsReducer = InlinePromptReducers_1.promptsReducer;
	var ReduxUtils_1 = __webpack_require__(124);
	exports.ReduxUtils = ReduxUtils_1.ReduxUtils;
	exports.ReduxConnect = ReduxUtils_1.ReduxConnect;
	exports.CommonActions = ReduxUtils_1.CommonActions;
	exports.clearState = ReduxUtils_1.clearState;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(2);
	var $ = __webpack_require__(3);
	var underscore_1 = __webpack_require__(4);
	__webpack_require__(5);
	var chosenSelectPropsToOmit = [
	    'allowSingleDeselect', 'children', 'disableSearch', 'disableSearchThreshold', 'displayDisabledOptions', 'displaySelectedOptions',
	    'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'noResultsText', 'onChosenChange', 'placeholderTextMultiple',
	    'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'width'
	];
	var ChosenSelect = (function (_super) {
	    __extends(ChosenSelect, _super);
	    function ChosenSelect() {
	        _super.apply(this, arguments);
	    }
	    ChosenSelect.prototype.componentDidMount = function () {
	        var _this = this;
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
	            width: this.props.width
	        })
	            .change(function (event, args) { return _this.props.onChosenChange && _this.props.onChosenChange(event, args); });
	    };
	    ChosenSelect.prototype.componentWillUnmount = function () {
	        this.select
	            .off('change')
	            .chosen('destroy');
	    };
	    ChosenSelect.prototype.render = function () {
	        var _this = this;
	        var selectProps = underscore_1.extend({}, underscore_1.omit(this.props, chosenSelectPropsToOmit));
	        return (React.createElement("select", __assign({}, selectProps, {ref: function (select) { return _this.select = $(select); }, onChange: underscore_1.noop}), this.props.children));
	    };
	    return ChosenSelect;
	}(React.Component));
	exports.ChosenSelect = ChosenSelect;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	(function() {
	  var $, AbstractChosen, Chosen, SelectParser, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
	
	  SelectParser = (function() {
	    function SelectParser() {
	      this.options_index = 0;
	      this.parsed = [];
	    }
	
	    SelectParser.prototype.add_node = function(child) {
	      if (child.nodeName.toUpperCase() === "OPTGROUP") {
	        return this.add_group(child);
	      } else {
	        return this.add_option(child);
	      }
	    };
	
	    SelectParser.prototype.add_group = function(group) {
	      var group_position, option, _i, _len, _ref, _results;
	      group_position = this.parsed.length;
	      this.parsed.push({
	        array_index: group_position,
	        group: true,
	        label: this.escapeExpression(group.label),
	        title: group.title ? group.title : void 0,
	        children: 0,
	        disabled: group.disabled,
	        classes: group.className
	      });
	      _ref = group.childNodes;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        _results.push(this.add_option(option, group_position, group.disabled));
	      }
	      return _results;
	    };
	
	    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
	      if (option.nodeName.toUpperCase() === "OPTION") {
	        if (option.text !== "") {
	          if (group_position != null) {
	            this.parsed[group_position].children += 1;
	          }
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            value: option.value,
	            text: option.text,
	            html: option.innerHTML,
	            title: option.title ? option.title : void 0,
	            selected: option.selected,
	            disabled: group_disabled === true ? group_disabled : option.disabled,
	            group_array_index: group_position,
	            group_label: group_position != null ? this.parsed[group_position].label : null,
	            classes: option.className,
	            style: option.style.cssText
	          });
	        } else {
	          this.parsed.push({
	            array_index: this.parsed.length,
	            options_index: this.options_index,
	            empty: true
	          });
	        }
	        return this.options_index += 1;
	      }
	    };
	
	    SelectParser.prototype.escapeExpression = function(text) {
	      var map, unsafe_chars;
	      if ((text == null) || text === false) {
	        return "";
	      }
	      if (!/[\&\<\>\"\'\`]/.test(text)) {
	        return text;
	      }
	      map = {
	        "<": "&lt;",
	        ">": "&gt;",
	        '"': "&quot;",
	        "'": "&#x27;",
	        "`": "&#x60;"
	      };
	      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
	      return text.replace(unsafe_chars, function(chr) {
	        return map[chr] || "&amp;";
	      });
	    };
	
	    return SelectParser;
	
	  })();
	
	  SelectParser.select_to_array = function(select) {
	    var child, parser, _i, _len, _ref;
	    parser = new SelectParser();
	    _ref = select.childNodes;
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      child = _ref[_i];
	      parser.add_node(child);
	    }
	    return parser.parsed;
	  };
	
	  AbstractChosen = (function() {
	    function AbstractChosen(form_field, options) {
	      this.form_field = form_field;
	      this.options = options != null ? options : {};
	      if (!AbstractChosen.browser_is_supported()) {
	        return;
	      }
	      this.is_multiple = this.form_field.multiple;
	      this.set_default_text();
	      this.set_default_values();
	      this.setup();
	      this.set_up_html();
	      this.register_observers();
	      this.on_ready();
	    }
	
	    AbstractChosen.prototype.set_default_values = function() {
	      var _this = this;
	      this.click_test_action = function(evt) {
	        return _this.test_active_click(evt);
	      };
	      this.activate_action = function(evt) {
	        return _this.activate_field(evt);
	      };
	      this.active_field = false;
	      this.mouse_on_container = false;
	      this.results_showing = false;
	      this.result_highlighted = null;
	      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
	      this.disable_search_threshold = this.options.disable_search_threshold || 0;
	      this.disable_search = this.options.disable_search || false;
	      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
	      this.group_search = this.options.group_search != null ? this.options.group_search : true;
	      this.search_contains = this.options.search_contains || false;
	      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
	      this.max_selected_options = this.options.max_selected_options || Infinity;
	      this.inherit_select_classes = this.options.inherit_select_classes || false;
	      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
	      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
	      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
	      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
	      return this.case_sensitive_search = this.options.case_sensitive_search || false;
	    };
	
	    AbstractChosen.prototype.set_default_text = function() {
	      if (this.form_field.getAttribute("data-placeholder")) {
	        this.default_text = this.form_field.getAttribute("data-placeholder");
	      } else if (this.is_multiple) {
	        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
	      } else {
	        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
	      }
	      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
	    };
	
	    AbstractChosen.prototype.choice_label = function(item) {
	      if (this.include_group_label_in_selected && (item.group_label != null)) {
	        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
	      } else {
	        return item.html;
	      }
	    };
	
	    AbstractChosen.prototype.mouse_enter = function() {
	      return this.mouse_on_container = true;
	    };
	
	    AbstractChosen.prototype.mouse_leave = function() {
	      return this.mouse_on_container = false;
	    };
	
	    AbstractChosen.prototype.input_focus = function(evt) {
	      var _this = this;
	      if (this.is_multiple) {
	        if (!this.active_field) {
	          return setTimeout((function() {
	            return _this.container_mousedown();
	          }), 50);
	        }
	      } else {
	        if (!this.active_field) {
	          return this.activate_field();
	        }
	      }
	    };
	
	    AbstractChosen.prototype.input_blur = function(evt) {
	      var _this = this;
	      if (!this.mouse_on_container) {
	        this.active_field = false;
	        return setTimeout((function() {
	          return _this.blur_test();
	        }), 100);
	      }
	    };
	
	    AbstractChosen.prototype.results_option_build = function(options) {
	      var content, data, data_content, shown_results, _i, _len, _ref;
	      content = '';
	      shown_results = 0;
	      _ref = this.results_data;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        data = _ref[_i];
	        data_content = '';
	        if (data.group) {
	          data_content = this.result_add_group(data);
	        } else {
	          data_content = this.result_add_option(data);
	        }
	        if (data_content !== '') {
	          shown_results++;
	          content += data_content;
	        }
	        if (options != null ? options.first : void 0) {
	          if (data.selected && this.is_multiple) {
	            this.choice_build(data);
	          } else if (data.selected && !this.is_multiple) {
	            this.single_set_selected_text(this.choice_label(data));
	          }
	        }
	        if (shown_results >= this.max_shown_results) {
	          break;
	        }
	      }
	      return content;
	    };
	
	    AbstractChosen.prototype.result_add_option = function(option) {
	      var classes, option_el;
	      if (!option.search_match) {
	        return '';
	      }
	      if (!this.include_option_in_results(option)) {
	        return '';
	      }
	      classes = [];
	      if (!option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push("active-result");
	      }
	      if (option.disabled && !(option.selected && this.is_multiple)) {
	        classes.push("disabled-result");
	      }
	      if (option.selected) {
	        classes.push("result-selected");
	      }
	      if (option.group_array_index != null) {
	        classes.push("group-option");
	      }
	      if (option.classes !== "") {
	        classes.push(option.classes);
	      }
	      option_el = document.createElement("li");
	      option_el.className = classes.join(" ");
	      option_el.style.cssText = option.style;
	      option_el.setAttribute("data-option-array-index", option.array_index);
	      option_el.innerHTML = option.search_text;
	      if (option.title) {
	        option_el.title = option.title;
	      }
	      return this.outerHTML(option_el);
	    };
	
	    AbstractChosen.prototype.result_add_group = function(group) {
	      var classes, group_el;
	      if (!(group.search_match || group.group_match)) {
	        return '';
	      }
	      if (!(group.active_options > 0)) {
	        return '';
	      }
	      classes = [];
	      classes.push("group-result");
	      if (group.classes) {
	        classes.push(group.classes);
	      }
	      group_el = document.createElement("li");
	      group_el.className = classes.join(" ");
	      group_el.innerHTML = group.search_text;
	      if (group.title) {
	        group_el.title = group.title;
	      }
	      return this.outerHTML(group_el);
	    };
	
	    AbstractChosen.prototype.results_update_field = function() {
	      this.set_default_text();
	      if (!this.is_multiple) {
	        this.results_reset_cleanup();
	      }
	      this.result_clear_highlight();
	      this.results_build();
	      if (this.results_showing) {
	        return this.winnow_results();
	      }
	    };
	
	    AbstractChosen.prototype.reset_single_select_options = function() {
	      var result, _i, _len, _ref, _results;
	      _ref = this.results_data;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        result = _ref[_i];
	        if (result.selected) {
	          _results.push(result.selected = false);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };
	
	    AbstractChosen.prototype.results_toggle = function() {
	      if (this.results_showing) {
	        return this.results_hide();
	      } else {
	        return this.results_show();
	      }
	    };
	
	    AbstractChosen.prototype.results_search = function(evt) {
	      if (this.results_showing) {
	        return this.winnow_results();
	      } else {
	        return this.results_show();
	      }
	    };
	
	    AbstractChosen.prototype.winnow_results = function() {
	      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
	      this.no_results_clear();
	      results = 0;
	      searchText = this.get_search_text();
	      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	      zregex = new RegExp(escapedSearchText, 'i');
	      regex = this.get_search_regex(escapedSearchText);
	      _ref = this.results_data;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        option.search_match = false;
	        results_group = null;
	        if (this.include_option_in_results(option)) {
	          if (option.group) {
	            option.group_match = false;
	            option.active_options = 0;
	          }
	          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
	            results_group = this.results_data[option.group_array_index];
	            if (results_group.active_options === 0 && results_group.search_match) {
	              results += 1;
	            }
	            results_group.active_options += 1;
	          }
	          option.search_text = option.group ? option.label : option.html;
	          if (!(option.group && !this.group_search)) {
	            option.search_match = this.search_string_match(option.search_text, regex);
	            if (option.search_match && !option.group) {
	              results += 1;
	            }
	            if (option.search_match) {
	              if (searchText.length) {
	                startpos = option.search_text.search(zregex);
	                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
	                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
	              }
	              if (results_group != null) {
	                results_group.group_match = true;
	              }
	            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
	              option.search_match = true;
	            }
	          }
	        }
	      }
	      this.result_clear_highlight();
	      if (results < 1 && searchText.length) {
	        this.update_results_content("");
	        return this.no_results(searchText);
	      } else {
	        this.update_results_content(this.results_option_build());
	        return this.winnow_results_set_highlight();
	      }
	    };
	
	    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
	      var regex_anchor, regex_flag;
	      regex_anchor = this.search_contains ? "" : "^";
	      regex_flag = this.case_sensitive_search ? "" : "i";
	      return new RegExp(regex_anchor + escaped_search_string, regex_flag);
	    };
	
	    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
	      var part, parts, _i, _len;
	      if (regex.test(search_string)) {
	        return true;
	      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
	        parts = search_string.replace(/\[|\]/g, "").split(" ");
	        if (parts.length) {
	          for (_i = 0, _len = parts.length; _i < _len; _i++) {
	            part = parts[_i];
	            if (regex.test(part)) {
	              return true;
	            }
	          }
	        }
	      }
	    };
	
	    AbstractChosen.prototype.choices_count = function() {
	      var option, _i, _len, _ref;
	      if (this.selected_option_count != null) {
	        return this.selected_option_count;
	      }
	      this.selected_option_count = 0;
	      _ref = this.form_field.options;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        if (option.selected) {
	          this.selected_option_count += 1;
	        }
	      }
	      return this.selected_option_count;
	    };
	
	    AbstractChosen.prototype.choices_click = function(evt) {
	      evt.preventDefault();
	      if (!(this.results_showing || this.is_disabled)) {
	        return this.results_show();
	      }
	    };
	
	    AbstractChosen.prototype.keyup_checker = function(evt) {
	      var stroke, _ref;
	      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
	      this.search_field_scale();
	      switch (stroke) {
	        case 8:
	          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
	            return this.keydown_backstroke();
	          } else if (!this.pending_backstroke) {
	            this.result_clear_highlight();
	            return this.results_search();
	          }
	          break;
	        case 13:
	          evt.preventDefault();
	          if (this.results_showing) {
	            return this.result_select(evt);
	          }
	          break;
	        case 27:
	          if (this.results_showing) {
	            this.results_hide();
	          }
	          return true;
	        case 9:
	        case 38:
	        case 40:
	        case 16:
	        case 91:
	        case 17:
	        case 18:
	          break;
	        default:
	          return this.results_search();
	      }
	    };
	
	    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
	      var _this = this;
	      return setTimeout((function() {
	        return _this.results_search();
	      }), 50);
	    };
	
	    AbstractChosen.prototype.container_width = function() {
	      if (this.options.width != null) {
	        return this.options.width;
	      } else {
	        return "" + this.form_field.offsetWidth + "px";
	      }
	    };
	
	    AbstractChosen.prototype.include_option_in_results = function(option) {
	      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
	        return false;
	      }
	      if (!this.display_disabled_options && option.disabled) {
	        return false;
	      }
	      if (option.empty) {
	        return false;
	      }
	      return true;
	    };
	
	    AbstractChosen.prototype.search_results_touchstart = function(evt) {
	      this.touch_started = true;
	      return this.search_results_mouseover(evt);
	    };
	
	    AbstractChosen.prototype.search_results_touchmove = function(evt) {
	      this.touch_started = false;
	      return this.search_results_mouseout(evt);
	    };
	
	    AbstractChosen.prototype.search_results_touchend = function(evt) {
	      if (this.touch_started) {
	        return this.search_results_mouseup(evt);
	      }
	    };
	
	    AbstractChosen.prototype.outerHTML = function(element) {
	      var tmp;
	      if (element.outerHTML) {
	        return element.outerHTML;
	      }
	      tmp = document.createElement("div");
	      tmp.appendChild(element);
	      return tmp.innerHTML;
	    };
	
	    AbstractChosen.browser_is_supported = function() {
	      if ("Microsoft Internet Explorer" === window.navigator.appName) {
	        return document.documentMode >= 8;
	      }
	      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
	        return false;
	      }
	      return true;
	    };
	
	    AbstractChosen.default_multiple_text = "Select Some Options";
	
	    AbstractChosen.default_single_text = "Select an Option";
	
	    AbstractChosen.default_no_result_text = "No results match";
	
	    return AbstractChosen;
	
	  })();
	
	  $ = jQuery;
	
	  $.fn.extend({
	    chosen: function(options) {
	      if (!AbstractChosen.browser_is_supported()) {
	        return this;
	      }
	      return this.each(function(input_field) {
	        var $this, chosen;
	        $this = $(this);
	        chosen = $this.data('chosen');
	        if (options === 'destroy') {
	          if (chosen instanceof Chosen) {
	            chosen.destroy();
	          }
	          return;
	        }
	        if (!(chosen instanceof Chosen)) {
	          $this.data('chosen', new Chosen(this, options));
	        }
	      });
	    }
	  });
	
	  Chosen = (function(_super) {
	    __extends(Chosen, _super);
	
	    function Chosen() {
	      _ref = Chosen.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }
	
	    Chosen.prototype.setup = function() {
	      this.form_field_jq = $(this.form_field);
	      this.current_selectedIndex = this.form_field.selectedIndex;
	      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
	    };
	
	    Chosen.prototype.set_up_html = function() {
	      var container_classes, container_props;
	      container_classes = ["chosen-container"];
	      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
	      if (this.inherit_select_classes && this.form_field.className) {
	        container_classes.push(this.form_field.className);
	      }
	      if (this.is_rtl) {
	        container_classes.push("chosen-rtl");
	      }
	      container_props = {
	        'class': container_classes.join(' '),
	        'style': "width: " + (this.container_width()) + ";",
	        'title': this.form_field.title
	      };
	      if (this.form_field.id.length) {
	        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
	      }
	      this.container = $("<div />", container_props);
	      if (this.is_multiple) {
	        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
	      } else {
	        this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
	      }
	      this.form_field_jq.hide().after(this.container);
	      this.dropdown = this.container.find('div.chosen-drop').first();
	      this.search_field = this.container.find('input').first();
	      this.search_results = this.container.find('ul.chosen-results').first();
	      this.search_field_scale();
	      this.search_no_results = this.container.find('li.no-results').first();
	      if (this.is_multiple) {
	        this.search_choices = this.container.find('ul.chosen-choices').first();
	        this.search_container = this.container.find('li.search-field').first();
	      } else {
	        this.search_container = this.container.find('div.chosen-search').first();
	        this.selected_item = this.container.find('.chosen-single').first();
	      }
	      this.results_build();
	      this.set_tab_index();
	      return this.set_label_behavior();
	    };
	
	    Chosen.prototype.on_ready = function() {
	      return this.form_field_jq.trigger("chosen:ready", {
	        chosen: this
	      });
	    };
	
	    Chosen.prototype.register_observers = function() {
	      var _this = this;
	      this.container.bind('touchstart.chosen', function(evt) {
	        _this.container_mousedown(evt);
	        return evt.preventDefault();
	      });
	      this.container.bind('touchend.chosen', function(evt) {
	        _this.container_mouseup(evt);
	        return evt.preventDefault();
	      });
	      this.container.bind('mousedown.chosen', function(evt) {
	        _this.container_mousedown(evt);
	      });
	      this.container.bind('mouseup.chosen', function(evt) {
	        _this.container_mouseup(evt);
	      });
	      this.container.bind('mouseenter.chosen', function(evt) {
	        _this.mouse_enter(evt);
	      });
	      this.container.bind('mouseleave.chosen', function(evt) {
	        _this.mouse_leave(evt);
	      });
	      this.search_results.bind('mouseup.chosen', function(evt) {
	        _this.search_results_mouseup(evt);
	      });
	      this.search_results.bind('mouseover.chosen', function(evt) {
	        _this.search_results_mouseover(evt);
	      });
	      this.search_results.bind('mouseout.chosen', function(evt) {
	        _this.search_results_mouseout(evt);
	      });
	      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
	        _this.search_results_mousewheel(evt);
	      });
	      this.search_results.bind('touchstart.chosen', function(evt) {
	        _this.search_results_touchstart(evt);
	      });
	      this.search_results.bind('touchmove.chosen', function(evt) {
	        _this.search_results_touchmove(evt);
	      });
	      this.search_results.bind('touchend.chosen', function(evt) {
	        _this.search_results_touchend(evt);
	      });
	      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
	        _this.results_update_field(evt);
	      });
	      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
	        _this.activate_field(evt);
	      });
	      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
	        _this.container_mousedown(evt);
	      });
	      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
	        _this.input_blur(evt);
	      });
	      this.search_field.bind('blur.chosen', function(evt) {
	        _this.input_blur(evt);
	      });
	      this.search_field.bind('keyup.chosen', function(evt) {
	        _this.keyup_checker(evt);
	      });
	      this.search_field.bind('keydown.chosen', function(evt) {
	        _this.keydown_checker(evt);
	      });
	      this.search_field.bind('focus.chosen', function(evt) {
	        _this.input_focus(evt);
	      });
	      this.search_field.bind('cut.chosen', function(evt) {
	        _this.clipboard_event_checker(evt);
	      });
	      this.search_field.bind('paste.chosen', function(evt) {
	        _this.clipboard_event_checker(evt);
	      });
	      if (this.is_multiple) {
	        return this.search_choices.bind('click.chosen', function(evt) {
	          _this.choices_click(evt);
	        });
	      } else {
	        return this.container.bind('click.chosen', function(evt) {
	          evt.preventDefault();
	        });
	      }
	    };
	
	    Chosen.prototype.destroy = function() {
	      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
	      if (this.search_field[0].tabIndex) {
	        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
	      }
	      this.container.remove();
	      this.form_field_jq.removeData('chosen');
	      return this.form_field_jq.show();
	    };
	
	    Chosen.prototype.search_field_disabled = function() {
	      this.is_disabled = this.form_field_jq[0].disabled;
	      if (this.is_disabled) {
	        this.container.addClass('chosen-disabled');
	        this.search_field[0].disabled = true;
	        if (!this.is_multiple) {
	          this.selected_item.unbind("focus.chosen", this.activate_action);
	        }
	        return this.close_field();
	      } else {
	        this.container.removeClass('chosen-disabled');
	        this.search_field[0].disabled = false;
	        if (!this.is_multiple) {
	          return this.selected_item.bind("focus.chosen", this.activate_action);
	        }
	      }
	    };
	
	    Chosen.prototype.container_mousedown = function(evt) {
	      if (!this.is_disabled) {
	        if (evt && evt.type === "mousedown" && !this.results_showing) {
	          evt.preventDefault();
	        }
	        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
	          if (!this.active_field) {
	            if (this.is_multiple) {
	              this.search_field.val("");
	            }
	            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
	            this.results_show();
	          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
	            evt.preventDefault();
	            this.results_toggle();
	          }
	          return this.activate_field();
	        }
	      }
	    };
	
	    Chosen.prototype.container_mouseup = function(evt) {
	      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
	        return this.results_reset(evt);
	      }
	    };
	
	    Chosen.prototype.search_results_mousewheel = function(evt) {
	      var delta;
	      if (evt.originalEvent) {
	        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
	      }
	      if (delta != null) {
	        evt.preventDefault();
	        if (evt.type === 'DOMMouseScroll') {
	          delta = delta * 40;
	        }
	        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
	      }
	    };
	
	    Chosen.prototype.blur_test = function(evt) {
	      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
	        return this.close_field();
	      }
	    };
	
	    Chosen.prototype.close_field = function() {
	      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
	      this.active_field = false;
	      this.results_hide();
	      this.container.removeClass("chosen-container-active");
	      this.clear_backstroke();
	      this.show_search_field_default();
	      return this.search_field_scale();
	    };
	
	    Chosen.prototype.activate_field = function() {
	      this.container.addClass("chosen-container-active");
	      this.active_field = true;
	      this.search_field.val(this.search_field.val());
	      return this.search_field.focus();
	    };
	
	    Chosen.prototype.test_active_click = function(evt) {
	      var active_container;
	      active_container = $(evt.target).closest('.chosen-container');
	      if (active_container.length && this.container[0] === active_container[0]) {
	        return this.active_field = true;
	      } else {
	        return this.close_field();
	      }
	    };
	
	    Chosen.prototype.results_build = function() {
	      this.parsing = true;
	      this.selected_option_count = null;
	      this.results_data = SelectParser.select_to_array(this.form_field);
	      if (this.is_multiple) {
	        this.search_choices.find("li.search-choice").remove();
	      } else if (!this.is_multiple) {
	        this.single_set_selected_text();
	        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
	          this.search_field[0].readOnly = true;
	          this.container.addClass("chosen-container-single-nosearch");
	        } else {
	          this.search_field[0].readOnly = false;
	          this.container.removeClass("chosen-container-single-nosearch");
	        }
	      }
	      this.update_results_content(this.results_option_build({
	        first: true
	      }));
	      this.search_field_disabled();
	      this.show_search_field_default();
	      this.search_field_scale();
	      return this.parsing = false;
	    };
	
	    Chosen.prototype.result_do_highlight = function(el) {
	      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
	      if (el.length) {
	        this.result_clear_highlight();
	        this.result_highlight = el;
	        this.result_highlight.addClass("highlighted");
	        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
	        visible_top = this.search_results.scrollTop();
	        visible_bottom = maxHeight + visible_top;
	        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
	        high_bottom = high_top + this.result_highlight.outerHeight();
	        if (high_bottom >= visible_bottom) {
	          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
	        } else if (high_top < visible_top) {
	          return this.search_results.scrollTop(high_top);
	        }
	      }
	    };
	
	    Chosen.prototype.result_clear_highlight = function() {
	      if (this.result_highlight) {
	        this.result_highlight.removeClass("highlighted");
	      }
	      return this.result_highlight = null;
	    };
	
	    Chosen.prototype.results_show = function() {
	      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	        this.form_field_jq.trigger("chosen:maxselected", {
	          chosen: this
	        });
	        return false;
	      }
	      this.container.addClass("chosen-with-drop");
	      this.results_showing = true;
	      this.search_field.focus();
	      this.search_field.val(this.search_field.val());
	      this.winnow_results();
	      return this.form_field_jq.trigger("chosen:showing_dropdown", {
	        chosen: this
	      });
	    };
	
	    Chosen.prototype.update_results_content = function(content) {
	      return this.search_results.html(content);
	    };
	
	    Chosen.prototype.results_hide = function() {
	      if (this.results_showing) {
	        this.result_clear_highlight();
	        this.container.removeClass("chosen-with-drop");
	        this.form_field_jq.trigger("chosen:hiding_dropdown", {
	          chosen: this
	        });
	      }
	      return this.results_showing = false;
	    };
	
	    Chosen.prototype.set_tab_index = function(el) {
	      var ti;
	      if (this.form_field.tabIndex) {
	        ti = this.form_field.tabIndex;
	        this.form_field.tabIndex = -1;
	        return this.search_field[0].tabIndex = ti;
	      }
	    };
	
	    Chosen.prototype.set_label_behavior = function() {
	      var _this = this;
	      this.form_field_label = this.form_field_jq.parents("label");
	      if (!this.form_field_label.length && this.form_field.id.length) {
	        this.form_field_label = $("label[for='" + this.form_field.id + "']");
	      }
	      if (this.form_field_label.length > 0) {
	        return this.form_field_label.bind('click.chosen', function(evt) {
	          if (_this.is_multiple) {
	            return _this.container_mousedown(evt);
	          } else {
	            return _this.activate_field();
	          }
	        });
	      }
	    };
	
	    Chosen.prototype.show_search_field_default = function() {
	      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
	        this.search_field.val(this.default_text);
	        return this.search_field.addClass("default");
	      } else {
	        this.search_field.val("");
	        return this.search_field.removeClass("default");
	      }
	    };
	
	    Chosen.prototype.search_results_mouseup = function(evt) {
	      var target;
	      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
	      if (target.length) {
	        this.result_highlight = target;
	        this.result_select(evt);
	        return this.search_field.focus();
	      }
	    };
	
	    Chosen.prototype.search_results_mouseover = function(evt) {
	      var target;
	      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
	      if (target) {
	        return this.result_do_highlight(target);
	      }
	    };
	
	    Chosen.prototype.search_results_mouseout = function(evt) {
	      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
	        return this.result_clear_highlight();
	      }
	    };
	
	    Chosen.prototype.choice_build = function(item) {
	      var choice, close_link,
	        _this = this;
	      choice = $('<li />', {
	        "class": "search-choice"
	      }).html("<span>" + (this.choice_label(item)) + "</span>");
	      if (item.disabled) {
	        choice.addClass('search-choice-disabled');
	      } else {
	        close_link = $('<a />', {
	          "class": 'search-choice-close',
	          'data-option-array-index': item.array_index
	        });
	        close_link.bind('click.chosen', function(evt) {
	          return _this.choice_destroy_link_click(evt);
	        });
	        choice.append(close_link);
	      }
	      return this.search_container.before(choice);
	    };
	
	    Chosen.prototype.choice_destroy_link_click = function(evt) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      if (!this.is_disabled) {
	        return this.choice_destroy($(evt.target));
	      }
	    };
	
	    Chosen.prototype.choice_destroy = function(link) {
	      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
	        this.show_search_field_default();
	        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
	          this.results_hide();
	        }
	        link.parents('li').first().remove();
	        return this.search_field_scale();
	      }
	    };
	
	    Chosen.prototype.results_reset = function() {
	      this.reset_single_select_options();
	      this.form_field.options[0].selected = true;
	      this.single_set_selected_text();
	      this.show_search_field_default();
	      this.results_reset_cleanup();
	      this.form_field_jq.trigger("change");
	      if (this.active_field) {
	        return this.results_hide();
	      }
	    };
	
	    Chosen.prototype.results_reset_cleanup = function() {
	      this.current_selectedIndex = this.form_field.selectedIndex;
	      return this.selected_item.find("abbr").remove();
	    };
	
	    Chosen.prototype.result_select = function(evt) {
	      var high, item;
	      if (this.result_highlight) {
	        high = this.result_highlight;
	        this.result_clear_highlight();
	        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
	          this.form_field_jq.trigger("chosen:maxselected", {
	            chosen: this
	          });
	          return false;
	        }
	        if (this.is_multiple) {
	          high.removeClass("active-result");
	        } else {
	          this.reset_single_select_options();
	        }
	        high.addClass("result-selected");
	        item = this.results_data[high[0].getAttribute("data-option-array-index")];
	        item.selected = true;
	        this.form_field.options[item.options_index].selected = true;
	        this.selected_option_count = null;
	        if (this.is_multiple) {
	          this.choice_build(item);
	        } else {
	          this.single_set_selected_text(this.choice_label(item));
	        }
	        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
	          this.results_hide();
	        }
	        this.show_search_field_default();
	        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
	          this.form_field_jq.trigger("change", {
	            'selected': this.form_field.options[item.options_index].value
	          });
	        }
	        this.current_selectedIndex = this.form_field.selectedIndex;
	        evt.preventDefault();
	        return this.search_field_scale();
	      }
	    };
	
	    Chosen.prototype.single_set_selected_text = function(text) {
	      if (text == null) {
	        text = this.default_text;
	      }
	      if (text === this.default_text) {
	        this.selected_item.addClass("chosen-default");
	      } else {
	        this.single_deselect_control_build();
	        this.selected_item.removeClass("chosen-default");
	      }
	      return this.selected_item.find("span").html(text);
	    };
	
	    Chosen.prototype.result_deselect = function(pos) {
	      var result_data;
	      result_data = this.results_data[pos];
	      if (!this.form_field.options[result_data.options_index].disabled) {
	        result_data.selected = false;
	        this.form_field.options[result_data.options_index].selected = false;
	        this.selected_option_count = null;
	        this.result_clear_highlight();
	        if (this.results_showing) {
	          this.winnow_results();
	        }
	        this.form_field_jq.trigger("change", {
	          deselected: this.form_field.options[result_data.options_index].value
	        });
	        this.search_field_scale();
	        return true;
	      } else {
	        return false;
	      }
	    };
	
	    Chosen.prototype.single_deselect_control_build = function() {
	      if (!this.allow_single_deselect) {
	        return;
	      }
	      if (!this.selected_item.find("abbr").length) {
	        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
	      }
	      return this.selected_item.addClass("chosen-single-with-deselect");
	    };
	
	    Chosen.prototype.get_search_text = function() {
	      return $('<div/>').text($.trim(this.search_field.val())).html();
	    };
	
	    Chosen.prototype.winnow_results_set_highlight = function() {
	      var do_high, selected_results;
	      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
	      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
	      if (do_high != null) {
	        return this.result_do_highlight(do_high);
	      }
	    };
	
	    Chosen.prototype.no_results = function(terms) {
	      var no_results_html;
	      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
	      no_results_html.find("span").first().html(terms);
	      this.search_results.append(no_results_html);
	      return this.form_field_jq.trigger("chosen:no_results", {
	        chosen: this
	      });
	    };
	
	    Chosen.prototype.no_results_clear = function() {
	      return this.search_results.find(".no-results").remove();
	    };
	
	    Chosen.prototype.keydown_arrow = function() {
	      var next_sib;
	      if (this.results_showing && this.result_highlight) {
	        next_sib = this.result_highlight.nextAll("li.active-result").first();
	        if (next_sib) {
	          return this.result_do_highlight(next_sib);
	        }
	      } else {
	        return this.results_show();
	      }
	    };
	
	    Chosen.prototype.keyup_arrow = function() {
	      var prev_sibs;
	      if (!this.results_showing && !this.is_multiple) {
	        return this.results_show();
	      } else if (this.result_highlight) {
	        prev_sibs = this.result_highlight.prevAll("li.active-result");
	        if (prev_sibs.length) {
	          return this.result_do_highlight(prev_sibs.first());
	        } else {
	          if (this.choices_count() > 0) {
	            this.results_hide();
	          }
	          return this.result_clear_highlight();
	        }
	      }
	    };
	
	    Chosen.prototype.keydown_backstroke = function() {
	      var next_available_destroy;
	      if (this.pending_backstroke) {
	        this.choice_destroy(this.pending_backstroke.find("a").first());
	        return this.clear_backstroke();
	      } else {
	        next_available_destroy = this.search_container.siblings("li.search-choice").last();
	        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
	          this.pending_backstroke = next_available_destroy;
	          if (this.single_backstroke_delete) {
	            return this.keydown_backstroke();
	          } else {
	            return this.pending_backstroke.addClass("search-choice-focus");
	          }
	        }
	      }
	    };
	
	    Chosen.prototype.clear_backstroke = function() {
	      if (this.pending_backstroke) {
	        this.pending_backstroke.removeClass("search-choice-focus");
	      }
	      return this.pending_backstroke = null;
	    };
	
	    Chosen.prototype.keydown_checker = function(evt) {
	      var stroke, _ref1;
	      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
	      this.search_field_scale();
	      if (stroke !== 8 && this.pending_backstroke) {
	        this.clear_backstroke();
	      }
	      switch (stroke) {
	        case 8:
	          this.backstroke_length = this.search_field.val().length;
	          break;
	        case 9:
	          if (this.results_showing && !this.is_multiple) {
	            this.result_select(evt);
	          }
	          this.mouse_on_container = false;
	          break;
	        case 13:
	          if (this.results_showing) {
	            evt.preventDefault();
	          }
	          break;
	        case 32:
	          if (this.disable_search) {
	            evt.preventDefault();
	          }
	          break;
	        case 38:
	          evt.preventDefault();
	          this.keyup_arrow();
	          break;
	        case 40:
	          evt.preventDefault();
	          this.keydown_arrow();
	          break;
	      }
	    };
	
	    Chosen.prototype.search_field_scale = function() {
	      var div, f_width, h, style, style_block, styles, w, _i, _len;
	      if (this.is_multiple) {
	        h = 0;
	        w = 0;
	        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
	        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
	        for (_i = 0, _len = styles.length; _i < _len; _i++) {
	          style = styles[_i];
	          style_block += style + ":" + this.search_field.css(style) + ";";
	        }
	        div = $('<div />', {
	          'style': style_block
	        });
	        div.text(this.search_field.val());
	        $('body').append(div);
	        w = div.width() + 25;
	        div.remove();
	        f_width = this.container.outerWidth();
	        if (w > f_width - 10) {
	          w = f_width - 10;
	        }
	        return this.search_field.css({
	          'width': w + 'px'
	        });
	      }
	    };
	
	    return Chosen;
	
	  })(AbstractChosen);
	
	}).call(this);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(2);
	var react_dom_1 = __webpack_require__(7);
	var TetherComponent = __webpack_require__(8);
	var underscore_1 = __webpack_require__(4);
	var Popover = (function (_super) {
	    __extends(Popover, _super);
	    function Popover(props, state) {
	        var _this = this;
	        _super.call(this, props, state);
	        this.handleDocumentClick = function (event) {
	            var tetherToggle = react_dom_1.findDOMNode(_this.tetherToggle);
	            var tetherElement = react_dom_1.findDOMNode(_this.tetherElement);
	            var outsideTetherToggle = !tetherToggle.contains(event.target);
	            var outsideTetherElement = tetherElement ? !tetherElement.contains(event.target) : true;
	            if (outsideTetherElement && outsideTetherToggle) {
	                _this.toggleOpened(false);
	            }
	        };
	        if (!underscore_1.isFunction(this.props.onToggle)) {
	            this.state = {
	                isOpen: !!this.props.isOpen
	            };
	        }
	    }
	    Popover.prototype.componentDidMount = function () {
	        document.addEventListener('click', this.handleDocumentClick, true);
	    };
	    Popover.prototype.componentWillUnmount = function () {
	        document.removeEventListener('click', this.handleDocumentClick, true);
	    };
	    Popover.prototype.render = function () {
	        var _this = this;
	        var tetherToggle = !!this.props.children && this.props.children[0];
	        var tetherElement = !!this.props.children && this.props.children[1];
	        var isOpen = this.state && this.state.isOpen ? this.state.isOpen : this.props.isOpen;
	        return (React.createElement(TetherComponent, __assign({}, underscore_1.omit(this.props, 'children')), 
	            React.createElement("div", {ref: function (toggle) { return _this.tetherToggle = toggle; }, onClick: function () { return _this.toggleOpened(!isOpen); }}, tetherToggle), 
	            isOpen &&
	                React.createElement("div", {ref: function (element) { return _this.tetherElement = element; }}, tetherElement)));
	    };
	    Popover.prototype.toggleOpened = function (isOpen) {
	        if (underscore_1.isFunction(this.props.onToggle)) {
	            this.props.onToggle(isOpen);
	        }
	        else {
	            this.setState({
	                isOpen: isOpen
	            });
	        }
	    };
	    Popover.propTypes = underscore_1.extend(TetherComponent.propTypes, {
	        children: function (_a, propName, componentName) {
	            var children = _a.children;
	            if (underscore_1.isUndefined(children) || React.Children.count(children) != 2) {
	                return new Error((componentName + " expects two children to use as target and element.") +
	                    "Second child can either be a boolean or a ReactNode.");
	            }
	        },
	        isOpen: React.PropTypes.bool,
	        onToggle: React.PropTypes.func
	    });
	    return Popover;
	}(React.Component));
	exports.Popover = Popover;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _TetherComponent = __webpack_require__(9);
	
	var _TetherComponent2 = _interopRequireDefault(_TetherComponent);
	
	exports['default'] = _TetherComponent2['default'];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tether = __webpack_require__(10);
	
	var _tether2 = _interopRequireDefault(_tether);
	
	if (!_tether2['default']) {
	  console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
	}
	
	var renderElementToPropTypes = [_react.PropTypes.string, _react.PropTypes.shape({
	  appendChild: _react.PropTypes.func.isRequired
	})];
	
	var childrenPropType = function childrenPropType(_ref, propName, componentName) {
	  var children = _ref.children;
	
	  var childCount = _react.Children.count(children);
	  if (childCount <= 0) {
	    return new Error(componentName + ' expects at least one child to use as the target element.');
	  } else if (childCount > 2) {
	    return new Error('Only a max of two children allowed in ' + componentName + '.');
	  }
	};
	
	var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];
	
	var TetherComponent = (function (_Component) {
	  _inherits(TetherComponent, _Component);
	
	  function TetherComponent() {
	    _classCallCheck(this, TetherComponent);
	
	    _get(Object.getPrototypeOf(TetherComponent.prototype), 'constructor', this).apply(this, arguments);
	
	    this._targetNode = null;
	    this._elementParentNode = null;
	    this._tether = false;
	  }
	
	  _createClass(TetherComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._targetNode = _reactDom2['default'].findDOMNode(this);
	      this._update();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this._update();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroy();
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this._tether.disable();
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      this._tether.enable();
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      this._tether.position();
	    }
	  }, {
	    key: '_destroy',
	    value: function _destroy() {
	      if (this._elementParentNode) {
	        _reactDom2['default'].unmountComponentAtNode(this._elementParentNode);
	        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
	      }
	
	      if (this._tether) {
	        this._tether.destroy();
	      }
	
	      this._elementParentNode = null;
	      this._tether = null;
	    }
	  }, {
	    key: '_update',
	    value: function _update() {
	      var _this = this;
	
	      var _props = this.props;
	      var children = _props.children;
	      var renderElementTag = _props.renderElementTag;
	
	      var elementComponent = _react.Children.toArray(children)[1];
	
	      // if no element component provided, bail out
	      if (!elementComponent) {
	        // destroy Tether element if it has been created
	        if (this._tether) {
	          this._destroy();
	        }
	        return;
	      }
	
	      // create element node container if it hasn't been yet
	      if (!this._elementParentNode) {
	        // create a node that we can stick our content Component in
	        this._elementParentNode = document.createElement(renderElementTag);
	
	        // append node to the render node
	        this._renderNode.appendChild(this._elementParentNode);
	      }
	
	      // render element component into the DOM
	      _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
	        // don't update Tether until the subtree has finished rendering
	        _this._updateTether();
	      });
	    }
	  }, {
	    key: '_updateTether',
	    value: function _updateTether() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var children = _props2.children;
	      var renderElementTag = _props2.renderElementTag;
	      var renderElementTo = _props2.renderElementTo;
	      var id = _props2.id;
	      var className = _props2.className;
	      var style = _props2.style;
	
	      var options = _objectWithoutProperties(_props2, ['children', 'renderElementTag', 'renderElementTo', 'id', 'className', 'style']);
	
	      var tetherOptions = _extends({
	        target: this._targetNode,
	        element: this._elementParentNode
	      }, options);
	
	      if (id) {
	        this._elementParentNode.id = id;
	      }
	
	      if (className) {
	        this._elementParentNode.className = className;
	      }
	
	      if (style) {
	        Object.keys(style).forEach(function (key) {
	          _this2._elementParentNode.style[key] = style[key];
	        });
	      }
	
	      if (!this._tether) {
	        this._tether = new _tether2['default'](tetherOptions);
	      } else {
	        this._tether.setOptions(tetherOptions);
	      }
	
	      this._tether.position();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.toArray(this.props.children)[0];
	    }
	  }, {
	    key: '_renderNode',
	    get: function get() {
	      var renderElementTo = this.props.renderElementTo;
	
	      if (typeof renderElementTo === 'string') {
	        return document.querySelector(renderElementTo);
	      } else {
	        return renderElementTo || document.body;
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      renderElementTag: _react.PropTypes.string,
	      renderElementTo: _react.PropTypes.oneOfType(renderElementToPropTypes),
	      attachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
	      targetAttachment: _react.PropTypes.oneOf(attachmentPositions),
	      offset: _react.PropTypes.string,
	      targetOffset: _react.PropTypes.string,
	      targetModifier: _react.PropTypes.string,
	      enabled: _react.PropTypes.bool,
	      classes: _react.PropTypes.object,
	      classPrefix: _react.PropTypes.string,
	      optimizations: _react.PropTypes.object,
	      constraints: _react.PropTypes.array,
	      id: _react.PropTypes.string,
	      className: _react.PropTypes.string,
	      style: _react.PropTypes.object,
	      children: childrenPropType
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      renderElementTag: 'div',
	      renderElementTo: null
	    },
	    enumerable: true
	  }]);
	
	  return TetherComponent;
	})(_react.Component);
	
	exports['default'] = TetherComponent;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}
	
	var zeroElement = null;
	
	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();
	
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }
	
	  if (node.ownerDocument !== document) {
	    var _frameElement = node.ownerDocument.defaultView.frameElement;
	    if (_frameElement) {
	      var frameRect = getActualBoundingClientRect(_frameElement);
	      rect.top += frameRect.top;
	      rect.bottom += frameRect.top;
	      rect.left += frameRect.left;
	      rect.right += frameRect.left;
	    }
	  }
	
	  return rect;
	}
	
	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];
	
	  if (position === 'fixed') {
	    return [el];
	  }
	
	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}
	
	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }
	
	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;
	
	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }
	
	  parents.push(el.ownerDocument.body);
	
	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }
	
	  return parents;
	}
	
	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();
	
	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node || !document.body.contains(node)) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });
	
	    document.body.appendChild(node);
	
	    zeroElement = node;
	  }
	
	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);
	
	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }
	
	  return zeroPosCache[id];
	};
	
	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};
	
	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }
	
	  var docEl = doc.documentElement;
	
	  var box = getActualBoundingClientRect(el);
	
	  var origin = getOrigin();
	
	  box.top -= origin.top;
	  box.left -= origin.left;
	
	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }
	
	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;
	
	  return box;
	}
	
	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}
	
	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });
	
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	
	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;
	
	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }
	
	  document.body.removeChild(outer);
	
	  var width = widthContained - widthScroll;
	
	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}
	
	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var args = [];
	
	  Array.prototype.push.apply(args, arguments);
	
	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });
	
	  return out;
	}
	
	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}
	
	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}
	
	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}
	
	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}
	
	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}
	
	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });
	
	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}
	
	var deferred = [];
	
	var defer = function defer(fn) {
	  deferred.push(fn);
	};
	
	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};
	
	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }
	
	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }
	
	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;
	
	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }
	
	          handler.apply(context, args);
	
	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);
	
	  return Evented;
	})();
	
	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParents = _TetherBase$Utils.getScrollParents;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	var removeUtilElements = _TetherBase$Utils.removeUtilElements;
	
	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	  return a + diff >= b && b >= a - diff;
	}
	
	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');
	
	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();
	
	var tethers = [];
	
	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};
	
	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}
	
	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;
	
	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);
	
	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }
	
	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }
	
	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }
	
	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };
	
	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();
	
	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};
	
	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};
	
	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};
	
	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }
	
	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }
	
	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	function addOffset() {
	  var out = { top: 0, left: 0 };
	
	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }
	
	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }
	
	    out.top += top;
	    out.left += left;
	  });
	
	  return out;
	}
	
	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }
	
	  return offset;
	}
	
	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');
	
	  var _value$split2 = _slicedToArray(_value$split, 2);
	
	  var top = _value$split2[0];
	  var left = _value$split2[1];
	
	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;
	
	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);
	
	  function TetherClass(options) {
	    var _this = this;
	
	    _classCallCheck(this, TetherClass);
	
	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);
	
	    tethers.push(this);
	
	    this.history = [];
	
	    this.setOptions(options, false);
	
	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });
	
	    this.position();
	  }
	
	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;
	
	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;
	
	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };
	
	      this.options = extend(defaults, options);
	
	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;
	
	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;
	
	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }
	
	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }
	
	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });
	
	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }
	
	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }
	
	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }
	
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }
	
	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);
	
	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };
	
	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;
	
	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;
	
	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }
	
	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;
	
	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }
	
	          var style = getComputedStyle(target);
	
	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
	
	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }
	
	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	
	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };
	
	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }
	
	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	
	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }
	
	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }
	
	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;
	
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	
	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });
	
	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;
	
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;
	
	      this.disable();
	
	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });
	
	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;
	
	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	
	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }
	
	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;
	
	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }
	
	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }
	
	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }
	
	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;
	
	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)
	
	      if (!this.enabled) {
	        return;
	      }
	
	      this.clearCache();
	
	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	
	      this.updateAttachClasses(this.attachment, targetAttachment);
	
	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });
	
	      var width = elementPos.width;
	      var height = elementPos.height;
	
	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;
	
	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }
	
	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;
	
	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	
	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	
	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);
	
	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;
	
	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });
	
	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }
	
	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },
	
	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	
	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;
	
	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	
	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	
	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }
	
	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;
	
	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });
	
	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;
	
	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }
	
	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.
	
	      this.move(next);
	
	      this.history.unshift(next);
	
	      if (this.history.length > 3) {
	        this.history.pop();
	      }
	
	      if (flushChanges) {
	        flush();
	      }
	
	      return true;
	    }
	
	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;
	
	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }
	
	      var same = {};
	
	      for (var type in pos) {
	        same[type] = {};
	
	        for (var key in pos[type]) {
	          var found = false;
	
	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }
	
	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }
	
	      var css = { top: '', left: '', right: '', bottom: '' };
	
	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }
	
	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }
	
	          if (window.matchMedia) {
	            // HubSpot/tether#207
	            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
	            if (!retina) {
	              xPos = Math.round(xPos);
	              yPos = Math.round(yPos);
	            }
	          }
	
	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
	
	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }
	
	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };
	
	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });
	
	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }
	
	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }
	
	      if (!moved) {
	        if (this.options.bodyElement) {
	          this.options.bodyElement.appendChild(this.element);
	        } else {
	          var offsetParentIsBody = true;
	          var currentNode = this.element.parentNode;
	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }
	
	            currentNode = currentNode.parentNode;
	          }
	
	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	      }
	
	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];
	
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }
	
	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);
	
	  return TetherClass;
	})(Evented);
	
	TetherClass.modules = [];
	
	TetherBase.position = position;
	
	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	
	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }
	
	  if (to === document) {
	    to = to.documentElement;
	  }
	
	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);
	
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }
	
	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }
	
	  return to;
	}
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;
	
	    if (!this.options.constraints) {
	      return true;
	    }
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;
	
	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }
	
	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });
	
	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;
	
	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	
	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;
	
	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });
	
	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });
	
	    var addClasses = [];
	
	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);
	
	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;
	
	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }
	
	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');
	
	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
	
	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }
	
	      var bounds = getBoundingRect(_this, to);
	
	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }
	
	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }
	
	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';
	
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';
	
	            eAttachment.top = 'top';
	          }
	        }
	
	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }
	
	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }
	
	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }
	
	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }
	
	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }
	
	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }
	
	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }
	
	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }
	
	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }
	
	      pin = pin || [];
	
	      var pinned = [];
	      var oob = [];
	
	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }
	
	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }
	
	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }
	
	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }
	
	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }
	
	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }
	
	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }
	
	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }
	
	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }
	
	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    var targetPos = this.getTargetBounds();
	
	    var bottom = top + height;
	    var right = left + width;
	
	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    var allClasses = [];
	    var addClasses = [];
	
	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }
	
	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return true;
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (!this.options.shift) {
	      return;
	    }
	
	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }
	
	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];
	
	      var _shift = shift;
	
	      var _shift2 = _slicedToArray(_shift, 2);
	
	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];
	
	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }
	
	    top += shiftTop;
	    left += shiftLeft;
	
	    return { top: top, left: left };
	  }
	});
	return Tether;
	
	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(2);
	var underscore_1 = __webpack_require__(4);
	var svgsEnum = __webpack_require__(12);
	var setSvgClass = function (svgString, svgClass) {
	    var parser = document.createElement('div');
	    parser.innerHTML = svgString;
	    parser.children[0].setAttribute('class', svgClass);
	    return parser.innerHTML;
	};
	var svgPropsToOmit = [
	    'svgClass', 'svgName'
	];
	var Svg = (function (_super) {
	    __extends(Svg, _super);
	    function Svg() {
	        _super.apply(this, arguments);
	    }
	    Svg.prototype.render = function () {
	        var svgClass = this.props.svgClass ? this.props.svgClass : '';
	        var svgString = svgsEnum[this.props.svgName];
	        var svgSpanProps = underscore_1.extend({}, underscore_1.omit(this.props, svgPropsToOmit));
	        if (svgString) {
	            var svgStringWithClass = setSvgClass(svgString, svgClass);
	            return (React.createElement("span", __assign({}, svgSpanProps, {dangerouslySetInnerHTML: { __html: svgStringWithClass }})));
	        }
	        else {
	            return (React.createElement("span", __assign({}, svgSpanProps), 
	                React.createElement("svg", {className: svgClass})
	            ));
	        }
	    };
	    return Svg;
	}(React.Component));
	exports.Svg = Svg;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"access-private": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M251.398 67.167c1.477-.142 0 0 0 0zm0 0c-39.869 3.663-62.133 36.377-62.133 36.377s-12.637 14.369-9.087 30.073c4.771 21.212 11.643 39.018 3.407 58.187-3.692 8.661 6.134 27.857 6.446 30.924 1.505 14.341 22.234 21.866 24.506 62.618 2.272 40.75-118.472 67.896-118.472 67.896V416h319.867v-62.758s-120.744-27.148-118.474-67.896c2.272-40.751 23.002-48.277 24.507-62.618.313-3.066 10.137-22.263 6.446-30.924-8.236-19.169-1.363-36.974 3.407-58.187 3.55-15.704-9.087-30.073-9.087-30.073S300.471 70.83 260.6 67.167c-1.534-.17-7.725-.142-9.202 0zm9.202 0s-1.534-.17 0 0z\"/></svg>",
		"access-secured": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M276.029 67.131a37.2 37.2 0 0 1 .324-.03l-.324.03zM276.004 67.133l.025-.002-.025.002zM275.736 67.158a7.03 7.03 0 0 1 .104-.01l-.104.01zM276.354 67.101c.011-.001.011-.001 0 0zM275.842 67.148a.63.63 0 0 0 .041-.004l-.041.004zM275.883 67.145l.121-.011a3.193 3.193 0 0 0-.121.011zM283.864 67.091c-.027-.003-.03-.003 0 0zM284.491 67.158l-.04-.004.04.004zM284.371 67.146l-.507-.055.507.055zM284.451 67.154l-.08-.008.08.008zM113.664 140.567l.03-.003-.03.003zM113.426 140.591l.238-.024a24.22 24.22 0 0 1-.238.024zM113.272 140.606l.134-.013a4.788 4.788 0 0 1-.134.013zM113.406 140.593l.02-.002-.02.002zM119.832 140.593l-.017-.001.017.001zM119.551 140.567c-.086-.007-.104-.009 0 0zM119.815 140.591l-.264-.024.264.024zM113.694 140.564c.042-.004.053-.005 0 0zM119.982 140.606l-.15-.014c.084.009.15.014.15.014z\"/><g><path d=\"M284.491 67.158c-1.468-.157-7.341-.132-8.755 0-37.904 3.67-59.058 36.383-59.058 36.383s-12.032 14.365-8.677 30.041c4.561 21.232 11.062 39.057 3.25 58.219-3.513 8.65 5.819 27.864 6.134 30.932 1.442 14.338 21.154 21.888 23.304 62.623 1.289 24.42-39.459 43.955-72.311 55.689-12.763-7.941-22.156-17.471-21.606-28.191 1.625-32.164 16.724-38.113 17.825-49.438.209-2.411 7.365-17.589 4.665-24.404-5.977-15.15-.996-29.201 2.49-45.978 2.596-12.372-6.632-23.696-6.632-23.696s-16.146-25.846-45.139-28.729c-1.153-.104-5.662-.104-6.71 0-28.992 2.884-45.191 28.729-45.191 28.729s-9.018 11.298-6.605 23.696c3.276 16.882 8.44 30.827 2.464 45.978-2.674 6.815 4.456 21.993 4.718 24.404 1.075 11.324 16.147 17.273 17.799 49.438C88.107 345.016.294 366.458.294 366.458V416h351.407v-62.754s-34.286-27.156-32.137-67.893c2.147-40.733 21.859-48.285 23.275-62.623.314-3.067 9.646-22.281 6.134-30.932-7.812-19.162-1.311-36.986 3.25-58.219 3.384-15.675-8.648-30.04-8.648-30.04s-21.127-32.711-59.084-36.381zM496.014 337.053V288c0-15.287-15.731-42.292-47.981-42.292-31.75 0-48.042 25.511-48.042 42.292v49.053H384V448h127.501V337.053h-15.487zm-63.974-.001l-.04-39.03s.131-26.021 16.03-26.021c16.18 0 15.97 26.021 15.97 26.021l.024 39.03H432.04z\"/></g></svg>",
		"access-shared": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M323.779 67.112l.126-.011-.126.011zM323.497 67.139l.282-.026-.282.026zM323.905 67.101c.012-.001.012-.001 0 0zM323.288 67.158l.035-.003-.035.003zM323.475 67.141l.022-.002-.022.002zM323.323 67.155l.149-.014-.149.014z\"/><path d=\"M367.116 285.354c2.147-40.731 21.858-48.284 23.274-62.622.314-3.067 9.646-22.281 6.137-30.932-7.813-19.162-1.312-36.986 3.25-58.219 3.382-15.675-8.65-30.04-8.65-30.04S370 70.828 332.043 67.158c-1.468-.157-7.34-.131-8.755 0-37.904 3.67-59.058 36.384-59.058 36.384s-12.034 14.365-8.68 30.04c4.562 21.232 11.062 39.057 3.251 58.219-3.513 8.65 5.819 27.864 6.136 30.932 1.439 14.338 21.151 21.888 23.304 62.623 1.421 26.936-48.295 47.929-82.152 59.063-15.595-8.56-28.023-19.28-27.392-31.567 1.625-32.164 16.724-38.114 17.825-49.438.21-2.411 7.366-17.589 4.666-24.403-5.977-15.151-.996-29.202 2.49-45.978 2.595-12.373-6.632-23.697-6.632-23.697s-16.147-25.846-45.139-28.729c-1.152-.105-5.66-.105-6.709 0-28.992 2.883-45.191 28.729-45.191 28.729s-9.018 11.298-6.606 23.697c3.277 16.881 8.44 30.826 2.464 45.978-2.673 6.814 4.457 21.992 4.719 24.403 1.075 11.324 16.147 17.273 17.798 49.438 1.651 32.162-86.162 53.604-86.162 53.604V416H480l-.221-62.754s-114.813-27.156-112.663-67.892zM332.043 67.158l-.04-.004.04.004z\"/><path d=\"M331.416 67.091c-.027-.003-.03-.003 0 0zM332.003 67.154l-.08-.008.08.008zM331.923 67.146l-.507-.055.507.055zM151.54 140.572l.369.034-.369-.034zM151.54 140.572c-.211-.019-.141-.012 0 0zM145.198 140.606l.345-.035-.345.035zM145.543 140.571c.12-.011.173-.017 0 0z\"/></svg>",
		"activity": "<svg viewbox=\"0 0 20 20\"><path d=\"M0 10c0 5.52 4.466 10 9.989 10 5.53 0 10.01-4.478 10.01-10 0-5.52-4.478-10-10.01-10C4.469 0 0 4.478 0 10m10.04-8c4.44 0 8.05 3.589 8.05 8s-3.612 8-8.05 8c-4.428 0-8.03-3.589-8.03-8s3.603-8 8.03-8\"/><path d=\"M9 5.991C9 5.451 9.45 5 10.01 5c.559 0 1 .444 1 .991l-.009 4.596 2.742 2.742a.994.994 0 0 1-.005 1.409.997.997 0 0 1-1.409.005L9 11.414V5.991\"/></svg>",
		"add": "<svg viewbox=\"0 0 18 18\"><path d=\"M13 8h-3V5a1 1 0 0 0-2 0v3H5a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2\"/><path d=\"M8.991 16C5.136 16 2 12.86 2 9s3.136-7 6.991-7c3.865 0 7.01 3.14 7.01 7s-3.144 7-7.01 7m0-16C4.023 0 0 4.03 0 9c0 4.968 4.02 9 8.991 9 4.977 0 9.01-4.03 9.01-9 0-4.968-4.03-9-9.01-9\"/></svg>",
		"arrow-bottom-rounded": "<svg viewbox=\"0 0 12.6 7.2\"><path d=\"M.945.046c.3 0 .5.1.7.3l4.6 4.6 4.6-4.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.2 5.2c-.4.4-1.2.4-1.6 0l-5.2-5.2c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3\"/></svg>",
		"arrow-bottom": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M127.315 128.628l-63.999 64.001L254.897 384.21l191.788-191.789-64-64L254.897 256.21z\"/></svg>",
		"arrow-left-rounded": "<svg viewbox=\"0 0 20 20\"><path d=\"M11.5 4.8L7.2 9.3c-.3.4-.3.9 0 1.3l4.3 4.6c.3.4.9.4 1.2 0 .3-.4.3-.9 0-1.3L9 9.9 12.7 6c.3-.4.3-.9 0-1.3-.3-.3-.9-.3-1.2.1z\"/></svg>",
		"arrow-left": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M383.688 128.631l-64-64-191.583 191.581L319.895 448l64-64-127.79-127.788z\"/></svg>",
		"arrow-right-rounded": "<svg viewbox=\"0 0 20 20\"><path d=\"M8.5 15.2l4.3-4.6c.3-.4.3-.9 0-1.3L8.4 4.8c-.3-.4-.9-.4-1.2 0-.3.4-.3.9 0 1.3l3.7 4L7.2 14c-.3.4-.3.9 0 1.3.4.3 1 .3 1.3-.1z\"/></svg>",
		"arrow-right": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M128.313 384l64 64 191.582-191.581-191.79-191.788-64 64 127.79 127.788z\"/></svg>",
		"arrow-top-rounded": "<svg viewbox=\"0 0 12.6 7.2\"><path d=\"M11.3 7.04c-.3 0-.5-.1-.7-.3L6 2.14l-4.6 4.6c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L5.2.14c.4-.4 1.2-.4 1.6 0l5.2 5.2c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3\"/></svg>",
		"arrow-top": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M382.685 384.003l63.999-64.001-191.581-191.581L63.315 320.21l64 64 127.788-127.789z\"/></svg>",
		"asc-desc": "<svg viewbox=\"0 0 260 390\"><path class=\"asc-arrow\" d=\"M258 131L130 3 2 131\"/><path class=\"desc-arrow\" d=\"M1 259l128 128 128-128\"/></svg>",
		"card-data-add_content": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M479.75 352h-64v-64h-64v64h-64v64l64 .188V480h64v-64h64zM320.92 32.08v95.911l96 .179z\"/><path d=\"M32 416h224.75v-96h64v-64h96l.17-95.92-127.83.081-.34-128.162L32 32.08\"/></svg>",
		"card-graph-add_content": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M512 352h-64v-64h-64v64h-64v64l64 .188V480h64v-64h64zM32 384V32H.272L0 416h288v-32z\"/><path d=\"M448 64L288 224l-112-96-112 96v128h224v-32h64v-64h96z\"/></svg>",
		"card-move": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M160 192h192v-64H160v64zm0-96h192V32H160v64zm0 192h192v-64H160v64zm0 96h192v-64H160v64zm0 96h192v-64H160v64z\"/></svg>",
		"card-table-add_content": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M511.625 352h-64v-64h-64v64h-64v64l64 .188V480h64v-64h64z\"/><path d=\"M320 320h32.625v-64H448V32l-128 .009M0 32.009h128V416H0zM160 32.004h128v383.991H160z\"/></svg>",
		"card-type-BarChart-horizontal": "<svg viewbox=\"0 0 32 32\"><g fill=\"#f38130\"><path d=\"M7.03 24.996V7.003a1 1 0 0 1 1-1h.992a1 1 0 0 1 1 1v17.994a1 1 0 0 1-1 1H8.03c-.554-.001-1-.45-1-1M11 19v4h7l.001-4h-7m5.988 2.999h-4.981v-1.991h4.981v1.991M11 9v4h10l.001-4h-10m8.988 2.999h-7.981v-1.991h7.981v1.991M11 14v4h14l.001-4h-14m12.988 2.999H12.007v-1.991h11.981v1.991z\"/><path d=\"M32 30.006V1.994A1.994 1.994 0 0 0 30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006zM2 30V2h28v28H2z\"/></g></svg>",
		"card-type-BarChart-vertical": "<svg viewbox=\"0 0 32 32\"><g fill=\"#f38130\"><path d=\"M24.996 24.975H7.003a1 1 0 0 1-1-1v-.992a1 1 0 0 1 1-1h17.994a1 1 0 0 1 1 1v.992c-.001.554-.45 1-1 1M19 20.999L23 21v-7h-4v7m2.999-5.988v4.981h-1.991v-4.981h1.991M9 20.999L13 21V11H9v10m2.999-8.988v7.981h-1.991v-7.981h1.991M14 20.999L18 21V7l-4-.001v14m2.999-12.988v11.981h-1.991V8.011h1.991\"/><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/></g></svg>",
		"card-type-DetailedStatistics": "<svg viewbox=\"0 0 32 32\"><g fill=\"#296897\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M6 7.996l-.001 4h20l.001-4H6m18.987 2.999H7.006V9.004h17.981v1.991M6 12.996l-.001 3h20l.001-3H6m18.987 1.999H7.006v-.991h17.981v.991M6 16.996l-.001 3h20l.001-3H6m18.987 1.999H7.006v-.991h17.981v.991M6 20.996l-.001 3h20l.001-3H6m18.987 1.999H7.006v-.991h17.981v.991\"/></g></svg>",
		"card-type-LineChart-bar": "<svg viewbox=\"0 0 32 32\"><g fill=\"#00a78a\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M24.997 24.975H7.003a1 1 0 0 1-1-1v-.992a1 1 0 0 1 1-1h17.994a1 1 0 0 1 1 1v.992a1 1 0 0 1-1 1M11 8v4H8v8.992L15 21V8l-4 .004m-2 4.982h2v7H9v-7m5 7h-2v-.011h.002V9.007H14v10.979M20 10v5h-3v5.992L24 21V10l-4 .004m-2 5.982h2l-.001 4h-2v-4zm5 4h-2v-.011h.002v-8.968H23v8.979\"/></g></svg>",
		"card-type-LineChart-line": "<svg viewbox=\"0 0 32 32\"><g fill=\"#00a78a\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M26 23.972v-.992a1 1 0 0 0-1-1H8.011v-5.446l3.329-2.208 3.492 3.848c.361.396.971.439 1.382.096l4.154-3.47 3.635 3.619v1.226a1 1 0 1 0 2 0v-1.642a1 1 0 0 0-.295-.709l-4.577-4.555a1.002 1.002 0 0 0-1.347-.059l-4.116 3.439-3.424-3.773a.999.999 0 0 0-1.293-.162l-2.939 1.949v-1.704l3.503-3.102 3.408 2.918a.999.999 0 0 0 1.04.161l4.314-1.826 3.726 2.896v1.153a1 1 0 1 0 2 0v-1.642c0-.309-.143-.6-.387-.79L21.04 8.643a.994.994 0 0 0-1-.131l-4.285 1.813-3.598-3.082a1 1 0 0 0-1.313.011l-2.83 2.505V6.99a.997.997 0 0 0-.997-.997h-.013a.998.998 0 0 0-.998.997V23.975a1 1 0 0 0 1 1H25a1 1 0 0 0 1-1\"/></g></svg>",
		"card-type-Map": "<svg viewbox=\"0 0 32 32\"><path d=\"M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 30H2V2h28v28\"/><path d=\"M16 26.5l-.6-1.1c-.6-1-6.1-10.3-6.1-13.3 0-3.2 3-5.9 6.8-5.9 3.7 0 6.8 2.6 6.8 5.9 0 3-5.5 12.2-6.1 13.3l-.8 1.1m0-18.8c-2.9 0-5.2 2-5.2 4.4 0 1.8 2.9 7.4 5.2 11.4 2.3-4 5.2-9.7 5.2-11.4 0-2.4-2.3-4.4-5.2-4.4m0 7.8c-1.3 0-2.8-1.1-2.8-2.8 0-1.6 1.2-2.8 2.8-2.8 1.3 0 2.7 1.1 2.7 2.8.1 1.6-1.1 2.8-2.7 2.8m0-4c-.7 0-1.2.5-1.2 1.2s.7 1.2 1.2 1.2c.7 0 1.2-.5 1.2-1.2.1-.7-.6-1.2-1.2-1.2\"/></svg>",
		"card-type-PieChart-donut": "<svg viewbox=\"0 0 32 32\"><g fill=\"#f38130\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6m3 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 16c0-4.078 3.053-7.436 6.997-7.93v3.03A5 5 0 0 0 11 15.998c0 .053.014.103.016.156l-2.968.705A8.16 8.16 0 0 1 8 15.998m8 8c-3.43 0-6.347-2.162-7.484-5.194l2.962-.703A4.99 4.99 0 0 0 16 20.998a4.964 4.964 0 0 0 2.754-.832l2.146 2.146a7.957 7.957 0 0 1-4.9 1.686m6.314-3.1l-2.146-2.146c.524-.79.832-1.735.832-2.754 0-2.42-1.72-4.437-4-4.9v-3.03c3.946.491 7 3.851 7 7.931a7.957 7.957 0 0 1-1.686 4.9\"/></g></svg>",
		"card-type-PieChart-pie": "<svg viewbox=\"0 0 32 32\"><g fill=\"#f38130\"><path d=\"M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6m-1 2.07v7.141l-6.949 1.65A8.16 8.16 0 0 1 8.003 16c0-4.078 3.053-7.436 6.997-7.93M8.519 18.806l7.172-1.703 5.212 5.212a7.962 7.962 0 0 1-4.9 1.685c-3.43 0-6.347-2.162-7.484-5.194M22.317 20.9l-5.318-5.318V8.069c3.947.491 7 3.851 7 7.931a7.957 7.957 0 0 1-1.686 4.9\"/><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/></g></svg>",
		"card-type-QuickMetric": "<svg viewbox=\"0 0 32 32\"><g fill=\"#442f84\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M14.996 9.995H7.003a1 1 0 0 1-1-1v-.992a1 1 0 0 1 1-1h7.993a1 1 0 0 1 1 1v.992a1 1 0 0 1-1 1M12.691 13.991c.538 0 1.023.079 1.453.236a3.25 3.25 0 0 1 1.103.654c.303.279.536.612.699.998.162.386.243.811.243 1.275 0 .398-.056.767-.169 1.105a4.38 4.38 0 0 1-.459.969c-.195.307-.42.603-.677.889s-.53.577-.818.871l-2.13 2.182c.274-.08.544-.143.811-.191.266-.047.517-.071.751-.071h2.033c.249 0 .446.069.59.205a.713.713 0 0 1 .217.542V25H8.685v-.748c0-.144.03-.299.09-.463.059-.165.165-.314.314-.448l3.139-3.161c.269-.269.503-.526.703-.771.199-.244.363-.484.493-.72.129-.237.226-.474.291-.71.065-.237.097-.488.097-.751 0-.434-.103-.767-.31-.998-.206-.232-.522-.348-.946-.348a1.429 1.429 0 0 0-.867.277 1.312 1.312 0 0 0-.296.299 1.59 1.59 0 0 0-.197.374c-.08.223-.181.386-.303.486-.122.099-.288.148-.496.148-.05 0-.104-.002-.162-.006a2.212 2.212 0 0 1-.175-.023l-1.226-.217a4.12 4.12 0 0 1 .46-1.42 3.44 3.44 0 0 1 .845-1.01 3.44 3.44 0 0 1 1.155-.602 4.76 4.76 0 0 1 1.397-.198M21.36 13.991c.538 0 1.023.079 1.453.236a3.25 3.25 0 0 1 1.103.654c.303.279.536.612.699.998.162.386.243.811.243 1.275 0 .398-.056.767-.169 1.105a4.38 4.38 0 0 1-.459.969c-.195.307-.42.603-.677.889s-.53.577-.818.871l-2.13 2.182c.274-.08.544-.143.811-.191.266-.047.517-.071.751-.071H24.2c.249 0 .446.069.59.205a.713.713 0 0 1 .217.542V25h-7.653v-.748c0-.144.03-.299.09-.463.059-.165.165-.314.314-.448l3.139-3.161c.269-.269.503-.526.703-.771.199-.244.363-.484.493-.72.129-.237.226-.474.291-.71.065-.237.097-.488.097-.751 0-.434-.103-.767-.31-.998-.206-.232-.522-.348-.946-.348a1.429 1.429 0 0 0-.867.277 1.312 1.312 0 0 0-.296.299 1.59 1.59 0 0 0-.197.374c-.08.223-.181.386-.303.486-.122.099-.288.148-.496.148-.05 0-.104-.002-.162-.006a2.212 2.212 0 0 1-.175-.023l-1.226-.217a4.12 4.12 0 0 1 .46-1.42 3.44 3.44 0 0 1 .845-1.01 3.44 3.44 0 0 1 1.155-.602 4.77 4.77 0 0 1 1.397-.198\"/></g></svg>",
		"card-type-Trend": "<svg viewbox=\"0 0 32 32\"><g fill=\"#296897\"><path d=\"M30.006 0H1.994A1.994 1.994 0 0 0 0 1.994v28.012C0 31.107.893 32 1.994 32h28.012A1.994 1.994 0 0 0 32 30.006V1.994A1.994 1.994 0 0 0 30.006 0zM30 30H2V2h28v28z\"/><path d=\"M16 9.543l-3.259-3.259a.994.994 0 0 0-.718-.291l-.01-.002-.01.002a.994.994 0 0 0-.718.291l-3.26 3.259a1 1 0 0 0 0 1.415l.02.02a1 1 0 0 0 1.415 0l1.552-1.552v10.567a1 1 0 0 0 2 0V9.425l1.552 1.552a1 1 0 0 0 1.415 0l.02-.02A.998.998 0 0 0 16 9.543M16.03 22.422l3.259 3.259a.994.994 0 0 0 .718.291l.01.002.01-.002c.26.003.52-.093.718-.291l3.259-3.259a1 1 0 0 0 0-1.415l-.02-.02a1 1 0 0 0-1.415 0l-1.552 1.552V11.972a1 1 0 0 0-2 0v10.567l-1.552-1.552a1 1 0 0 0-1.415 0l-.02.02a1 1 0 0 0 0 1.415\"/></g></svg>",
		"chart-down": "<svg viewbox=\"0 0 512 512\"><path d=\"M0 128h512L256 384\"/></svg>",
		"chart-new": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256-.001l52.034 118.761 114.991-57.009-34.857 124.533L512 217.984l-105.591 72.834 74.9 105.049-127.493-13.195L344.975 512 256 418.548 167.025 512l-8.841-129.328-127.493 13.195 74.9-105.049L0 217.984l123.834-31.7L88.975 61.751l114.993 57.009z\"/></svg>",
		"chart-stable": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 224h512v96H0z\"/></svg>",
		"chart-up": "<svg viewbox=\"0 0 512 512\"><path d=\"M512 384H0l256-256\"/></svg>",
		"check-not_all_selected": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M64 224h383.75v96H64z\"/></svg>",
		"check": "<svg viewbox=\"0 0 10 8\"><path d=\"M3.144 8L.167 4.891a.615.615 0 0 1 0-.843.556.556 0 0 1 .809 0l2.168 2.264L9.025.174a.557.557 0 0 1 .809 0 .617.617 0 0 1-.001.844L3.144 8\"/></svg>",
		"clear": "<svg viewbox=\"0 0 10 10\"><path d=\"M9.79.212A.72.72 0 0 0 8.77.211L5 3.981 1.229.211A.717.717 0 0 0 .211.212H.21A.72.72 0 0 0 .211 1.23l3.771 3.769L.211 8.77a.718.718 0 0 0 0 1.018.718.718 0 0 0 1.018 0L5 6.017l3.771 3.771A.72.72 0 0 0 9.789 8.77L6.018 4.999 9.789 1.23A.72.72 0 0 0 9.79.212\"/></svg>",
		"close": "<svg viewbox=\"0 0 10 10\"><path d=\"M9.79.212A.72.72 0 0 0 8.77.211L5 3.981 1.229.211A.717.717 0 0 0 .211.212H.21A.72.72 0 0 0 .211 1.23l3.771 3.769L.211 8.77a.718.718 0 0 0 0 1.018.718.718 0 0 0 1.018 0L5 6.017l3.771 3.771A.72.72 0 0 0 9.789 8.77L6.018 4.999 9.789 1.23A.72.72 0 0 0 9.79.212\"/></svg>",
		"clouds": "<svg width=\"117\" height=\"94\" viewbox=\"0 0 117 94\"><path d=\"M103.5 20.5H63s-7.5.5-7.5-5c0-9.552 10.446-10.175 14.04-2.886.982 3.068 2.997 4.67 5.643 3.689-2.256 0-4.321-1.053-4.92-3.913C69.735 9.51 68.263.073 78.5.5c9.024.376 9.717 6.104 9.5 12.318-.04 1.165.198 2.519 3.142 3.485-2.464-1.37-2.479-2.697-2.479-3.485 0-.787.918-2.318 3.337-2.318 3.5 0 4.5 3.5 4.5 3.5s.5 6.144 7 6.144M58.47 50.603c0 7.017-8.932 6.475-8.932 6.475H0s11.078-1.246 12.732-4.05c1.02-1.73-.05-3.8-.05-3.8s-2.851-5.208 2.47-7.717c3.934-1.856 6.404-.083 7.313 2.86.91 2.942-.894 3.83-3.212 7.276 3.212-2.419 5.016-4.767 4.529-7.277-.488-2.51-3.884-10.388 4.75-11.305 10.48-1.112 8.229 12.38 8.229 12.38s.569-8.862 7.65-8.278c6.52.537 6.568 6.398 5.426 8.691-.723 1.518-4.337 3.718-7.498 4.745-2.818.916-10.426 1.685-10.426 1.685 15.79 0 18.775-6.06 18.775-6.06s7.782-1.378 7.782 4.375zM75.616 93.602s-7.155-.097-5.735-6.408c1.42-6.309 7.988-3.459 9.276-3.012 1.288.446 2.517 3.659 8.414 4.57-4.466-1.574-6.894-4.167-7.126-4.984-.877-3.082-2.448-10.62 6.54-11.08 9.37-.478 8.629 7.359 8.079 10.129-.118.59-.98 3.14 3.718 5.435-3.208-2.296-2.872-4.722-2.796-5.435.294-2.528 3.152-5.986 7.764-4.339 6.249 2.232 3.797 7.31 3.797 8.716 0 1.844-1.11 6.408 9.953 6.408H75.616z\"/></svg>",
		"copy": "<svg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\"><path d=\"M12.3 2H2.1v12.4h10.2V2zm-.9 10.1H3.6v-1h7.8v1zm0-3H3.6v-1h7.8v1zm0-3.1H3.6V5h7.8v1z\" fill=\"none\"/><path d=\"M14.3 14.6c0 1-.7 1.8-1.7 1.8h-5V18h10.2V3.8h-3.6v10.8h.1z\" fill=\"none\"/><path fill=\"#1D4F76\" d=\"M3.6 11.1h7.8v1H3.6zM3.6 8.1h7.8v1H3.6zM3.6 5h7.8v1H3.6z\"/><path d=\"M18.2 1.8h-3.9c0-1-.7-1.8-1.7-1.8H1.7C.8 0 0 .8 0 1.8v12.7c0 1 .7 1.8 1.7 1.8h3.9v1.8c0 1 .7 1.8 1.7 1.8h10.9c.9 0 1.7-.8 1.7-1.8V3.6c0-1-.7-1.8-1.7-1.8zM2.1 14.4V2h10.2v12.4H2.1zM17.9 18H7.7v-1.6h5c.9 0 1.7-.8 1.7-1.8V3.9H18V18h-.1z\" fill=\"#1D4F76\"/></svg>",
		"dashboard-addcard": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M512 384h-64v-64h-64v64h-64v64l64 .188V512h64v-64h64z\"/><path d=\"M288 479.75V352h64v-64h128V32H32v448zM447.75 448h.25v-.25z\"/></svg>",
		"dashboard-reset": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 416h288v96H0zM320 0C192 0 98.979 98.563 96 256H0l144 144 144-144h-96c2.563-73.813 47.875-160 128-160 83.953 0 157.026 92.986 160.006 189.033C483.076 384 432 400 448 416s64-64 64-160C512 155.76 448 0 320 0z\"/></svg>",
		"dashboard-save": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M384 0H128C64 0 0 64 0 128v256c0 64 64 127.999 128 127.999h64c64 .001 96-64 96-127.999v-96.001h96L256 160 128 287.999h96S224.343 320 224 352c-.244 22.714-6.629 64.499-64 64.499-16 0 7.702 0 0 0-34.157 0-63.455-32.058-64-64.5-.187-11.113-.187-180.885 0-191.999.545-32.443 29.844-64 64-64h192c34.157 0 63.455 31.557 64 64 1.612 95.985 0 351.999 0 351.999h96v-384C512 64 448 0 384 0z\"/></svg>",
		"dashboard": "<svg width=\"768\" height=\"768\" viewbox=\"0 0 768 768\"><path d=\"M432 526.875h239.5v49.5H432zM96 96h240v240H96zM432 96h240v240H432zM432 624.375h239.5v48H432zM432 431.625h239.5v49.5H432zM96 432h240v240H96z\"/></svg>",
		"date-today": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M64 0C28.797 0 0 28.797 0 64v384c0 35.188 28.797 64 64 64h384c35.188 0 64-28.812 64-64V64c0-35.203-28.812-64-64-64h-32v64h-32V0h-64v64h-32V0h-64v64h-32V0h-64v64H96V0H64zm32 160h320v224H96V160z\"/><path d=\"M352 224l-32-32-92.5 99.5L192 256l-32 32 64 64\"/></svg>",
		"delete": "<svg viewbox=\"0 0 19 20\"><path d=\"M6 16h1V8H6zM12 16h1V8h-1zM9 16h1V8H9z\"/><path d=\"M16.901 4H2v13.6C2 18.9 3.093 20 4.583 20h9.735A2.71 2.71 0 0 0 17 17.5V4h-.099M15 6v11.4c0 .3-.297.6-.694.6H4.594c-.297 0-.595-.2-.595-.4V6h11M7 0v2H0v1h19V2h-7V0z\"/></svg>",
		"details": "<svg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\"><path d=\"M18.536 19.535a.997.997 0 0 1-.707-.293l-5.04-5.04a.999.999 0 1 1 1.414-1.414l5.04 5.03a.999.999 0 0 1-.707 1.707\"/><path d=\"M8 2C4.691 2 2 4.691 2 8s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6m0 14c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8\"/><path d=\"M9 7V5.99a1 1 0 0 0-2 0V7H5.99a1 1 0 0 0 0 2H7v1.01a1 1 0 0 0 2 0V9h1.01a1 1 0 0 0 0-2H9\"/></svg>",
		"domain-google": "<svg viewbox=\"0 0 46 46\"><path d=\"M45.99 23.54c0-1.627-.149-3.191-.426-4.693h-22.05v8.875h12.599c-.543 2.868-2.192 5.298-4.671 6.925v5.757h7.566c4.427-3.994 6.981-9.876 6.981-16.864\" fill=\"#4285f4\"/><path d=\"M23.516 45.962c6.321 0 11.62-2.054 15.493-5.559l-7.566-5.757c-2.096 1.377-4.778 2.19-7.928 2.19-6.097 0-11.258-4.04-13.1-9.459H2.594v5.944c3.852 7.498 11.769 12.64 20.92 12.64\" fill=\"#34a853\"/><path d=\"M10.417 27.378a13.549 13.549 0 0 1-.734-4.359c0-1.512.266-2.983.734-4.359v-5.944H2.596a22.554 22.554 0 0 0 0 20.608l7.821-5.944\" fill=\"#fbbc05\"/><path d=\"M23.516 9.2c3.437 0 6.523 1.158 8.949 3.431L39.18 6.05C35.126 2.348 29.827.074 23.516.074c-9.151 0-17.07 5.141-20.92 12.64l7.821 5.944c1.841-5.423 7-9.459 13.1-9.459\" fill=\"#ea4335\"/></svg>",
		"domain-office365": "<svg width=\"26\" height=\"26\" viewbox=\"0 0 32 32\"><path d=\"M2.518 25.801V6.477L19.808.16l9.396 2.973v26.01l-9.396 2.8-17.29-6.145 17.29 2.057V5.359L8.532 7.96v15.236l-6.01 2.601\"/></svg>",
		"domain-salesforce": "<svg viewbox=\"0 0 28 21\"><path d=\"M21.786 3.461c-.852 0-1.662.184-2.394.513-.842-1.512-2.423-2.531-4.235-2.531a4.792 4.792 0 0 0-3.481 1.507A5.31 5.31 0 0 0 7.436.838c-2.945 0-5.332 2.403-5.332 5.368 0 .76.156 1.481.439 2.135a4.679 4.679 0 0 0-2.291 4.04c0 2.577 2.051 4.666 4.582 4.666a4.5 4.5 0 0 0 .942-.099c.695 1.901 2.507 3.257 4.633 3.257 2.041 0 3.792-1.25 4.544-3.03a4.277 4.277 0 0 0 1.893.439 4.32 4.32 0 0 0 3.776-2.234c.377.077.767.117 1.166.117 3.269 0 5.919-2.694 5.919-6.02 0-3.325-2.65-6.02-5.919-6.02\"/></svg>",
		"download": "<svg viewbox=\"0 0 20 20\"><path d=\"M11 12.3l1.5-1.5c.7-.7 1.5 0 1.5 0s.7.8 0 1.5l-3.3 3.4c-.4.4-1 .4-1.4 0L6 12.2c-.7-.7 0-1.4 0-1.4s.8-.7 1.5 0L9 12.3V1c0-.6.5-1 1-1s1 .5 1 1v11.3\"/><path d=\"M14 7v2h4v9H2V9h4V7H1S0 7 0 8v11c0 1 1 1 1 1h18c1 0 1-1 1-1V8c0-1-1-1-1-1h-5z\"/></svg>",
		"drag-drop": "<svg width=\"96\" height=\"416\" viewbox=\"0 32 96 416\"><path d=\"M0 32h96v96H0V32zm0 160h96v96H0v-96zm0 160h96v96H0v-96z\"/></svg>",
		"dropdown-date": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M64 0C28.797 0 0 28.797 0 64v384c0 35.188 28.797 64 64 64h384c35.188 0 64-28.812 64-64V64c0-35.203-28.812-64-64-64h-32v64h-32V0h-64v64h-32V0h-64v64h-32V0h-64v64H96V0H64zm32 160h320v224H96V160z\"/><path d=\"M128 192h64v64h-64zM224 192h64v64h-64zM320 192h64v64h-64zM128 288h64v64h-64zM224 288h64v64h-64zM320 288h64v64h-64z\"/></svg>",
		"dropdown-time": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 256c0 141.438 114.563 256 256 256 141.438 0 256-114.562 256-256C512 114.563 397.438 0 256 0S0 114.563 0 256zm224 0V96s-.267-32 32-32c32.357 0 32 32 32 32v96c0 32 0 32 31.082 32H384s32 .263 32 32c0 30.77-32 32-32 32H257.938C240.684 288 224 272.467 224 256z\"/></svg>",
		"dulicate": "<svg viewbox=\"0 0 20 20\"><path d=\"M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1\"/><path d=\"M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14\"/></svg>",
		"edit": "<svg viewbox=\"0 0 20 20\"><path d=\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .997H1.999c-.553 0-1-.445-1-1V4\"/><path d=\"M14.5 3.5l-7 7L6 14l3.5-1.5 7-7zM17.848.848a.495.495 0 0 0-.697 0L15.499 2.5l2 2 1.652-1.652a.495.495 0 0 0 0-.697L17.848.848\"/></svg>",
		"email": "<svg viewbox=\"0 0 18 15\"><g fill-rule=\"evenodd\"><path d=\"M2 13h14V2H2v11M1.8 0C.81 0 0 .844 0 1.875v11.251c0 1.031.81 1.875 1.8 1.875h14.4c.99 0 1.8-.844 1.8-1.875V1.875C18 .844 17.189 0 16.2 0H1.8\"/><path d=\"M14.603 6.23a.917.917 0 0 0-1.226-.404L9 8 4.645 5.826a.917.917 0 0 0-1.218.404l.019-.037a.894.894 0 0 0 .393 1.212L9 10l5.191-2.595a.896.896 0 0 0 .393-1.212l.019.037\"/></g></svg>",
		"exclude": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 80c32.001 0 62.005 8.544 87.862 23.47L103.608 344.096C88.598 318.186 80 288.098 80 256c0-97.202 78.798-176 176-176zm0 352c-32.184 0-62.346-8.646-88.303-23.73l240.59-240.54C423.362 193.679 432 223.829 432 256c0 97.202-78.799 176-176 176z\"/></svg>",
		"exit": "<svg viewbox=\"0 0 20 20\"><path d=\"M16.3 11l-1.5 1.5c-.7.7 0 1.5 0 1.5s.8.7 1.5 0l3.4-3.3c.4-.4.4-1 0-1.4L16.2 6c-.7-.7-1.4 0-1.4 0s-.7.8 0 1.5L16.3 9H5c-.6 0-1 .5-1 1s.5 1 1 1h11.3\"/><path d=\"M11 14v4H2V2h9v4h2V.99a.995.995 0 0 0-.999-.991h-11C.45-.001.002.454.002.991v18.02c0 .548.447.992.999.992h11a1 1 0 0 0 .999-.991v-5.01h-2\"/></svg>",
		"expand": "<svg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\"><path d=\"M6.004 18.5V18a.5.5 0 0 0-.5-.5H3.78l4.931-4.931a.404.404 0 0 0 0-.57l-.708-.708a.404.404 0 0 0-.57 0L2.5 16.224V14.5A.5.5 0 0 0 2 14h-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4.004a.5.5 0 0 0 .5-.5zM13.996 18.5V18a.5.5 0 0 1 .5-.5h1.724l-4.931-4.931a.404.404 0 0 1 0-.57l.708-.708a.404.404 0 0 1 .57 0l4.933 4.933V14.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4.004a.5.5 0 0 1-.5-.5zM6.004 1.5V2a.5.5 0 0 1-.5.5H3.78l4.931 4.931a.404.404 0 0 1 0 .57l-.708.708a.404.404 0 0 1-.57 0L2.5 3.776V5.5A.5.5 0 0 1 2 6h-.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h4.004a.5.5 0 0 1 .5.5zM13.996 1.5V2a.5.5 0 0 0 .5.5h1.724l-4.931 4.931a.404.404 0 0 0 0 .57l.708.708a.404.404 0 0 0 .57 0L17.5 3.776V5.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4.004a.5.5 0 0 0-.5.5z\"/></svg>",
		"expend-table-right": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M79.553 415.685l32.313 32 191.581-191.581L111.658 64.315l-32.105 31.37 160 160.315z\"/><path d=\"M208.553 415.685l32.312 32 191.582-191.581L240.658 64.315l-32.105 31.37 160 160.315z\"/></svg>",
		"explorer-expand": "<svg width=\"768\" height=\"768\" viewbox=\"0 0 768 768\"><path d=\"M96 526.875h576v49.5H96zM96 624.375h576v48H96zM96 431.625h576v49.5H96zM557.935 336h93.04l-44.595-44.324zM476 161l-65-65H96v240h220.08z\"/><g><path d=\"M480 96l64 64-184 200 48 48 199.75-184.25L672 288V96z\"/></g></svg>",
		"explorer": "<svg width=\"768\" height=\"768\" viewbox=\"0 0 768 768\"><path d=\"M96 526.875h576v49.5H96zM96 96h576v240H96zM96 624.375h576v48H96zM96 431.625h576v49.5H96z\"/></svg>",
		"export": "<svg viewbox=\"0 0 20 20\"><path d=\"M11 14V3.7l1.5 1.5c.7.7 1.5 0 1.5 0s.7-.8 0-1.5L10.7.3c-.4-.4-1-.4-1.4 0L6 3.8c-.7.7 0 1.4 0 1.4s.8.7 1.5 0L9 3.7V14c0 .6.5 1 1 1s1-.4 1-1\"/><path d=\"M14 10v2h4v6H2v-6h4v-2H1s-1 0-1 1v8c0 1 1 1 1 1h18c1 0 1-1 1-1v-8c0-1-1-1-1-1h-5z\"/></svg>",
		"exportagain": "<svg viewbox=\"0 0 20 20\"><path d=\"M20 9h-2c0 .3.1.7.1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2.2 0 4.1.9 5.6 2.3l.3.4h-2.5c-.9 0-1 1-1 1s.1 1 1 1h4.3c.5 0 .9-.4.9-.9l-.1-4.4c0-.9-.9-.9-.9-.9s-1 .1-1 1v1.2C14.9 1 12.6 0 10 0 4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10V9\"/></svg>",
		"external": "<svg viewbox=\"0 0 20 20\"><path d=\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .998H1.999c-.553 0-1-.445-1-1V4\"/><path d=\"M15.5 3L8.707 9.792a.999.999 0 0 0 0 1.414l.086.086a.999.999 0 0 0 1.414 0L17 4.5v2a1 1 0 0 0 2 0V2.001a1 1 0 0 0-1-1h-4.499a1 1 0 0 0 0 2h2\"/></svg>",
		"filter-add": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M384 118.182c0-48.514-78.798-87.843-176-87.843-97.203 0-176 39.329-176 87.843 0 28.32 32.148 43.663 68.545 69.569C120.201 201.741 159.716 264.094 160 288c.305 25.727 0 96 0 96l96 48s.306-118.273 0-144c-.283-23.869 38.967-85.978 58.978-100.068C351.713 162.068 384 146.608 384 118.182zm-301.715-.158c0-27.771 56.285-50.285 125.714-50.285 69.431 0 125.714 22.514 125.714 50.285 0 27.773-56.283 50.287-125.714 50.287-69.429 0-125.714-22.514-125.714-50.287zM512 352h-64v-64h-64v64h-64v64l64 .188V480h64v-64h64z\"/></svg>",
		"filter": "<svg viewbox=\"0 0 18 18\"><path d=\"M9 1.541c4.976 0 7.101 1.333 7.459 1.712l-.032.046c-.629.649-3.201 1.677-7.427 1.677-4.24 0-6.802-1.024-7.413-1.659l-.046-.065C1.903 2.872 4.028 1.541 9 1.541M3.354 5.81c1.591.456 3.582.705 5.646.705s4.056-.249 5.646-.705l-4.484 6.329-.037.051v4.075c-.912.542-1.78.247-2.25-.004v-4.07L3.354 5.81M18 3.258C18 1.432 14.048.001 9 .001c-5.05 0-9 1.43-9 3.257 0 .167.035.337.104.506L.17 3.9c.042.071.132.222.194.297l6.02 8.496v4.158l.216.195c.106.098 1.072.955 2.47.955.882 0 1.679-.303 2.37-.905l.177-.171v-4.232l6.01-8.486c.067-.083.121-.158.157-.22l.047-.075.062-.145A1.3 1.3 0 0 0 18 3.258\"/></svg>",
		"filter_facet": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 64h96v96H0zM160 64h352v96H160zM0 224h96v96H0zM160 224h352v96H160zM0 384h96v96H0zM160 384h352v96H160z\"/></svg>",
		"fleche-stratus": "<svg viewbox=\"0 0 235.5 369.4\"><g fill=\"#676767\"><path d=\"M42.9 174.7h25.3c1.4 0 2.4-1.1 2.4-2.4v-40.9c0-1.4-1.1-2.4-2.4-2.4H42.9c-1.4 0-2.4 1.1-2.4 2.4v40.9c0 1.3 1.1 2.4 2.4 2.4zM42.9 119.6h25.3c1.4 0 2.4-1.1 2.4-2.4V88.1c0-1.4-1.1-2.4-2.4-2.4H42.9c-1.4 0-2.4 1.1-2.4 2.4v29.1c0 1.3 1.1 2.4 2.4 2.4zM42.9 76.4h25.3c1.4 0 2.4-1.1 2.4-2.4V56.7c0-1.4-1.1-2.4-2.4-2.4H42.9c-1.4 0-2.4 1.1-2.4 2.4V74c0 1.3 1.1 2.4 2.4 2.4zM42.9 45.1h25.3c1.4 0 2.4-1.1 2.4-2.4v-5.4c0-1.4-1.1-2.4-2.4-2.4H42.9c-1.4 0-2.4 1.1-2.4 2.4v5.4c0 1.3 1.1 2.4 2.4 2.4zM194.3 262.4l-68.1-68.1c-1-1-2.5-1-3.5 0L105 212.2c-1 1-1 2.5 0 3.5l33.4 33.4H70.6v-9.6-.2-53c0-1.4-1.1-2.4-2.4-2.4H42.9c-1.4 0-2.4 1.1-2.4 2.4v90.5c0 1.4 1.1 2.4 2.4 2.4h95.4L105 312.6c-1 1-1 2.5 0 3.5l17.9 17.9c.5.5 1.1.7 1.7.7.6 0 1.3-.2 1.7-.7l68.1-68.1c.5-.5.7-1.1.7-1.7s-.3-1.3-.8-1.8z\"/></g></svg>",
		"folder-close": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M160 64c-20.014 0-65.066-.545-96 0-16 .282-32 16-32 32v320c0 16 16 32 32 32h384c16 0 32-16 32-32V160c0-16-16-32-32-32H256c-32 0-32-64-96-64z\"/></svg>",
		"folder-lock": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M480 371.454V304c0-19.186-16-48.122-48-48.121s-48 27.06-48 48.121v67.864l-32-.394V512h160V371.473l-32-.019zm-64 .017V320s-3.949-32 16-32c20.305 0 16 32 16 32v51.471h-32z\"/><path d=\"M320 336h32v-32c0-40.373 36.083-80.233 80.244-80.233 8.516 0 29.271 3.733 47.89 16.059 0-10.796-.134-51.856-.134-79.826 0-16-16-32-32-32H256c-32 0-32-64-96-64-20.014 0-65.066-.545-96 0-16 .282-32 16-32 32v320c0 16 16 32 32 32h256V336z\"/></svg>",
		"folder-open": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M480 160c0-16-16-32-32-32H256c-32 0-32-64-96-64-20.014 0-65.066-.545-96 0-16 .282-32 16-32 32v96h448v-32zM480 224H32c-16 0-32 16-32 32 0 22.932 32 160 32 160 3.4 16 16 32 32 32h384c16 0 28.6-16 32-32 0 0 32-137.068 32-160 0-16-16-32-32-32z\"/></svg>",
		"fullview": "<svg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\"><path d=\"M2.714 2.71h6.17c.456-.002.8-.254.894-.65.134-.566-.272-1.06-.88-1.06h-6.96c-.588 0-.937.342-.937.93v16.138c0 .59.346.932.934.932h16.14c.098 0 .2-.007.295-.033.41-.113.63-.436.63-.928v-6.66c0-.087-.005-.174-.018-.26a.836.836 0 0 0-.685-.69c-.553-.09-1 .3-1.002.885-.002 1.907 0 3.813 0 5.72v.248H2.715V2.71zm13.432-.068c.013.02.027.04.04.062-.056.04-.12.075-.168.123l-6.66 6.664c-.054.055-.11.107-.16.167-.196.242-.252.516-.142.81.11.29.323.468.634.52.32.055.566-.08.787-.3 2.232-2.236 4.466-4.47 6.7-6.705.05-.05.103-.098.186-.176v.257c0 .896-.002 1.79 0 2.687.002.493.333.85.79.86.474.013.84-.33.84-.828.01-1.65.01-3.3 0-4.95-.002-.498-.35-.828-.843-.83a1339.34 1339.34 0 0 0-4.91 0c-.49 0-.858.364-.853.825.005.455.366.81.846.813.9.006 1.803.002 2.704.002h.21z\"/><path d=\"M2.714 2.71v14.573h14.58v-5.968c.002-.585.45-.976 1.003-.885.35.058.63.34.685.69.013.086.017.173.017.26v6.66c0 .49-.22.814-.63.927a1.141 1.141 0 0 1-.297.032H1.933c-.586 0-.932-.34-.932-.932V1.928c0-.586.35-.927.94-.927h6.958c.608.002 1.014.495.88 1.06-.095.396-.438.648-.895.65h-6.17\"/><path d=\"M16.146 2.642h-.21c-.9 0-1.802.004-2.703-.002-.48-.003-.84-.358-.846-.813-.005-.46.362-.824.852-.825 1.636-.003 3.273-.003 4.91 0 .494.002.84.332.844.83.008 1.65.008 3.3 0 4.95-.002.497-.367.84-.84.83-.458-.013-.79-.37-.79-.862-.003-.896 0-1.79 0-2.687v-.256c-.084.077-.137.125-.188.175l-6.7 6.705c-.22.22-.465.355-.786.3a.778.778 0 0 1-.634-.52c-.11-.294-.054-.568.143-.81.047-.06.104-.112.158-.166l6.66-6.662c.048-.05.112-.083.168-.124-.013-.02-.027-.04-.04-.062\"/></svg>",
		"help": "<svg viewbox=\"-948 530 22 22\"><path d=\"M-937 532c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9\" fill=\"#f7f8f9\"/><path d=\"M-937 532c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 20c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11\"/><path d=\"M-937 534.7c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5 0-2.3-1.8-4-4-4m-1 12.3h2v-2h-2v2\"/></svg>",
		"history": "<svg viewbox=\"0 0 20 20\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M0 10c0 5.52 4.466 10 9.989 10 5.53 0 10.01-4.478 10.01-10 0-5.52-4.478-10-10.01-10C4.469 0 0 4.478 0 10m10.04-8c4.44 0 8.05 3.589 8.05 8s-3.612 8-8.05 8c-4.428 0-8.03-3.589-8.03-8s3.603-8 8.03-8\"/><path d=\"M9 5.991C9 5.451 9.45 5 10.01 5c.559 0 1 .444 1 .991l-.009 4.596 2.742 2.742a.994.994 0 0 1-.005 1.409.997.997 0 0 1-1.409.005L9 11.414V5.991\"/></g></svg>",
		"index": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256 160c123.758 0 224-35.89 224-79.994C480 35.891 379.758 0 256 0S32 35.891 32 80.006C32 124.11 132.242 160 256 160z\"/><path d=\"M256 192c-123.758 0-224-37.972-224-82.076v77.645C32 231.673 132.242 272 256 272s224-40.327 224-84.431v-77.645C480 154.028 379.758 192 256 192zM256 416c-123.758 0-224-38.73-224-82.836v97.66C32 474.928 132.242 512 256 512s224-37.072 224-81.176v-97.66C480 377.27 379.758 416 256 416z\"/><path d=\"M256 304.502c-123.758 0-224-37.972-224-82.076v77.645c0 44.104 100.242 84.432 224 84.432s224-40.327 224-84.432v-77.645c0 44.104-100.242 82.076-224 82.076z\"/></svg>",
		"interface-editor": "<svg viewbox=\"0 0 20 20\"><path d=\"M19.976 14.204a.459.459 0 0 0-.254-.276l-9.08-3.893a.455.455 0 0 0-.179-.037l-.002.003a.459.459 0 0 0-.424.64l3.893 9.08a.458.458 0 0 0 .857-.036l1.225-3.675 3.675-1.225a.459.459 0 0 0 .289-.581M1 1v8h8V1H1m6 6H3V3h4v4M2 18h6v-6H2v6m2-4h2v2H4v-2M12 8h6V2h-6v6m2-4h2v2h-2V4\"/><g fill=\"#bcc3ca\"><path d=\"M4 9h2v3H4zM9 4h3v2H9z\"/></g></svg>",
		"label-value": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M64 0v512h384V0H64zm128 448h-64v-64h64v64zm0-96h-64v-64h64v64zm0-96h-64v-64h64v64zm96 192h-64v-64h64v64zm0-96h-64v-64h64v64zm0-96h-64v-64h64v64zm96 192h-64v-64h64v64zm0-96h-64v-64h64v64zm0-96h-64v-64h64v64zm0-128.5H128V64h256v63.5z\"/></svg>",
		"limi-size_storage": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 320v128c0 38.111 26.167 64 64 64h384c37.833 0 64-25.889 64-64V320H0zm384 96c0-16 16-32 32-32s32 16 32 32-16 32-31.986 32C400 448 384 432 384 416zM416 0H96L0 288h512L416 0z\"/></svg>",
		"limit-document": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M288 0H64v512h384V160H288z\"/><path d=\"M320 0v128h128z\"/></svg>",
		"limit-size_data": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256 160c123.758 0 224-35.89 224-79.994C480 35.891 379.758 0 256 0S32 35.891 32 80.006C32 124.11 132.242 160 256 160z\"/><path d=\"M256 192c-123.758 0-224-37.972-224-82.076v77.645C32 231.673 132.242 272 256 272s224-40.327 224-84.431v-77.645C480 154.028 379.758 192 256 192zM256 416c-123.758 0-224-38.73-224-82.836v97.66C32 474.928 132.242 512 256 512s224-37.072 224-81.176v-97.66C480 377.27 379.758 416 256 416z\"/><path d=\"M256 304.502c-123.758 0-224-37.972-224-82.076v77.645c0 44.104 100.242 84.432 224 84.432s224-40.327 224-84.432v-77.645c0 44.104-100.242 82.076-224 82.076z\"/></svg>",
		"limit-size_file": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M384 0v95.911l96 .179zM64.479 63.972l-31.965-.09.018 447.866 382.465.179v-31.911l-350.5-.089z\"/><path d=\"M352.83-.081L160-.161 160.34 384H481V128l-127.83.081z\"/><path d=\"M128 32H96v416h351.5v-32H128z\"/></svg>",
		"limit-source": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M454.863 136.244l-88.935 88.932-79.108-79.11 88.932-88.932c13.973-13.973 17.322-33.232 3.377-47.206-13.975-13.945-33.26-10.597-47.205 3.349l-88.933 88.932-41.396-41.396c-11.067-11.039-28.944-11.039-39.956 0-10.708 10.682-11.012 27.837-.912 38.905-6.062 5.866-17.129 16.795-19.646 19.314-73.685 73.688-93.278 177.256-52.657 248.977l-75.928 75.984c-15.329 15.328-15.329 40.176 0 55.506 15.332 15.354 40.177 15.328 55.535 0l75.956-75.955c71.72 40.646 175.29 21.057 248.975-52.603 2.521-2.545 13.449-13.612 19.316-19.646 11.066 10.045 28.223 9.769 38.9-.938 11.068-11.015 11.068-28.89 0-39.93l-41.395-41.423 88.932-88.932c13.947-13.945 17.295-33.231 3.352-47.205-13.971-13.944-33.233-10.597-47.204 3.377z\"/></svg>",
		"limit-user": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M261.876.075c.124.014.362.041.752.083l-.752-.083z\"/><path d=\"M480 416c-34.648-31.232-163.331-36.213-160-96 3.335-59.791 19.857-70.926 32-96 1.972-4.071 15.663-28.245 10.249-40.952-12.085-28.127-2.001-54.251 4.999-85.376 5.208-23.042-13.334-44.125-13.334-44.125s-32.662-48-91.162-53.375C261.631.048 258.812-.004 256 0c-2.813-.005-5.631.047-6.752.171-58.5 5.375-91.162 53.375-91.162 53.375s-18.542 21.083-13.334 44.125c7 31.125 17.084 57.249 4.999 85.376-5.414 12.708 8.277 36.882 10.249 40.953 12.143 25.074 28.665 36.209 32 96 3.331 59.787-125.352 64.768-160 96-18.79 16.938-32 96-32 96h512s-13.21-79.062-32-96zM249.372.158l.752-.083-.752.083z\"/></svg>",
		"lock": "<svg viewbox=\"0 0 12 14\"><path d=\"M9.992 5H2.009c-1.107 0-2.01.894-2.01 1.997v5.01c0 1.101.899 1.997 2.01 1.997h7.983c1.107 0 2.01-.894 2.01-1.997v-5.01c0-1.101-.9-1.997-2.01-1.997m-.001 1.5c.28 0 .509.223.509.497v5.01a.504.504 0 0 1-.509.497H2.008a.503.503 0 0 1-.508-.497v-5.01c0-.274.228-.497.508-.497h7.983M10 5H8.4V3.938c0-1.3-1.076-2.359-2.4-2.359-1.324 0-2.4 1.059-2.4 2.359V5H2V3.938C2 1.767 3.794 0 6 0s4 1.767 4 3.938V5\"/></svg>",
		"logo": "<svg width=\"100\" height=\"37\" viewbox=\"0 0 100 37\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M90.96 18.577c-4.97 0-8.877 3.933-8.877 9.073 0 5.137 3.907 9.072 8.877 9.072 4.975 0 8.882-3.928 8.882-9.072 0-5.14-3.907-9.073-8.882-9.073zm0 15.012c-3.16 0-5.684-2.728-5.684-5.939 0-3.247 2.523-5.94 5.684-5.94 3.165 0 5.684 2.693 5.684 5.94 0 3.21-2.519 5.939-5.684 5.939zM69.508 18.578c-5.364 0-8.097 3.932-8.097 9.178 0 5.03 3.086 8.966 8.167 8.966 3.233 0 6.142-1.714 7.708-4.665l-2.7-1.569c-1.207 2.042-2.522 3.319-4.975 3.319-3.053 0-4.977-2.728-5.006-5.651l12.686.002v-.507c0-5.065-2.49-9.073-7.783-9.073zm-4.734 7.104c.397-2.45 2.245-4.26 4.729-4.26 2.562 0 4.197 1.707 4.583 4.26h-9.312zM49.01 29.724l-4.76-10.637h-3.585l8.346 17.635 8.382-17.641h-3.588L49.01 29.724zM27.982 18.577c-4.973 0-8.877 3.933-8.877 9.073 0 5.137 3.904 9.072 8.877 9.072 4.972 0 8.882-3.928 8.882-9.072 0-5.14-3.912-9.073-8.882-9.073zm0 15.012c-3.16 0-5.686-2.728-5.686-5.939 0-3.247 2.525-5.94 5.686-5.94 3.163 0 5.68 2.693 5.68 5.94 0 3.21-2.517 5.939-5.68 5.939zM.098 27.759c0 5.106 4.013 8.965 8.916 8.965 1.67 0 3.127-.33 4.581-1.133v-4.186c-1.205 1.377-2.699 2.252-4.545 2.252-3.376 0-5.754-2.548-5.754-6.048 0-3.135 2.415-5.97 5.539-5.97 1.919 0 3.482.798 4.76 2.29v-4.22c-1.278-.766-2.914-1.13-4.402-1.13-5.119 0-9.095 3.901-9.095 9.18z\" fill=\"#FFF\"/><path d=\"M76.22 8.295L62.434.043v16.268l13.788-8.016z\" fill=\"#F58025\"/></g></svg>",
		"logout": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 0v384l256 130.172V416h96V256h-32v128h-64V145.815L64 32h256v96h32V0z\"/><path d=\"M288 160v64h128v64l96-96-96-96v64z\"/></svg>",
		"logs": "<svg viewbox=\"0 0 20 20\"><path d=\"M2 19V1c0-.607.399-1 1-1h14c.603 0 1 .395 1 1v18c0 .605-.399.998-1 1H3c-.603 0-1-.393-1-1m2-1V2h12v16\"/><path d=\"M11 15a.75.75 0 0 1 0-1.061L12.939 12 11 10.061A.75.75 0 1 1 12.061 9l3 3-3 3A.75.75 0 0 1 11 15M7.939 11l-3-3 3-3A.75.75 0 1 1 9 6.061L7.061 8 9 9.939A.75.75 0 1 1 7.939 11\"/></svg>",
		"maintenance": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M351.999 220c-15.557-.059-42.497-28.517-44-44-1.921-19.789 66.136-87.901 66.136-87.901s-33.386-.441-43.947.327C279.988 93.228 241.5 135.543 241.5 187c0 10.302.25 21.97.699 33 0 0-132.51 144.089-132.2 154 .486 15.549 28.468 44.873 44 44 9.899-.557 154.146-131.889 154.146-131.889 9.91-.096 22.595-.111 32.355-.111 50.852 0 93.887-38.496 99.499-87.847.333-8.73.147-44.324.147-44.324S371.77 220.075 351.999 220zM43.999 22l121 121.596V22z\"/><path d=\"M263.999 0h-2.527c-10.854 0-19.653 9.736-19.653 21.748 0 12.011 8.799 21.747 19.653 21.747l2.779.002c121.643 0 220.252 98.61 220.252 220.251S385.894 484 264.251 484c-121.642 0-220.252-98.609-220.252-220.252 0-74.459 36.957-140.274 93.521-180.137V46.443l-13.02-6.597C49.75 86.465-.001 169.416-.001 264c0 145.803 118.197 264 264 264s264-118.197 264-264-118.197-264-264-264z\"/></svg>",
		"mapping-extraction-literal": "<svg viewbox=\"0 0 16 16\"><path fill=\"#565871\" d=\"M16 14.3V1.7c0-.9-.4-1.7-1.4-1.7h-3.1L3.7 16h10.6c.9 0 1.7-.8 1.7-1.7z\"/><path fill=\"#626882\" d=\"M1.7 0C.8 0 0 .8 0 1.7v12.6c0 .9.8 1.7 1.7 1.7h3.9l7.8-16H1.7z\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFF\" d=\"M5.6 5.1L4.8 7h1.6l-.8-1.9zM7 9l-.3-1H4.6l-.4 1H3l2-5h1.3l1.9 5H7zM12 7.5c0-.3-.2-.5-.6-.5H10v1h1.4c.4 0 .6-.1.6-.5zm0-2c0-.3-.2-.5-.6-.5H10v1h1.3c.4 0 .7-.2.7-.5zM9 9V4h2.6c1 0 1.4.3 1.4 1 0 .6-.3.9-.8 1 .5.1 1 .6.9 1.5 0 .8-.2 1.5-1.1 1.5H9z\"/><path clip-rule=\"evenodd\" fill=\"none\" stroke=\"#FFF\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M3.5 10.5h6.2M3.5 12.5h8.3\"/></svg>",
		"mapping-extraction-metadata": "<svg width=\"16\" height=\"16\" fill=\"#B2AC87\" viewbox=\"0 0 16 16\"><rect width=\"16\" height=\"16\" rx=\"3\"/><g fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#FFF\" mask=\"url(#mask-2)\" x=\"2\" y=\"3\" width=\"2\" height=\"2\" rx=\"1\"/><rect fill=\"#FFF\" mask=\"url(#mask-2)\" x=\"2\" y=\"9\" width=\"2\" height=\"2\" rx=\"1\"/><rect fill=\"#FFF\" mask=\"url(#mask-2)\" x=\"9\" y=\"11\" width=\"2\" height=\"2\" rx=\"1\"/><rect fill=\"#FFF\" mask=\"url(#mask-2)\" x=\"12\" y=\"7\" width=\"2\" height=\"2\" rx=\"1\"/><rect fill=\"#FFF\" mask=\"url(#mask-2)\" x=\"11\" y=\"3\" width=\"2\" height=\"2\" rx=\"1\"/><circle fill=\"#FFF\" cx=\"7.5\" cy=\"7.5\" r=\"2.5\"/><path d=\"M7.434 7.79l2.687 5.261M7.777 7.619l5.26.286M7.663 7.333l4.46-3.374M7.491 7.619L2.973 3.902M7.72 7.333L3.088 10.02\" stroke=\"#FFF\"/><path d=\"M15.192 0C14.757.589 7.03 12.493 5 15.715h9.06a2.998 2.998 0 0 0 3.003-3.01V2.663c0-1.103-.848-2.3-1.87-2.662z\" opacity=\".16\" fill=\"#000\"/></g></svg>",
		"mapping-extraction-script": "<svg width=\"16\" height=\"16\" fill=\"#82617F\" viewbox=\"0 0 16 16\"><rect width=\"16\" height=\"16\" rx=\"3\"/><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M8.116 11.629v-1.382l3.428-1.348-3.428-1.333V6.194l4.912 2.124V9.49l-4.912 2.139zM2.734 12.156l3.703-8.281h1.281L4.03 12.156H2.734z\" fill=\"#FFF\"/><path d=\"M14.14.006C13.705.595 6.03 12.464 4 15.686h9.06a2.999 2.999 0 0 0 3.003-3.009v-9.98c0-1.663-1.325-2.79-1.923-2.69z\" opacity=\".16\" fill=\"#000\"/></g></svg>",
		"menu-analytics": "<svg viewbox=\"0 0 16 16\"><path d=\"M14.5 9.331l-.894-.894-1.267 1.269-4.159-4.16-2.888 2.887-1.768-1.768L1.5 8.69V1.994c0-.272.222-.494.494-.494h12.01c.272 0 .494.222.494.494v7.337m0 4.675a.495.495 0 0 1-.494.494H1.994a.495.495 0 0 1-.494-.494v-3.902l2.024-2.025 1.768 1.768L8.18 6.96l4.159 4.16 1.267-1.268.894.893v3.261m-.494-14.01H1.996A1.996 1.996 0 0 0 .002 1.99V14c0 1.099.893 1.994 1.994 1.994h12.01A1.995 1.995 0 0 0 16 14V1.99a1.995 1.995 0 0 0-1.994-1.993\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
		"menu-content": "<svg viewbox=\"0 0 16 16\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M1.5 2.998h13v1.995h-13V2.998M13-.001H3L0 1.998v3.5c0 .551.453.998 1 .998v8.503c0 .421.524 1 1 1h12c.476 0 1-.579 1-1V6.496a1 1 0 0 0 1-.998v-3.5L13-.001M2.5 14.493h11V6.496h-11v7.997m.193-12.494l.754-.501h9.12l.755.501H2.693\"/><path d=\"M9.802 12H6.198A1.2 1.2 0 0 1 5 10.801v-.602A1.2 1.2 0 0 1 6.198 9h3.604A1.2 1.2 0 0 1 11 10.199v.602A1.2 1.2 0 0 1 9.802 12m-3.516-1.999V11h3.428l-.001-.999H6.286\"/></g></svg>",
		"menu-infrastructure": "<svg viewbox=\"0 0 16 15\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M0 14.744c0 .141.102.256.251.256h15.497a.253.253 0 0 0 .251-.256v-2.488a.247.247 0 0 0-.251-.256H.251a.253.253 0 0 0-.251.256v2.488M1 14h14v-1H1v1M0 10.744c0 .141.102.256.251.256h15.497a.253.253 0 0 0 .251-.256V8.256A.247.247 0 0 0 15.748 8H.251A.253.253 0 0 0 0 8.256v2.488M13 10h2V9h-2v1M1 10h11V9H1v1M0 6.744C0 6.885.102 7 .251 7h15.497a.253.253 0 0 0 .251-.256V4.256A.247.247 0 0 0 15.748 4H.251A.253.253 0 0 0 0 4.256v2.488M13 5h2v1h-2V5M1 6h11V5H1v1M3.341 0a1.43 1.43 0 0 0-.852.344L.105 2.656c-.196.19-.122.344.139.344h15.512c.273 0 .327-.161.139-.344L13.51.344A1.39 1.39 0 0 0 12.658 0H3.341m-.07 1h9.458l1.031 1H2.24l1.031-1\"/></g></svg>",
		"menu-lock": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M416 192h-32V96c0-33.941-32-96-128-96S128.393 62.062 128 96c-.37 32 0 96 0 96H96c-11.313 0-32 0-32 32v256c0 32 20.686 32 32 32h320c11.314 0 32 0 32-32V224c0-32-20.686-32-32-32zm-224-64c0-22.627 16.359-64 64-64 49.427 0 64 41.373 64 64v64H192v-64z\"/></svg>",
		"menu-optimization": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M32 0v96c-17.594 0-32 14.406-32 32v32c0 17.594 14.406 32 32 32v320h64V192c17.594 0 32-14.406 32-32v-32c0-17.594-14.406-32-32-32V0H32zm192 0v320c-17.594 0-32 14.406-32 32v32c0 17.594 14.406 32 32 32v96h64v-96c17.594 0 32-14.406 32-32v-32c0-17.594-14.406-32-32-32V0h-64zm192 0v160c-17.594 0-32 14.406-32 32v32c0 17.594 14.406 32 32 32v256h64V256c17.594 0 32-14.406 32-32v-32c0-17.594-14.406-32-32-32V0h-64z\"/></svg>",
		"menu-organization": "<svg viewbox=\"0 0 16 16\"><path d=\"M14.504 8.995h-4.501A1 1 0 0 0 8.993 8H7.011a.998.998 0 0 0-1.01.995H1.5V4.5h13.004v4.495m0 5.505H1.502V9.995h4.5v.006c0 .556.452.999 1.01.999h1.982a1 1 0 0 0 1.01-.999v-.006h4.5V14.5M5.991 1h4.02a1 1 0 0 1 .991 1v1h-6V2H5c0-.556.444-1 .991-1m9.01 2h-2.998V2c0-1.103-.893-2-1.991-2h-4.02a1.998 1.998 0 0 0-1.991 2v1h-3c-.552 0-1 .529-1 1.182v10.636c0 .653.448 1.182 1 1.182h14c.552 0 1-.529 1-1.182V4.182c0-.653-.448-1.182-1-1.182\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
		"menu-permissions": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M323.779 67.112l.126-.011-.126.011zM323.497 67.139l.282-.026-.282.026zM323.905 67.101c.012-.001.012-.001 0 0zM323.288 67.158l.035-.003-.035.003zM323.475 67.141l.022-.002-.022.002zM323.323 67.155l.149-.014-.149.014z\"/><path d=\"M367.116 285.354c2.147-40.731 21.858-48.284 23.274-62.622.314-3.067 9.646-22.281 6.137-30.932-7.813-19.162-1.312-36.986 3.25-58.219 3.382-15.675-8.65-30.04-8.65-30.04S370 70.828 332.043 67.158c-1.468-.157-7.34-.131-8.755 0-37.904 3.67-59.058 36.384-59.058 36.384s-12.034 14.365-8.68 30.04c4.562 21.232 11.062 39.057 3.251 58.219-3.513 8.65 5.819 27.864 6.136 30.932 1.439 14.338 21.151 21.888 23.304 62.623 1.421 26.936-48.295 47.929-82.152 59.063-15.595-8.56-28.023-19.28-27.392-31.567 1.625-32.164 16.724-38.114 17.825-49.438.21-2.411 7.366-17.589 4.666-24.403-5.977-15.151-.996-29.202 2.49-45.978 2.595-12.373-6.632-23.697-6.632-23.697s-16.147-25.846-45.139-28.729c-1.152-.105-5.66-.105-6.709 0-28.992 2.883-45.191 28.729-45.191 28.729s-9.018 11.298-6.606 23.697c3.277 16.881 8.44 30.826 2.464 45.978-2.673 6.814 4.457 21.992 4.719 24.403 1.075 11.324 16.147 17.273 17.798 49.438 1.651 32.162-86.162 53.604-86.162 53.604V416H480l-.221-62.754s-114.813-27.156-112.663-67.892zM332.043 67.158l-.04-.004.04.004z\"/><path d=\"M331.416 67.091c-.027-.003-.03-.003 0 0zM332.003 67.154l-.08-.008.08.008zM331.923 67.146l-.507-.055.507.055zM151.54 140.572l.369.034-.369-.034zM151.54 140.572c-.211-.019-.141-.012 0 0zM145.198 140.606l.345-.035-.345.035zM145.543 140.571c.12-.011.173-.017 0 0z\"/></svg>",
		"menu": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M447.932 80c0-16 0-16.275-16-16.275H78.528c-16 0-16 .275-16 16.275v64c-.005 16-.005 16 16 16h353.403c16.005 0 16.005 0 16-16l.001-64zM447.932 240.3c0-16 0-16.275-16-16.275H78.528c-16 0-16 .275-16 16.275v64c-.005 16-.005 16 16 16h353.403c16.005 0 16.005 0 16-16l.001-64zM447.932 400.3c0-16 0-16.274-16-16.274H78.528c-16 0-16 .274-16 16.274v64c-.005 16-.005 16 16 16h353.403c16.005 0 16.005 0 16-16l.001-64z\"/></svg>",
		"message-alert": "<svg viewbox=\"0 0 512 512\" fill=\"#fff\"><circle fill=\"currentColor\" cx=\"256\" cy=\"256\" r=\"246\"/><path d=\"M224 95h65v193h-65zM224 350h63v67h-63z\"/></svg>",
		"message-authentification": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M416 192h-32V96c0-33.941-32-96-128-96S128.393 62.062 128 96c-.37 32 0 96 0 96H96c-11.313 0-32 0-32 32v256c0 32 20.686 32 32 32h320c11.314 0 32 0 32-32V224c0-32-20.686-32-32-32zM288 360.489V448s-63.701 2.109-64-32.402c-.068-7.91 0-15.598 0-31.643 0-8.939 32-15.955 32-15.955-35.346 0-64-25.072-64-56s28.654-56 64-56c35.348 0 64 25.072 64 56 0 20.725-12.876 38.807-32 48.489zM320 192H192v-64c0-22.627 16.36-64 64-64 49.427 0 64 41.373 64 64v64z\"/></svg>",
		"message-error": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256s114.615 256 256 256 256-114.615 256-256zm-384.004 96L208 256l-80.483-96 47.507-48.973L258.25 208l77.754-96 47.999 48L304 256l80 96.004-48 47.999L258.25 304 176 400.003 127.996 352z\"/></svg>",
		"minus": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M64 208h384v96H64z\"/></svg>",
		"more": "<svg width=\"20\" height=\"20\" viewbox=\"0 0 20 20\"><ellipse ry=\".7\" rx=\".7\" cy=\"10\" cx=\"6.4\"/><path d=\"M6.4 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.1.6 1.1 1.2-.5 1.2-1.1 1.2zm0-1.4c-.1 0-.2.1-.2.2 0 .2.4.2.4 0-.1-.1-.1-.2-.2-.2z\"/><ellipse ry=\".7\" rx=\".7\" cy=\"10\" cx=\"10\"/><path d=\"M10 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm0-1.4c-.1 0-.2.1-.2.2 0 .2.4.2.4 0 0-.1-.1-.2-.2-.2z\"/><g><ellipse ry=\".7\" rx=\".7\" cy=\"10\" cx=\"13.6\"/><path d=\"M13.6 11.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm0-1.4c-.1 0-.2.1-.2.2 0 .2.4.2.4 0 0-.1-.1-.2-.2-.2z\"/></g><path d=\"M10 17.2c-4 0-7.2-3.2-7.2-7.2S6 2.8 10 2.8 17.2 6 17.2 10 14 17.2 10 17.2zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z\"/></svg>",
		"move-new-file": "<svg viewbox=\"0 0 19 20\"><path d=\"M8.3 11L6.8 9.5C6 8.8 6.7 8 6.7 8s.8-.7 1.5 0l3.5 3.2c.4.4.4 1 0 1.4L8.3 16c-.7.7-1.4 0-1.4 0s-.7-.8 0-1.5L8.3 13H1c-.5 0-.9-.5-1-1 .1-.5.5-.8 1-1h7.3\"/><path d=\"M19 6.5L12.5 0H3v9h2V2h6v6h6v10H5v-3H3v5h16V6.5zM12 7V2l5 5h-5z\"/></svg>",
		"movetonewfile": "<svg viewbox=\"0 0 19 20\"><path d=\"M8.3 11L6.8 9.5C6 8.8 6.7 8 6.7 8s.8-.7 1.5 0l3.5 3.2c.4.4.4 1 0 1.4L8.3 16c-.7.7-1.4 0-1.4 0s-.7-.8 0-1.5L8.3 13H1c-.5 0-.9-.5-1-1 .1-.5.5-.8 1-1h7.3\"/><path d=\"M19 6.5L12.5 0H3v9h2V2h6v6h6v10H5v-3H3v5h16V6.5zM12 7V2l5 5h-5z\"/></svg>",
		"no-content": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M447.75 448h.25v-.25zM38.556 233.619c-61.319-12.325-39.149 48.664-4.705 48.258-58.575 49.335 38.952 96.609 56.868-8.633 17.916-105.236-75.74-107.23-52.163-39.625zM373.06 129.039c100.526 35.917 118.753-55.967 48.08-44.487 22.786-58.25-41.123-47.008-46.707-13.015-38.413-66.251-101.906 21.583-1.373 57.502zM511.715 235.008l-383.78-192.91v427.805L474.4 297.305c-54.7-9.087-109.244 4.26-175.59 24.066-.728.216.733-21.797 0-21.576 72.309-68.299 175.692-73.046 212.905-64.787zm-234.195 3.123c-17.443 3.709-35.519-9.41-38.495-25.3-2.979-15.888 7.843-33.848 25.284-37.558 17.447-3.707 34.901 8.244 37.883 24.137 2.974 15.887-7.23 35.016-24.672 38.721z\"/></svg>",
		"note-no": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M352 32H32v448h448V160H352z\"/><path d=\"M384 32v96h96z\"/></svg>",
		"note-yes": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M384 32v96h96z\"/><path d=\"M352 160V32H32v448h448V160H352zm-256 0h192v32H96v-32zm0 64h320v32H96v-32zm0 64h320v32H96v-32zm320 96H96v-32h320v32z\"/></svg>",
		"notification": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M255.83 512c35.527 0 64.33-28.802 64.33-64.33H191.5c0 35.528 28.801 64.33 64.33 64.33zM384 224v-64C384 71.703 344.676 0 256.377 0l-.207.001h-.34L255.623 0C167.325 0 128 71.703 128 160v64c0 72.5-96 96-96 160 0 16 159.779 33.998 223.83 32h.34C320.221 417.998 480 397.998 480 381.998c0-64-96-85.498-96-157.998z\"/></svg>",
		"open": "<svg viewbox=\"0 0 16 16\"><g fill-rule=\"evenodd\"><path d=\"M8.641 8.158c-.505-.229-.717-.019-.466.482l3.454 6.895c.248.495.546.461.666-.074l.575-2.583 2.607-.867c.527-.175.546-.503.039-.733L8.641 8.159\"/><rect x=\"4\" y=\"12\" width=\"3\" height=\"2\" rx=\"1\"/><rect x=\"8\" y=\"1\" width=\"3\" height=\"2\" rx=\"1\"/><rect x=\"4\" y=\"1\" width=\"3\" height=\"2\" rx=\"1\"/><rect x=\"1\" y=\"8\" width=\"2\" height=\"3\" rx=\"1\"/><rect x=\"1\" y=\"4\" width=\"2\" height=\"3\" rx=\"1\"/><rect x=\"12\" y=\"4\" width=\"2\" height=\"3\" rx=\"1\"/><rect width=\"3\" height=\"3\" rx=\"1\"/><rect y=\"12\" width=\"3\" height=\"3\" rx=\"1\"/><rect x=\"12\" width=\"3\" height=\"3\" rx=\"1\"/></g></svg>",
		"people": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M448 336.99c-30.834-13.916-76.625-49.562-144.5-61.917 17.396-18.646 30.583-47.833 44.166-82.375 7.917-20.021 6.604-37.125 6.667-61.458.042-18 3.521-46.812-.896-62.646-.354-1.312-.771-2.49-1.188-3.729C336.75 14.657 300 .292 257.021.063c-.229 0-.418-.031-.646-.031C212-.093 174.083 14.688 159 68.303c-4.438 15.792-1.125 44.583-1.146 62.479-.062 24.364-1.438 41.542 6.375 61.625 13.562 34.802 26.458 63.979 43.708 82.625-67.396 12.271-113.062 47.438-143.771 61.083C.542 364.471 0 395.615 0 395.615v84.416h512V512 396.865s-.229-31.291-64-59.875z\"/></svg>",
		"pin": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M352 224V96l32-32h32V0H96v64h32l32 32v128L64 352h160v96l64 64V352h160z\"/></svg>",
		"play": "<svg viewbox=\"-287 410.9 20 20\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-277 428.9c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-18c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-2 14.5l6-4.5-6-4.5v9z\"/></svg>",
		"rectangle": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M43 43h426v426H43z\"/></svg>",
		"refresh": "<svg viewbox=\"0 0 20 20\"><path d=\"M8 13.899c0 .548.351.729.8.392l5.314-3.985c.225-.169.234-.437 0-.612L8.8 5.709c-.442-.331-.8-.154-.8.392v7.798\"/><path d=\"M0 10c0 5.52 4.466 10 9.989 10 5.53 0 10.01-4.478 10.01-10 0-5.52-4.478-10-10.01-10C4.469 0 0 4.478 0 10m9.989-8c4.417 0 8.01 3.589 8.01 8s-3.593 8-8.01 8C5.584 18 2 14.411 2 10s3.584-8 7.989-8\"/></svg>",
		"remove": "<svg viewbox=\"0 0 18 18\"><path d=\"M13 10H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2\"/><path d=\"M8.991 0C4.023 0 0 4.03 0 9c0 4.968 4.02 9 8.991 9 4.977 0 9.01-4.03 9.01-9 0-4.968-4.03-9-9.01-9m0 2c3.865 0 7.01 3.14 7.01 7s-3.144 7-7.01 7C5.136 16 2 12.86 2 9s3.136-7 6.991-7\"/></svg>",
		"salesforce-sans-nuage": "<svg width=\"512\" height=\"115.201\" viewbox=\"0 0 512 115.201\"><path d=\"M24.703 88.692c-6.872 0-16.535-1.319-24.703-7.481L4.391 71.3c3.266 2.524 11.434 6.963 19.478 6.963 4.944 0 11.763-2.312 11.763-6.863 0-2.774-2.228-6.625-13.066-9.006-3.675-.808-20.622-4.451-20.622-18.208 0-9.794 7.044-19.024 22.563-19.024 11.231 0 18.631 4.263 21.847 5.869l-3.881 9.405c-6.531-4.144-13.766-5.263-18.168-5.263-6.841 0-10.11 3.949-10.11 6.988 0 6.675 10.503 7.574 16.95 9.806 9.984 3.307 16.95 8.806 16.95 18.007-.011 9.793-8.361 18.718-23.392 18.718zm56.254-.206c-14.888 0-26.95-5.052-26.95-19.419 0-13.152 12.062-20.844 26.95-20.844 4.547 0 8.744.162 12.456.712V47.01c0-11.737-13.272-11.487-13.272-11.487-11.435 0-18.172 5.014-18.172 5.014l-4.284-9.713s9.8-5.862 22.253-5.862c26.544 0 25.854 19.625 25.854 19.625v10.317l.003 28.733c-4.42 3.029-13.673 4.849-24.838 4.849zm50.027-1.412h-12.659V1.691h12.659v85.383zm65.21-26.77h-40.366v1.28c0 10.113 7.913 14.832 16.666 16.052 7.769 1.073 18.116-3.238 18.116-3.238l4.082 9.714s-7.078 4.312-20.688 4.312c-26.543 0-32.4-16.726-32.4-32.101 0-18.35 10.072-31.119 29.497-31.119 22.224-.007 27.544 20.325 25.093 35.1zm7.831 20.905l4.391-9.911c3.269 2.524 11.435 6.963 19.479 6.963 4.943 0 11.762-2.312 11.762-6.863 0-2.774-2.231-6.625-13.069-9.006-3.675-.808-20.619-4.451-20.619-18.208 0-9.794 7.044-19.024 22.562-19.024 11.231 0 18.631 4.263 21.85 5.869l-3.881 9.405c-6.538-4.144-13.769-5.263-18.175-5.263-6.837 0-10.106 3.949-10.106 6.988 0 6.674 10.506 7.573 16.95 9.806 9.981 3.307 16.95 8.806 16.95 18.007 0 9.787-8.35 18.711-23.381 18.711-6.875.009-16.544-1.312-24.713-7.474zm92.638-44.299l-13.412-.244-9.862 53.946c-2.994 13.362-6.601 19.338-12.363 22.271-10.26 5.219-22.975 0-22.975 0l4.25-9.9c16.475 5.449 17.731-9.155 18.475-13.112.75-3.955 9.738-53.208 9.738-53.208h-10.238l2.5-10.144h9.738s.524-16.006 9.977-22.399c11.562-7.826 25.485-2.095 25.485-2.095l-4.249 10.144c-9.676-2.469-14.48 1.757-14.48 1.757-3.307 3.713-4.281 13.088-4.281 13.088h14.021l-2.324 9.896zm31.7 51.789c-15.787 0-28.588-10.524-28.588-32.107 0-20.231 12.801-31.856 28.588-31.856 15.788 0 28.588 11.352 28.588 31.856 0 21.85-12.8 32.107-28.588 32.107zm71.051-50.451s-19.638-7.7-19.638 20.769v28.406h-12.471V26.378h12.456v5.818c10.281-10.625 25.102-4.744 25.102-4.744l-5.449 10.796zM434.67 88.56c-15.781 0-29.531-10.387-29.531-31.968 0-21.312 14.15-31.562 29.669-31.562 10.994 0 15.244 2.02 18.244 3.506l-3.538 9.438c-6.263-2.156-10.763-2.138-13.344-2.021-11.844.545-17.331 10.031-17.331 20.694 0 12.22 7.662 20.989 16.106 20.989 8.844 0 10.756-.812 14.831-2.568l3.812 9.175c-3.262 2.43-8.712 4.317-18.918 4.317zm76.781-28.256h-40.362v1.28c0 10.113 7.913 14.832 16.663 16.052 7.77 1.073 18.112-3.238 18.112-3.238l4.087 9.714s-7.081 4.312-20.688 4.312c-26.55 0-32.397-16.726-32.397-32.101 0-18.35 10.075-31.119 29.5-31.119 22.223-.007 27.535 20.325 25.085 35.1zm-25.462-24.219c-13.882 0-14.9 14.236-14.9 14.236h28c-1.087-12.411-9.563-14.236-13.1-14.236zm-157.626.112c-10.89 0-14.875 9.787-14.875 20.45 0 11.375 3.985 21.25 14.875 21.25 11.432 0 15.062-9.729 15.062-21.25.001-10.799-3.63-20.45-15.062-20.45zM67.481 69.067c0 13.148 25.319 7.688 25.319 7.688v-17.4c0-.001-25.319-5.465-25.319 9.712zm103.25-32.982c-13.884 0-14.903 14.236-14.903 14.236h28.003c-1.093-12.411-9.559-14.236-13.1-14.236z\"/></svg>",
		"salesforce": "<svg width=\"512\" height=\"370.305\" viewbox=\"0 0 512 370.305\"><path d=\"M401.609 50.153c-15.889 0-30.984 3.515-44.634 9.815-15.708-28.911-45.193-48.383-78.993-48.383-25.419 0-48.405 11.03-64.917 28.807C194.896 15.842 166.239 0 133.997 0 79.074 0 34.554 45.945 34.554 102.625c0 14.518 2.916 28.313 8.182 40.812C17.188 158.864 0 187.693 0 220.715c0 49.287 38.262 89.217 85.459 89.217 6.02 0 11.9-.643 17.565-1.885 12.964 36.34 46.753 62.259 86.39 62.259 38.062 0 70.721-23.879 84.732-57.958 10.664 5.365 22.658 8.394 35.309 8.394 30.241 0 56.592-17.216 70.427-42.701a105.755 105.755 0 0 0 21.738 2.239c60.96 0 110.38-51.516 110.38-115.047 0-63.566-49.42-115.08-110.391-115.08zM92.521 199.219c-5.166 0-12.433-1.028-18.574-5.862l3.304-7.771c2.456 1.984 8.597 5.464 14.644 5.464 3.714 0 8.846-1.815 8.846-5.389 0-2.173-1.674-5.188-9.827-7.056-2.76-.639-15.503-3.492-15.503-14.278 0-7.672 5.299-14.91 16.961-14.91 8.447 0 14.012 3.342 16.429 4.602l-2.916 7.377c-4.917-3.254-10.354-4.13-13.663-4.13-5.144 0-7.599 3.1-7.599 5.477 0 5.231 7.898 5.937 12.743 7.688 7.505 2.595 12.743 6.9 12.743 14.117-.006 7.678-6.287 14.671-17.588 14.671zm42.296-.153c-11.196 0-20.264-3.957-20.264-15.227 0-10.31 9.068-16.341 20.264-16.341 3.415 0 6.574.128 9.362.562v-1.515c0-9.194-9.978-9.007-9.978-9.007-8.597 0-13.663 3.936-13.663 3.936l-3.22-7.615s7.366-4.602 16.733-4.602c19.954 0 19.433 15.388 19.433 15.388v8.093l.005 22.523c-3.323 2.374-10.28 3.805-18.672 3.805zm37.614-1.109h-9.522V131.02h9.522v66.937zm49.026-20.991H191.11v1.003c0 7.933 5.947 11.629 12.527 12.583 5.842.854 13.619-2.539 13.619-2.539l3.07 7.615s-5.321 3.383-15.553 3.383c-19.96 0-24.36-13.107-24.36-25.166 0-14.378 7.571-24.394 22.177-24.394 16.711-.004 20.707 15.936 18.867 27.515zm5.887 16.391l3.304-7.771c2.455 1.984 8.597 5.464 14.644 5.464 3.714 0 8.847-1.815 8.847-5.389 0-2.173-1.68-5.188-9.827-7.056-2.761-.639-15.504-3.492-15.504-14.278 0-7.672 5.294-14.91 16.961-14.91 8.447 0 14.012 3.342 16.428 4.602l-2.915 7.377c-4.917-3.254-10.354-4.13-13.663-4.13-5.144 0-7.599 3.1-7.599 5.477 0 5.231 7.893 5.937 12.743 7.688 7.504 2.595 12.743 6.9 12.743 14.117 0 7.676-6.279 14.67-17.576 14.67-5.178.001-12.445-1.027-18.586-5.861zm69.651-34.726l-10.077-.193-7.428 42.292c-2.239 10.476-4.967 15.153-9.29 17.46-7.716 4.091-17.271 0-17.271 0l3.193-7.762c12.394 4.27 13.323-7.185 13.901-10.285.554-3.104 7.313-41.705 7.313-41.705h-7.704l1.873-7.953h7.328s.391-12.556 7.504-17.565c8.689-6.131 19.156-1.641 19.156-1.641l-3.191 7.954c-7.271-1.94-10.887 1.374-10.887 1.374-2.48 2.909-3.215 10.266-3.215 10.266h10.529l-1.734 7.758zm23.834 40.601c-11.873 0-21.495-8.247-21.495-25.176 0-15.862 9.622-24.971 21.495-24.971 11.872 0 21.494 8.896 21.494 24.971 0 17.128-9.622 25.176-21.494 25.176zm53.421-39.554s-14.766-6.035-14.766 16.284v22.271h-9.379v-47.862h9.379v4.562c7.716-8.324 18.864-3.719 18.864-3.719l-4.098 8.464zm26.506 39.443c-11.872 0-22.204-8.137-22.204-25.064 0-16.705 10.645-24.742 22.307-24.742 8.271 0 11.463 1.585 13.724 2.749l-2.66 7.404c-4.723-1.695-8.092-1.68-10.043-1.591-8.891.427-13.015 7.871-13.015 16.229 0 9.571 5.753 16.444 12.104 16.444 6.651 0 8.081-.633 11.151-2.006l2.857 7.185c-2.459 1.906-6.539 3.392-14.221 3.392zm57.723-22.155h-30.341v1.003c0 7.933 5.953 11.629 12.526 12.583 5.842.854 13.624-2.539 13.624-2.539l3.06 7.615s-5.318 3.383-15.542 3.383c-19.965 0-24.363-13.107-24.363-25.166 0-14.378 7.568-24.394 22.171-24.394 16.714-.004 20.705 15.936 18.865 27.515zm-256.167-18.983c-10.438 0-11.202 11.156-11.202 11.156h21.052c-.82-9.727-7.189-11.156-9.85-11.156zm237.033 0c-10.439 0-11.207 11.156-11.207 11.156h21.054c-.824-9.727-7.187-11.156-9.847-11.156zm-118.516.089c-8.192 0-11.188 7.677-11.188 16.035 0 8.913 2.993 16.655 11.188 16.655 8.591 0 11.329-7.627 11.329-16.655 0-8.475-2.738-16.035-11.329-16.035zM124.686 183.84c0 10.315 19.034 6.024 19.034 6.024v-13.642c0 .001-19.034-4.282-19.034 7.618z\"/></svg>",
		"search": "<svg viewbox=\"0 0 15 15\"><path d=\"M2.01 6.03a4.025 4.025 0 0 1 4.02-4.02 4.025 4.025 0 0 1 4.02 4.02 4.025 4.025 0 0 1-4.02 4.02 4.024 4.024 0 0 1-4.02-4.02m12.696 7.256l-3.769-3.768a5.991 5.991 0 0 0 1.12-3.487 6.036 6.036 0 0 0-6.03-6.03 6.036 6.036 0 0 0-6.03 6.03 6.036 6.036 0 0 0 6.03 6.03c1.3 0 2.502-.418 3.487-1.12l3.769 3.769a1.001 1.001 0 0 0 1.42 0 1.005 1.005 0 0 0 0-1.422\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
		"select": "<svg viewbox=\"0 0 20 20\"><path d=\"M2.3 6h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3H2.3a.3.3 0 0 1-.3-.3V6.3a.3.3 0 0 1 .3-.3M1.53 1a.53.53 0 0 0-.53.53v1.94c0 .293.237.53.53.53h1.94A.53.53 0 0 0 4 3.47V1.53A.53.53 0 0 0 3.47 1H1.53M14.53 1a.53.53 0 0 0-.53.53v1.94c0 .293.237.53.53.53h1.94a.53.53 0 0 0 .53-.53V1.53a.53.53 0 0 0-.53-.53h-1.94M1.53 14a.53.53 0 0 0-.53.53v1.94c0 .293.237.53.53.53h1.94a.53.53 0 0 0 .53-.53v-1.94a.53.53 0 0 0-.53-.53H1.53M2.3 10h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3H2.3a.3.3 0 0 1-.3-.3v-1.4a.3.3 0 0 1 .3-.3M6.3 14h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3H6.3a.3.3 0 0 1-.3-.3v-1.4a.3.3 0 0 1 .3-.3M6.3 2h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3H6.3a.3.3 0 0 1-.3-.3V2.3a.3.3 0 0 1 .3-.3M10.3 2h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V2.3a.3.3 0 0 1 .3-.3M14.3 6h1.4a.3.3 0 0 1 .3.3v1.4a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V6.3a.3.3 0 0 1 .3-.3M10.46 10a.459.459 0 0 0-.424.64l3.893 9.08a.458.458 0 0 0 .857-.036l1.225-3.674 3.675-1.225a.46.46 0 0 0 .035-.857l-9.08-3.893a.463.463 0 0 0-.179-.037\"/></svg>",
		"send_email": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256-.75l-96 96h64v129.5h63.5V95.25H352z\"/><path d=\"M288 351.975C357.175 326.385 512 192 512 192v-32l-192-.025v96H192v-96L0 160v32s156.377 130.525 224 159.975c14.669 6.386 48.994 5.55 64 0z\"/><path d=\"M512 480V240S377.482 359.484 320 383.975c-29.439 12.543-97.911 10.895-128 0C133.25 362.704 0 240 0 240v240c0 32 32 32 32 32h448s32 0 32-32z\"/></svg>",
		"settings": "<svg width=\"20\" height=\"20\" viewbox=\"-287 410.89 20 20\"><path d=\"M-275.149 430.64h-3.701a1.199 1.199 0 0 1-1.197-1.033l-.289-1.959a7.51 7.51 0 0 1-.985-.558l-1.927.753c-.582.203-1.213-.028-1.493-.531l-1.84-3.097a1.193 1.193 0 0 1 .297-1.553l1.62-1.231a6.09 6.09 0 0 1 0-1.083l-1.616-1.229a1.19 1.19 0 0 1-.297-1.562l1.847-3.108c.277-.499.915-.729 1.476-.516l1.937.756c.327-.217.652-.402.982-.559l.291-1.974c.073-.574.588-1.019 1.195-1.019h3.701c.607 0 1.122.444 1.197 1.034l.289 1.958c.338.159.668.346.985.558l1.929-.753c.576-.205 1.209.027 1.491.53l1.84 3.098c.306.542.177 1.188-.298 1.553l-1.618 1.231a6.38 6.38 0 0 1 0 1.083l1.615 1.228c.478.37.606 1.016.31 1.542l-1.858 3.129a1.193 1.193 0 0 1-1.476.517l-1.938-.757a7.944 7.944 0 0 1-.982.559l-.291 1.974c-.074.575-.588 1.019-1.196 1.019zm-3.451-1.5h3.201l.376-2.551.401-.16a6.265 6.265 0 0 0 1.397-.79l.333-.243 2.458.961 1.586-2.672-2.076-1.579.055-.43c.033-.257.059-.514.059-.787 0-.272-.025-.529-.059-.786l-.055-.43 2.076-1.58-1.586-2.671-2.464.962-.333-.25a6.11 6.11 0 0 0-1.392-.785l-.401-.16-.376-2.55h-3.201l-.376 2.55-.401.16a6.339 6.339 0 0 0-1.398.791l-.332.243-2.457-.959-1.587 2.67 2.077 1.58-.055.43c-.033.257-.06.521-.06.786s.026.53.06.787l.055.43-2.077 1.58 1.587 2.671 2.463-.963.334.251a6.04 6.04 0 0 0 1.391.784l.401.16.376 2.55z\"/><path d=\"M-277 424.39c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.379-1.121-2.5-2.5-2.5z\"/></svg>",
		"share": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M320 96c0 5.125.312 9.922.938 14.719l-158.703 75.843C145.281 170.234 121.921 160 96 160c-53.125 0-96 42.875-96 96s42.875 96 96 96c25.921 0 49.281-10.25 66.234-26.875l158.704 76.156c-.626 4.781-.938 9.594-.938 14.719 0 53.125 42.875 96 96 96s96-42.875 96-96-42.875-96-96-96c-27.5 0-52.156 11.5-69.751 30.062L190.079 275.5c1.279-6.375 1.921-12.781 1.921-19.5s-.642-13.125-1.921-19.516l156.17-74.562C363.5 180.484 388.5 192 416 192c53.125 0 96-42.875 96-96S469.125 0 416 0s-96 42.875-96 96z\"/></svg>",
		"sort-asc": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M384 192L256 64 128 192z\"/></svg>",
		"sort-desc": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M128 320l128 128 128-128z\"/></svg>",
		"source-aha": "<svg viewbox=\"0 0 32 32\"><path fill=\"#0073cf\" d=\"M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M19 27.3c0 .4-.1.6-.6.6-1.6 0-3.2 0-4.8.1-.4 0-.6-.2-.6-.6v-4.1c0-.4.2-.6.6-.6.8 0 1.6.1 2.3.1.8 0 1.6 0 2.4-.1.5 0 .7.1.6.6 0 .7 0 3.3.1 4m-.3-14.8c-.1 2.3-.2 4.5-.2 6.8 0 .4-.1.6-.6.6-.9 0-3.4.1-3.7.1-.4 0-.6-.1-.6-.5-.1-1.6-.1-3.3-.2-4.9-.2-3-.4-5.9-.7-8.9 0-.4.1-.6.5-.7 1.8-.3 3.7-.6 5.5-.9.5-.1.6.1.6.6-.2 2.5-.4 5.1-.6 7.8\"/></svg>",
		"source-all": "<svg viewbox=\"0 0 32 32\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#004990\"/><path d=\"M21.6 21.1c-2.1 0-4.4-1.4-5.6-3.3-1.2 1.9-3.5 3.3-5.6 3.3-3.1 0-5.6-2.3-5.6-5.1s2.5-5.1 5.6-5.1c2.1 0 4.4 1.4 5.6 3.3 1.2-1.9 3.5-3.3 5.6-3.3 3.1 0 5.6 2.3 5.6 5.1s-2.5 5.1-5.6 5.1M16.8 16c.7 1.9 2.9 3.6 4.8 3.6 2.2 0 4.1-1.6 4.1-3.6s-1.8-3.6-4.1-3.6c-1.9 0-4.1 1.7-4.8 3.6m-6.4-3.6c-2.2 0-4.1 1.6-4.1 3.6s1.8 3.6 4.1 3.6c1.9 0 4.1-1.7 4.8-3.6-.7-1.9-2.9-3.6-4.8-3.6\" fill=\"#fff\"/><path d=\"M10.4 21.1v-1.5c2 0 4.3-1.8 4.9-3.8l.1-.2c.9-2.5 3.4-4.6 6.2-4.6v1.5c-2 0-4.3 1.8-4.9 3.8v.2c-1 2.6-3.7 4.6-6.3 4.6z\" opacity=\".5\" fill=\"#004990\" stroke=\"#004990\" stroke-width=\".5\" stroke-miterlimit=\"10\"/><path d=\"M21.5 20.9c-2.7 0-5.3-1.9-6.1-4.4 0 0-1.2-4.2-5.1-4.2V11c2.8 0 5.5 2 6.3 4.5 0 0 1.4 4.3 4.9 4.3v1.1\" fill=\"#fff\"/></svg>",
		"source-amazonS3": "<svg viewbox=\"0 0 32 32\"><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/><path fill=\"#e05243\" d=\"M25.6 9.3v13.5l-1.6.7v-15z\"/><g fill=\"#8c3123\"><path d=\"M16 10.5v11.1l8 1.9v-15zM6.4 9.3v13.5l1.6.7v-15z\"/></g><path fill=\"#e05243\" d=\"M16 10.5v11.1l-8 1.9v-15z\"/><g fill=\"#8c3123\"><path d=\"M12.5 6.2v4.9l3.5-.8V4.4zM12.5 20.9v4.9l3.5 1.8v-5.9zM12.5 13.5v4.9l3.5.5v-5.8z\"/></g><g fill=\"#e05243\"><path d=\"M19.5 13.5v4.9l-3.5.5v-5.8zM19.5 6.2v4.9l-3.5-.8V4.4zM19.5 20.9v4.9L16 27.6v-5.9z\"/></g><path fill=\"#5e1f18\" d=\"M16 10.3l-3.5.8 3.5.7 3.5-.7z\"/><path fill=\"#f2b0a9\" d=\"M16 20.2l-3.5.7 3.5.8 3.5-.8z\"/></svg>",
		"source-box": "<svg viewbox=\"0 0 32 32\"><g fill=\"#0075c9\"><path d=\"M16.8 13.5c-1.7 0-3.1.9-3.8 2.3-.7-1.4-2.2-2.3-3.8-2.3-1 0-1.9.3-2.6.9v-3.6c0-.5-.4-.8-.9-.8s-.9.4-.9.8V18c0 2.4 2 4.3 4.3 4.3 1.7 0 3.1-.9 3.8-2.3.7 1.4 2.2 2.3 3.8 2.3 2.4 0 4.3-1.9 4.3-4.3.2-2.6-1.8-4.5-4.2-4.5m-7.6 6.9c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6c0 1.4-1.2 2.6-2.6 2.6m7.6 0c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6c0 1.4-1.1 2.6-2.6 2.6\"/><path d=\"M27 20.8l-2.2-3 2.2-3c.3-.4.2-.9-.2-1.2-.4-.3-.9-.2-1.2.2l-1.9 2.6-1.9-2.6c-.3-.4-.8-.4-1.2-.2-.4.3-.5.8-.2 1.2l2.2 3-2.2 3c-.3.4-.2.9.2 1.2.4.3.9.2 1.2-.2l1.9-2.6 1.9 2.6c.3.4.8.4 1.2.2.4-.3.5-.9.2-1.2\"/></g><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-clearspace": "<svg width=\"32\" height=\"32\" fill=\"#53AA45\" viewbox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"2\"/><lineargradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\"><stop stop-color=\"#B3E3B3\" offset=\"0%\"/><stop stop-color=\"#FFF\" offset=\"100%\"/></lineargradient><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#B5E3B5\" d=\"M17.375 10.958h4.583v4.583h-4.583z\"/><path d=\"M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm-4.279-6.726c1.102 0 3.49-1.668 4.28.166 1.164 2.7-3.615 3.2-3.615 3.2s1.432 1.37 4.373 1.37c2.94 0 8.685-2.653 8.852-9.01H3.2c0 2.152 1.369 4.274 3.52 4.274zm0-8.548c1.102 0 3.49 1.668 4.28-.166 1.164-2.7-3.615-3.2-3.615-3.2s1.432-1.37 4.373-1.37c2.94 0 8.685 2.653 8.852 9.01H3.2c0-2.152 1.369-4.274 3.52-4.274z\" fill=\"url(#a)\" transform=\"translate(5 5)\"/><path stroke=\"#FFF\" d=\"M13.25 12.792h6.417v6.417H13.25z\"/><path d=\"M29 0L8 32h24V0h-3z\" opacity=\".102\" fill=\"#000\"/></g></svg>",
		"source-confluence": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"5.3\" y=\"7\" width=\"21.7\" height=\"20.1\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"5.3\" y=\"7\" width=\"21.7\" height=\"20.1\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#1f2e4f\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#f8faff\" d=\"M20.7 20.4c-.3-.6-.6-1.1-1-1.7l-.9-1.2c-.1-.2-.1-.4 0-.5l.3-.3c1.3-1.4 2.6-2.8 3.7-4.4 1.1-1.6 1.7-3.2 1.9-4.8 0-.2-.1-.3-.2-.4-.1 0-.2-.1-.3-.1H24c-1 .4-2 .7-2.9.9-.2 0-.3.2-.4.4-.7 1.9-2.4 3.8-4.2 5.7-.1.1-.2.2-.3.2s-.3-.1-.3-.2c-1.8-1.9-3.5-3.8-4.2-5.7-.1-.1-.3-.3-.5-.3-.9-.2-1.9-.6-2.9-1h-.2c-.1 0-.2 0-.3.1-.1.1-.1.3-.1.4.2 1.6.8 3.2 1.9 4.8 1 1.5 2.4 3 3.7 4.4 2.4 2.5 4.6 5 4.8 7.7 0 .3.2.4.5.4h2.8c.1 0 .2-.1.3-.2.1-.1.1-.2.1-.4 0-.5-.1-1.1-.2-1.6 0-.1.1-.2.2-.2 2.3.4 3.7.9 3.7 1.5s-1.3 1.5-3.4 2.1c-.2.1-.3.2-.3.4 0 .3.2.5.5.5h.1c2.8-.7 4.7-1.8 4.7-3.2-.1-1.3-2.6-2.7-6.4-3.3m-7.5-1.5c-.1-.1-.2-.1-.3-.1-.2 0-.3.1-.4.2-.3.5-.6 1-.8 1.4-3.8.6-6.3 2-6.3 3.6 0 1.3 1.9 2.5 4.7 3.1h.1c.2 0 .5-.2.5-.5 0-.2-.1-.4-.3-.4-2.1-.6-3.4-1.5-3.4-2.1 0-.6 1.4-1.2 3.7-1.5.1 0 .2.1.2.2-.1.5-.2 1-.2 1.6 0 .1 0 .3.1.4.1.1.2.2.3.2h2.8c.2 0 .4-.2.5-.4.1-.9.3-1.7.8-2.6.2-.3 0-.6-.1-.7-.5-.8-1.1-1.5-1.9-2.4m2.6-7.3c.1.1.2.1.3.1.1 0 .2 0 .3-.1 1-1 1.5-2.2 1.6-2.5v-.2c0-.3-.2-.4-.4-.4s-.7.1-1.6.1c-.9 0-1.4-.1-1.6-.1-.2 0-.4.2-.4.4v.2c.3.4.9 1.5 1.8 2.5\"/></svg>",
		"source-custom": "<svg viewbox=\"0 0 32 32\"><g fill=\"#004990\"><path d=\"M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-3.9 13.2L22 17.3l1.6 1.6.1.1c.2.2.2.4 0 .6l-.9.9c-.1.1-.2.1-.3.1s-.2 0-.3-.1l-.1-.1c-2.2 1.8-5 2.9-7.5 2.9-1 0-1.9-.2-2.7-.6-.1.1-.1.2-.2.3l-2.8 2.8c-.3.4-.8.6-1.3.6-.4 0-.9-.2-1.3-.6-.7-.8-.7-2 0-2.7L9 20.3l.2-.2C8 17.3 8.9 13.2 11.6 10l-.2-.2c-.2-.2-.2-.4 0-.6l.9-.9c.1-.1.2-.1.3-.1.1 0 .2 0 .3.1l.2.2 1.5 1.5 4.1-4.1c.2-.2.5-.3.8-.3.3 0 .6.1.8.3.4.4.4 1.2 0 1.6l-4.1 4.1 4.2 4.2 4.1-4.1c.2-.2.5-.3.8-.3s.6.1.8.3c.4.3.4 1.1 0 1.5M13 11.5c-2.5 3-3.2 7-1.3 8.8\"/><path d=\"M11.7 20.3c-1.8-1.8-1.1-5.8 1.3-8.8l7.5 7.5c-3.1 2.5-7 3.1-8.8 1.3\"/></g></svg>",
		"source-database": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"8\" y=\"7\" width=\"16\" height=\"19\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"8\" y=\"7\" width=\"16\" height=\"19\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M16 26c-4.4 0-8-1.2-8-2.7v-2.7c0-.2.1-.5.3-.7.9 1.2 4 2 7.7 2s6.8-.9 7.7-2c.2.2.3.4.3.7v2.7c0 1.5-3.6 2.7-8 2.7m0-5.4c-4.4 0-8-1.2-8-2.7v-2.7c0-.1.1-.3.1-.4 0-.1.1-.2.2-.3.9 1.2 4 2 7.7 2s6.8-.9 7.7-2c.1.1.1.2.2.3.1.1.1.3.1.4v2.7c0 1.4-3.6 2.7-8 2.7m0-5.5c-4.4 0-8-1.2-8-2.7V9.7C8 8.2 11.6 7 16 7s8 1.2 8 2.7v2.8c0 1.4-3.6 2.6-8 2.6m0-7.6c-3.9 0-7 .9-7 2s3.1 2 7 2 7-.9 7-2-3.1-2-7-2\"/></svg>",
		"source-desktop": "<svg viewbox=\"0 0 32 32\"><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><circle cx=\"22.2\" cy=\"15.4\" r=\"2\"/><path d=\"M7 14v4l3.9-2z\"/><path d=\"M27 10.5H5c-.8 0-1.5.7-1.5 1.5v8c0 .8.7 1.5 1.5 1.5h22c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5m-9 10H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h13v9m8.6-1.4l-.5.5c-.1.1-.3.1-.4 0l-1.8-1.8c-.5.4-1.1.6-1.7.6-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 .5-.1 1-.4 1.4l1.8 1.8c.1.2.1.4 0 .5\"/></g></svg>",
		"source-discourse": "<svg width=\"32\" height=\"32\" viewbox=\"0 0 32 32\"><title>Discourse</title><defs><rect width=\"32\" height=\"32\" rx=\"2\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask fill=\"#fff\"><use xlink:href=\"#a\"/></mask><use fill=\"#39393A\" xlink:href=\"#a\"/><g mask=\"url(#b)\"><path d=\"M8.123 18.795a8.162 8.162 0 0 1-1.098-4.247c.079-4.533 3.823-8.143 8.361-8.064 4.54.08 8.155 3.818 8.075 8.351-.079 4.533-3.822 8.143-8.361 8.064a8.192 8.192 0 0 1-5.14-1.92l.324.433-3.006 2.734.845-5.35z\" fill=\"#E51B24\"/><path d=\"M10.44 21.556a8.165 8.165 0 0 1-1.528-4.912C8.99 12.11 12.735 8.5 17.273 8.58c4.54.08 8.155 3.818 8.075 8.35-.079 4.534-3.822 8.144-8.361 8.065a8.19 8.19 0 0 1-4.142-1.202l.03.029-5.625.292 3.033-2.704.156.146z\" fill=\"#01ADF0\"/><path d=\"M10.037 21.385a8.258 8.258 0 0 1-.008-.009l12.2-10.985c3 3.331 2.7 8.49-.669 11.524-2.663 2.398-6.446 2.75-9.396 1.147l-4.916 1.054 2.79-2.73z\" fill=\"#00A84F\"/><path d=\"M10.026 21.373l.003.003 12.2-10.985C19.23 7.06 14.067 6.818 10.7 9.852c-2.76 2.485-3.46 6.396-1.976 9.56l-1.541 4.716 2.844-2.755z\" fill=\"#F15C21\"/><path d=\"M9.293 19.666a8.096 8.096 0 0 1-.508-3.127c.159-4.53 4.006-8.073 8.594-7.913a8.345 8.345 0 0 1 4.768 1.69 8.102 8.102 0 0 1 1.372 4.811c-.158 4.531-4.005 8.074-8.593 7.914a8.4 8.4 0 0 1-2.59-.503l-5.102 1.609 2.059-4.48z\" fill=\"#FFF9AE\"/></g><path d=\"M29 0L8 32h24V0h-3z\" opacity=\".102\" fill=\"#000\" mask=\"url(#b)\"/></g></svg>",
		"source-documentum": "<svg width=\"32\" height=\"32\" viewbox=\"0 0 32 32\"><defs><rect width=\"32\" height=\"32\" rx=\"2\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask fill=\"#fff\"><use xlink:href=\"#a\"/></mask><use fill=\"#F6F6F6\" xlink:href=\"#a\"/><g mask=\"url(#b)\"><path d=\"M25.564 17.204h-3.488a9.953 9.953 0 0 1-2.29-.341c-.258-.075-.945-.276-1.61-.683-.618-.379-1.189-.9-1.755-1.602-.8-.993-1.293-1.947-1.574-3.194-.134-.593-.166-1.117-.203-1.877-.016-.336-.132-1.066-.132-1.066-.48-2.418-2.66-4.245-5.279-4.245-2.97 0-5.378 2.348-5.378 5.244 0 2.565 1.89 4.696 4.384 5.151 0 0 .898.134 1.346.14 1.715.023 3.349.505 4.851 1.653 1.085.829 2.603 2.09 2.78 5.493v3.466c0 1.293 1.074 2.34 2.399 2.34h5.949c1.326 0 2.4-1.047 2.4-2.34v-5.8c0-1.292-1.074-2.34-2.4-2.34\" fill=\"#005795\"/><path d=\"M9.278 27.78c2.97 0 5.379-2.349 5.379-5.245 0-2.897-2.408-5.244-5.38-5.244-2.97 0-5.378 2.347-5.378 5.244 0 2.896 2.408 5.244 5.379 5.244M27.968 9.51c0-2.896-2.408-5.245-5.378-5.245-2.972 0-5.379 2.349-5.379 5.244 0 2.897 2.407 5.245 5.379 5.245 2.97 0 5.378-2.348 5.378-5.245\" fill=\"#1A1918\"/></g><path d=\"M29 0L8 32h24V0h-3z\" opacity=\".102\" fill=\"#000\" mask=\"url(#b)\"/></g></svg>",
		"source-dropbox": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4\" y=\"5.1\" width=\"23.7\" height=\"22.2\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4\" y=\"5.1\" width=\"23.7\" height=\"22.2\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#fff\" filter=\"url(#a)\"/></mask></defs><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#007ee5\"/><path d=\"M11 5.1L4 9.7l4.8 3.9 7-4.4L11 5.1M4 17.5l7 4.6 4.9-4.1-7-4.4L4 17.5m11.9.5l4.9 4.1 7-4.6-4.8-3.9-7.1 4.4m11.8-8.3l-7-4.6-4.9 4.1 7 4.4 4.9-3.9m-11.8 9.2L11 23l-2.1-1.4v1.5l7 4.2 7-4.2v-1.5L20.8 23l-4.9-4.1\" fill=\"#fff\" mask=\"url(#b)\"/></svg>",
		"source-dropbox_for_business": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4\" y=\"5.1\" width=\"23.7\" height=\"22.2\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4\" y=\"5.1\" width=\"23.7\" height=\"22.2\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#fff\" filter=\"url(#a)\"/></mask></defs><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#007ee5\"/><path d=\"M11 5.1L4 9.7l4.8 3.9 7-4.4L11 5.1M4 17.5l7 4.6 4.9-4.1-7-4.4L4 17.5m11.9.5l4.9 4.1 7-4.6-4.8-3.9-7.1 4.4m11.8-8.3l-7-4.6-4.9 4.1 7 4.4 4.9-3.9m-11.8 9.2L11 23l-2.1-1.4v1.5l7 4.2 7-4.2v-1.5L20.8 23l-4.9-4.1\" fill=\"#fff\" mask=\"url(#b)\"/></svg>",
		"source-drupal": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"5\" y=\"1.6\" width=\"22\" height=\"26.8\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"5\" y=\"1.6\" width=\"22\" height=\"26.8\"><path d=\"M2.1.1H30c1.1 0 2 .9 2 2V30c0 1.1-.9 2-2 2H2.1c-1.1 0-2-.9-2-2V2.1c0-1.1.9-2 2-2\" fill=\"#fff\" filter=\"url(#a)\"/></mask></defs><path d=\"M2.1.1H30c1.1 0 2 .9 2 2V30c0 1.1-.9 2-2 2H2.1c-1.1 0-2-.9-2-2V2.1c0-1.1.9-2 2-2\" fill=\"#2ba9e0\"/><g mask=\"url(#b)\"><path d=\"M21.5 6.6c-1.3-.9-2.5-1.2-3.7-2-.8-.6-1.8-1.9-2.7-3-.2 1.8-.7 2.5-1.3 3-1.2 1-2 1.3-3.1 2-.9.5-5.7 3.6-5.7 10.3s5.3 11.6 11.1 11.6S27 24 27 17.1s-4.8-10-5.5-10.5m-2 16c.4 0 .8 0 1.1.2.3.2.5.7.6.9.1.3 0 .4-.2.5-.2.1-.2.1-.4-.3-.2-.3-.3-.7-1.2-.7-.8 0-1.1.3-1.5.7-.4.4-.6.5-.7.3-.1-.2-.1-.4.2-.7.3-.3.7-.7 1.1-.9h1m-4 3c.5.4 1.2.7 2.8.7 1.6 0 2.6-.5 3.1-.9.2-.2.3 0 .3.1s.1.3-.1.4c-.1.1-1.2 1-2.5 1.1-1.3.1-3.1.2-4.1-.8-.2-.2-.1-.4 0-.5.1-.1.2-.2.4-.2l.1.1m-5.8-4.7c0-2 1.8-3.9 4-3.9 2.8 0 4.8 3 6.2 3 1.2 0 3.5-2.6 4.7-2.6 1.2 0 1.6 1.3 1.6 2.1s-.2 2.2-.8 3.1c-.6.9-.9 1.2-1.6 1.2-.9-.1-2.6-3-3.7-3-1.4-.1-4.5 3.1-6.9 3.1-1.5 0-1.9-.2-2.4-.6-.7-.5-1.1-1.3-1.1-2.4\" fill=\"#fff\"/></g></svg>",
		"source-dynamics": "<svg viewbox=\"0 0 32 32\"><path fill=\"#1c6db5\" d=\"M14.5 5.1h.5v14.8s-5.7.6-8.5 3.1c0 0 4.4-2.5 8.9-2.6v-4.6c2.2-2.3 3.7-6 4.4-7.3.3-.1.6 0 .6 0v13c-6.8-1.1-13.2 1.3-13 1.2 2.8-.7 8.7-1.7 13.4-.6v-7s3.1-2.4 3.8-3.5c.2-.1.3 0 .3 0s.1 12.3 0 12.3c-9.4-3.5-19.9 0-19.9 0v-1.5c0 .1 7.6-7.9 9.5-17.3\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-ektron_cms": "<svg viewbox=\"0 0 32 32\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#1c6db1\"/><circle cx=\"16\" cy=\"16\" r=\"12\" fill=\"#fff\"/><path d=\"M20.7 13.9c0-.1 0-.1 0 0v-.2c-.3-.8-.7-1.4-1.4-1.9-.9-.8-2-1.1-3.2-1.1-.4 0-.9.1-1.3.1-.9.2-1.7.6-2.3 1.2-.5.5-.8 1.1-1.1 1.7v.1l9.3.1M7 15.5v-.1c.1-1.1.3-2.2.7-3.2.5-1.1 1.2-2.1 2.1-3 1.2-1.1 2.7-1.8 4.3-2.1.6-.1 1.2-.2 1.9-.1 1.5 0 2.9.3 4.3 1 .7.4 1.3.8 1.9 1.3 1 1 1.8 2.2 2.2 3.5.2.6.4 1.3.4 1.9.1.6.1 1.2.1 1.8v.5l-.1.1H11.1c.1.3.1.5.2.8.4 1.2 1.1 2.1 2.2 2.7.5.3 1.1.4 1.7.5.3 0 .6.1.9.1 1.4 0 2.6-.5 3.7-1.4 0 0 .1 0 .1-.1.2-.2.4-.2.6-.1.8.4 1.5.7 2.3 1.1.3.1.6.3.8.4 0 0 .1 0 .1.1-.2.2-.4.5-.5.7-.8 1-1.8 1.7-2.9 2.2-.7.3-1.5.5-2.3.7-.8.1-1.5.2-2.3.1-2-.1-3.8-.6-5.4-1.8-1.7-1.3-2.8-3-3.2-5.1-.1-.4-.1-.9-.2-1.3v-.1l.1-1.1\" fill=\"#ed9b2d\"/></svg>",
		"source-evernote": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"6\" y=\"5\" width=\"19\" height=\"21.9\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"6\" y=\"5\" width=\"19\" height=\"21.9\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#fff\" filter=\"url(#a)\"/></mask></defs><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#76b74b\"/><path d=\"M20.1 15.4c-.3 0-.6 0-.9.1.1-.6.3-1.3 1.2-1.3 1 0 1.2 1 1.2 1.6-.4-.3-.9-.4-1.5-.4m4.4-6.6c-.2-.9-.7-1.3-1.2-1.5-.5-.2-1.6-.4-2.9-.5-1.1-.1-2.3-.1-3.1-.1-.1-.6-.5-1.2-1-1.4-1.3-.5-3.3-.4-3.9-.2-.4.1-.9.3-1.1.7-.2.2-.3.5-.3 1v2.3c0 .4-.4.8-.8.8H8c-.4 0-.8.1-1 .2-.3.1-.5.3-.6.5-.3.3-.4.8-.4 1.2 0 0 0 .4.1 1.1.1.6.7 4.5 1.3 5.8.2.5.4.7.9.9 1 .4 3.4.9 4.5 1 1.1.1 1.8.4 2.2-.4 0 0 .1-.2.2-.5.4-1 .4-2 .4-2.6 0-.1.1-.1.1 0 0 .5-.1 2.2 1.2 2.6.5.2 1.6.3 2.7.5 1 .1 1.7.5 1.7 2.9 0 1.5-.3 1.7-2 1.7-1.4 0-1.9 0-1.9-1 0-.9.9-.8 1.5-.8.3 0 .1-.2.1-.7 0-.5.3-.8 0-.8-2.2-.1-3.5 0-3.5 2.7 0 2.4 1 2.9 4.1 2.9 2.5 0 3.4-.1 4.4-3.2.2-.6.7-2.5 1-5.6.1-2-.3-8-.5-9.5m-16.6.5H10c.1 0 .2-.1.2-.2V6.8c0-.4.1-.8.2-1l.1-.1-4.1 4c.1 0 .2-.1.2-.1.4-.2.8-.3 1.3-.3\" fill=\"#fff\" mask=\"url(#b)\"/></svg>",
		"source-exchange": "<svg viewbox=\"0 0 32 32\"><path fill=\"#1c6db5\" d=\"M13.3 20.5L8.6 20v-9.2l4.5-.5v1.9l-2.7.2v2.1l2.6-.1v1.8h-2.6v2.2l2.9.2v1.9M5 7.2v17.5l12.3 2.2v-22L5 7.2m20.4 5.1v1.8c0 .1 0 .1-.1.2l-1.1 1.2c-.1.1-.2.1-.3 0l-.4-.4c-.1-.1-.1-.2 0-.3l.5-.5v-1.9h-1.6c-1.4 1.1-2.5 3-2.8 2.7-.4-.4 2.3-4.1 2.6-4.1h2.9c.2 0 .3.1.3.3v1m0 7.3v1.1c0 .2-.1.3-.3.3h-2.8c-.1 0-.1 0-.2-.1L21 19.7c-.1-.1-.1-.2 0-.3l.4-.4c.1-.1.2-.1.3 0l.5.5H24v-1.6c-1-1.4-2.9-2.6-2.6-3 .4-.4 3.9 2.4 3.9 2.7l.1 2m.5-10.3h-7.4v1.6h.3c.1 0 .1 0 .2.1l1.1 1.2c.1.1.1.2 0 .3l-.4.4c-.1.1-.2.1-.3 0l-.5-.5h-.4v3.1c.8.7 1.4 1.3 1.2 1.5-.1.1-.6-.1-1.2-.5v3.2h.2c1.4-1.1 2.5-3 2.8-2.7.4.4-2.3 4.1-2.6 4.1h-.4v1.6h7.4c.6 0 1.1-.5 1.1-1.2V10.4c0-.6-.5-1.1-1.1-1.1\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-facebook": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"12.9\" y=\"4.9\" width=\"14.1\" height=\"27.1\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"12.9\" y=\"4.9\" width=\"14.1\" height=\"27.1\"><path d=\"M2.1 0H30c1.1 0 2 .9 2 2v27.9c0 1.1-.9 2-2 2H2.1c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2\" fill=\"#fff\" filter=\"url(#a)\"/></mask></defs><path d=\"M2.1 0H30c1.1 0 2 .9 2 2v27.9c0 1.1-.9 2-2 2H2.1c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2\" fill=\"#3b579d\"/><path d=\"M17.1 32V19.6h-4.2v-4.8h4.2v-3.7c0-3.8 2.4-6.2 6.1-6.2 2.3 0 3.8.1 3.8.1v4.3h-2.5c-1.6 0-2.4.6-2.4 2.3v3.1h4.8l-.6 4.8h-4.1V32h-5.1\" fill=\"#fff\" mask=\"url(#b)\"/></svg>",
		"source-file_system": "<svg viewbox=\"0 0 32 32\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#fff\"/><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#004990\"/><g fill=\"#fff\"><path d=\"M24 21H8c-1.6 0-3-1.3-3-3V7c0-1.1.9-2 2-2h3.7l1.6 1.9H24c1.7 0 3 1.3 3 3V18c0 1.6-1.3 3-3 3M7 7v11c0 .6.4 1 1 1h16c.5 0 1-.5 1-1V9.9c0-.6-.4-1-1-1H11.4L9.8 7H7M6 24h20v1H6z\"/><path d=\"M13 23h6v3h-6zM15 20h2v3h-2z\"/></g></svg>",
		"source-gmail": "<svg shape-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" viewbox=\"0 0 32 32\"><defs><path d=\"M7.4 8.5l8.6 6.4 8.7-6.4z\"/><lineargradient gradientunits=\"userSpaceOnUse\" x1=\"10.489\" x2=\"21.536\"><stop stop-color=\"#f8f6ef\"/><stop offset=\"1\" stop-color=\"#e7e4d6\"/></lineargradient></defs><path d=\"M24.7 8.5c.9 0 1.7.8 1.7 1.7v.5L24 12.4l-8 5.4-8.1-5.6v11.1h-.6c-.9 0-1.7-.8-1.7-1.7V10.2c0-.9.8-1.7 1.7-1.7l8.7 6.4 8.7-6.4\" fill=\"#e75a4d\"/><use fill=\"url(#a)\" xlink:href=\"#b\"/><path fill=\"#e7e4d7\" d=\"M8 12.3v11.1h16v-11l-8 5.4z\"/><path fill=\"#b8b7ae\" d=\"M8 23.4l8-5.6-8 5.5z\"/><path fill=\"#b7b6ad\" d=\"M24 12.4v11l-8-5.6z\"/><path d=\"M26.4 10.7v11c0 1.2-.6 1.7-2.4 1.7V12.3l2.4-1.6\" fill=\"#b2392f\"/><g fill=\"url(#a)\"><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/><use xlink:href=\"#b\"/></g><use fill=\"#f7f5ed\" xlink:href=\"#b\"/><path d=\"M30 2v27.9H2.1V2H30m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\" fill=\"#bcc3ca\"/></svg>",
		"source-google_drive_domain_wide": "<svg viewbox=\"0 0 32 32\"><defs><lineargradient gradientunits=\"userSpaceOnUse\" y1=\"16.07\" x2=\"0\" y2=\"5.558\"><stop stop-color=\"#149d5f\"/><stop offset=\".446\" stop-color=\"#0b9759\"/><stop offset=\"1\" stop-color=\"#069355\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" x1=\"16.03\" x2=\"8.09\"><stop stop-color=\"#3678e6\"/><stop offset=\".446\" stop-color=\"#2d71e5\"/><stop offset=\"1\" stop-color=\"#286de4\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" x1=\"17.822\" x2=\"28.07\"><stop stop-color=\"#edc449\"/><stop offset=\"1\" stop-color=\"#e8b935\"/></lineargradient></defs><path fill=\"#bcc3ca\" d=\"M29.9 2v27.9H2V2h27.9m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c-.1-1.1-1-2-2.1-2z\"/><path fill=\"#0ca45f\" d=\"M11.8 5.6L3.9 19.2l4.2 7.2L16 12.8z\"/><path fill=\"url(#a)\" d=\"M16 12.8l-4.2-7.2 2.3 10.5z\"/><path fill=\"#3279f1\" d=\"M12.3 19.2l-4.2 7.2h15.8l4.2-7.2z\"/><path fill=\"#fccc46\" d=\"M28.1 19.2L20.2 5.6h-8.4l7.9 13.6z\"/><path fill=\"url(#b)\" d=\"M12.3 19.2l-4.2 7.2 7.9-7.2z\"/><path fill=\"url(#c)\" d=\"M19.7 19.2h8.4L17.8 16z\"/></svg>",
		"source-google_drive_single_user": "<svg viewbox=\"0 0 32 32\"><defs><lineargradient gradientunits=\"userSpaceOnUse\" y1=\"16.07\" x2=\"0\" y2=\"5.558\"><stop stop-color=\"#149d5f\"/><stop offset=\".446\" stop-color=\"#0b9759\"/><stop offset=\"1\" stop-color=\"#069355\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" x1=\"16.03\" x2=\"8.09\"><stop stop-color=\"#3678e6\"/><stop offset=\".446\" stop-color=\"#2d71e5\"/><stop offset=\"1\" stop-color=\"#286de4\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" x1=\"17.822\" x2=\"28.07\"><stop stop-color=\"#edc449\"/><stop offset=\"1\" stop-color=\"#e8b935\"/></lineargradient></defs><path fill=\"#bcc3ca\" d=\"M29.9 2v27.9H2V2h27.9m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c-.1-1.1-1-2-2.1-2z\"/><path fill=\"#0ca45f\" d=\"M11.8 5.6L3.9 19.2l4.2 7.2L16 12.8z\"/><path fill=\"url(#a)\" d=\"M16 12.8l-4.2-7.2 2.3 10.5z\"/><path fill=\"#3279f1\" d=\"M12.3 19.2l-4.2 7.2h15.8l4.2-7.2z\"/><path fill=\"#fccc46\" d=\"M28.1 19.2L20.2 5.6h-8.4l7.9 13.6z\"/><path fill=\"url(#b)\" d=\"M12.3 19.2l-4.2 7.2 7.9-7.2z\"/><path fill=\"url(#c)\" d=\"M19.7 19.2h8.4L17.8 16z\"/></svg>",
		"source-google_sites": "<svg viewbox=\"0 0 32 32\"><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M26 5H6c-.6 0-1 .4-1 1v21h22V6c0-.6-.4-1-1-1m0 21H6V11h20v15m0-16H6V8h20v2\"/><path d=\"M20.2 22c-1.4 1.9-4.1 2.5-6.2 1.7-2.1-.8-3.7-3.1-3.5-5.4 0-2.8 2.6-5.3 5.5-5.2 1.3-.1 2.6.5 3.7 1.3-.4.5-.9 1-1.4 1.4-1.2-.9-3-1.1-4.3-.1-1.8 1.2-1.9 4.1-.1 5.5 1.7 1.5 4.8.8 5.3-1.6h-3.1v-1.9h5.2c0 1.5-.2 3.1-1.1 4.3\"/></g></svg>",
		"source-googleplus": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\".1\" y=\".1\" width=\"31.8\" height=\"31.8\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\".1\" y=\".1\" width=\"31.8\" height=\"31.8\"><path fill=\"#fff\" d=\"M.1 0H32v31.9H.1V0z\" filter=\"url(#a)\"/></mask></defs><path mask=\"url(#b)\" fill=\"#dc4e41\" d=\"M24.7 16.8h-1.6v1.6h-1.6v-1.6H20v-1.6h1.6v-1.6h1.6v1.6h1.6v1.6zm-7.6 2.7c-1.4 1.9-4.2 2.5-6.3 1.7-2.2-.8-3.7-3.1-3.5-5.5 0-2.9 2.7-5.4 5.5-5.3 1.4-.1 2.7.5 3.7 1.4-.4.5-.9 1-1.4 1.5-1.3-.9-3.1-1.1-4.3-.1-1.8 1.2-1.9 4.2-.2 5.5 1.7 1.5 4.9.8 5.3-1.6h-3.2v-1.9H18c.2 1.5 0 3.1-.9 4.3M30.2.1H1.8C.9.1.1.8.1 1.8v28.5c0 .9.7 1.7 1.7 1.7h28.5c.9 0 1.7-.7 1.7-1.7V1.8c-.1-1-.8-1.7-1.8-1.7\"/></svg>",
		"source-jira": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"8\" y=\"5\" width=\"16\" height=\"20.9\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"8\" y=\"5\" width=\"16\" height=\"20.9\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#1f2e4f\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M18.6 18.9c2.8 3.3 2.6 6.9 2.6 6.9h-3.5c.3-1.3-.3-3.2-5.1-7.8C7.9 13.4 8 10.3 8 10.3c0-.8.7-.4.7-.4 1.3 1 3.1 1 3.1 1 .6 2.4 3.8 5.3 4.3 5.7.7-.7 3.6-3.5 4.1-5.7 0 0 1.8 0 3.1-1 0 0 .7-.4.7.3 0 0 .2 3.3-4.6 7.9-.3.3-.6.5-.8.8m-3.2 3.6c-.6-.8-1.4-1.7-2.5-2.8-2.2 3.1-2 6.2-2 6.2h3.5c-.3-.7-.1-1.7 1-3.4m-1.2-11.3h3.4s.5-.1.3.5c-.2.8-2 2.5-2 2.5s-1.4-1.2-2-2.4c.2 0-.1-.6.3-.6M22 7.7c0 .8-.7 1.5-1.5 1.5S19 8.5 19 7.7s.7-1.5 1.5-1.5c.9 0 1.5.7 1.5 1.5m-8.8 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5m4.5-1.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5\"/></svg>",
		"source-jive": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4.3\" y=\"11.8\" width=\"23.9\" height=\"12\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4.3\" y=\"11.8\" width=\"23.9\" height=\"12\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#39393a\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M18.6 12l-1.4 4.7-.5-1.6c-.9 0-1.7-.1-2.5-.1l1.8 5h2.2l3-8.1h-2.6zm-2.9 0h-2.6l.7 2h2.5l-.6-2M12 14v-2H9.6v1.8c.7.1 1.5.1 2.4.2m-2.4.7v5.4H12v-5.2c-.9 0-1.7-.1-2.4-.2m18.6 1.8l-4.8.3s.1.9 1 1.2c1 .4 2.4-.1 2.4-.1l1.2 1.7s-.9.5-2.7.5c-2.3 0-4.1-1.4-4.2-3.9 0-.4 0-.7.1-1.1 3-.1 5.1-.3 5.1-.3s0-.7-.6-1c-.3-.2-.9-.2-1.1-.2-.1 0-1.3.1-3 .3.6-1.2 1.7-2 3.2-2.1 2.3 0 3.1 1.5 3.3 2.9.2.7.1 1.8.1 1.8m-20.3-2c-1.2-.2-2.1-.3-2.4-.4v6.2s0 .5-.2.9c-.4.5-.9.5-.9.5l.9 2.1s.5-.1 1-.3c.6-.3 1-.6 1.4-1.3.3-.6.3-1.3.3-1.3v-6.4zm0-.8V12H5.4v1.5c.5 0 1.3.1 2.5.2\"/></svg>",
		"source-jive_cloud": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4.3\" y=\"11.8\" width=\"23.9\" height=\"12\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4.3\" y=\"11.8\" width=\"23.9\" height=\"12\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#39393a\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M18.6 12l-1.4 4.7-.5-1.6c-.9 0-1.7-.1-2.5-.1l1.8 5h2.2l3-8.1h-2.6zm-2.9 0h-2.6l.7 2h2.5l-.6-2M12 14v-2H9.6v1.8c.7.1 1.5.1 2.4.2m-2.4.7v5.4H12v-5.2c-.9 0-1.7-.1-2.4-.2m18.6 1.8l-4.8.3s.1.9 1 1.2c1 .4 2.4-.1 2.4-.1l1.2 1.7s-.9.5-2.7.5c-2.3 0-4.1-1.4-4.2-3.9 0-.4 0-.7.1-1.1 3-.1 5.1-.3 5.1-.3s0-.7-.6-1c-.3-.2-.9-.2-1.1-.2-.1 0-1.3.1-3 .3.6-1.2 1.7-2 3.2-2.1 2.3 0 3.1 1.5 3.3 2.9.2.7.1 1.8.1 1.8m-20.3-2c-1.2-.2-2.1-.3-2.4-.4v6.2s0 .5-.2.9c-.4.5-.9.5-.9.5l.9 2.1s.5-.1 1-.3c.6-.3 1-.6 1.4-1.3.3-.6.3-1.3.3-1.3v-6.4zm0-.8V12H5.4v1.5c.5 0 1.3.1 2.5.2\"/></svg>",
		"source-knowledgebase": "<svg viewbox=\"0 0 32 32\"><path fill=\"#009ddc\" d=\"M22.5 10.6c-.7 0-1.4.2-2 .4-.7-1.3-2-2.1-3.6-2.1-1.1 0-2.2.5-2.9 1.3-.8-1.1-2.1-1.8-3.6-1.8-2.5 0-4.5 2-4.5 4.5 0 .6.1 1.2.4 1.8-1.1.7-1.9 1.9-1.9 3.4 0 2.2 1.7 3.9 3.8 3.9.3 0 .5 0 .8-.1.6 1.6 2.1 2.7 3.9 2.7 1.7 0 3.2-1 3.8-2.5.5.2 1 .4 1.6.4 1.4 0 2.5-.8 3.2-1.9.3.1.6.1 1 .1 2.7 0 5-2.3 5-5.1s-2.2-5-5-5\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-ldap": "<svg width=\"32\" height=\"32\" viewbox=\"0 0 32 32\"><title>LDAP</title><defs><rect width=\"32\" height=\"32\" rx=\"2\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask fill=\"#fff\"><use xlink:href=\"#a\"/></mask><use fill=\"#004990\" xlink:href=\"#a\"/><text mask=\"url(#b)\" font-family=\"Proxima Nova\" font-size=\"9\" font-weight=\"bold\" fill=\"#FFF\"><tspan x=\"5\" y=\"15\">LDAP</tspan></text><path d=\"M23.03 22h-7.14a4.008 4.008 0 0 0-3.882-3A4.004 4.004 0 0 0 8 23c0 2.21 1.794 4 4.008 4a4.008 4.008 0 0 0 3.882-3l.665.014 1.573 1.074 1.533-1.074 1.822 1.06 2.296-1.06.253-1.027L23.03 22zm-12.153-.409l1.532 1.286-1.286 1.532-1.532-1.286 1.286-1.532z\" fill=\"#FFF\" mask=\"url(#b)\"/><path d=\"M29 0L8 32h24V0h-3z\" opacity=\".102\" fill=\"#000\" mask=\"url(#b)\"/></g></svg>",
		"source-liferay": "<svg viewbox=\"0 0 32 32\"><path fill=\"#76aad0\" d=\"M16.4 6.1h4.3v4.3h-4.3V6.1\"/><path fill=\"#0d1929\" d=\"M10.3 10.4H6V6.1h4.3v4.3\"/><path fill=\"#213156\" d=\"M6 11.2h4.3v4.3H6v-4.3z\"/><path fill=\"#76aad0\" d=\"M6 16.4h4.3v4.3H6v-4.3z\"/><path fill=\"#213156\" d=\"M11.2 6.1h4.3v4.3h-4.3V6.1\"/><g fill=\"#76aad0\"><path d=\"M11.2 11.2h4.3v4.3h-4.3v-4.3zM11.2 21.6h4.3v4.3h-4.3v-4.3M16.4 16.4h4.3v4.3h-4.3v-4.3\"/></g><path fill=\"#213156\" d=\"M16.4 21.6h4.3v4.3h-4.3v-4.3\"/><path fill=\"#76aad0\" d=\"M21.6 11.2h4.3v4.3h-4.3v-4.3\"/><path fill=\"#213156\" d=\"M21.6 16.4h4.3v4.3h-4.3v-4.3\"/><path fill=\"#0d1929\" d=\"M21.6 21.6h4.3v4.3h-4.3v-4.3\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-linkedin": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"6\" y=\"6\" width=\"20\" height=\"21\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"6\" y=\"6\" width=\"20\" height=\"21\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#0077b5\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M6 13h4v14H6V13m2.5-7C9.9 6 11 7.1 11 8.5S9.9 11 8.5 11 6 9.9 6 8.5 7.1 6 8.5 6m4.5 7.3h4v1.9h.1C17.6 14.1 19 13 21 13c4.2 0 5 2.8 5 6.5V27h-4.2v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V27H13V13.3\"/></svg>",
		"source-lithium": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"9\" y=\"7\" width=\"15\" height=\"18\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"9\" y=\"7\" width=\"15\" height=\"18\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#572b71\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M18.5 25h-3.4C11.7 25 9 22.4 9 19.2V8h1.7c.9 0 1.7.7 1.7 1.6v9.5c0 1.4 1.2 2.6 2.7 2.6h1.6c1 0 1.8.8 1.8 1.7V25m3.6-18c-1.1 0-1.9.8-1.9 1.8s.9 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8S23.1 7 22.1 7m0 4.9h-1.7v11.5c0 .9.8 1.6 1.7 1.6h1.7V13.5c0-.9-.8-1.6-1.7-1.6\"/></svg>",
		"source-litmos": "<svg viewbox=\"0 0 32 32\"><path fill=\"#99ca3b\" d=\"M16 27.5c6.4 0 11.5-5.1 11.5-11.5S22.4 4.5 16 4.5 4.5 9.6 4.5 16c0 6.3 5.1 11.5 11.5 11.5\"/><g fill=\"#fff\"><path d=\"M21.6 19.9s-3.4.1-3.8-.1c-1.5-.9-1.8-3.2-1.8-3.2h-.4s-.3 2.6-1.8 3.3c-.6.2-3.6 0-3.6 0l-.2-.1-.2.1.3 3.1s1.2 2 5.7 2 5.8-2.1 5.8-2.1l.3-3.1-.3.1\"/><path d=\"M10.4 19.3h2.9c1.2-.4 1.4-1.9 1.4-1.9.3-1.9-.5-1.8-.5-1.8-2.4-.1-3.7.2-4.3.3-.3.1-.3.3-.2 1.7-.1.5.2 1.7.7 1.7m2.5-2.6c.4 0 .7.3.7.7s-.3.7-.7.7c-.4 0-.7-.3-.7-.7s.4-.7.7-.7\"/><path d=\"M23.4 16.1c.1-.9-1.5-1-1.5-1-.5-3-3.8-4.3-3.8-4.3C16.7 10 17 7.6 17 7.6l-.2-.1c-1.4 1.5-.5 3.2-.5 3.2l-.2.1c-1.5-1.2-1.3-3.4-1.3-3.4h-.3c-.8.7-.5 3.8-.5 3.8h-.1c-1-.8-1.2-1.9-1.2-1.9l-.3.1c-.4 1.1 0 2 0 2s-2.4 1.6-3 3.8c-.7.3-.8.1-1.2.4-.3.3-.2 1-.2 1 .1.4.8.4.8.4l.1-.2c-.1-.3-.5 0-.5-.5s.5-.7 2.4-1 3.8-.2 3.8-.2l.6.6h1l.7-.6c3 0 3.5.2 3.5.2 1.2.2 2.6.3 2.6.9 0 .6-.5.5-.5.5l.1.3c.9-.3.8-.9.8-.9\"/><path d=\"M21.8 15.9c-.6-.2-1.9-.4-4.2-.3 0 0-.9-.3-.5 1.8 0 0 .2 1.5 1.4 1.9h2.8c.6 0 .6-.8.7-1.6-.1-.6.1-1.7-.2-1.8M18.7 18c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.4.7-.7.7\"/></g><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-mail": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M24 10v13H8V10h16m0-2H8c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z\"/><path d=\"M22 14v7H10v-7H9v7.1c0 .6.2.9 1 .9h12c.8 0 1-.3 1-.9V14\"/><path d=\"M16 15.7L10.6 11H9l7 6 7-6h-1.5z\"/></g></svg>",
		"source-microsoft-dynamics": "<svg viewbox=\"0 0 32 32\"><path d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\" fill=\"#bcc3ca\"/><g fill=\"#1c75bc\"><path d=\"M20.8 10.2c-1.1 2.7-2.8 5.2-4.5 7v4.2l-.2.1h-.3c-5.9.4-9.4 3.3-9.4 3.3 6.6-4.1 14.1-2.2 14.1-2.2l.6-.1V10.3l-.3-.1\"/><path d=\"M25.2 13.1s-.6.8-2.6 2.5c-.5.4-.7.6-1.1 1V23l-.4.1s-1.7-.5-4.5-.6c-2.8-.1-6.9.7-10.1 2.4h.1s8.5-3.3 18.5.1l.4-.1V13.3l-.3-.2\"/><path d=\"M15.9 7.2l-.5-.1c0 .4-.5 3.4-2.7 7.6-1.3 2.5-3.3 5.6-6.2 8.7v1.4s3.2-3 8.9-3.6h.2l.3-.1V7.2\"/></g></svg>",
		"source-microsoftactivedirectory": "<svg viewbox=\"0 0 32 32\"><g fill=\"#1c6db5\"><path d=\"M24.1 9.1H26v4h-1.9zM7 6v20h16.5V6H7m8.2 5.1c1.4 0 2.5 1 2.5 2.3s-1.1 2.3-2.5 2.3-2.5-1-2.5-2.3c0-1.2 1.1-2.3 2.5-2.3m5.1 9.2H10.2v-1.7s-.1-2.3 5-2.3 5.1 2.3 5.1 2.3v1.7M24.1 14.4H26v4h-1.9zM24.1 19.7H26v4h-1.9z\"/></g><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-notes": "<svg viewbox=\"0 0 32 32\"><path fill=\"#f7da67\" d=\"M30 32H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2\"/><g fill=\"#fff\"><circle cx=\"10.6\" cy=\"9.4\" r=\"2\"/><circle cx=\"16\" cy=\"9.4\" r=\"2\"/><circle cx=\"21.4\" cy=\"9.4\" r=\"2\"/></g><g fill=\"#ff6b0d\"><circle cx=\"10.6\" cy=\"9.1\" r=\"2\"/><circle cx=\"16\" cy=\"9.1\" r=\"2\"/><circle cx=\"21.4\" cy=\"9.1\" r=\"2\"/></g><g fill=\"#fff\"><path d=\"M18.5 23.1c-.2-2.8-.4-5.6-.5-8.4-.1-1-.8-1.8-1.7-1.8h-.4c-.9 0-1.6.8-1.7 1.8-.2 2.8-.4 5.6-.5 8.4-.1 1 .9 1.8 2.1 1.8h.6c1.3.1 2.2-.8 2.1-1.8M10.8 12.6c-1.1-.7-3.9-1.2-5.2-1.6-.6-.2-1.2.1-1.5.7l-.1.4c-.3.7-.1 1.4.5 1.6 1 .4 2.1.7 3.1 1.1-.5 2.4-1 4.9-1.5 7.3-.2 1 .6 1.9 1.9 2.1l.6.1c1.2.2 2.3-.5 2.4-1.5l.6-8.4c0-.8-.3-1.4-.8-1.8M21.2 12.7c1.1-.7 3.9-1.2 5.2-1.6.6-.2 1.2.1 1.5.7l.1.3c.3.7.1 1.4-.5 1.6-1 .4-2.1.7-3.1 1.1.5 2.4 1 4.9 1.5 7.3.2 1-.6 1.9-1.9 2.1l-.6.1c-1.2.2-2.3-.5-2.4-1.5l-.6-8.4c0-.6.3-1.3.8-1.7\"/></g><g fill=\"#ff7009\"><path d=\"M18.5 22.8c-.2-2.8-.4-5.6-.5-8.4-.1-1-.8-1.8-1.7-1.8h-.4c-.9 0-1.6.8-1.7 1.8-.2 2.8-.4 5.6-.5 8.4-.1 1 .9 1.8 2.1 1.8h.6c1.3 0 2.2-.8 2.1-1.8M10.8 12.2c-1.1-.7-3.9-1.2-5.2-1.6-.6-.2-1.2.1-1.5.7l-.1.5c-.3.7-.1 1.4.5 1.6 1 .4 2.1.7 3.1 1.1-.5 2.4-1 4.9-1.5 7.3-.2 1 .6 1.9 1.9 2.1l.6.1c1.2.2 2.3-.5 2.4-1.5l.6-8.4c0-.8-.3-1.5-.8-1.9M21.2 12.4c1.1-.7 3.9-1.2 5.2-1.6.6-.2 1.2.1 1.5.7l.1.3c.3.7.1 1.4-.5 1.6-1 .4-2.1.7-3.1 1.1.5 2.4 1 4.9 1.5 7.3.2 1-.6 1.9-1.9 2.1l-.6.1c-1.2.2-2.3-.5-2.4-1.5l-.6-8.4c0-.7.3-1.4.8-1.7\"/></g></svg>",
		"source-opentext": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4\" y=\"10\" width=\"23.9\" height=\"12.9\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4\" y=\"10\" width=\"23.9\" height=\"12.9\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#006fa8\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M9.7 22.9c3.1 0 5.7-2.5 5.7-6.4 0-4.3-2.8-6.5-5.7-6.5C6.9 10 4 12.2 4 16.5c0 4 2.6 6.4 5.7 6.4m-.1-.6c-1.9 0-3.7-1.7-3.7-5.8 0-4.3 1.9-5.8 3.7-5.8s3.7 1.5 3.7 5.8c0 4.1-1.8 5.8-3.7 5.8zm15.5.3h-5.5v-.3c1.7-.1 1.8-.5 1.9-2V11h-1.3c-2.1 0-2.6.4-3 2.6h-.5l.1-3.4h11l.1 3.4h-.4c-.4-2.2-.9-2.6-3-2.6h-1.2v9.6c0 1.4.2 1.8 1.8 1.8v.2\"/></svg>",
		"source-oracle_knowledge": "<svg width=\"32\" height=\"32\" viewbox=\"0 0 32 32\"><defs><rect width=\"32\" height=\"32\" rx=\"2\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask fill=\"#fff\"><use xlink:href=\"#a\"/></mask><use fill=\"#DB3C2E\" xlink:href=\"#a\"/><path d=\"M18.458 22.386A9.98 9.98 0 0 1 15 23C9.477 23 5 18.523 5 13S9.477 3 15 3s10 4.477 10 10a9.974 9.974 0 0 1-3.239 7.368l3.76 7.98-1.338.897-5.725-6.859z\" stroke=\"#FFF\" stroke-width=\"3\" mask=\"url(#b)\"/><path fill=\"#FFBDBD\" mask=\"url(#b)\" d=\"M12 8h3v3h-3z\"/><path d=\"M29 0L8 32h24V0h-3z\" opacity=\".102\" fill=\"#000\" mask=\"url(#b)\"/></g></svg>",
		"source-oracle_ucm": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4\" y=\"8\" width=\"23.9\" height=\"16\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4\" y=\"8\" width=\"23.9\" height=\"16\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#db3c2e\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M21.2 21.4H10.8C8 21.4 6.4 19 6.4 16s1.6-5.4 4.3-5.4h10.4c2.7 0 4.3 2.4 4.3 5.4s-1.4 5.4-4.2 5.4m0-13.4H10.8C6.7 8 4 11.6 4 16s2.7 8 6.7 8h10.4c4.1 0 6.7-3.6 6.7-8s-2.5-8-6.6-8\"/></svg>",
		"source-outlook": "<svg viewbox=\"0 0 32 32\"><g fill=\"#1c6db5\"><path d=\"M19.1 9.4v4.1l1.4.9h.2l6.2-4.2c0-.5-.5-.8-.7-.8h-7.1\"/><path d=\"M19.1 15l1.3.9c.2.1.4 0 .4 0l6.1-4v7.6c0 .8-.5 1.2-1.1 1.2h-6.7V15M12.3 13.1c-.4 0-.8.2-1.1.6-.3.4-.4 1-.4 1.7s.1 1.3.4 1.7c.3.4.6.6 1 .6s.8-.2 1.1-.6c.3-.4.4-.9.4-1.6s-.1-1.3-.4-1.7c-.2-.5-.5-.7-1-.7\"/><path d=\"M14.3 18.1c-.5.7-1.2 1-2 1s-1.5-.3-2-1-.8-1.5-.8-2.6.3-2 .8-2.7 1.2-1 2.1-1c.8 0 1.5.3 2 1s.8 1.5.8 2.6c-.1 1.1-.4 2-.9 2.7M6.1 7.3v16.1L18.4 26V5L6.1 7.3\"/></g><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-productalert": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#fff\" d=\"M16 10c3.8 0 7 2 7 4.4.1 2.5-1.3 4.6-4.2 6.3-1.2.7-2.5 1.2-3.4 1.6v-3.5l-1.6-.3C11 17.9 9 16.2 9 14.4 9 12 12.2 10 16 10m0-2c-5 0-9 2.8-9 6.4 0 2.9 2.7 5.3 6.4 6.1V24c0 .5.3.8.7.8h.2S25.2 22.4 25 14.5c0-3.7-4-6.5-9-6.5z\"/><circle fill=\"#d0011b\" cx=\"9\" cy=\"9\" r=\"3\"/></svg>",
		"source-queue": "<svg viewbox=\"0 0 32 32\"><path fill=\"#004990\" d=\"M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2\"/><g fill=\"#fff\"><path d=\"M6 14.5l5-3.5-5-3.5v7M14.5 12.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5M19.5 12.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5M12.5 22.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5M7.5 22.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5S6 20.2 6 21s.7 1.5 1.5 1.5M21 24.5l5-3.5-5-3.5v7M24.5 12.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5M17.5 22.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5\"/></g></svg>",
		"source-reviewboard": "<svg viewbox=\"0 0 32 32\"><defs><lineargradient gradientunits=\"userSpaceOnUse\" y1=\"-809.72\" x2=\"0\" y2=\"-808.72\" gradienttransform=\"matrix(10 0 0 2 5147 1624.45)\"><stop stop-color=\"#ebdb3d\"/><stop offset=\"1\" stop-color=\"#f1e03e\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" y1=\"-809.74\" x2=\"0\" y2=\"-808.75\" gradienttransform=\"matrix(10 0 0 3 5147 2437.23)\"><stop stop-color=\"#f3e23d\"/><stop offset=\".485\" stop-color=\"#ebdb3d\"/><stop offset=\"1\" stop-color=\"#f9e73d\"/></lineargradient><lineargradient gradientunits=\"userSpaceOnUse\" y1=\"-809.75\" x2=\"0\" y2=\"-808.75\" gradienttransform=\"matrix(14 0 0 3 7423 2444.23)\"><stop stop-color=\"#f5e43d\"/><stop offset=\".485\" stop-color=\"#ebdb3d\"/><stop offset=\"1\" stop-color=\"#f7e53c\"/></lineargradient><radialgradient cx=\"2.975\" cy=\"2.579\" r=\"2.677\" gradientunits=\"userSpaceOnUse\"><stop stop-color=\"#7e9fce\"/><stop offset=\"1\" stop-color=\"#3163a6\"/></radialgradient></defs><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#ebb554\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g transform=\"translate(4 4)\"><path fill=\"#fdeb3c\" stroke=\"#a58419\" d=\"M2 18.9V2h20v20H2c-.6 0-1-.4-1-1v-.5c0-.7.4-1.3 1-1.6z\"/><path fill=\"#9e9a56\" d=\"M4 6l3 3 1-1-2-4-2 2\"/><circle fill=\"url(#a)\" stroke=\"#365e94\" cx=\"4\" cy=\"4\" r=\"4\"/><path fill=\"url(#b)\" d=\"M9 5h10v2H9z\"/><path fill=\"url(#c)\" d=\"M9 8h10v3H9z\"/><path fill=\"#ebdb3d\" d=\"M5 12h14v2H5z\"/><path fill=\"url(#d)\" d=\"M5 15h14v3H5z\"/></g></svg>",
		"source-rss": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"7\" y=\"7\" width=\"18\" height=\"18\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"7\" y=\"7\" width=\"18\" height=\"18\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#ff6501\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M11.1 20.9c.4.4.7 1 .7 1.7s-.3 1.2-.7 1.7a2.413 2.413 0 0 1-3.4 0c-.4-.4-.7-1-.7-1.7s.3-1.2.7-1.7a2.413 2.413 0 0 1 3.4 0M7 13.1v3.4c2.2 0 4.4.9 5.9 2.5 1.6 1.6 2.5 3.7 2.5 5.9h3.4c0-3.3-1.3-6.2-3.5-8.4-2.1-2-5-3.4-8.3-3.4M7 7v3.4c8 0 14.5 6.5 14.5 14.5H25c0-4.9-2-9.4-5.3-12.7C16.5 9 12 7 7 7\"/></svg>",
		"source-salesforce": "<svg viewbox=\"0 0 32 32\"><path fill=\"#009ddc\" d=\"M22.5 10.6c-.7 0-1.4.2-2 .4-.7-1.3-2-2.1-3.6-2.1-1.1 0-2.2.5-2.9 1.3-.8-1.1-2.1-1.8-3.6-1.8-2.5 0-4.5 2-4.5 4.5 0 .6.1 1.2.4 1.8-1.1.7-1.9 1.9-1.9 3.4 0 2.2 1.7 3.9 3.8 3.9.3 0 .5 0 .8-.1.6 1.6 2.1 2.7 3.9 2.7 1.7 0 3.2-1 3.8-2.5.5.2 1 .4 1.6.4 1.4 0 2.5-.8 3.2-1.9.3.1.6.1 1 .1 2.7 0 5-2.3 5-5.1s-2.2-5-5-5\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-salesforce_content": "<svg viewbox=\"0 0 32 32\"><path fill=\"#009ddc\" d=\"M22.5 10.6c-.7 0-1.4.2-2 .4-.7-1.3-2-2.1-3.6-2.1-1.1 0-2.2.5-2.9 1.3-.8-1.1-2.1-1.8-3.6-1.8-2.5 0-4.5 2-4.5 4.5 0 .6.1 1.2.4 1.8-1.1.7-1.9 1.9-1.9 3.4 0 2.2 1.7 3.9 3.8 3.9.3 0 .5 0 .8-.1.6 1.6 2.1 2.7 3.9 2.7 1.7 0 3.2-1 3.8-2.5.5.2 1 .4 1.6.4 1.4 0 2.5-.8 3.2-1.9.3.1.6.1 1 .1 2.7 0 5-2.3 5-5.1s-2.2-5-5-5\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-sharepoint": "<svg viewbox=\"0 0 32 32\"><path fill=\"#1c6db5\" d=\"M24.1 14h-.4c-.5-1.3-1.4-2.4-2.6-3v-.3c0-1.1-.9-2-1.9-2-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4.6 0 1.2-.3 1.6-.9 1 .5 1.8 1.4 2.1 2.5-.4.4-.7.9-.7 1.6 0 .6.3 1.2.7 1.6-.4 1.1-1.2 2-2.2 2.6-.3-.5-.9-.9-1.6-.9-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4 1.1 0 1.9-.9 1.9-2v-.3c1.2-.6 2.2-1.7 2.6-3.1h.4c1.1 0 1.9-.9 1.9-2 .1-.9-.7-1.8-1.8-1.8m-11.8 5.9c-.9.7-2.1.4-3 0v-1.8c.6.5 1.5 1.2 2.2.5.6-1-.5-1.6-1.2-2.1-1.4-.8-1.4-3.2-.1-4.2.8-.5 1.7-.4 2.6-.2v1.7c-.7-.2-1.6-.7-2.2.1-.4 1.1.9 1.6 1.5 2.1 1.2.8 1.3 3 .2 3.9M6.1 8.2V24l11 2V6l-11 2.2\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-sharepoint_legacy": "<svg viewbox=\"0 0 32 32\"><path fill=\"#1c6db5\" d=\"M24.1 14h-.4c-.5-1.3-1.4-2.4-2.6-3v-.3c0-1.1-.9-2-1.9-2-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4.6 0 1.2-.3 1.6-.9 1 .5 1.8 1.4 2.1 2.5-.4.4-.7.9-.7 1.6 0 .6.3 1.2.7 1.6-.4 1.1-1.2 2-2.2 2.6-.3-.5-.9-.9-1.6-.9-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4 1.1 0 1.9-.9 1.9-2v-.3c1.2-.6 2.2-1.7 2.6-3.1h.4c1.1 0 1.9-.9 1.9-2 .1-.9-.7-1.8-1.8-1.8m-11.8 5.9c-.9.7-2.1.4-3 0v-1.8c.6.5 1.5 1.2 2.2.5.6-1-.5-1.6-1.2-2.1-1.4-.8-1.4-3.2-.1-4.2.8-.5 1.7-.4 2.6-.2v1.7c-.7-.2-1.6-.7-2.2.1-.4 1.1.9 1.6 1.5 2.1 1.2.8 1.3 3 .2 3.9M6.1 8.2V24l11 2V6l-11 2.2\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-sharepoint_online": "<svg viewbox=\"0 0 32 32\"><path fill=\"#1c6db5\" d=\"M24.1 14h-.4c-.5-1.3-1.4-2.4-2.6-3v-.3c0-1.1-.9-2-1.9-2-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4.6 0 1.2-.3 1.6-.9 1 .5 1.8 1.4 2.1 2.5-.4.4-.7.9-.7 1.6 0 .6.3 1.2.7 1.6-.4 1.1-1.2 2-2.2 2.6-.3-.5-.9-.9-1.6-.9-.4 0-.9.2-1.2.4v3.2c.3.3.7.4 1.2.4 1.1 0 1.9-.9 1.9-2v-.3c1.2-.6 2.2-1.7 2.6-3.1h.4c1.1 0 1.9-.9 1.9-2 .1-.9-.7-1.8-1.8-1.8m-11.8 5.9c-.9.7-2.1.4-3 0v-1.8c.6.5 1.5 1.2 2.2.5.6-1-.5-1.6-1.2-2.1-1.4-.8-1.4-3.2-.1-4.2.8-.5 1.7-.4 2.6-.2v1.7c-.7-.2-1.6-.7-2.2.1-.4 1.1.9 1.6 1.5 2.1 1.2.8 1.3 3 .2 3.9M6.1 8.2V24l11 2V6l-11 2.2\"/><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-sitecore": "<svg viewbox=\"0 0 32 32\"><g fill=\"#e53227\"><path d=\"M0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2zm16 25.6C9.7 27.6 4.5 22.4 4.5 16S9.7 4.4 16 4.4 27.5 9.6 27.5 16 22.3 27.6 16 27.6z\"/><path d=\"M16.1 7.5c-4.6 0-8.4 3.8-8.4 8.4 0 4.7 3.8 8.4 8.4 8.4s8.4-3.8 8.4-8.4-3.7-8.4-8.4-8.4m-1 16.5c-5.4-.6-6.8-6-6.8-6 1.1 2.1 3.1 4.5 7.1 4.6s6.2-3.6 6.2-3.6l1.4.9c.1 0-2.6 4.7-7.9 4.1m8.1-4.3l-1.3-.8-.2-.1-.1.2s-2.2 3.7-6.1 3.5c-1.7-.1-3.1-.5-4.3-1.4-.4-.4-.6-.7-.6-.7 1.9 1.5 4.9 1.6 6.8.7 4.4-2.1 4.2-5.8 4.2-5.8h2.5c0 .1.3 2.4-.9 4.4m.9-4.7H21.3v.2c0 .1.1 3.9-3.7 5.6-1.9.9-3.3.6-3.5.5 0 0 1.1 0 2.5-.7 1.2-.5 2.4-1.8 3-2.9 1.7-3.3-.2-4.7-.2-4.7l2.9-1.8c.1 0 1.6 1.8 1.8 3.8\"/></g></svg>",
		"source-sitemap": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M26 5H6c-.6 0-1 .4-1 1v21h22V6c0-.6-.4-1-1-1m0 21H6V11h20v15m0-16H6V8h20v2\"/><path d=\"M8 19v1h1v-1H8zm6 0v1h1v-1h-1zm6 0v1h1v-1h-1zM8 17v2h1v-2H8zM9 18h12v1H9zM8 13h4v4H8zM8 20h4v4H8zM14 20h4v4h-4zM20 20h4v4h-4z\"/></g></svg>",
		"source-symantec_enterprise_vault": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#f6f6f6\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#ffb819\" d=\"M15.9 27c-5.5 0-10-4.3-10-9.5 0-5.3 4.5-9.5 10-9.5s10 4.3 10 9.5-4.5 9.5-10 9.5m0-16c-1.8 0-3.5.6-4.8 1.9-1.3 1.2-2 2.9-2 4.6s.7 3.4 2 4.6 3 1.9 4.8 1.9c1.8 0 3.5-.7 4.8-1.9 1.3-1.2 2-2.9 2-4.6s-.7-3.4-2-4.6c-1.3-1.3-3-1.9-4.8-1.9\"/><g fill=\"#ffb819\"><path d=\"M26.938 6h.8v.7h-.8zM26.938 5h.8v.7h-.8zM24.838 7h.7v.7h-.7z\"/></g><g fill=\"#231f20\"><path d=\"M22.738 9h.7v.7h-.7zM24.838 8h.8v.7h-.8zM22.738 8h.7v.7h-.7zM24.838 9h.7v.7h-.7zM25.938 6h.8v.7h-.8z\"/><path d=\"M24.838 6h1.4v.7h-1.4zM23.838 7h.7v1.4h-.7zM23.838 9.3v.7h-.7v-.7h-1.2v.5h-.7v.6h.7v.7h-.7v-.6h-.7v1.1h-.8v.7h-.5v.7h-.5c-.6.8-2.1 3.4-2.5 4.5-1.7-2.2-3-3-4-3.3-.5-.2-1.1.4-.2 1.3 2.1 2.2 2.7 4 3.3 5.4.3.8 1.8.9 2.1.1.6-1.6 1.6-3.4 2.6-4.9v-.8h.6v-.8h.6v-.8h.7v-.8h-.7v-.7h.7v.7h.7v-.7h.6v-.8h.7v-.6h.6V9.3h-.7\"/></g><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/></svg>",
		"source-target_process_2": "<svg viewbox=\"0 0 32 32\"><path fill=\"#bcc3ca\" d=\"M30 2v28H2V2h28m0-2H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z\"/><path fill=\"#1a1a1a\" d=\"M23.1 10.3l-3.2 1.2.5-3.5-2.6-2.2L14.6 7l-.6 3.4-2.6-2.2-3.3 1.2-.6 3.4 2.6 2.2-3.2 1.2-.6 3.4 2.6 2.2 3.2-1.2-.5 3.4 2.6 2.2 3.2-1.2.6-3.4 2.6 2.2 3.2-1.2.6-3.4-2.5-2.2 3.2-1.2.6-3.4-2.6-2.1m-7.7 9.1l3.2-1.2-.6 3.4-2.6-2.2m1.2-6.8l-3.2 1.2.6-3.4 2.6 2.2M10.1 15l3.2-1.2-.6 3.4-2.6-2.2m5.3 4.4l-3.2 1.2.6-3.4 2.6 2.2m-2.6-2.2l.6-3.4 3.2-1.2 2.6 2.2-.6 3.4-3.2 1.2-2.6-2.2m6.4-2.4l2.6 2.2-3.2 1.2.6-3.4m-2.6-2.2l3.2-1.2-.6 3.4-2.6-2.2m-2-5.6l3.2-1.2L20.4 8l-.6 3.4-3.2 1.2-2.6-2.2.6-3.4m-7.1 5.7l.6-3.4 3.2-1.2 2.6 2.2-.6 3.4-3.2 1.3-2.6-2.3m1.4 9l-2.6-2.2.6-3.4 3.2-1.2 2.6 2.2-.6 3.4-3.2 1.2m8.5 3.3l-3.2 1.2-2.6-2.2.6-3.4 3.2-1.2 2.6 2.2-.6 3.4m7.1-5.8l-.6 3.4-3.2 1.2-2.7-2.2.6-3.4 3.2-1.2 2.7 2.2m.6-3.3L21.9 17l-2.6-2.2.6-3.4 3.2-1.2 2.6 2.2-.6 3.5\"/><path fill=\"#649791\" d=\"M25.1 13.1l-7.9-6.6c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l7.9 6.6c.4.3.4.9.1 1.2-.2.2-.4.3-.7.3-.1 0-.3 0-.5-.2\"/><path fill=\"#efc519\" d=\"M14.1 27c-.4 0-.7-.2-.8-.6-.2-.5.1-1 .5-1.1l9.8-3.5c.5-.2 1 .1 1.1.5.2.5-.1 1-.5 1.1L14.4 27h-.3\"/><path fill=\"#a21c3d\" d=\"M6.3 20.5h-.2c-.5-.1-.8-.5-.7-1L7.2 9.2c.1-.5.5-.8 1-.7.5.1.8.5.8 1L7.2 19.8c-.1.4-.5.7-.9.7\"/><path fill=\"#068cba\" d=\"M10.7 12.5h-.2c-.5-.1-.8-.5-.7-1l.7-3.5c.1-.5.5-.8 1-.7.5.1.8.5.7 1l-.6 3.4c-.1.5-.5.8-.9.8\"/><path fill=\"#531210\" d=\"M8.9 22.6h-.2c-.5-.1-.8-.5-.7-1l.6-3.4c.1-.5.5-.8 1-.7.5.1.8.5.7 1l-.6 3.4c0 .4-.3.7-.8.7\"/><path fill=\"#509f4e\" d=\"M17.2 10.1c-.2 0-.4-.1-.6-.2L14 7.7c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l2.6 2.2c.4.3.4.9.1 1.2-.1.2-.4.3-.6.3\"/><path fill=\"#106e66\" d=\"M25.1 16.7c-.2 0-.4-.1-.6-.2l-2.6-2.2c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l2.6 2.2c.4.3.4.9.1 1.2-.1.2-.3.3-.6.3\"/><path fill=\"#068cba\" d=\"M21.3 21.3c-.4 0-.7-.2-.8-.6-.2-.5.1-1 .5-1.1l3.2-1.2c.5-.2 1 .1 1.1.5.2.5-.1 1-.5 1.1l-3.2 1.2c-.1.1-.2.1-.3.1\"/><path fill=\"#92beaf\" d=\"M15.4 20.3c-.2 0-.4-.1-.6-.2l-2.6-2.2c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l2.6 2.2c.4.3.4.9.1 1.2-.1.2-.3.3-.6.3\"/><path fill=\"#4b635b\" d=\"M18.6 19.1h-.2c-.5-.1-.8-.5-.7-1l.6-3.4c.1-.5.5-.8 1-.7.5.1.8.5.7 1l-.6 3.4c0 .4-.3.7-.8.7\"/><path fill=\"#b9bc63\" d=\"M13.4 14.7c-.4 0-.7-.2-.8-.6-.2-.5.1-1 .5-1.1l3.2-1.2c.5-.2 1 .1 1.1.5.2.5-.1 1-.5 1.1l-3.2 1.2c-.1 0-.2.1-.3.1\"/><path fill=\"#e38b25\" d=\"M11.6 24.8c-.4 0-.7-.2-.8-.6-.2-.5.1-1 .5-1.1l3.2-1.2c.5-.2 1 .1 1.1.5.2.5-.1 1-.5 1.1l-3.2 1.2c-.1.1-.2.1-.3.1\"/></svg>",
		"source-twitter": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"6\" y=\"7\" width=\"21.9\" height=\"19\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"6\" y=\"7\" width=\"21.9\" height=\"19\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#00b0ed\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M12.9 26c-2.5 0-4.9-.8-6.9-2.2.4 0 .7.1 1.1.1 2.1 0 4.1-.8 5.6-2-2 0-3.6-1.4-4.2-3.3.3.1.6.1.8.1.4 0 .8-.1 1.2-.2-2.1-.4-3.6-2.4-3.6-4.7v-.1c.6.4 1.3.6 2 .6-1.2-.9-2-2.3-2-4 0-.9.2-1.7.6-2.4 2.2 2.9 5.5 4.8 9.3 5-.1-.4-.1-.7-.1-1.1 0-2.6 2-4.8 4.5-4.8 1.3 0 2.5.6 3.3 1.5 1-.2 2-.6 2.9-1.2-.3 1.1-1.1 2.1-2 2.6.9-.1 1.8-.4 2.6-.8-.6 1-1.4 1.8-2.2 2.5v.6C25.7 18.7 21.2 26 12.9 26\"/></svg>",
		"source-web": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M26 5H6c-.6 0-1 .4-1 1v21h22V6c0-.6-.4-1-1-1m0 21H6V11h20v15m0-16H6V8h20v2\"/><path d=\"M22 15c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1M8 13h11v3H8zM8 18h6v6H8z\"/></g></svg>",
		"source-web2": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#004990\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M26 5H6c-.6 0-1 .4-1 1v21h22V6c0-.6-.4-1-1-1m0 21H6V11h20v15m0-16H6V8h20v2\"/><path d=\"M22 15c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1M8 13h11v3H8zM8 18h6v6H8z\"/></g></svg>",
		"source-webscraper": "<svg viewbox=\"0 0 32 32\"><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#fff\"/><path d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" fill=\"#004990\"/><g fill=\"#fff\"><path d=\"M7 6c-.6 0-1 .4-1 1v1h19v17h1V7c0-.5-.5-1-1-1H7\"/><path d=\"M9 3c-.6 0-1 .4-1 1v1h19v17h1V4c0-.5-.5-1-1-1H9\"/></g><g fill=\"#fff\"><path d=\"M23 9H5c-.6 0-1 .5-1 1v18h20V10c0-.6-.5-1-1-1m0 18H5V14h18v13m0-14H5v-2h18v2\"/><path d=\"M7 16h10v3H7zM7 21h4v4H7z\"/></g></svg>",
		"source-websphere_wcm": "<svg viewbox=\"0 0 32 32\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path fill=\"#7262a0\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><g fill=\"#fff\"><path d=\"M16 4c-2.8 0-5 5.4-5 12s2.2 12 5 12 5-5.4 5-12-2.2-12-5-12m0 22c-1.7 0-3-4.5-3-10s1.3-10 3-10 3 4.5 3 10-1.3 10-3 10\"/><path d=\"M16 11c-6.6 0-12 2.2-12 5s5.4 5 12 5 12-2.2 12-5-5.4-5-12-5m0 8c-5.5 0-10-1.3-10-3s4.5-3 10-3 10 1.3 10 3-4.5 3-10 3\"/></g><path fill=\"#fff\" d=\"M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4m0 22c-5.5 0-10-4.5-10-10S10.5 6 16 6s10 4.5 10 10-4.5 10-10 10\"/></svg>",
		"source-windchill": "<svg viewbox=\"0 0 32 32\"><path fill=\"#00586f\" d=\"M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M11.9 4.1h8.5v.7H18c-.6 0-.9.1-.9.8v5.6c-.1 2.1.5 2.2 1.4 2.3v.4c-1.2 0-3.1.2-3.1-2.6V5.6c0-.7-.4-.8-1-.8H12v-.7zm-4 6.6c-.7 0-1.1-.2-1.5-.4l.2-.3c.3.2.6.2 1 .2 1.6 0 1.8-1.5 1.8-2.8C9.4 6 9 4.7 7.6 4.5c-.6 0-1.1.1-1.4.7C5.9 5.7 6 6.4 6 7v6.7H4.2V5.3c0-.7-.2-.9-1.1-.9v-.3h4.6c2.4 0 3.4 1.5 3.4 3.4.1 1.7-1.4 3.2-3.2 3.2m12.5 15.2c-1.3 1.8-3.1 2.7-4.1 1.8-.5-.5-.7-1.3-.6-2.3-.1.9.1 1.6.7 2 .9.5 2.6-.3 3.6-1.9 1-1.6.9-3.4 0-3.9-.4-.2-1-.2-1.6.1.3.8.3 1.6-.1 2.1-.3.4-.8.7-1.4.8.5-.1.8-.3 1-.6.4-.5.3-1.3.1-2-.5.3-1 .8-1.4 1.5-.1.2-.2.3-.3.5.2-.5.3-.7.6-1.1.3-.4.6-.8 1-1.1-.3-.7-.9-1.5-1.7-2.1-1.7-1.3-3.7-1.5-4.4-.5-.7 1 0 2.9 1.6 4.3.1-.1.3-.1.4-.2 1.2-.5 2.2-.1 2.4.8v.1c-.1-.7-1-1-1.9-.6-.2.1-.3.1-.4.2.6.4 1.3.8 1.9.9-.7-.1-1.4-.4-2-.8-.6.4-1 1.1-.9 1.7.1.7 1 1 1.9.6.5-.2.9-.5 1.2-.9-.3.5-.9 1-1.6 1.2-1.2.5-2.2.1-2.3-.8-.1-.7.4-1.6 1.3-2.1-.1-.1-.2-.1-.3-.2-2-1.5-3-3.7-2.1-5 .9-1.3 3.3-1 5.3.5 1 .7 1.7 1.7 2.1 2.5 1-.7 2.1-.9 2.7-.3.9.8.6 3-.7 4.8m4.8-12.1c-2.3 0-4.1-1.9-4.1-4.6 0-3.6 1.7-5.1 4.6-5.1h3v2.1h-.4c-.2-1.4-1.7-1.7-2.7-1.7C23.2 4.5 23 7 23 8.9c0 2 .4 4.1 2.8 4.3 1 .1 2-.5 2.7-1.3l.3.3c-.8 1-2.2 1.6-3.6 1.6\"/></svg>",
		"source-yahoo": "<svg viewbox=\"0 0 32 32\"><path fill=\"#4801b9\" d=\"M30 32H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2\"/><g fill=\"#390094\"><path d=\"M16 25.3C8.5 25.3 1 28 1 28v3h30v-3s-7.5-2.7-15-2.7M16 6.7C8.5 6.7 1 4 1 4V1h30v3s-7.5 2.7-15 2.7z\"/></g><path fill=\"#fff\" d=\"M14.3 28l.2-10.2L6 4s1.7.5 3.2 0c.4.7 6.7 10.6 6.7 10.6L22.6 4s1.7.4 3.4 0c-.5.6-8.6 13.8-8.6 13.8l.2 10.2s-1.6-.3-3.3 0\"/></svg>",
		"source-yammer": "<svg viewbox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\"><defs><filter filterunits=\"userSpaceOnUse\" x=\"4\" y=\"5\" width=\"23.9\" height=\"22.8\"><fecolormatrix values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\"/></filter><mask maskunits=\"userSpaceOnUse\" x=\"4\" y=\"5\" width=\"23.9\" height=\"22.8\"><path fill=\"#fff\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\" filter=\"url(#a)\"/></mask></defs><path fill=\"#189cc7\" d=\"M2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0\"/><path mask=\"url(#b)\" fill=\"#fff\" d=\"M17.1 9.4s0-.1 0 0c.3-.7-.1-1.4-.7-1.6-.6-.2-1.3.1-1.5.8v.1c-.4 1.2-4 10.5-4 10.5h-.1L6.6 8.5l-.1-.2c-.3-.6-1-.9-1.6-.7-.7.2-1 1-.8 1.6.5 1.3 5.4 13.1 5.4 13.1l-.3.7c-.5 1.5-1.1 2.4-2.7 2.4h-.7c-.5 0-1 .3-1.1.8-.2.6.2 1.2.8 1.4.4.1.9.1 1.3.1 3 0 3.9-1.7 4.9-4.2 0 0 5.4-13.4 5.6-14-.2 0-.2 0-.2-.1m7.4 9.1h-.3l-.2-.1c-.4-.2-4.7-3.2-4.8-3.9 0-.1 0-.2.1-.3.1-.1.2-.1.4-.1 1 0 3.8 1.4 5.5 2.3.5.4.6 1.1.3 1.6-.2.3-.6.5-1 .5m-4.8-9.1c-.2 0-.3 0-.4-.1-.1-.1-.1-.1-.1-.3 0-.8 4.4-3.7 4.8-3.9l.1-.1h.4c.4 0 .8.2 1 .5.3.5.2 1.2-.3 1.6-1.6.9-4.4 2.3-5.5 2.3m7.2 3.4c-.1 0-5.7 0-6.2-.9v-.3c.4-.7 5.6-1.1 6.1-1.1h.1c.5.1.9.6 1 1.1.1.6-.3 1.1-1 1.2\"/></svg>",
		"source-youtube": "<svg image-rendering=\"optimizeQuality\" shape-rendering=\"geometricPrecision\" viewbox=\"0 0 32 32\"><path d=\"M30 32H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h28c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2\" fill=\"#ca1b25\"/><path d=\"M25 7H7c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V10c0-1.7-1.3-3-3-3M13 20v-8l8 4-8 4\" fill=\"#fff\"/></svg>",
		"status-limite_source": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M110.343 175.271H418.12v-22H109.883zM352 88H176l-66.229 54.461h308.46zM132 418.63l263.976-.63.024-220H132v220.63zM198 264l22-22 44.001 44L308 242l22 22-44 44 44 44.286L308 374l-43.999-44L220 374.047l-22-22.462L242 308l-44-44z\"/><path d=\"M264 0C118.197 0 0 118.197 0 264s118.197 264 264 264 264-118.197 264-264S409.803 0 264 0zm.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251S385.894 484 264.252 484z\"/></svg>",
		"status-limite_user": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M263.999 0c-145.803 0-264 118.197-264 264s118.197 264 264 264 264-118.197 264-264-118.197-264-264-264zm.252 484c-121.642 0-220.252-98.609-220.252-220.252 0-121.642 98.61-220.251 220.252-220.251 121.643 0 220.252 98.61 220.252 220.251S385.894 484 264.251 484z\"/><path d=\"M312.962 303.482c2.478-44.375 14.738-52.642 23.75-71.25 1.464-3.02 11.625-20.962 7.605-30.394-8.97-20.875-1.484-40.264 3.711-63.364 3.864-17.102-9.896-32.749-9.896-32.749S313.892 70.1 270.475 66.11c-.832-.092-2.925-.13-5.013-.127-2.088-.004-4.18.035-5.012.127-43.418 3.989-67.659 39.614-67.659 39.614s-13.762 15.647-9.896 32.749c5.195 23.101 12.68 42.489 3.71 63.365-4.019 9.432 6.143 27.375 7.606 30.394 9.013 18.609 21.275 26.875 23.75 71.25 2.334 41.885-98.796 29.525-129.962 49.521C128.149 395.473 167.075 462 264.25 462c98.749 0 136.354-66.979 176.552-110-32.325-19.234-130.137-7.303-127.84-48.518zm6.569 126.051l-22 22L264 418l-33.488 33.487-22-22L241.999 396l-33.256-33.256 22-22L264 374l33.426-33.427 22 22L285.999 396l33.532 33.533z\"/></svg>",
		"status-org_backup": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M264 0C118.197 0 0 118.197 0 264s118.197 264 264 264 264-118.197 264-264S409.803 0 264 0zm.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251S385.894 484 264.252 484z\"/><path d=\"M110 308.398V374c0 20.982 23.171 44 44 44h220c20.83 0 44-23.018 44-44l-.292-65.6L110 308.398zm242.292 65.638c-11.284 0-22.045-11.109-22.045-22.036 0-11.409 10.851-22 22.045-22 11.143 0 22.11 11.266 22.11 21.698 0 11.605-10.878 22.338-22.11 22.338zM374.467 110.214h-66.334V132h65.613L264 253 153.746 132h66l.166-22H153.66l-43.828 176h308.336z\"/><path d=\"M286.675 154.086V65.61l-43.663.39v88.414L198 154.086l66.623 66.079L330 154.086z\"/></svg>",
		"status-org_expiration": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M524.998 495.531l-84.997-165.274c-6.162-10.179-11.317-21.616-21.5-21.981v-.26c-.167-.005-.331-.016-.501-.016-10.518 0-15.737 11.654-22 22l-84.997 165c-7.146 12.141-2.19 33 22 33h169.995c24.191 0 29.147-20.328 22-32.469zm-84.997 10.726h-21.5V506H396v-22h21.5v.257h22.501v22zm-21.5-44V462h-22.744l.732-88H417.5v.257h22.012l.732 88h-21.743z\"/><path d=\"M287.945 495l6.762-13.126A221.033 221.033 0 0 1 264.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251 0 23.404-3.665 45.949-10.433 67.107l26.688 50.039C518.191 345.658 528 305.977 528 264 528 118.197 409.803 0 264 0S0 118.197 0 264s118.197 264 264 264c11.484 0 22.788-.766 33.883-2.195-13.597-5.664-15.682-21.046-9.938-30.805z\"/><path d=\"M286 212.731V110c0-12.15-9.85-22-22-22-12.151 0-22 9.85-22 22l-.375 102.901A55.97 55.97 0 0 0 212.732 242h-59.167c-12.151 0-22 9.85-22 22s9.85 22 22 22h59.167c8.536 19.866 28.274 33.782 51.269 33.782 30.808 0 55.782-24.976 55.782-55.782-.001-22.994-13.917-42.732-33.783-51.269z\"/></svg>",
		"status-org_read_only": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M264 0C118.197 0 0 118.197 0 264s118.197 264 264 264 264-118.197 264-264S409.803 0 264 0zm.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251S385.894 484 264.252 484z\"/><path d=\"M264 132C115.285 132 66 286 66 286s63.583 110 198 110c128.477 0 198-110 198-110s-47.298-154-198-154zm-.359 219.58c-48.569 0-87.94-39.372-87.94-87.939 0-48.57 39.372-87.941 87.94-87.941 48.567 0 87.939 39.372 87.939 87.941 0 48.567-39.372 87.939-87.939 87.939z\"/><path d=\"M262.393 209c-4.956 0-9.754.667-14.322 1.896 9.468 4.361 16.043 13.927 16.043 25.035 0 15.219-12.337 27.557-27.557 27.557-11.917 0-22.065-7.565-25.909-18.154a54.895 54.895 0 0 0-3.255 18.667c0 30.376 24.625 55 55 55 30.376 0 55-24.624 55-55S292.77 209 262.393 209z\"/></svg>",
		"status-org_stop": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M264 0C118.197 0 0 118.197 0 264s118.197 264 264 264 264-118.197 264-264S409.803 0 264 0zm.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251S385.894 484 264.252 484z\"/><path d=\"M352.06 286.26c-2.562 24.982-22.338 2.342-22.338-22.129l.338-131.871c0-9.556-6.24-22.639-15.798-22.639-9.557 0-17.201 13.083-17.201 22.639v110c-5.422-5.421-14.617-9.862-22-11v-143c0-9.557-7.283-22-16.839-22-9.557 0-16.161 12.443-16.161 22l-.085 131.885c-5.958-.884-16.143-1.386-21.915.303V110c0-9.556-6.352-22-15.909-22s-17.091 12.444-17.091 22v132.26c-6.218 4.382-17.841 11.615-21.703 21.74l-.297-87.745c0-9.557-6.423-22.095-15.979-22.095-9.557 0-17.081 12.667-17.081 22.224v180.769C132 424.719 188.746 462 256.324 462c55.928 0 139.797-33.084 139.797-166.123l-.297-97.617s-33.65-10.644-43.764 88z\"/></svg>",
		"status-search_down": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M524.997 495.531L440 330.257c-6.162-10.179-11.317-21.616-21.5-21.981v-.26c-.167-.005-.331-.016-.501-.016-10.518 0-15.736 11.654-22 22l-84.997 165c-7.146 12.141-2.19 33 22 33h169.995c24.191 0 29.147-20.328 22-32.469zM440 506.257h-21.5V506h-22.501v-22h21.5v.257H440v22zm-21.5-44V462h-22.744l.732-88h21.011v.257h22.012l.732 88H418.5z\"/><path d=\"M287.943 495l6.763-13.126A221.033 221.033 0 0 1 264.251 484c-121.642 0-220.252-98.609-220.252-220.252 0-121.642 98.61-220.251 220.252-220.251 121.643 0 220.252 98.61 220.252 220.251 0 23.404-3.665 45.949-10.433 67.107l26.688 50.039c17.434-35.236 27.241-74.918 27.241-116.896 0-145.803-118.197-264-264-264s-264 118.197-264 264 118.197 264 264 264a265.09 265.09 0 0 0 33.883-2.195c-13.597-5.662-15.682-21.044-9.939-30.803z\"/><path d=\"M252.354 87.398c-79.167 0-143.344 64.177-143.344 143.344 0 28.555 8.352 55.156 22.742 77.504l-37.801 37.801a220.99 220.99 0 0 0 37.682 50.317l44.323-44.322c22.116 13.959 48.311 22.044 76.397 22.044 79.167 0 143.344-64.177 143.344-143.344.001-79.166-64.176-143.344-143.343-143.344zM252.503 330c-54.676 0-99-44.324-99-99s44.324-99 99-99 99 44.324 99 99-44.324 99-99 99z\"/></svg>",
		"status-too-long": "<svg width=\"528\" height=\"528\" viewbox=\"0 0 528 528\"><path d=\"M524.998 495.531l-84.997-165.274c-6.162-10.179-11.317-21.616-21.5-21.981v-.26c-.167-.005-.331-.016-.501-.016-10.518 0-15.737 11.654-22 22l-84.997 165c-7.146 12.141-2.19 33 22 33h169.995c24.191 0 29.147-20.328 22-32.469zm-84.997 10.726h-21.5V506H396v-22h21.5v.257h22.501v22zm-21.5-44V462h-22.744l.732-88H417.5v.257h22.012l.732 88h-21.743z\"/><path d=\"M287.945 495l6.762-13.126A221.033 221.033 0 0 1 264.252 484C142.61 484 44 385.391 44 263.748c0-121.642 98.61-220.251 220.252-220.251 121.642 0 220.252 98.61 220.252 220.251 0 23.404-3.665 45.949-10.433 67.107l26.688 50.039C518.191 345.658 528 305.977 528 264 528 118.197 409.803 0 264 0S0 118.197 0 264s118.197 264 264 264c11.484 0 22.788-.766 33.883-2.195-13.597-5.664-15.682-21.046-9.938-30.805z\"/><path d=\"M286 212.731V110c0-12.15-9.85-22-22-22-12.151 0-22 9.85-22 22l-.375 102.901A55.97 55.97 0 0 0 212.732 242h-59.167c-12.151 0-22 9.85-22 22s9.85 22 22 22h59.167c8.536 19.866 28.274 33.782 51.269 33.782 30.808 0 55.782-24.976 55.782-55.782-.001-22.994-13.917-42.732-33.783-51.269z\"/></svg>",
		"status": "<svg viewbox=\"0 0 20 20\"><path d=\"M13.5 5.6l-.4.4c-2-1.5-4.9-1.3-6.7.5-1 1-1.5 2.3-1.5 3.7 0 1.4.5 2.7 1.5 3.7.1 0 .2.1.4.1.1 0 .2 0 .3-.1.2-.2.2-.5 0-.7-.8-.8-1.2-1.9-1.2-3s.4-2.2 1.2-3c1.4-1.4 3.7-1.6 5.3-.5l-1.6 1.6c-.2-.1-.5-.2-.8-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.3-.1-.6-.2-.8l2.7-2.7c.3-.3.3-.7 0-1-.3-.3-.8-.3-1 0z\"/><path d=\"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16.2c-4 0-7.2-3.2-7.2-7.2S6 2.8 10 2.8 17.2 6 17.2 10 14 17.2 10 17.2z\"/></svg>",
		"thumb-down": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M96 32v48.248l48-.25c41.922 0 61.75-4.188 80-16 22.719-14.125 40.626-32 112-32 160.312 0 163.188 41.281 176 208v32c1.594 20.484-5.438 36.469-16 48-13.125 14.391-36.812 16-48 16H304c20.47 71.359 22.062 133.766 0 160-6.75 8-16 16.207-32 16-14.421-.188-27.204-23.031-32-48-8.641-41.92-9.594-104-112-128l-16-160H96V384H0V32h96z\"/></svg>",
		"thumb-up": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M447.75 448h.25v-.25z\"/><path d=\"M95.888 480.002v-48.25l48 .25c41.922 0 61.75 4.188 80 16 22.719 14.125 40.625 32 112 32 160.312 0 163.188-41.281 176-208v-32c1.595-20.484-5.438-36.469-16-48-13.125-14.391-36.812-16-48-16H303.889c20.47-71.359 22.062-133.765 0-160-6.75-8-16-16.208-32-16-14.422.187-27.205 23.031-32 48-8.641 41.92-9.594 104-112 128l-16 160h-16V128h-96v352.002h95.999z\"/></svg>",
		"tips": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M432.686 176.667c-.062-1.333.125-43.467-21.742-87.483C389.579 45.081 342.018-.558 256.04.005 170.021-.558 122.477 45.08 101.111 89.184c-21.891 44.016-21.702 86.15-21.797 87.5.723 89.021 68.159 154.574 68.942 155.925 9.851 9.756 16.297 19.354 20.42 30.791-5.254 5.815-8.676 13.205-8.676 20.6 0 8 .02 24.001 0 32-.041 16 16 32 32 32 0 16 0 32 16 32 11.247 0 16 32 47.621 32C288 512 292.619 480 304 480c16 0 16-16 16-32 16 0 31.972-15.979 32-32 .028-16-.016-24 0-32 .014-7.393-3.404-14.781-8.66-20.596 4.118-11.442 10.541-21.121 20.403-30.812.815-1.35 68.252-66.904 68.943-155.925zm-91.672 133.228c-13.835 14.138-22.412 27.551-27.757 42.105H198.758c-5.349-14.557-13.932-27.969-27.771-42.105 0 0-3.373-3.375-9.028-10.182-17.122-20.408-50.792-69.397-50.503-123.029 0-.031-.031-8.534 2.283-22.44 3.435-20.933 12.337-52.188 33.201-77.083 21.011-24.808 52.847-44.785 109.1-45.043 74.589.563 107.373 35.254 126.166 71.436 9.082 18.149 13.772 36.777 16.062 50.69 2.339 13.907 2.213 22.44 2.308 22.44.062 35.789-14.589 69.405-29.757 93.993-7.562 12.267-15.122 22.214-20.771 29.036-5.647 6.807-9.034 10.148-9.034 10.182zM512 176c0 8.836-7.163 16-16 16h-32c-8.837 0-16-7.164-16-16s7.163-16 16-16h32c8.837 0 16 7.164 16 16zM64 176c0 8.836-7.163 16-16 16H16c-8.837 0-16-7.164-16-16s7.163-16 16-16h32c8.837 0 16 7.164 16 16zM475.312 36.687c6.248 6.248 6.249 16.379 0 22.627l-22.627 22.627c-6.249 6.249-16.38 6.248-22.627 0-6.249-6.249-6.249-16.379 0-22.627l22.627-22.627c6.251-6.249 16.38-6.249 22.627 0zM81.941 81.942c-6.248 6.248-16.379 6.249-22.627 0L36.687 59.314c-6.249-6.249-6.248-16.379 0-22.627 6.249-6.249 16.379-6.249 22.627 0l22.627 22.627c6.249 6.249 6.249 16.379 0 22.628zM481.94 315.312c-6.247 6.248-16.378 6.25-22.628 0l-22.627-22.627c-6.249-6.248-6.248-16.379 0-22.627 6.247-6.248 16.379-6.248 22.627 0l22.628 22.627c6.249 6.251 6.248 16.381 0 22.627zM81.941 270.059c6.248 6.248 6.249 16.379 0 22.627l-22.627 22.627c-6.248 6.25-16.379 6.248-22.627 0-6.249-6.248-6.249-16.379 0-22.627l22.627-22.627c6.248-6.248 16.379-6.248 22.627 0z\"/><path d=\"M316.27 195.73c-6.246-6.249-18.44-4.185-27.236 4.611l-31.85 31.85c-.468.467-.906.949-1.334 1.434a29.503 29.503 0 0 0-2.649-3.055l-30.712-30.711c-8.481-8.481-20.421-10.291-26.67-4.042-6.248 6.248-4.439 18.188 4.042 26.669l30.712 30.711c2.865 2.866 6.126 4.957 9.429 6.246v62.173c0 7.944 7.164 14.384 16 14.384 8.837 0 16-6.439 16-14.384v-61.14c2.729-1.363 5.397-3.248 7.812-5.66l31.848-31.848c8.793-8.794 10.856-20.989 4.608-27.238z\"/></svg>",
		"trend-down": "<svg viewbox=\"0 0 512 512\"><path d=\"M0 128h512L256 384\"/></svg>",
		"trend-new": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M256-.001l52.034 118.761 114.991-57.009-34.857 124.533L512 217.984l-105.591 72.834 74.9 105.049-127.493-13.195L344.975 512 256 418.548 167.025 512l-8.841-129.328-127.493 13.195 74.9-105.049L0 217.984l123.834-31.7L88.975 61.751l114.993 57.009z\"/></svg>",
		"trend-stable": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 224h512v96H0z\"/></svg>",
		"trend-up": "<svg viewbox=\"0 0 512 512\"><path d=\"M512 384H0l256-256\"/></svg>",
		"triangle": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M32 .032L464 256 32 512z\"/></svg>",
		"update-full_refresh": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M352 256L240 368l112 112v-64h160V32H0v384h192l-48-48 48-48H96V128h320v192h-64z\"/></svg>",
		"update-inc_refresh": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M0 32v192h96v-96h320v192h-64v-64L240 368l112 112v-64h160V32H0zm0 224v32h96v-32H0zm0 64v32h96v-32H0zm0 64v32h96v-32H0z\"/></svg>",
		"update-rebuild": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M352 288L240 400l112 112v-64h160V64H320l48 48-48 48h96v192h-64v-64zM0 448h192l-48-48 48-48H96V160h64v64l112-112L160 0v64H0v384z\"/></svg>",
		"update": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M192 416h128v96H192zM256 0L64 192h128v191.5h128V192h127.75z\"/></svg>",
		"upload": "<svg viewbox=\"0 0 20 20\"><path d=\"M11 3.7l1.5 1.5c.7.7 1.5 0 1.5 0s.7-.8 0-1.5L10.7.3c-.4-.4-1-.4-1.4 0L6 3.8c-.7.7 0 1.4 0 1.4s.8.7 1.5 0L9 3.7V15c0 .6.5 1 1 1s1-.5 1-1V3.7\"/><path d=\"M14 7v2h4v9H2V9h4V7H1S0 7 0 8v11c0 1 1 1 1 1h18c1 0 1-1 1-1V8c0-1-1-1-1-1h-5z\"/></svg>",
		"view": "<svg width=\"24\" height=\"20\" viewbox=\"0 0 24 20\"><g stroke=\"null\" fill=\"#3A6083\"><path d=\"M12 16.81c-4.66 0-9.081-2.389-11.71-6.332L.051 10l.24-.478C2.918 5.58 7.34 3.19 12 3.19s9.081 2.39 11.71 6.333l.239.478-.24.478C21.082 14.421 16.66 16.811 12 16.811zM2.083 10c2.27 3.226 5.974 5.138 9.917 5.138s7.647-1.912 9.917-5.138C19.647 6.774 15.943 4.862 12 4.862S4.353 6.774 2.083 10z\"/><path d=\"M12 16.81c-4.66 0-9.081-2.389-11.71-6.332L.051 10l.24-.478C2.918 5.58 7.34 3.19 12 3.19s9.081 2.39 11.71 6.333l.239.478-.24.478C21.082 14.421 16.66 16.811 12 16.811zM2.083 10c2.27 3.226 5.974 5.138 9.917 5.138s7.647-1.912 9.917-5.138C19.647 6.774 15.943 4.862 12 4.862S4.353 6.774 2.083 10z\"/><path d=\"M12 13.943c-2.15 0-3.943-1.792-3.943-3.943 0-2.15 1.792-3.943 3.943-3.943 2.15 0 3.943 1.792 3.943 3.943 0 2.15-1.792 3.943-3.943 3.943zm0-6.213c-1.314 0-2.27 1.075-2.27 2.27 0 1.314 1.075 2.27 2.27 2.27 1.314 0 2.27-1.075 2.27-2.27 0-1.314-.956-2.27-2.27-2.27z\"/></g></svg>",
		"web": "<svg width=\"512\" height=\"512\" viewbox=\"0 0 512 512\"><path d=\"M448 64.165H64c-32-.328-64 31.672-64 63.672v256c0 32 32 64 64 64h383.75c32.25 0 64.25-32 64.25-64v-256c0-32-32-63.674-64-63.672zM224.003 97.818c11.625 0 21.05 10.3 21.05 23.007 0 12.712-9.425 23.012-21.05 23.012s-21.05-10.3-21.05-23.012c.001-12.707 9.425-23.007 21.05-23.007zm-63.993 0c11.625 0 21.05 10.3 21.05 23.007 0 12.712-9.425 23.012-21.05 23.012-11.638 0-21.062-10.3-21.062-23.012-.001-12.707 9.424-23.007 21.062-23.007zm-64 0c11.625 0 21.05 10.3 21.05 23.007 0 12.712-9.425 23.012-21.05 23.012s-21.062-10.3-21.062-23.012c-.001-12.707 9.437-23.007 21.062-23.007zM480 383.837c0 16-16 31.75-32 32H64c-16 0-32-15.678-32-32v-192c0-16 16-32 32-32h384c16 0 32 16 32 32v192z\"/><path d=\"M288 191.837h160v192H288zM64 191.837h192V240H64zM64 256h192v32H64zM64 304h192v32H64zM64 352h192v32H64z\"/></svg>",
		"zoom-negative": "<svg viewbox=\"0 0 16 16\"><path d=\"M4 6h5v1H4z\"/><path d=\"M15.7 14.3l-4-4c.8-1 1.3-2.4 1.3-3.8C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.4 0 2.8-.5 3.8-1.3l4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4M2 6.5C2 4 4 2 6.5 2S11 4 11 6.5c0 1.2-.5 2.3-1.3 3.2-.9.8-2 1.3-3.2 1.3C4 11 2 9 2 6.5\"/></svg>",
		"zoom-positive": "<svg viewbox=\"0 0 16 16\"><path d=\"M7 4H6v2H4v1h2v2h1V7h2V6H7z\"/><path d=\"M15.7 14.3l-4-4c.8-1 1.3-2.4 1.3-3.8C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.4 0 2.8-.5 3.8-1.3l4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4M2 6.5C2 4 4 2 6.5 2S11 4 11 6.5c0 1.2-.5 2.3-1.3 3.2-.9.8-2 1.3-3.2 1.3C4 11 2 9 2 6.5\"/></svg>"
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(2);
	var $ = __webpack_require__(3);
	var underscore_1 = __webpack_require__(4);
	__webpack_require__(14);
	var tooltipPropsToOmit = ['animation', 'container', 'delay', 'html', 'placement', 'selector', 'template', 'trigger', 'viewport',
	    'children'];
	var Tooltip = (function (_super) {
	    __extends(Tooltip, _super);
	    function Tooltip() {
	        _super.apply(this, arguments);
	    }
	    Tooltip.prototype.componentDidMount = function () {
	        this.tooltip.tooltip({
	            animation: this.props.animation,
	            container: this.props.container,
	            delay: this.props.delay,
	            html: this.props.html,
	            placement: this.props.placement,
	            selector: this.props.selector,
	            template: this.props.template,
	            title: this.props.title,
	            trigger: this.props.trigger,
	            viewport: this.props.viewport
	        });
	    };
	    Tooltip.prototype.componentWillUnmount = function () {
	        this.tooltip.tooltip('destroy');
	    };
	    Tooltip.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("span", __assign({}, underscore_1.omit(this.props, tooltipPropsToOmit), {ref: function (element) { return _this.tooltip = $(element); }}), this.props.children));
	    };
	    return Tooltip;
	}(React.Component));
	exports.Tooltip = Tooltip;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.7
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null
	
	    this.init('tooltip', element, options)
	  }
	
	  Tooltip.VERSION  = '3.3.7'
	
	  Tooltip.TRANSITION_DURATION = 150
	
	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }
	
	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }
	
	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }
	
	    var triggers = this.options.trigger.split(' ')
	
	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]
	
	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
	
	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }
	
	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }
	
	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }
	
	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
	
	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }
	
	    return options
	  }
	
	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()
	
	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })
	
	    return options
	  }
	
	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }
	
	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'in'
	
	    if (!self.options.delay || !self.options.delay.show) return self.show()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }
	
	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }
	
	    return false
	  }
	
	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }
	
	    if (self.isInStateTrue()) return
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'out'
	
	    if (!self.options.delay || !self.options.delay.hide) return self.hide()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }
	
	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)
	
	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)
	
	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this
	
	      var $tip = this.tip()
	
	      var tipId = this.getUID(this.type)
	
	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)
	
	      if (this.options.animation) $tip.addClass('fade')
	
	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement
	
	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
	
	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)
	
	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)
	
	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight
	
	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)
	
	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement
	
	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }
	
	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
	
	      this.applyPlacement(calculatedOffset, placement)
	
	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null
	
	        if (prevHoverState == 'out') that.leave(that)
	      }
	
	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }
	
	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight
	
	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)
	
	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0
	
	    offset.top  += marginTop
	    offset.left += marginLeft
	
	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)
	
	    $tip.addClass('in')
	
	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight
	
	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }
	
	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
	
	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top
	
	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
	
	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }
	
	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }
	
	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()
	
	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }
	
	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)
	
	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
	        that.$element
	          .removeAttr('aria-describedby')
	          .trigger('hidden.bs.' + that.type)
	      }
	      callback && callback()
	    }
	
	    this.$element.trigger(e)
	
	    if (e.isDefaultPrevented()) return
	
	    $tip.removeClass('in')
	
	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()
	
	    this.hoverState = null
	
	    return this
	  }
	
	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }
	
	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }
	
	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element
	
	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'
	
	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var isSvg = window.SVGElement && el instanceof window.SVGElement
	    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
	    // See https://github.com/twbs/bootstrap/issues/20280
	    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null
	
	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }
	
	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
	
	  }
	
	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta
	
	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)
	
	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }
	
	    return delta
	  }
	
	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options
	
	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
	
	    return title
	  }
	
	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }
	
	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }
	
	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }
	
	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }
	
	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }
	
	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }
	
	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }
	
	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }
	
	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	      that.$element = null
	    })
	  }
	
	
	  // TOOLTIP PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tooltip
	
	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip
	
	
	  // TOOLTIP NO CONFLICT
	  // ===================
	
	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }
	
	}(jQuery);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var moment = __webpack_require__(16);
	exports.LAST_UPDATE_LABEL = 'Last update:';
	var LastUpdated = (function (_super) {
	    __extends(LastUpdated, _super);
	    function LastUpdated() {
	        _super.apply(this, arguments);
	    }
	    LastUpdated.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	    };
	    LastUpdated.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    LastUpdated.prototype.render = function () {
	        var label = this.props.label || exports.LAST_UPDATE_LABEL;
	        var time = this.props.time || new Date();
	        var lastUpdateTime = moment(time).format('LTS');
	        return (React.createElement("div", {className: 'table-last-update'}, 
	            label, 
	            " ", 
	            lastUpdateTime));
	    };
	    return LastUpdated;
	}(React.Component));
	exports.LastUpdated = LastUpdated;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.15.2
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';
	
	    var hookCallback;
	
	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	
	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return input != null && Object.prototype.toString.call(input) === '[object Object]';
	    }
	
	    function isObjectEmpty(obj) {
	        var k;
	        for (k in obj) {
	            // even if its not own property I'd still call it non-empty
	            return false;
	        }
	        return true;
	    }
	
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;
	
	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            var isNowValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	
	            if (m._strict) {
	                isNowValid = isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	
	            if (Object.isFrozen == null || !Object.isFrozen(m)) {
	                m._isValid = isNowValid;
	            }
	            else {
	                return isNowValid;
	            }
	        }
	        return m._isValid;
	    }
	
	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    var updateInProgress = false;
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	
	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [];
	                var arg;
	                for (var i = 0; i < arguments.length; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (var key in arguments[0]) {
	                            arg += key + ': ' + arguments[0][key] + ', ';
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    var keys;
	
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	
	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate () {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	
	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    var priorities = {};
	
	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }
	
	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }
	
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }
	
	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	
	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }
	
	    // MOMENTS
	
	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }
	
	
	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	    var formatFunctions = {};
	
	    var formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	
	
	    var regexes = {};
	
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	
	    var indexOf;
	
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PRIORITY
	
	    addUnitPriority('month', 8);
	
	    // PARSING
	
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        if (!m) {
	            return this._months;
	        }
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        if (!m) {
	            return this._monthsShort;
	        }
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	
	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth (mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PRIORITIES
	
	    addUnitPriority('year', 1);
	
	    // PARSING
	
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    // HOOKS
	
	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', true);
	
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	
	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	
	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PRIORITIES
	
	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);
	
	    // PARSING
	
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);
	
	    // PARSING
	
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }
	
	    // LOCALES
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        if (!m) {
	            return this._weekdays;
	        }
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }
	
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	    }
	
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	    }
	
	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	
	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	
	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }
	
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }
	
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }
	
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }
	
	
	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	
	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    function kFormat() {
	        return this.hours() || 24;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PRIORITY
	    addUnitPriority('hour', 13);
	
	    // PARSING
	
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	
	    // MOMENTS
	
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	
	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        ordinalParse: defaultOrdinalParse,
	        relativeTime: defaultRelativeTime,
	
	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,
	
	        week: defaultLocaleWeek,
	
	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,
	
	        meridiemParse: defaultLocaleMeridiemParse
	    };
	
	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                __webpack_require__(18)("./" + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale (name, config) {
	        if (config !== null) {
	            var parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, parentConfig = baseConfig;
	            // MERGE
	            if (locales[name] != null) {
	                parentConfig = locales[name]._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function locale_locales__listLocales() {
	        return keys(locales);
	    }
	
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
	        'which is not reliable across all browsers and versions. Non ISO date formats are ' +
	        'discouraged and will be removed in an upcoming major release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	
	            scoreToBeat,
	            i,
	            currentScore;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	
	        configFromArray(config);
	    }
	
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || locale_locales__getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }
	
	        if (!valid__isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	
	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	
	        this._data = {};
	
	        this._locale = locale_locales__getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // FORMATTING
	
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }
	
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);
	
	            if (tZone === 0) {
	                this.utcOffset(0, true);
	            } else {
	                this.utcOffset(offsetFromString(matchOffset, this._i));
	            }
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {};
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	
	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])                         * sign,
	                h  : toInt(match[HOUR])                         * sign,
	                m  : toInt(match[MINUTE])                       * sign,
	                s  : toInt(match[SECOND])                       * sign,
	                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    }
	
	    create__createDuration.fn = Duration.prototype;
	
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};
	
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }
	
	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	
	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }
	
	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';
	
	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
	
	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	
	    function clone () {
	        return new Moment(this);
	    }
	
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	
	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }
	
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }
	
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }
	
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }
	
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }
	
	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }
	
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData () {
	        return this._locale;
	    }
	
	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	            case 'date':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	        }
	
	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }
	
	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }
	
	        return this;
	    }
	
	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	
	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }
	
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	
	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	
	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }
	
	    function toDate () {
	        return new Date(this.valueOf());
	    }
	
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }
	
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PRIORITY
	
	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);
	
	
	    // PARSING
	
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PRIORITY
	
	    addUnitPriority('quarter', 7);
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PRIOROITY
	    addUnitPriority('date', 9);
	
	    // PARSING
	
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);
	
	    // PARSING
	
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PRIORITY
	
	    addUnitPriority('minute', 14);
	
	    // PARSING
	
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PRIORITY
	
	    addUnitPriority('second', 15);
	
	    // PARSING
	
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PRIORITY
	
	    addUnitPriority('millisecond', 16);
	
	    // PARSING
	
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var momentPrototype__proto = Moment.prototype;
	
	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = stringGet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = stringSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;
	
	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	
	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	
	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	
	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	
	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	
	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;
	
	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	
	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	
	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	
	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	
	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;
	
	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	
	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
	
	    var momentPrototype = momentPrototype__proto;
	
	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }
	
	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }
	
	    function preParsePostFormat (string) {
	        return string;
	    }
	
	    var prototype__proto = Locale.prototype;
	
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;
	
	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;
	
	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	
	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;
	
	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;
	
	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;
	
	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }
	
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        }
	
	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;
	
	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	
	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	
	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	
	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	
	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	
	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	
	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	
	    var mathAbs = Math.abs;
	
	    function duration_abs__abs () {
	        var data           = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	
	        return this;
	    }
	
	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	
	        return this;
	    }
	
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	
	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');
	
	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	
	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set the rounding function for relative time strings
	    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }
	
	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var iso_string__abs = Math.abs;
	
	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }
	
	    var duration_prototype__proto = Duration.prototype;
	
	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;
	
	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	
	    // Side effect imports
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    // Side effect imports
	
	
	    utils_hooks__hooks.version = '2.15.2';
	
	    setHookCallback(local__createLocal);
	
	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
	    utils_hooks__hooks.prototype             = momentPrototype;
	
	    var _moment = utils_hooks__hooks;
	
	    return _moment;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 19,
		"./af.js": 19,
		"./ar": 20,
		"./ar-ly": 21,
		"./ar-ly.js": 21,
		"./ar-ma": 22,
		"./ar-ma.js": 22,
		"./ar-sa": 23,
		"./ar-sa.js": 23,
		"./ar-tn": 24,
		"./ar-tn.js": 24,
		"./ar.js": 20,
		"./az": 25,
		"./az.js": 25,
		"./be": 26,
		"./be.js": 26,
		"./bg": 27,
		"./bg.js": 27,
		"./bn": 28,
		"./bn.js": 28,
		"./bo": 29,
		"./bo.js": 29,
		"./br": 30,
		"./br.js": 30,
		"./bs": 31,
		"./bs.js": 31,
		"./ca": 32,
		"./ca.js": 32,
		"./cs": 33,
		"./cs.js": 33,
		"./cv": 34,
		"./cv.js": 34,
		"./cy": 35,
		"./cy.js": 35,
		"./da": 36,
		"./da.js": 36,
		"./de": 37,
		"./de-at": 38,
		"./de-at.js": 38,
		"./de.js": 37,
		"./dv": 39,
		"./dv.js": 39,
		"./el": 40,
		"./el.js": 40,
		"./en-au": 41,
		"./en-au.js": 41,
		"./en-ca": 42,
		"./en-ca.js": 42,
		"./en-gb": 43,
		"./en-gb.js": 43,
		"./en-ie": 44,
		"./en-ie.js": 44,
		"./en-nz": 45,
		"./en-nz.js": 45,
		"./eo": 46,
		"./eo.js": 46,
		"./es": 47,
		"./es-do": 48,
		"./es-do.js": 48,
		"./es.js": 47,
		"./et": 49,
		"./et.js": 49,
		"./eu": 50,
		"./eu.js": 50,
		"./fa": 51,
		"./fa.js": 51,
		"./fi": 52,
		"./fi.js": 52,
		"./fo": 53,
		"./fo.js": 53,
		"./fr": 54,
		"./fr-ca": 55,
		"./fr-ca.js": 55,
		"./fr-ch": 56,
		"./fr-ch.js": 56,
		"./fr.js": 54,
		"./fy": 57,
		"./fy.js": 57,
		"./gd": 58,
		"./gd.js": 58,
		"./gl": 59,
		"./gl.js": 59,
		"./he": 60,
		"./he.js": 60,
		"./hi": 61,
		"./hi.js": 61,
		"./hr": 62,
		"./hr.js": 62,
		"./hu": 63,
		"./hu.js": 63,
		"./hy-am": 64,
		"./hy-am.js": 64,
		"./id": 65,
		"./id.js": 65,
		"./is": 66,
		"./is.js": 66,
		"./it": 67,
		"./it.js": 67,
		"./ja": 68,
		"./ja.js": 68,
		"./jv": 69,
		"./jv.js": 69,
		"./ka": 70,
		"./ka.js": 70,
		"./kk": 71,
		"./kk.js": 71,
		"./km": 72,
		"./km.js": 72,
		"./ko": 73,
		"./ko.js": 73,
		"./ky": 74,
		"./ky.js": 74,
		"./lb": 75,
		"./lb.js": 75,
		"./lo": 76,
		"./lo.js": 76,
		"./lt": 77,
		"./lt.js": 77,
		"./lv": 78,
		"./lv.js": 78,
		"./me": 79,
		"./me.js": 79,
		"./mi": 80,
		"./mi.js": 80,
		"./mk": 81,
		"./mk.js": 81,
		"./ml": 82,
		"./ml.js": 82,
		"./mr": 83,
		"./mr.js": 83,
		"./ms": 84,
		"./ms-my": 85,
		"./ms-my.js": 85,
		"./ms.js": 84,
		"./my": 86,
		"./my.js": 86,
		"./nb": 87,
		"./nb.js": 87,
		"./ne": 88,
		"./ne.js": 88,
		"./nl": 89,
		"./nl.js": 89,
		"./nn": 90,
		"./nn.js": 90,
		"./pa-in": 91,
		"./pa-in.js": 91,
		"./pl": 92,
		"./pl.js": 92,
		"./pt": 93,
		"./pt-br": 94,
		"./pt-br.js": 94,
		"./pt.js": 93,
		"./ro": 95,
		"./ro.js": 95,
		"./ru": 96,
		"./ru.js": 96,
		"./se": 97,
		"./se.js": 97,
		"./si": 98,
		"./si.js": 98,
		"./sk": 99,
		"./sk.js": 99,
		"./sl": 100,
		"./sl.js": 100,
		"./sq": 101,
		"./sq.js": 101,
		"./sr": 102,
		"./sr-cyrl": 103,
		"./sr-cyrl.js": 103,
		"./sr.js": 102,
		"./ss": 104,
		"./ss.js": 104,
		"./sv": 105,
		"./sv.js": 105,
		"./sw": 106,
		"./sw.js": 106,
		"./ta": 107,
		"./ta.js": 107,
		"./te": 108,
		"./te.js": 108,
		"./th": 109,
		"./th.js": 109,
		"./tl-ph": 110,
		"./tl-ph.js": 110,
		"./tlh": 111,
		"./tlh.js": 111,
		"./tr": 112,
		"./tr.js": 112,
		"./tzl": 113,
		"./tzl.js": 113,
		"./tzm": 114,
		"./tzm-latn": 115,
		"./tzm-latn.js": 115,
		"./tzm.js": 114,
		"./uk": 116,
		"./uk.js": 116,
		"./uz": 117,
		"./uz.js": 117,
		"./vi": 118,
		"./vi.js": 118,
		"./x-pseudo": 119,
		"./x-pseudo.js": 119,
		"./zh-cn": 120,
		"./zh-cn.js": 120,
		"./zh-hk": 121,
		"./zh-hk.js": 121,
		"./zh-tw": 122,
		"./zh-tw.js": 122
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 18;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Afrikaans [af]
	//! author : Werner Mollentze : https://github.com/wernerm
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var af = moment.defineLocale('af', {
	        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM : function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Vandag om] LT',
	            nextDay : '[Môre om] LT',
	            nextWeek : 'dddd [om] LT',
	            lastDay : '[Gister om] LT',
	            lastWeek : '[Laas] dddd [om] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'oor %s',
	            past : '%s gelede',
	            s : '\'n paar sekondes',
	            m : '\'n minuut',
	            mm : '%d minute',
	            h : '\'n uur',
	            hh : '%d ure',
	            d : '\'n dag',
	            dd : '%d dae',
	            M : '\'n maand',
	            MM : '%d maande',
	            y : '\'n jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week : {
	            dow : 1, // Maandag is die eerste dag van die week.
	            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });
	
	    return af;
	
	}));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic [ar]
	//! author : Abdel Said: https://github.com/abdelsaid
	//! author : Ahmed Elkhatib
	//! author : forabi https://github.com/forabi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'كانون الثاني يناير',
	        'شباط فبراير',
	        'آذار مارس',
	        'نيسان أبريل',
	        'أيار مايو',
	        'حزيران يونيو',
	        'تموز يوليو',
	        'آب أغسطس',
	        'أيلول سبتمبر',
	        'تشرين الأول أكتوبر',
	        'تشرين الثاني نوفمبر',
	        'كانون الأول ديسمبر'
	    ];
	
	    var ar = moment.defineLocale('ar', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/\u200FM/\u200FYYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar;
	
	}));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Lybia) [ar-ly]
	//! author : Ali Hmer: https://github.com/kikoanis
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '1',
	        '2': '2',
	        '3': '3',
	        '4': '4',
	        '5': '5',
	        '6': '6',
	        '7': '7',
	        '8': '8',
	        '9': '9',
	        '0': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'يناير',
	        'فبراير',
	        'مارس',
	        'أبريل',
	        'مايو',
	        'يونيو',
	        'يوليو',
	        'أغسطس',
	        'سبتمبر',
	        'أكتوبر',
	        'نوفمبر',
	        'ديسمبر'
	    ];
	
	    var ar_ly = moment.defineLocale('ar-ly', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/\u200FM/\u200FYYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/\u200f/g, '').replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar_ly;
	
	}));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Morocco) [ar-ma]
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ar_ma = moment.defineLocale('ar-ma', {
	        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar_ma;
	
	}));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Saudi Arabia) [ar-sa]
	//! author : Suhail Alkowaileet : https://github.com/xsoh
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };
	
	    var ar_sa = moment.defineLocale('ar-sa', {
	        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ar_sa;
	
	}));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  :  Arabic (Tunisia) [ar-tn]
	//! author : Nader Toukabri : https://github.com/naderio
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ar_tn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ar_tn;
	
	}));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Azerbaijani [az]
	//! author : topchiyev : https://github.com/topchiyev
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı'
	    };
	
	    var az = moment.defineLocale('az', {
	        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[sabah saat] LT',
	            nextWeek : '[gələn həftə] dddd [saat] LT',
	            lastDay : '[dünən] LT',
	            lastWeek : '[keçən həftə] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s əvvəl',
	            s : 'birneçə saniyyə',
	            m : 'bir dəqiqə',
	            mm : '%d dəqiqə',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir il',
	            yy : '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM : function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return az;
	
	}));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Belarusian [be]
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	
	    var be = moment.defineLocale('be', {
	        months : {
	            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	        },
	        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays : {
	            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	        },
	        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[У мінулую] dddd [ў] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'праз %s',
	            past : '%s таму',
	            s : 'некалькі секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithPlural,
	            hh : relativeTimeWithPlural,
	            d : 'дзень',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM : function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	                case 'D':
	                    return number + '-га';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return be;
	
	}));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bulgarian [bg]
	//! author : Krasen Borisov : https://github.com/kraz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var bg = moment.defineLocale('bg', {
	        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Днес в] LT',
	            nextDay : '[Утре в] LT',
	            nextWeek : 'dddd [в] LT',
	            lastDay : '[Вчера в] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[В изминалата] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'след %s',
	            past : 'преди %s',
	            s : 'няколко секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дни',
	            M : 'месец',
	            MM : '%d месеца',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bg;
	
	}));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali [bn]
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	    numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };
	
	    var bn = moment.defineLocale('bn', {
	        months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
	        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
	        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
	        weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm সময়',
	            LTS : 'A h:mm:ss সময়',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm সময়',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
	        },
	        calendar : {
	            sameDay : '[আজ] LT',
	            nextDay : '[আগামীকাল] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[গতকাল] LT',
	            lastWeek : '[গত] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s পরে',
	            past : '%s আগে',
	            s : 'কয়েক সেকেন্ড',
	            m : 'এক মিনিট',
	            mm : '%d মিনিট',
	            h : 'এক ঘন্টা',
	            hh : '%d ঘন্টা',
	            d : 'এক দিন',
	            dd : '%d দিন',
	            M : 'এক মাস',
	            MM : '%d মাস',
	            y : 'এক বছর',
	            yy : '%d বছর'
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'রাত' && hour >= 4) ||
	                    (meridiem === 'দুপুর' && hour < 5) ||
	                    meridiem === 'বিকাল') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকাল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bn;
	
	}));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tibetan [bo]
	//! author : Thupten N. Chakrishar : https://github.com/vajradog
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	    numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };
	
	    var bo = moment.defineLocale('bo', {
	        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[དི་རིང] LT',
	            nextDay : '[སང་ཉིན] LT',
	            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay : '[ཁ་སང] LT',
	            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ལ་',
	            past : '%s སྔན་ལ',
	            s : 'ལམ་སང',
	            m : 'སྐར་མ་གཅིག',
	            mm : '%d སྐར་མ',
	            h : 'ཆུ་ཚོད་གཅིག',
	            hh : '%d ཆུ་ཚོད',
	            d : 'ཉིན་གཅིག',
	            dd : '%d ཉིན་',
	            M : 'ཟླ་བ་གཅིག',
	            MM : '%d ཟླ་བ',
	            y : 'ལོ་གཅིག',
	            yy : '%d ལོ'
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
	                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
	                    meridiem === 'དགོང་དག') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bo;
	
	}));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Breton [br]
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	            case 1:
	            case 3:
	            case 4:
	            case 5:
	            case 9:
	                return number + ' bloaz';
	            default:
	                return number + ' vloaz';
	        }
	    }
	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }
	
	    var br = moment.defineLocale('br', {
	        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h[e]mm A',
	            LTS : 'h[e]mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [a viz] MMMM YYYY',
	            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
	            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	        },
	        calendar : {
	            sameDay : '[Hiziv da] LT',
	            nextDay : '[Warc\'hoazh da] LT',
	            nextWeek : 'dddd [da] LT',
	            lastDay : '[Dec\'h da] LT',
	            lastWeek : 'dddd [paset da] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'a-benn %s',
	            past : '%s \'zo',
	            s : 'un nebeud segondennoù',
	            m : 'ur vunutenn',
	            mm : relativeTimeWithMutation,
	            h : 'un eur',
	            hh : '%d eur',
	            d : 'un devezh',
	            dd : relativeTimeWithMutation,
	            M : 'ur miz',
	            MM : relativeTimeWithMutation,
	            y : 'ur bloaz',
	            yy : specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal : function (number) {
	            var output = (number === 1) ? 'añ' : 'vet';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return br;
	
	}));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bosnian [bs]
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }
	
	    var bs = moment.defineLocale('bs', {
	        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return bs;
	
	}));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Catalan [ca]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ca = moment.defineLocale('ca', {
	        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextDay : function () {
	                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastDay : function () {
	                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'fa %s',
	            s : 'uns segons',
	            m : 'un minut',
	            mm : '%d minuts',
	            h : 'una hora',
	            hh : '%d hores',
	            d : 'un dia',
	            dd : '%d dies',
	            M : 'un mes',
	            MM : '%d mesos',
	            y : 'un any',
	            yy : '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal : function (number, period) {
	            var output = (number === 1) ? 'r' :
	                (number === 2) ? 'n' :
	                (number === 3) ? 'r' :
	                (number === 4) ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ca;
	
	}));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Czech [cs]
	//! author : petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':  // a few seconds / in a few seconds / a few seconds ago
	                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	            case 'm':  // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minuty' : 'minut');
	                } else {
	                    return result + 'minutami';
	                }
	                break;
	            case 'h':  // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodin');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':  // a day / in a day / a day ago
	                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dny' : 'dní');
	                } else {
	                    return result + 'dny';
	                }
	                break;
	            case 'M':  // a month / in a month / a month ago
	                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'měsíce' : 'měsíců');
	                } else {
	                    return result + 'měsíci';
	                }
	                break;
	            case 'y':  // a year / in a year / a year ago
	                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'let');
	                } else {
	                    return result + 'lety';
	                }
	                break;
	        }
	    }
	
	    var cs = moment.defineLocale('cs', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        shortMonthsParse : (function (monthsShort) {
	            var i, _shortMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
	            }
	            return _shortMonthsParse;
	        }(monthsShort)),
	        longMonthsParse : (function (months) {
	            var i, _longMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
	            }
	            return _longMonthsParse;
	        }(months)),
	        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm',
	            l : 'D. M. YYYY'
	        },
	        calendar : {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [v] LT';
	                    case 3:
	                        return '[ve středu v] LT';
	                    case 4:
	                        return '[ve čtvrtek v] LT';
	                    case 5:
	                        return '[v pátek v] LT';
	                    case 6:
	                        return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulou neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[minulé] dddd [v] LT';
	                    case 3:
	                        return '[minulou středu v] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [v] LT';
	                    case 6:
	                        return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'před %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse : /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return cs;
	
	}));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chuvash [cv]
	//! author : Anatoly Mironov : https://github.com/mirontoli
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var cv = moment.defineLocale('cv', {
	        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	        },
	        calendar : {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past : '%s каялла',
	            s : 'пӗр-ик ҫеккунт',
	            m : 'пӗр минут',
	            mm : '%d минут',
	            h : 'пӗр сехет',
	            hh : '%d сехет',
	            d : 'пӗр кун',
	            dd : '%d кун',
	            M : 'пӗр уйӑх',
	            MM : '%d уйӑх',
	            y : 'пӗр ҫул',
	            yy : '%d ҫул'
	        },
	        ordinalParse: /\d{1,2}-мӗш/,
	        ordinal : '%d-мӗш',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return cv;
	
	}));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh [cy]
	//! author : Robert Allen : https://github.com/robgallen
	//! author : https://github.com/ryangreaves
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	                ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return cy;
	
	}));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Danish [da]
	//! author : Ulrik Nielsen : https://github.com/mrbase
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var da = moment.defineLocale('da', {
	        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[I dag kl.] LT',
	            nextDay : '[I morgen kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[I går kl.] LT',
	            lastWeek : '[sidste] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'få sekunder',
	            m : 'et minut',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dage',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'et år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return da;
	
	}));

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German [de]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var de = moment.defineLocale('de', {
	        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return de;
	
	}));

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Austria) [de-at]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	
	    var de_at = moment.defineLocale('de-at', {
	        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return de_at;
	
	}));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maldivian [dv]
	//! author : Jawish Hameed : https://github.com/jawish
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = [
	        'ޖެނުއަރީ',
	        'ފެބްރުއަރީ',
	        'މާރިޗު',
	        'އޭޕްރީލު',
	        'މޭ',
	        'ޖޫން',
	        'ޖުލައި',
	        'އޯގަސްޓު',
	        'ސެޕްޓެމްބަރު',
	        'އޮކްޓޯބަރު',
	        'ނޮވެމްބަރު',
	        'ޑިސެމްބަރު'
	    ], weekdays = [
	        'އާދިއްތަ',
	        'ހޯމަ',
	        'އަންގާރަ',
	        'ބުދަ',
	        'ބުރާސްފަތި',
	        'ހުކުރު',
	        'ހޮނިހިރު'
	    ];
	
	    var dv = moment.defineLocale('dv', {
	        months : months,
	        monthsShort : months,
	        weekdays : weekdays,
	        weekdaysShort : weekdays,
	        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	        longDateFormat : {
	
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/M/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /މކ|މފ/,
	        isPM : function (input) {
	            return 'މފ' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'މކ';
	            } else {
	                return 'މފ';
	            }
	        },
	        calendar : {
	            sameDay : '[މިއަދު] LT',
	            nextDay : '[މާދަމާ] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[އިއްޔެ] LT',
	            lastWeek : '[ފާއިތުވި] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ތެރޭގައި %s',
	            past : 'ކުރިން %s',
	            s : 'ސިކުންތުކޮޅެއް',
	            m : 'މިނިޓެއް',
	            mm : 'މިނިޓު %d',
	            h : 'ގަޑިއިރެއް',
	            hh : 'ގަޑިއިރު %d',
	            d : 'ދުވަހެއް',
	            dd : 'ދުވަސް %d',
	            M : 'މަހެއް',
	            MM : 'މަސް %d',
	            y : 'އަހަރެއް',
	            yy : 'އަހަރު %d'
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week : {
	            dow : 7,  // Sunday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return dv;
	
	}));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Greek [el]
	//! author : Aggelos Karalias : https://github.com/mehiel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	
	    var el = moment.defineLocale('el', {
	        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months : function (momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'μ');
	        },
	        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendarEl : {
	            sameDay : '[Σήμερα {}] LT',
	            nextDay : '[Αύριο {}] LT',
	            nextWeek : 'dddd [{}] LT',
	            lastDay : '[Χθες {}] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (isFunction(output)) {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	        },
	        relativeTime : {
	            future : 'σε %s',
	            past : '%s πριν',
	            s : 'λίγα δευτερόλεπτα',
	            m : 'ένα λεπτό',
	            mm : '%d λεπτά',
	            h : 'μία ώρα',
	            hh : '%d ώρες',
	            d : 'μία μέρα',
	            dd : '%d μέρες',
	            M : 'ένας μήνας',
	            MM : '%d μήνες',
	            y : 'ένας χρόνος',
	            yy : '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4st is the first week of the year.
	        }
	    });
	
	    return el;
	
	}));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Australia) [en-au]
	//! author : Jared Morse : https://github.com/jarcoal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_au = moment.defineLocale('en-au', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_au;
	
	}));

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Canada) [en-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_ca = moment.defineLocale('en-ca', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'YYYY-MM-DD',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY h:mm A',
	            LLLL : 'dddd, MMMM D, YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    return en_ca;
	
	}));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (United Kingdom) [en-gb]
	//! author : Chris Gedrim : https://github.com/chrisgedrim
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_gb = moment.defineLocale('en-gb', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_gb;
	
	}));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Ireland) [en-ie]
	//! author : Chris Cartlidge : https://github.com/chriscartlidge
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_ie = moment.defineLocale('en-ie', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_ie;
	
	}));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (New Zealand) [en-nz]
	//! author : Luke McGregor : https://github.com/lukemcgregor
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var en_nz = moment.defineLocale('en-nz', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return en_nz;
	
	}));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Esperanto [eo]
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var eo = moment.defineLocale('eo', {
	        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D[-an de] MMMM, YYYY',
	            LLL : 'D[-an de] MMMM, YYYY HH:mm',
	            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar : {
	            sameDay : '[Hodiaŭ je] LT',
	            nextDay : '[Morgaŭ je] LT',
	            nextWeek : 'dddd [je] LT',
	            lastDay : '[Hieraŭ je] LT',
	            lastWeek : '[pasinta] dddd [je] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'je %s',
	            past : 'antaŭ %s',
	            s : 'sekundoj',
	            m : 'minuto',
	            mm : '%d minutoj',
	            h : 'horo',
	            hh : '%d horoj',
	            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	            dd : '%d tagoj',
	            M : 'monato',
	            MM : '%d monatoj',
	            y : 'jaro',
	            yy : '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal : '%da',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return eo;
	
	}));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish [es]
	//! author : Julio Napurí : https://github.com/julionc
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
	
	    var es = moment.defineLocale('es', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY H:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return es;
	
	}));

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish (Dominican Republic) [es-do]
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
	
	    var es_do = moment.defineLocale('es-do', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY h:mm A',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return es_do;
	
	}));

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Estonian [et]
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm' : ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd' : ['ühe päeva', 'üks päev'],
	            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }
	
	    var et = moment.defineLocale('et', {
	        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat : {
	            LT   : 'H:mm',
	            LTS : 'H:mm:ss',
	            L    : 'DD.MM.YYYY',
	            LL   : 'D. MMMM YYYY',
	            LLL  : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[Täna,] LT',
	            nextDay  : '[Homme,] LT',
	            nextWeek : '[Järgmine] dddd LT',
	            lastDay  : '[Eile,] LT',
	            lastWeek : '[Eelmine] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s pärast',
	            past   : '%s tagasi',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : '%d päeva',
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return et;
	
	}));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Basque [eu]
	//! author : Eneko Illarramendi : https://github.com/eillarra
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var eu = moment.defineLocale('eu', {
	        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY[ko] MMMM[ren] D[a]',
	            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l : 'YYYY-M-D',
	            ll : 'YYYY[ko] MMM D[a]',
	            lll : 'YYYY[ko] MMM D[a] HH:mm',
	            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
	        },
	        calendar : {
	            sameDay : '[gaur] LT[etan]',
	            nextDay : '[bihar] LT[etan]',
	            nextWeek : 'dddd LT[etan]',
	            lastDay : '[atzo] LT[etan]',
	            lastWeek : '[aurreko] dddd LT[etan]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s barru',
	            past : 'duela %s',
	            s : 'segundo batzuk',
	            m : 'minutu bat',
	            mm : '%d minutu',
	            h : 'ordu bat',
	            hh : '%d ordu',
	            d : 'egun bat',
	            dd : '%d egun',
	            M : 'hilabete bat',
	            MM : '%d hilabete',
	            y : 'urte bat',
	            yy : '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return eu;
	
	}));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian [fa]
	//! author : Ebrahim Byagowi : https://github.com/ebraminio
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    }, numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };
	
	    var fa = moment.defineLocale('fa', {
	        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar : {
	            sameDay : '[امروز ساعت] LT',
	            nextDay : '[فردا ساعت] LT',
	            nextWeek : 'dddd [ساعت] LT',
	            lastDay : '[دیروز ساعت] LT',
	            lastWeek : 'dddd [پیش] [ساعت] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'در %s',
	            past : '%s پیش',
	            s : 'چندین ثانیه',
	            m : 'یک دقیقه',
	            mm : '%d دقیقه',
	            h : 'یک ساعت',
	            hh : '%d ساعت',
	            d : 'یک روز',
	            dd : '%d روز',
	            M : 'یک ماه',
	            MM : '%d ماه',
	            y : 'یک سال',
	            yy : '%d سال'
	        },
	        preparse: function (string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal : '%dم',
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return fa;
	
	}));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Finnish [fi]
	//! author : Tarmo Aidantausta : https://github.com/bleadof
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = [
	            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	            numbersPast[7], numbersPast[8], numbersPast[9]
	        ];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	            case 's':
	                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	            case 'm':
	                return isFuture ? 'minuutin' : 'minuutti';
	            case 'mm':
	                result = isFuture ? 'minuutin' : 'minuuttia';
	                break;
	            case 'h':
	                return isFuture ? 'tunnin' : 'tunti';
	            case 'hh':
	                result = isFuture ? 'tunnin' : 'tuntia';
	                break;
	            case 'd':
	                return isFuture ? 'päivän' : 'päivä';
	            case 'dd':
	                result = isFuture ? 'päivän' : 'päivää';
	                break;
	            case 'M':
	                return isFuture ? 'kuukauden' : 'kuukausi';
	            case 'MM':
	                result = isFuture ? 'kuukauden' : 'kuukautta';
	                break;
	            case 'y':
	                return isFuture ? 'vuoden' : 'vuosi';
	            case 'yy':
	                result = isFuture ? 'vuoden' : 'vuotta';
	                break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	    }
	
	    var fi = moment.defineLocale('fi', {
	        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'Do MMMM[ta] YYYY',
	            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l : 'D.M.YYYY',
	            ll : 'Do MMM YYYY',
	            lll : 'Do MMM YYYY, [klo] HH.mm',
	            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
	        },
	        calendar : {
	            sameDay : '[tänään] [klo] LT',
	            nextDay : '[huomenna] [klo] LT',
	            nextWeek : 'dddd [klo] LT',
	            lastDay : '[eilen] [klo] LT',
	            lastWeek : '[viime] dddd[na] [klo] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s päästä',
	            past : '%s sitten',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fi;
	
	}));

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Faroese [fo]
	//! author : Ragnar Johannesen : https://github.com/ragnar123
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fo = moment.defineLocale('fo', {
	        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D. MMMM, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Í dag kl.] LT',
	            nextDay : '[Í morgin kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[Í gjár kl.] LT',
	            lastWeek : '[síðstu] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'um %s',
	            past : '%s síðani',
	            s : 'fá sekund',
	            m : 'ein minutt',
	            mm : '%d minuttir',
	            h : 'ein tími',
	            hh : '%d tímar',
	            d : 'ein dagur',
	            dd : '%d dagar',
	            M : 'ein mánaði',
	            MM : '%d mánaðir',
	            y : 'eitt ár',
	            yy : '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fo;
	
	}));

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French [fr]
	//! author : John Fischer : https://github.com/jfroffice
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr = moment.defineLocale('fr', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fr;
	
	}));

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Canada) [fr-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr_ca = moment.defineLocale('fr-ca', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        }
	    });
	
	    return fr_ca;
	
	}));

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Switzerland) [fr-ch]
	//! author : Gaspard Bucher : https://github.com/gaspard
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var fr_ch = moment.defineLocale('fr-ch', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fr_ch;
	
	}));

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Frisian [fy]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
	
	    var fy = moment.defineLocale('fy', {
	        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'oer %s',
	            past : '%s lyn',
	            s : 'in pear sekonden',
	            m : 'ien minút',
	            mm : '%d minuten',
	            h : 'ien oere',
	            hh : '%d oeren',
	            d : 'ien dei',
	            dd : '%d dagen',
	            M : 'ien moanne',
	            MM : '%d moannen',
	            y : 'ien jier',
	            yy : '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return fy;
	
	}));

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Scottish Gaelic [gd]
	//! author : Jon Ashdown : https://github.com/jonashdown
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = [
	        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
	    ];
	
	    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];
	
	    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];
	
	    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];
	
	    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
	
	    var gd = moment.defineLocale('gd', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParseExact : true,
	        weekdays : weekdays,
	        weekdaysShort : weekdaysShort,
	        weekdaysMin : weekdaysMin,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[An-diugh aig] LT',
	            nextDay : '[A-màireach aig] LT',
	            nextWeek : 'dddd [aig] LT',
	            lastDay : '[An-dè aig] LT',
	            lastWeek : 'dddd [seo chaidh] [aig] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ann an %s',
	            past : 'bho chionn %s',
	            s : 'beagan diogan',
	            m : 'mionaid',
	            mm : '%d mionaidean',
	            h : 'uair',
	            hh : '%d uairean',
	            d : 'latha',
	            dd : '%d latha',
	            M : 'mìos',
	            MM : '%d mìosan',
	            y : 'bliadhna',
	            yy : '%d bliadhna'
	        },
	        ordinalParse : /\d{1,2}(d|na|mh)/,
	        ordinal : function (number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return gd;
	
	}));

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Galician [gl]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var gl = moment.defineLocale('gl', {
	        months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
	        monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY H:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            lastDay : function () {
	                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	            },
	            lastWeek : function () {
	                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (str) {
	                if (str.indexOf('un') === 0) {
	                    return 'n' + str;
	                }
	                return 'en ' + str;
	            },
	            past : 'hai %s',
	            s : 'uns segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'unha hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un ano',
	            yy : '%d anos'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return gl;
	
	}));

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew [he]
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var he = moment.defineLocale('he', {
	        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [ב]MMMM YYYY',
	            LLL : 'D [ב]MMMM YYYY HH:mm',
	            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
	            l : 'D/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[היום ב־]LT',
	            nextDay : '[מחר ב־]LT',
	            nextWeek : 'dddd [בשעה] LT',
	            lastDay : '[אתמול ב־]LT',
	            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'בעוד %s',
	            past : 'לפני %s',
	            s : 'מספר שניות',
	            m : 'דקה',
	            mm : '%d דקות',
	            h : 'שעה',
	            hh : function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d : 'יום',
	            dd : function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M : 'חודש',
	            MM : function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y : 'שנה',
	            yy : function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        },
	        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	        isPM : function (input) {
	            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 5) {
	                return 'לפנות בוקר';
	            } else if (hour < 10) {
	                return 'בבוקר';
	            } else if (hour < 12) {
	                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	            } else if (hour < 18) {
	                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	            } else {
	                return 'בערב';
	            }
	        }
	    });
	
	    return he;
	
	}));

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hindi [hi]
	//! author : Mayank Singhal : https://github.com/mayanksinghal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    var hi = moment.defineLocale('hi', {
	        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm बजे',
	            LTS : 'A h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[कल] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[कल] LT',
	            lastWeek : '[पिछले] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s में',
	            past : '%s पहले',
	            s : 'कुछ ही क्षण',
	            m : 'एक मिनट',
	            mm : '%d मिनट',
	            h : 'एक घंटा',
	            hh : '%d घंटे',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महीने',
	            MM : '%d महीने',
	            y : 'एक वर्ष',
	            yy : '%d वर्ष'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hi;
	
	}));

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Croatian [hr]
	//! author : Bojan Marković : https://github.com/bmarkovic
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }
	
	    var hr = moment.defineLocale('hr', {
	        months : {
	            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	        },
	        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hr;
	
	}));

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hungarian [hu]
	//! author : Adam Brunner : https://github.com/adambrunner
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;
	        switch (key) {
	            case 's':
	                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	            case 'm':
	                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'mm':
	                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'h':
	                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'hh':
	                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'd':
	                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'dd':
	                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'M':
	                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'MM':
	                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'y':
	                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	            case 'yy':
	                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }
	
	    var hu = moment.defineLocale('hu', {
	        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'YYYY.MM.DD.',
	            LL : 'YYYY. MMMM D.',
	            LLL : 'YYYY. MMMM D. H:mm',
	            LLLL : 'YYYY. MMMM D., dddd H:mm'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar : {
	            sameDay : '[ma] LT[-kor]',
	            nextDay : '[holnap] LT[-kor]',
	            nextWeek : function () {
	                return week.call(this, true);
	            },
	            lastDay : '[tegnap] LT[-kor]',
	            lastWeek : function () {
	                return week.call(this, false);
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s múlva',
	            past : '%s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hu;
	
	}));

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian [hy-am]
	//! author : Armendarabyan : https://github.com/armendarabyan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var hy_am = moment.defineLocale('hy-am', {
	        months : {
	            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	        },
	        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY թ.',
	            LLL : 'D MMMM YYYY թ., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
	        },
	        calendar : {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s հետո',
	            past : '%s առաջ',
	            s : 'մի քանի վայրկյան',
	            m : 'րոպե',
	            mm : '%d րոպե',
	            h : 'ժամ',
	            hh : '%d ժամ',
	            d : 'օր',
	            dd : '%d օր',
	            M : 'ամիս',
	            MM : '%d ամիս',
	            y : 'տարի',
	            yy : '%d տարի'
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem : function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'DDD':
	                case 'w':
	                case 'W':
	                case 'DDDo':
	                    if (number === 1) {
	                        return number + '-ին';
	                    }
	                    return number + '-րդ';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return hy_am;
	
	}));

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Indonesian [id]
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var id = moment.defineLocale('id', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Besok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kemarin pukul] LT',
	            lastWeek : 'dddd [lalu pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lalu',
	            s : 'beberapa detik',
	            m : 'semenit',
	            mm : '%d menit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return id;
	
	}));

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Icelandic [is]
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	            case 'm':
	                return withoutSuffix ? 'mínúta' : 'mínútu';
	            case 'mm':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	                } else if (withoutSuffix) {
	                    return result + 'mínúta';
	                }
	                return result + 'mínútu';
	            case 'hh':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	                }
	                return result + 'klukkustund';
	            case 'd':
	                if (withoutSuffix) {
	                    return 'dagur';
	                }
	                return isFuture ? 'dag' : 'degi';
	            case 'dd':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'dagar';
	                    }
	                    return result + (isFuture ? 'daga' : 'dögum');
	                } else if (withoutSuffix) {
	                    return result + 'dagur';
	                }
	                return result + (isFuture ? 'dag' : 'degi');
	            case 'M':
	                if (withoutSuffix) {
	                    return 'mánuður';
	                }
	                return isFuture ? 'mánuð' : 'mánuði';
	            case 'MM':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'mánuðir';
	                    }
	                    return result + (isFuture ? 'mánuði' : 'mánuðum');
	                } else if (withoutSuffix) {
	                    return result + 'mánuður';
	                }
	                return result + (isFuture ? 'mánuð' : 'mánuði');
	            case 'y':
	                return withoutSuffix || isFuture ? 'ár' : 'ári';
	            case 'yy':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	                }
	                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }
	
	    var is = moment.defineLocale('is', {
	        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
	        },
	        calendar : {
	            sameDay : '[í dag kl.] LT',
	            nextDay : '[á morgun kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[í gær kl.] LT',
	            lastWeek : '[síðasta] dddd [kl.] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'eftir %s',
	            past : 'fyrir %s síðan',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : 'klukkustund',
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return is;
	
	}));

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Italian [it]
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var it = moment.defineLocale('it', {
	        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past : '%s fa',
	            s : 'alcuni secondi',
	            m : 'un minuto',
	            mm : '%d minuti',
	            h : 'un\'ora',
	            hh : '%d ore',
	            d : 'un giorno',
	            dd : '%d giorni',
	            M : 'un mese',
	            MM : '%d mesi',
	            y : 'un anno',
	            yy : '%d anni'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return it;
	
	}));

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Japanese [ja]
	//! author : LI Long : https://github.com/baryon
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ja = moment.defineLocale('ja', {
	        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat : {
	            LT : 'Ah時m分',
	            LTS : 'Ah時m分s秒',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY年M月D日',
	            LLL : 'YYYY年M月D日Ah時m分',
	            LLLL : 'YYYY年M月D日Ah時m分 dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM : function (input) {
	            return input === '午後';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar : {
	            sameDay : '[今日] LT',
	            nextDay : '[明日] LT',
	            nextWeek : '[来週]dddd LT',
	            lastDay : '[昨日] LT',
	            lastWeek : '[前週]dddd LT',
	            sameElse : 'L'
	        },
	        ordinalParse : /\d{1,2}日/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                default:
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s後',
	            past : '%s前',
	            s : '数秒',
	            m : '1分',
	            mm : '%d分',
	            h : '1時間',
	            hh : '%d時間',
	            d : '1日',
	            dd : '%d日',
	            M : '1ヶ月',
	            MM : '%dヶ月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });
	
	    return ja;
	
	}));

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Javanese [jv]
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var jv = moment.defineLocale('jv', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar : {
	            sameDay : '[Dinten puniko pukul] LT',
	            nextDay : '[Mbenjang pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kala wingi pukul] LT',
	            lastWeek : 'dddd [kepengker pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'wonten ing %s',
	            past : '%s ingkang kepengker',
	            s : 'sawetawis detik',
	            m : 'setunggal menit',
	            mm : '%d menit',
	            h : 'setunggal jam',
	            hh : '%d jam',
	            d : 'sedinten',
	            dd : '%d dinten',
	            M : 'sewulan',
	            MM : '%d wulan',
	            y : 'setaun',
	            yy : '%d taun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return jv;
	
	}));

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian [ka]
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ka = moment.defineLocale('ka', {
	        months : {
	            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },
	        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays : {
	            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	            isFormat: /(წინა|შემდეგ)/
	        },
	        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[დღეს] LT[-ზე]',
	            nextDay : '[ხვალ] LT[-ზე]',
	            lastDay : '[გუშინ] LT[-ზე]',
	            nextWeek : '[შემდეგ] dddd LT[-ზე]',
	            lastWeek : '[წინა] dddd LT-ზე',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                    s.replace(/ი$/, 'ში') :
	                    s + 'ში';
	            },
	            past : function (s) {
	                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if ((/წელი/).test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s : 'რამდენიმე წამი',
	            m : 'წუთი',
	            mm : '%d წუთი',
	            h : 'საათი',
	            hh : '%d საათი',
	            d : 'დღე',
	            dd : '%d დღე',
	            M : 'თვე',
	            MM : '%d თვე',
	            y : 'წელი',
	            yy : '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal : function (number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week : {
	            dow : 1,
	            doy : 7
	        }
	    });
	
	    return ka;
	
	}));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kazakh [kk]
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        0: '-ші',
	        1: '-ші',
	        2: '-ші',
	        3: '-ші',
	        4: '-ші',
	        5: '-ші',
	        6: '-шы',
	        7: '-ші',
	        8: '-ші',
	        9: '-шы',
	        10: '-шы',
	        20: '-шы',
	        30: '-шы',
	        40: '-шы',
	        50: '-ші',
	        60: '-шы',
	        70: '-ші',
	        80: '-ші',
	        90: '-шы',
	        100: '-ші'
	    };
	
	    var kk = moment.defineLocale('kk', {
	        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
	        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
	        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгін сағат] LT',
	            nextDay : '[Ертең сағат] LT',
	            nextWeek : 'dddd [сағат] LT',
	            lastDay : '[Кеше сағат] LT',
	            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ішінде',
	            past : '%s бұрын',
	            s : 'бірнеше секунд',
	            m : 'бір минут',
	            mm : '%d минут',
	            h : 'бір сағат',
	            hh : '%d сағат',
	            d : 'бір күн',
	            dd : '%d күн',
	            M : 'бір ай',
	            MM : '%d ай',
	            y : 'бір жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(ші|шы)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return kk;
	
	}));

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Cambodian [km]
	//! author : Kruy Vanna : https://github.com/kruyvanna
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return km;
	
	}));

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Korean [ko]
	//! author : Kyungwook, Park : https://github.com/kyungw00k
	//! author : Jeeeyul Lee <jeeeyul@gmail.com>
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ko = moment.defineLocale('ko', {
	        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat : {
	            LT : 'A h시 m분',
	            LTS : 'A h시 m분 s초',
	            L : 'YYYY.MM.DD',
	            LL : 'YYYY년 MMMM D일',
	            LLL : 'YYYY년 MMMM D일 A h시 m분',
	            LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
	        },
	        calendar : {
	            sameDay : '오늘 LT',
	            nextDay : '내일 LT',
	            nextWeek : 'dddd LT',
	            lastDay : '어제 LT',
	            lastWeek : '지난주 dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s 후',
	            past : '%s 전',
	            s : '몇 초',
	            ss : '%d초',
	            m : '일분',
	            mm : '%d분',
	            h : '한 시간',
	            hh : '%d시간',
	            d : '하루',
	            dd : '%d일',
	            M : '한 달',
	            MM : '%d달',
	            y : '일 년',
	            yy : '%d년'
	        },
	        ordinalParse : /\d{1,2}일/,
	        ordinal : '%d일',
	        meridiemParse : /오전|오후/,
	        isPM : function (token) {
	            return token === '오후';
	        },
	        meridiem : function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });
	
	    return ko;
	
	}));

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kyrgyz [ky]
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var suffixes = {
	        0: '-чү',
	        1: '-чи',
	        2: '-чи',
	        3: '-чү',
	        4: '-чү',
	        5: '-чи',
	        6: '-чы',
	        7: '-чи',
	        8: '-чи',
	        9: '-чу',
	        10: '-чу',
	        20: '-чы',
	        30: '-чу',
	        40: '-чы',
	        50: '-чү',
	        60: '-чы',
	        70: '-чи',
	        80: '-чи',
	        90: '-чу',
	        100: '-чү'
	    };
	
	    var ky = moment.defineLocale('ky', {
	        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
	        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгүн саат] LT',
	            nextDay : '[Эртең саат] LT',
	            nextWeek : 'dddd [саат] LT',
	            lastDay : '[Кече саат] LT',
	            lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ичинде',
	            past : '%s мурун',
	            s : 'бирнече секунд',
	            m : 'бир мүнөт',
	            mm : '%d мүнөт',
	            h : 'бир саат',
	            hh : '%d саат',
	            d : 'бир күн',
	            dd : '%d күн',
	            M : 'бир ай',
	            MM : '%d ай',
	            y : 'бир жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ky;
	
	}));

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish [lb]
	//! author : mweimerskirch : https://github.com/mweimerskirch
	//! author : David Raison : https://github.com/kwisatz
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10, firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }
	
	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime : {
	            future : processFutureTime,
	            past : processPastTime,
	            s : 'e puer Sekonnen',
	            m : processRelativeTime,
	            mm : '%d Minutten',
	            h : processRelativeTime,
	            hh : '%d Stonnen',
	            d : processRelativeTime,
	            dd : '%d Deeg',
	            M : processRelativeTime,
	            MM : '%d Méint',
	            y : processRelativeTime,
	            yy : '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lb;
	
	}));

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lao [lo]
	//! author : Ryan Hart : https://github.com/ryanhart2
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var lo = moment.defineLocale('lo', {
	        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	        isPM: function (input) {
	            return input === 'ຕອນແລງ';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ຕອນເຊົ້າ';
	            } else {
	                return 'ຕອນແລງ';
	            }
	        },
	        calendar : {
	            sameDay : '[ມື້ນີ້ເວລາ] LT',
	            nextDay : '[ມື້ອື່ນເວລາ] LT',
	            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
	            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
	            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ອີກ %s',
	            past : '%sຜ່ານມາ',
	            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
	            m : '1 ນາທີ',
	            mm : '%d ນາທີ',
	            h : '1 ຊົ່ວໂມງ',
	            hh : '%d ຊົ່ວໂມງ',
	            d : '1 ມື້',
	            dd : '%d ມື້',
	            M : '1 ເດືອນ',
	            MM : '%d ເດືອນ',
	            y : '1 ປີ',
	            yy : '%d ປີ'
	        },
	        ordinalParse: /(ທີ່)\d{1,2}/,
	        ordinal : function (number) {
	            return 'ທີ່' + number;
	        }
	    });
	
	    return lo;
	
	}));

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian [lt]
	//! author : Mindaugas Mozūras : https://github.com/mmozuras
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var units = {
	        'm' : 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h' : 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd' : 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M' : 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y' : 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }
	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    var lt = moment.defineLocale('lt', {
	        months : {
	            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
	            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
	        },
	        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays : {
	            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	            isFormat: /dddd HH:mm/
	        },
	        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY [m.] MMMM D [d.]',
	            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY [m.] MMMM D [d.]',
	            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	        },
	        calendar : {
	            sameDay : '[Šiandien] LT',
	            nextDay : '[Rytoj] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[Vakar] LT',
	            lastWeek : '[Praėjusį] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'po %s',
	            past : 'prieš %s',
	            s : translateSeconds,
	            m : translateSingular,
	            mm : translate,
	            h : translateSingular,
	            hh : translate,
	            d : translateSingular,
	            dd : translate,
	            M : translateSingular,
	            MM : translate,
	            y : translateSingular,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal : function (number) {
	            return number + '-oji';
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lt;
	
	}));

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Latvian [lv]
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var units = {
	        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'h': 'stundas_stundām_stunda_stundas'.split('_'),
	        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	        'd': 'dienas_dienām_diena_dienas'.split('_'),
	        'dd': 'dienas_dienām_diena_dienas'.split('_'),
	        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'y': 'gada_gadiem_gads_gadi'.split('_'),
	        'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }
	
	    var lv = moment.defineLocale('lv', {
	        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY.',
	            LL : 'YYYY. [gada] D. MMMM',
	            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	        },
	        calendar : {
	            sameDay : '[Šodien pulksten] LT',
	            nextDay : '[Rīt pulksten] LT',
	            nextWeek : 'dddd [pulksten] LT',
	            lastDay : '[Vakar pulksten] LT',
	            lastWeek : '[Pagājušā] dddd [pulksten] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'pēc %s',
	            past : 'pirms %s',
	            s : relativeSeconds,
	            m : relativeTimeWithSingular,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithSingular,
	            hh : relativeTimeWithPlural,
	            d : relativeTimeWithSingular,
	            dd : relativeTimeWithPlural,
	            M : relativeTimeWithSingular,
	            MM : relativeTimeWithPlural,
	            y : relativeTimeWithSingular,
	            yy : relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return lv;
	
	}));

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin [me]
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var me = moment.defineLocale('me', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',
	
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedjelje] [u] LT',
	                    '[prošlog] [ponedjeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srijede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mjesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return me;
	
	}));

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maori [mi]
	//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var mi = moment.defineLocale('mi', {
	        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
	        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
	        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
	        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
	        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
	        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [i] HH:mm',
	            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
	        },
	        calendar: {
	            sameDay: '[i teie mahana, i] LT',
	            nextDay: '[apopo i] LT',
	            nextWeek: 'dddd [i] LT',
	            lastDay: '[inanahi i] LT',
	            lastWeek: 'dddd [whakamutunga i] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'i roto i %s',
	            past: '%s i mua',
	            s: 'te hēkona ruarua',
	            m: 'he meneti',
	            mm: '%d meneti',
	            h: 'te haora',
	            hh: '%d haora',
	            d: 'he ra',
	            dd: '%d ra',
	            M: 'he marama',
	            MM: '%d marama',
	            y: 'he tau',
	            yy: '%d tau'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return mi;
	
	}));

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Macedonian [mk]
	//! author : Borislav Mickov : https://github.com/B0k0
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var mk = moment.defineLocale('mk', {
	        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Денес во] LT',
	            nextDay : '[Утре во] LT',
	            nextWeek : '[Во] dddd [во] LT',
	            lastDay : '[Вчера во] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Изминатата] dddd [во] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'после %s',
	            past : 'пред %s',
	            s : 'неколку секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дена',
	            M : 'месец',
	            MM : '%d месеци',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return mk;
	
	}));

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malayalam [ml]
	//! author : Floyd Pink : https://github.com/floydpink
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ml = moment.defineLocale('ml', {
	        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm -നു',
	            LTS : 'A h:mm:ss -നു',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm -നു',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
	        },
	        calendar : {
	            sameDay : '[ഇന്ന്] LT',
	            nextDay : '[നാളെ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ഇന്നലെ] LT',
	            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s കഴിഞ്ഞ്',
	            past : '%s മുൻപ്',
	            s : 'അൽപ നിമിഷങ്ങൾ',
	            m : 'ഒരു മിനിറ്റ്',
	            mm : '%d മിനിറ്റ്',
	            h : 'ഒരു മണിക്കൂർ',
	            hh : '%d മണിക്കൂർ',
	            d : 'ഒരു ദിവസം',
	            dd : '%d ദിവസം',
	            M : 'ഒരു മാസം',
	            MM : '%d മാസം',
	            y : 'ഒരു വർഷം',
	            yy : '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'രാത്രി' && hour >= 4) ||
	                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
	                    meridiem === 'വൈകുന്നേരം') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });
	
	    return ml;
	
	}));

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi [mr]
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    function relativeTimeMr(number, withoutSuffix, string, isFuture)
	    {
	        var output = '';
	        if (withoutSuffix) {
	            switch (string) {
	                case 's': output = 'काही सेकंद'; break;
	                case 'm': output = 'एक मिनिट'; break;
	                case 'mm': output = '%d मिनिटे'; break;
	                case 'h': output = 'एक तास'; break;
	                case 'hh': output = '%d तास'; break;
	                case 'd': output = 'एक दिवस'; break;
	                case 'dd': output = '%d दिवस'; break;
	                case 'M': output = 'एक महिना'; break;
	                case 'MM': output = '%d महिने'; break;
	                case 'y': output = 'एक वर्ष'; break;
	                case 'yy': output = '%d वर्षे'; break;
	            }
	        }
	        else {
	            switch (string) {
	                case 's': output = 'काही सेकंदां'; break;
	                case 'm': output = 'एका मिनिटा'; break;
	                case 'mm': output = '%d मिनिटां'; break;
	                case 'h': output = 'एका तासा'; break;
	                case 'hh': output = '%d तासां'; break;
	                case 'd': output = 'एका दिवसा'; break;
	                case 'dd': output = '%d दिवसां'; break;
	                case 'M': output = 'एका महिन्या'; break;
	                case 'MM': output = '%d महिन्यां'; break;
	                case 'y': output = 'एका वर्षा'; break;
	                case 'yy': output = '%d वर्षां'; break;
	            }
	        }
	        return output.replace(/%d/i, number);
	    }
	
	    var mr = moment.defineLocale('mr', {
	        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm वाजता',
	            LTS : 'A h:mm:ss वाजता',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm वाजता',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[उद्या] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future: '%sमध्ये',
	            past: '%sपूर्वी',
	            s: relativeTimeMr,
	            m: relativeTimeMr,
	            mm: relativeTimeMr,
	            h: relativeTimeMr,
	            hh: relativeTimeMr,
	            d: relativeTimeMr,
	            dd: relativeTimeMr,
	            M: relativeTimeMr,
	            MM: relativeTimeMr,
	            y: relativeTimeMr,
	            yy: relativeTimeMr
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return mr;
	
	}));

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms]
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ms = moment.defineLocale('ms', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ms;
	
	}));

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms-my]
	//! note : DEPRECATED, the correct one is [ms]
	//! author : Weldan Jamili : https://github.com/weldan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var ms_my = moment.defineLocale('ms-my', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ms_my;
	
	}));

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese [my]
	//! author : Squar team, mysquar.com
	//! author : David Rossellat : https://github.com/gholadr
	//! author : Tin Aung Lin : https://github.com/thanyawzinmin
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    }, numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };
	
	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return my;
	
	}));

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Norwegian Bokmål [nb]
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var nb = moment.defineLocale('nb', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'noen sekunder',
	            m : 'ett minutt',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dager',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nb;
	
	}));

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nepalese [ne]
	//! author : suvash : https://github.com/suvash
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };
	
	    var ne = moment.defineLocale('ne', {
	        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'Aको h:mm बजे',
	            LTS : 'Aको h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राति') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राति';
	            } else if (hour < 12) {
	                return 'बिहान';
	            } else if (hour < 16) {
	                return 'दिउँसो';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राति';
	            }
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[भोलि] LT',
	            nextWeek : '[आउँदो] dddd[,] LT',
	            lastDay : '[हिजो] LT',
	            lastWeek : '[गएको] dddd[,] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sमा',
	            past : '%s अगाडि',
	            s : 'केही क्षण',
	            m : 'एक मिनेट',
	            mm : '%d मिनेट',
	            h : 'एक घण्टा',
	            hh : '%d घण्टा',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महिना',
	            MM : '%d महिना',
	            y : 'एक बर्ष',
	            yy : '%d बर्ष'
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ne;
	
	}));

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch [nl]
	//! author : Joris Röling : https://github.com/jorisroling
	//! author : Jacob Middag : https://github.com/middagj
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
	
	    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
	    var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
	
	    var nl = moment.defineLocale('nl', {
	        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	
	        monthsRegex: monthsRegex,
	        monthsShortRegex: monthsRegex,
	        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
	        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
	
	        monthsParse : monthsParse,
	        longMonthsParse : monthsParse,
	        shortMonthsParse : monthsParse,
	
	        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'over %s',
	            past : '%s geleden',
	            s : 'een paar seconden',
	            m : 'één minuut',
	            mm : '%d minuten',
	            h : 'één uur',
	            hh : '%d uur',
	            d : 'één dag',
	            dd : '%d dagen',
	            M : 'één maand',
	            MM : '%d maanden',
	            y : 'één jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nl;
	
	}));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nynorsk [nn]
	//! author : https://github.com/mechuwind
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var nn = moment.defineLocale('nn', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s sidan',
	            s : 'nokre sekund',
	            m : 'eit minutt',
	            mm : '%d minutt',
	            h : 'ein time',
	            hh : '%d timar',
	            d : 'ein dag',
	            dd : '%d dagar',
	            M : 'ein månad',
	            MM : '%d månader',
	            y : 'eit år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return nn;
	
	}));

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Punjabi (India) [pa-in]
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '੧',
	        '2': '੨',
	        '3': '੩',
	        '4': '੪',
	        '5': '੫',
	        '6': '੬',
	        '7': '੭',
	        '8': '੮',
	        '9': '੯',
	        '0': '੦'
	    },
	    numberMap = {
	        '੧': '1',
	        '੨': '2',
	        '੩': '3',
	        '੪': '4',
	        '੫': '5',
	        '੬': '6',
	        '੭': '7',
	        '੮': '8',
	        '੯': '9',
	        '੦': '0'
	    };
	
	    var pa_in = moment.defineLocale('pa-in', {
	        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
	        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
	        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm ਵਜੇ',
	            LTS : 'A h:mm:ss ਵਜੇ',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
	        },
	        calendar : {
	            sameDay : '[ਅਜ] LT',
	            nextDay : '[ਕਲ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ਕਲ] LT',
	            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ਵਿੱਚ',
	            past : '%s ਪਿਛਲੇ',
	            s : 'ਕੁਝ ਸਕਿੰਟ',
	            m : 'ਇਕ ਮਿੰਟ',
	            mm : '%d ਮਿੰਟ',
	            h : 'ਇੱਕ ਘੰਟਾ',
	            hh : '%d ਘੰਟੇ',
	            d : 'ਇੱਕ ਦਿਨ',
	            dd : '%d ਦਿਨ',
	            M : 'ਇੱਕ ਮਹੀਨਾ',
	            MM : '%d ਮਹੀਨੇ',
	            y : 'ਇੱਕ ਸਾਲ',
	            yy : '%d ਸਾਲ'
	        },
	        preparse: function (string) {
	            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
	        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ਰਾਤ') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ਸਵੇਰ') {
	                return hour;
	            } else if (meridiem === 'ਦੁਪਹਿਰ') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'ਸ਼ਾਮ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ਰਾਤ';
	            } else if (hour < 10) {
	                return 'ਸਵੇਰ';
	            } else if (hour < 17) {
	                return 'ਦੁਪਹਿਰ';
	            } else if (hour < 20) {
	                return 'ਸ਼ਾਮ';
	            } else {
	                return 'ਰਾਤ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return pa_in;
	
	}));

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Polish [pl]
	//! author : Rafal Hirsz : https://github.com/evoL
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'minuta' : 'minutę';
	            case 'mm':
	                return result + (plural(number) ? 'minuty' : 'minut');
	            case 'h':
	                return withoutSuffix  ? 'godzina'  : 'godzinę';
	            case 'hh':
	                return result + (plural(number) ? 'godziny' : 'godzin');
	            case 'MM':
	                return result + (plural(number) ? 'miesiące' : 'miesięcy');
	            case 'yy':
	                return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }
	
	    var pl = moment.defineLocale('pl', {
	        months : function (momentToFormat, format) {
	            if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[W zeszłą niedzielę o] LT';
	                    case 3:
	                        return '[W zeszłą środę o] LT';
	                    case 6:
	                        return '[W zeszłą sobotę o] LT';
	                    default:
	                        return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : '%s temu',
	            s : 'kilka sekund',
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : '1 dzień',
	            dd : '%d dni',
	            M : 'miesiąc',
	            MM : translate,
	            y : 'rok',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return pl;
	
	}));

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese [pt]
	//! author : Jefferson : https://github.com/jalex79
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var pt = moment.defineLocale('pt', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : 'há %s',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return pt;
	
	}));

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese (Brazil) [pt-br]
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var pt_br = moment.defineLocale('pt-br', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'poucos segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº'
	    });
	
	    return pt_br;
	
	}));

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Romanian [ro]
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                'mm': 'minute',
	                'hh': 'ore',
	                'dd': 'zile',
	                'MM': 'luni',
	                'yy': 'ani'
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }
	
	    var ro = moment.defineLocale('ro', {
	        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'peste %s',
	            past : '%s în urmă',
	            s : 'câteva secunde',
	            m : 'un minut',
	            mm : relativeTimeWithPlural,
	            h : 'o oră',
	            hh : relativeTimeWithPlural,
	            d : 'o zi',
	            dd : relativeTimeWithPlural,
	            M : 'o lună',
	            MM : relativeTimeWithPlural,
	            y : 'un an',
	            yy : relativeTimeWithPlural
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ro;
	
	}));

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Russian [ru]
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
	
	    // http://new.gramota.ru/spravka/rules/139-prop : § 103
	    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	    var ru = moment.defineLocale('ru', {
	        months : {
	            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
	            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
	        },
	        monthsShort : {
	            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
	            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
	            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
	        },
	        weekdays : {
	            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	        },
	        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse : monthsParse,
	        longMonthsParse : monthsParse,
	        shortMonthsParse : monthsParse,
	
	        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
	        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	
	        // копия предыдущего
	        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
	
	        // полные названия с падежами
	        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
	
	        // Выражение, которое соотвествует только сокращённым формам
	        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В следующее] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В следующий] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В следующую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В прошлое] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В прошлый] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'через %s',
	            past : '%s назад',
	            s : 'несколько секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'час',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM : function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                case 'w':
	                case 'W':
	                    return number + '-я';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ru;
	
	}));

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami [se]
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var se = moment.defineLocale('se', {
	        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'MMMM D. [b.] YYYY',
	            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
	            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[otne ti] LT',
	            nextDay: '[ihttin ti] LT',
	            nextWeek: 'dddd [ti] LT',
	            lastDay: '[ikte ti] LT',
	            lastWeek: '[ovddit] dddd [ti] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s geažes',
	            past : 'maŋit %s',
	            s : 'moadde sekunddat',
	            m : 'okta minuhta',
	            mm : '%d minuhtat',
	            h : 'okta diimmu',
	            hh : '%d diimmut',
	            d : 'okta beaivi',
	            dd : '%d beaivvit',
	            M : 'okta mánnu',
	            MM : '%d mánut',
	            y : 'okta jahki',
	            yy : '%d jagit'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return se;
	
	}));

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese [si]
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    /*jshint -W100*/
	    var si = moment.defineLocale('si', {
	        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'a h:mm',
	            LTS : 'a h:mm:ss',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY MMMM D',
	            LLL : 'YYYY MMMM D, a h:mm',
	            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	        },
	        calendar : {
	            sameDay : '[අද] LT[ට]',
	            nextDay : '[හෙට] LT[ට]',
	            nextWeek : 'dddd LT[ට]',
	            lastDay : '[ඊයේ] LT[ට]',
	            lastWeek : '[පසුගිය] dddd LT[ට]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sකින්',
	            past : '%sකට පෙර',
	            s : 'තත්පර කිහිපය',
	            m : 'මිනිත්තුව',
	            mm : 'මිනිත්තු %d',
	            h : 'පැය',
	            hh : 'පැය %d',
	            d : 'දිනය',
	            dd : 'දින %d',
	            M : 'මාසය',
	            MM : 'මාස %d',
	            y : 'වසර',
	            yy : 'වසර %d'
	        },
	        ordinalParse: /\d{1,2} වැනි/,
	        ordinal : function (number) {
	            return number + ' වැනි';
	        },
	        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	        isPM : function (input) {
	            return input === 'ප.ව.' || input === 'පස් වරු';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        }
	    });
	
	    return si;
	
	}));

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovak [sk]
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':  // a few seconds / in a few seconds / a few seconds ago
	                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	            case 'm':  // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minúty' : 'minút');
	                } else {
	                    return result + 'minútami';
	                }
	                break;
	            case 'h':  // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodín');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':  // a day / in a day / a day ago
	                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dni' : 'dní');
	                } else {
	                    return result + 'dňami';
	                }
	                break;
	            case 'M':  // a month / in a month / a month ago
	                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
	                } else {
	                    return result + 'mesiacmi';
	                }
	                break;
	            case 'y':  // a year / in a year / a year ago
	                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'rokov');
	                } else {
	                    return result + 'rokmi';
	                }
	                break;
	        }
	    }
	
	    var sk = moment.defineLocale('sk', {
	        months : months,
	        monthsShort : monthsShort,
	        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [o] LT';
	                    case 3:
	                        return '[v stredu o] LT';
	                    case 4:
	                        return '[vo štvrtok o] LT';
	                    case 5:
	                        return '[v piatok o] LT';
	                    case 6:
	                        return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulú nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[minulý] dddd [o] LT';
	                    case 3:
	                        return '[minulú stredu o] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [o] LT';
	                    case 6:
	                        return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'pred %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sk;
	
	}));

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovenian [sl]
	//! author : Robert Sedovšek : https://github.com/sedovsek
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	            case 'm':
	                return withoutSuffix ? 'ena minuta' : 'eno minuto';
	            case 'mm':
	                if (number === 1) {
	                    result += withoutSuffix ? 'minuta' : 'minuto';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'ena ura' : 'eno uro';
	            case 'hh':
	                if (number === 1) {
	                    result += withoutSuffix ? 'ura' : 'uro';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
	                }
	                return result;
	            case 'd':
	                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	            case 'dd':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	                } else {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	                }
	                return result;
	            case 'M':
	                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	            case 'MM':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	                } else {
	                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	                }
	                return result;
	            case 'y':
	                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	            case 'yy':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
	                } else {
	                    result += withoutSuffix || isFuture ? 'let' : 'leti';
	                }
	                return result;
	        }
	    }
	
	    var sl = moment.defineLocale('sl', {
	        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danes ob] LT',
	            nextDay  : '[jutri ob] LT',
	
	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[v] [sredo] [ob] LT';
	                    case 6:
	                        return '[v] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay  : '[včeraj ob] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[prejšnjo] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[prejšnjo] [sredo] [ob] LT';
	                    case 6:
	                        return '[prejšnjo] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'čez %s',
	            past   : 'pred %s',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : processRelativeTime,
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sl;
	
	}));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian [sq]
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author : Menelion Elensúle : https://github.com/Oire
	//! author : Oerd Cukalla : https://github.com/oerd
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sq = moment.defineLocale('sq', {
	        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Sot në] LT',
	            nextDay : '[Nesër në] LT',
	            nextWeek : 'dddd [në] LT',
	            lastDay : '[Dje në] LT',
	            lastWeek : 'dddd [e kaluar në] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'në %s',
	            past : '%s më parë',
	            s : 'disa sekonda',
	            m : 'një minutë',
	            mm : '%d minuta',
	            h : 'një orë',
	            hh : '%d orë',
	            d : 'një ditë',
	            dd : '%d ditë',
	            M : 'një muaj',
	            MM : '%d muaj',
	            y : 'një vit',
	            yy : '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sq;
	
	}));

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian [sr]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var sr = moment.defineLocale('sr', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedelju] [u] LT';
	                    case 3:
	                        return '[u] [sredu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'pre %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sr;
	
	}));

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian Cyrillic [sr-cyrl]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };
	
	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
	        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[у] [недељу] [у] LT';
	                    case 3:
	                        return '[у] [среду] [у] LT';
	                    case 6:
	                        return '[у] [суботу] [у] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[у] dddd [у] LT';
	                }
	            },
	            lastDay  : '[јуче у] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past   : 'пре %s',
	            s      : 'неколико секунди',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'дан',
	            dd     : translator.translate,
	            M      : 'месец',
	            MM     : translator.translate,
	            y      : 'годину',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sr_cyrl;
	
	}));

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : siSwati [ss]
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	
	    var ss = moment.defineLocale('ss', {
	        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
	        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
	        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Namuhla nga] LT',
	            nextDay : '[Kusasa nga] LT',
	            nextWeek : 'dddd [nga] LT',
	            lastDay : '[Itolo nga] LT',
	            lastWeek : 'dddd [leliphelile] [nga] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'nga %s',
	            past : 'wenteka nga %s',
	            s : 'emizuzwana lomcane',
	            m : 'umzuzu',
	            mm : '%d emizuzu',
	            h : 'lihora',
	            hh : '%d emahora',
	            d : 'lilanga',
	            dd : '%d emalanga',
	            M : 'inyanga',
	            MM : '%d tinyanga',
	            y : 'umnyaka',
	            yy : '%d iminyaka'
	        },
	        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'ekuseni';
	            } else if (hours < 15) {
	                return 'emini';
	            } else if (hours < 19) {
	                return 'entsambama';
	            } else {
	                return 'ebusuku';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ekuseni') {
	                return hour;
	            } else if (meridiem === 'emini') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	                if (hour === 0) {
	                    return 0;
	                }
	                return hour + 12;
	            }
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : '%d',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return ss;
	
	}));

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swedish [sv]
	//! author : Jens Alm : https://github.com/ulmus
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sv = moment.defineLocale('sv', {
	        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'för %s sedan',
	            s : 'några sekunder',
	            m : 'en minut',
	            mm : '%d minuter',
	            h : 'en timme',
	            hh : '%d timmar',
	            d : 'en dag',
	            dd : '%d dagar',
	            M : 'en månad',
	            MM : '%d månader',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'e' :
	                (b === 1) ? 'a' :
	                (b === 2) ? 'a' :
	                (b === 3) ? 'e' : 'e';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return sv;
	
	}));

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swahili [sw]
	//! author : Fahad Kassim : https://github.com/fadsel
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var sw = moment.defineLocale('sw', {
	        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[leo saa] LT',
	            nextDay : '[kesho saa] LT',
	            nextWeek : '[wiki ijayo] dddd [saat] LT',
	            lastDay : '[jana] LT',
	            lastWeek : '[wiki iliyopita] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s baadaye',
	            past : 'tokea %s',
	            s : 'hivi punde',
	            m : 'dakika moja',
	            mm : 'dakika %d',
	            h : 'saa limoja',
	            hh : 'masaa %d',
	            d : 'siku moja',
	            dd : 'masiku %d',
	            M : 'mwezi mmoja',
	            MM : 'miezi %d',
	            y : 'mwaka mmoja',
	            yy : 'miaka %d'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return sw;
	
	}));

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tamil [ta]
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var symbolMap = {
	        '1': '௧',
	        '2': '௨',
	        '3': '௩',
	        '4': '௪',
	        '5': '௫',
	        '6': '௬',
	        '7': '௭',
	        '8': '௮',
	        '9': '௯',
	        '0': '௦'
	    }, numberMap = {
	        '௧': '1',
	        '௨': '2',
	        '௩': '3',
	        '௪': '4',
	        '௫': '5',
	        '௬': '6',
	        '௭': '7',
	        '௮': '8',
	        '௯': '9',
	        '௦': '0'
	    };
	
	    var ta = moment.defineLocale('ta', {
	        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, HH:mm',
	            LLLL : 'dddd, D MMMM YYYY, HH:mm'
	        },
	        calendar : {
	            sameDay : '[இன்று] LT',
	            nextDay : '[நாளை] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[நேற்று] LT',
	            lastWeek : '[கடந்த வாரம்] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s இல்',
	            past : '%s முன்',
	            s : 'ஒரு சில விநாடிகள்',
	            m : 'ஒரு நிமிடம்',
	            mm : '%d நிமிடங்கள்',
	            h : 'ஒரு மணி நேரம்',
	            hh : '%d மணி நேரம்',
	            d : 'ஒரு நாள்',
	            dd : '%d நாட்கள்',
	            M : 'ஒரு மாதம்',
	            MM : '%d மாதங்கள்',
	            y : 'ஒரு வருடம்',
	            yy : '%d ஆண்டுகள்'
	        },
	        ordinalParse: /\d{1,2}வது/,
	        ordinal : function (number) {
	            return number + 'வது';
	        },
	        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை';  // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return ta;
	
	}));

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Telugu [te]
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var te = moment.defineLocale('te', {
	        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[నేడు] LT',
	            nextDay : '[రేపు] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[నిన్న] LT',
	            lastWeek : '[గత] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s లో',
	            past : '%s క్రితం',
	            s : 'కొన్ని క్షణాలు',
	            m : 'ఒక నిమిషం',
	            mm : '%d నిమిషాలు',
	            h : 'ఒక గంట',
	            hh : '%d గంటలు',
	            d : 'ఒక రోజు',
	            dd : '%d రోజులు',
	            M : 'ఒక నెల',
	            MM : '%d నెలలు',
	            y : 'ఒక సంవత్సరం',
	            yy : '%d సంవత్సరాలు'
	        },
	        ordinalParse : /\d{1,2}వ/,
	        ordinal : '%dవ',
	        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'రాత్రి') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ఉదయం') {
	                return hour;
	            } else if (meridiem === 'మధ్యాహ్నం') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'సాయంత్రం') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'రాత్రి';
	            } else if (hour < 10) {
	                return 'ఉదయం';
	            } else if (hour < 17) {
	                return 'మధ్యాహ్నం';
	            } else if (hour < 20) {
	                return 'సాయంత్రం';
	            } else {
	                return 'రాత్రి';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return te;
	
	}));

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Thai [th]
	//! author : Kridsada Thanabulpong : https://github.com/sirn
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var th = moment.defineLocale('th', {
	        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'YYYY/MM/DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY เวลา H:mm',
	            LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar : {
	            sameDay : '[วันนี้ เวลา] LT',
	            nextDay : '[พรุ่งนี้ เวลา] LT',
	            nextWeek : 'dddd[หน้า เวลา] LT',
	            lastDay : '[เมื่อวานนี้ เวลา] LT',
	            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'อีก %s',
	            past : '%sที่แล้ว',
	            s : 'ไม่กี่วินาที',
	            m : '1 นาที',
	            mm : '%d นาที',
	            h : '1 ชั่วโมง',
	            hh : '%d ชั่วโมง',
	            d : '1 วัน',
	            dd : '%d วัน',
	            M : '1 เดือน',
	            MM : '%d เดือน',
	            y : '1 ปี',
	            yy : '%d ปี'
	        }
	    });
	
	    return th;
	
	}));

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog (Philippines) [tl-ph]
	//! author : Dan Hagman : https://github.com/hagmandan
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tl_ph = moment.defineLocale('tl-ph', {
	        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'MM/D/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY HH:mm',
	            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'sa loob ng %s',
	            past : '%s ang nakalipas',
	            s : 'ilang segundo',
	            m : 'isang minuto',
	            mm : '%d minuto',
	            h : 'isang oras',
	            hh : '%d oras',
	            d : 'isang araw',
	            dd : '%d araw',
	            M : 'isang buwan',
	            MM : '%d buwan',
	            y : 'isang taon',
	            yy : '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return tl_ph;
	
	}));

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon [tlh]
	//! author : Dominika Kruk : https://github.com/amaranthrose
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
	
	    function translateFuture(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	        time.slice(0, -3) + 'leS' :
	        (output.indexOf('jar') !== -1) ?
	        time.slice(0, -3) + 'waQ' :
	        (output.indexOf('DIS') !== -1) ?
	        time.slice(0, -3) + 'nem' :
	        time + ' pIq';
	        return time;
	    }
	
	    function translatePast(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	        time.slice(0, -3) + 'Hu’' :
	        (output.indexOf('jar') !== -1) ?
	        time.slice(0, -3) + 'wen' :
	        (output.indexOf('DIS') !== -1) ?
	        time.slice(0, -3) + 'ben' :
	        time + ' ret';
	        return time;
	    }
	
	    function translate(number, withoutSuffix, string, isFuture) {
	        var numberNoun = numberAsNoun(number);
	        switch (string) {
	            case 'mm':
	                return numberNoun + ' tup';
	            case 'hh':
	                return numberNoun + ' rep';
	            case 'dd':
	                return numberNoun + ' jaj';
	            case 'MM':
	                return numberNoun + ' jar';
	            case 'yy':
	                return numberNoun + ' DIS';
	        }
	    }
	
	    function numberAsNoun(number) {
	        var hundred = Math.floor((number % 1000) / 100),
	        ten = Math.floor((number % 100) / 10),
	        one = number % 10,
	        word = '';
	        if (hundred > 0) {
	            word += numbersNouns[hundred] + 'vatlh';
	        }
	        if (ten > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
	        }
	        if (one > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
	        }
	        return (word === '') ? 'pagh' : word;
	    }
	
	    var tlh = moment.defineLocale('tlh', {
	        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[DaHjaj] LT',
	            nextDay: '[wa’leS] LT',
	            nextWeek: 'LLL',
	            lastDay: '[wa’Hu’] LT',
	            lastWeek: 'LLL',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : translateFuture,
	            past : translatePast,
	            s : 'puS lup',
	            m : 'wa’ tup',
	            mm : translate,
	            h : 'wa’ rep',
	            hh : translate,
	            d : 'wa’ jaj',
	            dd : translate,
	            M : 'wa’ jar',
	            MM : translate,
	            y : 'wa’ DIS',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return tlh;
	
	}));

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Turkish [tr]
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',
	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',
	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',
	        6: '\'ncı',
	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',
	        60: '\'ıncı',
	        90: '\'ıncı'
	    };
	
	    var tr = moment.defineLocale('tr', {
	        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[yarın saat] LT',
	            nextWeek : '[haftaya] dddd [saat] LT',
	            lastDay : '[dün] LT',
	            lastWeek : '[geçen hafta] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s önce',
	            s : 'birkaç saniye',
	            m : 'bir dakika',
	            mm : '%d dakika',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir yıl',
	            yy : '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tr;
	
	}));

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Talossan [tzl]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v
	//! author : Iustì Canun
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	    // This is currently too difficult (maybe even impossible) to add.
	    var tzl = moment.defineLocale('tzl', {
	        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM [dallas] YYYY',
	            LLL : 'D. MMMM [dallas] YYYY HH.mm',
	            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	        },
	        meridiemParse: /d\'o|d\'a/i,
	        isPM : function (input) {
	            return 'd\'o' === input.toLowerCase();
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'd\'o' : 'D\'O';
	            } else {
	                return isLower ? 'd\'a' : 'D\'A';
	            }
	        },
	        calendar : {
	            sameDay : '[oxhi à] LT',
	            nextDay : '[demà à] LT',
	            nextWeek : 'dddd [à] LT',
	            lastDay : '[ieiri à] LT',
	            lastWeek : '[sür el] dddd [lasteu à] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'osprei %s',
	            past : 'ja%s',
	            s : processRelativeTime,
	            m : processRelativeTime,
	            mm : processRelativeTime,
	            h : processRelativeTime,
	            hh : processRelativeTime,
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['viensas secunds', '\'iensas secunds'],
	            'm': ['\'n míut', '\'iens míut'],
	            'mm': [number + ' míuts', '' + number + ' míuts'],
	            'h': ['\'n þora', '\'iensa þora'],
	            'hh': [number + ' þoras', '' + number + ' þoras'],
	            'd': ['\'n ziua', '\'iensa ziua'],
	            'dd': [number + ' ziuas', '' + number + ' ziuas'],
	            'M': ['\'n mes', '\'iens mes'],
	            'MM': [number + ' mesen', '' + number + ' mesen'],
	            'y': ['\'n ar', '\'iens ar'],
	            'yy': [number + ' ars', '' + number + ' ars']
	        };
	        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
	    }
	
	    return tzl;
	
	}));

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight [tzm]
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tzm = moment.defineLocale('tzm', {
	        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past : 'ⵢⴰⵏ %s',
	            s : 'ⵉⵎⵉⴽ',
	            m : 'ⵎⵉⵏⵓⴺ',
	            mm : '%d ⵎⵉⵏⵓⴺ',
	            h : 'ⵙⴰⵄⴰ',
	            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d : 'ⴰⵙⵙ',
	            dd : '%d oⵙⵙⴰⵏ',
	            M : 'ⴰⵢoⵓⵔ',
	            MM : '%d ⵉⵢⵢⵉⵔⵏ',
	            y : 'ⴰⵙⴳⴰⵙ',
	            yy : '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tzm;
	
	}));

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight Latin [tzm-latn]
	//! author : Abdel Said : https://github.com/abdelsaid
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var tzm_latn = moment.defineLocale('tzm-latn', {
	        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dadkh s yan %s',
	            past : 'yan %s',
	            s : 'imik',
	            m : 'minuḍ',
	            mm : '%d minuḍ',
	            h : 'saɛa',
	            hh : '%d tassaɛin',
	            d : 'ass',
	            dd : '%d ossan',
	            M : 'ayowr',
	            MM : '%d iyyirn',
	            y : 'asgas',
	            yy : '%d isgasn'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return tzm_latn;
	
	}));

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Ukrainian [uk]
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },
	        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	            'accusative' :
	            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	                'genitive' :
	                'nominative');
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }
	
	    var uk = moment.defineLocale('uk', {
	        months : {
	            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	        },
	        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY р.',
	            LLL : 'D MMMM YYYY р., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
	        },
	        calendar : {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return processHoursFunction('[Минулої] dddd [').call(this);
	                    case 1:
	                    case 2:
	                    case 4:
	                        return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past : '%s тому',
	            s : 'декілька секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'годину',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'місяць',
	            MM : relativeTimeWithPlural,
	            y : 'рік',
	            yy : relativeTimeWithPlural
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });
	
	    return uk;
	
	}));

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek [uz]
	//! author : Sardor Muminov : https://github.com/muminoff
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var uz = moment.defineLocale('uz', {
	        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'D MMMM YYYY, dddd HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бугун соат] LT [да]',
	            nextDay : '[Эртага] LT [да]',
	            nextWeek : 'dddd [куни соат] LT [да]',
	            lastDay : '[Кеча соат] LT [да]',
	            lastWeek : '[Утган] dddd [куни соат] LT [да]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'Якин %s ичида',
	            past : 'Бир неча %s олдин',
	            s : 'фурсат',
	            m : 'бир дакика',
	            mm : '%d дакика',
	            h : 'бир соат',
	            hh : '%d соат',
	            d : 'бир кун',
	            dd : '%d кун',
	            M : 'бир ой',
	            MM : '%d ой',
	            y : 'бир йил',
	            yy : '%d йил'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return uz;
	
	}));

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Vietnamese [vi]
	//! author : Bang Nguyen : https://github.com/bangnk
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var vi = moment.defineLocale('vi', {
	        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /sa|ch/i,
	        isPM : function (input) {
	            return /^ch$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'sa' : 'SA';
	            } else {
	                return isLower ? 'ch' : 'CH';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM [năm] YYYY',
	            LLL : 'D MMMM [năm] YYYY HH:mm',
	            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
	            l : 'DD/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s tới',
	            past : '%s trước',
	            s : 'vài giây',
	            m : 'một phút',
	            mm : '%d phút',
	            h : 'một giờ',
	            hh : '%d giờ',
	            d : 'một ngày',
	            dd : '%d ngày',
	            M : 'một tháng',
	            MM : '%d tháng',
	            y : 'một năm',
	            yy : '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return vi;
	
	}));

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Pseudo [x-pseudo]
	//! author : Andrew Hood : https://github.com/andrewhood125
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var x_pseudo = moment.defineLocale('x-pseudo', {
	        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
	        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
	        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[T~ódá~ý át] LT',
	            nextDay : '[T~ómó~rró~w át] LT',
	            nextWeek : 'dddd [át] LT',
	            lastDay : '[Ý~ést~érdá~ý át] LT',
	            lastWeek : '[L~ást] dddd [át] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'í~ñ %s',
	            past : '%s á~gó',
	            s : 'á ~féw ~sécó~ñds',
	            m : 'á ~míñ~úté',
	            mm : '%d m~íñú~tés',
	            h : 'á~ñ hó~úr',
	            hh : '%d h~óúrs',
	            d : 'á ~dáý',
	            dd : '%d d~áýs',
	            M : 'á ~móñ~th',
	            MM : '%d m~óñt~hs',
	            y : 'á ~ýéár',
	            yy : '%d ý~éárs'
	        },
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return x_pseudo;
	
	}));

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (China) [zh-cn]
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_cn = moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm分',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah点mm分',
	            LLLL : 'YYYY年MMMD日ddddAh点mm分',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah点mm分',
	            llll : 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '周';
	                default:
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1 分钟',
	            mm : '%d 分钟',
	            h : '1 小时',
	            hh : '%d 小时',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 个月',
	            MM : '%d 个月',
	            y : '1 年',
	            yy : '%d 年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	
	    return zh_cn;
	
	}));

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Hong Kong) [zh-hk]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	//! author : Konstantin : https://github.com/skfd
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_hk = moment.defineLocale('zh-hk', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm分',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah點mm分',
	            LLLL : 'YYYY年MMMD日ddddAh點mm分',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah點mm分',
	            llll : 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd' :
	                case 'D' :
	                case 'DDD' :
	                    return number + '日';
	                case 'M' :
	                    return number + '月';
	                case 'w' :
	                case 'W' :
	                    return number + '週';
	                default :
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '1 分鐘',
	            mm : '%d 分鐘',
	            h : '1 小時',
	            hh : '%d 小時',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 個月',
	            MM : '%d 個月',
	            y : '1 年',
	            yy : '%d 年'
	        }
	    });
	
	    return zh_hk;
	
	}));

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Taiwan) [zh-tw]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris
	
	;(function (global, factory) {
	    true ? factory(__webpack_require__(16)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';
	
	
	    var zh_tw = moment.defineLocale('zh-tw', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm分',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah點mm分',
	            LLLL : 'YYYY年MMMD日ddddAh點mm分',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah點mm分',
	            llll : 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd' :
	                case 'D' :
	                case 'DDD' :
	                    return number + '日';
	                case 'M' :
	                    return number + '月';
	                case 'w' :
	                case 'W' :
	                    return number + '週';
	                default :
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '1 分鐘',
	            mm : '%d 分鐘',
	            h : '1 小時',
	            hh : '%d 小時',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 個月',
	            MM : '%d 個月',
	            y : '1 年',
	            yy : '%d 年'
	        }
	    });
	
	    return zh_tw;
	
	}));

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LastUpdated_1 = __webpack_require__(15);
	var ReduxUtils_1 = __webpack_require__(124);
	var LastUpdatedActions_1 = __webpack_require__(126);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.lastUpdatedComposite, { id: ownProps.id });
	    return {
	        time: item ? item.time : new Date()
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) { return ({
	    onRender: function () { return dispatch(LastUpdatedActions_1.addLastUpdated(ownProps.id)); },
	    onDestroy: function () { return dispatch(LastUpdatedActions_1.removeLastUpdated(ownProps.id)); }
	}); };
	exports.LastUpdatedConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(LastUpdated_1.LastUpdated);


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var underscore_1 = __webpack_require__(4);
	var ReactRedux = __webpack_require__(125);
	var ReduxUtils = (function () {
	    function ReduxUtils() {
	    }
	    ReduxUtils.mergeProps = function (stateProps, dispatchProps, ownProps) {
	        return underscore_1.extend({}, stateProps, dispatchProps, ownProps);
	    };
	    return ReduxUtils;
	}());
	exports.ReduxUtils = ReduxUtils;
	exports.CommonActions = {
	    clearState: 'CLEAR_STATE'
	};
	exports.clearState = function () { return ({
	    type: exports.CommonActions.clearState
	}); };
	function ReduxConnect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    return function (target) { return (ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target)); };
	}
	exports.ReduxConnect = ReduxConnect;


/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	exports.LastUpdatedActions = {
	    addLastUpdated: 'ADD_LAST_UPDATED',
	    removeLastUpdated: 'REMOVE_LAST_UPDATED',
	    changeLastUpdated: 'CHANGE_LAST_UPDATED'
	};
	exports.addLastUpdated = function (id) { return ({
	    type: exports.LastUpdatedActions.addLastUpdated,
	    payload: {
	        id: id
	    }
	}); };
	exports.removeLastUpdated = function (id) { return ({
	    type: exports.LastUpdatedActions.removeLastUpdated,
	    payload: {
	        id: id
	    }
	}); };
	exports.changeLastUpdated = function (id) { return ({
	    type: exports.LastUpdatedActions.changeLastUpdated,
	    payload: {
	        id: id
	    }
	}); };


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LastUpdatedActions_1 = __webpack_require__(126);
	var _ = __webpack_require__(4);
	exports.lastUpdatedInitialState = { id: undefined, time: new Date() };
	exports.lastUpdatedCompositeInitialState = [];
	exports.lastUpdatedReducer = function (state, action) {
	    if (state === void 0) { state = exports.lastUpdatedInitialState; }
	    switch (action.type) {
	        case LastUpdatedActions_1.LastUpdatedActions.addLastUpdated:
	            return {
	                id: action.payload.id,
	                time: state.time
	            };
	        case LastUpdatedActions_1.LastUpdatedActions.changeLastUpdated:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return _.extend({}, state, {
	                time: new Date()
	            });
	        default:
	            return state;
	    }
	};
	exports.lastUpdatedCompositeReducer = function (state, action) {
	    if (state === void 0) { state = exports.lastUpdatedCompositeInitialState; }
	    switch (action.type) {
	        case LastUpdatedActions_1.LastUpdatedActions.addLastUpdated:
	            return state.concat([
	                exports.lastUpdatedReducer(undefined, action)
	            ]);
	        case LastUpdatedActions_1.LastUpdatedActions.removeLastUpdated:
	            return _.reject(state, function (lastUpdated) {
	                return action.payload.id === lastUpdated.id;
	            });
	        case LastUpdatedActions_1.LastUpdatedActions.changeLastUpdated:
	            return state.map(function (lastUpdated) {
	                return exports.lastUpdatedReducer(lastUpdated, action);
	            });
	        default:
	            return state;
	    }
	};


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var Svg_1 = __webpack_require__(11);
	exports.FILTER_PLACEHOLDER = 'Filter';
	var FilterBox = (function (_super) {
	    __extends(FilterBox, _super);
	    function FilterBox() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleChange = function () {
	            var clearClass = _this.filterInput.value.length ? '' : 'hidden';
	            _this.filterInput.nextElementSibling.setAttribute('class', clearClass);
	            if (_this.props.onFilter) {
	                _this.props.onFilter(_this.props.id, _this.filterInput.value);
	            }
	        };
	        this.clearValue = function () {
	            _this.filterInput.value = '';
	            _this.filterInput.focus();
	            _this.handleChange();
	        };
	    }
	    FilterBox.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender(this.props.id);
	        }
	    };
	    FilterBox.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy(this.props.id);
	        }
	    };
	    FilterBox.prototype.render = function () {
	        var _this = this;
	        var filterPlaceholder = this.props.filterPlaceholder || exports.FILTER_PLACEHOLDER;
	        return (React.createElement("div", {id: this.props.id, className: 'coveo-filter-container'}, 
	            React.createElement("input", {ref: function (filterInput) { return _this.filterInput = filterInput; }, type: 'text', className: 'filter-box', placeholder: filterPlaceholder, onChange: function () { return _this.handleChange(); }, value: this.props.filterText}), 
	            React.createElement(Svg_1.Svg, {svgName: 'clear', className: 'hidden', svgClass: 'icon mod-lg fill-medium-grey', onClick: function () { return _this.clearValue(); }}), 
	            React.createElement(Svg_1.Svg, {svgName: 'filter', className: 'filter-icon', svgClass: 'icon fill-medium-grey icon mod-lg'})));
	    };
	    return FilterBox;
	}(React.Component));
	exports.FilterBox = FilterBox;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FilterBoxActions_1 = __webpack_require__(130);
	var ReduxUtils_1 = __webpack_require__(124);
	var FilterBox_1 = __webpack_require__(128);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var filterItem = _.findWhere(state.filters, { id: ownProps.id });
	    return {
	        filterText: filterItem ? filterItem.filterText : ''
	    };
	};
	var mapDispatchToProps = function (dispatch) { return ({
	    onRender: function (id) { return dispatch(FilterBoxActions_1.addFilter(id)); },
	    onDestroy: function (id) { return dispatch(FilterBoxActions_1.removeFilter(id)); },
	    onFilter: function (id, filterText) { return dispatch(FilterBoxActions_1.filterThrough(id, filterText)); }
	}); };
	exports.FilterBoxConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(FilterBox_1.FilterBox);


/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	exports.FilterActions = {
	    addFilter: 'ADD_FILTER',
	    removeFilter: 'REMOVE_FILTER',
	    filterThrough: 'FILTER'
	};
	exports.addFilter = function (id) { return ({
	    type: exports.FilterActions.addFilter,
	    payload: {
	        id: id
	    }
	}); };
	exports.removeFilter = function (id) { return ({
	    type: exports.FilterActions.removeFilter,
	    payload: {
	        id: id
	    }
	}); };
	exports.filterThrough = function (id, filterText) { return ({
	    type: exports.FilterActions.filterThrough,
	    payload: {
	        id: id,
	        filterText: filterText
	    }
	}); };


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FilterBoxActions_1 = __webpack_require__(130);
	var _ = __webpack_require__(4);
	exports.filterBoxInitialState = { id: undefined, filterText: undefined };
	exports.filtersInitialState = [];
	exports.filterBoxReducer = function (state, action) {
	    if (state === void 0) { state = exports.filterBoxInitialState; }
	    switch (action.type) {
	        case FilterBoxActions_1.FilterActions.filterThrough:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return {
	                id: state.id,
	                filterText: action.payload.filterText
	            };
	        case FilterBoxActions_1.FilterActions.addFilter:
	            return {
	                id: action.payload.id,
	                filterText: ''
	            };
	        default:
	            return state;
	    }
	};
	exports.filterBoxesReducer = function (state, action) {
	    if (state === void 0) { state = exports.filtersInitialState; }
	    switch (action.type) {
	        case FilterBoxActions_1.FilterActions.filterThrough:
	            return state.map(function (filterBox) { return exports.filterBoxReducer(filterBox, action); });
	        case FilterBoxActions_1.FilterActions.addFilter:
	            return state.concat([
	                exports.filterBoxReducer(undefined, action)
	            ]);
	        case FilterBoxActions_1.FilterActions.removeFilter:
	            return _.reject(state, function (filterBox) {
	                return action.payload.id === filterBox.id;
	            });
	        default:
	            return state;
	    }
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var FacetMoreToggleConnected_1 = __webpack_require__(133);
	var FacetMoreToggle_1 = __webpack_require__(134);
	var FacetMoreRowsConnected_1 = __webpack_require__(136);
	var FacetMoreRows_1 = __webpack_require__(137);
	var FacetRow_1 = __webpack_require__(210);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var Facet = (function (_super) {
	    __extends(Facet, _super);
	    function Facet() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.buildFacet = function (facetRow) {
	            _this.props.toggleFacet(_this.props.facet.name, facetRow);
	            if (_this.props.onToggleFacet) {
	                _this.props.onToggleFacet(_this.props.facet.name, facetRow);
	            }
	        };
	        this.clearFacet = function () {
	            _this.props.clearFacet(_this.props.facet.name);
	            if (_this.props.onClearFacet) {
	                _this.props.onClearFacet(_this.props.facet.name);
	            }
	        };
	    }
	    Facet.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender(this.props.facet.name);
	        }
	    };
	    Facet.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy(this.props.facet.name);
	        }
	    };
	    Facet.prototype.render = function () {
	        var _this = this;
	        var selectedRows = this.props.selectedFacetRows || [];
	        var removeSelectedClass = 'facet-header-eraser' + (selectedRows.length ? '' : ' hidden');
	        var allRows = _.union(selectedRows, this.props.facetRows);
	        var facetRows = _.uniq(allRows, false, function (item) { return item.name; });
	        var rows = _.map(facetRows, function (facetRow) {
	            return (React.createElement(FacetRow_1.FacetRow, {key: facetRow.name, facet: _this.props.facet.name, facetRow: facetRow, onToggleFacet: _this.buildFacet, isChecked: _.contains(_.pluck(selectedRows, 'name'), facetRow.name)}));
	        });
	        var moreRowsToggle = rows.length > 5 ?
	            (this.props.withReduxState ?
	                React.createElement(FacetMoreToggleConnected_1.FacetMoreToggleConnected, {facet: this.props.facet.name, moreLabel: this.props.moreLabel}) :
	                React.createElement(FacetMoreToggle_1.FacetMoreToggle, {facet: this.props.facet.name, moreLabel: this.props.moreLabel})) :
	            null;
	        var moreRows = moreRowsToggle ?
	            (this.props.withReduxState ?
	                React.createElement(FacetMoreRowsConnected_1.FacetMoreRowsConnected, {facet: this.props.facet.name, facetRows: rows.splice(5), filterPlaceholder: this.props.filterPlaceholder}) :
	                React.createElement(FacetMoreRows_1.FacetMoreRows, {facet: this.props.facet.name, facetRows: rows.splice(5), filterPlaceholder: this.props.filterPlaceholder})) :
	            null;
	        var facetClasses = this.props.facet.name + ' facet' + (this.props.isOpened ? ' facet-opened' : '');
	        return (React.createElement("div", {className: facetClasses}, 
	            React.createElement("div", {className: 'facet-header'}, 
	                React.createElement("div", {className: removeSelectedClass, onClick: function () { return _this.clearFacet(); }}, 
	                    React.createElement(Svg_1.Svg, {svgName: 'clear', className: 'icon fill-medium-grey'})
	                ), 
	                React.createElement("div", {className: 'facet-header-title bold text-medium-blue'}, this.props.facet.formattedName)), 
	            React.createElement("ul", {className: 'facet-values'}, 
	                rows, 
	                moreRowsToggle), 
	            moreRows));
	    };
	    return Facet;
	}(React.Component));
	exports.Facet = Facet;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FacetMoreToggle_1 = __webpack_require__(134);
	var ReduxUtils_1 = __webpack_require__(124);
	var FacetActions_1 = __webpack_require__(135);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.facets, { facet: ownProps.facet });
	    return {
	        isOpened: item && item.opened
	    };
	};
	var mapDispatchToProps = function (dispatch) { return ({
	    onToggleMore: function (facet) { return dispatch(FacetActions_1.toggleMoreFacetRows(facet)); }
	}); };
	exports.FacetMoreToggleConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(FacetMoreToggle_1.FacetMoreToggle);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	exports.FACET_TOGGLE_MORE_LABEL = 'More';
	var FacetMoreToggle = (function (_super) {
	    __extends(FacetMoreToggle, _super);
	    function FacetMoreToggle() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleOnChange = function () {
	            if (_this.props.onToggleMore) {
	                _this.props.onToggleMore(_this.props.facet);
	            }
	        };
	    }
	    FacetMoreToggle.prototype.render = function () {
	        var _this = this;
	        var isOpened = this.props.isOpened ? this.props.isOpened : false;
	        var moreClasses = 'facet-value facet-selectable facet-more' + (isOpened ? ' hidden' : '');
	        var moreLabel = this.props.moreLabel || exports.FACET_TOGGLE_MORE_LABEL;
	        return (React.createElement("li", {className: moreClasses, onClick: function (e) { return e.nativeEvent.stopImmediatePropagation(); }}, 
	            React.createElement("label", {className: 'coveo-checkbox-label facet-value-label'}, 
	                React.createElement("input", {type: 'checkbox', className: 'coveo-checkbox facet-checkbox-input', onChange: function () { return _this.handleOnChange(); }}), 
	                React.createElement("span", {className: 'facet-more-button'}), 
	                React.createElement("span", {className: 'label'}, moreLabel))
	        ));
	    };
	    return FacetMoreToggle;
	}(React.Component));
	exports.FacetMoreToggle = FacetMoreToggle;


/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";
	exports.FacetActions = {
	    addFacet: 'ADD_FACET',
	    removeFacet: 'REMOVE_FACET',
	    changeFacet: 'CHANGE_FACET',
	    emptyFacet: 'EMPTY_FACET',
	    toggleMoreFacetRows: 'TOGGLE_MORE_FACET_ROWS',
	    closeMoreFacetRows: 'CLOSE_MORE_FACET_ROWS'
	};
	exports.addFacet = function (facet) { return ({
	    type: exports.FacetActions.addFacet,
	    payload: {
	        facet: facet
	    }
	}); };
	exports.removeFacet = function (facet) { return ({
	    type: exports.FacetActions.removeFacet,
	    payload: {
	        facet: facet
	    }
	}); };
	exports.changeFacet = function (facet, facetRow) { return ({
	    type: exports.FacetActions.changeFacet,
	    payload: {
	        facet: facet,
	        facetRow: facetRow
	    }
	}); };
	exports.emptyFacet = function (facet) { return ({
	    type: exports.FacetActions.emptyFacet,
	    payload: {
	        facet: facet
	    }
	}); };
	exports.toggleMoreFacetRows = function (facet) { return ({
	    type: exports.FacetActions.toggleMoreFacetRows,
	    payload: {
	        facet: facet
	    }
	}); };
	exports.closeMoreFacetRows = function () { return ({
	    type: exports.FacetActions.closeMoreFacetRows,
	    payload: {
	        facet: ''
	    }
	}); };


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var FacetMoreRows_1 = __webpack_require__(137);
	var FilterBoxActions_1 = __webpack_require__(130);
	var FacetActions_1 = __webpack_require__(135);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.facets, { facet: ownProps.facet });
	    var filterItem = _.findWhere(state.filters, { id: 'filter-' + ownProps.facet });
	    return {
	        isOpened: item && item.opened,
	        filterText: filterItem ? filterItem.filterText : '',
	        withReduxState: true
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onOpen: function () { return dispatch(FilterBoxActions_1.filterThrough('filter-' + ownProps.facet, '')); },
	        onDocumentClick: function () { return dispatch(FacetActions_1.closeMoreFacetRows()); }
	    });
	};
	exports.FacetMoreRowsConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(FacetMoreRows_1.FacetMoreRows);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FilterBoxConnected_1 = __webpack_require__(129);
	var FilterBox_1 = __webpack_require__(128);
	var _ = __webpack_require__(4);
	var s = __webpack_require__(138);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(7);
	var FacetMoreRows = (function (_super) {
	    __extends(FacetMoreRows, _super);
	    function FacetMoreRows() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleDocumentClick = function (e) {
	            var facetSearch = ReactDOM.findDOMNode(_this.facetSearch);
	            if (!facetSearch.contains(e.target)) {
	                _this.props.onDocumentClick();
	            }
	        };
	    }
	    FacetMoreRows.prototype.componentWillMount = function () {
	        if (this.props.onDocumentClick) {
	            document.addEventListener('click', this.handleDocumentClick);
	        }
	    };
	    FacetMoreRows.prototype.componentWillReceiveProps = function (nextProps) {
	        if (this.props.onOpen && !this.props.isOpened && nextProps.isOpened) {
	            this.props.onOpen();
	        }
	    };
	    FacetMoreRows.prototype.componentWillUnmount = function () {
	        if (this.props.onDocumentClick) {
	            document.removeEventListener('click', this.handleDocumentClick);
	        }
	    };
	    FacetMoreRows.prototype.componentDidUpdate = function () {
	        if (this.props.isOpened) {
	            this.facetSearch.getElementsByTagName('input')[0].focus();
	        }
	    };
	    FacetMoreRows.prototype.render = function () {
	        var _this = this;
	        var moreSearchClasses = 'facet-more-search' + (!this.props.isOpened ? ' hidden' : '');
	        var rowsFiltered = this.props.filterText && this.props.filterText.length ? _.map(this.props.facetRows, function (facetRow) {
	            var facetText = facetRow.props.facetRow.formattedName;
	            if (s.contains(facetText.toLowerCase(), _this.props.filterText.toLowerCase())) {
	                return facetRow;
	            }
	        }).filter(Boolean) : this.props.facetRows;
	        var resultsClass = 'facet-search-results' + (!rowsFiltered.length ? ' hidden' : '');
	        var filterBoxId = 'filter-' + this.props.facet;
	        var filterBox = this.props.withReduxState ?
	            React.createElement(FilterBoxConnected_1.FilterBoxConnected, {id: filterBoxId, filterPlaceholder: this.props.filterPlaceholder}) :
	            React.createElement(FilterBox_1.FilterBox, {id: filterBoxId, filterPlaceholder: this.props.filterPlaceholder});
	        return (React.createElement("div", {className: moreSearchClasses}, 
	            React.createElement("div", {className: 'facet-search', ref: function (facetSearch) { return _this.facetSearch = facetSearch; }}, filterBox), 
	            React.createElement("ul", {className: resultsClass}, rowsFiltered)));
	    };
	    return FacetMoreRows;
	}(React.Component));
	exports.FacetMoreRows = FacetMoreRows;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* Underscore.string
	* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
	* Underscore.string is freely distributable under the terms of the MIT license.
	* Documentation: https://github.com/epeli/underscore.string
	* Some code is borrowed from MooTools and Alexandru Marasteanu.
	* Version '3.3.4'
	* @preserve
	*/
	
	'use strict';
	
	function s(value) {
	  /* jshint validthis: true */
	  if (!(this instanceof s)) return new s(value);
	  this._wrapped = value;
	}
	
	s.VERSION = '3.3.4';
	
	s.isBlank          = __webpack_require__(139);
	s.stripTags        = __webpack_require__(141);
	s.capitalize       = __webpack_require__(142);
	s.decapitalize     = __webpack_require__(143);
	s.chop             = __webpack_require__(144);
	s.trim             = __webpack_require__(145);
	s.clean            = __webpack_require__(148);
	s.cleanDiacritics  = __webpack_require__(149);
	s.count            = __webpack_require__(150);
	s.chars            = __webpack_require__(151);
	s.swapCase         = __webpack_require__(152);
	s.escapeHTML       = __webpack_require__(153);
	s.unescapeHTML     = __webpack_require__(155);
	s.splice           = __webpack_require__(157);
	s.insert           = __webpack_require__(158);
	s.replaceAll       = __webpack_require__(159);
	s.include          = __webpack_require__(160);
	s.join             = __webpack_require__(161);
	s.lines            = __webpack_require__(162);
	s.dedent           = __webpack_require__(163);
	s.reverse          = __webpack_require__(164);
	s.startsWith       = __webpack_require__(165);
	s.endsWith         = __webpack_require__(167);
	s.pred             = __webpack_require__(168);
	s.succ             = __webpack_require__(170);
	s.titleize         = __webpack_require__(171);
	s.camelize         = __webpack_require__(172);
	s.underscored      = __webpack_require__(173);
	s.dasherize        = __webpack_require__(174);
	s.classify         = __webpack_require__(175);
	s.humanize         = __webpack_require__(176);
	s.ltrim            = __webpack_require__(177);
	s.rtrim            = __webpack_require__(178);
	s.truncate         = __webpack_require__(179);
	s.prune            = __webpack_require__(180);
	s.words            = __webpack_require__(181);
	s.pad              = __webpack_require__(182);
	s.lpad             = __webpack_require__(184);
	s.rpad             = __webpack_require__(185);
	s.lrpad            = __webpack_require__(186);
	s.sprintf          = __webpack_require__(187);
	s.vsprintf         = __webpack_require__(190);
	s.toNumber         = __webpack_require__(191);
	s.numberFormat     = __webpack_require__(192);
	s.strRight         = __webpack_require__(193);
	s.strRightBack     = __webpack_require__(194);
	s.strLeft          = __webpack_require__(195);
	s.strLeftBack      = __webpack_require__(196);
	s.toSentence       = __webpack_require__(197);
	s.toSentenceSerial = __webpack_require__(198);
	s.slugify          = __webpack_require__(199);
	s.surround         = __webpack_require__(200);
	s.quote            = __webpack_require__(201);
	s.unquote          = __webpack_require__(202);
	s.repeat           = __webpack_require__(203);
	s.naturalCmp       = __webpack_require__(204);
	s.levenshtein      = __webpack_require__(205);
	s.toBoolean        = __webpack_require__(206);
	s.exports          = __webpack_require__(207);
	s.escapeRegExp     = __webpack_require__(147);
	s.wrap             = __webpack_require__(208);
	s.map              = __webpack_require__(209);
	
	// Aliases
	s.strip     = s.trim;
	s.lstrip    = s.ltrim;
	s.rstrip    = s.rtrim;
	s.center    = s.lrpad;
	s.rjust     = s.lpad;
	s.ljust     = s.rpad;
	s.contains  = s.include;
	s.q         = s.quote;
	s.toBool    = s.toBoolean;
	s.camelcase = s.camelize;
	s.mapChars  = s.map;
	
	
	// Implement chaining
	s.prototype = {
	  value: function value() {
	    return this._wrapped;
	  }
	};
	
	function fn2method(key, fn) {
	  if (typeof fn !== 'function') return;
	  s.prototype[key] = function() {
	    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
	    var res = fn.apply(null, args);
	    // if the result is non-string stop the chain and return the value
	    return typeof res === 'string' ? new s(res) : res;
	  };
	}
	
	// Copy functions to instance methods for chaining
	for (var key in s) fn2method(key, s[key]);
	
	fn2method('tap', function tap(string, fn) {
	  return fn(string);
	});
	
	function prototype2method(methodName) {
	  fn2method(methodName, function(context) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return String.prototype[methodName].apply(context, args);
	  });
	}
	
	var prototypeMethods = [
	  'toUpperCase',
	  'toLowerCase',
	  'split',
	  'replace',
	  'slice',
	  'substring',
	  'substr',
	  'concat'
	];
	
	for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);
	
	
	module.exports = s;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function isBlank(str) {
	  return (/^\s*$/).test(makeString(str));
	};


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * Ensure some object is a coerced to a string
	 **/
	module.exports = function makeString(object) {
	  if (object == null) return '';
	  return '' + object;
	};


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function stripTags(str) {
	  return makeString(str).replace(/<\/?[^>]+>/g, '');
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function capitalize(str, lowercaseRest) {
	  str = makeString(str);
	  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
	
	  return str.charAt(0).toUpperCase() + remainingChars;
	};


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function decapitalize(str) {
	  str = makeString(str);
	  return str.charAt(0).toLowerCase() + str.slice(1);
	};


/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function chop(str, step) {
	  if (str == null) return [];
	  str = String(str);
	  step = ~~step;
	  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
	};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var defaultToWhiteSpace = __webpack_require__(146);
	var nativeTrim = String.prototype.trim;
	
	module.exports = function trim(str, characters) {
	  str = makeString(str);
	  if (!characters && nativeTrim) return nativeTrim.call(str);
	  characters = defaultToWhiteSpace(characters);
	  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
	};


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var escapeRegExp = __webpack_require__(147);
	
	module.exports = function defaultToWhiteSpace(characters) {
	  if (characters == null)
	    return '\\s';
	  else if (characters.source)
	    return characters.source;
	  else
	    return '[' + escapeRegExp(characters) + ']';
	};


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function escapeRegExp(str) {
	  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	
	module.exports = function clean(str) {
	  return trim(str).replace(/\s\s+/g, ' ');
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	
	var makeString = __webpack_require__(140);
	
	var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
	  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';
	
	from += from.toUpperCase();
	to += to.toUpperCase();
	
	to = to.split('');
	
	// for tokens requireing multitoken output
	from += 'ß';
	to.push('ss');
	
	
	module.exports = function cleanDiacritics(str) {
	  return makeString(str).replace(/.{1}/g, function(c){
	    var index = from.indexOf(c);
	    return index === -1 ? c : to[index];
	  });
	};


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function(str, substr) {
	  str = makeString(str);
	  substr = makeString(substr);
	
	  if (str.length === 0 || substr.length === 0) return 0;
	  
	  return str.split(substr).length - 1;
	};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function chars(str) {
	  return makeString(str).split('');
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function swapCase(str) {
	  return makeString(str).replace(/\S/g, function(c) {
	    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
	  });
	};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var escapeChars = __webpack_require__(154);
	
	var regexString = '[';
	for(var key in escapeChars) {
	  regexString += key;
	}
	regexString += ']';
	
	var regex = new RegExp( regexString, 'g');
	
	module.exports = function escapeHTML(str) {
	
	  return makeString(str).replace(regex, function(m) {
	    return '&' + escapeChars[m] + ';';
	  });
	};


/***/ },
/* 154 */
/***/ function(module, exports) {

	/* We're explicitly defining the list of entities we want to escape.
	nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.
	
	*/
	var escapeChars = {
	  '¢' : 'cent',
	  '£' : 'pound',
	  '¥' : 'yen',
	  '€': 'euro',
	  '©' :'copy',
	  '®' : 'reg',
	  '<' : 'lt',
	  '>' : 'gt',
	  '"' : 'quot',
	  '&' : 'amp',
	  '\'' : '#39'
	};
	
	module.exports = escapeChars;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var htmlEntities = __webpack_require__(156);
	
	module.exports = function unescapeHTML(str) {
	  return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
	    var match;
	
	    if (entityCode in htmlEntities) {
	      return htmlEntities[entityCode];
	    /*eslint no-cond-assign: 0*/
	    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	      return String.fromCharCode(parseInt(match[1], 16));
	    /*eslint no-cond-assign: 0*/
	    } else if (match = entityCode.match(/^#(\d+)$/)) {
	      return String.fromCharCode(~~match[1]);
	    } else {
	      return entity;
	    }
	  });
	};


/***/ },
/* 156 */
/***/ function(module, exports) {

	/*
	We're explicitly defining the list of entities that might see in escape HTML strings
	*/
	var htmlEntities = {
	  nbsp: ' ',
	  cent: '¢',
	  pound: '£',
	  yen: '¥',
	  euro: '€',
	  copy: '©',
	  reg: '®',
	  lt: '<',
	  gt: '>',
	  quot: '"',
	  amp: '&',
	  apos: '\''
	};
	
	module.exports = htmlEntities;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var chars = __webpack_require__(151);
	
	module.exports = function splice(str, i, howmany, substr) {
	  var arr = chars(str);
	  arr.splice(~~i, ~~howmany, substr);
	  return arr.join('');
	};


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var splice = __webpack_require__(157);
	
	module.exports = function insert(str, i, substr) {
	  return splice(str, i, 0, substr);
	};


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function replaceAll(str, find, replace, ignorecase) {
	  var flags = (ignorecase === true)?'gi':'g';
	  var reg = new RegExp(find, flags);
	
	  return makeString(str).replace(reg, replace);
	};


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function include(str, needle) {
	  if (needle === '') return true;
	  return makeString(str).indexOf(needle) !== -1;
	};


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var slice = [].slice;
	
	module.exports = function join() {
	  var args = slice.call(arguments),
	    separator = args.shift();
	
	  return args.join(makeString(separator));
	};


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = function lines(str) {
	  if (str == null) return [];
	  return String(str).split(/\r\n?|\n/);
	};


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	function getIndent(str) {
	  var matches = str.match(/^[\s\\t]*/gm);
	  var indent = matches[0].length;
	  
	  for (var i = 1; i < matches.length; i++) {
	    indent = Math.min(matches[i].length, indent);
	  }
	
	  return indent;
	}
	
	module.exports = function dedent(str, pattern) {
	  str = makeString(str);
	  var indent = getIndent(str);
	  var reg;
	
	  if (indent === 0) return str;
	
	  if (typeof pattern === 'string') {
	    reg = new RegExp('^' + pattern, 'gm');
	  } else {
	    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
	  }
	
	  return str.replace(reg, '');
	};


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var chars = __webpack_require__(151);
	
	module.exports = function reverse(str) {
	  return chars(str).reverse().join('');
	};


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var toPositive = __webpack_require__(166);
	
	module.exports = function startsWith(str, starts, position) {
	  str = makeString(str);
	  starts = '' + starts;
	  position = position == null ? 0 : Math.min(toPositive(position), str.length);
	  return str.lastIndexOf(starts, position) === position;
	};


/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = function toPositive(number) {
	  return number < 0 ? 0 : (+number || 0);
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var toPositive = __webpack_require__(166);
	
	module.exports = function endsWith(str, ends, position) {
	  str = makeString(str);
	  ends = '' + ends;
	  if (typeof position == 'undefined') {
	    position = str.length - ends.length;
	  } else {
	    position = Math.min(toPositive(position), str.length) - ends.length;
	  }
	  return position >= 0 && str.indexOf(ends, position) === position;
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var adjacent = __webpack_require__(169);
	
	module.exports = function succ(str) {
	  return adjacent(str, -1);
	};


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function adjacent(str, direction) {
	  str = makeString(str);
	  if (str.length === 0) {
	    return '';
	  }
	  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
	};


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var adjacent = __webpack_require__(169);
	
	module.exports = function succ(str) {
	  return adjacent(str, 1);
	};


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function titleize(str) {
	  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
	    return c.toUpperCase();
	  });
	};


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	var decap = __webpack_require__(143);
	
	module.exports = function camelize(str, decapitalize) {
	  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
	    return c ? c.toUpperCase() : '';
	  });
	
	  if (decapitalize === true) {
	    return decap(str);
	  } else {
	    return str;
	  }
	};


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	
	module.exports = function underscored(str) {
	  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	};


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	
	module.exports = function dasherize(str) {
	  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize = __webpack_require__(142);
	var camelize = __webpack_require__(172);
	var makeString = __webpack_require__(140);
	
	module.exports = function classify(str) {
	  str = makeString(str);
	  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
	};


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize = __webpack_require__(142);
	var underscored = __webpack_require__(173);
	var trim = __webpack_require__(145);
	
	module.exports = function humanize(str) {
	  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
	};


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var defaultToWhiteSpace = __webpack_require__(146);
	var nativeTrimLeft = String.prototype.trimLeft;
	
	module.exports = function ltrim(str, characters) {
	  str = makeString(str);
	  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
	  characters = defaultToWhiteSpace(characters);
	  return str.replace(new RegExp('^' + characters + '+'), '');
	};


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var defaultToWhiteSpace = __webpack_require__(146);
	var nativeTrimRight = String.prototype.trimRight;
	
	module.exports = function rtrim(str, characters) {
	  str = makeString(str);
	  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
	  characters = defaultToWhiteSpace(characters);
	  return str.replace(new RegExp(characters + '+$'), '');
	};


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function truncate(str, length, truncateStr) {
	  str = makeString(str);
	  truncateStr = truncateStr || '...';
	  length = ~~length;
	  return str.length > length ? str.slice(0, length) + truncateStr : str;
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * _s.prune: a more elegant version of truncate
	 * prune extra chars, never leaving a half-chopped word.
	 * @author github.com/rwz
	 */
	var makeString = __webpack_require__(140);
	var rtrim = __webpack_require__(178);
	
	module.exports = function prune(str, length, pruneStr) {
	  str = makeString(str);
	  length = ~~length;
	  pruneStr = pruneStr != null ? String(pruneStr) : '...';
	
	  if (str.length <= length) return str;
	
	  var tmpl = function(c) {
	      return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
	    },
	    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'
	
	  if (template.slice(template.length - 2).match(/\w\w/))
	    template = template.replace(/\s*\S+$/, '');
	  else
	    template = rtrim(template.slice(0, template.length - 1));
	
	  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
	};


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var isBlank = __webpack_require__(139);
	var trim = __webpack_require__(145);
	
	module.exports = function words(str, delimiter) {
	  if (isBlank(str)) return [];
	  return trim(str, delimiter).split(delimiter || /\s+/);
	};


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var strRepeat = __webpack_require__(183);
	
	module.exports = function pad(str, length, padStr, type) {
	  str = makeString(str);
	  length = ~~length;
	
	  var padlen = 0;
	
	  if (!padStr)
	    padStr = ' ';
	  else if (padStr.length > 1)
	    padStr = padStr.charAt(0);
	
	  switch (type) {
	  case 'right':
	    padlen = length - str.length;
	    return str + strRepeat(padStr, padlen);
	  case 'both':
	    padlen = length - str.length;
	    return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
	  default: // 'left'
	    padlen = length - str.length;
	    return strRepeat(padStr, padlen) + str;
	  }
	};


/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = function strRepeat(str, qty){
	  if (qty < 1) return '';
	  var result = '';
	  while (qty > 0) {
	    if (qty & 1) result += str;
	    qty >>= 1, str += str;
	  }
	  return result;
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var pad = __webpack_require__(182);
	
	module.exports = function lpad(str, length, padStr) {
	  return pad(str, length, padStr);
	};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var pad = __webpack_require__(182);
	
	module.exports = function rpad(str, length, padStr) {
	  return pad(str, length, padStr, 'right');
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var pad = __webpack_require__(182);
	
	module.exports = function lrpad(str, length, padStr) {
	  return pad(str, length, padStr, 'both');
	};


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var deprecate = __webpack_require__(188);
	
	module.exports = deprecate(__webpack_require__(189).sprintf,
	  'sprintf() will be removed in the next major release, use the sprintf-js package instead.');


/***/ },
/* 188 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	(function(window) {
	    var re = {
	        not_string: /[^s]/,
	        number: /[diefg]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[\+\-]/
	    }
	
	    function sprintf() {
	        var key = arguments[0], cache = sprintf.cache
	        if (!(cache[key] && cache.hasOwnProperty(key))) {
	            cache[key] = sprintf.parse(key)
	        }
	        return sprintf.format.call(null, cache[key], arguments)
	    }
	
	    sprintf.format = function(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
	        for (i = 0; i < tree_length; i++) {
	            node_type = get_type(parse_tree[i])
	            if (node_type === "string") {
	                output[output.length] = parse_tree[i]
	            }
	            else if (node_type === "array") {
	                match = parse_tree[i] // convenience purposes only
	                if (match[2]) { // keyword argument
	                    arg = argv[cursor]
	                    for (k = 0; k < match[2].length; k++) {
	                        if (!arg.hasOwnProperty(match[2][k])) {
	                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
	                        }
	                        arg = arg[match[2][k]]
	                    }
	                }
	                else if (match[1]) { // positional argument (explicit)
	                    arg = argv[match[1]]
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++]
	                }
	
	                if (get_type(arg) == "function") {
	                    arg = arg()
	                }
	
	                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
	                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
	                }
	
	                if (re.number.test(match[8])) {
	                    is_positive = arg >= 0
	                }
	
	                switch (match[8]) {
	                    case "b":
	                        arg = arg.toString(2)
	                    break
	                    case "c":
	                        arg = String.fromCharCode(arg)
	                    break
	                    case "d":
	                    case "i":
	                        arg = parseInt(arg, 10)
	                    break
	                    case "j":
	                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
	                    break
	                    case "e":
	                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
	                    break
	                    case "f":
	                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
	                    break
	                    case "g":
	                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
	                    break
	                    case "o":
	                        arg = arg.toString(8)
	                    break
	                    case "s":
	                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
	                    break
	                    case "u":
	                        arg = arg >>> 0
	                    break
	                    case "x":
	                        arg = arg.toString(16)
	                    break
	                    case "X":
	                        arg = arg.toString(16).toUpperCase()
	                    break
	                }
	                if (re.json.test(match[8])) {
	                    output[output.length] = arg
	                }
	                else {
	                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
	                        sign = is_positive ? "+" : "-"
	                        arg = arg.toString().replace(re.sign, "")
	                    }
	                    else {
	                        sign = ""
	                    }
	                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
	                    pad_length = match[6] - (sign + arg).length
	                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
	                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
	                }
	            }
	        }
	        return output.join("")
	    }
	
	    sprintf.cache = {}
	
	    sprintf.parse = function(fmt) {
	        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = match[0]
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = "%"
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1
	                    var field_list = [], replacement_field = match[2], field_match = []
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list[field_list.length] = field_match[1]
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else {
	                                throw new SyntaxError("[sprintf] failed to parse named argument key")
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError("[sprintf] failed to parse named argument key")
	                    }
	                    match[2] = field_list
	                }
	                else {
	                    arg_names |= 2
	                }
	                if (arg_names === 3) {
	                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
	                }
	                parse_tree[parse_tree.length] = match
	            }
	            else {
	                throw new SyntaxError("[sprintf] unexpected placeholder")
	            }
	            _fmt = _fmt.substring(match[0].length)
	        }
	        return parse_tree
	    }
	
	    var vsprintf = function(fmt, argv, _argv) {
	        _argv = (argv || []).slice(0)
	        _argv.splice(0, 0, fmt)
	        return sprintf.apply(null, _argv)
	    }
	
	    /**
	     * helpers
	     */
	    function get_type(variable) {
	        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
	    }
	
	    function str_repeat(input, multiplier) {
	        return Array(multiplier + 1).join(input)
	    }
	
	    /**
	     * export to either browser or node.js
	     */
	    if (true) {
	        exports.sprintf = sprintf
	        exports.vsprintf = vsprintf
	    }
	    else {
	        window.sprintf = sprintf
	        window.vsprintf = vsprintf
	
	        if (typeof define === "function" && define.amd) {
	            define(function() {
	                return {
	                    sprintf: sprintf,
	                    vsprintf: vsprintf
	                }
	            })
	        }
	    }
	})(typeof window === "undefined" ? this : window);


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var deprecate = __webpack_require__(188);
	
	module.exports = deprecate(__webpack_require__(189).vsprintf,
	  'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');


/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = function toNumber(num, precision) {
	  if (num == null) return 0;
	  var factor = Math.pow(10, isFinite(precision) ? precision : 0);
	  return Math.round(num * factor) / factor;
	};


/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = function numberFormat(number, dec, dsep, tsep) {
	  if (isNaN(number) || number == null) return '';
	
	  number = number.toFixed(~~dec);
	  tsep = typeof tsep == 'string' ? tsep : ',';
	
	  var parts = number.split('.'),
	    fnums = parts[0],
	    decimals = parts[1] ? (dsep || '.') + parts[1] : '';
	
	  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function strRight(str, sep) {
	  str = makeString(str);
	  sep = makeString(sep);
	  var pos = !sep ? -1 : str.indexOf(sep);
	  return~ pos ? str.slice(pos + sep.length, str.length) : str;
	};


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function strRightBack(str, sep) {
	  str = makeString(str);
	  sep = makeString(sep);
	  var pos = !sep ? -1 : str.lastIndexOf(sep);
	  return~ pos ? str.slice(pos + sep.length, str.length) : str;
	};


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function strLeft(str, sep) {
	  str = makeString(str);
	  sep = makeString(sep);
	  var pos = !sep ? -1 : str.indexOf(sep);
	  return~ pos ? str.slice(0, pos) : str;
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function strLeftBack(str, sep) {
	  str = makeString(str);
	  sep = makeString(sep);
	  var pos = str.lastIndexOf(sep);
	  return~ pos ? str.slice(0, pos) : str;
	};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var rtrim = __webpack_require__(178);
	
	module.exports = function toSentence(array, separator, lastSeparator, serial) {
	  separator = separator || ', ';
	  lastSeparator = lastSeparator || ' and ';
	  var a = array.slice(),
	    lastMember = a.pop();
	
	  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;
	
	  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
	};


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var toSentence = __webpack_require__(197);
	
	module.exports = function toSentenceSerial(array, sep, lastSep) {
	  return toSentence(array, sep, lastSep, true);
	};


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	var dasherize = __webpack_require__(174);
	var cleanDiacritics = __webpack_require__(149);
	
	module.exports = function slugify(str) {
	  return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
	};


/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = function surround(str, wrapper) {
	  return [wrapper, str, wrapper].join('');
	};


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var surround = __webpack_require__(200);
	
	module.exports = function quote(str, quoteChar) {
	  return surround(str, quoteChar || '"');
	};


/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = function unquote(str, quoteChar) {
	  quoteChar = quoteChar || '"';
	  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
	    return str.slice(1, str.length - 1);
	  else return str;
	};


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	var strRepeat = __webpack_require__(183);
	
	module.exports = function repeat(str, qty, separator) {
	  str = makeString(str);
	
	  qty = ~~qty;
	
	  // using faster implementation if separator is not needed;
	  if (separator == null) return strRepeat(str, qty);
	
	  // this one is about 300x slower in Google Chrome
	  /*eslint no-empty: 0*/
	  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
	  return repeat.join(separator);
	};


/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = function naturalCmp(str1, str2) {
	  if (str1 == str2) return 0;
	  if (!str1) return -1;
	  if (!str2) return 1;
	
	  var cmpRegex = /(\.\d+|\d+|\D+)/g,
	    tokens1 = String(str1).match(cmpRegex),
	    tokens2 = String(str2).match(cmpRegex),
	    count = Math.min(tokens1.length, tokens2.length);
	
	  for (var i = 0; i < count; i++) {
	    var a = tokens1[i],
	      b = tokens2[i];
	
	    if (a !== b) {
	      var num1 = +a;
	      var num2 = +b;
	      if (num1 === num1 && num2 === num2) {
	        return num1 > num2 ? 1 : -1;
	      }
	      return a < b ? -1 : 1;
	    }
	  }
	
	  if (tokens1.length != tokens2.length)
	    return tokens1.length - tokens2.length;
	
	  return str1 < str2 ? -1 : 1;
	};


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	/**
	 * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein
	 */
	module.exports = function levenshtein(str1, str2) {
	  'use strict';
	  str1 = makeString(str1);
	  str2 = makeString(str2);
	
	  // Short cut cases  
	  if (str1 === str2) return 0;
	  if (!str1 || !str2) return Math.max(str1.length, str2.length);
	
	  // two rows
	  var prevRow = new Array(str2.length + 1);
	
	  // initialise previous row
	  for (var i = 0; i < prevRow.length; ++i) {
	    prevRow[i] = i;
	  }
	
	  // calculate current row distance from previous row
	  for (i = 0; i < str1.length; ++i) {
	    var nextCol = i + 1;
	
	    for (var j = 0; j < str2.length; ++j) {
	      var curCol = nextCol;
	
	      // substution
	      nextCol = prevRow[j] + ( (str1.charAt(i) === str2.charAt(j)) ? 0 : 1 );
	      // insertion
	      var tmp = curCol + 1;
	      if (nextCol > tmp) {
	        nextCol = tmp;
	      }
	      // deletion
	      tmp = prevRow[j + 1] + 1;
	      if (nextCol > tmp) {
	        nextCol = tmp;
	      }
	
	      // copy current col value into previous (in preparation for next iteration)
	      prevRow[j] = curCol;
	    }
	
	    // copy last col value into previous (in preparation for next iteration)
	    prevRow[j] = nextCol;
	  }
	
	  return nextCol;
	};


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var trim = __webpack_require__(145);
	
	function boolMatch(s, matchers) {
	  var i, matcher, down = s.toLowerCase();
	  matchers = [].concat(matchers);
	  for (i = 0; i < matchers.length; i += 1) {
	    matcher = matchers[i];
	    if (!matcher) continue;
	    if (matcher.test && matcher.test(s)) return true;
	    if (matcher.toLowerCase() === down) return true;
	  }
	}
	
	module.exports = function toBoolean(str, trueValues, falseValues) {
	  if (typeof str === 'number') str = '' + str;
	  if (typeof str !== 'string') return !!str;
	  str = trim(str);
	  if (boolMatch(str, trueValues || ['true', '1'])) return true;
	  if (boolMatch(str, falseValues || ['false', '0'])) return false;
	};


/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = function() {
	  var result = {};
	
	  for (var prop in this) {
	    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/)) continue;
	    result[prop] = this[prop];
	  }
	
	  return result;
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// Wrap
	// wraps a string by a certain width
	
	var makeString = __webpack_require__(140);
	
	module.exports = function wrap(str, options){
	  str = makeString(str);
	  
	  options = options || {};
	  
	  var width = options.width || 75;
	  var seperator = options.seperator || '\n';
	  var cut = options.cut || false;
	  var preserveSpaces = options.preserveSpaces || false;
	  var trailingSpaces = options.trailingSpaces || false;
	  
	  var result;
	  
	  if(width <= 0){
	    return str;
	  }
	  
	  else if(!cut){
	  
	    var words = str.split(' ');
	    var current_column = 0;
	    result = '';
	  
	    while(words.length > 0){
	      
	      // if adding a space and the next word would cause this line to be longer than width...
	      if(1 + words[0].length + current_column > width){
	        //start a new line if this line is not already empty
	        if(current_column > 0){
	          // add a space at the end of the line is preserveSpaces is true
	          if (preserveSpaces){
	            result += ' ';
	            current_column++;
	          }
	          // fill the rest of the line with spaces if trailingSpaces option is true
	          else if(trailingSpaces){
	            while(current_column < width){
	              result += ' ';
	              current_column++;
	            }            
	          }
	          //start new line
	          result += seperator;
	          current_column = 0;
	        }
	      }
	  
	      // if not at the begining of the line, add a space in front of the word
	      if(current_column > 0){
	        result += ' ';
	        current_column++;
	      }
	  
	      // tack on the next word, update current column, a pop words array
	      result += words[0];
	      current_column += words[0].length;
	      words.shift();
	  
	    }
	  
	    // fill the rest of the line with spaces if trailingSpaces option is true
	    if(trailingSpaces){
	      while(current_column < width){
	        result += ' ';
	        current_column++;
	      }            
	    }
	  
	    return result;
	  
	  }
	  
	  else {
	  
	    var index = 0;
	    result = '';
	  
	    // walk through each character and add seperators where appropriate
	    while(index < str.length){
	      if(index % width == 0 && index > 0){
	        result += seperator;
	      }
	      result += str.charAt(index);
	      index++;
	    }
	  
	    // fill the rest of the line with spaces if trailingSpaces option is true
	    if(trailingSpaces){
	      while(index % width > 0){
	        result += ' ';
	        index++;
	      }            
	    }
	    
	    return result;
	  }
	};


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var makeString = __webpack_require__(140);
	
	module.exports = function(str, callback) {
	  str = makeString(str);
	
	  if (str.length === 0 || typeof callback !== 'function') return str;
	
	  return str.replace(/./g, callback);
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var FacetRow = (function (_super) {
	    __extends(FacetRow, _super);
	    function FacetRow() {
	        _super.apply(this, arguments);
	    }
	    FacetRow.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("li", {className: 'facet-value facet-selectable'}, 
	            React.createElement("label", {className: 'coveo-checkbox-label facet-value-label'}, 
	                React.createElement("input", {type: 'checkbox', name: this.props.facetRow.name, className: 'coveo-checkbox facet-checkbox-input', checked: this.props.isChecked, onChange: function () { return _this.props.onToggleFacet(_this.props.facetRow); }}), 
	                React.createElement("button", {type: 'button'}), 
	                React.createElement("span", {className: 'label'}, this.props.facetRow.formattedName))
	        ));
	    };
	    return FacetRow;
	}(React.Component));
	exports.FacetRow = FacetRow;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Facet_1 = __webpack_require__(132);
	var ReduxUtils_1 = __webpack_require__(124);
	var FacetActions_1 = __webpack_require__(135);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.facets, { facet: ownProps.facet.name });
	    return {
	        isOpened: item && item.opened,
	        selectedFacetRows: item ? item.selected : [],
	        withReduxState: true
	    };
	};
	var mapDispatchToProps = function (dispatch) { return ({
	    onRender: function (facet) { return dispatch(FacetActions_1.addFacet(facet)); },
	    onDestroy: function (facet) { return dispatch(FacetActions_1.removeFacet(facet)); },
	    onToggleFacet: function (facet, facetRow) { return dispatch(FacetActions_1.changeFacet(facet, facetRow)); },
	    onClearFacet: function (facet) { return dispatch(FacetActions_1.emptyFacet(facet)); }
	}); };
	exports.FacetConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(Facet_1.Facet);


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FacetActions_1 = __webpack_require__(135);
	var _ = __webpack_require__(4);
	exports.facetInitialState = { facet: undefined, opened: false, selected: [] };
	exports.facetsInitialState = [];
	exports.facetReducer = function (state, action) {
	    if (state === void 0) { state = exports.facetInitialState; }
	    switch (action.type) {
	        case FacetActions_1.FacetActions.toggleMoreFacetRows:
	            if (state.facet !== action.payload.facet) {
	                return state;
	            }
	            return {
	                facet: state.facet,
	                opened: !state.opened,
	                selected: state.selected
	            };
	        case FacetActions_1.FacetActions.closeMoreFacetRows:
	            return {
	                facet: state.facet,
	                opened: false,
	                selected: state.selected
	            };
	        case FacetActions_1.FacetActions.addFacet:
	            return {
	                facet: action.payload.facet,
	                opened: false,
	                selected: []
	            };
	        case FacetActions_1.FacetActions.changeFacet:
	            if (state.facet !== action.payload.facet) {
	                return state;
	            }
	            var selected = state.selected;
	            if (_.some(state.selected, function (facetRow) { return facetRow.name === action.payload.facetRow.name; })) {
	                selected = _.reject(state.selected, function (facetRow) {
	                    return facetRow.name === action.payload.facetRow.name;
	                });
	            }
	            else {
	                selected = [
	                    action.payload.facetRow
	                ].concat(state.selected);
	            }
	            return {
	                facet: state.facet,
	                opened: state.opened,
	                selected: selected
	            };
	        case FacetActions_1.FacetActions.emptyFacet:
	            if (state.facet !== action.payload.facet) {
	                return state;
	            }
	            return {
	                facet: state.facet,
	                opened: state.opened,
	                selected: []
	            };
	        default:
	            return state;
	    }
	};
	exports.facetsReducer = function (state, action) {
	    if (state === void 0) { state = exports.facetsInitialState; }
	    switch (action.type) {
	        case FacetActions_1.FacetActions.changeFacet:
	        case FacetActions_1.FacetActions.emptyFacet:
	        case FacetActions_1.FacetActions.toggleMoreFacetRows:
	        case FacetActions_1.FacetActions.closeMoreFacetRows:
	            return state.map(function (facet) { return exports.facetReducer(facet, action); });
	        case FacetActions_1.FacetActions.addFacet:
	            return state.concat([
	                exports.facetReducer(undefined, action)
	            ]);
	        case FacetActions_1.FacetActions.removeFacet:
	            return _.reject(state, function (facet) {
	                return action.payload.facet === facet.facet;
	            });
	        default:
	            return state;
	    }
	};


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var Loading = (function (_super) {
	    __extends(Loading, _super);
	    function Loading() {
	        _super.apply(this, arguments);
	    }
	    Loading.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	    };
	    Loading.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    Loading.prototype.render = function () {
	        return (React.createElement("div", {className: 'spinner'}, 
	            React.createElement("div", {className: 'bounce1'}), 
	            React.createElement("div", {className: 'bounce2'}), 
	            React.createElement("div", {className: 'bounce3'})));
	    };
	    return Loading;
	}(React.Component));
	exports.Loading = Loading;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var Loading_1 = __webpack_require__(213);
	var LoadingActions_1 = __webpack_require__(215);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () { return ({}); };
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onRender: function () { return dispatch(LoadingActions_1.addLoading(ownProps.id)); },
	        onDestroy: function () { return dispatch(LoadingActions_1.removeLoading(ownProps.id)); }
	    });
	};
	exports.LoadingConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(Loading_1.Loading);


/***/ },
/* 215 */
/***/ function(module, exports) {

	"use strict";
	exports.LoadingActions = {
	    add: 'ADD_LOADING',
	    remove: 'REMOVE_LOADING',
	    turnOn: 'TURN_ON_LOADING',
	    turnOff: 'TURN_OFF_LOADING'
	};
	exports.addLoading = function (id) { return ({
	    type: exports.LoadingActions.add,
	    payload: {
	        ids: [id]
	    }
	}); };
	exports.removeLoading = function (id) { return ({
	    type: exports.LoadingActions.remove,
	    payload: {
	        ids: [id]
	    }
	}); };
	exports.turnOnLoading = function (ids) { return ({
	    type: exports.LoadingActions.turnOn,
	    payload: {
	        ids: ids
	    }
	}); };
	exports.turnOffLoading = function (ids) { return ({
	    type: exports.LoadingActions.turnOff,
	    payload: {
	        ids: ids
	    }
	}); };


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LoadingActions_1 = __webpack_require__(215);
	var _ = __webpack_require__(4);
	exports.loadingInitialState = {
	    id: undefined,
	    isOn: false
	};
	exports.loadingsInitialState = [];
	exports.loadingReducer = function (state, action) {
	    if (state === void 0) { state = exports.loadingInitialState; }
	    switch (action.type) {
	        case LoadingActions_1.LoadingActions.add:
	            return {
	                id: action.payload.ids[0],
	                isOn: true
	            };
	        case LoadingActions_1.LoadingActions.turnOn:
	            if (!_.contains(action.payload.ids, state.id)) {
	                return state;
	            }
	            return {
	                id: state.id,
	                isOn: true
	            };
	        case LoadingActions_1.LoadingActions.turnOff:
	            if (!_.contains(action.payload.ids, state.id)) {
	                return state;
	            }
	            return {
	                id: state.id,
	                isOn: false
	            };
	        default:
	            return state;
	    }
	};
	exports.loadingsReducer = function (state, action) {
	    if (state === void 0) { state = exports.loadingsInitialState; }
	    switch (action.type) {
	        case LoadingActions_1.LoadingActions.add:
	            return state.concat([
	                exports.loadingReducer(undefined, action)
	            ]);
	        case LoadingActions_1.LoadingActions.remove:
	            return _.reject(state, function (loading) {
	                return loading.id === action.payload.ids[0];
	            });
	        case LoadingActions_1.LoadingActions.turnOn:
	        case LoadingActions_1.LoadingActions.turnOff:
	            return state.map(function (loading) { return exports.loadingReducer(loading, action); });
	        default:
	            return state;
	    }
	};


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var LoadingConnected_1 = __webpack_require__(214);
	var Loading_1 = __webpack_require__(213);
	var NavigationPaginationConnected_1 = __webpack_require__(218);
	var NavigationPerPageConnected_1 = __webpack_require__(222);
	var NavigationPagination_1 = __webpack_require__(219);
	var NavigationPerPage_1 = __webpack_require__(223);
	var React = __webpack_require__(2);
	var Navigation = (function (_super) {
	    __extends(Navigation, _super);
	    function Navigation() {
	        _super.apply(this, arguments);
	    }
	    Navigation.prototype.render = function () {
	        var pagination = null;
	        if (this.props.totalPages > 1) {
	            var paginationProps = {
	                totalPages: this.props.totalPages,
	                numberOfPagesToShow: this.props.numberOfPagesToShow,
	                previousLabel: this.props.previousLabel,
	                nextLabel: this.props.nextLabel
	            };
	            pagination = this.props.withReduxState ?
	                React.createElement(NavigationPaginationConnected_1.NavigationPaginationConnected, __assign({id: 'pagination-' + this.props.id, loadingIds: this.props.loadingIds}, paginationProps)) :
	                React.createElement(NavigationPagination_1.NavigationPagination, __assign({currentPage: this.props.currentPage, onPageClick: this.props.onPageClick}, paginationProps));
	        }
	        var perPage = null;
	        var perPageNumbers = (this.props.perPageNumbers || NavigationPerPage_1.PER_PAGE_NUMBERS);
	        if (perPageNumbers.length && this.props.totalEntries > perPageNumbers[0]) {
	            var perPageProps = {
	                totalEntries: this.props.totalEntries,
	                label: this.props.perPageLabel,
	                perPageNumbers: this.props.perPageNumbers
	            };
	            perPage = this.props.withReduxState ?
	                React.createElement(NavigationPerPageConnected_1.NavigationPerPageConnected, __assign({id: this.props.id, loadingIds: this.props.loadingIds}, perPageProps)) :
	                React.createElement(NavigationPerPage_1.NavigationPerPage, __assign({onPerPageClick: this.props.onPerPageClick, currentPerPage: this.props.currentPerPage}, perPageProps));
	        }
	        var navigationClasses = 'pagination-container' + (this.props.isLoading ? ' loading-view' : '');
	        var loading = this.props.withReduxState ? React.createElement(LoadingConnected_1.LoadingConnected, {id: 'loading-' + this.props.id}) : React.createElement(Loading_1.Loading, null);
	        return (React.createElement("div", {className: navigationClasses}, 
	            perPage, 
	            React.createElement("div", {className: 'flex-auto'}, loading), 
	            pagination));
	    };
	    return Navigation;
	}(React.Component));
	exports.Navigation = Navigation;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var NavigationPagination_1 = __webpack_require__(219);
	var NavigationPaginationActions_1 = __webpack_require__(221);
	var LoadingActions_1 = __webpack_require__(215);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.paginationComposite, { id: ownProps.id });
	    return {
	        currentPage: item ? item.pageNb : 0
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onRender: function () { return dispatch(NavigationPaginationActions_1.addPagination(ownProps.id)); },
	        onDestroy: function () { return dispatch(NavigationPaginationActions_1.removePagination(ownProps.id)); },
	        onPageClick: function (pageNb) {
	            dispatch(LoadingActions_1.turnOnLoading(ownProps.loadingIds));
	            dispatch(NavigationPaginationActions_1.changePage(ownProps.id, pageNb));
	        }
	    });
	};
	exports.NavigationPaginationConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(NavigationPagination_1.NavigationPagination);


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var NavigationPaginationSelect_1 = __webpack_require__(220);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	exports.NUMBER_OF_PAGES_SHOWING = 7;
	exports.PREVIOUS_LABEL = 'Previous';
	exports.NEXT_LABEL = 'Next';
	var NavigationPagination = (function (_super) {
	    __extends(NavigationPagination, _super);
	    function NavigationPagination() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handlePageClick = function (pageNb) {
	            if (_this.props.onPageClick && pageNb >= 0) {
	                _this.props.onPageClick(pageNb);
	            }
	        };
	    }
	    NavigationPagination.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	    };
	    NavigationPagination.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    NavigationPagination.prototype.render = function () {
	        var _this = this;
	        var currentPage = this.props.currentPage || 0;
	        var showXPages = Math.abs((this.props.numberOfPagesToShow || exports.NUMBER_OF_PAGES_SHOWING) - 1);
	        var previousLabel = this.props.previousLabel || exports.PREVIOUS_LABEL;
	        var nextLabel = this.props.nextLabel || exports.NEXT_LABEL;
	        var start = 0;
	        var end = showXPages;
	        var lastPage = this.props.totalPages - 1;
	        var previousClasses = 'flat-select-option mod-link ' + (currentPage === 0 ? 'disabled' : 'selectable');
	        var nextClasses = 'flat-select-option mod-link ' + (currentPage === lastPage ? 'disabled' : 'selectable');
	        var pageSelects = [];
	        if (currentPage + showXPages / 2 > lastPage) {
	            end = lastPage;
	            start = Math.max(lastPage - showXPages, 0);
	        }
	        else {
	            start = Math.max(Math.floor(currentPage - showXPages / 2), 0);
	            end = Math.min(start + showXPages, lastPage);
	        }
	        _.each(_.range(start, end + 1), function (p) {
	            pageSelects.push(React.createElement(NavigationPaginationSelect_1.NavigationPaginationSelect, {key: 'page-' + p, onPageClick: _this.handlePageClick, pageNb: p, selected: p === currentPage}));
	        });
	        return (React.createElement("div", {className: 'pagination'}, 
	            React.createElement("div", {className: 'flat-select'}, 
	                React.createElement("a", {className: previousClasses, "data-page": currentPage - 1, onClick: function () { return _this.handlePageClick(currentPage - 1); }}, 
	                    React.createElement(Svg_1.Svg, {svgName: 'arrow-left-rounded', className: 'pagination-icon', svgClass: 'icon icon-small mod-lg'}), 
	                    previousLabel), 
	                pageSelects, 
	                React.createElement("a", {className: nextClasses, "data-page": currentPage + 1, onClick: function () { return _this.handlePageClick(currentPage + 1); }}, 
	                    nextLabel, 
	                    React.createElement(Svg_1.Svg, {svgName: 'arrow-right-rounded', className: 'pagination-icon', svgClass: 'icon icon-small mod-lg'})))
	        ));
	    };
	    return NavigationPagination;
	}(React.Component));
	exports.NavigationPagination = NavigationPagination;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var NavigationPaginationSelect = (function (_super) {
	    __extends(NavigationPaginationSelect, _super);
	    function NavigationPaginationSelect() {
	        _super.apply(this, arguments);
	    }
	    NavigationPaginationSelect.prototype.render = function () {
	        var _this = this;
	        var linkClasses = 'flat-select-option' + (this.props.selected ? '' : ' selectable');
	        return (React.createElement("a", {className: linkClasses, "data-page": this.props.pageNb, onClick: function () { return _this.props.onPageClick(_this.props.pageNb); }}, this.props.pageNb + 1));
	    };
	    return NavigationPaginationSelect;
	}(React.Component));
	exports.NavigationPaginationSelect = NavigationPaginationSelect;


/***/ },
/* 221 */
/***/ function(module, exports) {

	"use strict";
	exports.PaginationActions = {
	    add: 'ADD_PAGINATION',
	    remove: 'REMOVE_PAGINATION',
	    changePage: 'CHANGE_PAGE',
	    reset: 'RESET_PAGING'
	};
	exports.addPagination = function (id) { return ({
	    type: exports.PaginationActions.add,
	    payload: {
	        id: id
	    }
	}); };
	exports.removePagination = function (id) { return ({
	    type: exports.PaginationActions.remove,
	    payload: {
	        id: id
	    }
	}); };
	exports.changePage = function (id, pageNb) { return ({
	    type: exports.PaginationActions.changePage,
	    payload: {
	        id: id,
	        pageNb: pageNb
	    }
	}); };
	exports.resetPaging = function (id) { return ({
	    type: exports.PaginationActions.reset,
	    payload: {
	        id: id,
	        pageNb: 0
	    }
	}); };


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var NavigationPerPage_1 = __webpack_require__(223);
	var NavigationPerPageActions_1 = __webpack_require__(225);
	var LoadingActions_1 = __webpack_require__(215);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.perPageComposite, { id: ownProps.id });
	    return {
	        currentPerPage: item ? item.perPage : null
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onRender: function (perPageNb) { return dispatch(NavigationPerPageActions_1.addPerPage(ownProps.id, perPageNb)); },
	        onDestroy: function () { return dispatch(NavigationPerPageActions_1.removePerPage(ownProps.id)); },
	        onPerPageClick: function (perPageNb) {
	            dispatch(LoadingActions_1.turnOnLoading(ownProps.loadingIds));
	            dispatch(NavigationPerPageActions_1.changePerPage(ownProps.id, perPageNb));
	        }
	    });
	};
	exports.NavigationPerPageConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(NavigationPerPage_1.NavigationPerPage);


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var NavigationPerPageSelect_1 = __webpack_require__(224);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	exports.PER_PAGE_NUMBERS = [10, 20, 30];
	exports.PER_PAGE_LABEL = 'Results per page';
	var NavigationPerPage = (function (_super) {
	    __extends(NavigationPerPage, _super);
	    function NavigationPerPage() {
	        _super.apply(this, arguments);
	    }
	    NavigationPerPage.prototype.componentWillMount = function () {
	        this.perPageNumbers = this.props.perPageNumbers || exports.PER_PAGE_NUMBERS;
	        if (this.props.onRender) {
	            this.props.onRender(this.perPageNumbers[0]);
	        }
	    };
	    NavigationPerPage.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    NavigationPerPage.prototype.render = function () {
	        var _this = this;
	        this.perPageNumbers = this.props.perPageNumbers || exports.PER_PAGE_NUMBERS;
	        var currentPerPage = this.props.currentPerPage || this.perPageNumbers[0];
	        var topNumber = this.props.totalEntries + 10;
	        var label = this.props.label || exports.PER_PAGE_LABEL;
	        var perPageSelects = _.map(this.perPageNumbers, function (number) {
	            if (topNumber > number) {
	                var selectId = 'perpage-' + (_this.props.id || '') + number;
	                var isSelected = currentPerPage === number;
	                return (React.createElement(NavigationPerPageSelect_1.NavigationPerPageSelect, {onPerPageClick: _this.props.onPerPageClick, perPageNb: number, key: selectId, selected: isSelected}));
	            }
	        });
	        return (React.createElement("div", {className: 'items-per-page prepended-flat-select'}, 
	            React.createElement("div", {className: 'flat-select-prepend'}, 
	                label, 
	                ":"), 
	            React.createElement("div", {className: 'flat-select clearfix'}, perPageSelects)));
	    };
	    return NavigationPerPage;
	}(React.Component));
	exports.NavigationPerPage = NavigationPerPage;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var NavigationPerPageSelect = (function (_super) {
	    __extends(NavigationPerPageSelect, _super);
	    function NavigationPerPageSelect() {
	        _super.apply(this, arguments);
	    }
	    NavigationPerPageSelect.prototype.render = function () {
	        var _this = this;
	        var selectClasses = 'flat-select-option' + (this.props.selected ? '' : ' selectable');
	        var spanClasses = 'enabled' + (this.props.selected ? ' selected-value state-selected' : '');
	        return (React.createElement("a", {className: selectClasses, onClick: function () { return _this.props.onPerPageClick(_this.props.perPageNb); }}, 
	            React.createElement("span", {className: spanClasses}, this.props.perPageNb)
	        ));
	    };
	    return NavigationPerPageSelect;
	}(React.Component));
	exports.NavigationPerPageSelect = NavigationPerPageSelect;


/***/ },
/* 225 */
/***/ function(module, exports) {

	"use strict";
	exports.PerPageActions = {
	    add: 'ADD_PER_PAGE',
	    remove: 'REMOVE_PER_PAGE',
	    change: 'CHANGE_PER_PAGE'
	};
	exports.addPerPage = function (id, perPage) { return ({
	    type: exports.PerPageActions.add,
	    payload: {
	        id: id,
	        perPage: perPage
	    }
	}); };
	exports.removePerPage = function (id) { return ({
	    type: exports.PerPageActions.remove,
	    payload: {
	        id: id
	    }
	}); };
	exports.changePerPage = function (id, perPage) { return ({
	    type: exports.PerPageActions.change,
	    payload: {
	        id: id,
	        perPage: perPage
	    }
	}); };


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var Navigation_1 = __webpack_require__(217);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.loadings, { id: 'loading-' + ownProps.id });
	    return {
	        isLoading: item && item.isOn || false,
	        withReduxState: true
	    };
	};
	var mapDispatchToProps = function () { return ({}); };
	exports.NavigationConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(Navigation_1.Navigation);


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NavigationPaginationActions_1 = __webpack_require__(221);
	var _ = __webpack_require__(4);
	exports.paginationInitialState = {
	    id: undefined,
	    pageNb: 0
	};
	exports.paginationCompositeInitialState = [];
	exports.paginationReducer = function (state, action) {
	    if (state === void 0) { state = exports.paginationInitialState; }
	    switch (action.type) {
	        case NavigationPaginationActions_1.PaginationActions.add:
	            return {
	                id: action.payload.id,
	                pageNb: state.pageNb
	            };
	        case NavigationPaginationActions_1.PaginationActions.changePage:
	        case NavigationPaginationActions_1.PaginationActions.reset:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return {
	                id: state.id,
	                pageNb: action.payload.pageNb
	            };
	        default:
	            return state;
	    }
	};
	exports.paginationCompositeReducer = function (state, action) {
	    if (state === void 0) { state = exports.paginationCompositeInitialState; }
	    switch (action.type) {
	        case NavigationPaginationActions_1.PaginationActions.add:
	            return state.concat([
	                exports.paginationReducer(undefined, action)
	            ]);
	        case NavigationPaginationActions_1.PaginationActions.remove:
	            return _.reject(state, function (pagination) {
	                return pagination.id === action.payload.id;
	            });
	        case NavigationPaginationActions_1.PaginationActions.changePage:
	        case NavigationPaginationActions_1.PaginationActions.reset:
	            return state.map(function (pagination) { return exports.paginationReducer(pagination, action); });
	        default:
	            return state;
	    }
	};


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NavigationPerPageActions_1 = __webpack_require__(225);
	var _ = __webpack_require__(4);
	exports.perPageInitialState = {
	    id: undefined,
	    perPage: 10
	};
	exports.perPageCompositeInitialState = [];
	exports.perPageReducer = function (state, action) {
	    if (state === void 0) { state = exports.perPageInitialState; }
	    switch (action.type) {
	        case NavigationPerPageActions_1.PerPageActions.add:
	            return {
	                id: action.payload.id,
	                perPage: action.payload.perPage
	            };
	        case NavigationPerPageActions_1.PerPageActions.change:
	            return {
	                id: state.id,
	                perPage: action.payload.perPage
	            };
	        default:
	            return state;
	    }
	};
	exports.perPageCompositeReducer = function (state, action) {
	    if (state === void 0) { state = exports.perPageCompositeInitialState; }
	    switch (action.type) {
	        case NavigationPerPageActions_1.PerPageActions.add:
	            return state.concat([
	                exports.perPageReducer(undefined, action)
	            ]);
	        case NavigationPerPageActions_1.PerPageActions.remove:
	            return _.reject(state, function (perPage) {
	                return perPage.id === action.payload.id;
	            });
	        case NavigationPerPageActions_1.PerPageActions.change:
	            return state.map(function (perPage) { return exports.perPageReducer(perPage, action); });
	        default:
	            return state;
	    }
	};


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(7);
	var Dropdown = (function (_super) {
	    __extends(Dropdown, _super);
	    function Dropdown() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleClick = function () {
	            if (_this.props.onClick) {
	                _this.props.onClick();
	            }
	        };
	        this.handleDocumentClick = function (e) {
	            var facetSearch = ReactDOM.findDOMNode(_this.dropdown);
	            if (!facetSearch.contains(e.target)) {
	                _this.props.onDocumentClick();
	            }
	        };
	    }
	    Dropdown.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	        if (this.props.onDocumentClick) {
	            document.addEventListener('click', this.handleDocumentClick);
	        }
	    };
	    Dropdown.prototype.componentWillUnmount = function () {
	        if (this.props.onDocumentClick) {
	            document.removeEventListener('click', this.handleDocumentClick);
	        }
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    Dropdown.prototype.render = function () {
	        var _this = this;
	        var dropdownClasses = 'dropdown-wrapper' + (this.props.isOpened ? ' open' : '');
	        return (React.createElement("div", {className: dropdownClasses, ref: function (dropdown) { return _this.dropdown = dropdown; }}, 
	            React.createElement("span", {className: 'dropdown-toggle inline-flex flex-center', onClick: function () { return _this.handleClick(); }}, this.props.toggleContent), 
	            React.createElement("ul", {className: 'dropdown-menu normal-height'}, this.props.dropdownItems)));
	    };
	    return Dropdown;
	}(React.Component));
	exports.Dropdown = Dropdown;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var Dropdown_1 = __webpack_require__(229);
	var DropdownActions_1 = __webpack_require__(231);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.dropdowns, { id: ownProps.id });
	    return {
	        isOpened: item && item.opened
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) { return ({
	    onRender: function () { return dispatch(DropdownActions_1.addDropdown(ownProps.id)); },
	    onDestroy: function () { return dispatch(DropdownActions_1.removeDropdown(ownProps.id)); },
	    onClick: function () { return dispatch(DropdownActions_1.toggleDropdown(ownProps.id)); },
	    onDocumentClick: function () { return dispatch(DropdownActions_1.closeDropdown(ownProps.id)); }
	}); };
	exports.DropdownConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(Dropdown_1.Dropdown);


/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";
	exports.DropdownActions = {
	    add: 'ADD_DROPDOWN',
	    remove: 'REMOVE_DROPDOWN',
	    toggle: 'TOGGLE_DROPDOWN',
	    close: 'CLOSE'
	};
	exports.addDropdown = function (id) { return ({
	    type: exports.DropdownActions.add,
	    payload: {
	        id: id
	    }
	}); };
	exports.removeDropdown = function (id) { return ({
	    type: exports.DropdownActions.remove,
	    payload: {
	        id: id
	    }
	}); };
	exports.toggleDropdown = function (id) { return ({
	    type: exports.DropdownActions.toggle,
	    payload: {
	        id: id
	    }
	}); };
	exports.closeDropdown = function (id) { return ({
	    type: exports.DropdownActions.close,
	    payload: {
	        id: id
	    }
	}); };


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DropdownActions_1 = __webpack_require__(231);
	var _ = __webpack_require__(4);
	exports.dropdownInitialState = { id: undefined, opened: false };
	exports.dropdownsInitialState = [];
	exports.dropdownReducer = function (state, action) {
	    if (state === void 0) { state = exports.dropdownInitialState; }
	    switch (action.type) {
	        case DropdownActions_1.DropdownActions.toggle:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return {
	                id: state.id,
	                opened: !state.opened,
	            };
	        case DropdownActions_1.DropdownActions.close:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return {
	                id: state.id,
	                opened: false
	            };
	        case DropdownActions_1.DropdownActions.add:
	            return {
	                id: action.payload.id,
	                opened: false
	            };
	        default:
	            return state;
	    }
	};
	exports.dropdownsReducer = function (state, action) {
	    if (state === void 0) { state = exports.dropdownsInitialState; }
	    switch (action.type) {
	        case DropdownActions_1.DropdownActions.toggle:
	        case DropdownActions_1.DropdownActions.close:
	            return state.map(function (dropdown) { return exports.dropdownReducer(dropdown, action); });
	        case DropdownActions_1.DropdownActions.add:
	            return state.concat([
	                exports.dropdownReducer(undefined, action)
	            ]);
	        case DropdownActions_1.DropdownActions.remove:
	            return _.reject(state, function (dropdown) {
	                return action.payload.id === dropdown.id;
	            });
	        default:
	            return state;
	    }
	};


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PrimaryActionConnected_1 = __webpack_require__(234);
	var PrimaryAction_1 = __webpack_require__(235);
	var SecondaryActionsConnected_1 = __webpack_require__(241);
	var SecondaryActions_1 = __webpack_require__(242);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var ActionBar = (function (_super) {
	    __extends(ActionBar, _super);
	    function ActionBar() {
	        _super.apply(this, arguments);
	    }
	    ActionBar.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	    };
	    ActionBar.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    ActionBar.prototype.render = function () {
	        var _this = this;
	        var primaryActions = !this.props.prompt && _.map(this.props.actions, function (action, index) {
	            if (action.primary) {
	                var primaryAction = _this.props.withReduxState ?
	                    React.createElement(PrimaryActionConnected_1.PrimaryActionConnected, {action: action, parentId: _this.props.id}) :
	                    React.createElement(PrimaryAction_1.PrimaryAction, {action: action});
	                return React.createElement("div", {className: 'dropdown action primary-action', key: 'primary-' + index}, primaryAction);
	            }
	        });
	        var secondaryActions = !this.props.prompt && _.map(this.props.actions, function (action) {
	            if (!action.primary) {
	                return action;
	            }
	        }).filter(Boolean);
	        var secondaryActionsView = secondaryActions.length ?
	            (this.props.withReduxState ?
	                React.createElement(SecondaryActionsConnected_1.SecondaryActionsConnected, {moreLabel: this.props.moreLabel, actions: secondaryActions, id: this.props.id}) :
	                React.createElement(SecondaryActions_1.SecondaryActions, {moreLabel: this.props.moreLabel, actions: secondaryActions})) :
	            null;
	        return (React.createElement("div", {className: 'coveo-table-actions-container mod-cancel-header-padding mod-border-bottom mod-align-header'}, 
	            React.createElement("div", {className: 'coveo-table-actions'}, 
	                primaryActions, 
	                secondaryActionsView, 
	                this.props.prompt), 
	            this.props.children));
	    };
	    return ActionBar;
	}(React.Component));
	exports.ActionBar = ActionBar;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var PrimaryAction_1 = __webpack_require__(235);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () { return ({
	    withReduxState: true
	}); };
	var mapDispatchToProps = function () { return ({}); };
	exports.PrimaryActionConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(PrimaryAction_1.PrimaryAction);


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var LinkAction_1 = __webpack_require__(236);
	var TriggerActionConnected_1 = __webpack_require__(238);
	var TriggerAction_1 = __webpack_require__(239);
	var React = __webpack_require__(2);
	var PrimaryAction = (function (_super) {
	    __extends(PrimaryAction, _super);
	    function PrimaryAction() {
	        _super.apply(this, arguments);
	    }
	    PrimaryAction.prototype.render = function () {
	        var action = this.props.action.link ?
	            React.createElement(LinkAction_1.LinkAction, {action: this.props.action}) :
	            (this.props.withReduxState ?
	                React.createElement(TriggerActionConnected_1.TriggerActionConnected, {action: this.props.action, parentId: this.props.parentId}) :
	                React.createElement(TriggerAction_1.TriggerAction, {action: this.props.action}));
	        return (React.createElement("div", null, action));
	    };
	    return PrimaryAction;
	}(React.Component));
	exports.PrimaryAction = PrimaryAction;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(2);
	var Action_1 = __webpack_require__(237);
	var LinkAction = (function (_super) {
	    __extends(LinkAction, _super);
	    function LinkAction() {
	        _super.apply(this, arguments);
	    }
	    LinkAction.prototype.render = function () {
	        var actionClasses = 'enabled' + (this.props.simple ? '' : ' inline-flex flex-center');
	        var opts = {};
	        if (this.props.action.target) {
	            opts.target = this.props.action.target;
	            opts.rel = 'noopener noreferrer';
	        }
	        return (React.createElement("a", __assign({className: actionClasses, href: this.props.action.link, title: this.props.action.name}, opts), 
	            React.createElement(Action_1.Action, {action: this.props.action, simple: this.props.simple})
	        ));
	    };
	    return LinkAction;
	}(React.Component));
	exports.LinkAction = LinkAction;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var React = __webpack_require__(2);
	var Action = (function (_super) {
	    __extends(Action, _super);
	    function Action() {
	        _super.apply(this, arguments);
	    }
	    Action.prototype.render = function () {
	        var actionIcon = this.props.action.icon ?
	            React.createElement(Svg_1.Svg, {svgName: this.props.action.icon, className: 'action-icon', svgClass: 'icon fill-medium-blue'}) :
	            React.createElement(Svg_1.Svg, {svgName: 'more', className: 'action-icon action-icon-more', svgClass: 'icon icon-medium fill-medium-blue'});
	        var inside = this.props.simple ? this.props.action.name :
	            React.createElement("span", {className: 'inline-flex flex-center'}, 
	                actionIcon, 
	                React.createElement("span", {className: 'action-label'}, this.props.action.name));
	        return (React.createElement("span", null, inside));
	    };
	    return Action;
	}(React.Component));
	exports.Action = Action;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var TriggerAction_1 = __webpack_require__(239);
	var InlinePromptActions_1 = __webpack_require__(240);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () { return ({}); };
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onTriggerConfirm: function (onClick, userChoice, className) {
	            dispatch(InlinePromptActions_1.addPrompt(ownProps.parentId, { onClick: onClick, userChoice: userChoice, isOpened: false, className: className }));
	        },
	        onConfirm: function () { return dispatch(InlinePromptActions_1.removePrompt(ownProps.parentId)); }
	    });
	};
	exports.TriggerActionConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(TriggerAction_1.TriggerAction);


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Action_1 = __webpack_require__(237);
	var React = __webpack_require__(2);
	exports.CONFIRM_LABEL = 'Are you sure?';
	var TriggerAction = (function (_super) {
	    __extends(TriggerAction, _super);
	    function TriggerAction() {
	        _super.apply(this, arguments);
	    }
	    TriggerAction.prototype.onTriggerAction = function () {
	        var _this = this;
	        var confirmData = this.props.action.requiresConfirmation;
	        if (confirmData && this.props.onTriggerConfirm) {
	            var confirmLabel = this.props.confirmLabel || exports.CONFIRM_LABEL;
	            var icon = this.props.action.icon;
	            this.props.onTriggerConfirm(function () {
	                if (_this.props.action.trigger) {
	                    _this.props.action.trigger();
	                }
	                if (_this.props.onConfirm) {
	                    _this.props.onConfirm();
	                }
	            }, {
	                icon: icon,
	                description: confirmLabel,
	                cancel: confirmData.buttonLabels.cancel,
	                choices: {
	                    confirm: confirmData.buttonLabels.confirm
	                }
	            }, confirmData.confirmType);
	        }
	        else {
	            if (this.props.action.trigger) {
	                this.props.action.trigger();
	            }
	        }
	    };
	    TriggerAction.prototype.render = function () {
	        var _this = this;
	        var actionClasses = this.props.action.enabled ? 'enabled' : (this.props.simple ? 'state-disabled' : 'disabled');
	        return (React.createElement("span", {onClick: function () { return _this.onTriggerAction(); }, className: actionClasses, title: this.props.action.name}, 
	            React.createElement(Action_1.Action, {action: this.props.action, simple: this.props.simple})
	        ));
	    };
	    return TriggerAction;
	}(React.Component));
	exports.TriggerAction = TriggerAction;


/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";
	exports.PromptActions = {
	    add: 'ADD_PROMPT',
	    remove: 'REMOVE_PROMPT'
	};
	exports.addPrompt = function (id, options) { return ({
	    type: exports.PromptActions.add,
	    payload: {
	        id: id,
	        options: options
	    }
	}); };
	exports.removePrompt = function (id) { return ({
	    type: exports.PromptActions.remove,
	    payload: {
	        id: id
	    }
	}); };


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var SecondaryActions_1 = __webpack_require__(242);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () { return ({
	    withReduxState: true
	}); };
	var mapDispatchToProps = function () { return ({}); };
	exports.SecondaryActionsConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(SecondaryActions_1.SecondaryActions);


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PrimaryAction_1 = __webpack_require__(235);
	var PrimaryActionConnected_1 = __webpack_require__(234);
	var ActionsDropdownConnected_1 = __webpack_require__(243);
	var ActionsDropdown_1 = __webpack_require__(244);
	var React = __webpack_require__(2);
	var SecondaryActions = (function (_super) {
	    __extends(SecondaryActions, _super);
	    function SecondaryActions() {
	        _super.apply(this, arguments);
	    }
	    SecondaryActions.prototype.render = function () {
	        var actions = this.props.actions.length === 1 ?
	            (this.props.withReduxState ?
	                React.createElement(PrimaryActionConnected_1.PrimaryActionConnected, {action: this.props.actions[0], parentId: this.props.id}) :
	                React.createElement(PrimaryAction_1.PrimaryAction, {action: this.props.actions[0]})) :
	            (this.props.withReduxState ?
	                React.createElement(ActionsDropdownConnected_1.ActionsDropdownConnected, {moreLabel: this.props.moreLabel, actions: this.props.actions, id: this.props.id}) :
	                React.createElement(ActionsDropdown_1.ActionsDropdown, {moreLabel: this.props.moreLabel, actions: this.props.actions}));
	        return (React.createElement("div", {className: 'dropdown action primary-action'}, actions));
	    };
	    return SecondaryActions;
	}(React.Component));
	exports.SecondaryActions = SecondaryActions;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var ActionsDropdown_1 = __webpack_require__(244);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () { return ({
	    withReduxState: true
	}); };
	var mapDispatchToProps = function () { return ({}); };
	exports.ActionsDropdownConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(ActionsDropdown_1.ActionsDropdown);


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var LinkAction_1 = __webpack_require__(236);
	var TriggerAction_1 = __webpack_require__(239);
	var TriggerActionConnected_1 = __webpack_require__(238);
	var DropdownConnected_1 = __webpack_require__(230);
	var Dropdown_1 = __webpack_require__(229);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	exports.MORE_LABEL = 'More';
	var ActionsDropdown = (function (_super) {
	    __extends(ActionsDropdown, _super);
	    function ActionsDropdown() {
	        _super.apply(this, arguments);
	    }
	    ActionsDropdown.prototype.render = function () {
	        var _this = this;
	        var moreLabel = this.props.moreLabel || exports.MORE_LABEL;
	        var actions = _.map(this.props.actions, function (action, index) {
	            var actionKey = 'action-' + index;
	            if (action.separator) {
	                return React.createElement("li", {className: 'divider', key: actionKey});
	            }
	            if (action.link) {
	                return React.createElement("li", {key: actionKey}, 
	                    React.createElement(LinkAction_1.LinkAction, {action: action, simple: true})
	                );
	            }
	            if (_this.props.withReduxState) {
	                return React.createElement("li", {key: actionKey}, 
	                    React.createElement(TriggerActionConnected_1.TriggerActionConnected, {action: action, simple: true, parentId: _this.props.id})
	                );
	            }
	            return React.createElement("li", {key: actionKey}, 
	                React.createElement(TriggerAction_1.TriggerAction, {action: action, simple: true})
	            );
	        });
	        var toggleContent = [
	            React.createElement(Svg_1.Svg, {key: 'action-dropdown-toggle-icon', svgName: 'more', className: 'action-icon', svgClass: 'icon icon-medium fill-medium-blue'}),
	            React.createElement("span", {key: 'action-dropdown-toggle-label', className: 'action-label'}, moreLabel)
	        ];
	        return (this.props.withReduxState ?
	            React.createElement(DropdownConnected_1.DropdownConnected, {toggleContent: toggleContent, dropdownItems: actions}) :
	            React.createElement(Dropdown_1.Dropdown, {toggleContent: toggleContent, dropdownItems: actions}));
	    };
	    return ActionsDropdown;
	}(React.Component));
	exports.ActionsDropdown = ActionsDropdown;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ActionBar_1 = __webpack_require__(233);
	var ReduxUtils_1 = __webpack_require__(124);
	var ActionBarActions_1 = __webpack_require__(246);
	var InlinePromptConnected_1 = __webpack_require__(247);
	var react_redux_1 = __webpack_require__(125);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var actionBar = _.findWhere(state.actionBars, { id: ownProps.id });
	    var prompt = _.findWhere(state.prompts, { id: ownProps.id });
	    return {
	        withReduxState: true,
	        actions: actionBar && actionBar.actions ? _.filter(actionBar.actions, function (action) { return _.result(action, 'enabled'); }) : [],
	        prompt: prompt && prompt.options ?
	            React.createElement("div", {className: 'prompt'}, 
	                React.createElement(InlinePromptConnected_1.InlinePromptConnected, {id: prompt.id, options: prompt.options})
	            ) :
	            null
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) { return ({
	    onRender: function () { return dispatch(ActionBarActions_1.addActionBar(ownProps.id)); },
	    onDestroy: function () { return dispatch(ActionBarActions_1.removeActionBar(ownProps.id)); }
	}); };
	exports.ActionBarConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(ActionBar_1.ActionBar);


/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";
	exports.ActionBarActions = {
	    add: 'ADD_ACTION_BAR',
	    remove: 'REMOVE_ACTION_BAR',
	    addActions: 'ADD_ACTIONS'
	};
	exports.addActionBar = function (id) { return ({
	    type: exports.ActionBarActions.add,
	    payload: {
	        id: id
	    }
	}); };
	exports.removeActionBar = function (id) { return ({
	    type: exports.ActionBarActions.remove,
	    payload: {
	        id: id
	    }
	}); };
	exports.addActionsToActionBar = function (id, actions) { return ({
	    type: exports.ActionBarActions.addActions,
	    payload: {
	        id: id,
	        actions: actions
	    }
	}); };


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InlinePrompt_1 = __webpack_require__(248);
	var ReduxUtils_1 = __webpack_require__(124);
	var InlinePromptActions_1 = __webpack_require__(240);
	var react_redux_1 = __webpack_require__(125);
	var mapStateToProps = function () {
	    return {};
	};
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onCancel: function () { return dispatch(InlinePromptActions_1.removePrompt(ownProps.id)); }
	    });
	};
	exports.InlinePromptConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(InlinePrompt_1.InlinePrompt);


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var InlinePrompt = (function (_super) {
	    __extends(InlinePrompt, _super);
	    function InlinePrompt() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.onCancelClick = function () {
	            if (_this.props.onCancel) {
	                _this.props.onCancel();
	            }
	        };
	    }
	    InlinePrompt.prototype.render = function () {
	        var _this = this;
	        var className = "prompt-" + (this.props.options.className ? this.props.options.className : 'info');
	        className += this.props.options.isOpened ? ' opened' : '';
	        var icon = this.props.options.userChoice.icon ?
	            React.createElement(Svg_1.Svg, {svgName: this.props.options.userChoice.icon, className: 'prompt-icon', svgClass: 'icon mod-2x fill-medium-blue'})
	            : null;
	        var choices = _.map(this.props.options.userChoice.choices, function (choice, index) {
	            return (React.createElement("button", {type: 'button', className: 'btn action mod-danger prompt-action enabled', onClick: function () { _this.props.options.onClick(); }, key: 'choice-' + index}, choice));
	        });
	        var description = this.props.options.userChoice.description ?
	            React.createElement("span", {className: 'description'}, this.props.options.userChoice.description) :
	            null;
	        var cancel = this.props.options.userChoice.cancel ?
	            React.createElement("button", {type: 'button', className: 'btn cancel prompt-action enabled', onClick: function () { _this.onCancelClick(); }}, this.props.options.userChoice.cancel) :
	            null;
	        return (React.createElement("span", {className: className}, 
	            React.createElement("span", {className: 'label-confirmation'}, 
	                icon, 
	                description), 
	            choices, 
	            cancel));
	    };
	    return InlinePrompt;
	}(React.Component));
	exports.InlinePrompt = InlinePrompt;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ActionBarActions_1 = __webpack_require__(246);
	var _ = __webpack_require__(4);
	exports.actionBarInitialState = { id: undefined, actions: [] };
	exports.actionBarsInitialState = [];
	exports.actionBarReducer = function (state, action) {
	    if (state === void 0) { state = exports.actionBarInitialState; }
	    switch (action.type) {
	        case ActionBarActions_1.ActionBarActions.addActions:
	            if (state.id !== action.payload.id) {
	                return state;
	            }
	            return {
	                id: state.id,
	                actions: action.payload.actions
	            };
	        case ActionBarActions_1.ActionBarActions.add:
	            return {
	                id: action.payload.id,
	                actions: []
	            };
	        default:
	            return state;
	    }
	};
	exports.actionBarsReducer = function (state, action) {
	    if (state === void 0) { state = exports.actionBarsInitialState; }
	    switch (action.type) {
	        case ActionBarActions_1.ActionBarActions.addActions:
	            return state.map(function (bar) {
	                return exports.actionBarReducer(bar, action);
	            });
	        case ActionBarActions_1.ActionBarActions.add:
	            return state.concat([
	                exports.actionBarReducer(undefined, action)
	            ]);
	        case ActionBarActions_1.ActionBarActions.remove:
	            return _.reject(state, function (bar) {
	                return action.payload.id === bar.id;
	            });
	        default:
	            return state;
	    }
	};


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TableHeaderCell_1 = __webpack_require__(251);
	var React = __webpack_require__(2);
	var _ = __webpack_require__(4);
	var TableHeader = (function (_super) {
	    __extends(TableHeader, _super);
	    function TableHeader() {
	        _super.apply(this, arguments);
	    }
	    TableHeader.prototype.render = function () {
	        var columns = _.map(this.props.columns, function (column, index) {
	            return React.createElement(TableHeaderCell_1.TableHeaderCell, {key: 'th-' + index, title: column.title, className: column.className});
	        });
	        return (React.createElement("thead", {className: this.props.headerClass}, 
	            React.createElement("tr", null, columns)
	        ));
	    };
	    return TableHeader;
	}(React.Component));
	exports.TableHeader = TableHeader;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var TableHeaderCell = (function (_super) {
	    __extends(TableHeaderCell, _super);
	    function TableHeaderCell() {
	        _super.apply(this, arguments);
	    }
	    TableHeaderCell.prototype.render = function () {
	        return (React.createElement("th", {className: this.props.className || ''}, this.props.title));
	    };
	    return TableHeaderCell;
	}(React.Component));
	exports.TableHeaderCell = TableHeaderCell;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TableCollapsibleRowToggle_1 = __webpack_require__(253);
	var React = __webpack_require__(2);
	var TableHeadingRow = (function (_super) {
	    __extends(TableHeadingRow, _super);
	    function TableHeadingRow() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.handleClick = function () {
	            if (_this.props.onClick) {
	                _this.props.onClick();
	            }
	        };
	    }
	    TableHeadingRow.prototype.componentWillMount = function () {
	        if (this.props.onRender) {
	            this.props.onRender();
	        }
	    };
	    TableHeadingRow.prototype.componentWillUnmount = function () {
	        if (this.props.onDestroy) {
	            this.props.onDestroy();
	        }
	    };
	    TableHeadingRow.prototype.render = function () {
	        var _this = this;
	        var toggle = this.props.isCollapsible ? React.createElement(TableCollapsibleRowToggle_1.TableCollapsibleRowToggle, {isExpanded: this.props.opened}) : React.createElement("td", null);
	        var rowClasses = this.props.isCollapsible ? 'heading-row ' : '';
	        rowClasses += this.props.opened ? 'opened' : '';
	        return (React.createElement("tr", {className: rowClasses, onClick: function () { return _this.handleClick(); }}, 
	            this.props.children, 
	            toggle));
	    };
	    return TableHeadingRow;
	}(React.Component));
	exports.TableHeadingRow = TableHeadingRow;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Svg_1 = __webpack_require__(11);
	var React = __webpack_require__(2);
	var TableCollapsibleRowToggle = (function (_super) {
	    __extends(TableCollapsibleRowToggle, _super);
	    function TableCollapsibleRowToggle() {
	        _super.apply(this, arguments);
	    }
	    TableCollapsibleRowToggle.prototype.render = function () {
	        var arrowIcon = this.props.isExpanded ?
	            React.createElement(Svg_1.Svg, {svgName: 'arrow-top', className: 'state-expanded', svgClass: 'icon'}) :
	            React.createElement(Svg_1.Svg, {svgName: 'arrow-bottom', className: 'state-collapsed', svgClass: 'icon'});
	        return (React.createElement("td", null, arrowIcon));
	    };
	    return TableCollapsibleRowToggle;
	}(React.Component));
	exports.TableCollapsibleRowToggle = TableCollapsibleRowToggle;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var TableHeadingRow_1 = __webpack_require__(252);
	var TableRowActions_1 = __webpack_require__(255);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.rows, { id: ownProps.id });
	    return {
	        opened: item && item.opened
	    };
	};
	var mapDispatchToProps = function (dispatch, ownProps) {
	    return ({
	        onClick: function () {
	            if (ownProps.isCollapsible) {
	                dispatch(TableRowActions_1.toggleRow(ownProps.id));
	            }
	        },
	        onRender: function () {
	            if (ownProps.isCollapsible) {
	                dispatch(TableRowActions_1.addRow(ownProps.id));
	            }
	        },
	        onDestroy: function () {
	            if (ownProps.isCollapsible) {
	                dispatch(TableRowActions_1.removeRow(ownProps.id));
	            }
	        }
	    });
	};
	exports.TableHeadingRowConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(TableHeadingRow_1.TableHeadingRow);


/***/ },
/* 255 */
/***/ function(module, exports) {

	"use strict";
	exports.TableRowActions = {
	    add: 'ADD_ROW',
	    remove: 'REMOVE_ROW',
	    toggle: 'TOGGLE_ROW'
	};
	exports.addRow = function (id) { return ({
	    type: exports.TableRowActions.add,
	    payload: {
	        id: id
	    }
	}); };
	exports.removeRow = function (id) { return ({
	    type: exports.TableRowActions.remove,
	    payload: {
	        id: id
	    }
	}); };
	exports.toggleRow = function (id) { return ({
	    type: exports.TableRowActions.toggle,
	    payload: {
	        id: id
	    }
	}); };


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var TableError_1 = __webpack_require__(257);
	var React = __webpack_require__(2);
	var $ = __webpack_require__(3);
	var TableCollapsibleRow = (function (_super) {
	    __extends(TableCollapsibleRow, _super);
	    function TableCollapsibleRow() {
	        _super.apply(this, arguments);
	    }
	    TableCollapsibleRow.prototype.toggleRow = function (opened) {
	        var animationTime = 400;
	        var $e = $('.' + this.props.id);
	        var $container = $e.find('.container');
	        if (opened) {
	            $container.slideDown(animationTime);
	        }
	        else {
	            $container.slideUp(animationTime);
	        }
	    };
	    TableCollapsibleRow.prototype.componentDidMount = function () {
	        this.toggleRow(this.props.opened);
	    };
	    TableCollapsibleRow.prototype.componentWillReceiveProps = function (nextProps) {
	        this.toggleRow(nextProps.opened);
	    };
	    TableCollapsibleRow.prototype.render = function () {
	        var rowClasses = 'collapsible-row ' + this.props.id + (this.props.opened ? ' in' : '');
	        var error = this.props.isInError ?
	            React.createElement(TableError_1.TableError, {error: this.props.error, descriptionLabel: this.props.descriptionLabel, troubleshootingLabel: this.props.troubleshootingLabel, errorCodeLabel: this.props.errorCodeLabel}) :
	            null;
	        return (React.createElement("tr", {className: rowClasses}, 
	            React.createElement("td", {colSpan: this.props.nbColumns}, 
	                React.createElement("div", {className: 'container'}, 
	                    error, 
	                    React.createElement("div", {className: 'clearfix'}), 
	                    React.createElement("section", {className: 'columns'}, this.props.children))
	            )
	        ));
	    };
	    return TableCollapsibleRow;
	}(React.Component));
	exports.TableCollapsibleRow = TableCollapsibleRow;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	exports.DESCRIPTION_LABEL = 'Description';
	exports.TROUBLESHOOTING_LABEL = 'Troubleshooting';
	exports.ERROR_CODE_LABEL = 'Error code';
	var TableError = (function (_super) {
	    __extends(TableError, _super);
	    function TableError() {
	        _super.apply(this, arguments);
	    }
	    TableError.prototype.render = function () {
	        var descriptionLabel = this.props.descriptionLabel || exports.DESCRIPTION_LABEL;
	        var troubleshootingLabel = this.props.troubleshootingLabel || exports.TROUBLESHOOTING_LABEL;
	        var errorCodeLabel = this.props.errorCodeLabel || exports.ERROR_CODE_LABEL;
	        var errorPrecision = this.props.error.errorPrecision ?
	            React.createElement("div", {className: 'error-description error-description-precision', dangerouslySetInnerHTML: { __html: this.props.error.errorPrecision }}) :
	            null;
	        return (React.createElement("div", {className: 'source-activity-error-container'}, 
	            React.createElement("h4", {className: 'caps bold error-title'}, this.props.error.errorStatus), 
	            React.createElement("section", {className: 'columns'}, 
	                React.createElement("div", {className: 'details-container error-description-container'}, 
	                    React.createElement("div", {className: 'label text-light-blue'}, descriptionLabel), 
	                    React.createElement("div", {className: 'value error-description'}, 
	                        React.createElement("div", {dangerouslySetInnerHTML: { __html: this.props.error.errorDescription }}), 
	                        errorPrecision)), 
	                React.createElement("div", {className: 'details-container troubleshooting-container'}, 
	                    React.createElement("div", {className: 'label text-light-blue'}, troubleshootingLabel), 
	                    React.createElement("div", {className: 'value', dangerouslySetInnerHTML: { __html: this.props.error.errorTroubleshoot }}), 
	                    React.createElement("div", {className: 'label text-light-blue'}, errorCodeLabel), 
	                    React.createElement("div", {className: 'value text-dark-blue'}, this.props.error.errorCode)))));
	    };
	    return TableError;
	}(React.Component));
	exports.TableError = TableError;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReduxUtils_1 = __webpack_require__(124);
	var TableCollapsibleRow_1 = __webpack_require__(256);
	var react_redux_1 = __webpack_require__(125);
	var _ = __webpack_require__(4);
	var mapStateToProps = function (state, ownProps) {
	    var item = _.findWhere(state.rows, { id: ownProps.id });
	    return {
	        opened: item && item.opened
	    };
	};
	var mapDispatchToProps = function () { return ({}); };
	exports.TableCollapsibleRowConnected = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ReduxUtils_1.ReduxUtils.mergeProps)(TableCollapsibleRow_1.TableCollapsibleRow);


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TableRowActions_1 = __webpack_require__(255);
	var _ = __webpack_require__(4);
	exports.tableRowInitialState = { id: undefined, opened: undefined };
	exports.tableRowsInitialState = [];
	exports.tableRowReducer = function (state, action) {
	    if (state === void 0) { state = exports.tableRowInitialState; }
	    switch (action.type) {
	        case TableRowActions_1.TableRowActions.add:
	            return {
	                id: action.payload.id,
	                opened: false
	            };
	        case TableRowActions_1.TableRowActions.toggle:
	            if (state.id !== action.payload.id) {
	                return _.extend({}, state, {
	                    opened: false
	                });
	            }
	            return _.extend({}, state, {
	                opened: !state.opened
	            });
	        default:
	            return state;
	    }
	};
	exports.tableRowsReducer = function (state, action) {
	    if (state === void 0) { state = exports.tableRowsInitialState; }
	    switch (action.type) {
	        case TableRowActions_1.TableRowActions.add:
	            return state.concat([
	                exports.tableRowReducer(undefined, action)
	            ]);
	        case TableRowActions_1.TableRowActions.remove:
	            return _.reject(state, function (row) {
	                return action.payload.id === row.id;
	            });
	        case TableRowActions_1.TableRowActions.toggle:
	            return state.map(function (row) { return exports.tableRowReducer(row, action); });
	        default:
	            return state;
	    }
	};


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InlinePromptActions_1 = __webpack_require__(240);
	var _ = __webpack_require__(4);
	exports.promptInitialState = { id: undefined, options: { userChoice: undefined, onClick: undefined } };
	exports.promptsInitialState = [];
	exports.promptReducer = function (state, action) {
	    if (state === void 0) { state = exports.promptInitialState; }
	    switch (action.type) {
	        case InlinePromptActions_1.PromptActions.add:
	            return _.extend({}, state, {
	                id: action.payload.id,
	                options: action.payload.options
	            });
	        default:
	            return state;
	    }
	};
	exports.promptsReducer = function (state, action) {
	    if (state === void 0) { state = exports.promptsInitialState; }
	    switch (action.type) {
	        case InlinePromptActions_1.PromptActions.add:
	            return state.concat([
	                exports.promptReducer(undefined, action)
	            ]);
	        case InlinePromptActions_1.PromptActions.remove:
	            return _.reject(state, function (prompt) {
	                return action.payload.id === prompt.id;
	            });
	        default:
	            return state;
	    }
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-vapor.js.map