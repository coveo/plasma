import {IconCard} from '@coveord/plasma-react';
import {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <IconCard
        title="Web"
        description="Enter a starting URL and automatically index all the pages of this site."
        icon={<img src="https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF" />}
        choices={[
            {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},
            {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},
            {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},
        ]}
        onClick={(choice) => alert(choice)}
    />
);
export default Demo;
