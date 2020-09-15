export type FileMetadata = {
    name: string;
    type: string;
    size: number;
    lastModified: number;
};

const serialize = (file: File): FileMetadata =>
    file
        ? {
              name: file.name,
              type: file.type,
              size: file.size,
              lastModified: file.lastModified,
          }
        : undefined;

export const FileUtils = {serialize};
