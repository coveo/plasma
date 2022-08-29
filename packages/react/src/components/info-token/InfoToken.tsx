import {svg, SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

import {Svg} from '../svg';

export enum InfoTokenType {
    Information,
    Success,
    Warning,
    Critical,
    Tip,
    Question,
}

export enum InfoTokenSize {
    Small,
    Medium,
    Large,
}

export enum InfoTokenMode {
    Stroked,
    Filled,
}

export interface InfoTokenProps {
    type: InfoTokenType;
    size: InfoTokenSize;
    mode: InfoTokenMode;
    svgClassName?: string;
    className?: string;
}

const SvgMapping: Record<InfoTokenType, Record<InfoTokenSize, SvgName>> = {
    [InfoTokenType.Information]: {
        [InfoTokenSize.Small]: svg.infoStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.infoStrokedMedium.name,
        [InfoTokenSize.Large]: svg.infoStrokedLarge.name,
    },
    [InfoTokenType.Success]: {
        [InfoTokenSize.Small]: svg.checkStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.checkStrokedMedium.name,
        [InfoTokenSize.Large]: svg.checkStrokedLarge.name,
    },
    [InfoTokenType.Warning]: {
        [InfoTokenSize.Small]: svg.warningStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.warningStrokedMedium.name,
        [InfoTokenSize.Large]: svg.warningStrokedLarge.name,
    },
    [InfoTokenType.Critical]: {
        [InfoTokenSize.Small]: svg.criticalStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.criticalStrokedMedium.name,
        [InfoTokenSize.Large]: svg.criticalStrokedLarge.name,
    },
    [InfoTokenType.Tip]: {
        [InfoTokenSize.Small]: svg.ideaStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.ideaStrokedMedium.name,
        [InfoTokenSize.Large]: svg.ideaStrokedLarge.name,
    },
    [InfoTokenType.Question]: {
        [InfoTokenSize.Small]: svg.questionStrokedSmall.name,
        [InfoTokenSize.Medium]: svg.questionStrokedMedium.name,
        [InfoTokenSize.Large]: svg.questionStrokedLarge.name,
    },
};

const TypeColorMapping: Record<InfoTokenType, string> = {
    [InfoTokenType.Information]: 'mod-info',
    [InfoTokenType.Success]: 'mod-success',
    [InfoTokenType.Warning]: 'mod-warning',
    [InfoTokenType.Critical]: 'mod-error',
    [InfoTokenType.Tip]: 'mod-success',
    [InfoTokenType.Question]: 'mod-info',
};

const SizeClassMapping: Record<InfoTokenSize, string> = {
    [InfoTokenSize.Small]: 'mod-16',
    [InfoTokenSize.Medium]: 'mod-24',
    [InfoTokenSize.Large]: 'mod-32',
};

const ModeClassMapping: Record<InfoTokenMode, string> = {
    [InfoTokenMode.Stroked]: 'stroked',
    [InfoTokenMode.Filled]: 'filled',
};

/**
 * @deprecated Use Mantine instead
 */
export const InfoToken: FunctionComponent<InfoTokenProps> = ({mode, size, type, className, svgClassName}) => (
    <Svg
        className={classNames('info-token', ModeClassMapping[mode], SizeClassMapping[size], className)}
        svgName={SvgMapping[type][size]}
        svgClass={classNames('icon mod-stroke', SizeClassMapping[size], TypeColorMapping[type], svgClassName)}
    />
);
