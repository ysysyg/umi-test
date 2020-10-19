import React, { useEffect, useCallback } from 'react';
import styles from './index.less';

import { Button } from 'antd';
import { connect, history } from 'umi';

const IndexPage = (props: any) => {
  useEffect(() => {
    props.dispatch({
      type: 'test/fetchBoxIndex'
    })
  }, []);

  console.log('ks props ', props);

  const gotoTestPage = useCallback(() => {
    history.push('/test/1')
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={gotoTestPage}>goto test page</Button>
      <p>{props.test.data}</p>
    </div>
  );
}

export default connect(
  ({ test, loading }: any) => ({
    test,
    loading: loading.models.test,
}))(IndexPage);
