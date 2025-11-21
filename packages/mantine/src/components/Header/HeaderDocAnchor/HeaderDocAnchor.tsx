import {
    Anchor,
    AnchorProps,
    CompoundStylesApiProps,
    Factory,
    Tooltip,
    TooltipProps,
    factory,
    useProps,
} from '@mantine/core';
import {ReactNode} from 'react';
import {useHeaderContext} from '../Header.context.js';
import {InfoToken} from '../../InfoToken/InfoToken.js';

export type HeaderDocAnchorStyleNames = 'docAnchorTooltip' | 'docAnchor';

export interface HeaderDocAnchorProps
    extends Pick<TooltipProps, 'position'>,
        CompoundStylesApiProps<HeaderDocAnchorFactory>,
        Omit<AnchorProps, 'classNames' | 'styles' | 'variant' | 'vars'> {
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    href: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    label?: ReactNode;
    /**
     * React component to add the tooltip and anchor on
     */
    children?: ReactNode;
}

export type HeaderDocAnchorFactory = Factory<{
    props: HeaderDocAnchorProps;
    ref: HTMLAnchorElement;
    stylesNames: HeaderDocAnchorStyleNames;
    compound: true;
}>;

const defaultProps: Partial<HeaderDocAnchorProps> = {
    position: 'right',
    children: <InfoToken variant="question" />,
};

export const HeaderDocAnchor = factory<HeaderDocAnchorFactory>((_props, ref) => {
    const props = useProps('PlasmaHeaderActions', defaultProps, _props);
    const {className, classNames, styles, style, children, label, position, vars, ...others} = props;

    const ctx = useHeaderContext();

    return (
        <Tooltip
            label={label}
            disabled={!label}
            position={position}
            classNames={{tooltip: ctx.getStyles('docAnchorTooltip', {classNames, styles, props}).className}}
        >
            <Anchor
                ref={ref}
                inline
                target="_blank"
                {...ctx.getStyles('docAnchor', {classNames, styles, props, style, className})}
                {...others}
            >
                {children}
            </Anchor>
        </Tooltip>
    );
});
