import React, { useEffect, useState } from 'react';
import { Button, Descriptions } from 'antd';

function BlogInfo(props) {
  const [Blog, setBlog] = useState({});

  useEffect(() => {
    setBlog(props.detail);
  }, [props.detail]);

  return (
    <div>
      <Descriptions title='Product Info'>
        <Descriptions.Item label='Description'>
          {' '}
          {Blog.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
    </div>
  );
}

export default BlogInfo;
