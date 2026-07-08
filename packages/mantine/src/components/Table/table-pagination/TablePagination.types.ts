export interface TablePaginationProps {
    /**
     * The callback if the current page is changed.
     *
     * @param page The zero-based index of the updated page.
     */
    onPageChange?: (page: number) => void;
}
