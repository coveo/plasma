import TypekitDemo from '@examples/legacy/foundations/Typekit/Typekit.demo?demo';
import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

const typekitStyles: Array<{
    name: string;
    variants: Array<{renderer: FunctionComponent<PropsWithChildren<unknown>>; selectors: string[]}>;
}> = [
    {
        name: 'Code',
        variants: [{renderer: ({children}) => <span className="code">{children}</span>, selectors: ['.code']}],
    },
    {
        name: 'Caption',
        variants: [
            {renderer: ({children}) => <div className="caption">{children}</div>, selectors: ['.caption']},
            {renderer: ({children}) => <div className="caption-book">{children}</div>, selectors: ['.caption-book']},
            {
                renderer: ({children}) => <div className="caption-subdued">{children}</div>,
                selectors: ['.caption-subdued'],
            },
            {
                renderer: ({children}) => <div className="caption-book-subdued">{children}</div>,
                selectors: ['.caption-book-subdued'],
            },
        ],
    },
    {
        name: 'Body small',
        variants: [
            {
                renderer: ({children}) => <div className="body-s">{children}</div>,
                selectors: ['.body-s'],
            },
            {
                renderer: ({children}) => <div className="body-s-book">{children}</div>,
                selectors: ['.body-s-book'],
            },
            {
                renderer: ({children}) => <div className="body-s-book-italic">{children}</div>,
                selectors: ['.body-s-book-italic'],
            },
            {
                renderer: ({children}) => <div className="body-s-subdued">{children}</div>,
                selectors: ['.body-s-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-s-book-subdued">{children}</div>,
                selectors: ['.body-s-book-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-s-book-italic-subdued">{children}</div>,
                selectors: ['.body-s-book-italic-subdued'],
            },
        ],
    },
    {
        name: 'Body medium',
        variants: [
            {
                renderer: ({children}) => <div className="body-m">{children}</div>,
                selectors: ['.body-m'],
            },
            {
                renderer: ({children}) => <p>{children}</p>,
                selectors: ['p', '.p', '.body-m-book'],
            },
            {
                renderer: ({children}) => <div className="body-m-book-italic">{children}</div>,
                selectors: ['.body-m-book-italic'],
            },
            {
                renderer: ({children}) => <div className="body-m-subdued">{children}</div>,
                selectors: ['.body-m-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-m-book-subdued">{children}</div>,
                selectors: ['.body-m-book-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-m-book-italic-subdued">{children}</div>,
                selectors: ['.body-m-book-italic-subdued'],
            },
        ],
    },
    {
        name: 'Body large',
        variants: [
            {
                renderer: ({children}) => <div className="body-l">{children}</div>,
                selectors: ['.body-l'],
            },
            {
                renderer: ({children}) => <div className="body-l-book">{children}</div>,
                selectors: ['.body-l-book'],
            },
            {
                renderer: ({children}) => <div className="body-l-book-italic">{children}</div>,
                selectors: ['.body-l-book-italic'],
            },
            {
                renderer: ({children}) => <div className="body-l-subdued">{children}</div>,
                selectors: ['.body-l-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-l-book-subdued">{children}</div>,
                selectors: ['.body-l-book-subdued'],
            },
            {
                renderer: ({children}) => <div className="body-l-book-italic-subdued">{children}</div>,
                selectors: ['.body-l-book-italic-subdued'],
            },
        ],
    },
    {
        name: 'Heading 6',
        variants: [
            {
                renderer: ({children}) => <h6>{children}</h6>,
                selectors: ['h6', '.h6'],
            },
            {
                renderer: ({children}) => <h6 className="h6-subdued">{children}</h6>,
                selectors: ['.h6-subdued'],
            },
        ],
    },
    {
        name: 'Heading 5',
        variants: [
            {
                renderer: ({children}) => <h5>{children}</h5>,
                selectors: ['h5', '.h5'],
            },
            {
                renderer: ({children}) => <h5 className="h5-subdued">{children}</h5>,
                selectors: ['.h5-subdued'],
            },
        ],
    },
    {
        name: 'Heading 4',
        variants: [
            {
                renderer: ({children}) => <h4>{children}</h4>,
                selectors: ['h4', '.h4'],
            },
            {
                renderer: ({children}) => <h4 className="h4-subdued">{children}</h4>,
                selectors: ['.h4-subdued'],
            },
            {
                renderer: ({children}) => <h4 className="h4-book">{children}</h4>,
                selectors: ['.h4-book'],
            },
            {
                renderer: ({children}) => <h4 className="h4-book-subdued">{children}</h4>,
                selectors: ['.h4-book-subdued'],
            },
        ],
    },
    {
        name: 'Heading 3',
        variants: [
            {
                renderer: ({children}) => <h3>{children}</h3>,
                selectors: ['h3', '.h3'],
            },
            {
                renderer: ({children}) => <h3 className="h3-subdued">{children}</h3>,
                selectors: ['.h3-subdued'],
            },
            {
                renderer: ({children}) => <h3 className="h3-book">{children}</h3>,
                selectors: ['.h3-book'],
            },
            {
                renderer: ({children}) => <h3 className="h3-book-subdued">{children}</h3>,
                selectors: ['.h3-book-subdued'],
            },
        ],
    },
    {
        name: 'Heading 2',
        variants: [
            {
                renderer: ({children}) => <h2>{children}</h2>,
                selectors: ['h2', '.h2'],
            },
            {
                renderer: ({children}) => <h2 className="h2-subdued">{children}</h2>,
                selectors: ['.h2-subdued'],
            },
            {
                renderer: ({children}) => <h2 className="h2-book">{children}</h2>,
                selectors: ['.h2-book'],
            },
            {
                renderer: ({children}) => <h2 className="h2-book-subdued">{children}</h2>,
                selectors: ['.h2-book-subdued'],
            },
        ],
    },
    {
        name: 'Heading 1',
        variants: [
            {
                renderer: ({children}) => <h1>{children}</h1>,
                selectors: ['h1', '.h1'],
            },
            {
                renderer: ({children}) => <h1 className="h1-subdued">{children}</h1>,
                selectors: ['.h1-subdued'],
            },
            {
                renderer: ({children}) => <h1 className="h1-light">{children}</h1>,
                selectors: ['.h1-light'],
            },
            {
                renderer: ({children}) => <h1 className="h1-light-subdued">{children}</h1>,
                selectors: ['.h1-light-subdued'],
            },
        ],
    },
    {
        name: 'Hero',
        variants: [
            {renderer: ({children}) => <div className="hero">{children}</div>, selectors: ['.hero']},
            {renderer: ({children}) => <div className="hero-light">{children}</div>, selectors: ['.hero-light']},
            {renderer: ({children}) => <div className="hero-subdued">{children}</div>, selectors: ['.hero-subdued']},
            {
                renderer: ({children}) => <div className="hero-light-subdued">{children}</div>,
                selectors: ['.hero-light-subdued'],
            },
        ],
    },
];

export const Typekit = () => (
    <PageLayout
        id="Typekit"
        section="Foundations"
        title="Typekit"
        thumbnail="typekit"
        description="The Typekit covers all typography styles designed specifically to work with the Plasma ecosystem."
        demo={<TypekitDemo center />}
        sourcePath="/packages/style/scss/typekit.scss"
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section full-content flex-column">
            {typekitStyles.map(({name, variants}) => (
                <div key={name} className="p2 mb3">
                    <h6 className="h6-subdued mb2">{name}</h6>
                    <table className="table">
                        <thead className="mod-no-border-top">
                            <tr>
                                <th style={{width: '300px'}}>Usage</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variants.map(({selectors, renderer: Preview}) => (
                                <tr key={selectors.join(';')}>
                                    <td className="mod-no-border-bottom">
                                        {selectors.map((selector, i) => (
                                            <span
                                                className={classNames('code', {
                                                    mr1: i + 1 !== selectors.length,
                                                })}
                                                key={selector}
                                            >
                                                {selector}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="mod-no-border-bottom">
                                        <Preview>Deliver breakthrough digital experiences</Preview>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </PageLayout>
);

export default Typekit;
