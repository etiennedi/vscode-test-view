import * as path from 'path';
import * as vscode from 'vscode';
const glob = require('glob-promise')
import { isTestFile, stripTestExtension } from './fileType';
import { testFileIdentifiers } from './config'

export type ParsedFileName = {
    fullFileName: string,
    basename: string,
    basenameWithoutExtension: string,
    extension: string,
    dirname: string
}

export function parseFileName(fileName: string): ParsedFileName {
    return {
        fullFileName: fileName,
        basename: path.basename(fileName),
        basenameWithoutExtension: path.basename(fileName, path.extname(fileName)),
        extension: path.extname(fileName),
        dirname: path.dirname(fileName),
    };
};

export function switchFileName(oldFileName: ParsedFileName): Thenable<ParsedFileName> {
    const dirname = oldFileName.dirname;
    const extension = oldFileName.extension;

    const globPattern = oldFileName.basenameWithoutExtension + '*@(' + testFileIdentifiers.join('|') + ')*';

    if (!isTestFile(oldFileName)) {
        return glob(globPattern, { cwd: dirname })
            .then((res: string[]) => {
                const fileName = res[0];
                return parseFileName(path.join(dirname, fileName))
            })
    } else {
        const fileName = stripTestExtension(oldFileName.basenameWithoutExtension) + extension;
        return Promise.resolve(parseFileName(path.join(dirname, fileName)));
    }
}