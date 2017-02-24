import { parseFileName, switchFileName } from './fileName'
describe('fileName', () => {
    describe('parseFileName', () => {
        it('splits up a file URI into its parts', () => {
            expect(parseFileName('/some/location/foo.spec.js'))
                .toEqual({
                    fullFileName: '/some/location/foo.spec.js',
                    previous: null,
                    basename: 'foo.spec.js',
                    basenameWithoutExtension: 'foo.spec',
                    dirname: '/some/location',
                    extension: '.js',
                })

        })
    });

    describe('switchFileName', () => {
        it('returns a non-spec file when called with a spec file', () => {
            expect(
                switchFileName({
                    fullFileName: '/some/location/foo.spec.js',
                    previous: null,
                    basename: 'foo.spec.js',
                    basenameWithoutExtension: 'foo.spec',
                    dirname: '/some/location',
                    extension: '.js',
                })
            ).toEqual({
                fullFileName: '/some/location/foo.js',
                previous: '/some/location/foo.spec.js',
                basename: 'foo.js',
                basenameWithoutExtension: 'foo',
                dirname: '/some/location',
                extension: '.js',
            })
        })

        it('returns a spec file when called with a non-spec file', () => {
            expect(
                switchFileName({
                    fullFileName: '/some/location/foo.js',
                    previous: null,
                    basename: 'foo.js',
                    basenameWithoutExtension: 'foo',
                    dirname: '/some/location',
                    extension: '.js',
                })
            ).toEqual({
                fullFileName: '/some/location/foo.spec.js',
                previous: '/some/location/foo.js',
                basename: 'foo.spec.js',
                basenameWithoutExtension: 'foo.spec',
                dirname: '/some/location',
                extension: '.js',
            })
        })
    })
});
