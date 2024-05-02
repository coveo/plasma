import {StickyFooter} from '@coveord/plasma-mantine';
import {Button, Modal, Stack, TextInput} from '@mantine/core';
import axios from 'axios';
import {FunctionComponent, useState} from 'react';

import {setToken, useAuthContext} from '../authentication';

export const LoginModal: FunctionComponent<{opened; close}> = ({opened, close}) => {
    const {setUser} = useAuthContext();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const onLogin = async () => {
        const value = {
            identifier: email,
            password: pwd,
        };
        await axios
            .post(`${import.meta.env.VITE_ADMIN_API_URL}/auth/local`, JSON.stringify(value), {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(({data}) => {
                if (data?.error) {
                    throw data.error;
                } else {
                    setToken(data.jwt);
                    setUser(data.user);

                    close();
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <Modal.Root opened={opened} onClose={close} closeOnClickOutside={false} size="sm" centered>
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
                <Modal.Body>
                    <Stack>
                        <TextInput
                            label="Email"
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                        />
                        <TextInput
                            label="Password"
                            value={pwd}
                            onChange={(event) => setPwd(event.currentTarget.value)}
                        />
                    </Stack>
                </Modal.Body>
                <StickyFooter borderTop>
                    <Button variant="outline" onClick={close}>
                        Cancel
                    </Button>
                    <Button variant="filled" onClick={onLogin}>
                        Login
                    </Button>
                </StickyFooter>
            </Modal.Content>
        </Modal.Root>
    );
};
