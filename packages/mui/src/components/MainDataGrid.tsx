import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import TextField, {StandardTextFieldProps} from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
    DataGrid,
    DataGridProps,
    gridPageCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    GridValidRowModel,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import {useState} from 'react';

interface ToolbarProps {
    actions?: JSX.Element[];
    filters?: JSX.Element[];
}

const Toolbar = ({actions, filters}: ToolbarProps) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 4,
            px: 4,
            py: 1,
            backgroundColor: 'primary_gray.light',
            borderBottom: 1,
            borderBottomColor: 'primary_gray.dark',
        }}
    >
        {actions && <Box sx={{display: 'flex', gap: 4}}>{actions}</Box>}
        {filters && <Box sx={{display: 'flex', gap: 4}}>{filters}</Box>}
    </Box>
);

interface FooterProps {
    lastUpdate?: Date;
}

const Footer = ({lastUpdate}: FooterProps) => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

    return (
        <Box
            sx={{
                borderTop: 1,
                borderColor: 'primary_gray.main',
                px: 5,
                py: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{flex: 1, display: 'flex', alignItems: 'center', gap: 2}}>
                    <Typography variant="subtitle2">Results per page</Typography>
                    {[25, 50, 100].map((s) => (
                        <Button
                            key={s}
                            color="primary"
                            size="small"
                            variant={pageSize === s ? 'contained' : 'outlined'}
                            onClick={() => apiRef.current.setPageSize(s)}
                            sx={{px: 2, py: 1, minWidth: 40}}
                        >
                            {s}
                        </Button>
                    ))}
                </Box>
                <Pagination
                    color="primary"
                    shape="rounded"
                    size="large"
                    count={pageCount}
                    page={page + 1}
                    onChange={(event, value) => apiRef.current.setPage(value - 1)}
                />
            </Box>
            {lastUpdate != null && (
                <Box sx={{display: 'flex', justifyContent: 'flex-end', px: 2}}>
                    <Typography variant="caption" sx={{color: 'primary_gray.dark'}}>
                        Last update: {lastUpdate.toLocaleTimeString()}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

interface MainDataGridProps<R> extends DataGridProps<R> {
    actions?: JSX.Element[];
    filters?: JSX.Element[];
    lastUpdate?: Date;
}

export const MainDataGrid = <R extends GridValidRowModel = any>({
    actions,
    filters,
    lastUpdate,
    components,
    sx,
    ...rest
}: MainDataGridProps<R>) => (
    <DataGrid
        components={{
            Toolbar: () => Toolbar({actions, filters}),
            Footer: () => Footer({lastUpdate}),
            ...components,
        }}
        sx={{
            border: 0,
            '& .MuiDataGrid-columnHeader:first-of-type': {
                paddingLeft: 5,
            },
            '& .MuiDataGrid-columnHeader:last-child': {
                paddingRight: 5,
            },
            '& .MuiDataGrid-cell:first-of-type': {
                paddingLeft: 5,
            },
            '& .MuiDataGrid-cell:last-child': {
                paddingRight: 5,
            },
            '& .MuiDataGrid-columnHeaderTitle': {
                fontSize: 13,
                fontWeight: 400,
                color: 'primary_gray.text',
            },
            ...sx,
        }}
        {...rest}
    />
);

interface MainDataGridSelectFilterProps extends StandardTextFieldProps {
    filters: Array<{value: string; caption: string}>;
    onFilterChange?: (filter: string | undefined) => void;
}

const FILTER_ALL = '__ALL__';

export const MainDataGridTableSelectFilter = ({
    filters,
    onFilterChange,
    label,
    InputProps,
    ...rest
}: MainDataGridSelectFilterProps) => {
    const [selectedFilter, setSelectedFilter] = useState(FILTER_ALL);

    return (
        <TextField
            select
            variant="outlined"
            size="small"
            InputProps={{
                startAdornment: <InputAdornment position="start">{label}:</InputAdornment>,
                ...InputProps,
            }}
            value={selectedFilter}
            onChange={(e) => {
                setSelectedFilter(e.target.value);
                onFilterChange && onFilterChange(e.target.value !== FILTER_ALL ? e.target.value : undefined);
            }}
            {...rest}
        >
            <MenuItem key={FILTER_ALL} value={FILTER_ALL}>
                All
            </MenuItem>
            {filters.map((f) => (
                <MenuItem key={f.value} value={f.value}>
                    {f.caption}
                </MenuItem>
            ))}
        </TextField>
    );
};

interface MainDataGridFreeTextFilterProps extends StandardTextFieldProps {
    onFilterChange?: (filter: string | undefined) => void;
}

export const MainDataGridFreeTextFilter = ({onFilterChange, InputProps, ...rest}: MainDataGridFreeTextFilterProps) => {
    const [filter, setFilter] = useState('');

    return (
        <TextField
            variant="outlined"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <FilterAltIcon />
                    </InputAdornment>
                ),
                ...InputProps,
            }}
            value={filter}
            onChange={(e) => {
                setFilter(e.target.value);
                onFilterChange && onFilterChange(e.target.value !== '' ? e.target.value : undefined);
            }}
            {...rest}
        />
    );
};
