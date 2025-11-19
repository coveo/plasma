import {DateRangePicker, DatesRangeValue, Stack, Text} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState<DatesRangeValue<string>>([null, null]);
    return (
        <Stack gap="xs">
            <DateRangePicker value={value} onChange={setValue} opened={opened} onOpenedChange={setOpened} />
            <Text>
                <b>Selected range</b>: {`${value[0]} - ${value[1]}`}
            </Text>
            <Text>
                <b>Popover state</b>: {opened ? 'open' : 'closed'}
            </Text>
        </Stack>
    );
};

export default Demo;
