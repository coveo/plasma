declare module ReactVapor {
	/// <reference types="react" />
	interface ISvgProps extends React.HTMLProps<Svg> {
	    svgClass?: string;
	    svgName: string;
	}
	class Svg extends React.Component<ISvgProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IOverlayTriggerProps {
	    animation?: any;
	    defaultOverlayShown?: boolean;
	    delay?: number;
	    delayHide?: number;
	    delayShow?: number;
	    onEnter?: Function;
	    onEntered?: Function;
	    onEntering?: Function;
	    onExit?: Function;
	    onExited?: Function;
	    onExiting?: Function;
	    placement?: string;
	    container?: string;
	    rootClose?: boolean;
	    trigger?: string | string[];
	}
	interface ITooltipProps extends IOverlayTriggerProps, React.ClassAttributes<Tooltip> {
	    title: string;
	    className?: string;
	    arrowOffsetLeft?: number | string;
	    arrowOffsetTop?: number | string;
	    bsStyle?: string;
	    placement?: string;
	    positionLeft?: number;
	    positionTop?: number;
	    footer?: string;
	}
	class Tooltip extends React.Component<ITooltipProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IConfirmButtonLabel {
	    cancel: string;
	    confirm: string;
	}
	interface IConfirmData {
	    confirmType: string;
	    buttonLabels?: IConfirmButtonLabel;
	}
	interface IBaseActionOptions {
	    enabled: boolean;
	    name?: string;
	    link?: string;
	    target?: string;
	    primary?: boolean;
	    tooltip?: string;
	    tooltipPlacement?: string;
	    onClick?: () => void;
	}
	interface IActionOptions extends IBaseActionOptions {
	    icon?: string;
	    iconClass?: string;
	    id?: string;
	    trigger?: () => void;
	    unrepeatable?: boolean;
	    callOnDoubleClick?: boolean;
	    requiresConfirmation?: IConfirmData;
	    separator?: boolean;
	    grouped?: boolean;
	    subActions?: IActionOptions[];
	    hidden?: boolean;
	}
	interface IBasicActionProps {
	    action: IActionOptions;
	    simple?: boolean;
	}
	interface IActionProps extends React.ClassAttributes<Action>, IBasicActionProps {
	}
	class Action extends React.Component<IActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="jquery" />
	type IDispatch = (action: IReduxAction<any> | IThunkAction) => void;
	type IThunkAction = (dispatch: IDispatch, getState?: () => any) => void;
	class ReduxUtils {
	    static mergeProps(stateProps: any, dispatchProps: any, ownProps: any): any;
	}
	const CommonActions: {
	    clearState: string;
	};
	const clearState: () => Redux.Action;
	function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any;
	interface IReduxAction<T = {}> extends Redux.Action {
	    type: string;
	    payload?: T;
	}
	interface IReduxProps {
	    dispatch?: (action: IReduxAction<any> | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)) => void;
	}
	interface IReduxStatePossibleProps {
	    withReduxState?: boolean;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ILinkActionProps extends React.ClassAttributes<LinkAction>, IBasicActionProps {
	}
	class LinkAction extends React.Component<ILinkActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IUserChoice {
	    description?: string;
	    cancel?: string;
	    choices?: {
	        [key: string]: string;
	    };
	    icon?: string;
	}
	interface IInlinePromptOptions {
	    onClick: () => void;
	    userChoice: IUserChoice;
	    isOpened?: boolean;
	    className?: string;
	}
	interface IInlinePromptOwnProps extends React.ClassAttributes<InlinePrompt> {
	    id?: string;
	    options: IInlinePromptOptions;
	}
	interface IInlinePromptViewDispatchProps {
	    onCancel?: () => void;
	}
	interface IInlinePromptProps extends IInlinePromptOwnProps, IInlinePromptViewDispatchProps {
	}
	class InlinePrompt extends React.Component<IInlinePromptProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITriggerActionOwnProps extends React.ClassAttributes<TriggerAction>, IBasicActionProps {
	    confirmLabel?: string;
	    parentId?: string;
	}
	interface ITriggerActionDispatchProps {
	    onTriggerConfirm?: (onClick: () => void, userChoice: IUserChoice, className: string) => void;
	    onConfirm?: () => void;
	    onCloseDropdown?: () => void;
	}
	interface ITriggerActionProps extends ITriggerActionOwnProps, ITriggerActionDispatchProps {
	}
	const CONFIRM_LABEL: string;
	class TriggerAction extends React.Component<ITriggerActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	const LastUpdatedActions: {
	    addLastUpdated: string;
	    removeLastUpdated: string;
	    changeLastUpdated: string;
	};
	interface ILastUpdatedPayload {
	    id: string;
	}
	const addLastUpdated: (id: string) => IReduxAction<ILastUpdatedPayload>;
	const removeLastUpdated: (id: string) => IReduxAction<ILastUpdatedPayload>;
	const changeLastUpdated: (id: string) => IReduxAction<ILastUpdatedPayload>;

}
declare module ReactVapor {
	interface ILastUpdatedState {
	    id: string;
	    time: Date;
	}
	const lastUpdatedInitialState: ILastUpdatedState;
	const lastUpdatedCompositeInitialState: ILastUpdatedState[];
	const lastUpdatedReducer: (state: ILastUpdatedState, action: IReduxAction<IReduxActionsPayload>) => ILastUpdatedState;
	const lastUpdatedCompositeReducer: (state: ILastUpdatedState[], action: IReduxAction<IReduxActionsPayload>) => ILastUpdatedState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFacetMoreToggleOwnProps extends React.ClassAttributes<FacetMoreToggle> {
	    facet: string;
	    moreLabel?: string;
	}
	interface IFacetMoreToggleStateProps {
	    isOpened?: boolean;
	}
	interface IFacetMoreToggleDispatchProps {
	    onToggleMore?: (facet: string) => void;
	}
	interface IFacetMoreToggleProps extends IFacetMoreToggleOwnProps, IFacetMoreToggleStateProps, IFacetMoreToggleDispatchProps {
	}
	const FACET_TOGGLE_MORE_LABEL: string;
	class FacetMoreToggle extends React.Component<IFacetMoreToggleProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const FacetMoreToggleConnected: React.ComponentClass<IFacetMoreToggleProps>;

}
declare module ReactVapor {
	const FilterActions: {
	    addFilter: string;
	    removeFilter: string;
	    filterThrough: string;
	};
	interface IFilterActionPayload {
	    id: string;
	}
	interface IChangeFilterActionPayload extends IFilterActionPayload {
	    filterText: string;
	}
	const addFilter: (id: string) => IReduxAction<IFilterActionPayload>;
	const removeFilter: (id: string) => IReduxAction<IFilterActionPayload>;
	const filterThrough: (id: string, filterText: string) => IReduxAction<IChangeFilterActionPayload>;

}
declare module ReactVapor {
	interface IFilterState {
	    id: string;
	    filterText: string;
	}
	const filterBoxInitialState: IFilterState;
	const filtersInitialState: IFilterState[];
	const filterBoxReducer: (state: IFilterState, action: IReduxAction<IReduxActionsPayload>) => IFilterState;
	const filterBoxesReducer: (state: IFilterState[], action: IReduxAction<IReduxActionsPayload>) => IFilterState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {
	    id?: string;
	    containerClasses?: string[];
	    filterPlaceholder?: string;
	    onBlur?: () => void;
	    onKeyDown?: (e) => void;
	    isAutoFocus?: boolean;
	    maxWidth?: number;
	    withTitleOnInput?: boolean;
	    truncate?: boolean;
	}
	interface IFilterBoxStateProps {
	    filterText?: string;
	}
	interface IFilterBoxDispatchProps {
	    onRender?: (id: string) => void;
	    onDestroy?: (id: string) => void;
	    onFilter?: (id: string, filterText: string) => void;
	}
	interface IFilterBoxProps extends IFilterBoxOwnProps, IFilterBoxStateProps, IFilterBoxDispatchProps {
	}
	const FILTER_PLACEHOLDER: string;
	class FilterBox extends React.Component<IFilterBoxProps, any> {
	    filterInput: HTMLInputElement;
	    constructor(props: IFilterBoxProps);
	    static defaultProps;
	    placeCursorAtEndOfInputValue(e): void;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    componentWillReceiveProps(nextProps: IFilterBoxProps): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="underscore" />
	/// <reference types="react" />
	const debouncedFilterThrough: ((dispatch: IDispatch, id: string, filterText: string) => void) & _.Cancelable;
	const FilterBoxConnected: React.ComponentClass<IFilterBoxProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFacetMoreRowsOwnProps extends React.ClassAttributes<FacetMoreRows> {
	    facet: string;
	    facetRows: JSX.Element[];
	}
	interface IFacetMoreRowsStateProps extends IReduxStatePossibleProps {
	    isOpened?: boolean;
	    filterText?: string;
	}
	interface IFacetMoreRowsDispatchProps {
	    onOpen?: () => void;
	    onDocumentClick?: () => void;
	}
	interface IFacetMoreRowsChildrenProps {
	    filterPlaceholder?: string;
	}
	interface IFacetMoreRowsProps extends IFacetMoreRowsOwnProps, IFacetMoreRowsDispatchProps, IFacetMoreRowsStateProps, IFacetMoreRowsChildrenProps {
	}
	class FacetMoreRows extends React.Component<IFacetMoreRowsProps, any> {
	    componentWillMount(): void;
	    componentWillReceiveProps(nextProps: IFacetMoreRowsProps): void;
	    componentWillUnmount(): void;
	    componentDidUpdate(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const FacetMoreRowsConnected: React.ComponentClass<IFacetMoreRowsProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFacetRowProps extends React.ClassAttributes<FacetRow> {
	    facetRow: IFacet;
	    facet: string;
	    onToggleFacet: (facetRow: IFacet) => void;
	    isChecked: boolean;
	}
	const MAX_NAME_LENGTH: number;
	class FacetRow extends React.Component<IFacetRowProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFacet {
	    name: string;
	    formattedName: string;
	}
	interface IFacetOwnProps extends React.ClassAttributes<Facet> {
	    facet: IFacet;
	    facetRows: IFacet[];
	    toggleFacet: (facet: string, facetRow: IFacet) => void;
	    clearFacet: (facet: string) => void;
	    clearFacetLabel?: string;
	}
	interface IFacetStateProps extends IReduxStatePossibleProps {
	    isOpened?: boolean;
	    selectedFacetRows?: IFacet[];
	}
	interface IFacetDispatchProps {
	    onRender?: (facet: string) => void;
	    onDestroy?: (facet: string) => void;
	    onToggleFacet?: (facet: string, facetRow: IFacet) => void;
	    onClearFacet?: (facet: string) => void;
	}
	interface IFacetChildrenProps {
	    moreLabel?: string;
	    filterPlaceholder?: string;
	}
	interface IFacetProps extends IFacetOwnProps, IFacetStateProps, IFacetDispatchProps, IFacetChildrenProps {
	}
	const CLEAR_FACET_LABEL: string;
	class Facet extends React.Component<IFacetProps, any> {
	    static defaultProps;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	const FacetActions: {
	    addFacet: string;
	    removeFacet: string;
	    changeFacet: string;
	    emptyFacet: string;
	    toggleMoreFacetRows: string;
	    closeMoreFacetRows: string;
	};
	interface IFacetActionPayload {
	    facet: string;
	}
	interface IChangeFacetActionPayload extends IFacetActionPayload {
	    facetRow: IFacet;
	}
	const addFacet: (facet: string) => IReduxAction<IFacetActionPayload>;
	const removeFacet: (facet: string) => IReduxAction<IFacetActionPayload>;
	const changeFacet: (facet: string, facetRow: IFacet) => IReduxAction<IChangeFacetActionPayload>;
	const emptyFacet: (facet: string) => IReduxAction<IFacetActionPayload>;
	const toggleMoreFacetRows: (facet: string) => IReduxAction<IFacetActionPayload>;
	const closeMoreFacetRows: () => IReduxAction<IFacetActionPayload>;

}
declare module ReactVapor {
	interface IFacetState {
	    facet: string;
	    opened: boolean;
	    selected: IFacet[];
	}
	const facetInitialState: IFacetState;
	const facetsInitialState: IFacetState[];
	const facetReducer: (state: IFacetState, action: IReduxAction<IReduxActionsPayload>) => IFacetState;
	const facetsReducer: (state: IFacetState[], action: IReduxAction<IReduxActionsPayload>) => IFacetState[];

}
declare module ReactVapor {
	interface IPerPageActionPayload {
	    id: string;
	}
	interface IChangePerPageActionPayload extends IPerPageActionPayload {
	    perPage: number;
	}
	const PerPageActions: {
	    add: string;
	    remove: string;
	    change: string;
	};
	const addPerPage: (id: string, perPage: number) => IReduxAction<IChangePerPageActionPayload>;
	const removePerPage: (id: string) => IReduxAction<IPerPageActionPayload>;
	const changePerPage: (id: string, perPage: number) => IReduxAction<IChangePerPageActionPayload>;

}
declare module ReactVapor {
	interface IPerPageState {
	    id: string;
	    perPage: number;
	}
	const perPageInitialState: IPerPageState;
	const perPageCompositeInitialState: IPerPageState[];
	const perPageReducer: (state: IPerPageState, action: IReduxAction<IReduxActionsPayload>) => IPerPageState;
	const perPageCompositeReducer: (state: IPerPageState[], action: IReduxAction<IReduxActionsPayload>) => IPerPageState[];

}
declare module ReactVapor {
	const LoadingActions: {
	    add: string;
	    remove: string;
	    turnOn: string;
	    turnOff: string;
	};
	interface ILoadingActionPayload {
	    ids: string[];
	}
	const addLoading: (id: string) => IReduxAction<ILoadingActionPayload>;
	const removeLoading: (id: string) => IReduxAction<ILoadingActionPayload>;
	const turnOnLoading: (ids: string[]) => IReduxAction<ILoadingActionPayload>;
	const turnOffLoading: (ids: string[]) => IReduxAction<ILoadingActionPayload>;

}
declare module ReactVapor {
	interface ILoadingState {
	    id: string;
	    isOn: boolean;
	}
	const loadingInitialState: ILoadingState;
	const loadingsInitialState: ILoadingState[];
	const loadingReducer: (state: ILoadingState, action: IReduxAction<IReduxActionsPayload>) => ILoadingState;
	const loadingsReducer: (state: ILoadingState[], action: IReduxAction<IReduxActionsPayload>) => ILoadingState[];

}
declare module ReactVapor {
	interface IPaginationActionPayload {
	    id: string;
	}
	interface IChangePaginationActionPayload extends IPaginationActionPayload {
	    pageNb: number;
	}
	const PaginationActions: {
	    add: string;
	    remove: string;
	    changePage: string;
	    reset: string;
	};
	const addPagination: (id: string) => IReduxAction<IPaginationActionPayload>;
	const removePagination: (id: string) => IReduxAction<IPaginationActionPayload>;
	const changePage: (id: string, pageNb: number) => IReduxAction<IChangePaginationActionPayload>;
	const resetPaging: (id: string) => IReduxAction<IChangePaginationActionPayload>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IButtonProps extends IBaseActionOptions {
	    small?: boolean;
	    classes?: string[];
	}
	class Button extends React.Component<IButtonProps, {}> {
	    static defaultProps;
	    getTemplate(buttonClass: string): JSX.Element;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IBlankSlateProps extends React.ClassAttributes<BlankSlate> {
	    title?: string;
	    description?: string;
	    buttons?: IBaseActionOptions[];
	    withModal?: boolean;
	    classes?: string[];
	    svgName?: string;
	    svgClass?: string;
	}
	class BlankSlate extends React.Component<IBlankSlateProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DisplayClass: {
	    BLOCK: string;
	    INLINE: string;
	    INLINE_BLOCK: string;
	    HIDDEN: string;
	    TABLE: string;
	    TABLE_CELL: string;
	};
	type ComponentContent = (new () => React.Component<any, any>) | string | (() => JSX.Element);

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IContentProps {
	    content: ComponentContent;
	    componentProps?: {
	        [key: string]: any;
	    };
	    classes?: string[];
	}
	class Content extends React.Component<IContentProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	const keyCode: {
	    backspace: number;
	    tab: number;
	    enter: number;
	    shift: number;
	    ctrl: number;
	    alt: number;
	    pause: number;
	    capsLock: number;
	    escape: number;
	    pageUp: number;
	    pageDown: number;
	    end: number;
	    home: number;
	    leftArrow: number;
	    upArrow: number;
	    rightArrow: number;
	    downArrow: number;
	    insert: number;
	    delete: number;
	};

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDropdownOption {
	    svg?: ISvgProps;
	    value: string;
	    displayValue?: string;
	    prefix?: string;
	    selected?: boolean;
	    custom?: boolean;
	    hidden?: boolean;
	    default?: boolean;
	}
	interface IDropdownSearchStateProps {
	    isOpened?: boolean;
	    filterText?: string;
	    options?: IDropdownOption[];
	    activeOption?: IDropdownOption;
	    setFocusOnDropdownButton?: boolean;
	}
	interface IDropdownSearchOwnProps extends React.ClassAttributes<DropdownSearch> {
	    id?: string;
	    modMenu?: boolean;
	    fixedPrepend?: string;
	    containerClasses?: string[];
	    defaultOptions?: IDropdownOption[];
	    defaultSelectedOption?: IDropdownOption;
	    filterPlaceholder?: string;
	    maxWidth?: number;
	    width?: number;
	    hasFilterSuggestionBoxWidthFixed?: boolean;
	    highlightThreshold?: number;
	    highlightAllFilterResult?: boolean;
	    noResultText?: string;
	    createOptionText?: string;
	    deselectAllTooltipText?: string;
	    isDisabled?: boolean;
	    onOptionClickCallBack?: (option: IDropdownOption) => void;
	    onMountCallBack?: () => void;
	    onClickCallBack?: () => void;
	    supportSingleCustomOption?: boolean;
	    searchThresold?: number;
	}
	interface IDropdownSearchDispatchProps {
	    onMount?: () => void;
	    onDestroy?: () => void;
	    onToggleDropdown?: () => void;
	    onBlur?: (options: IDropdownOption[]) => void;
	    onFocus?: () => void;
	    onFilterTextChange?: (filterText: string) => void;
	    onOptionClick?: (option: IDropdownOption) => void;
	    onCustomOptionClick?: (displayValue: string) => void;
	    onKeyDownFilterBox?: (keyCode: number) => void;
	    onKeyDownDropdownButton?: (keyCode: number) => void;
	    onMouseEnterDropdown?: () => void;
	    onRemoveSelectedOption?: (value: string) => void;
	    onRemoveAllSelectedOptions?: () => void;
	    onClose?: () => void;
	}
	interface IDropdownSearchProps extends IDropdownSearchOwnProps, IDropdownSearchStateProps, IDropdownSearchDispatchProps {
	}
	class DropdownSearch extends React.Component<IDropdownSearchProps, {}> {
	    filterInput: HTMLDivElement;
	    ulElement: HTMLElement;
	    protected dropdownButton: HTMLElement;
	    static defaultProps;
	    protected getSelectedOption(): IDropdownOption;
	    protected getSelectedOptions(): IDropdownOption[];
	    protected getDisplayedOptions(): IDropdownOption[];
	    protected getDropdownOptions(): JSX.Element[];
	    protected getNoOptions(): JSX.Element[];
	    protected getSvg(option: IDropdownOption): JSX.Element;
	    protected getTextFiltered(text: string): (JSX.Element | string)[] | string;
	    protected getTextElement(subText: string, text: string, highlightIndexKey: number, className?: string): JSX.Element;
	    protected getMainInputPrepend(option: IDropdownOption): JSX.Element;
	    protected getDropdownPrepend(option: IDropdownOption): JSX.Element;
	    protected getMainInput(): JSX.Element;
	    protected isScrolledIntoView(el: Element): boolean;
	    protected handleOnOptionClickOnKeyDown(e): void;
	    protected handleOnKeyDownFilterBox(e): void;
	    protected getClasses(): string;
	    protected getStyles(): {
	        width: number;
	    };
	    componentDidUpdate(): void;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	enum TableSortingOrder {
	    UNSORTED = "UNSORTED",
	    ASCENDING = "ASCENDING",
	    DESCENDING = "DESCENDING",
	}
	const DEFAULT_TABLE_PER_PAGE = 100000;
	const DEFAULT_TABLE_DATA: ITableData;
	const TABLE_PREDICATE_DEFAULT_VALUE = "ALL";
	const TOGGLE_ARROW_CELL_COUNT = 1;
	const TABLE_ID_PREFIX = "react-vapor-table-";
	const TABLE_PREDICATE_ID_PREFIX = "predicate-";
	enum TableChildComponent {
	    ACTION_BAR = "action-bar",
	    FILTER = "filter",
	    NAVIGATION = "navigation",
	    PAGINATION = "pagination",
	    PER_PAGE = "per-page",
	    LOADING_TABLE = "loading-table",
	    LOADING_ACTION_BAR = "loading-action-bar",
	    LOADING_NAVIGATION = "loading-navigation",
	    BLANKSLATE = "blankslate",
	    PREDICATE = "predicate",
	    TABLE_HEADER = "table-header",
	    TABLE_HEADER_CELL = "table-header-cell",
	    TABLE_ROW_CELL = "table-row-cell",
	    TABLE_HEADING_ROW = "table-heading-row",
	    TABLE_COLLAPSIBLE_ROW = "table-collapsible-row",
	    TABLE_ROW_WRAPPER = "table-row-wrapper",
	    LAST_UPDATED = "last-updated",
	}

}
declare module ReactVapor {
	const getNextTableSortingOrder: (sortedState: TableSortingOrder) => TableSortingOrder;
	const getTableChildComponentId: (tableId: string, childComponent: TableChildComponent) => string;
	const getTableLoadingIds: (tableId: string) => string[];
	const convertInitialCollectionToDataById: (collection: {
	    [key: string]: any;
	}[], attributeNameForId: string) => ITableRowData;
	const convertDataByIdToCollection: (dataById: ITableRowData, keepIdAttribute?: boolean) => {
	    [key: string]: any;
	}[];

}
declare module ReactVapor {
	const TableHeaderCellActions: {
	    add: string;
	    remove: string;
	    sort: string;
	};
	interface ITableHeaderCellActionPayload {
	    id: string;
	    attributeToSort?: string;
	    tableId?: string;
	}
	const addHeaderCell: (id: string, attributeToSort: string, tableId: string) => IReduxAction<ITableHeaderCellActionPayload>;
	const removeHeaderCell: (id: string) => IReduxAction<ITableHeaderCellActionPayload>;
	const sortFromHeaderCell: (id: string, attributeToSort: string, tableId: string) => IReduxAction<ITableHeaderCellActionPayload>;

}
declare module ReactVapor {
	interface ITableData {
	    byId: {
	        [id: string]: {
	            id: string;
	            [attribute: string]: any;
	        };
	    };
	    allIds: string[];
	    displayedIds: string[];
	    totalEntries: number;
	    totalPages: number;
	}
	interface ITablesState {
	    [id: string]: ITableState;
	}
	type attributeName = any;
	type attributeValue = any;
	interface ITableCompositeState {
	    id: string;
	    data: ITableData;
	    isInError: boolean;
	    isLoading: boolean;
	    filter: string;
	    page: number;
	    perPage: number;
	    sortState: {
	        attribute: attributeName;
	        order: TableSortingOrder;
	    };
	    predicates: {
	        [attributeNameAssociatedToPredicate: string]: attributeValue;
	    };
	}
	interface ITableState {
	    id: string;
	    data: ITableData;
	    isInError: boolean;
	    isLoading: boolean;
	    filterId: string;
	    paginationId: string;
	    perPageId: string;
	    predicateIds: string[];
	    tableHeaderCellId: string;
	}
	const tableInitialState: ITableState;
	const tablesInitialState: {
	    [tableId: string]: ITableState;
	};
	const tableReducer: (state: ITableState, action: IReduxAction<IReduxActionsPayload>) => ITableState;
	const tablesReducer: (tablesState: {
	    [tableId: string]: ITableState;
	}, action: IReduxAction<IReduxActionsPayload>) => any;

}
declare module ReactVapor {
	interface IActionBarPayload {
	    id: string;
	}
	interface IChangeActionBarActionsPayload extends IActionBarPayload {
	    actions: IActionOptions[];
	}
	const ActionBarActions: {
	    add: string;
	    remove: string;
	    addActions: string;
	};
	const addActionBar: (id: string) => IReduxAction<IActionBarPayload>;
	const removeActionBar: (id: string) => IReduxAction<IActionBarPayload>;
	const addActionsToActionBar: (id: string, actions: IActionOptions[]) => IReduxAction<IChangeActionBarActionsPayload>;

}
declare module ReactVapor {
	const convertUndefinedAndNullToEmptyString: (value: any) => any;

}
declare module ReactVapor {
	const TableRowActions: {
	    add: string;
	    remove: string;
	    select: string;
	    unselectAll: string;
	};
	interface ITableRowActionPayload {
	    id?: string;
	    isCollapsible?: boolean;
	    tableId?: string;
	}
	const addRow: (id: string, tableId?: string) => IReduxAction<ITableRowActionPayload>;
	const removeRow: (id: string) => IReduxAction<ITableRowActionPayload>;
	const selectRow: (id: string, isCollapsible?: boolean, tableId?: string) => IReduxAction<ITableRowActionPayload>;
	const unselectAllRows: (tableId?: string) => IReduxAction<ITableRowActionPayload>;

}
declare module ReactVapor {
	const dispatchPreTableStateModification: (tableOwnProps: ITableOwnProps, dispatch: IDispatch) => void;
	const dispatchPostTableStateModification: (tableOwnProps: ITableOwnProps, dispatch: IDispatch) => void;
	const applyPredicatesOnDisplayedIds: (nextDisplayedIds: string[], tableDataById: ITableRowData, tableCompositeState: ITableCompositeState) => string[];
	const applyFilterOnDisplayedIds: (nextDisplayedIds: string[], tableDataById: ITableRowData, tableCompositeState: ITableCompositeState, tableOwnProps: ITableOwnProps) => string[];
	const applySortOnDisplayedIds: (nextDisplayedIds: string[], tableDataById: ITableRowData, tableCompositeState: ITableCompositeState, tableOwnProps: ITableOwnProps) => string[];
	const applyPaginationOnDisplayedIds: (nextDisplayedIds: string[], tableCompositeState: ITableCompositeState) => string[];
	const defaultTableStateModifier: (tableOwnProps: ITableOwnProps, tableCompositeState: ITableCompositeState) => ITableStateModifier;
	const defaultTableStateModifierThunk: (tableOwnProps: ITableOwnProps, shouldResetPage: boolean, tableCompositeState: ITableCompositeState) => (dispatch: IDispatch) => void;

}
declare module ReactVapor {
	interface IDefaultDropdownSearchPayload {
	    id: string;
	}
	interface IInputDrodownSearchPayload extends IDefaultDropdownSearchPayload {
	    keyCode?: number;
	}
	interface IOptionsDropdownSearchPayload extends IDefaultDropdownSearchPayload, IInputDrodownSearchPayload {
	    dropdownOptions?: IDropdownOption[];
	    filterText?: string;
	    selectedOptions?: IDropdownOption[];
	    defaultSelectedOption?: IDropdownOption;
	    selectedOptionValue?: string;
	    addedSelectedOption?: IDropdownOption;
	    isOpened?: boolean;
	    supportSingleCustomOption?: boolean;
	}
	const DropdownSearchActions: {
	    toggle: string;
	    open: string;
	    close: string;
	    add: string;
	    addMultiSelect: string;
	    addCustomSelectedOption: string;
	    remove: string;
	    update: string;
	    filter: string;
	    select: string;
	    active: string;
	    deselectOption: string;
	    deselectAllOptions: string;
	    multiSelect: string;
	    onKeyDownMultiselect: string;
	};
	const applyFilterDropdownSearch: (id: string, filterText: string) => IReduxAction<IOptionsDropdownSearchPayload>;
	const updateOptionsDropdownSearch: (id: string, dropdownOptions: IDropdownOption[], defaultSelectedOption?: IDropdownOption) => IReduxAction<IOptionsDropdownSearchPayload>;
	const toggleDropdownSearch: (id: string) => IReduxAction<IDefaultDropdownSearchPayload>;
	const openDropdownSearch: (id: string) => IReduxAction<IDefaultDropdownSearchPayload>;
	const closeDropdownSearch: (id: string, dropdownOptions?: IDropdownOption[]) => IReduxAction<IOptionsDropdownSearchPayload>;
	const addDropdownSearch: (id: string, dropdownOptions: IDropdownOption[], defaultSelectedOption?: IDropdownOption, supportSingleCustomOption?: boolean) => IReduxAction<IOptionsDropdownSearchPayload>;
	const addMultiSelectDropdownSearch: (id: string, dropdownOptions: IDropdownOption[]) => IReduxAction<IOptionsDropdownSearchPayload>;
	const removeDropdownSearch: (id: string) => IReduxAction<IDefaultDropdownSearchPayload>;
	const selectOptionDropdownSearch: (id: string, addedSelectedOption: IDropdownOption) => IReduxAction<IOptionsDropdownSearchPayload>;
	const multiSelectOptionDropdownSearch: (id: string, addedSelectedOption: IDropdownOption) => IReduxAction<IOptionsDropdownSearchPayload>;
	const addCustomSelectedOption: (id: string, selectedOptionValue: string) => IReduxAction<IOptionsDropdownSearchPayload>;
	const deselectOptionDropdownSearch: (id: string, selectedOptionValue: string) => IReduxAction<IOptionsDropdownSearchPayload>;
	const deselectAllOptionsMultiselectDropdownSearch: (id: string) => IReduxAction<IOptionsDropdownSearchPayload>;
	const updateActiveOptionDropdownSearch: (id: string, keyCode: number) => IReduxAction<IInputDrodownSearchPayload>;
	const keyDownMultiselectDropdownSearch: (id: string, keyCode: number) => IReduxAction<IInputDrodownSearchPayload>;

}
declare module ReactVapor {
	interface ITableHeaderCellState {
	    id: string;
	    tableId: string;
	    sorted: TableSortingOrder;
	    attributeToSort?: string;
	}
	interface ITableHeaderCellsState {
	    [id: string]: ITableHeaderCellState;
	}
	const tableHeaderCellInitialState: ITableHeaderCellState;
	const tableHeaderCellsInitialState: ITableHeaderCellsState;
	const tableHeaderCellReducer: (state: ITableHeaderCellState, action: IReduxAction<IReduxActionsPayload>) => ITableHeaderCellState;
	const tableHeaderCellsReducer: (state: ITableHeaderCellsState, action: IReduxAction<IReduxActionsPayload>) => ITableHeaderCellsState;

}
declare module ReactVapor {
	const multiSelectDropdownSearchReducer: (state: IDropdownSearchState, action: IReduxAction<IOptionsDropdownSearchPayload>) => IDropdownSearchState;

}
declare module ReactVapor {
	function deepClone(object: any): any;

}
declare module ReactVapor {
	interface IDropdownSearchState {
	    id: string;
	    isOpened?: boolean;
	    filterText?: string;
	    options?: IDropdownOption[];
	    selectedOption?: IDropdownOption;
	    activeOption?: IDropdownOption;
	    setFocusOnDropdownButton?: boolean;
	    defaultSelectedOptionValue?: string;
	    supportSingleCustomOption?: boolean;
	}
	const defaultSelectedOptionPlaceholder: IDropdownOption;
	const dropdownSearchInitialState: IDropdownSearchState;
	const dropdownsSearchInitialState: IDropdownSearchState[];
	const getNextIndexPosition: (array: any[], item: any, key: number) => number;
	const isNotCustomOption: (option: IDropdownOption, includeSelected?: boolean) => boolean;
	const removeCustomOptions: (options: IDropdownOption[], supportSingleCustomOption: boolean, includeSelected?: boolean) => any;
	const shouldHideOnFilter: (option: IDropdownOption, filterText: string) => boolean;
	const deselectOption: (options: IDropdownOption[], value: string) => IDropdownOption[];
	const deselectLastSelectedOption: (options: IDropdownOption[]) => IDropdownOption[];
	const deselectAllOptions: (options: IDropdownOption[], includeCustom?: boolean) => IDropdownOption[];
	const addUniqueSelectedOption: (options: IDropdownOption[], value: string) => IDropdownOption[];
	const getDisplayedOptions: (state: IDropdownSearchState) => IDropdownOption[];
	const getFilteredOptions: (state: IDropdownSearchState, filterText?: string) => IDropdownOption[];
	const selectSingleOption: (options: IDropdownOption[], selectedOption: IDropdownOption) => IDropdownOption[];
	const multiSelectOption: (options: IDropdownOption[], selectedOption: IDropdownOption) => IDropdownOption[];
	const updateOptions: (options: IDropdownOption[], selectedOption?: IDropdownOption) => IDropdownOption[];
	const dropdownSearchReducer: (state: IDropdownSearchState, action: IReduxAction<IOptionsDropdownSearchPayload>) => IDropdownSearchState;
	const dropdownsSearchReducer: (state: IDropdownSearchState[], action: IReduxAction<IOptionsDropdownSearchPayload>) => IDropdownSearchState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	type IAttributeValue = any;
	interface IPredicateAttributes {
	    [attributeName: string]: IAttributeValue;
	}
	interface ITableDispatchProps {
	    onDidMount: () => void;
	    onUnmount: () => void;
	    onModifyData: (shouldResetPage: boolean, tableCompositeState: ITableCompositeState, previousTableCompositeState?: ITableCompositeState) => void;
	    onRowClick: (actions: IActionOptions[]) => void;
	    onPredicateOptionClick: (predicateId: string, option: IDropdownOption) => void;
	}
	const TableConnected: React.ComponentClass<ITableProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	type JSXRenderable = JSX.Element | JSX.Element[] | string | number;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ILoadingOwnProps extends React.ClassAttributes<Loading> {
	    id?: string;
	}
	interface ILoadingDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	}
	interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {
	}
	class Loading extends React.Component<ILoadingProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const LoadingConnected: React.ComponentClass<ILoadingProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface INavigationPaginationSelectProps extends React.ClassAttributes<NavigationPaginationSelect> {
	    selected: boolean;
	    pageNb: number;
	    onPageClick: (pageNb: number) => void;
	}
	class NavigationPaginationSelect extends React.Component<INavigationPaginationSelectProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface INavigationPaginationOwnProps extends React.ClassAttributes<NavigationPagination> {
	    id?: string;
	    totalPages: number;
	    numberOfPagesToShow?: number;
	    previousLabel?: string;
	    nextLabel?: string;
	    loadingIds?: string[];
	    hidePages?: boolean;
	}
	interface INavigationPaginationStateProps {
	    currentPage?: number;
	}
	interface INavigationPaginationDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onPageClick?: (pageNb: number) => void;
	}
	interface INavigationPaginationProps extends INavigationPaginationOwnProps, INavigationPaginationStateProps, INavigationPaginationDispatchProps {
	}
	const NUMBER_OF_PAGES_SHOWING: number;
	const PREVIOUS_LABEL: string;
	const NEXT_LABEL: string;
	class NavigationPagination extends React.Component<INavigationPaginationProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const NavigationPaginationConnected: React.ComponentClass<INavigationPaginationProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface INavigationPerPageSelectOwnProps extends React.ClassAttributes<NavigationPerPageSelect> {
	    perPageNb: number;
	    selected: boolean;
	    onPerPageClick: (perPageNb: number) => void;
	}
	interface INavigationPerPageSelectProps extends INavigationPerPageSelectOwnProps {
	}
	class NavigationPerPageSelect extends React.Component<INavigationPerPageSelectProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface INavigationPerPageOwnProps extends React.ClassAttributes<NavigationPerPage> {
	    id?: string;
	    totalEntries: number;
	    label?: string;
	    perPageNumbers?: number[];
	    loadingIds?: string[];
	}
	interface INavigationPerPageStateProps {
	    currentPerPage?: number;
	    currentPage?: number;
	}
	interface INavigationPerPageDispatchProps {
	    onRender?: (perPageNb: number) => void;
	    onDestroy?: () => void;
	    onPerPageClick?: (perPageNb: number, oldPerPageNb: number, currentPage: number) => void;
	}
	interface INavigationPerPageProps extends INavigationPerPageOwnProps, INavigationPerPageStateProps, INavigationPerPageDispatchProps {
	}
	const PER_PAGE_NUMBERS: number[];
	const PER_PAGE_LABEL: string;
	class NavigationPerPage extends React.Component<INavigationPerPageProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const NavigationPerPageConnected: React.ComponentClass<INavigationPerPageProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface INavigationOwnProps extends React.ClassAttributes<Navigation> {
	    id?: string;
	    totalPages: number;
	    totalEntries: number;
	    loadingIds?: string[];
	}
	interface INavigationChildrenProps {
	    numberOfPagesToShow?: number;
	    previousLabel?: string;
	    nextLabel?: string;
	    onPageClick?: (pageNb: number) => void;
	    perPageLabel?: string;
	    perPageNumbers?: number[];
	    onPerPageClick?: () => void;
	    hidePages?: boolean;
	    currentPerPage?: number;
	    currentPage?: number;
	}
	interface INavigationStateProps extends IReduxStatePossibleProps {
	    isLoading?: boolean;
	}
	interface INavigationProps extends INavigationOwnProps, INavigationChildrenProps, INavigationStateProps {
	}
	class Navigation extends React.Component<INavigationProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DropdownSearchConnected: React.ComponentClass<IDropdownSearchProps>;

}
declare module ReactVapor {
	interface IPromptActionPayload {
	    id: string;
	}
	interface IAddPromptActionPayload extends IPromptActionPayload {
	    options: IInlinePromptOptions;
	}
	const PromptActions: {
	    add: string;
	    remove: string;
	};
	const addPrompt: (id: string, options: IInlinePromptOptions) => IReduxAction<IAddPromptActionPayload>;
	const removePrompt: (id: string) => IReduxAction<IPromptActionPayload>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const InlinePromptConnected: React.ComponentClass<IInlinePromptProps>;

}
declare module ReactVapor {
	interface IActionBarState {
	    id: string;
	    actions: IActionOptions[];
	    isLoading?: boolean;
	}
	const actionBarInitialState: IActionBarState;
	const actionBarsInitialState: IActionBarState[];
	const actionBarReducer: (state: IActionBarState, action: IReduxAction<IReduxActionsPayload>) => IActionBarState;
	const actionBarsReducer: (state: IActionBarState[], action: IReduxAction<IReduxActionsPayload>) => IActionBarState[];

}
declare module ReactVapor {
	interface IPromptState {
	    id: string;
	    options: IInlinePromptOptions;
	}
	const promptInitialState: IPromptState;
	const promptsInitialState: IPromptState[];
	const promptReducer: (state: IPromptState, action: IReduxAction<IReduxActionsPayload>) => IPromptState;
	const promptsReducer: (state: IPromptState[], action: IReduxAction<IReduxActionsPayload>) => IPromptState[];

}
declare module ReactVapor {
	const ItemFilterActions: {
	    add: string;
	    filter: string;
	    remove: string;
	};
	interface IItemFilterActionPayload {
	    id: string;
	}
	interface IItemFilteringActionPayload extends IItemFilterActionPayload {
	    item: string;
	}
	const addItemFilter: (id: string) => IReduxAction<IItemFilterActionPayload>;
	const filterItems: (id: string, item: string) => IReduxAction<IItemFilteringActionPayload>;
	const removeItemFilter: (id: string) => IReduxAction<IItemFilterActionPayload>;

}
declare module ReactVapor {
	interface IItemFilterState {
	    id: string;
	    item: string;
	}
	const itemFilterOriginalState: IItemFilterState;
	const itemFiltersOriginalState: IItemFilterState[];
	const itemFilterReducer: (state: IItemFilterState, action: IReduxAction<IReduxActionsPayload>) => IItemFilterState;
	const itemFiltersReducer: (state: IItemFilterState[], action: IReduxAction<IReduxActionsPayload>) => IItemFilterState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	const ActionBarConnected: React.ComponentClass<IActionBarProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableChildActionBar: (props: ITableProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableHeaderCellOwnProps extends React.ClassAttributes<TableHeaderCell> {
	    title: string;
	    id?: string;
	    attributeToSort?: string;
	    tableId?: string;
	    className?: string;
	    onClickCallback?: (e) => void;
	}
	interface ITableHeaderStateProps {
	    sorted?: TableSortingOrder;
	}
	interface ITableHeaderCellDispatchProps {
	    onMount?: () => void;
	    onSort?: () => void;
	    onUnmount?: () => void;
	}
	interface ITableHeaderCellProps extends ITableHeaderCellOwnProps, ITableHeaderStateProps, ITableHeaderCellDispatchProps {
	}
	class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {
	    static defaultProps;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableHeaderCellConnected: React.ComponentClass<ITableHeaderCellProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableHeaderProps extends React.ClassAttributes<TableHeader>, IReduxStatePossibleProps {
	    columns: ITableHeaderCellProps[];
	    headerClass?: string;
	}
	class TableHeader extends React.Component<ITableHeaderProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableChildHeader: (props: ITableProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableChildLoadingRowProps extends ITableProps {
	    isInitialLoad?: boolean;
	}
	const TableChildLoadingRow: (props: ITableChildLoadingRowProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableChildBlankSlateProps extends ITableProps {
	    isInitialLoad?: boolean;
	}
	const TableChildBlankSlate: (props: ITableChildBlankSlateProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	const NavigationConnected: React.ComponentClass<INavigationProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableChildNavigation: (props: ITableProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ILastUpdatedOwnProps extends React.ClassAttributes<LastUpdated> {
	    id?: string;
	    label?: string;
	}
	interface ILastUpdatedStateProps {
	    time?: Date;
	}
	interface ILastUpdatedDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	}
	interface ILastUpdatedProps extends ILastUpdatedOwnProps, ILastUpdatedStateProps, ILastUpdatedDispatchProps {
	}
	const LAST_UPDATE_LABEL: string;
	class LastUpdated extends React.Component<ILastUpdatedProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const LastUpdatedConnected: React.ComponentClass<ILastUpdatedProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableChildLastUpdated: (props: ITableProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IErrorSection {
	    errorDescription: string;
	    errorPrecision: string;
	    errorTroubleshoot: string;
	    errorStatus: string;
	    errorCode: string;
	}
	interface ITableErrorProps extends React.ClassAttributes<TableError> {
	    error: IErrorSection;
	    descriptionLabel?: string;
	    troubleshootingLabel?: string;
	    errorCodeLabel?: string;
	}
	const DESCRIPTION_LABEL: string;
	const TROUBLESHOOTING_LABEL: string;
	const ERROR_CODE_LABEL: string;
	class TableError extends React.Component<ITableErrorProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableCollapsibleRowOwnProps extends React.ClassAttributes<TableCollapsibleRow> {
	    id: string;
	    isInError?: boolean;
	    nbColumns: number;
	}
	interface ITableCollapsibleRowStateProps {
	    opened?: boolean;
	}
	interface ITableCollapsibleRowChildrenProps {
	    error?: IErrorSection;
	    descriptionLabel?: string;
	    troubleshootingLabel?: string;
	    errorCodeLabel?: string;
	}
	interface ITableCollapsibleRowProps extends ITableCollapsibleRowOwnProps, ITableCollapsibleRowStateProps, ITableCollapsibleRowChildrenProps {
	}
	class TableCollapsibleRow extends React.Component<ITableCollapsibleRowProps, any> {
	    componentDidMount(): void;
	    componentWillReceiveProps(nextProps: ITableCollapsibleRowProps): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	interface ITableRowState {
	    id: string;
	    opened: boolean;
	    selected: boolean;
	    tableId?: string;
	}
	const tableRowInitialState: ITableRowState;
	const tableRowsInitialState: ITableRowState[];
	const tableRowReducer: (state: ITableRowState, action: IReduxAction<ITableRowActionPayload>) => ITableRowState;
	const tableRowsReducer: (state: ITableRowState[], action: IReduxAction<ITableRowActionPayload>) => ITableRowState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableCollapsibleRowConnected: React.ComponentClass<ITableCollapsibleRowProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableRowWrapper: (props?: any) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableCollapsibleRowToggleProps extends React.ClassAttributes<TableCollapsibleRowToggle> {
	    isExpanded: boolean;
	}
	class TableCollapsibleRowToggle extends React.Component<ITableCollapsibleRowToggleProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableHeadingRowOwnProps extends React.ClassAttributes<TableHeadingRow> {
	    id?: string;
	    tableId?: string;
	    isCollapsible: boolean;
	    onClickCallback?: (e) => void;
	}
	interface ITableHeadingRowStateProps {
	    opened?: boolean;
	    selected?: boolean;
	}
	interface ITableHeadingRowDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClick?: () => void;
	}
	interface ITableHeadingRowProps extends ITableHeadingRowOwnProps, ITableHeadingRowStateProps, ITableHeadingRowDispatchProps {
	}
	class TableHeadingRow extends React.Component<ITableHeadingRowProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableHeadingRowConnected: React.ComponentClass<ITableHeadingRowProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const TableChildBody: (props: ITableProps) => JSX.Element[];

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IData {
	    id: string;
	    [attribute: string]: any;
	}
	interface ITableRowData {
	    [id: string]: IData;
	}
	type IAttributeFormatter = (attributeValue: any, attributeName?: string) => JSXRenderable;
	type IAttributeNameOrValueFormatter = (attributeNameOrValue: string) => string;
	interface ITableHeadingAttribute {
	    attributeName: string;
	    titleFormatter: IAttributeNameOrValueFormatter;
	    filterFormatter?: IAttributeNameOrValueFormatter;
	    sort?: boolean;
	    sortByMethod?: IAttributeNameOrValueFormatter;
	    attributeFormatter?: IAttributeFormatter;
	}
	interface ITablePredicate {
	    props: IDropdownSearchProps;
	    attributeName: string;
	    attributeNameFormatter?: IAttributeNameOrValueFormatter;
	}
	interface ITableOwnProps extends React.ClassAttributes<Table> {
	    id: string;
	    headingAttributes: ITableHeadingAttribute[];
	    blankSlateDefault: IBlankSlateProps;
	    tableContainerClasses?: string[];
	    initialTableData?: ITableData;
	    collapsibleFormatter?: (tableRowData: ITableRowData, props: ITableProps) => JSXRenderable;
	    actionBar?: true | IActionBarProps;
	    getActions?: (rowData?: ITableRowData, props?: ITableProps) => IActionOptions[];
	    blankSlateNoResultsOnAction?: IBlankSlateProps;
	    blankSlateOnError?: IBlankSlateProps;
	    filter?: true | IFilterBoxProps;
	    filterMethod?: (attributeValue: any, props: ITableOwnProps) => boolean;
	    predicates?: ITablePredicate[];
	    navigation?: true | INavigationChildrenProps;
	    lastUpdatedLabel?: string;
	    manual?: (tableOwnProps: ITableOwnProps, shouldResetPage: boolean, tableCompositeState: ITableCompositeState, previousTableCompositeState: ITableCompositeState) => IThunkAction;
	}
	interface ITableCompositeStateProps {
	    readonly tableCompositeState?: ITableCompositeState;
	}
	interface ITableProps extends ITableOwnProps, ITableCompositeStateProps, Partial<ITableDispatchProps> {
	}
	class Table extends React.Component<ITableProps, any> {
	    static defaultProps;
	    constructor(props: ITableProps);
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    componentWillReceiveProps(nextProps: ITableProps): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	type ITableStateModifier = (state: ITableState) => ITableState;
	const TableActions: {
	    add: string;
	    remove: string;
	    inError: string;
	    toggleLock: string;
	    modifyState: string;
	};
	interface ITableActionPayload {
	    id: string;
	    isInError?: boolean;
	    initialTableData?: ITableData;
	    initialPerPage?: number;
	    headingAttributeIds?: string[];
	    predicates?: ITablePredicate[];
	    tableStateModifier?: ITableStateModifier;
	    shouldResetPage?: boolean;
	}
	const addTable: (id: string, initialTableData: ITableData, predicates: ITablePredicate[]) => IReduxAction<ITableActionPayload>;
	const removeTable: (id: string) => IReduxAction<ITableActionPayload>;
	const setIsInError: (id: string, isInError: boolean) => IReduxAction<ITableActionPayload>;
	const modifyState: (id: string, tableStateModifier: ITableStateModifier, shouldResetPage: boolean) => IReduxAction<ITableActionPayload>;

}
declare module ReactVapor {
	interface IPaginationState {
	    id: string;
	    pageNb: number;
	}
	const paginationInitialState: IPaginationState;
	const paginationCompositeInitialState: IPaginationState[];
	const paginationReducer: (state: IPaginationState, action: IReduxAction<IReduxActionsPayload>) => IPaginationState;
	const paginationCompositeReducer: (state: IPaginationState[], action: IReduxAction<IReduxActionsPayload>) => IPaginationState[];

}
declare module ReactVapor {
	interface IDropdownActionPayload {
	    id: string;
	}
	const DropdownActions: {
	    add: string;
	    remove: string;
	    toggle: string;
	    close: string;
	};
	const addDropdown: (id: string) => IReduxAction<IDropdownActionPayload>;
	const removeDropdown: (id: string) => IReduxAction<IDropdownActionPayload>;
	const toggleDropdown: (id: string) => IReduxAction<IDropdownActionPayload>;
	const closeDropdown: (id: string) => IReduxAction<IDropdownActionPayload>;

}
declare module ReactVapor {
	interface IDropdownState {
	    id: string;
	    opened: boolean;
	}
	const dropdownInitialState: IDropdownState;
	const dropdownsInitialState: IDropdownState[];
	const dropdownReducer: (state: IDropdownState, action: IReduxAction<IReduxActionsPayload>) => IDropdownState;
	const dropdownsReducer: (state: IDropdownState[], action: IReduxAction<IReduxActionsPayload>) => IDropdownState[];

}
declare module ReactVapor {
	const OptionsCycleActions: {
	    add: string;
	    remove: string;
	    change: string;
	};
	interface IOptionsCyclePayload {
	    id: string;
	}
	interface IChangeOptionsCyclePayload extends IOptionsCyclePayload {
	    currentOption: number;
	}
	const addOptionsCycle: (id: string, currentOption?: number) => IReduxAction<IChangeOptionsCyclePayload>;
	const removeOptionsCycle: (id: string) => IReduxAction<IOptionsCyclePayload>;
	const changeOptionsCycle: (id: string, currentOption: number) => IReduxAction<IChangeOptionsCyclePayload>;

}
declare module ReactVapor {
	interface IOptionsCycleState {
	    id: string;
	    currentOption: number;
	}
	const optionsCycleInitialState: IOptionsCycleState;
	const optionsCyclesInitialState: IOptionsCycleState[];
	const optionsCycleReducer: (state: IOptionsCycleState, action: IReduxAction<IReduxActionsPayload>) => IOptionsCycleState;
	const optionsCyclesReducer: (state: IOptionsCycleState[], action: IReduxAction<IReduxActionsPayload>) => IOptionsCycleState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ISetToNowProps extends React.ClassAttributes<SetToNowButton> {
	    onClick: () => void;
	    tooltip?: string;
	}
	const SET_TO_NOW_DEFAULT_TOOLTIP: string;
	class SetToNowButton extends React.Component<ISetToNowProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDay {
	    number: number;
	    isCurrentMonth: boolean;
	    isToday: boolean;
	    date: Moment;
	    isSelected?: boolean;
	    isLowerLimit?: boolean;
	    isUpperLimit?: boolean;
	    color?: string;
	    isSelectable?: boolean;
	}
	interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
	    day: IDay;
	    onClick: (value: Date) => void;
	    onSelectUnselectable: () => void;
	}
	class CalendarDay extends React.Component<ICalendarDayProps, {}> {
	    static DEFAULT_DATE_CLASS: string;
	    componentWillReceiveProps(nextProps: ICalendarDayProps): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	interface IDateComponents {
	    year?: number;
	    month?: number;
	    date?: number;
	    hours?: number;
	    minutes?: number;
	    seconds?: number;
	    milliseconds?: number;
	}
	const SIMPLE_DATE_FORMAT: string;
	const LONG_DATE_FORMAT: string;
	const LONG_DATE_WITH_SMALL_HOURS_FORMAT: string;
	const DATES_SEPARATOR: string;
	class DateUtils {
	    static currentDate: Date;
	    static currentMonth: number;
	    static currentYear: number;
	    static getPreviousYears(numberOfYears: number): string[];
	    static getNextYears(numberOfYears: number): string[];
	    static getMonthWeeks(firstDay: Date, startingDay: number): IDay[][];
	    static getDateWithTimeString(date: Date): string;
	    static getDateFromTimeString(date: string): Date;
	    static getValidDate(date: string, fromTime?: boolean): Date;
	    static getSimpleDate(date: Date): string;
	    static getDateFromSimpleDateString(date: string): Date;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDatePickerProps extends React.ClassAttributes<DatePicker> {
	    onBlur: (date: Date, isUpperLimit: boolean) => void;
	    onClick: (isUpperLimit: boolean) => void;
	    placeholder: string;
	    withTime?: boolean;
	    hasSetToNowButton?: boolean;
	    upperLimit?: boolean;
	    date?: Date;
	    setToNowTooltip?: string;
	    isSelecting?: string;
	    color?: string;
	}
	const DatePickerColors: {
	    blue: string;
	    green: string;
	    yellow: string;
	    red: string;
	    orange: string;
	};
	const DEFAULT_DATE_PICKER_COLOR: string;
	class DatePicker extends React.Component<IDatePickerProps, any> {
	    static defaultProps;
	    handleDocumentClick: (e: MouseEvent) => void;
	    componentDidMount(): void;
	    componentWillReceiveProps(nextProps: IDatePickerProps): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IRangeLimit {
	    weeks?: number;
	    days?: number;
	    hours?: number;
	    message?: string;
	}
	interface IDatesSelectionOwnProps extends React.ClassAttributes<DatesSelection> {
	    id?: string;
	    withTime?: boolean;
	    hasSetToNowButton?: boolean;
	    isRange?: boolean;
	    rangeLimit?: IRangeLimit;
	    color?: string;
	    calendarId?: string;
	    defaultLowerLimit?: Date;
	    defaultUpperLimit?: Date;
	    lowerLimitPlaceholder?: string;
	    upperLimitPlaceholder?: string;
	}
	interface IDatesSelectionStateProps {
	    lowerLimit?: Date;
	    upperLimit?: Date;
	    inputLowerLimit?: Date;
	    inputUpperLimit?: Date;
	    quickOption?: string;
	    isSelecting?: string;
	}
	interface IDatesSelectionDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClick?: (isUpperLimit: boolean) => void;
	    onBlur?: (date: Date, isUpperLimit: boolean, datePicker?: boolean) => void;
	}
	interface IDatesSelectionChildrenProps {
	    setToNowTooltip?: string;
	}
	interface IDatesSelectionProps extends IDatesSelectionOwnProps, IDatesSelectionStateProps, IDatesSelectionDispatchProps, IDatesSelectionChildrenProps {
	}
	const LOWER_LIMIT_PLACEHOLDER: string;
	const UPPER_LIMIT_PLACEHOLDER: string;
	class DatesSelection extends React.Component<IDatesSelectionProps, any> {
	    static defaultProps;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    componentWillReceiveProps(nextProps: IDatesSelectionProps): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	const DatePickerActions: {
	    add: string;
	    remove: string;
	    changeLowerLimit: string;
	    changeUpperLimit: string;
	    select: string;
	    reset: string;
	    apply: string;
	};
	interface IDatePickerPayload {
	    id: string;
	}
	interface IAddDatePickerPayload extends IDatePickerPayload {
	    color: string;
	    calendarId: string;
	    isRange: boolean;
	    rangeLimit?: IRangeLimit;
	}
	interface IChangeDatePickerPayload extends IDatePickerPayload {
	    date: Date;
	}
	interface ISelectDatePickerPayload extends IDatePickerPayload {
	    limit: string;
	}
	const DateLimits: {
	    lower: string;
	    upper: string;
	};
	const addDatePicker: (id: string, isRange: boolean, rangeLimit?: IRangeLimit, color?: string, calendarId?: string) => IReduxAction<IAddDatePickerPayload>;
	const removeDatePicker: (id: string) => IReduxAction<IDatePickerPayload>;
	const resetDatePickers: (id: string) => IReduxAction<IDatePickerPayload>;
	const applyDatePicker: (id: string) => IReduxAction<IDatePickerPayload>;
	const changeDatePickerLowerLimit: (id: string, date: Date) => IReduxAction<IChangeDatePickerPayload>;
	const changeDatePickerUpperLimit: (id: string, date: Date) => IReduxAction<IChangeDatePickerPayload>;
	const selectDate: (id: string, limit: string) => IReduxAction<ISelectDatePickerPayload>;

}
declare module ReactVapor {
	interface IDatePickerState {
	    id: string;
	    calendarId: string;
	    color: string;
	    lowerLimit: Date;
	    upperLimit: Date;
	    inputLowerLimit: Date;
	    inputUpperLimit: Date;
	    rangeLimit?: IRangeLimit;
	    isRange: boolean;
	    selected: string;
	    appliedLowerLimit: Date;
	    appliedUpperLimit: Date;
	}
	const datePickerInitialState: IDatePickerState;
	const datePickersInitialState: IDatePickerState[];
	const datePickerReducer: (state: IDatePickerState, action: IReduxAction<any>) => IDatePickerState;
	const datePickersReducer: (state: IDatePickerState[], action: IReduxAction<IReduxActionsPayload>) => IDatePickerState[];

}
declare module ReactVapor {
	const OptionPickerActions: {
	    add: string;
	    remove: string;
	    change: string;
	    reset: string;
	};
	interface IOptionPickerPayload {
	    id: string;
	}
	interface IChangeOptionPayload extends IOptionPickerPayload {
	    label: string;
	    value: string;
	}
	const addOptionPicker: (id: string) => IReduxAction<IOptionPickerPayload>;
	const removeOptionPicker: (id: string) => IReduxAction<IOptionPickerPayload>;
	const changeOptionPicker: (id: string, label: string, value: string) => IReduxAction<IChangeOptionPayload>;
	const resetOptionPickers: (id: string) => IReduxAction<IOptionPickerPayload>;

}
declare module ReactVapor {
	interface IOptionPickerState {
	    id: string;
	    selectedLabel: string;
	    selectedValue: string;
	}
	const optionPickerInitialState: IOptionPickerState;
	const optionPickersInitialState: IOptionPickerState[];
	const optionPickerReducer: (state: IOptionPickerState, action: IReduxAction<IReduxActionsPayload>) => IOptionPickerState;
	const optionPickersReducer: (state: IOptionPickerState[], action: IReduxAction<IReduxActionsPayload>) => IOptionPickerState[];

}
declare module ReactVapor {
	interface IModalActionPayload {
	    id?: string;
	    ids?: string[];
	}
	const ModalAction: {
	    closeModal: string;
	    openModal: string;
	    addModal: string;
	    removeModal: string;
	    closeModals: string;
	};
	const closeModal: (id: string) => IReduxAction<IModalActionPayload>;
	const openModal: (id: string) => IReduxAction<IModalActionPayload>;
	const addModal: (id: string) => IReduxAction<IModalActionPayload>;
	const removeModal: (id: string) => IReduxAction<IModalActionPayload>;
	const closeModals: (ids: string[]) => IReduxAction<IModalActionPayload>;

}
declare module ReactVapor {
	interface IModalState {
	    id: string;
	    isOpened: boolean;
	}
	const modalInitialState: IModalState;
	const modalsInitialState: IModalState[];
	const modalReducer: (state: IModalState, action: IReduxAction<IModalActionPayload>) => IModalState;
	const modalsReducer: (state: IModalState[], action: IReduxAction<IModalActionPayload>) => IModalState[];

}
declare module ReactVapor {
	interface ISubNavigationActionPayload {
	    id: string;
	    selected?: string;
	}
	const SubNavigationActions: {
	    add: string;
	    remove: string;
	    select: string;
	};
	const addSubNavigation: (id: string, itemsId: string[]) => IReduxAction<ISubNavigationActionPayload>;
	const removeSubNavigation: (id: string) => IReduxAction<ISubNavigationActionPayload>;
	const selectSubNavigation: (id: string, selected: string) => IReduxAction<ISubNavigationActionPayload>;

}
declare module ReactVapor {
	interface ISubNavigationState {
	    id: string;
	    selected: string;
	}
	const subNavigationInitialState: ISubNavigationState;
	const subNavigationsInitialState: ISubNavigationState[];
	const subNavigationReducer: (state: ISubNavigationState, action: IReduxAction<IReduxActionsPayload>) => ISubNavigationState;
	const subNavigationsReducer: (state: ISubNavigationState[], action: IReduxAction<IReduxActionsPayload>) => ISubNavigationState[];

}
declare module ReactVapor {
	/// <reference types="jquery" />
	/// <reference types="chosen-js" />
	/// <reference types="react" />
	interface IChosenSelectProps extends React.HTMLProps<ChosenSelect> {
	    allowSingleDeselect?: boolean;
	    caseSensitiveSearch?: boolean;
	    disableSearch?: boolean;
	    disableSearchThreshold?: number;
	    displayDisabledOptions?: boolean;
	    displaySelectedOptions?: boolean;
	    enableSplitWordSearch?: boolean;
	    includeGroupLabelInSelected?: boolean;
	    inheritSelectClasses?: boolean;
	    maxSelectedOptions?: number;
	    maxShownResults?: number;
	    noResultsText?: string;
	    onChosenChange?: (event: JQueryEventObject, args: Chosen.SelectedData) => void;
	    placeholderTextMultiple?: string;
	    placeholderTextSingle?: string;
	    searchContains?: boolean;
	    singleBackstrokeDelete?: boolean;
	    width?: string;
	}
	class ChosenSelect extends React.Component<IChosenSelectProps, any> {
	    select: JQuery;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITetherComponentCopiedProps {
	    renderElementTag?: string;
	    renderElementTo?: Element | string;
	    attachment: string;
	    targetAttachment?: string;
	    offset?: string;
	    targetOffset?: string;
	    targetModifier?: string;
	    enabled?: boolean;
	    classes?: any;
	    style?: Object;
	    classPrefix?: string;
	    optimizations?: Object;
	    constraints?: any[];
	    onUpdate?: Function;
	    onRepositioned?: Function;
	}
	interface IPopoverProps extends ITetherComponentCopiedProps, React.ClassAttributes<Popover> {
	    isOpen?: boolean;
	    onToggle?: (isOpen: boolean) => void;
	    isModal?: boolean;
	}
	interface IPopoverState {
	    isOpen: boolean;
	}
	class Popover extends React.Component<IPopoverProps, IPopoverState> {
	    constructor(props: IPopoverProps, state: IPopoverState);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	    toggleOpened(isOpen: boolean): void;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IUserFeedbackProps {
	    feedbackText: string;
	    state: string;
	    extraClasses?: string[];
	    displayOnShow?: string;
	}
	interface IUserFeedbackStyle {
	    classes: string;
	}
	const UserFeedbackState: {
	    VALID: string;
	    WARNING: string;
	    ERROR: string;
	};
	const TextColorClass: {
	    default: string;
	    error: string;
	};
	class UserFeedback extends React.Component<IUserFeedbackProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IInputProps {
	    id?: string;
	    name?: string;
	    type?: string;
	    classes?: string[];
	    innerInputClasses?: string[];
	    value?: string;
	    placeholder?: string;
	    checked?: boolean;
	    disabled?: boolean;
	    readOnly?: boolean;
	    onBlur?: (value: string) => void;
	    onClick?: (e) => void;
	    onChange?: (value?: string) => void;
	    onKeyUp?: (event) => void;
	}
	class Input extends React.Component<IInputProps, any> {
	    static defaultProps;
	    reset(): void;
	    getInnerValue(): string;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	class Checkbox extends Input {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	class ValidComponentChildren {
	    static map(children: React.ReactNode, func: (child: React.ReactChild) => any, context: any): any[];
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IChildFormProps {
	    disabled?: boolean;
	}
	class ChildForm extends React.Component<IChildFormProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IToggleFormProps {
	    classes?: string[];
	    checked?: boolean;
	    children?: React.ReactElement<Input | ChildForm> | React.ReactElement<Input | ChildForm>[];
	    onClick?: (e) => void;
	    value?: string;
	}
	class ToggleForm extends React.Component<IToggleFormProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const FacetConnected: React.ComponentClass<IFacetProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFlatSelectOptionProps {
	    id: string;
	    option: IContentProps;
	    classes?: string[];
	    prepend?: IContentProps;
	    append?: IContentProps;
	    tooltip?: ITooltipProps;
	    selected?: boolean;
	    onClick?: (option: IFlatSelectOptionProps) => void;
	}
	class FlatSelectOption extends React.Component<IFlatSelectOptionProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IFlatSelectOwnProps {
	    id: string;
	    options: IFlatSelectOptionProps[];
	    classes?: string[];
	    group?: boolean;
	    optionPicker?: boolean;
	    onClick?: (option: IFlatSelectOptionProps) => void;
	}
	interface IFlatSelectStateProps {
	    selectedOptionId?: string;
	}
	interface IFlatSelectDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onOptionClick?: (option: IFlatSelectOptionProps) => void;
	}
	interface IFlatSelectProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps {
	}
	class FlatSelect extends React.Component<IFlatSelectProps, void> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	interface IFlatSelectActionPayload extends IReduxActionsPayload {
	    id: string;
	    selectedOptionId?: string;
	}
	const FlatSelectActions: {
	    add: string;
	    remove: string;
	    select: string;
	};
	const addFlatSelect: (id: string, selectedOptionId: string) => IReduxAction<IFlatSelectActionPayload>;
	const removeFlatSelect: (id: string) => IReduxAction<IFlatSelectActionPayload>;
	const selectFlatSelect: (id: string, selectedOptionId: string) => IReduxAction<IFlatSelectActionPayload>;

}
declare module ReactVapor {
	interface IFlatSelectState {
	    id: string;
	    selectedOptionId?: string;
	}
	const flatSelectInitialState: IFlatSelectState;
	const flatSelectsInitialState: IFlatSelectState[];
	const flatSelectReducer: (state: IFlatSelectState, action: IReduxAction<IFlatSelectActionPayload>) => IFlatSelectState;
	const flatSelectsReducer: (state: IFlatSelectState[], action: IReduxAction<IFlatSelectActionPayload>) => IFlatSelectState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	const FlatSelectConnected: React.ComponentClass<IFlatSelectProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalOwnProps {
	    id: string;
	    classes?: string[];
	}
	interface IModalStateProps {
	    isOpened?: boolean;
	}
	interface IModalDispatchProps {
	    onDestroy?: () => void;
	    onRender?: () => void;
	}
	interface IModalProps extends IModalOwnProps, IModalStateProps, IModalDispatchProps {
	}
	class Modal extends React.Component<IModalProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const ModalConnected: React.ComponentClass<IModalProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalBackdropOwnProps {
	    displayFor?: string[];
	}
	interface IModalBackdropStateProps {
	    display?: boolean;
	}
	interface IModalBackdropDispatchProps {
	    onClick?: (id?: string) => void;
	}
	interface IModalBackdropProps extends IModalBackdropOwnProps, IModalBackdropStateProps, IModalBackdropDispatchProps {
	}
	class ModalBackdrop extends React.Component<IModalBackdropProps, any> {
	    handleClick(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const ModalBackdropConnected: React.ComponentClass<IModalBackdropProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalBodyProps {
	    classes?: string[];
	}
	class ModalBody extends React.Component<IModalBodyProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalFooterProps {
	    classes?: string[];
	}
	class ModalFooter extends React.Component<IModalFooterProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalHeaderOwnProps {
	    id?: string;
	    title: string;
	    classes?: string[];
	}
	interface IModalHeaderStateProps {
	}
	interface IModalHeaderDispatchProps {
	    onClose?: () => void;
	}
	interface IModalHeaderProps extends IModalHeaderOwnProps, IModalHeaderStateProps, IModalHeaderDispatchProps {
	}
	class ModalHeader extends React.Component<IModalHeaderProps, any> {
	    close(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const ModalHeaderConnected: React.ComponentClass<IModalHeaderProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IModalPromptOwnProps {
	    id: string;
	    title: string;
	    message: string;
	    confirmLabel?: string;
	    cancelLabel?: string;
	}
	interface IModalPromptStateProps {
	    isOpened?: boolean;
	}
	interface IModalPromptDispatchProps {
	    onCancel?: (id: string) => void;
	    onDestroy?: (id: string) => void;
	    onRender?: (id: string) => void;
	    onConfirm: (id: string) => void;
	}
	const DEFAULT_MODAL_PROMPT_CONFIRM_LABEL: string;
	const DEFAULT_MODAL_PROMPT_CANCEL_LABEL: string;
	interface IModalPromptProps extends IModalPromptOwnProps, IModalPromptStateProps, IModalPromptDispatchProps {
	}
	class ModalPrompt extends React.Component<IModalPromptProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IItemBoxProps {
	    value: string;
	    displayValue?: string;
	    selected?: boolean;
	    active?: boolean;
	    hidden?: boolean;
	    disabled?: boolean;
	    divider?: boolean;
	    tooltip?: ITooltipProps;
	    classes?: string[];
	    prepend?: IContentProps;
	    append?: IContentProps;
	    onOptionClick?: (option: IItemBoxProps) => void;
	}
	class ItemBox extends React.Component<IItemBoxProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IListBoxProps {
	    items: IItemBoxProps[];
	    onOptionClick?: (option: IItemBoxProps) => void;
	    noResultItem?: IItemBoxProps;
	    classes?: string[];
	}
	class ListBox extends React.Component<IListBoxProps, void> {
	    static defaultProps;
	    protected getItems(): JSX.Element[] | JSX.Element;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDropdownOwnProps extends React.ClassAttributes<Dropdown> {
	    id?: string;
	    toggleContent: JSX.Element[];
	    dropdownItems: JSX.Element[];
	}
	interface IDropdownStateProps {
	    isOpened?: boolean;
	}
	interface IDropdownDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClick?: () => void;
	    onDocumentClick?: () => void;
	}
	interface IDropdownProps extends IDropdownOwnProps, IDropdownStateProps, IDropdownDispatchProps {
	}
	class Dropdown extends React.Component<IDropdownProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DropdownConnected: React.ComponentClass<IDropdownProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableEmptyRowProps extends React.ClassAttributes<TableEmptyRow> {
	    text: string;
	    nbColumns: number;
	}
	class TableEmptyRow extends React.Component<ITableEmptyRowProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IOptionsCycleOwnProps extends React.ClassAttributes<OptionsCycle> {
	    options: string[];
	    id?: string;
	    startAt?: number;
	    isInline?: boolean;
	}
	interface IOptionsCycleStateProps {
	    currentOption?: number;
	}
	interface IOptionsCycleDispatchProps {
	    onRender?: (index: number) => void;
	    onDestroy?: () => void;
	    onChange?: (index: number) => void;
	}
	interface IOptionsCycleProps extends IOptionsCycleOwnProps, IOptionsCycleStateProps, IOptionsCycleDispatchProps {
	}
	class OptionsCycle extends React.Component<IOptionsCycleProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    componentWillReceiveProps(nextProps: IOptionsCycleProps): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const OptionsCycleConnected: React.ComponentClass<IOptionsCycleProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const CalendarSelectionRuleType: {
	    all: string;
	    lower: string;
	    upper: string;
	    range: string;
	};
	interface ICalendarSelectionRule {
	    test: (date: Date, secondDate?: Date) => boolean;
	    isFor: string;
	}
	interface ICalendarOwnProps extends React.ClassAttributes<Calendar> {
	    id?: string;
	    months?: string[];
	    startingMonth?: number;
	    years?: string[];
	    startingYear?: number;
	    days?: string[];
	    startingDay?: number;
	    selectionRules?: ICalendarSelectionRule[];
	    isLinkedToDateRange?: boolean;
	}
	interface ICalendarStateProps extends IReduxStatePossibleProps {
	    selectedMonth?: number;
	    selectedYear?: number;
	    calendarSelection?: IDatePickerState[];
	}
	interface ICalendarDispatchProps {
	    onClick?: (pickerId: string, isUpperLimit: boolean, value: Date) => void;
	    onDateChange?: (cycleId: string, newValue: number) => void;
	}
	interface ICalendarProps extends ICalendarOwnProps, ICalendarStateProps, ICalendarDispatchProps {
	}
	const DEFAULT_MONTHS: string[];
	const DEFAULT_YEARS: string[];
	const DEFAULT_DAYS: string[];
	const MONTH_PICKER_ID: string;
	const YEAR_PICKER_ID: string;
	class Calendar extends React.Component<ICalendarProps, any> {
	    static defaultProps;
	    componentWillReceiveProps(nextProps: ICalendarProps): void;
	    fillInDayInfos(day: IDay): IDay;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const CalendarConnected: React.ComponentClass<ICalendarProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IOption {
	    label: string;
	    value: () => string;
	    [key: string]: any;
	}
	interface IOptionProps extends React.ClassAttributes<Option> {
	    option: IOption;
	    isActive: boolean;
	    onClick: (value: string, label: string) => void;
	}
	class Option extends React.Component<IOptionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DatesSelectionConnected: React.ComponentClass<IDatesSelectionProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IOptionPickerOwnProps extends React.ClassAttributes<OptionPicker> {
	    id?: string;
	    options: IOption[];
	}
	interface IOptionPickerStateProps {
	    activeLabel?: string;
	}
	interface IOptionPickerDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClick?: (value: string, label: string) => void;
	}
	interface IOptionPickerProps extends IOptionPickerOwnProps, IOptionPickerStateProps, IOptionPickerDispatchProps {
	}
	class OptionPicker extends React.Component<IOptionPickerProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const OptionPickerConnected: React.ComponentClass<IOptionPickerProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDatesSelectionBox {
	    title: string;
	    quickOptions?: IOption[];
	    isRange?: boolean;
	    rangeLimit?: IRangeLimit;
	    withTime?: boolean;
	    hasSetToNowButton?: boolean;
	    color?: string;
	}
	interface IDatePickerBoxOwnProps extends React.ClassAttributes<DatePickerBox> {
	    id?: string;
	    datesSelectionBoxes: IDatesSelectionBox[];
	    setToNowTooltip?: string;
	    footer?: JSX.Element;
	}
	interface IDatePickerBoxStateProps extends IReduxStatePossibleProps {
	}
	interface IDatePickerBoxChildrenProps {
	    months?: string[];
	    startingMonth?: number;
	    years?: string[];
	    startingYear?: number;
	    days?: string[];
	    startingDay?: number;
	    selectionRules?: ICalendarSelectionRule[];
	    lowerLimitPlaceholder?: string;
	    upperLimitPlaceholder?: string;
	    isLinkedToDateRange?: boolean;
	}
	interface IDatePickerBoxProps extends IDatePickerBoxOwnProps, IDatePickerBoxStateProps, IDatePickerBoxChildrenProps {
	}
	class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDatePickerDropdownOwnProps extends React.ClassAttributes<DatePickerDropdown> {
	    label?: string;
	    id?: string;
	    applyLabel?: string;
	    cancelLabel?: string;
	    toLabel?: string;
	    onRight?: boolean;
	    onBeforeApply?: () => void;
	    extraDropdownClasses?: string[];
	    extraDropdownToggleClasses?: string[];
	    renderDatePickerWhenClosed?: boolean;
	}
	interface IDatePickerDropdownChildrenProps extends IDatePickerBoxChildrenProps {
	    datesSelectionBoxes: IDatesSelectionBox[];
	    setToNowTooltip?: string;
	    months?: string[];
	    startingMonth?: number;
	    years?: string[];
	    startingYear?: number;
	    days?: string[];
	    startingDay?: number;
	    selectionRules?: ICalendarSelectionRule[];
	    lowerLimitPlaceholder?: string;
	    upperLimitPlaceholder?: string;
	    isLinkedToDateRange?: boolean;
	}
	interface IDatePickerDropdownStateProps extends IReduxStatePossibleProps {
	    isOpened?: boolean;
	    datePicker?: IDatePickerState;
	}
	interface IDatePickerDropdownDispatchProps {
	    onApply?: () => void;
	    onCancel?: (currentMonth: number, currentYear: number, isOpened: boolean) => void;
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClick?: (datePicker: IDatePickerState) => void;
	    onDocumentClick?: () => void;
	}
	interface IDatePickerDropdownProps extends IDatePickerDropdownOwnProps, IDatePickerDropdownStateProps, IDatePickerDropdownDispatchProps, IDatePickerDropdownChildrenProps {
	}
	const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string;
	const DEFAULT_APPLY_DATE_LABEL: string;
	const DEFAULT_CANCEL_DATE_LABEL: string;
	const DEFAULT_TO_LABEL: string;
	const DEFAULT_EXTRA_DROPDOWN_CLASSES: string[];
	const DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES: string[];
	const DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED: boolean;
	class DatePickerDropdown extends React.Component<IDatePickerDropdownProps, any> {
	    static defaultProps;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DatePickerDropdownConnected: React.ComponentClass<IDatePickerDropdownProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ISubNavigationOwnProps extends React.ClassAttributes<SubNavigation> {
	    id?: string;
	    items: ISubNavigationItem[];
	    defaultSelected?: string;
	}
	interface ISubNavigationStateProps {
	    selected?: string;
	}
	interface ISubNavigationDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onClickItem?: (id: string) => void;
	}
	interface ISubNavigationItem {
	    id: string;
	    label: string;
	    link?: string;
	}
	interface ISubNavigationProps extends ISubNavigationOwnProps, ISubNavigationStateProps, ISubNavigationDispatchProps {
	}
	class SubNavigation extends React.Component<ISubNavigationProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const SubNavigationConnected: React.ComponentClass<ISubNavigationProps>;

}
declare module ReactVapor {
	interface ITabActionPayload {
	    groupId: string;
	    id: string;
	}
	const TabAction: {
	    selectTab: string;
	    addTab: string;
	    removeTab: string;
	};
	const selectTab: (id: string, groupId?: string) => IReduxAction<ITabActionPayload>;
	const addTab: (id: string, groupId?: string) => IReduxAction<ITabActionPayload>;
	const removeTab: (id: string, groupId?: string) => IReduxAction<ITabActionPayload>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITabOwnProps {
	    groupId?: string;
	    id?: string;
	    title: string;
	}
	interface ITabStateProps {
	    isActive?: boolean;
	}
	interface ITabDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    onSelect?: () => void;
	}
	interface ITabProps extends ITabOwnProps, ITabStateProps, ITabDispatchProps {
	}
	class Tab extends React.Component<ITabProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    select(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TabConnected: React.ComponentClass<ITabProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITabContentProps {
	}
	class TabContent extends React.Component<ITabContentProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITabNavigationProps {
	}
	class TabNavigation extends React.Component<ITabNavigationProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITabPaneOwnProps {
	    groupId?: string;
	    id?: string;
	}
	interface ITabPaneStateProps {
	    isActive?: boolean;
	}
	interface ITabPaneDispatchProps {
	}
	interface ITabPaneProps extends ITabPaneOwnProps, ITabPaneStateProps, ITabPaneDispatchProps {
	}
	class TabPane extends React.Component<ITabPaneProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TabPaneConnected: React.ComponentClass<ITabPaneProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ILabelProps {
	    htmlFor?: string;
	    type?: string;
	    classes?: string[];
	    validMessage?: string;
	    invalidMessage?: string;
	}
	class Label extends React.Component<ILabelProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	class UUID {
	    static generate(): string;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IDeleteInputActionProps {
	    title?: string;
	    onClick: () => void;
	}
	class DeleteInputAction extends React.Component<IDeleteInputActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	class DeletableInput extends React.Component<IInputProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IAddInputActionProps {
	    title?: string;
	    onClick?: () => void;
	}
	class AddInputAction extends React.Component<IAddInputActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	class AddInput extends React.Component<IInputProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IMultilineInputValue {
	    id: string;
	    value: string;
	}
	interface IMultilineInputOwnProps {
	    id?: string;
	    placeholder?: string;
	    title?: string;
	}
	interface IMultilineInputStateProps {
	    values?: IMultilineInputValue[];
	}
	interface IMultilineInputDispatchProps {
	    onChange?: (values: IMultilineInputValue[]) => void;
	}
	interface IMultilineInputProps extends IMultilineInputOwnProps, IMultilineInputStateProps, IMultilineInputDispatchProps {
	}
	class MultilineInput extends React.Component<IMultilineInputProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ISelectedOptionProps {
	    value: string;
	    onRemoveClick?: (value: string) => void;
	    key: string;
	}
	class SelectedOption extends React.Component<ISelectedOptionProps, any> {
	    handleOnRemove(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IMultiselectInputProps {
	    selectedOptions: IDropdownOption[];
	    onRemoveClick?: (value: string) => void;
	    onRemoveAll?: () => void;
	    onFilterTextChange?: (filterText: string) => void;
	    onBlur?: () => void;
	    onFocus?: () => void;
	    onKeyDownFilterBox?: (e) => void;
	    filterPlaceholder?: string;
	    filterText?: string;
	    deselectAllTooltipText?: string;
	}
	class MultiselectInput extends React.Component<IMultiselectInputProps, any> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IMultiSelectDropdownSearchProps extends IDropdownSearchProps {
	    displayedOptions: IDropdownOption[];
	    selectedOptions: IDropdownOption[];
	}
	class MultiSelectDropdownSearch extends DropdownSearch {
	    static defaultProps;
	    protected getNoOptions(): JSX.Element[];
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const MultiSelectDropdownSearchConnected: React.ComponentClass<IDropdownSearchProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ISyncFeedbackProps {
	    feedback?: string;
	    state: string;
	}
	const SyncFeedbackState: {
	    SYNCING: string;
	    SUCCESS: string;
	    ERROR: string;
	    NONE: string;
	};
	const DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL: string;
	const DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL: string;
	const DEFAULT_SYNC_FEEDBACK_ERROR_LABEL: string;
	class SyncFeedback extends React.Component<ISyncFeedbackProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	class Radio extends Input {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IRadioSelectProps {
	    name?: string;
	    value?: string;
	    disabled?: boolean;
	    onChange?: (value: string) => void;
	    children?: React.ReactElement<Radio>[] | React.ReactElement<ToggleForm>[];
	}
	class RadioSelect extends React.Component<IRadioSelectProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IToastProps {
	    id?: string;
	    title?: string;
	    isOpened?: boolean;
	    type?: string;
	    dismiss?: number;
	    dismissible?: boolean;
	    animate?: boolean;
	    content?: ComponentContent;
	    onRender?: () => void;
	    onClose?: () => void;
	    onDestroy?: () => void;
	}
	const ToastType: {
	    Success: string;
	    Warning: string;
	    Error: string;
	};
	class Toast extends React.Component<IToastProps, {}> {
	    static defaultProps;
	    componentWillMount(): void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	interface IToastContainerActionPayload {
	    id: string;
	}
	interface IToastActionPayload {
	    containerId: string;
	    id?: string;
	}
	const ToastAction: {
	    addToast: string;
	    removeToast: string;
	    addToastContainer: string;
	    removeToastContainer: string;
	};
	interface IToastAddOptionalPayload {
	    dismiss?: number;
	    dismissible?: boolean;
	    type?: string;
	    animate?: boolean;
	    content?: ComponentContent;
	}
	interface IToastAddPayload extends IToastActionPayload, IToastAddOptionalPayload {
	    title: string;
	}
	const addToast: (containerId: string, title: string, optionals?: IToastAddOptionalPayload) => IReduxAction<IToastAddPayload>;
	const removeToast: (containerId: string, id: string) => IReduxAction<IToastActionPayload>;
	const addToastContainer: (id: string) => IReduxAction<IToastContainerActionPayload>;
	const removeToastContainer: (id: string) => IReduxAction<IToastContainerActionPayload>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IToastsState {
	    id: string;
	    toasts: IToastState[];
	}
	interface IToastState {
	    id: string;
	    title: string;
	    type?: string;
	    dismiss?: number;
	    dismissible?: boolean;
	    animate?: boolean;
	    content?: typeof React.Component | string | (() => JSX.Element);
	}
	const toastContainerInitialState: IToastsState;
	const toastInitialState: IToastState;
	const toastsContainerInitialState: IToastsState[];
	const toastContainerReducer: (state: IToastsState, action: IReduxAction<IToastContainerActionPayload>) => IToastsState;
	const toastsContainerReducer: (state: IToastsState[], action: IReduxAction<IToastContainerActionPayload>) => IToastsState[];

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IToastContainerOwnProps {
	    id?: string;
	    classes?: string[];
	    bottom?: boolean;
	    left?: boolean;
	    right?: boolean;
	}
	interface IToastContainerStateProps {
	    toasts?: IToastState[];
	}
	interface IToastContainerDispatchProps {
	    onDestroy?: () => void;
	    onRender?: () => void;
	    onCloseToast?: (id: string) => void;
	}
	interface IToastContainerProps extends IToastContainerOwnProps, IToastContainerStateProps, IToastContainerDispatchProps {
	}
	class ToastContainer extends React.Component<IToastContainerProps, {}> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const ToastContainerConnected: React.ComponentClass<IToastContainerProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITabsHeaderProps extends React.ClassAttributes<React.Component<any, any>> {
	    tabs?: ITabProps[];
	}
	const TabsHeader: (props: ITabsHeaderProps) => JSX.Element;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IHeaderWrapperProps extends ITabsHeaderProps, React.ClassAttributes<React.Component<any, any>> {
	    description?: string;
	    actions?: IContentProps[];
	    classes?: string[];
	}
	class HeaderWrapper extends React.Component<IHeaderWrapperProps, {}> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ILinkSvgProps extends React.ClassAttributes<LinkSvg> {
	    url?: string;
	    target?: string;
	    linkClasses?: string[];
	    svg?: ISvgProps;
	    tooltip?: ITooltipProps;
	}
	class LinkSvg extends React.Component<ILinkSvgProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITitleProps extends React.ClassAttributes<Title> {
	    prefix?: string;
	    text: string;
	    withTitleTooltip?: boolean;
	    documentationLink?: ILinkSvgProps;
	}
	class Title extends React.Component<ITitleProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IBreadcrumbLinkProps {
	    name: string;
	    link: string;
	}
	class BreadcrumbLink extends React.Component<IBreadcrumbLinkProps, {}> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IBreadcrumbProps extends React.ClassAttributes<Breadcrumb> {
	    links?: IBreadcrumbLinkProps[];
	    defaultLinkPath?: string;
	    title: ITitleProps;
	}
	class Breadcrumb extends React.Component<IBreadcrumbProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IBreadcrumbHeaderProps extends IHeaderWrapperProps, React.ClassAttributes<React.Component<any, any>> {
	    breadcrumb: IBreadcrumbProps;
	}
	class BreadcrumbHeader extends React.Component<IBreadcrumbHeaderProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IBasicHeaderProps extends IHeaderWrapperProps, React.ClassAttributes<React.Component<any, any>> {
	    title: ITitleProps;
	}
	class BasicHeader extends React.Component<IBasicHeaderProps, {}> {
	    static defaultProps;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	const DEFAULT_GROUP_ID: string;
	interface ITabState {
	    id: string;
	    isSelected: boolean;
	}
	interface ITabGroupState {
	    id: string;
	    tabs: ITabState[];
	}
	const tabInitialState: ITabState;
	const tabsInitialState: ITabState[];
	const tabGroupInitialState: ITabGroupState;
	const tabGroupsInitialState: ITabGroupState[];
	const tabReducer: (state: ITabState, action: IReduxAction<ITabActionPayload>) => ITabState;
	const tabsReducer: (state: ITabState[], action: IReduxAction<ITabActionPayload>) => ITabState[];
	const tabGroupReducer: (state: ITabGroupState, action: IReduxAction<ITabActionPayload>) => ITabGroupState;
	const tabGroupsReducer: (state: ITabGroupState[], action: IReduxAction<ITabActionPayload>) => ITabGroupState[];

}
declare module ReactVapor {
	interface IReactVaporState {
	    lastUpdatedComposite?: ILastUpdatedState[];
	    facets?: IFacetState[];
	    filters?: IFilterState[];
	    perPageComposite?: IPerPageState[];
	    paginationComposite?: IPaginationState[];
	    loadings?: ILoadingState[];
	    prompts?: IPromptState[];
	    actionBars?: IActionBarState[];
	    dropdowns?: IDropdownState[];
	    dropdownSearch?: IDropdownSearchState[];
	    flatSelect?: IFlatSelectState[];
	    rows?: ITableRowState[];
	    optionsCycles?: IOptionsCycleState[];
	    datePickers?: IDatePickerState[];
	    optionPickers?: IOptionPickerState[];
	    itemFilters?: IItemFilterState[];
	    modals?: IModalState[];
	    subNavigations?: ISubNavigationState[];
	    tabs?: ITabGroupState[];
	    toastContainers?: IToastsState[];
	    tableHeaderCells?: ITableHeaderCellsState;
	    tables?: ITablesState;
	}
	interface IReduxActionsPayload {
	    id?: string;
	    ids?: string[];
	    isCollapsible?: boolean;
	    facet?: string;
	    facetRow?: IFacet;
	    filterText?: string;
	    pageNb?: number;
	    perPage?: number;
	    options?: IInlinePromptOptions;
	    actions?: IActionOptions[];
	    currentOption?: number;
	    color?: string;
	    date?: Date;
	    calendarId?: string;
	    value?: string;
	    isRange?: boolean;
	    limit?: string;
	    item?: string;
	    label?: string;
	    selected?: string;
	    tableId?: string;
	    isInError?: boolean;
	    attributeToFormat?: string;
	    attributeToSort?: string;
	    initialTableData?: ITableData;
	    initialPerPage?: number;
	    tableStateModifier?: ITableStateModifier;
	    totalEntries?: number;
	    totalPages?: number;
	    addedSelectedOption?: IDropdownOption;
	    predicates?: ITablePredicate[];
	    shouldResetPage?: boolean;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const TriggerActionConnected: React.ComponentClass<ITriggerActionProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IPrimaryActionOwnProps extends React.ClassAttributes<PrimaryAction>, IBasicActionProps {
	    parentId?: string;
	}
	interface IPrimaryActionStateProps extends IReduxStatePossibleProps {
	}
	interface IPrimaryActionProps extends IPrimaryActionOwnProps, IPrimaryActionStateProps {
	}
	class PrimaryAction extends React.Component<IPrimaryActionProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const PrimaryActionConnected: React.ComponentClass<IPrimaryActionProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IActionsDropdownOwnProps extends React.ClassAttributes<ActionsDropdown> {
	    actions: IActionOptions[];
	    id?: string;
	    moreLabel?: string;
	}
	interface IActionsDropdownStateProps extends IReduxStatePossibleProps {
	    isOpened?: boolean;
	}
	interface IActionsDropdownProps extends IActionsDropdownOwnProps, IActionsDropdownStateProps {
	}
	const MORE_LABEL: string;
	class ActionsDropdown extends React.Component<IActionsDropdownProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const ActionsDropdownConnected: React.ComponentClass<IActionsDropdownProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ISecondaryActionsOwnProps extends React.ClassAttributes<SecondaryActions> {
	    actions: IActionOptions[];
	    id?: string;
	}
	interface ISecondaryActionsStateProps extends IReduxStatePossibleProps {
	}
	interface ISecondaryActionChildrenProps {
	    moreLabel?: string;
	}
	interface ISecondaryActionsProps extends ISecondaryActionsOwnProps, ISecondaryActionsStateProps, ISecondaryActionChildrenProps {
	}
	class SecondaryActions extends React.Component<ISecondaryActionsProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const SecondaryActionsConnected: React.ComponentClass<ISecondaryActionsProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface IItemFilterProps extends React.ClassAttributes<ItemFilter> {
	    label: string;
	    item: string;
	    itemTooltipProps?: ITooltipProps;
	    onClear: () => void;
	    crop?: number;
	}
	const ELLIPSIS: string;
	class ItemFilter extends React.Component<IItemFilterProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const DEFAULT_ACTIONS_CONTAINER_CLASSES: string[];
	interface IActionBarOwnProps extends React.ClassAttributes<ActionBar> {
	    id?: string;
	    itemFilterLabel?: string;
	    itemTooltipProps?: ITooltipProps;
	    onClearItemFilter?: () => void;
	    extraContainerClasses?: string[];
	    removeDefaultContainerClasses?: boolean;
	}
	interface IActionBarStateProps extends IReduxStatePossibleProps {
	    actions?: IActionOptions[];
	    prompt?: JSX.Element;
	    itemFilter?: string;
	    isLoading?: boolean;
	}
	interface IActionBarDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	    clearItemFilter?: () => void;
	}
	interface IActionBarChildrenProps {
	    moreLabel?: string;
	    itemFilterCropLength?: number;
	}
	interface IActionBarProps extends IActionBarOwnProps, IActionBarStateProps, IActionBarDispatchProps, IActionBarChildrenProps {
	}
	class ActionBar extends React.Component<IActionBarProps, any> {
	    static defaultProps;
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	interface IMemberAttributes {
	    email?: string;
	    sendEmail?: boolean;
	}
	const defaultMemberAttributes: IMemberAttributes;

}
declare module ReactVapor {
	const MemberEditionActionsType: {
	    ApplyChanges: string;
	    CancelChanges: string;
	    ChangeEmail: string;
	    ChangeSendEmail: string;
	    ToggleOpen: string;
	};
	interface IMemberEditionActionPayload {
	    id: string;
	}
	interface IChangeEmailPayload extends IMemberEditionActionPayload {
	    email: string;
	}
	interface IChangeSendEmailPayload extends IMemberEditionActionPayload {
	    sendEmail: boolean;
	}
	interface IToggleOpenPayload extends IMemberEditionActionPayload {
	    isOpen: boolean;
	}
	interface IMemberEditionActionsPayloads extends IMemberEditionActionPayload, IChangeEmailPayload, IChangeSendEmailPayload, IToggleOpenPayload {
	}
	const applyChanges: (id: string) => IReduxAction<IMemberEditionActionPayload>;
	const cancelChanges: (id: string) => IReduxAction<IMemberEditionActionPayload>;
	const changeEmail: (id: string, email: string) => IReduxAction<IChangeEmailPayload>;
	const changeSendEmail: (id: string, sendEmail: boolean) => IReduxAction<IChangeSendEmailPayload>;
	const toggleOpen: (id: string, isOpen: boolean) => IReduxAction<IToggleOpenPayload>;

}
declare module ReactVapor {
	const MembersActionsType: {
	    SetMembers: string;
	    AddMember: string;
	};
	interface ISetMembersPayload {
	    members: IMemberAttributes[];
	}
	interface IMembersActionsPayloads extends IMemberEditionActionsPayloads, ISetMembersPayload {
	}
	const setMembers: (members: IMemberAttributes[]) => IReduxAction<ISetMembersPayload>;
	const addMember: () => IReduxAction<any>;

}
declare module ReactVapor {
	interface IMemberEditionState {
	    id: string;
	    appliedState: IMemberAttributes;
	    editionState: IMemberAttributes;
	    isOpen: boolean;
	}
	const defaultMemberEditionState: IMemberEditionState;
	const memberEditionReducers: (state: IMemberEditionState, action: IReduxAction<IMemberEditionActionsPayloads>) => IMemberEditionState;

}
declare module ReactVapor {
	interface IMembersCompositeState {
	    addMemberState: IMemberEditionState;
	    members: IMemberEditionState[];
	}
	const membersReducers: (state: IMembersCompositeState, action: IReduxAction<IMembersActionsPayloads>) => IMembersCompositeState;

}
declare module ReactVapor {
	interface IReactVaporExampleState extends IReactVaporState {
	    membersCompositeState: IMembersCompositeState;
	    lastAction: Redux.Action;
	}
	const Reducers: Redux.Reducer<IReactVaporExampleState>;

}
declare module ReactVapor {
	const ReactVaporStore: Redux.Store<IReactVaporExampleState>;

}
declare module ReactVapor {
	interface IReactVaporTestState extends IReactVaporState {
	    lastAction?: Redux.Action;
	}
	class TestUtils {
	    static buildStore(): Redux.Store<{}>;
	    static randomDate(): Date;
	}
	const defaultSvgProps: ISvgProps;
	const defaultTooltipProps: ITooltipProps;

}
declare module ReactVapor {
	const tableOwnPropsMock: ITableProps;
	const tablePropsMock: ITableProps;
	const predictableData: IData;
	const dataById: {
	    [x: number]: {
	        [attribute: string]: any;
	        id: string;
	    };
	};
	const tablePropsMockWithData: any;
	const tablePossibleProps: any;

}
declare module "react-vapor" {
	export = ReactVapor;
}