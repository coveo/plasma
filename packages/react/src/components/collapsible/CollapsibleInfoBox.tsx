import {InfoSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import * as React from 'react';

import {CollapsibleConnected} from './CollapsibleConnected';

export interface CollapsibleInfoBoxProps {
    id: string;
    title: string;
    expandedOnMount?: boolean;
    isSection?: boolean;
    sectionAdditionalContent?: React.ReactNode;
    sectionAdditionalContentCondition?: () => boolean;
    sectionAdditionalContentClasses?: string;
}

export const CollapsibleInfoBox: React.FC<CollapsibleInfoBoxProps> = ({
    id,
    title,
    expandedOnMount,
    isSection,
    sectionAdditionalContent,
    sectionAdditionalContentCondition,
    sectionAdditionalContentClasses,
    children,
}) => {
    const getHeader = (): React.ReactNode =>
        isSection ? (
            <div className="flex flex-center pl1">
                <h6>{title}</h6>
                {sectionAdditionalContent && (
                    <span className={getAdditionalInfoClasses()}>{sectionAdditionalContent}</span>
                )}
            </div>
        ) : (
            <div className="flex">
                <InfoSize24Px height={24} className="mx1" />
                <h6>{title}</h6>
            </div>
        );

    const getAdditionalInfoClasses = () =>
        classNames(sectionAdditionalContentClasses, {
            hidden: sectionAdditionalContentCondition && !sectionAdditionalContentCondition(),
        });

    return (
        <CollapsibleConnected
            id={id}
            className={'collapsible-info-box container label mod-rounded-border-2'}
            headerClasses="p1"
            headerContent={getHeader()}
            expandedOnMount={expandedOnMount}
        >
            <div className={'collapsible-info-box align-with-icon p1 mr3'}>{children}</div>
        </CollapsibleConnected>
    );
};
