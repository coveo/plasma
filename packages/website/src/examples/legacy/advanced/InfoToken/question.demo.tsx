import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '@coveord/plasma-react';

const Demo = () => (
    <>
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
        <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
    </>
);
export default Demo;
