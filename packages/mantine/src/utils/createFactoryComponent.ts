import {ExtendComponent, FactoryPayload, MantineThemeComponent} from '@mantine/core';

export const identity = <T>(value: T): T => value;

export type CustomComponentThemeExtend<T extends FactoryPayload> = (props: ExtendComponent<T>) => MantineThemeComponent;
