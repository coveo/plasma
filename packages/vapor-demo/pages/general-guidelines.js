import * as VaporSVG from 'coveo-styleguide';

import Layout from '../layouts/Layout';
import Component from '../components/Component';

export default function GeneralGuidelines() {
    return (
        <Layout>
            <Component key="content-number" id="content-number" title="Content / Number">
                <div className="spaced-boxes-container flex flex-wrap" id="content-number">
                    <p className="h3">Always use a comma to separate thousand, e.g., 23,000,000.</p>
                </div>
            </Component>
            <Component
                key="content-ui-text-and-error-messages"
                id="content-ui-text-and-error-messages"
                title="Content / UI texts and error messages"
            >
                <div className="spaced-boxes-container flex flex-wrap" id="content-ui-text-and-error-messages">
                    <a
                        href="https://coveord.atlassian.net/wiki/spaces/DOC/pages/99680457/UI+Text+and+Error+Message+Guidelines"
                        className="h3"
                        target="blank"
                    >
                        See Doc. team Confluence Article (Coveo only)
                    </a>
                </div>
            </Component>
            <Component key="dialog" id="dialog" title="Dialog">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h3 py1">
                        Dialogs are used to communicate results of user actions and system events. Dialog can include
                        error messages, warning messages, success messages, inline validation, and system status
                        information.
                    </p>
                    <div className="flex flex-column" style={{width: '100%'}}>
                        <h2 className="h2 py1">Guidelines</h2>
                        <ul className="list-disc">
                            <li className="h3">
                                Deliver messages at the <span className="bold">right time</span>. Not every action needs
                                a dialog.
                            </li>
                            <li className="h3">
                                <span className="bold">Don't say too much</span> and just what is necessary. Don’t be
                                too verbose.
                            </li>
                            <li className="h3">
                                <span className="bold">Avoid</span> the word <span className="bold">"please"</span>,
                                except in situations in which the user is asked to do something inconvenient (such as
                                waiting) or the software is to blame for the situation. Also note that using the word
                                please can be interpreted to mean that the required action is optional.
                            </li>
                            <li className="h3">
                                Only use the word <span className="bold">"sorry"</span> in error messages that end in{' '}
                                <span className="bold">critical problems</span> for the user (like incapacity to use the
                                system or data loss).
                            </li>
                        </ul>
                    </div>
                </div>
            </Component>
            <Component key="messages-error" id="messages-error" title="Message / Error">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h3 py1">
                        Error messages are used to inform the user that an error happened. They are the most likely to
                        bother your users, because their particularity is that they cannot be dismissed, they must be
                        addressed. There are two types of error messages: errors caused by the user, and errors caused
                        by the system. If you can’t avoid error messages, use them sparingly.
                    </p>
                    <p className="h3 py1">When an error caused by the user occurs in a form, you must:</p>
                    <ul className="list-disc">
                        <li>
                            <h2 className="h2 pt1">Put a prominent top-level error message</h2>
                            <p className="h3">
                                Display a banner that summarizes what happened, with links to all input in error (really
                                helpful for screen readers) and how to resolve the existing error. The message can’t be
                                rejected by the user with a close button, it can only disappear when the error is
                                resolved. The banner appears at the top of the form and moves the content below.
                            </p>
                        </li>
                        <li>
                            <h2 className="h2 pt1">Highlight the incorrect input field </h2>
                            <p className="h3">
                                The problematic input field should be prominently indicated and should include
                                instructions that invite the user to try another answer. To do that, the label should be
                                red and red instructions should be added below the input field.
                            </p>
                        </li>
                    </ul>
                    <p className="h3 py1">When an error caused by the system occurs, you must:</p>
                    <ul className="list-disc">
                        <li>
                            <h2 className="h2 pt1">Display a modal prompt</h2>
                            <p className="h3">
                                The prompt is used to grab users’ attention. It must be explained in the message why the
                                error has happened without blaming the user for the error. Give the user indications:
                                contact the support, try again in 10 minutes, reload the page, etc.
                            </p>
                        </li>
                    </ul>
                </div>
            </Component>
            <Component key="messages-success" id="messages-success" title="Messages / Success">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h3 py1">
                        Success messages are used to inform that an action took place or that a form was completed
                        successfully. It appears in a green banner at the very top of the screen, over the content. The
                        success message dismiss itself by an animation because it does not require any actions from the
                        user. Contrary to error messages, success messages should never block people’s progress, they
                        should encourage the user to continue.
                    </p>
                    <p className="h3 py1">When displaying a success message, you must:</p>
                    <ul className="list-disc">
                        <li>
                            <h2 className="h2 pt1">Present the success message in context</h2>
                            <p className="h3">
                                The success message should be presented in context on the same form that was just
                                completed, so as not to block any further progress.
                            </p>
                        </li>
                        <li>
                            <h2 className="h2 pt1">Avoid success message page dead ends</h2>
                            <p className="h3">
                                When the success message is displayed in a process, it can include useful actions
                                related to the task the user just completed. It gives user clear and actionable next
                                steps.
                            </p>
                        </li>
                        <li>
                            <h2 className="h2 pt1">Use a Prompt to show a complex success message</h2>
                            <p className="h3">
                                Sometimes, success message contains information that people want to keep, like a code or
                                a link to an invitation. In such case, keep this valuable information visible on the
                                screen by using a prompt. The user should be able to copy and paste the information.
                            </p>
                        </li>
                    </ul>
                </div>
            </Component>
            <Component key="messages-warning" id="messages-warning" title="Messages / Warning">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h3 py1">
                        Warning messages are used to help users prevent error situations. They appear in a yellow banner
                        at the top of the screen and move the content below it. It should contain a suggested next step.
                        It should be rejected only by the user.
                    </p>
                </div>
            </Component>
            <Component key="inline-validation" id="inline-validation" title="Inline validation">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h3 py1">
                        Inline Validation is direct feedback displayed as the user progresses through the form to
                        confirm that their answers are valid. Inline Validation helps people complete forms quickly and
                        with less effort, fewer errors, and more satisfaction. The opposite approche is to validate all
                        the inputs at the end of the process, when the user submits the form.
                    </p>
                    <p className="h3 py1">
                        It can give many types of feedback: suggestions for valid answers, confirmation that a correct
                        answer was given, and live updates designed to help people stay within necessary limits.
                    </p>
                    <p className="h3 py1">
                        Inline validation is useful for the answers that are not obvious, answers with specific
                        formatting requirements or answers with potentially high error rates (e.g., Name would not be
                        appropriate for inline validation).
                    </p>
                </div>
            </Component>
            <Component key="hit-zones" id="hit-zones" title="Hit Zones">
                <div className="spaced-boxes-container flex flex-wrap">
                    <p className="h1 py1 bold text-light-blue">
                        <span
                            className="icon fill-medium-blue mr1"
                            dangerouslySetInnerHTML={{__html: VaporSVG.svg.tips.svgString}}
                        />
                        44px x 44px + 10px clearance around hit zones (54px total)
                    </p>

                    <p className="h3 py1">
                        Ideally, links and <span className="bold">button hit zones</span> should not be smaller than{' '}
                        <span className="bold">44px by 44px</span> so that they are easy to activate on touch screens
                        with the average human finger size and, with a mouse or trackpad, do not require a too precise
                        aim.
                    </p>

                    <p className="h3 py1">
                        If the hit zone has to be <span className="bold">smaller for technical reasons</span>, it is
                        important to make sure that there is a{' '}
                        <span className="bold">44px non-clickable space around the hit zone plus a 10px clearance</span>{' '}
                        (minimum non-clickable space between 2 hit zones), which makes a{' '}
                        <span className="bold">54px by 54px non-clickable space required for any hit zone.</span>
                    </p>
                </div>
            </Component>
        </Layout>
    );
}
