import {OptionsCycleConnected} from '@coveord/plasma-react';

export default () => (
    <OptionsCycleConnected
        id="Cycle-1"
        options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        previousClassName="btn mod-border w4 center"
        buttonClassName="btn ml1"
        nextClassName="btn mod-border ml1 w4 center"
    />
);
