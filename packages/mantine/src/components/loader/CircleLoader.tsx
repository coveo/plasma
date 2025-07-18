import {Box, MantineLoaderComponent} from '@mantine/core';
import cx from 'clsx';
import {forwardRef} from 'react';
import classes from './CircleLoader.module.css';

export const CircleLoader: MantineLoaderComponent = forwardRef(({className, ...others}, ref) => (
    <Box component="span" className={cx(classes.root, className)} {...others} ref={ref} />
));
