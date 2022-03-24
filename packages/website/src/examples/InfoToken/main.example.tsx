import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '@coveord/plasma-react';
import * as React from 'react';

export default () => (
    <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
);
