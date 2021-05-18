import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch} from '../../utils/ReduxUtils';
import {InputConnected} from '../input';
import {changeInputValue} from '../input/InputActions';
import {InputSelectors} from '../input/InputSelectors';
import {Svg} from '../svg';

export interface LimitOwnProps {
    id?: string;
    title: string;
    limitLabel?: string;
    className?: string;
    usage?: number;
    limit?: number;
    isLimitEditable?: boolean;
    isLimitTheGoalToReach?: boolean;
    isHistoryIncluded?: boolean;
}

const mapStateToProps = (state: IReactVaporState, {id, limit}: LimitOwnProps) => {
    const ownLimit: number = limit ?? 100;
    const currentLimit: number = +InputSelectors.getValue(state, {id}) || ownLimit;
    return {
        currentLimit,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, {id}: LimitOwnProps) => ({
    onChangeLimit: (limitValue: string) => {
        dispatch(changeInputValue(id, limitValue, true));
    },
});

export interface LimitProps
    extends LimitOwnProps,
        ReturnType<typeof mapDispatchToProps>,
        ReturnType<typeof mapStateToProps> {}

type ContentProps = Pick<LimitProps, 'id' | 'usage' | 'limit' | 'isLimitEditable' | 'limitLabel' | 'onChangeLimit'>;
type UsageContentProps = Pick<ContentProps, 'usage'>;
type LimitContentProps = Pick<
    ContentProps,
    'id' | 'limit' | 'usage' | 'isLimitEditable' | 'limitLabel' | 'onChangeLimit'
>;
type HeaderProps = Pick<LimitProps, 'limitLabel' | 'isHistoryIncluded'>;
type HistoryIconProps = Pick<HeaderProps, 'isHistoryIncluded'>;
type ProgressBarProps = Pick<LimitProps, 'usage' | 'isLimitTheGoalToReach' | 'limit'>;

const LimitDisconnect: React.FunctionComponent<LimitProps> = ({
    id,
    title,
    limitLabel = 'Limit',
    usage,
    limit = 100,
    currentLimit,
    isLimitEditable = false,
    isLimitTheGoalToReach = false,
    isHistoryIncluded = false,
    onChangeLimit,
    className,
}) => (
    <div className={classNames('limit-box mb2', className)}>
        <div className="limit-box-main p2 pb1">
            <HeaderDivision limitLabel={title} isHistoryIncluded={isHistoryIncluded} />
            <ContentDivision
                id={id}
                usage={usage}
                limit={limit}
                isLimitEditable={isLimitEditable}
                limitLabel={limitLabel}
                onChangeLimit={onChangeLimit}
            />
        </div>
        <ProgressBar usage={usage} isLimitTheGoalToReach={isLimitTheGoalToReach} limit={currentLimit} />
    </div>
);

const HeaderDivision: React.FunctionComponent<HeaderProps> = ({limitLabel, isHistoryIncluded}) => (
    <div className="flex space-between">
        <label className="form-control-label"> {limitLabel}</label>
        <HistoryIcon isHistoryIncluded={isHistoryIncluded} />
    </div>
);

const HistoryIcon: React.FunctionComponent<HistoryIconProps> = ({isHistoryIncluded}) =>
    isHistoryIncluded && (
        <span className="icon mod-lg limit-history-button">
            <Svg svgName={VaporSVG.svg.menuAnalytics.name} />
        </span>
    );

const ContentDivision: React.FunctionComponent<ContentProps> = ({
    id,
    usage,
    limit,
    isLimitEditable,
    limitLabel,
    onChangeLimit,
}) => (
    <div className="limit-box-numbers pt1 flex">
        <UsageDivision usage={usage} />
        <LimitDivision
            id={id}
            onChangeLimit={onChangeLimit}
            usage={usage}
            limit={limit}
            isLimitEditable={isLimitEditable}
            limitLabel={limitLabel}
        />
    </div>
);

const UsageDivision: React.FunctionComponent<UsageContentProps> = ({usage}) => {
    const isUsageRequired: boolean = !!usage;
    return (
        isUsageRequired && (
            <div className="limit-box-usage">
                <label className="form-control-label">Usage</label>
                <span className="limit-box-usage-value">{usage}</span>
            </div>
        )
    );
};

const LimitDivision: React.FunctionComponent<LimitContentProps> = ({
    id,
    limit,
    usage,
    isLimitEditable,
    limitLabel,
    onChangeLimit,
}) => {
    const limitValueString: string = limit.toString();
    const minLimitValue: number = usage ?? 0;
    return isLimitEditable ? (
        <InputConnected
            id={id}
            type="number"
            labelTitle={limitLabel}
            defaultValue={limitValueString}
            min={minLimitValue}
            classes="limit-box-limit form-group input-field validate"
            onChange={(limitValue: string) => onChangeLimit(limitValue)}
        />
    ) : (
        <div className="limit-box-limit">
            <label className="form-control-label">{limitLabel}</label>
            <span className="limit-box-limit-value">{limit}</span>
        </div>
    );
};

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({usage, isLimitTheGoalToReach, limit}) => {
    const isUsageRequired: boolean = !!usage;
    const progressClass: string = getProgressBarClass(usage, limit);
    const progressClasses = classNames('limit-box-bar', progressClass, {
        'mod-green': isLimitTheGoalToReach,
    });

    return (
        isUsageRequired && (
            <div className="limit-box-footer">
                <div className={progressClasses}></div>
            </div>
        )
    );
};

const getProgressBarClass = (usageValue: number, limitValue: number): string => {
    const progress: number = Math.round((usageValue / limitValue) * 100);
    return progress <= 100 ? `progress-${progress.toString()}` : `progress-100`;
};

export const Limit = connect(mapStateToProps, mapDispatchToProps)(LimitDisconnect);
