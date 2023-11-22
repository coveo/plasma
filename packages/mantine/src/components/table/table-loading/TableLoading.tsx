import {Skeleton, SkeletonProps} from '@mantine/core';
import {FunctionComponent} from 'react';

export const TableLoading: FunctionComponent<SkeletonProps> = (props) => (
    <Skeleton {...props} sx={!props.visible ? {borderRadius: 0} : undefined}>
        {props.children}
    </Skeleton>
);
