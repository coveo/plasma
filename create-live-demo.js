const axios = require('axios');
const _ = require('underscore');
const branchName = process.env.BRANCH_NAME; // travis provides this env variable
const prNumber = process.env.TRAVIS_PULL_REQUEST;
const userpassword = process.env.GITUSRPWD;
const APIEndpointWithAuthentication = `https://${userpassword}@api.github.com/repos/coveo/react-vapor/pulls/${prNumber}/reviews`;
const liveDemoMessage = `Live demo of [react-vapor](https://coveo.github.io/react-vapor/${branchName}/) and [vapor](https://coveo.github.io/react-vapor/${branchName}/vapor/).`;

console.log('Posting demo in GitHub Pull Request...\n');
const handleError = (e) => {
    console.log('Something went wrong while posting Demo URL in GitHub Pull Request. See error below for details:\n');
    console.log(e);
    process.exit();
};
const exitSinceDemoIsAlreadyPosted = () => {
    console.log('Demo URL is already posted in GitHub Pull Request.');
    process.exit();
};
axios
    .get(APIEndpointWithAuthentication)
    .then((response) =>
        _.chain(response.data)
            .pluck('body')
            .contains(liveDemoMessage)
            .value()
            ? exitSinceDemoIsAlreadyPosted()
            : axios
                  .post(APIEndpointWithAuthentication, {event: 'COMMENT', body: liveDemoMessage})
                  .then(() => {
                      console.log('Demo URL successfully posted in GitHub Pull Request');
                      process.exit();
                  })
                  .catch(handleError)
    )
    .catch(handleError);
