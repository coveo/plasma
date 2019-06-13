import Component from '../components/Component';
import MessageTooltip from '../components/messages/MessageTooltip';
import Layout from '../layouts/Layout';
import MessageToast from '../components/messages/MessageToast';
import MessagePrompt from '../components/messages/MessagePrompt';
import MessagePopover from '../components/messages/MessagePopover';

const Messages = () => {
    return (
        <Layout>
            <Component
                id="popover"
                title="Popover"
                usage="A simple popover"
                stylesheet="scss/components/popover.scss"
                withSource
            >
                <MessagePopover />
            </Component>

            <Component
                id="prompt"
                title="Prompt"
                usage="Prompt style"
                stylesheet="scss/components/prompt.scss"
                withSource
            >
                <MessagePrompt />
            </Component>

            <Component
                id="toast"
                title="Toast"
                usage="Use it when you want to notify the user of an action result."
                stylesheet="scss/components/toast.scss"
                withSource
            >
                <MessageToast />
            </Component>

            <Component
                id="tooltip"
                title="Tooltip"
                usage="Use to display a tooltip on any element."
                stylesheet="scss/components/tooltip.scss"
                withSource
            >
                <MessageTooltip />
            </Component>
        </Layout>
    );
};

export default Messages;
