import {BlankSlateWithTableInError, ButtonWithRefreshCallback} from '@coveord/plasma-react';

export default () => (
    <table className="table">
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <BlankSlateWithTableInError
                title="Unable to retrieve X"
                description="Super clear error message localized to ensure a good comprehension about the current error"
                additionalSection={
                    <ButtonWithRefreshCallback
                        id="refresh"
                        delay={10}
                        callback={(start) => setTimeout(start, 2000)}
                        renderCount={(count: number) => (
                            <span className="small-text">Auto refresh in {count} seconds</span>
                        )}
                        button={{
                            name: 'Refresh',
                            enabled: true,
                        }}
                        buttonContainerProps={{
                            className: 'mb2',
                        }}
                    />
                }
            />
        </tbody>
    </table>
);
