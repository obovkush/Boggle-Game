import React from 'react';
import { Row, Col } from 'antd';

const Field = () => {
  React.useEffect(() => {
    const cellAll = document.querySelectorAll('.ant-col');

    function classСheck(cell) {
      return cell.classList.contains('cell-checked');
    }

    function mouseOver(event) {
      event.preventDefault();
      const cell = event.target;
      if (classСheck(cell)) {
        return;
      }
      cell.classList.add('cell-hover');
    }

    function mouseOut(event) {
      event.preventDefault();
      const cell = event.target;
      if (classСheck(cell)) {
        return;
      }
      cell.classList.remove('cell-hover');
    }

    function clickOn(event) {
      event.preventDefault();
      const cell = event.target;
      if (classСheck(cell)) {
        cell.classList.remove('cell-checked');
        cell.classList.add('cell-hover');
      }
      else {
        cell.classList.remove('cell-hover');
        cell.classList.add('cell-checked');
      } 
    }

    cellAll.forEach((cell) => {
      cell.addEventListener('mouseover', mouseOver);
      cell.addEventListener('mouseout', mouseOut);
      cell.addEventListener('click', clickOn);
    })
  })

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>
    </>
      
  )
};

export default Field;
