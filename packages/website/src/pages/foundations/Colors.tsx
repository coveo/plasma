import {color} from '@coveord/plasma-tokens';
import classNames from 'classnames';
import {FunctionComponent} from 'react';
import kebabCase from 'lodash.kebabcase';

import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import {PageLayout} from '../../building-blocs/PageLayout';

const isColorGroup = (value: any) => typeof value !== 'string';

const ColorBlock: FunctionComponent<{colorName: string; colorValue: string}> = ({colorName, colorValue}) => (
    <div className="color-box">
        <div className="mb1 overflow-hidden color-sticker card" style={{background: colorValue}} />
        <div className="color-details caption-subdued">
            <table>
                <tr>
                    <td>TS</td>
                    <td>
                        <span className="code">{colorName.replace(/-/g, '.')}</span>
                    </td>
                </tr>
                <tr>
                    <td>SCSS</td>
                    <td>
                        <span className="code">$plasma-{kebabCase(colorName)}</span>
                    </td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>
                        <span className="code">--plasma-{kebabCase(colorName)}</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
);

const primaryFirst = (a: string, b: string) => {
    if (a === 'primary') {
        return -1;
    }
    if (b === 'primary') {
        return 1;
    }
    return 0;
};

const ColorGroup: FunctionComponent<{name: string; value: any}> = ({name, value}) => {
    if (!isColorGroup(value)) {
        return <ColorBlock colorName={name} colorValue={value} />;
    }

    return (
        <>
            {Object.keys(value)
                .sort() // Alphabetical
                .sort(primaryFirst)
                .sort((a, b) => Number(isColorGroup(value[a])) - Number(isColorGroup(value[b]))) // ColorBlock first
                .map((child) => {
                    const isColorBlock = !isColorGroup(value[child]);
                    const isColorPalette = !Object.values(value[child]).some(isColorGroup);
                    return (
                        <div
                            key={child}
                            className={classNames({
                                mb2: !isColorBlock,
                                'inline-flex flex-column flex-center': isColorBlock,
                            })}
                        >
                            <h6
                                className={classNames('my1', {
                                    p: isColorBlock,
                                    'body-m': isColorPalette,
                                })}
                            >
                                {child}
                            </h6>
                            <div className={classNames({'flex color-palette': isColorPalette, pl2: !isColorPalette})}>
                                <ColorGroup name={`${name}-${child}`} value={value[child]} />
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export const ColorsExamples = () => (
    <PageLayout
        id="Colors"
        section="Foundations"
        title="Colors"
        thumbnail="colors"
        description="The colors that give Plasma its identity"
        sourcePath="/packages/tokens#readme"
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section pl5">
            <p>
                All colors are exposed through the{' '}
                <a
                    href="https://github.com/coveo/plasma/tree/master/packages/tokens#readme"
                    target="_blank"
                    className="link inline-flex flex-center"
                >
                    @coveord/plasma-tokens
                    <ExternalSize16Px style={{marginLeft: '4px'}} />
                </a>{' '}
                package in 3 formats: TypeScript, Sass and CSS. Hover over any color to see its name in any of those
                formats.
            </p>
            <ColorGroup name="color" value={color} />
        </div>
    </PageLayout>
);

export default ColorsExamples;
