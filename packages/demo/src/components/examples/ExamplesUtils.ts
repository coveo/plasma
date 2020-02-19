import {
    Button,
    IBreadcrumbLinkProps,
    IBreadcrumbProps,
    IContentProps,
    ILinkSvgProps,
    ITabProps,
    ITitleProps,
} from 'react-vapor';

export const link1: IBreadcrumbLinkProps = {
    name: 'Pikachu',
    link: 'https://www.google.ca/?q=pikachu',
};

export const link2: IBreadcrumbLinkProps = {
    name: 'Squirtle',
    link: 'https://www.google.ca/?q=squirtle',
};

export const documentationLink: ILinkSvgProps = {
    url: 'https://www.google.ca',
    target: '_blank',
    svg: {
        svgName: 'help',
        svgClass: 'fill-orange icon mod-20',
    },
};

export const defaultTitle: ITitleProps = {
    text: 'Charmeleon title',
    documentationLink,
};

export const actions: IContentProps[] = [
    {
        content: Button,
        componentProps: {name: 'Add'},
        classes: ['btn-container'],
    },
    {
        content: Button,
        componentProps: {name: 'Add'},
        classes: ['btn-container'],
    },
];

export const defaultBreadcrumb: IBreadcrumbProps = {
    title: defaultTitle,
    links: [link1, link2],
};

export const defaultBreadcrumbLongTitle: IBreadcrumbProps = {
    title: {
        text:
            'Pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika ',
        prefix: 'Catch this pokemon:',
        documentationLink,
    },
    links: [link1, link2],
};

export const defaultTabs: ITabProps[] = [
    {id: 'tab1', title: 'Digimon'},
    {id: 'tab2', title: 'Beyblade'},
    {id: 'tab3', title: 'Pokemon'},
];
