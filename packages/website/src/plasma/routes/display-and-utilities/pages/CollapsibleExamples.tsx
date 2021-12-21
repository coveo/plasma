import * as VaporSVG from '@coveord/plasma-style';
import * as React from 'react';
import {
    Badge,
    Button,
    Checkbox,
    CollapsibleConnected,
    CollapsibleContainerConnected,
    CollapsibleInfoBox,
    fakeJSON,
    JSONEditor,
    JSONToString,
    Label,
    Section,
    setCollapsibleExpanded,
    Svg,
} from '@coveord/plasma-react';
import * as _ from 'underscore';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';
import {Store} from '../../../../Store';

// start-print
export const Collapsible: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    return (
        <VaporComponent id="Collapsible" title="Collapsible" withSource>
            <Section title="Collapsible Examples">
                <Section level={2} title="Basic" description="A simple header with collapsible content underneath">
                    <CollapsibleConnected
                        id="collapsible-example-1"
                        headerContent={<h6 className="p2">Q: Why can't you trust an atom?</h6>}
                    >
                        <div className="p2">A: Because they make up everything</div>
                    </CollapsibleConnected>
                </Section>
                <Section
                    level={2}
                    title="Information boxes"
                    description="The <CollapsibleInfoBox /> provides a wrapper around the CollapsibleConnected component"
                >
                    <Section
                        level={3}
                        title="With info icon"
                        description="By default, this component will render with an info icon"
                    >
                        <CollapsibleInfoBox
                            id="collapsible-info-box-example-1"
                            title="Lean more about collapsible info boxes."
                        >
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering
                            animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger
                            omero undead survivor dictum mauris.
                        </CollapsibleInfoBox>
                    </Section>
                    <Section
                        level={3}
                        title="As a section"
                        description={
                            <>
                                Alternatively, you can include the <span className="bolder">isSection</span> prop and
                                related props, <span className="bolder">sectionAdditionalContent</span> &{' '}
                                <span className="bolder">sectionAdditionalContentClasses</span>
                            </>
                        }
                    >
                        <CollapsibleInfoBox
                            id="collapsible-info-box-example-2"
                            title="Section A"
                            sectionAdditionalContent="Add anything here"
                            sectionAdditionalContentClasses="flex flex-center ml1 full-content-y"
                            isSection
                        >
                            Solo bespin yavin c-3po. Organa jade hutt grievous leia. Calrissian organa skywalker anakin
                            sebulba organa qui-gon. Aayla aayla dantooine grievous wedge chewbacca solo. Hoth twi'lek
                            antilles luke. Sith hutt dantooine skywalker baba mon mon organa. Tatooine antilles wedge
                            moff hutt thrawn yoda amidala. Droid padmé c-3p0 padmé. Kit moff organa thrawn anakin dooku.
                            Boba yoda fett fett solo. Maul darth mothma fisto mace jar owen. Ahsoka calrissian moff
                            darth maul hutt windu amidala. Kamino dagobah dantooine solo tatooine ewok calrissian solo
                            dooku.
                        </CollapsibleInfoBox>
                    </Section>
                    <Section level={3} title="With conditional extra content">
                        <Checkbox id="checkbox" checked={checked} onClick={() => setChecked(!checked)} clearSides>
                            <Label>Toggle additional content</Label>
                        </Checkbox>
                        <CollapsibleInfoBox
                            id="collapsible-info-box-example-3"
                            title="Section B"
                            sectionAdditionalContent={
                                <Badge label="Super important badge" extraClasses={['mod-small', 'mod-success']} />
                            }
                            sectionAdditionalContentClasses="flex flex-center ml1 full-content-y"
                            sectionAdditionalContentCondition={() => checked}
                            isSection
                        >
                            Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak
                            three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk
                            venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky
                            quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius
                            Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight
                            three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup.
                            Side-along dragon-scale suits Filch 20 points, Mr. Potter.
                        </CollapsibleInfoBox>
                    </Section>
                </Section>
                <Section
                    level={2}
                    title="Connected Collapsible Containers"
                    description="Connected to the Redux store via their ID"
                >
                    <Section level={3} title="Expanded on mount">
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-1"
                            title="Collapsible Container expanded on mount"
                            informationUrl="https://www.coveo.com/en"
                            informationTooltip={{
                                title:
                                    "I display information and if you click me you'll be led to a URL that was provided to me.",
                            }}
                            expandedOnMount
                        >
                            I am expanded on mount!
                        </CollapsibleContainerConnected>
                    </Section>
                    <Section level={3} title="With custom icon">
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-2"
                            title="Collapsible Container with custom icon"
                            informationUrl="https://www.coveo.com/en"
                            informationTooltip={{
                                title:
                                    "I display information and if you click me you'll be led to a URL that was provided to me.",
                            }}
                            collapsibleToggleIcon={
                                <span className="flex space-between center-align">
                                    <Svg svgName={VaporSVG.svg.add.name} svgClass="icon" />
                                </span>
                            }
                        >
                            something!
                        </CollapsibleContainerConnected>
                    </Section>
                    <Section level={3} title="Disabled">
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-3"
                            title="Collapsible Container disabled"
                            informationUrl="https://www.coveo.com/en"
                            informationTooltip={{
                                title:
                                    "I display information and if you click me you'll be led to a URL that was provided to me.",
                            }}
                            disabled
                        >
                            something!
                        </CollapsibleContainerConnected>
                    </Section>
                    <Section level={3} title="Collapsed on mount (default)">
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-4"
                            title="Collapsible Container not expanded on mount"
                            informationTooltip={{
                                title: 'I display information only since no URL was given to me.',
                            }}
                        >
                            I was not expanded on mount, but now I am! Thanks!
                        </CollapsibleContainerConnected>
                    </Section>
                    <Section level={3} title="Can be expanded from outside the component (unless disabled)">
                        <Button
                            enabled
                            small
                            name="Toggle Container"
                            onClick={() => {
                                const collapsibleState = _.findWhere(Store.getState().collapsibles, {
                                    id: 'collapsible-container-example-5',
                                });
                                Store.dispatch(
                                    setCollapsibleExpanded(
                                        'collapsible-container-example-5',
                                        !collapsibleState.expanded
                                    )
                                );
                            }}
                        />
                        <Checkbox id="checkbox" checked={disabled} onClick={() => setDisabled(!disabled)} clearSides>
                            <Label>Disable dropdown</Label>
                        </Checkbox>
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-5"
                            title="Collapsible Container"
                            disabled={disabled}
                        >
                            You just expanded me with a button!
                        </CollapsibleContainerConnected>
                    </Section>
                    <Section>
                        <CollapsibleContainerConnected
                            id="collapsible-container-example-6"
                            title="Collapsible Container With JSON editor"
                        >
                            <JSONEditor
                                value={JSONToString(fakeJSON)}
                                collapsibleId="collapsible-container-example-6"
                            />
                        </CollapsibleContainerConnected>
                    </Section>
                </Section>
            </Section>
        </VaporComponent>
    );
};
