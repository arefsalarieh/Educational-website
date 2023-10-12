import { AudioOutlined} from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      // color: 'bg-bgbtns',
      // backgroundColor: '#cca349',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const AntdInputSearch = () => (
  <Space direction="vertical">
    <Search
      placeholder="عنوان مورد نظر ...."
      onSearch={onSearch}
      style={{
        width: 270,
        backgroundColor: '#cca349',
        focus:"#6c4e0c"
      }}
    />
  </Space>
);
export {AntdInputSearch};