import {BaseTextFieldProps, Box, Grid} from '@mui/material';
import {ReactNode} from 'react';
import {lightBackgroundTheme} from '../theme/MuiTheme';

interface FormLayoutProps extends BaseTextFieldProps {
    left?: ReactNode;
    noLeftPadding?: boolean;
    right?: ReactNode;
    noRightPadding?: boolean;
    bottom?: ReactNode;
}

export const FormLayout = (props: FormLayoutProps) => (
    <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <Grid container sx={{flex: 1, flexGrow: 1}}>
            {props.left && (
                <Grid item xs={6} sx={{...(props.noLeftPadding ? {} : {px: 3, py: 1})}}>
                    {props.left}
                </Grid>
            )}
            {props.right && (
                <Grid
                    item
                    xs={6}
                    sx={{
                        borderLeft: 1,
                        borderLeftColor: 'primary_gray.main',
                        ...(props.noRightPadding ? {} : {px: 3, py: 1}),
                    }}
                >
                    {props.right}
                </Grid>
            )}
        </Grid>
        <Box
            sx={{
                flex: 0,
                position: 'sticky',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: lightBackgroundTheme.palette.background,
                // Bit of a hack here, but there seems to be an issue setting borderTop and borderTopColor (only half makes it to CSS)
                'border-top': `1px solid ${lightBackgroundTheme.palette['primary_gray'].main}`,
            }}
        >
            {props.bottom && (
                <Box
                    sx={{
                        px: 5,
                        py: 1,
                    }}
                >
                    {props.bottom}
                </Box>
            )}
        </Box>
    </Box>
);
