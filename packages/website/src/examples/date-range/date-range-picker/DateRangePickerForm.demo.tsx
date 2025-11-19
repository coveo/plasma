import {Button, DateRangePicker, DatesRangeValue, Stack, Text, useForm} from '@coveord/plasma-mantine';

const Demo = () => {
    const form = useForm<{dateRange: DatesRangeValue<string>}>({
        initialValues: {
            dateRange: [null, null],
        },
        validate: {
            dateRange: (value) => {
                if (value[0] === null || value[1] === null) {
                    return 'Please select a date range';
                }
                if (new Date(value[0]) > new Date(value[1])) {
                    return 'Start date must be before end date';
                }
                return null;
            },
        },
    });
    return (
        <Stack gap="xs">
            <DateRangePicker {...form.getInputProps('dateRange')} />
            <Text>
                <b>Selected range</b>: {`${form.values.dateRange[0]} - ${form.values.dateRange[1]}`}
            </Text>
            <Button type="submit" onClick={() => form.validate()}>
                Validate
            </Button>
        </Stack>
    );
};

export default Demo;
