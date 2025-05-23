import {Center, Code, Container, Stack, Text, Title} from '@coveord/plasma-mantine';
import {useRouteError} from 'react-router-dom';
import {FunctionComponent} from 'react';
import {withTranslation, WithTranslation} from 'react-i18next';
import classes from './styles/UnexpectedError.module.css';

export const InternalUnexpectedError: FunctionComponent<WithTranslation> = ({t}) => {
    const error = useRouteError() as Error;
    console.error(error);
    return (
        <Center>
            <Container size="xl">
                <Stack gap="xs">
                    <Title order={3}>{error.message || 'Unexpected error'}</Title>
                    <Text size="sm">
                        <div>{t('unexpected_error-subtitle')}</div>
                    </Text>
                    <Code block className={classes.code}>
                        {error.stack}
                    </Code>
                    <Text size="sm">
                        <div>{t('unexpected_error-description')}</div>
                    </Text>
                </Stack>
            </Container>
        </Center>
    );
};

export const UnexpectedError = withTranslation()(InternalUnexpectedError);
