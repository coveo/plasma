import {getLastTag} from '@coveo/semantic-monorepo-tools';
import url from 'url';

const VERSION_PREFIX = 'v';
const lastTag = await getLastTag(VERSION_PREFIX);

export default () => lastTag;

// detect if that file is run directly instead of being imported
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    console.log(lastTag);
}
