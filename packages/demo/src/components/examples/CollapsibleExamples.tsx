import * as React from 'react';
import {
    Button,
    CollapsibleConnected,
    CollapsibleContainerConnected,
    CollapsibleInfoBox,
    Section,
    setExpandedCollapsibleContainer,
} from 'react-vapor';
import * as _ from 'underscore';

import {Store} from '../../Store';

export const CollapsibleExamples: React.FunctionComponent = () => (
    <Section title="Collapsible Examples">
        <Section level={3} title="A basic collapsible">
            <CollapsibleConnected
                id="collapsible-example-1"
                className="bg-white"
                headerContent={<h3 className="p2">Collapsible header</h3>}
            >
                Collapsible content
            </CollapsibleConnected>
        </Section>
        <Section level={2} title="Collapsible info boxes">
            <Section level={3} title="A collapsible information box">
                <CollapsibleInfoBox id="collapsible-info-box-example-1" title="Lean more about collapsible info boxes.">
                    Some latin stuff: Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </Section>
            <Section level={3} title="A collapsible information box for a page section">
                <CollapsibleInfoBox
                    id="collapsible-info-box-example-2"
                    title="Section A"
                    sectionAdditionalContent={
                        <span style={{position: 'relative', top: '8px', marginLeft: '20px'}}>Add anything here</span>
                    }
                    isSection
                >
                    Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </Section>
            <Section
                level={3}
                title="Collapsible information box for a page section with additional information only showing if the minute is
                even"
            >
                <CollapsibleInfoBox
                    id="collapsible-info-box-example-3"
                    title="Section A"
                    sectionAdditionalContent={
                        <span style={{position: 'relative', top: '8px', marginLeft: '20px'}}>Add anything here</span>
                    }
                    sectionAdditionalContentCondition={() => !(new Date().getMinutes() % 2)}
                    isSection
                >
                    Lorem ipsum dolor sit amet.
                </CollapsibleInfoBox>
            </Section>
        </Section>
        <Section level={2} title="Collapsible containers">
            <Section level={3} title="Collapsible Container expanded on mount">
                <CollapsibleContainerConnected
                    id="collapsible-container-example-1"
                    title="CollapsibleContainer expanded on mount"
                    informationUrl="http://coveo.github.io/vapor/"
                    informationTooltip={{
                        title:
                            "I display information and if you click me you'll be led to a url that was provided to me.",
                        placement: 'top',
                    }}
                    expandedOnMount
                >
                    I am expanded on mount!
                </CollapsibleContainerConnected>
            </Section>
            <Section level={3} title="Collapsible Container not expanded on mount">
                <CollapsibleContainerConnected
                    id="collapsible-container-example-2"
                    title="CollapsibleContainer not expanded on mount"
                    informationTooltip={{
                        title: 'I display information only since no url was given to me.',
                        placement: 'top',
                    }}
                >
                    I was not expanded on mount, but now I am! Thanks!
                </CollapsibleContainerConnected>
            </Section>
            <Section level={3} title="CollapsibleContainer is expandable from outside the component.">
                <Button
                    enabled={true}
                    small={true}
                    name="Toggle Container"
                    onClick={() => {
                        const collapsibleState = _.findWhere(Store.getState().collapsibles, {
                            id: 'collapsible-container-example-3',
                        });
                        Store.dispatch(
                            setExpandedCollapsibleContainer(
                                'collapsible-container-example-3',
                                !collapsibleState.expanded
                            )
                        );
                    }}
                />
                <CollapsibleContainerConnected id="collapsible-container-example-3" title="CollapsibleContainer">
                    You just expanded me with a button!
                </CollapsibleContainerConnected>
            </Section>
        </Section>
    </Section>
);
