const axios = require('axios');
const _ = require('underscore');

const branchName = process.env.CHANGE_BRANCH;
const prNumber = process.env.CHANGE_ID;

const endpoint = `https://api.github.com/repos/coveo/react-vapor/pulls/${prNumber}/reviews`;
const liveDemoMessage = `[Live demo available here](https://vaporqa.cloud.coveo.com/feature/${branchName}/index.html).`;

console.log('Posting demo link in GitHub Pull Request...\n');
const handleError = (e) => {
    console.log('Something went wrong while posting Demo URL in GitHub Pull Request. See error below for details:\n');
    console.log(e);
    process.exit(1);
};
const exitSinceDemoIsAlreadyPosted = () => {
    console.log('Demo URL is already posted in GitHub Pull Request.');
    process.exit();
};

const options = {
    headers: {
        Authorization: `token ${process.env.GIT_TOKEN}`,
    },
};

axios
    .get(endpoint, options)
    .then((response) =>
        _.chain(response.data).pluck('body').contains(liveDemoMessage).value()
            ? exitSinceDemoIsAlreadyPosted()
            : axios
                  .post(endpoint, {event: 'COMMENT', body: liveDemoMessage}, options)
                  .then(() => {
                      console.log('Demo URL successfully posted in GitHub Pull Request');
                      process.exit();
                  })
                  .catch(handleError)
    )
    .catch(handleError);
