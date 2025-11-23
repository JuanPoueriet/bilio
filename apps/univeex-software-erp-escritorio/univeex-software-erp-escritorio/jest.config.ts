export default {
  displayName:
    'apps-univeex-software-erp-escritorio-univeex-software-erp-escritorio',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../coverage/apps/apps/univeex-software-erp-escritorio/univeex-software-erp-escritorio',
};
