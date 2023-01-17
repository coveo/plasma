import {loremIpsum} from 'lorem-ipsum';
import * as _ from 'underscore';
import {CollapsibleOwnProps} from '../CollapsibleConnected.js';
import {ICollapsibleContainerOwnProps} from '../CollapsibleContainerConnected.js';

export const collapsibleContainerPossibleProps: ICollapsibleContainerOwnProps[] = [
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        collapsibleHeaderClassName: 'header',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationTooltip: {title: 'whatever', placement: 'top'},
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
        informationTooltip: {title: 'whatever', placement: 'top'},
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: 'some classes mr1',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: ['some', 'classes', 'mr1'],
        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        informationUrl: 'https://plasma.coveo.com',
        informationTooltip: {title: 'whatever', placement: 'top'},
        expandedOnMount: true,
        className: ['some', 'classes', 'mr1'],
        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],
        collapsibleBodyClassName: ['some', ['class', 'mr1'], {hello: false, hi: true}],
    },
];

export const collapsiblePossibleProps: CollapsibleOwnProps[] = [
    {
        id: `collapsible-${_.uniqueId()}`,
        headerClasses: 'header',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        expandedOnMount: true,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        expandedOnMount: true,
        withBorders: true,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        expandedOnMount: true,
        withBorders: true,
    },
];
