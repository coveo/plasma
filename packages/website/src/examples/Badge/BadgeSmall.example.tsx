import * as React from 'react';
import {Badge} from '@coveord/plasma-react';

export default () => (
    <>
        <Badge label="Default" extraClasses={['mod-small']} />
        <Badge label="Navy" extraClasses={['mod-small mod-information ml1']} />
        <Badge label="Success" extraClasses={[' mod-small mod-success ml1']} />
        <Badge label="Critical" extraClasses={['mod-small mod-critical ml1']} />
        <Badge label="New" extraClasses={['mod-small mod-warning ml1']} />
        <Badge label="Beta" extraClasses={['mod-small mod-beta ml1']} />
        {/* <Badge icon="lock" extraClasses={['mod-small ml1']} />
        <Badge icon="lock" label="Label" extraClasses={['mod-small ml1']} />
        <Badge icon="lock" label="tag" extraClasses={['mod-small mod-tag ml1']} /> */}
    </>
);
