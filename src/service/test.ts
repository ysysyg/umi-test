import { CBNV3Request } from '@/utils';

export async function BoxIndex() {
  return CBNV3Request.get('/box/index')
}
