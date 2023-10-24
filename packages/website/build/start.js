import {spawn} from 'node:child_process';

const viteArgs = [];

setTimeout(() => {
    spawn('vite', viteArgs, {stdio: 'inherit', shell: true});
}, 5000);
