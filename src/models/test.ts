import { BoxIndex } from '@/service/test';

export default {
  namespace: "test",
  state: {
    data: [1,2,3],
    info: null,
  },
  reducers: {
    setState(state, { type, ...ret }) {
      return {
        ...state,
        ...ret,
      };
    },
  },
  effects: {
    *fetchBoxIndex({ payload }, { call, put }) {
      const { data } = yield call(BoxIndex);
      console.log('ks fetchBoxIndex ', data);
      yield put({ type: 'setState', info: data })
    },
  },
};