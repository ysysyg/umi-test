// @ts-ignore
export const IS_DEV = process.env.NODE_ENV.includes('dev');

export const APIS = {
  mock: {
    CBN: 'http://fe-mock.cbndata.org/mock/5f882844517503001654c7fc',
  },
  dev: {
    CBN: 'https://staging.cbndata.com',
  },
  prod: {
    CBN: 'https://www.cbndata.com',
  },
}