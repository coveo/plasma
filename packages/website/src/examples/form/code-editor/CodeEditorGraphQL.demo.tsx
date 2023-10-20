import {CodeEditor, useForm} from '@coveord/plasma-mantine';

const initialQuery = `query TestGraphQl {
  user(where: { email: { _eq: "user@example.com" } }) {
    email
    name
    company {
      name
    }
  }
}
`;

const Demo = () => {
    const form = useForm({
        initialValues: {
            config: initialQuery,
        },
    });

    return (
        <CodeEditor
            language="graphql"
            label="Query"
            description="Write a GraphQL query, subscription, or mutation"
            monacoLoader="cdn"
            {...form.getInputProps('config')}
        />
    );
};
export default Demo;
