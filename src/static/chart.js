import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';

const tableRender = ({ resultSet }) => (
  <Table 
    pagination={false}
    columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))} 
    dataSource={resultSet.tablePivot()} 
  />
  
);

const API_URL = "http://localhost:5000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE5NzIzOTMsImV4cCI6MTU5MjA1ODc5M30.sTULcuOB8b__YJ0ckwe34AYrxDXj-r3TZxUmlxR-3jU",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const ChartRenderer = () => <QueryRenderer
  query={{
    "dimensions": [
      "Inactivity.colaborador",
      "Inactivity.asignacion",
      "Inactivity.porcentaje",
      "Inactivity.fechaInicio",
      "Inactivity.fechaFin"
    ],
    "timeDimensions": [],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender)}
/>;

export default ChartRenderer;