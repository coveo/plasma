module.exports = async ({github, context, message, avoidRepostsWith}) => {
    let comment;

    if (avoidRepostsWith) {
        for await (const {data: comments} of github.paginate.iterator(github.rest.issues.listComments, {
            ...context.repo,
            issue_number: context.issue.number,
        })) {
            comment = comments.find((c) => c?.body?.includes(avoidRepostsWith));
            if (comment) {
                break;
            }
        }
    }

    if (!comment) {
        await github.rest.issues.createComment({
            ...context.repo,
            issue_number: context.issue.number,
            body: message,
        });
    }
};
