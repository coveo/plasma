import * as React from 'react';
import {IconCard, Section} from 'react-vapor';

const stack2Wide: React.CSSProperties = {width: '48%'};
const stack3Wide: React.CSSProperties = {width: '31%'};

export const IconCardExamples: React.FunctionComponent = () => (
    // start-print
    <Section>
        <Section level={2} title="Basic">
            <IconCard title="Card title" svgName="home" />
        </Section>
        <Section level={2} title="Disabled with tooltip and locked badge">
            <IconCard
                title="Card title"
                svgName="sourceCustom"
                disabled
                badges={[{label: 'Unavailable', icon: 'lock', extraClasses: ['mod-warning ml1']}]}
                tooltip={{title: 'This card is disabled, therefore not clickable'}}
            />
        </Section>
        <Section level={2} title="With description">
            <IconCard title="Card title" svgName="sourceCustom" description="Card description" />
        </Section>
        <Section level={2} title="With badges and description">
            <IconCard
                title="Card title"
                svgName="sourceCustom"
                badges={[
                    {
                        label: 'Badge 1',
                        extraClasses: ['mod-success ml1'],
                    },
                    {
                        label: 'Badge 2',
                        extraClasses: ['mod-critical ml1'],
                    },
                    {
                        label: 'Badge 3',
                        extraClasses: ['mod-information ml1'],
                    },
                ]}
                description="Card description"
            />
        </Section>
        <Section level={2} title="With choices in horizontal layout">
            <IconCard
                title="Web"
                svgName="sourceWeb"
                choices={[
                    {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                    {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                    {value: 'crodule', label: 'Crawling Module', icon: 'crawling-bot', disabled: true},
                ]}
                style={stack2Wide}
                onClick={(choice) => alert(choice)}
            />
        </Section>
        <Section level={2} title="With choices in vertical layout">
            <IconCard
                choicesLayout="vertical"
                title="Web"
                svgName="sourceWeb"
                choices={[
                    {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                    {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                    {value: 'crodule', label: 'Crawling Module', icon: 'crawling-bot', disabled: true},
                ]}
                style={stack3Wide}
                onClick={(choice) => alert(choice)}
            />
        </Section>
    </Section>
    // stop-print
);
