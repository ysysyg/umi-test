import { CBNV3Request } from '@/utils';

export async function BoxIndex(params) {
  return CBNV3Request.get('/box/index')
}
