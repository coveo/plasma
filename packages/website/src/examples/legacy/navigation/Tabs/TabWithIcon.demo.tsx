import {TabConnected, TabContent, TabNavigation, TabPaneConnected} from '@coveord/plasma-react';
import {HeartSize16Px, LightningSize16Px, RocketSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <>
        <TabNavigation>
            <TabConnected groupId="banane" id="tab5" title="Pikachu" icon={LightningSize16Px} />
            <TabConnected groupId="banane" id="tab6" title="Gyarados" icon={HeartSize16Px} />
            <TabConnected groupId="banane" id="tab7" title="Charmander" icon={RocketSize16Px} />
        </TabNavigation>
        <TabContent>
            <TabPaneConnected groupId="banane" id="tab5">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the first tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="banane" id="tab6">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the second tab.</div>
            </TabPaneConnected>
            <TabPaneConnected groupId="banane" id="tab7">
                <div className="mod-header-padding mod-form-top-bottom-padding">Content of the third tab .</div>
            </TabPaneConnected>
        </TabContent>
    </>
);
export default Demo;
