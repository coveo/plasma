import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '@coveord/plasma-react';
import * as React from 'react';

export default () => (
    <>
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
        <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
    </>
);
