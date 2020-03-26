import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    CheckboxConnected,
    IDispatch,
    Label,
    LabeledInput,
    ListBox,
    MenuConnected,
    Section,
    Svg,
    ValidationActions,
    withDirtySaveButtonHOC,
} from 'react-vapor';

// start-print

const SaveButton = withDirtySaveButtonHOC(Button);

export class ButtonExamples extends React.Component<any, any> {
    static description = 'Buttons communicate actions, and, when clicked, initialize those actions.';
    render() {
        return (
            <Section>
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
                <Section level={2} title="Save button with validation">
                    <DirtyCheckboxesForSaveButton />
                    <SaveButton
                        enabled
                        name="Save Button"
                        validationIds={['inputId']}
                        onClick={() => alert('Saving!')}
                    />
                </Section>
                <Section level={2} title="Menu">
                    <Section level={3} title="Default Menu">
                        <div className="form-control">
                            <MenuConnected
                                id="example-1"
                                buttonSvg={
                                    <>
                                        menu
                                        <Svg svgName={'chart-down'} svgClass={'ml1 icon fill-orange'} />
                                    </>
                                }
                            >
                                <div>Elements...</div>
                            </MenuConnected>
                        </div>
                    </Section>
                    <Section level={3} title="Menu disabled">
                        <div className="form-control">
                            <MenuConnected
                                id="example-2"
                                buttonSvg={
                                    <>
                                        menu
                                        <Svg svgName={'chart-down'} svgClass={'ml1 icon fill-pure-white'} />
                                    </>
                                }
                                buttonProps={{
                                    primary: true,
                                    enabled: false,
                                    tooltip: 'not available right now',
                                }}
                            >
                                <ListBox items={[{value: 'option 1'}, {value: 'option 2'}]} />
                            </MenuConnected>
                        </div>
                    </Section>
                    <Section level={3} title="Menu with options">
                        <div className="form-control">
                            <MenuConnected
                                id="example-3"
                                buttonSvg={
                                    <>
                                        menu
                                        <Svg svgName={'chart-down'} svgClass={'ml1 icon fill-pure-white'} />
                                    </>
                                }
                                buttonProps={{
                                    primary: true,
                                }}
                            >
                                <ListBox items={[{value: 'option 1'}, {value: 'option 2'}]} />
                            </MenuConnected>
                        </div>
                    </Section>
                    <Section level={3} title="Menu with option started from the right">
                        <div className="form-control right">
                            <MenuConnected
                                id="example-4"
                                positionRight
                                buttonSvg={
                                    <>
                                        menu
                                        <Svg svgName={'chart-down'} svgClass={'ml1 icon fill-pure-white'} />
                                    </>
                                }
                                buttonProps={{
                                    primary: true,
                                }}
                            >
                                <ListBox
                                    items={[
                                        {value: 'option 1'},
                                        {value: 'option 2'},
                                        {value: 'option with very long value 3'},
                                    ]}
                                />
                            </MenuConnected>
                        </div>
                    </Section>
                </Section>
            </Section>
        );
    }
}

// stop-print

const StatefulCheckboxesForSaveButtonDisconnect: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = ({
    setDirty,
    setWarning,
    setError,
}) => (
    <LabeledInput label="Toggles to test the Save Button">
        <CheckboxConnected id="saveCheckboxDirty" handleOnClick={(checked) => setDirty(!checked)} clearSides>
            <Label>Click on me to set the component as dirty</Label>
        </CheckboxConnected>
        <CheckboxConnected
            id="saveCheckboxWarning"
            handleOnClick={(checked) => setWarning(!checked ? 'WARNING' : '')}
            clearSides
        >
            <Label>Click on me to set a warning</Label>
        </CheckboxConnected>
        <CheckboxConnected
            id="saveCheckboxError"
            handleOnClick={(checked) => setError(!checked ? 'ERROR' : '')}
            clearSides
        >
            <Label>Click on me to set an error</Label>
        </CheckboxConnected>
    </LabeledInput>
);

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setDirty: (value: boolean) => dispatch(ValidationActions.setDirty('inputId', value)),
    setWarning: (value: string) => dispatch(ValidationActions.setWarning('inputId', value)),
    setError: (value: string) => dispatch(ValidationActions.setError('inputId', value)),
});
const DirtyCheckboxesForSaveButton = connect(null, mapDispatchToProps)(StatefulCheckboxesForSaveButtonDisconnect);
