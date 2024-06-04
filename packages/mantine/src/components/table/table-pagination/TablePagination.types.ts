export interface TablePaginationProps {
    /**
     * The callback if the current page is changed.
     *
     * @param pageIndex The index of the updated page.
     */
    onPageChange?: (pageIndex: number) => void;
}
