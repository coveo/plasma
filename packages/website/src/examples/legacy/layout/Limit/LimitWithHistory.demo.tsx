import {Limit} from '@coveord/plasma-react';

const Demo = () => (
    <Limit id="🐄" title="Hey" usage={82} isHistoryIncluded limit={100} onHistoryIconClick={() => alert('Patate!')} />
);
export default Demo;
