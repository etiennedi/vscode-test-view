import { parseFileName } from './fileName'
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
});
