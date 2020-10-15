import React from 'react';
import { Link } from 'umi';

export default class Step extends React.PureComponent {
  render() {
    console.log('props ', this.props)
    const { match: { params } } = this.props;
    if (params.id === 1) return '11111'
    return (
      <div>
        {`step ${params.id}`}
        <Link to={`/test/${Number(params.id) + 1}`}>Go to list page</Link>
      </div>
    )
  }
}