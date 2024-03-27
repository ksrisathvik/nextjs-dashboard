// import type {Config} from 'jest';

// const config: Config = {
//   verbose: true,
// };

// export default config;

module.exports = {
  moduleNameMapper:{
    "@/(.*)": "<rootDir>/$1"
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};