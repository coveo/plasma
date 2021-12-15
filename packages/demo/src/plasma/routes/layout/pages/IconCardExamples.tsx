import * as React from 'react';
import {IconCard, Section, Svg} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export const IconCardExamples: React.FunctionComponent = () => (
    <VaporComponent id="IconCard" title="Icon / Logo Card" withSource>
        <Section>
            <Section level={2} title="Basic">
                <IconCard
                    title="Card title"
                    svgName="sourceCustom"
                    description="Card description"
                    onClick={() => alert('You clicked the card')}
                />
            </Section>
            <Section level={2} title="With choices">
                <Section level={3} title="Default">
                    <IconCard
                        title="Web"
                        description="Enter a starting URL and automatically index all the pages of this site."
                        svgName="sourceWeb"
                        choices={[
                            {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                            {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                            {value: 'crodule', label: 'Crawling Module', icon: 'crawlingBot', disabled: true},
                        ]}
                        style={{width: '48%'}}
                        onClick={(choice) => alert(choice)}
                    />
                </Section>
                <Section level={3} title="Small">
                    <IconCard
                        small
                        title="Web"
                        svgName="sourceWeb"
                        choices={[
                            {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                            {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                            {value: 'crodule', label: 'Crawling Module', icon: 'crawlingBot', disabled: true},
                        ]}
                        onClick={(choice) => alert(choice)}
                        style={{width: '368px'}}
                    />
                    <IconCard
                        small
                        title="Web"
                        svgName="sourceWeb"
                        animateOnHover
                        onClick={() => alert('You clicked the card')}
                        style={{width: '368px'}}
                    >
                        <Svg svgName="cloud" svgClass="icon mod-24 mod-stroke mod-black" />
                    </IconCard>
                </Section>
                <Section level={3} title="Disbled">
                    <IconCard
                        small
                        title="Web"
                        svgName="sourceWeb"
                        disabled
                        badges={[{icon: 'lock', extraClasses: ['mod-small']}]}
                        tooltip={{title: 'This source is not included in your license'}}
                        style={{width: '368px'}}
                    />
                </Section>
            </Section>
        </Section>
    </VaporComponent>
);
// stop-print
