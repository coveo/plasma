import {CompoundStylesApiProps, Factory, Group, GroupProps, factory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {useHeaderContext} from '../Header.context.js';

export type HeaderRightStyleNames = 'right';

export interface HeaderRightProps
    extends Omit<GroupProps, 'classNames' | 'styles' | 'vars' | 'children'>,
        CompoundStylesApiProps<HeaderRightFactory> {
    children: ReactNode;
}

export type HeaderRightFactory = Factory<{
    props: HeaderRightProps;
    ref: HTMLDivElement;
    stylesNames: HeaderRightStyleNames;
    compound: true;
}>;

const defaultProps: Partial<HeaderRightProps> = {
    gap: 'sm',
};

export const HeaderRight = factory<HeaderRightFactory>((_props, ref) => {
    const props = useProps('HeaderRight', defaultProps, _props);
    const {gap, className, classNames, styles, style, children, vars, ...others} = props;
    const ctx = useHeaderContext();

    return (
        <Group
            ref={ref}
            gap={gap}
            {...ctx.getStyles('right', {className, style, classNames, styles, props})}
            {...others}
        >
            {children}
        </Group>
    );
});
