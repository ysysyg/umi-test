import { APIS, IS_DEV } from '@/constants/global';

export type Brand = 'CBN';

export default (brand: Brand, version: number) => {
  const env = IS_DEV ? 'dev' : 'prod';
  if (version === 0) return APIS[env][brand];
  return `${APIS[env][brand]}/api/v${version}`
}