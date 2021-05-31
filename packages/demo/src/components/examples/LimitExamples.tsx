import * as React from 'react';
import {Limit} from 'react-vapor';

const title = 'Limit example';
const usage = 42;
const usageNearLimit = 80;
const usageEqualToLimit = 100;
const customLimit = 130;
const customLimitTitle = 'Throttling limit';

export const LimitExamples: React.FunctionComponent = () => (
    <div className="coveo-form">
        <div className="form-group">
            <label className="form-control-label">A limit with an usage value</label>
            <div className="form-control">
                <Limit id="1" title={title} usage={usage} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">A limit with a history icon included</label>
            <div className="form-control">
                <Limit id="2" title={title} usage={usageNearLimit} isHistoryIncluded />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">A limit with an usage value that reached the limit value</label>
            <div className="form-control">
                <Limit id="3" title={title} usage={usageEqualToLimit} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">
                A limit with an usage value that reached the "goal" limit value
            </label>
            <div className="form-control">
                <Limit id="4" title={title} usage={usageEqualToLimit} isLimitTheGoalToReach />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">A limit with a custom limit value and a custom limit title</label>
            <div className="form-control">
                <Limit id="5" title={title} usage={usage} limit={customLimit} limitLabel={customLimitTitle} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">A limit with a modifiable limit value</label>
            <div className="form-control">
                <Limit id="6" title={title} usage={usage} isLimitEditable />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">A limit without an usage value</label>
            <div className="form-control">
                <Limit id="7" title={title} isLimitEditable />
            </div>
        </div>
    </div>
);
