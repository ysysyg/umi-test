import { extend } from "umi-request";
import curry from 'lodash.curry';

import genPrefix, { Brand } from './prefix';

const request = (brand: Brand, version: number) => {
  const prefix = genPrefix(brand, version);
  return extend({
    prefix,
    timeout: 1000,
    // headers: {
    //   "Content-Type": "multipart/form-data"
    // },
    // params: {
    //   token: "xxx" // 所有请求默认带上 token 参数
    // },
    errorHandler: function(error) {
      /* 异常处理 */
    }
  });
}

const CBN = curry(request)('CBN');
export const CBNRequest = CBN(0);
export const CBNV2Request = CBN(2);
export const CBNV3Request = CBN(3);
