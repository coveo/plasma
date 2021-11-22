import * as React from 'react';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType, Section} from 'react-vapor';

export const InfoTokenExamples: React.FunctionComponent = () => (
    <Section>
        <Section level={2} title="Information">
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Information} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
        <Section level={2} title="Success">
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Success} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
        <Section level={2} title="Warning">
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Warning} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
        <Section level={2} title="Critical">
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Critical} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
        <Section level={2} title="Tip">
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Tip} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
        <Section level={2} title="Question">
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Small} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Medium} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Large} mode={InfoTokenMode.Filled} />
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Small} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Medium} mode={InfoTokenMode.Stroked} />
            <InfoToken type={InfoTokenType.Question} size={InfoTokenSize.Large} mode={InfoTokenMode.Stroked} />
        </Section>
    </Section>
);
