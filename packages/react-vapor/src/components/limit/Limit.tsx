import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {connect} from 'react-redux';
import {InputConnected, Svg} from 'react-vapor';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {changeInputValue} from '../input/InputActions';
import {InputSelectors} from '../input/InputSelectors';

export interface LimitOwnProps {
    id?: string;
    title: string;
    limitLabel?: string;
    usage?: number;
    limit?: number;
    isLimitEditable?: boolean;
    isLimitTheGoalToReach?: boolean;
    isHistoryIncluded?: boolean;
}

const mapStateToProps = (state: IReactVaporState, ownProps: LimitOwnProps) => {
    const ownLimit: string = ownProps.limit.toString() || Limit.defaultProps.limit.toString();
    const currentLimit: string = InputSelectors.getValue(state, {id: ownProps.id}) || ownLimit;
    return {
        currentLimit,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: LimitOwnProps) => ({
    onChangeLimit: (limitValue: string) => {
        dispatch(changeInputValue(ownProps.id, limitValue, true));
    },
});

export interface LimitProps
    extends LimitOwnProps,
        ReturnType<typeof mapDispatchToProps>,
        ReturnType<typeof mapStateToProps> {}

export const LimitDisconnect: React.FunctionComponent<LimitProps> = ({
    id,
    title,
    limitLabel,
    usage,
    limit,
    currentLimit,
    isLimitEditable,
    isLimitTheGoalToReach,
    isHistoryIncluded,
    onChangeLimit: onChangeLimit,
}) => {
    return (
        <div className="limit-box mb2">
            <div className="limit-box-main p2 pb1">
                <HeaderDivision limitTitle={title} isHistory={isHistoryIncluded} />
                <ContentDivision
                    id={id}
                    usageValue={usage}
                    limitValue={limit}
                    isEditable={isLimitEditable}
                    limitTitle={limitLabel}
                    onChangeLimit={onChangeLimit}
                />
            </div>
            <ProgressBar usageValue={usage} isLimitTheGoal={isLimitTheGoalToReach} limitValue={+currentLimit} />
        </div>
    );
};

const HeaderDivision = ({limitTitle, isHistory}: {limitTitle: string; isHistory: boolean}) => {
    return (
        <div className="flex space-between">
            <label className="form-control-label"> {limitTitle}</label>
            <HistoryIcon isHistory={isHistory} />
        </div>
    );
};

const HistoryIcon = ({isHistory}: {isHistory: boolean}) => {
    return (
        isHistory && (
            <span className="icon mod-lg limit-history-button">
                <Svg svgName={VaporSVG.svg.menuAnalytics.name} className="fill-medium-blue" />
            </span>
        )
    );
};

const ContentDivision = ({
    id,
    usageValue,
    limitValue,
    isEditable,
    limitTitle,
    onChangeLimit,
}: {
    id: string;
    usageValue: number;
    limitValue: number;
    isEditable: boolean;
    limitTitle: string;
    onChangeLimit: (limit: string) => void;
}) => {
    return (
        <div className="limit-box-numbers pt1 flex">
            <UsageDivision usageValue={usageValue} />
            <LimitDivision
                id={id}
                onChangeLimit={onChangeLimit}
                usageValue={usageValue}
                limitValue={limitValue}
                isEditable={isEditable}
                limitTitle={limitTitle}
            />
        </div>
    );
};

const UsageDivision = ({usageValue}: {usageValue: number}) => {
    const isUsageRequired: boolean = !!usageValue;
    return (
        isUsageRequired && (
            <div className="limit-box-usage">
                <label className="form-control-label">Usage</label>
                <span className="limit-box-usage-value">{usageValue}</span>
            </div>
        )
    );
};

const LimitDivision = ({
    id,
    limitValue,
    usageValue,
    isEditable,
    limitTitle,
    onChangeLimit,
}: {
    id: string;
    limitValue: number;
    usageValue: number;
    isEditable: boolean;
    limitTitle: string;
    onChangeLimit: (limit: string) => void;
}) => {
    const limitValueString: string = limitValue.toString();
    const minLimitValue: number = usageValue || 0;
    if (isEditable) {
        return (
            <InputConnected
                id={id}
                type="number"
                labelTitle={limitTitle}
                defaultValue={limitValueString}
                min={minLimitValue}
                classes="limit-box-limit form-group input-field validate"
                onChange={(limit) => onChangeLimit(limit)}
            ></InputConnected>
        );
    } else {
        return (
            <div className="limit-box-limit">
                <label className="form-control-label">{limitTitle}</label>
                <span className="limit-box-limit-value">{limitValue}</span>
            </div>
        );
    }
};

const ProgressBar = ({
    usageValue,
    isLimitTheGoal,
    limitValue,
}: {
    usageValue: number;
    isLimitTheGoal: boolean;
    limitValue: number;
}) => {
    const isUsageRequired: boolean = !!usageValue;
    const progressClass: string = getProgressBarClass({usageValue, limitValue});
    const progressClasses = classNames('limit-box-bar', progressClass, {
        'mod-green': isLimitTheGoal,
    });

    return (
        isUsageRequired && (
            <div className="limit-box-footer">
                <div className={progressClasses}></div>
            </div>
        )
    );
};

function getProgressBarClass({usageValue, limitValue}: {usageValue: number; limitValue: number}): string {
    const progress: number = Math.round((usageValue / limitValue) * 100);
    return progress <= 100 ? `progress-${progress.toString()}` : `progress-100`;
}

export const Limit = connect(mapStateToProps, mapDispatchToProps)(LimitDisconnect);

LimitDisconnect.defaultProps = {
    limitLabel: 'Limit',
    limit: 100,
    isLimitEditable: false,
    isLimitTheGoalToReach: false,
    isHistoryIncluded: false,
};

Limit.defaultProps = {...LimitDisconnect.defaultProps};
