import {Limit} from '@coveord/plasma-react';

export default () => (
    <Limit id="🐄" title="Hey" usage={82} isHistoryIncluded limit={100} onHistoryIconClick={() => alert('Patate!')} />
);
