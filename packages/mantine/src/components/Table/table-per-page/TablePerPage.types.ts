export interface TablePerPageProps {
    /**
     * The label displayed before the control
     *
     * @default Results per page
     */
    label?: string;
    /**
     * The per page choices to display
     *
     * @default [25, 50, 100]
     */
    values?: number[];
    /**
     * The callback if the entries per page is changed.
     *
     * @param perPage the new number of entries per page
     */
    onPerPageChange?: (perPage: number) => void;
}
