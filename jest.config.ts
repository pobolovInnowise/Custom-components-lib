
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    // moduleNameMapper: {
    //     '\\.module\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    //     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    //     '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    // },
    moduleNameMapper: {
        '\\.module\\.css$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleFileExtensions: ['ts','tsx','js','jsx','json','node']
};
