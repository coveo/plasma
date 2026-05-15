module.exports = async ({github, context, message, avoidRepostsWith, updateExisting = false}) => {
    let comment;
    const normalizedMessage = message.replace(/\\n/g, '\n');

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

    if (comment && updateExisting) {
        await github.rest.issues.updateComment({
            ...context.repo,
            comment_id: comment.id,
            body: normalizedMessage,
        });
    } else if (!comment) {
        await github.rest.issues.createComment({
            ...context.repo,
            issue_number: context.issue.number,
            body: normalizedMessage,
        });
    }
};
