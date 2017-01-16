declare module ReactVapor {
	/// <reference types="jquery" />
	/// <reference types="chosen" />
	/// <reference types="react" />
	/// <reference types="bootstrap" />
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
	    /**
	     * HACK: Since we cannot overrdide onChange method signature (provided by React.HTMLProps<HTMLSelectElement>), since onChange is
	     * required by React when a value has been specified (component becomes "controlled") and because chosen does not trigger the change
	     * event on the <select> and foces us to use jQuery, we added a onChosenChange prop and faked the onChange prop.
	     * @returns {JSX.Element | null}
	     */
	    render(): JSX.Element;
	}

}
/// <reference types="tether" />

declare class TetherComponent extends React.Component<TetherComponent.ITetherComponentProps, any> {
  props: TetherComponent.ITetherComponentProps;

  static propTypes: TetherComponent.ITetherComponentProps;

  static defaultProps: {
    renderElementTag: string;
    renderElementTo: any;
  };

  componentDidMount(): void;

  componentDidUpdate(prevProps: any): void;

  componentWillUnmount(): void;

  getTetherInstance(): Tether;

  disable(): void;

  enable(): void;

  on(event: any, handler: any, ctx?: any): void;

  once(event: any, handler: any, ctx?: any): void;

  off(event: any, handler: any): void;

  position(): void;

  render(): any;
}

declare namespace TetherComponent {
  interface ITetherComponentProps {
    renderElementTag?: string;
    renderElementTo?: Element | string;
    attachment: string;
    targetAttachment?: string;
    offset?: string;
    targetOffset?: string;
    targetModifier?: string;
    enabled?: boolean;
    classes?: any;
    classPrefix?: string;
    optimizations?: Object;
    constraints?: any[];
    id?: string;
    className?: string;
    style?: Object;
    onUpdate?: Function;
    onRepositioned?: Function;
    children?: [React.ReactNode, boolean | React.ReactNode];
  }
}

