import { ParsedFileName } from './fileName'

const pattern : RegExp = /\.spec$/;

export function isTestFile(file : ParsedFileName) : boolean {
   return !! file.basenameWithoutExtension.match(pattern);
}

export function stripTestExtension(basename : string) : string {
    return basename.replace(pattern, '');
}