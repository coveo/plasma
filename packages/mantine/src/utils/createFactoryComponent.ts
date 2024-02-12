import {ExtendComponent, FactoryPayload} from '@mantine/core';
import {ThemeExtend} from '@mantine/core/lib/core/factory/factory';

export const identity = <T>(value: T): T => value;

export type CustomComponentThemeExtend<T extends FactoryPayload> = (props: ExtendComponent<T>) => ThemeExtend<T>;
