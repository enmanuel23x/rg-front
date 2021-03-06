import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Table, Input } from 'antd';
import config from '../config/config'
const tableRender = ({ resultSet }) => (
    <MyCSearchTable resultSet={resultSet}/>
);

class MyCSearchTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        filterTable: null, 
        columns: props.resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key, align: (c.key == "Inactivity.porcentaje" ? "right":"center") })), 
        baseData: props.resultSet.tablePivot().sort(function(a, b) {
          const af = a["Inactivity.colaborador"]; 
          const bf = b["Inactivity.colaborador"]; 
          const as = (a["Inactivity.cliente"] == "----" ? "zzzzzzzzzz" :  a["Inactivity.cliente"]);
          const bs = (b["Inactivity.cliente"] == "----" ? "zzzzzzzzzz" :  b["Inactivity.cliente"]);
            
          if(af == bf) { 
              return (as < bs) ? -1 : (as > bs) ? 1 : 0; 
          } else { 
              return (af < bf) ? -1 : 1; 
          } 
      }) };
    }
  
    search = value => {
      const { baseData } = this.state;
      //console.log(this.state.columns)
      const filterTable = baseData.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
  
      this.setState({ filterTable });
      //console.log(filterTable)
    };
  
    render() {
      const { filterTable, columns, baseData } = this.state;
      return (
        <div>
          <Input.Search
            style={{ width: "50%", float: "right", zIndex: "100", position: "absolute", paddingRight: "50px", paddingTop: "15px"}}
            placeholder="Buscar...."
            enterButton
            onSearch={this.search}
          />
          <Table 
            {...this.state}
            pagination= { {pageSizeOptions: ['3','5','10','25','50'], showSizeChanger: true, position:['topLeft','none']}}
            columns={columns} 
            dataSource={filterTable == null ? baseData : filterTable} style={{paddingLeft: "50px", paddingRight:"50px"}}
          />
        </div>
      );
    }
  }
const API_URL = config.apiURL; // change to your actual endpoint
//console.log(API_URL)
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
      "Inactivity.cliente",
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
