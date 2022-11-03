const isHighSeverity = (alert) => alert.rule.severity === 'error';

module.exports = async ({github, context}) => {
    const {data: alerts} = await github.rest.codeScanning.listAlertsForRepo({
        ...context.repo,
        tool_name: 'SnykCode',
        state: 'open',
    });
    const hasAtLeastOneHighAlert = alerts.some(isHighSeverity);
    process.exit(hasAtLeastOneHighAlert ? 1 : 0);
};
