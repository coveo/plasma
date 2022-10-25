import {useForm} from '@mantine/form';
import {CodeEditor} from './CodeEditor';

export default () => {
    const form = useForm({
        initialValues: {
            config: '{"key":"value"}',
        },
        validate: {
            config: (jsonValue) => {
                try {
                    const config = JSON.parse(jsonValue);
                    if (!config.key) {
                        return 'The key must have a value';
                    }
                } catch {
                    return 'Invalid JSON';
                }
                return null;
            },
        },
    });

    return (
        <CodeEditor
            language="json"
            label="Configuration"
            description="This JSON configuration is very important"
            {...form.getInputProps('config')}
        />
    );
};
