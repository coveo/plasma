import * as React from 'react';
import {Limit} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

const title = 'Limit example';
const usage = 42;
const usageNearLimit = 80;
const usageEqualToLimit = 100;
const customLimit = 130;
const customLimitTitle = 'Throttling limit';

// start-print
export const LimitExamples: React.FunctionComponent = () => (
    <PlasmaComponent
        id="Limit"
        title="Limit Card"
        usage="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
        withSource
    >
        <div className="coveo-form">
            <div className="form-group">
                <label className="form-control-label">A limit card with an usage value</label>
                <div className="form-control">
                    <Limit id="1" title={title} usage={usage} limit={100} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">A limit card with a history icon included</label>
                <div className="form-control">
                    <Limit
                        id="2"
                        title={title}
                        usage={usageNearLimit}
                        isHistoryIncluded
                        limit={100}
                        onHistoryIconClick={() => alert('I am an action!')}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    A limit card with an usage value that reached the limit value
                </label>
                <div className="form-control">
                    <Limit id="3" title={title} usage={usageEqualToLimit} limit={100} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    A limit card with an usage value that reached the "goal" limit value
                </label>
                <div className="form-control">
                    <Limit id="4" title={title} usage={usageEqualToLimit} isLimitTheGoalToReach limit={100} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    A limit card with a custom limit value and a custom limit title
                </label>
                <div className="form-control">
                    <Limit id="5" title={title} usage={usage} limit={customLimit} limitLabel={customLimitTitle} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">A limit card with a modifiable limit value</label>
                <div className="form-control">
                    <Limit id="6" title={title} usage={usage} isLimitEditable limit={100} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">A limit card without a usage value</label>
                <div className="form-control">
                    <Limit id="7" title={title} isLimitEditable limit={100} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">A limit card without a limit, but with usage </label>
                <div className="form-control">
                    <Limit id="8" title={title} usage={17} isLimitEditable />
                </div>
            </div>
        </div>
    </PlasmaComponent>
);
export default LimitExamples;
