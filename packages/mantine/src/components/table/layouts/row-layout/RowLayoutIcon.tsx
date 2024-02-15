import {Icon as IconType, ListSize16Px} from '@coveord/plasma-react-icons';
import {factory, Factory, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {useRowLayout} from './RowLayoutContext';

export type RowLayoutIconStylesNames = 'icon';
export interface RowLayoutIconProps extends CompoundStylesApiProps<RowLayoutIconFactory> {
    icon: IconType;
}

export type RowLayoutIconFactory = Factory<{
    props: RowLayoutIconProps;
    ref: SVGSVGElement;
    stylesNames: RowLayoutIconStylesNames;
    compound: true;
}>;

const defaultProps: Partial<RowLayoutIconProps> = {
    icon: ListSize16Px,
};

export const RowLayoutIcon = factory<RowLayoutIconFactory>((props, ref) => {
    const ctx = useRowLayout();
    const {icon: Icon, classNames, styles} = useProps('RowLayoutIcon', defaultProps, props);

    return <Icon ref={ref} {...ctx.getStyles('icon', {styles, classNames})} />;
});
