import {Group, GroupProps, useProps} from '@mantine/core';
import cx from 'clsx';
import {FunctionComponent} from 'react';
import HeaderActionsClasses from './HeaderActions.module.css';

export interface HeaderActionsProps extends GroupProps {
    children: React.ReactNode;
}

const defaultProps: Partial<HeaderActionsProps> = {
    gap: 'sm',
};

export const HeaderActions: FunctionComponent<HeaderActionsProps> = ({children}, props: HeaderActionsProps) => {
    const {gap, className, ...others} = useProps('HeaderActions', defaultProps, props);

    return (
        <Group gap={gap} className={cx(className, HeaderActionsClasses.root)} {...others}>
            {children}
        </Group>
    );
};
