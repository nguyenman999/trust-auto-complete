import React from 'react';
import AutoComplete from './index';

export default {
  title: 'AutoComplete',
};

export const Default = () => {
  return (
    <AutoComplete
      style={{ width: 200 }}
      inputIcon={<div>Icon</div>}
      options={[
        { text: 'text', value: 'text' },
        { text: 'abc', value: 'abc' },
        { text: 'asd', value: 'asd' },
        { text: 'wes', value: 'wes' },
      ]}
    />
  );
};
