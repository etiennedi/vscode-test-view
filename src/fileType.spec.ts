jest.mock('./config', () => ({
    'testFileIdentifiers': ['.spec', '.test']
}));

import { isTestFile, stripTestExtension } from './fileType';
import { parseFileName } from './fileName' // tested on its own, so safe to use here


const proxyquire = require('proxyquire');

describe('fileTypes', () => {
    describe('isTestFile', () => {
        it('returns true if the file contains matches one of the configs', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.spec.js'))
            ).toEqual(true);
        });

        it('returns true if the file contains matches another one of the configs', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.test.js'))
            ).toEqual(true);
        });

        it('returns false if the file does not contain .spec', () => {
            expect(
                isTestFile(parseFileName('/some/location/foo.js'))
            ).toEqual(false);
        });

    });
    describe('stripTestExtension', () => {
        it('trims of .spec from the basename without extension', () => {
            expect(
                stripTestExtension('awesomeCode.spec')
            ).toEqual('awesomeCode')
        });

        it('trims of .test from the basename without extension', () => {
            expect(
                stripTestExtension('awesomeCode.test')
            ).toEqual('awesomeCode')
        });
    });
});
