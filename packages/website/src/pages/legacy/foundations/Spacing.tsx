import SpacingDemo from '@examples/legacy/foundations/Spacing/Spacing.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const Spacing = () => (
    <PageLayout
        id="Spacing"
        demo={<SpacingDemo center />}
        section="Foundations"
        title="Spacing"
        description="Spacing is the standard padding and margin size that one can adjust to customize the layout of an interface."
        withPropsTable={false}
        sourcePath="/packages/style/scss/utility/white-space.scss"
    >
        <div className="plasma-page-layout__section">
            <h4 className="h2 mb1">The spacing mechanism</h4>
            <p>Spacing can be applied to any element by setting one or more of the spacing classes.</p>
            <p>
                Considering <span className="code">N</span> is a level (see the available spacing levels in the section
                bellow), here are the 7 different targets supported by our spacing mechanism.
            </p>
            <ul className="list-disc mt2">
                <li>
                    <span className="code">pN</span>: uniform (all sides)
                </li>
                <li>
                    <span className="code">pyN</span>: vertical (top and bottom sides)
                </li>
                <li>
                    <span className="code">pxN</span>: horizontal (left and right sides)
                </li>
                <li>
                    <span className="code">ptN</span>: top side
                </li>
                <li>
                    <span className="code">prN</span>: right side
                </li>
                <li>
                    <span className="code">pbN</span>: bottom side
                </li>
                <li>
                    <span className="code">plN</span>: left side
                </li>
            </ul>
        </div>
        <div className="plasma-page-layout__section">
            <h4 className="h2 mb1">The spacing levels</h4>
            <p>With each level, the size of the spacing increases proportionally.</p>
            <p>
                Only padding is showcased in the section below for the sake of simplicity, but the exact same classes
                exist for the margin as well. Just replace the <span className="code">p</span> by a{' '}
                <span className="code">m</span> to apply a spacing to the margin.
            </p>
            {[...Array(5)].map((x, i) => {
                const level = i + 1;
                return (
                    <div className="mt3" key={i}>
                        <h6 className="h6-subdued mb1">Level {level}</h6>
                        <div className="highlight-padding spacing-grid">
                            <div className={`p${level} spacing-viewer`}>.p{level}</div>
                            <div className={`py${level} spacing-viewer`}>.py{level}</div>
                            <div className={`px${level} spacing-viewer`}>.px{level}</div>
                            <div className={`pt${level} spacing-viewer`}>.pt{level}</div>
                            <div className={`pr${level} spacing-viewer`}>.pr{level}</div>
                            <div className={`pb${level} spacing-viewer`}>.pb{level}</div>
                            <div className={`pl${level} spacing-viewer`}>.pl{level}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    </PageLayout>
);
export default Spacing;
