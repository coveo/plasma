import writeFileAtomic from 'write-file-atomic';

export async function writeFile(content: object, filename: string) {
    const json = JSON.stringify(content, null, 4);
    await writeFileAtomic(filename, json, (err?: Error) => {
        if (err) {
            throw err;
        }
    });
}
