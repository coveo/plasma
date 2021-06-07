import * as React from 'react';
import {BannerContainer, Section} from 'react-vapor';

export class BannerExamples extends React.Component {
    render() {
        return (
            <Section>
                <Section level={3} title="Empty banner">
                    <BannerContainer />
                </Section>
            </Section>
        );
    }
}
