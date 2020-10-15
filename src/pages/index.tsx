import React, { useEffect } from 'react';
import styles from './index.less';

import { Button } from 'antd';
import { connect } from 'umi';

const IndexPage = (props) => {
  console.log('ks props ', props);

  useEffect(() => {
    props.dispatch({
      type: 'test/fetchBoxIndex'
    })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>antd</Button>
      <p>{props.test.data}</p>
    </div>
  );
}

export default connect(
  ({ test, loading }: any) => ({
    test,
    loading: loading.models.test,
}))(IndexPage);
