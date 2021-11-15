import * as React from 'react';
import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {IsDirtyIndicator} from '../../../../utils/tests/TestUtils';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../../../select/SingleSelectConnected';
import {withDirtySingleSelectHOC, IWithDirtySingleSelectHOCProps} from '../WithDirtySingleSelectHOC';

describe('SingleSelectWithDirty', () => {
    const SingleSelectWithHOC = withDirtySingleSelectHOC(SingleSelectConnected);

    const DEFAULT_PROPS: ISingleSelectOwnProps & IWithDirtySingleSelectHOCProps = {
        id: 'SOME_ID',
        items: [
            {
                value: '0',
            },
            {
                value: '1',
            },
        ],
    };

    it('should mount and unmount without error', () => {
        expect(() => {
            const {unmount} = render(<SingleSelectWithHOC {...DEFAULT_PROPS} />);
            unmount();
        }).not.toThrow();
    });

    it('should update the items prop to select the initial value', () => {
        const initialValue = 'my value';
        render(
            <SingleSelectWithHOC id="🍎" items={[{value: 'my value'}, {value: 'potato'}]} initialValue={initialValue} />
        );

        expect(screen.getByRole('button', {name: /my value/})).toBeVisible();
    });

    it('should trigger the dirty state when the user selects a value', () => {
        render(
            <>
                <SingleSelectWithHOC id="🍎" items={[{value: 'new value'}, {value: 'some value'}]} initialValue="" />
                <IsDirtyIndicator id="🍎" label="is dirty" />
            </>
        );

        userEvent.click(screen.getByRole('button'));

        userEvent.click(
            screen.getByRole('option', {
                name: /new value/i,
            })
        );

        expect(screen.getByText(/is dirty/i)).toBeVisible();
    });

    it('should trigger the dirty state when the user selects a different value', () => {
        render(
            <>
                <SingleSelectWithHOC
                    id="🍎"
                    items={[{value: 'new value'}, {value: 'old value'}]}
                    initialValue="old value"
                />
                <IsDirtyIndicator id="🍎" label="is dirty" />
            </>
        );

        userEvent.click(screen.getByRole('button'));

        userEvent.click(
            screen.getByRole('option', {
                name: /new value/i,
            })
        );

        userEvent.click(screen.getByRole('button'));

        userEvent.click(
            screen.getByRole('option', {
                name: /old value/i,
            })
        );

        expect(screen.getByText('is dirty')).toBeVisible();
    });

    it('should not trigger the dirty state when the initial values are the same as the selected ones', () => {
        render(
            <>
                <SingleSelectWithHOC
                    id="🍎"
                    items={[{value: 'some value'}, {value: 'current value'}]}
                    initialValue="current value"
                />
                <IsDirtyIndicator id={DEFAULT_PROPS.id} label="is dirty" />
            </>
        );

        expect(screen.queryByText('is dirty')).not.toBeInTheDocument();
    });
});
