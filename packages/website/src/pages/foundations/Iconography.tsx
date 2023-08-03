import {ITableHOCProps, TableHOC, tableWithFilter, TableWithFilterProps} from '@coveord/plasma-react';
import * as PlasmaReactIcons from '@coveord/plasma-react-icons';
import {HTMLAttributes, ComponentType, FunctionComponent} from 'react';
import IconographyDemo from '@examples/foundations/Iconography/Iconography.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const {iconsList, ...Icons} = PlasmaReactIcons;

const TableWithFilter: ComponentType<
    React.PropsWithChildren<TableWithFilterProps & ITableHOCProps & HTMLAttributes<HTMLTableElement>>
> = tableWithFilter()(TableHOC);

type IconSet = {iconName: string; variants: Array<keyof typeof Icons>};

const IconSetCard: FunctionComponent<IconSet> = ({iconName, variants}) => (
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
                    const IconComponent = Icons[svgName];
                    const size = parseInt(/(\d+)px/i.exec(svgName)?.[0] ?? '16', 10);
                    return IconComponent ? (
                        <tr key={svgName}>
                            <td className="mod-no-border-bottom">
                                <IconComponent height={size} />
                            </td>
                            <td className="mod-no-border-bottom">{svgName}</td>
                        </tr>
                    ) : null;
                })}
            </tbody>
        </table>
    </div>
);

const IconsTable: FunctionComponent = () => (
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

export const IconographyExamples = () => (
    <PageLayout
        id="Iconography"
        section="Foundations"
        title="Iconography"
        thumbnail="iconography"
        description="Icons are used to visually represent actions, functionalities, and features."
        demo={<IconographyDemo center />}
        withPropsTable={false}
    >
        <IconsTable />
    </PageLayout>
);

export default IconographyExamples;
