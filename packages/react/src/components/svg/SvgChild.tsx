import * as React from 'react';
import {ISvgProps, Svg} from './Svg';

export interface SvgChildStandardProps extends ISvgProps {
    svgChild?: never;
}

export interface SvgChildCustomProps {
    /**
     * A custom svg element. Should only be used if the svg doesn't exist in the Iconography
     */
    svgChild: React.ReactNode;
    svgName?: never;
    svgClass?: never;
}

/**
 * Extend this type when you want to have either a svgChild or a svgName (and other svg props)
 */
export type SvgChildProps = SvgChildStandardProps | SvgChildCustomProps;

/**
 * Use this interface instead of SvgChildProps when the Svg in your component is optional
 */
export interface OptionalSvgChildProps extends Partial<ISvgProps> {
    svgChild?: React.ReactNode;
}

export const isCustomSvgChild = (x: SvgChildProps): x is SvgChildCustomProps =>
    (x as SvgChildCustomProps).svgChild !== undefined;

export const SvgChild: React.FunctionComponent<OptionalSvgChildProps> = ({
    svgChild,
    svgName,
    svgClass,
    ...svgProps
}) => {
    if (!svgChild && !svgName) {
        return null;
    }

    if (isCustomSvgChild({svgChild})) {
        return <>{svgChild}</>;
    }

    return <Svg svgName={svgName} svgClass={svgClass} {...svgProps} />;
};
