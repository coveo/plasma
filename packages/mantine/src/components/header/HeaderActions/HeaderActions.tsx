import {CompoundStylesApiProps, Factory, Group, GroupProps, factory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {useHeaderContext} from '../Header.context';

export type HeaderActionsStyleNames = 'actions';

export interface HeaderActionsProps
    extends Omit<GroupProps, 'classNames' | 'styles' | 'vars' | 'children'>,
        CompoundStylesApiProps<HeaderActionsFactory> {
    children: ReactNode;
}

export type HeaderActionsFactory = Factory<{
    props: HeaderActionsProps;
    ref: HTMLDivElement;
    stylesNames: HeaderActionsStyleNames;
    compound: true;
}>;

const defaultProps: Partial<HeaderActionsProps> = {
    gap: 'sm',
};

export const HeaderActions = factory<HeaderActionsFactory>((_props, ref) => {
    const props = useProps('HeaderActions', defaultProps, _props);
    const {gap, className, classNames, styles, style, children, vars, ...others} = props;
    const ctx = useHeaderContext();

    return (
        <Group
            ref={ref}
            gap={gap}
            {...ctx.getStyles('actions', {className, style, classNames, styles, props})}
            {...others}
        >
            {children}
        </Group>
    );
});
