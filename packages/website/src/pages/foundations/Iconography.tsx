import {ITableHOCProps, TableHOC, tableWithFilter, TableWithFilterProps} from '@coveord/plasma-react';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import classNames from 'classnames';
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
                                <SvgComponent
                                    className={classNames('mod-black', {
                                        'mod-16': svgName.includes('16Px'),
                                        'mod-24': svgName.includes('24Px'),
                                        'mod-32': svgName.includes('32Px'),
                                        'mod-48': svgName.includes('48Px'),
                                        'mod-56': svgName.includes('56Px'),
                                        'mod-64': svgName.includes('64Px'),
                                    })}
                                />
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
    import { InfoSize32Px } from '@coveord/plasma-react-icons';

    export default () => <InfoSize32Px className="mod-info mod-72" />;
`;

export const IconographyExamples = () => (
    <>
        <PageHeader
            section="Foundations"
            title="Iconography"
            thumbnail="iconography"
            description="Icons are used to visually represent actions, functionalities, and features."
        />
        <div className="palsma-page-layout">
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
