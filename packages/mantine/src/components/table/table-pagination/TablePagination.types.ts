export interface TablePaginationProps {
    /**
     * The total number of page. Use null only if your table is paginated client side
     */
    totalPages: number | null;
    /**
     * The callback if the current page is changed.
     *
     * @param pageIndex The index of the updated page.
     */
    onPageChange?: (pageIndex: number) => void;
}
