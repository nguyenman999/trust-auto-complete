import React, { useState } from 'react';
import AutoComplete from '../../../../components/AutoComplete';
import { Row, Col } from '../../../../components/Grid';
import { ReactComponent as Search } from '../../../../assets/search-icon.svg';
import styles from './style.module.scss';

const Content = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <div className={styles.container}>
      <Row justify="center" align="top">
        <Col xs={20} sm={20} md={8} lg={10} xl={10}>
          <AutoComplete
            className={styles['auto-complete-container']}
            placeholder="Try Vietnam"
            inputIcon={<Search />}
            value={value}
            options={options}
            onSelect={onSelect}
            onSearch={onSearch}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
