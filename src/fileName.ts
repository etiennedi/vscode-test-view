import * as path from 'path';
import { isTestFile } from './fileType';

export type ParsedFileName = {
    original : string,
    basename: string,
    basenameWithoutExtension: string,
    extension: string,
    dirname: string
}

export function parseFileName(fileName : string) : ParsedFileName {
    return {
        original: fileName,
        basename: path.basename(fileName),
        basenameWithoutExtension: path.basename(fileName, path.extname(fileName)),
        extension: path.extname(fileName),
        dirname: path.dirname(fileName),
    };
};

// export function switchFileName(oldFileName: ParsedFileName) : ParsedFileName {
//     const testFile = isTestFile(oldFileName);

//     const original  = oldFileName.original
//     const basename = testFile ? oldFileName.basename + k

//     return {
//         original,
//         basename: path.basename(fileName),
//         basenameWithoutExtension: path.basename(fileName, path.extname(fileName)),
//         extension: path.extname(fileName),
//         dirname: path.dirname(fileName),
//     };
// }