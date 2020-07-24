import React from 'react';
import Select from './index';

export default {
  title: 'Select',
};

export const Default = () => {
  return (
    <Select
      style={{ width: 200 }}
      options={[
        { text: 'text', value: 'text' },
        { text: 'abc', value: 'abc' },
        { text: 'asd', value: 'asd' },
        { text: 'wes', value: 'wes' },
      ]}
    />
  );
};
