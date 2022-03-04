import {ITableHOCProps, TableHOC, tableWithFilter, TableWithFilterProps} from '@coveord/plasma-react';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import dynamic from 'next/dynamic';
import * as React from 'react';

import {PageHeader} from '../../building-blocs/PageHeader';
import {PlasmaLoading} from '../../building-blocs/PlasmaLoading';

const {iconsList, ...Icons} = PlasmaReactIcons;

const Sandbox = dynamic(
    import('../../building-blocs/Sandbox').then((mod) => mod.Sandbox),
    {ssr: false, loading: () => <PlasmaLoading />}
);

const TableWithFilter: React.ComponentType<
    TableWithFilterProps & ITableHOCProps & React.HTMLAttributes<HTMLTableElement>
> = tableWithFilter()(TableHOC);

type IconSet = {iconName: string; variants: Array<keyof typeof Icons>};

const IconSetCard: React.FunctionComponent<IconSet> = ({iconName, variants}) => (
    <div key={iconName} className="card p2 flex-column">
        <h6 className="h6-subdued mb2">{iconName}</h6>
        <table className="table">
            <thead className="mod-no-border-top">
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {variants.map((svgName) => {
                    const SvgComponent = Icons[svgName];
                    return SvgComponent ? (
                        <tr key={svgName}>
                            <td className="mod-no-border-bottom">
                                <SvgComponent height={parseInt(/(\d+)px/i.exec(svgName)[0], 10)} />
                            </td>
                            <td className="mod-no-border-bottom">{svgName}</td>
                        </tr>
                    ) : null;
                })}
            </tbody>
        </table>
    </div>
);

const IconsTable: React.FunctionComponent = () => (
    <TableWithFilter
        id="iconography"
        data={iconsList}
        className="plasma-page-layout__section full-content"
        tbodyClassName="icon-grid"
        renderBody={(data: typeof iconsList) =>
            data.map(({iconName, variants}) => (
                <IconSetCard key={iconName} iconName={iconName} variants={variants as Array<keyof typeof Icons>} />
            ))
        }
        filterBlankslate={{
            title: <span className="h4-book mb1 nowrap">No icons match the applied filter</span>,
        }}
    />
);

const code = `
    import * as React from 'react';
    import { DollarsSize64Px } from '@coveord/plasma-react-icons';
    
    // Control the size using "height" or "width" attributes (defaults to 1em)
    // The icon takes the same color as the text around it

    export default () => (
        <div style={{color: 'green'}}>
            <DollarsSize64Px height={64} />
        </div>
    );
`;

export const IconographyExamples = () => (
    <>
        <PageHeader
            section="Foundations"
            title="Iconography"
            thumbnail="iconography"
            description="Icons are used to visually represent actions, functionalities, and features."
        />
        <div className="plasma-page-layout">
            <div className="plasma-page-layout__main-code plasma-page-layout__section">
                <Sandbox id="main-code" horizontal>
                    {code}
                </Sandbox>
            </div>
            <IconsTable />
        </div>
    </>
);

export default IconographyExamples;
