import {svg} from 'coveo-styleguide';
import * as React from 'react';
import {IconBadge, IconBadgeType, Section} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const IconBadgeExamples: React.FunctionComponent = () => (
    <VaporComponent id="icon-badge" title="Icon Badge" usage="">
        <Section>
            <Section level={2} title="IconBadge without the navigation style">
                <IconBadge
                    svgName={svg.bellStrokedMedium.name}
                    type={IconBadgeType.New}
                    svgClass="mod-stroke"
                    className="mr1"
                />
                <IconBadge
                    svgName={svg.bellStrokedMedium.name}
                    type={IconBadgeType.Information}
                    svgClass="mod-stroke"
                    className="mr1"
                />
                <IconBadge
                    svgName={svg.bellStrokedMedium.name}
                    type={IconBadgeType.Warning}
                    svgClass="mod-stroke"
                    className="mr1"
                />
                <IconBadge svgName={svg.bellStrokedMedium.name} type={IconBadgeType.Major} svgClass="mod-stroke" />
            </Section>
            <Section level={2} title="IconBadge on the top bar with different status">
                <div className="header" style={{background: 'var(--grape-purple-70)'}}>
                    <div className="header-section mod-icon flex center-align">
                        <IconBadge
                            svgName={svg.bellStrokedMedium.name}
                            type={IconBadgeType.New}
                            className="mod-navigation"
                        />
                    </div>
                    <div className="header-section mod-icon flex center-align">
                        <IconBadge
                            svgName={svg.bellStrokedMedium.name}
                            type={IconBadgeType.Information}
                            className="mod-navigation"
                        />
                    </div>
                    <div className="header-section mod-icon flex center-align">
                        <IconBadge
                            svgName={svg.bellStrokedMedium.name}
                            type={IconBadgeType.Warning}
                            className="mod-navigation"
                        />
                    </div>
                    <div className="header-section mod-icon flex center-align">
                        <IconBadge
                            svgName={svg.bellStrokedMedium.name}
                            type={IconBadgeType.Major}
                            className="mod-navigation"
                        />
                    </div>
                </div>
            </Section>
        </Section>
    </VaporComponent>
);
