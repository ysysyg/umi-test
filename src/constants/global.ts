// @ts-ignore
export const IS_DEV = process.env.NODE_ENV.includes('dev');

export const APIS = {
  dev: {
    CBN: 'https://staging.cbndata.com',
  },
  prod: {
    CBN: 'https://www.cbndata.com',
  }
}