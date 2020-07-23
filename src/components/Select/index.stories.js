import React from 'react';
import Select from './index';

export default {
  title: 'Select',
};

export const Default = () => {
  return (
    <Select showSearch mode="combobox" style={{ width: 200 }}>
      <Select.Option key="1234" value={1234}>
        1234
      </Select.Option>
      <Select.Option key="1243" value={1243}>
        1243
      </Select.Option>
      <Select.Option key="1235" value={1235}>
        1235
      </Select.Option>
      <Select.Option key="1237" value={1237}>
        1237
      </Select.Option>
      <Select.Option key="1236" value={1236}>
        1236
      </Select.Option>
    </Select>
  );
};
