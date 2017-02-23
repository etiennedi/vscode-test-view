import * as path from 'path';
import { isTestFile, stripTestExtension } from './fileType';

const config = {
    appendTestExtension: '.spec',
}

export type ParsedFileName = {
    fullFileName: string,
    previous: string | null,
    basename: string,
    basenameWithoutExtension: string,
    extension: string,
    dirname: string
}

export function parseFileName(fileName: string): ParsedFileName {
    return {
        fullFileName: fileName,
        previous: null,
        basename: path.basename(fileName),
        basenameWithoutExtension: path.basename(fileName, path.extname(fileName)),
        extension: path.extname(fileName),
        dirname: path.dirname(fileName),
    };
};

export function switchFileName(oldFileName: ParsedFileName): ParsedFileName {
    const testFile = isTestFile(oldFileName);

    // Unchanged
    const previous = oldFileName.fullFileName;
    const dirname = oldFileName.dirname;
    const extension = oldFileName.extension;

    //Updated
    const basenameWithoutExtension = testFile ? (
        stripTestExtension(oldFileName.basenameWithoutExtension)
    ) : (
            oldFileName.basenameWithoutExtension + config.appendTestExtension
        );
    const basename = basenameWithoutExtension + extension;
    const fullFileName = path.join(dirname, basename);

    return {
        fullFileName,
        previous,
        basename,
        basenameWithoutExtension,
        extension,
        dirname,
    };
}