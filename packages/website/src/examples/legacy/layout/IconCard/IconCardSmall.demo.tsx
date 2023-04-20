import {IconCard} from '@coveord/plasma-react';
import {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <IconCard
        small
        title="Web"
        icon={<img src="https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF" />}
        choices={[
            {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},
            {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},
            {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},
        ]}
        onClick={(choice) => alert(choice)}
        style={{width: '368px'}}
    />
);
export default Demo;
