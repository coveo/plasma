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
        </Layout>
    );
}
