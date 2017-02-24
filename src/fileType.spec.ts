import { isTestFile, stripTestExtension } from './fileType';
import { parseFileName } from './fileName' // tested on its own, so safe to use here

describe('fileTypes', () => {
    describe('isTestFile', () => {
        it('returns true if the file contains .spec', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.spec.js'))
            ).toEqual(true);
        });

        it('returns false if the file does not contain .spec', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.js'))
            ).toEqual(false);
        });

        it('returns true only if .spec is found right before the extension', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.speca.js'))
            ).toEqual(false);
        });
    });
    describe('stripTestExtension', () => {
        it('trims of .spec from the basename without extension', ()=> {
            expect(
                stripTestExtension('awesomeCode.spec')
            ).toEqual('awesomeCode')

        });
    });
});