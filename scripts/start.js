#!/usr/bin/env node
import {build} from './build.js';

process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
    throw err;
});

void build({watch: true});
