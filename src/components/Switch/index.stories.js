import React from 'react';
import Switch from './index';
import { ReactComponent as Night } from '../../assets/night-icon.svg';
import { ReactComponent as Sunny } from '../../assets/sunny-icon.svg';

export default {
  title: 'Switch',
};

export const Default = () => {
  return (
    <Switch
      icons={{
        checked: <Night />,
        unchecked: <Sunny />,
      }}
    />
  );
};
