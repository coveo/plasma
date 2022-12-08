import {ListBox} from '@coveord/plasma-react';
import {ClockSize24Px} from '@coveord/plasma-react-icons';

export default () => (
    <div style={{width: 300}}>
        <ListBox
            items={[
                {
                    value: '1',
                    displayValue: 'Option 1',
                },
                {
                    value: '2',
                    displayValue: 'Option 2',
                },
                {
                    value: '3',
                    displayValue: 'Option 3',
                },
            ]}
            footer={
                <div className="select-footer">
                    <ClockSize24Px />
                    Look at my Footer
                </div>
            }
        />
    </div>
);
