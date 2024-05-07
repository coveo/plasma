import {Icon as IconType, ListSize16Px} from '@coveord/plasma-react-icons';
import {CompoundStylesApiProps, Factory, factory, useProps} from '@mantine/core';

export interface RowLayoutIconProps extends CompoundStylesApiProps<RowLayoutIconFactory> {
    icon: IconType;
}

export type RowLayoutIconFactory = Factory<{
    props: RowLayoutIconProps;
    ref: SVGSVGElement;
    compound: true;
}>;

const defaultProps: Partial<RowLayoutIconProps> = {
    icon: ListSize16Px,
};

export const RowLayoutIcon = factory<RowLayoutIconFactory>((props, ref) => {
    const {icon: Icon} = useProps('RowLayoutIcon', defaultProps, props);

    return <Icon ref={ref} />;
});
