import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Input, Svg} from 'react-vapor';

export interface LimitProps {
    title: string;
    limitLabel?: string;
    usageNumber?: number;
    limitNumber?: number;
    isLimitModifiable?: boolean;
    isLimitTheGoalToReach?: boolean;
    isHistoryIncluded?: boolean;
}

export const Limit: React.FunctionComponent<LimitProps> = ({
    title,
    limitLabel,
    usageNumber,
    limitNumber,
    isLimitModifiable,
    isLimitTheGoalToReach,
    isHistoryIncluded,
}) => {
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
        usageInt,
        limitInt,
        isModifiable,
        limitTitle,
    }: {
        usageInt: number;
        limitInt: number;
        isModifiable: boolean;
        limitTitle: string;
    }) => {
        return (
            <div className="limit-box-numbers pt1 flex">
                <UsageDivision usageInt={usageInt} />
                <LimitDivision limitInt={limitInt} isModifiable={isModifiable} limitTitle={limitTitle} />
            </div>
        );
    };

    const UsageDivision = ({usageInt}: {usageInt: number}) => {
        const isUsageRequired: boolean = !!usageInt;
        return (
            isUsageRequired && (
                <div className="limit-box-usage">
                    <label className="form-control-label">Usage</label>
                    <span className="limit-box-usage-value">{usageInt}</span>
                </div>
            )
        );
    };

    const LimitDivision = ({
        limitInt,
        isModifiable,
        limitTitle,
    }: {
        limitInt: number;
        isModifiable: boolean;
        limitTitle: string;
    }) => {
        const limitValueString: string = limitInt.toString();
        if (isModifiable) {
            return (
                <Input
                    type="number"
                    labelTitle={limitTitle}
                    defaultValue={limitValueString}
                    classes="limit-box-limit form-group input-field validate"
                ></Input>
            );
        } else {
            return (
                <div className="limit-box-limit">
                    <label className="form-control-label">{limitTitle}</label>
                    <span className="limit-box-limit-value">{limitInt}</span>
                </div>
            );
        }
    };

    const ProgressBar = ({
        usageInt,
        isLimitTheGoal,
        limitInt,
    }: {
        usageInt: number;
        isLimitTheGoal: boolean;
        limitInt: number;
    }) => {
        const isUsageRequired: boolean = !!usageInt;
        const progressClass: string = getProgressBarClass({usageInt, limitInt});
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

    function getProgressBarClass({usageInt, limitInt}: {usageInt: number; limitInt: number}): string {
        const progress: number = Math.round((usageInt / limitInt) * 100);
        return `progress-${progress.toString()}`;
    }

    return (
        <div className="limit-box mb2">
            <div className="limit-box-main p2 pb1">
                <HeaderDivision limitTitle={title} isHistory={isHistoryIncluded} />
                <ContentDivision
                    usageInt={usageNumber}
                    limitInt={limitNumber}
                    isModifiable={isLimitModifiable}
                    limitTitle={limitLabel}
                />
            </div>
            <ProgressBar usageInt={usageNumber} isLimitTheGoal={isLimitTheGoalToReach} limitInt={limitNumber} />
        </div>
    );
};

Limit.defaultProps = {
    limitLabel: 'Limit',
    limitNumber: 100,
    isLimitModifiable: false,
    isLimitTheGoalToReach: false,
    isHistoryIncluded: false,
};
