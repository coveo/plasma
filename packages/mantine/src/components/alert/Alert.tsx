import {CheckmarkSize16Px, CriticalSize16Px, TipSize16Px, WarningSize16Px} from '@coveord/plasma-react-icons';
import {Alert} from '@mantine/core';

export const AlertTip = Alert.withProps({color: 'gray', icon: <TipSize16Px height={16} />});
export const AlertSuccess = Alert.withProps({color: 'success', icon: <CheckmarkSize16Px height={16} />});
export const AlertWarning = Alert.withProps({color: 'warning', icon: <WarningSize16Px height={16} />});
export const AlertCritical = Alert.withProps({color: 'critical', icon: <CriticalSize16Px height={16} />});
