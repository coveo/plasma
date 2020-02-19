import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';

import {CollapsibleOwnProps} from '../Collapsible';
import {ICollapsibleContainerOwnProps} from '../CollapsibleContainer';

export const collapsibleContainerPossibleProps: ICollapsibleContainerOwnProps[] = [
    {
        id: `collapsible-${_.uniqueId()}`,
        title: loremIpsum(),
        collapsibleHeaderClassName: 'header',
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
        headerClasses: 'text-medium-blue',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        headerClasses: 'text-medium-blue',
        expandedOnMount: true,
        toggleIconClassName: 'fill-medium-blue',
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        headerClasses: 'text-medium-blue',
        expandedOnMount: true,
        toggleIconClassName: 'fill-medium-blue',
        withBorders: true,
    },
    {
        id: `collapsible-${_.uniqueId()}`,
        headerContent: <div>Some header content</div>,
        headerClasses: 'text-medium-blue',
        expandedOnMount: true,
        toggleIconClassName: 'fill-medium-blue',
        withBorders: true,
        className: 'bg-white',
    },
];
