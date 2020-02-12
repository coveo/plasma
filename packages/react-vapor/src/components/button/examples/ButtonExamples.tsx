import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Section} from '../../section/Section';
import {Svg} from '../../svg/Svg';
import {Button} from '../Button';

export class ButtonExamples extends React.Component<any, any> {
    static description = 'Buttons communicate actions, and, when clicked, initialize those actions.';
    render() {
        return (
            <>
                <Section title="Button Set">
                    <Section level={2} title="Usability">
                        <Button enabled={true} name="Enabled button" />
                        <Button enabled={false} name="Disabled button" />
                    </Section>
                    <Section
                        level={2}
                        title="Style modifiers"
                        description="Add the specific class to change the style of the buttons."
                    >
                        <Section
                            level={3}
                            title="Color modifiers"
                            description="Change the color of the buttons (with primary, you can either add 'mod-primary' class or set the 'primary' prop to true)."
                        >
                            <Button enabled={true} name="Default" />
                            <Button enabled={true} primary={true} name="Primary Button" />
                            <Button enabled={true} classes={['mod-danger']} name="Danger Button" />
                            <Button enabled={true} classes={['mod-link']} name="Borderless Button" />
                        </Section>
                        <Section title="Size modifiers" level={3} description="Change the size of the buttons.">
                            <Button enabled={true} classes={['mod-small']} name="Small" />
                            <Button enabled={true} name="Default" />
                            <Button enabled={true} classes={['mod-large']} name="Large" />
                        </Section>
                    </Section>
                    <Section
                        title="Append and Prepend"
                        level={2}
                        description="Add text or icons before and after any button."
                    >
                        <Button enabled={true} classes={['mod-prepend']}>
                            <span className="btn-prepend">P</span>
                            Prepend Button
                        </Button>
                        <Button enabled={true} classes={['mod-append']} name="Button Append">
                            <span className="btn-append">A</span>
                        </Button>
                        <Button enabled={true} classes={['mod-prepend', 'mod-large']}>
                            <span className="btn-prepend mod-icon">
                                <Svg
                                    className="icon"
                                    style={{width: 32, height: 32}}
                                    svgName={VaporSVG.svg.domainGoogle.name}
                                />
                            </span>
                            Log in with Google
                        </Button>
                        <Button
                            enabled={true}
                            classes={['mod-append', 'mod-on-hover', 'spaced-box']}
                            name="Append on Hover"
                        >
                            <span className="btn-append">A</span>
                        </Button>
                    </Section>
                    <Section title="Actions" level={2} description="Add actions associated with buttons">
                        <Section level={3} title="Link" description="Add a hyperlink to a button">
                            <Button enabled={true} name="Link Button" link="http://perdu.com/" target="_blank" />
                        </Section>
                        <Section level={3} title="Callback" description="Add a on click callback to a button">
                            <Button enabled={true} name="Button click me!" onClick={() => alert('Hello')} />
                        </Section>
                    </Section>
                </Section>
                <Section level={2} title="Tooltips" description="Add a tooltip with a button">
                    <Button enabled={true} name="Button with tooltip" tooltip="Tooltip test" />
                    <Button
                        enabled={true}
                        name="Button with tooltip top"
                        tooltip="Tooltip test"
                        tooltipPlacement="top"
                    />
                </Section>
                <Section level={2} title="Button with children Svg">
                    <Button classes={['p1', 'full-content-y']} enabled>
                        <Svg svgName={'add'} className="icon mod-2x" />
                    </Button>
                    <Button classes={['p1', 'full-content-y']} name={'Button'} enabled>
                        <Svg svgName={'add'} className="ml1 icon mod-2x" />
                    </Button>
                </Section>
            </>
        );
    }
}
