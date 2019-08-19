import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export const Overview = () => (
    <VaporComponent key="overview" id="overview" title="Overview">
        <div>
            <p className="h3 py1">
                Buttons are used to communicate and initialize actions when the user clicks them. Make sure that the
                label and states are clear to the user.
            </p>
            <h2 className="py1">Guidelines</h2>
            <ul className="list-disc">
                <li>
                    <p className="h3">
                        <span className="bold">Use links</span>, rather than buttons, to redirect users{' '}
                        <span className="bold">to another page</span> of the current website or app, or to another
                        website.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        <span className="bold">Avoid</span> using <span className="bold">too many buttons</span> on a
                        page. If you have a lot of buttons, less popular or less important actions may be grouped in a
                        “more” button (dropdown list) or visually styled as isolated actions or links.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        The button <span className="bold">label</span> should allow to{' '}
                        <span className="bold">foresee what will happen</span> when clicking it.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        Button <span className="bold">labels</span> should be <span className="bold">short</span> and
                        use <span className="bold">“trigger words”</span>.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        <span className="bold">Avoid</span> using the terms <span className="bold">OK</span>,{' '}
                        <span className="bold">Yes</span> and <span className="bold">No</span> to dismiss a Dialog
                        Modal.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        Whenever possible, the <span className="bold">first word</span> of the label should be an{' '}
                        <span className="bold">action verb</span> (e.g., the label for a button that allows the user to
                        add a notification should be “ADD NOTIFICATION”).
                    </p>
                </li>
                <li>
                    <p className="h3">
                        When a button includes <span className="bold">only an icon</span> (no label), the label should
                        be added in the <span className="bold">alternative text</span> element in the HTML and appear in
                        a <span className="bold">tooltip</span> when the cursor is above the button.
                    </p>
                </li>
                <li>
                    <p className="h3">
                        An <span className="bold">icon with a label does not need alternative text</span>. In this case,
                        the icon is a visual help to identify the purpose faster and alternative text would be redundant
                        (causing a screen reader to repeat the text).
                    </p>
                </li>
            </ul>
        </div>
    </VaporComponent>
);

export default Overview;