declare module ReactVapor {
  
}
declare module ReactVapor {
	/// <reference path="../../../../../types/react-tether/index.d.ts" />
	/// <reference types="react" />
	interface IPopoverProps extends TetherComponent.ITetherComponentProps, React.ClassAttributes<Popover> {
	    children?: [React.ReactNode, React.ReactNode];
	    /**
	     * Optionnal, use it to specify the isOpen state of the Popover.
	     * @default: false
	     */
	    isOpen?: boolean;
	    /**
	     * Optionnal, a callback fired when the Popover wishes to change visibility. Called with the requested `isOpen` value. Use this prop if
	     * you want to control the Popover state. Let it undefined if you want the Popover to control his state itself.
	     */
	    onToggle?: (isOpen: boolean) => void;
	}
	interface IPopoverState {
	    isOpen: boolean;
	}
	class Popover extends React.Component<IPopoverProps, IPopoverState> {
	    static propTypes: any;
	    constructor(props: IPopoverProps, state: IPopoverState);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	    toggleOpened(isOpen: boolean): void;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	/**
	 * Pass the required svgName to get your svg.
	 * Use svgClass to pass the svg fill class (and the icon class if you didn't pass is as className).
	 */
	interface ISvgProps extends React.HTMLProps<Svg> {
	    svgClass?: string;
	    svgName: string;
	}
	class Svg extends React.Component<ISvgProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITooltipProps extends React.HTMLProps<Tooltip> {
	    animation?: boolean;
	    container?: string | boolean;
	    delay?: number | Object;
	    html?: boolean;
	    placement?: string | Function;
	    selector?: string;
	    template?: string;
	    title: string;
	    trigger?: string;
	    viewport?: string | Function | Object;
	}
	/**
	 * Simple react component wrapping Bootstrap jQuery tooltip. Include CoveoStyleGuide.Dependencies.js in order for this to work.
	 */
	class Tooltip extends React.Component<ITooltipProps, any> {
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

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
	/// <reference types="jquery" />
	class ReduxUtils {
	    static mergeProps(stateProps: any, dispatchProps: any, ownProps: any): any;
	}
	const CommonActions: {
	    clearState: string;
	};
	const clearState: () => Redux.Action;
	function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any;
	interface IReduxAction<T> extends Redux.Action {
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
	    id: string;
	    filterPlaceholder?: string;
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
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
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
	class Facet extends React.Component<IFacetProps, any> {
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
	/// <reference types="react" />
	interface IConfirmButtonLabel {
	    cancel: string;
	    confirm: string;
	}
	interface IConfirmData {
	    confirmType: string;
	    buttonLabels?: IConfirmButtonLabel;
	}
	interface IActionOptions {
	    enabled: boolean;
	    primary?: boolean;
	    icon?: string;
	    iconClass?: string;
	    name?: string;
	    id?: string;
	    unrepeatable?: boolean;
	    callOnDoubleClick?: boolean;
	    trigger?: () => void;
	    requiresConfirmation?: IConfirmData;
	    link?: string;
	    target?: string;
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
	interface IActionBarState {
	    id: string;
	    actions: IActionOptions[];
	}
	const actionBarInitialState: IActionBarState;
	const actionBarsInitialState: IActionBarState[];
	const actionBarReducer: (state: IActionBarState, action: IReduxAction<IReduxActionsPayload>) => IActionBarState;
	const actionBarsReducer: (state: IActionBarState[], action: IReduxAction<IReduxActionsPayload>) => IActionBarState[];

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
	const TableRowActions: {
	    add: string;
	    remove: string;
	    toggle: string;
	};
	interface ITableRowActionPayload {
	    id: string;
	}
	const addRow: (id: string) => IReduxAction<ITableRowActionPayload>;
	const removeRow: (id: string) => IReduxAction<ITableRowActionPayload>;
	const toggleRow: (id: string) => IReduxAction<ITableRowActionPayload>;

}
declare module ReactVapor {
	interface ITableRowState {
	    id: string;
	    opened: boolean;
	}
	const tableRowInitialState: ITableRowState;
	const tableRowsInitialState: ITableRowState[];
	const tableRowReducer: (state: ITableRowState, action: IReduxAction<IReduxActionsPayload>) => ITableRowState;
	const tableRowsReducer: (state: ITableRowState[], action: IReduxAction<IReduxActionsPayload>) => ITableRowState[];

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
	    rows?: ITableRowState[];
	}
	interface IReduxActionsPayload {
	    id?: string;
	    ids?: string[];
	    facet?: string;
	    facetRow?: IFacet;
	    filterText?: string;
	    pageNb?: number;
	    perPage?: number;
	    options?: IInlinePromptOptions;
	    actions?: IActionOptions[];
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const LastUpdatedConnected: React.ComponentClass<ILastUpdatedProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const FacetConnected: React.ComponentClass<IFacetProps>;

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
	}
	interface INavigationPerPageDispatchProps {
	    onRender?: (perPageNb: number) => void;
	    onDestroy?: () => void;
	    onPerPageClick?: (perPageNb: number) => void;
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
	    currentPage?: number;
	    currentPerPage?: number;
	    onPageClick?: (pageNb: number) => void;
	    perPageLabel?: string;
	    perPageNumbers?: number[];
	    onPerPageClick?: () => void;
	}
	interface INavigationStateProps extends IReduxStatePossibleProps {
	    isLoading?: boolean;
	}
	interface INavigationProps extends INavigationOwnProps, INavigationChildrenProps, INavigationStateProps {
	}
	class Navigation extends React.Component<INavigationProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const NavigationConnected: React.ComponentClass<INavigationProps>;

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
	interface ILinkActionProps extends React.ClassAttributes<LinkAction>, IBasicActionProps {
	}
	class LinkAction extends React.Component<ILinkActionProps, any> {
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
	}
	interface ITriggerActionProps extends ITriggerActionOwnProps, ITriggerActionDispatchProps {
	}
	const CONFIRM_LABEL: string;
	class TriggerAction extends React.Component<ITriggerActionProps, any> {
	    render(): JSX.Element;
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
	interface IActionBarOwnProps extends React.ClassAttributes<ActionBar> {
	    id?: string;
	}
	interface IActionBarStateProps extends IReduxStatePossibleProps {
	    actions?: IActionOptions[];
	    prompt?: JSX.Element;
	}
	interface IActionBarDispatchProps {
	    onRender?: () => void;
	    onDestroy?: () => void;
	}
	interface IActionBarChildrenProps {
	    moreLabel?: string;
	}
	interface IActionBarProps extends IActionBarOwnProps, IActionBarStateProps, IActionBarDispatchProps, IActionBarChildrenProps {
	}
	class ActionBar extends React.Component<IActionBarProps, any> {
	    componentWillMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	const InlinePromptConnected: React.ComponentClass<IInlinePromptProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	const ActionBarConnected: React.ComponentClass<IActionBarProps>;

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableHeaderCellProps extends React.ClassAttributes<TableHeaderCell> {
	    title: string;
	    className?: string;
	}
	class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {
	    render(): JSX.Element;
	}

}
declare module ReactVapor {
	/// <reference types="react" />
	interface ITableHeaderProps extends React.ClassAttributes<TableHeader> {
	    columns: ITableHeaderCellProps[];
	    headerClass?: string;
	}
	class TableHeader extends React.Component<ITableHeaderProps, any> {
	    render(): JSX.Element;
	}

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
	    isCollapsible: boolean;
	}
	interface ITableHeadingRowStateProps {
	    opened?: boolean;
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
	/// <reference types="react" />
	const TableCollapsibleRowConnected: React.ComponentClass<ITableCollapsibleRowProps>;

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
	class TestUtils {
	    static buildStore(): Redux.Store<{}>;
	    static randomDate(): Date;
	}

}
declare module "react-vapor" {
	export = ReactVapor;
}