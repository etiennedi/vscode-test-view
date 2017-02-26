import { ParsedFileName } from './fileName'
import { testFileIdentifiers } from './config'
const escapeStringRegexp = require('escape-string-regexp');

const pattern: RegExp = new RegExp(
    testFileIdentifiers
        .map(escapeStringRegexp)
        .join('|')
    );

export function isTestFile(file: ParsedFileName): boolean {
    console.log('file', file.basenameWithoutExtension);
    console.log('pattern', pattern);
    return !!file.basenameWithoutExtension.match(pattern);
}

export function stripTestExtension(basenameWithoutExtension: string): string {
    return basenameWithoutExtension.replace(pattern, '');
}
