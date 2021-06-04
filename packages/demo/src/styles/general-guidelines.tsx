import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Section, Svg} from 'react-vapor';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent id="general-guidelines" title="General Guidelines">
        <Section
            level={2}
            title="Content / Number"
            description="Always use a comma to separate thousand, e.g., 23,000,000."
        />
        <Section
            level={2}
            title="Content / UI texts and error messages"
            description={
                <a
                    href="https://coveord.atlassian.net/wiki/spaces/DOC/pages/99680457/UI+Text+and+Error+Message+Guidelines"
                    className="link"
                    target="blank"
                >
                    See Doc. team Confluence Article (Coveo only)
                </a>
            }
        />

        <Section
            level={1}
            title="Dialog"
            description="Dialogs are used to communicate results of user actions and system events. Dialog can include error
                messages, warning messages, success messages, inline validation, and system status information."
        >
            <Section level={2} title="Guidelines">
                <ul className="list-disc body-m-book-subdued">
                    <li>
                        <Section level={3} title="Deliver messages at the right time">
                            Not every action needs a dialog.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title="Don’t be too verbose">
                            Don't say too much and just what is necessary.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title='Avoid the word "please"'>
                            You can use it in situations in which the user is asked to do something inconvenient (such
                            as waiting) or when the software is to blame for the situation. Also note that using the
                            word please can be interpreted to mean that the required action is optional.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title='Avoid the word "sorry"'>
                            Only use the word "sorry" in error messages that end in{' '}
                            <span className="bolder"> critical problems</span> for the user (like incapacity to use the
                            system or data loss).
                        </Section>
                    </li>
                </ul>
            </Section>
        </Section>
        <Section
            level={1}
            title="Message / Error"
            description="Error messages are used to inform the user that an error happened. They are the most likely to
                bother your users, because their particularity is that they cannot be dismissed, they must be
                addressed. There are two types of error messages: errors caused by the user, and errors caused by
                the system. If you can’t avoid error messages, use them sparingly."
        >
            <Section level={2} title="When an error caused by the user occurs in a form, you must:">
                <ul className="list-disc body-m-book-subdued">
                    <li>
                        <Section level={3} title="Put a prominent top-level error message">
                            Display a banner that summarizes what happened, with links to all input in error (really
                            helpful for screen readers) and how to resolve the existing error. The message can’t be
                            rejected by the user with a close button, it can only disappear when the error is resolved.
                            The banner appears at the top of the form and moves the content below.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title="Highlight the incorrect input field">
                            The problematic input field should be prominently indicated and should include instructions
                            that invite the user to try another answer. To do that, the label should be red and red
                            instructions should be added below the input field.
                        </Section>
                    </li>
                </ul>
            </Section>
            <Section level={2} title="When an error caused by the system occurs, you must:">
                <ul className="list-disc">
                    <li>
                        <Section level={3} title="Display a modal prompt">
                            <p className="body-m-book-subdued">
                                The prompt is used to grab users’ attention. It must be explained in the message why the
                                error has happened without blaming the user for the error. Give the user indications:
                                contact the support, try again in 10 minutes, reload the page, etc.
                            </p>
                        </Section>
                    </li>
                </ul>
            </Section>
        </Section>
        <Section
            level={1}
            title="Messages / Success"
            description="Success messages are used to inform that an action took place or that a form was completed
                successfully. It appears in a green banner at the very top of the screen, over the content. The
                success message dismiss itself by an animation because it does not require any actions from the
                user. Contrary to error messages, success messages should never block people’s progress, they should
                encourage the user to continue."
        >
            <Section level={2} title="When displaying a success message, you must:">
                <ul className="list-disc body-m-book-subdued">
                    <li>
                        <Section level={3} title="Present the success message in context">
                            The success message should be presented in context on the same form that was just completed,
                            so as not to block any further progress.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title="Avoid success message page dead ends">
                            When the success message is displayed in a process, it can include useful actions related to
                            the task the user just completed. It gives user clear and actionable next steps.
                        </Section>
                    </li>
                    <li>
                        <Section level={3} title="Use a Prompt to show a complex success message">
                            Sometimes, success message contains information that people want to keep, like a code or a
                            link to an invitation. In such case, keep this valuable information visible on the screen by
                            using a prompt. The user should be able to copy and paste the information.
                        </Section>
                    </li>
                </ul>
            </Section>
        </Section>
        <Section level={1} title="Messages / Warning">
            <p className="body-m-book-subdued">
                Warning messages are used to help users prevent error situations. They appear in a yellow banner at the
                top of the screen and move the content below it. It should contain a suggested next step. It should be
                rejected only by the user.
            </p>
        </Section>
        <Section level={1} title="Inline validation">
            <p className="body-m-book-subdued">
                Inline Validation is direct feedback displayed as the user progresses through the form to confirm that
                their answers are valid. Inline Validation helps people complete forms quickly and with less effort,
                fewer errors, and more satisfaction. The opposite approche is to validate all the inputs at the end of
                the process, when the user submits the form.
                <br></br>
                <br></br>
                It can give many types of feedback: suggestions for valid answers, confirmation that a correct answer
                was given, and live updates designed to help people stay within necessary limits.
                <br></br>
                <br></br>
                Inline validation is useful for the answers that are not obvious, answers with specific formatting
                requirements or answers with potentially high error rates (e.g., Name would not be appropriate for
                inline validation).
            </p>
        </Section>
        <Section level={1} title="Hit Zones">
            <p className="bold">
                <Svg svgName={VaporSVG.svg.tips.name} svgClass="icon mr1 mod-2x mod-success" />
                44px x 44px + 10px clearance around hit zones (54px total)
            </p>
            <p className="body-m-book-subdued">
                Ideally, links and <span className="bolder">button hit zones</span> should not be smaller than{' '}
                <span className="bolder">44px by 44px</span> so that they are easy to activate on touch screens with the
                average human finger size and, with a mouse or trackpad, do not require a too precise aim.
            </p>
            <p className="body-m-book-subdued">
                If the hit zone has to be <span className="bolder">smaller for technical reasons</span>, it is important
                to make sure that there is a{' '}
                <span className="bolder">44px non-clickable space around the hit zone plus a 10px clearance</span>{' '}
                (minimum non-clickable space between 2 hit zones), which makes a{' '}
                <span className="bolder">54px by 54px non-clickable space required for any hit zone.</span>
            </p>
        </Section>
    </VaporComponent>
);
