import * as loremIpsum from 'lorem-ipsum';
import * as _ from 'underscore';
export const collapsibleContainerPossibleProps = [
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationTooltip: {title: 'whatever', placement: 'top'},
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
        informationTooltip: {title: 'whatever', placement: 'top'},
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: 'some classes mr1',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: ['some', 'classes', 'mr1'],
        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'http://coveo.github.io/vapor/',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: ['some', 'classes', 'mr1'],
        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],
        collapsibleBodyClassName: ['some', ['class', 'mr1'], {hello: false, hi: true}],
    },
];
