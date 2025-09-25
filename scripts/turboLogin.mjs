#!/usr/bin/env node
import {exec} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// The SSM parameter name where the TURBO_TOKEN is stored
const SSM_PARAMETER_NAME = '/turborepo/token';

const runCommandAndReturnText = async (command) =>
    new Promise((resolve, reject) => {
        exec(command, (error, stdout) => {
            if (!error) {
                resolve(stdout.trim());
            } else {
                reject(error);
            }
        });
    });

const validateAwsLogin = async () =>
    await runCommandAndReturnText('aws sts get-caller-identity')
        .then(() => true)
        .catch(() => false);

const getTurboToken = async () =>
    await runCommandAndReturnText(
        `aws ssm get-parameter --name "${SSM_PARAMETER_NAME}" --with-decryption --query Parameter.Value --output text`,
    );

const configureTurbo = (token) => {
    const turboDir = './.turbo';
    const configFile = path.join(turboDir, 'config.json');

    // Create directory if it doesn't exist
    if (!fs.existsSync(turboDir)) {
        fs.mkdirSync(turboDir, {recursive: true});
    }

    const config = {
        token,
    };

    fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
};

try {
    // Set AWS profile for local development
    process.env.AWS_PROFILE = 'dev';

    // Check if user is logged into AWS
    if (!(await validateAwsLogin())) {
        console.log('⚠️  Not logged in to AWS - skipping Turbo login');
        console.log('   Run "aws sso login" and "pnpm install" again to enable Turborepo remote caching');
        process.exit(0); // Don't fail, just skip
    }

    const token = await getTurboToken();

    if (!token) {
        console.log('⚠️  Could not retrieve TURBO_TOKEN - remote caching will be disabled');
        process.exit(0); // Don't fail, just skip
    }

    configureTurbo(token);
    console.log('✅ Successfully logged into Turborepo - remote caching enabled!');
} catch (error) {
    console.log('⚠️  Error setting up Turborepo:', error.message);
    console.log('   Remote caching will be disabled');
}
