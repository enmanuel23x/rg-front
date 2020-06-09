import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, setState} from "react";
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';
import axios from 'axios'
const bookingRender = ({ resultSet }) => (
    <div>
        {resultSet.loadResponse.data != undefined ?
        <table id="booking" className="table table-striped table-bordered table-hover">
        <caption>Tabla booking</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Client_id</th>
                <th>Resource_id</th>
                <th>Project_id</th>
                <th>Booker_id</th>
                <th>Booker_email</th>
                <th>Duration</th>
                <th>%</th>
            </tr>
        </thead>
        <tbody>
            {resultSet.loadResponse.data.map((element, i) => 
                <tr key={i}>
                    <td>{element["Booking.id"]}</td>
                    <td>{element["Booking.clientId"]}</td>
                    <td>{element["Booking.resourceId"]}</td>
                    <td>{element["Booking.projectId"]}</td>
                    <td>{element["Booking.bookerId"]}</td>
                    <td>{element["Booking.bookerEmail"]}</td>
                    <td>{element["Booking.duration"]}</td>
                    <td>{element["Booking.percentage"]}</td>
                </tr>
            )}
        </tbody>
    </table>
    : null
        }
    </div>
    
  );
  const clientRender = ({ resultSet }) => (
    <div>
        {resultSet.loadResponse.data != undefined ?
        <table id="clients" className="table table-striped table-bordered table-hover">
        <caption>Tabla client</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {resultSet.loadResponse.data.map((element) => 
                <tr key={element["Client.name"]}>
                    <td>{element["Client.id"]}</td>
                    <td>{element["Client.name"]}</td>
                </tr>
            )}
        </tbody>
    </table>
    : null
        }
    </div>
    
  );
  const projectRender = ({ resultSet }) => (
    <div>
        {resultSet.loadResponse.data != undefined ?
        <table id="projects" className="table table-striped table-bordered table-hover">
        <caption>Tabla project</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Project_code</th>
                <th>Notes</th>
                <th>Client_id</th>
            </tr>
        </thead>
        <tbody>
            {resultSet.loadResponse.data.map((element) => 
                <tr key={element["Project.id"]}>
                    <td>{element["Project.id"]}</td>
                    <td>{element["Project.name"]}</td>
                    <td>{element["Project.projectCode"]}</td>
                    <td>{element["Project.notes"]}</td>
                    <td>{element["Project.clientId"]}</td>
                </tr>
            )}
        </tbody>
    </table>
    : null
        }
    </div>
    
  );
  const resourceRender = ({ resultSet }) => (
    <div>
        {resultSet.loadResponse.data != undefined ?
        <table id="resources" className="table table-striped table-bordered table-hover">
        <caption>Tabla resource</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job_title</th>
            </tr>
        </thead>
        <tbody>
            {resultSet.loadResponse.data.map((element) => 
                <tr key={element["Resource.name"]}>
                    <td>{element["Resource.id"]}</td>
                    <td>{element["Resource.name"]}</td>
                    <td>{element["Resource.email"]}</td>
                    <td>{element["Resource.jobTitle"]}</td>
                </tr>
            )}
        </tbody>
    </table>
    : null
        }
    </div>
    
  );
  const API_URL = "http://localhost:5000"; // change to your actual endpoint
  
  const cubejsApi = cubejs(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE3MTU3OTksImV4cCI6MTU5MTgwMjE5OX0.Ie1CeGM8pAbVww512o8_hndF8geR-hoc8xKiTRehec0",
    { apiUrl: API_URL + "/cubejs-api/v1" }
  );
  
  const renderChart = (Component) => ({ resultSet, error }) => (
    (resultSet && <Component resultSet={resultSet} />) ||
    (error && error.toString()) || 
    (<Spin />)
  )

class Home extends Component {
    update(){
        axios.get("http://localhost:5000/test1")
        .then((data) => {
            alert(data.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    render() {
        return(
            <div className="container">
                <QueryRenderer
                    query={{
                        "dimensions": [
                            "Booking.id",
                            "Booking.clientId",
                            "Booking.resourceId",
                            "Booking.bookerId",
                            "Booking.projectId",
                            "Booking.bookerEmail",
                            "Booking.duration",
                            "Booking.percentage"
                            ],
                        "timeDimensions": [],
                        "filters": []
                        }}
                    cubejsApi={cubejsApi}
                render={renderChart(bookingRender)}
                />
                <QueryRenderer
                    query={{
                        "dimensions": [
                            "Client.id",
                            "Client.name"
                            ],
                        "timeDimensions": [],
                        "filters": []
                        }}
                    cubejsApi={cubejsApi}
                render={renderChart(clientRender)}
                />
                <QueryRenderer
                    query={{
                        "dimensions": [
                            "Project.id",
                            "Project.name",
                            "Project.projectCode",
                            "Project.notes",
                            "Project.clientId"
                            ],
                        "timeDimensions": [],
                        "filters": []
                        }}
                    cubejsApi={cubejsApi}
                render={renderChart(projectRender)}
                />
                <QueryRenderer
                    query={{
                        "dimensions": [
                            "Resource.id",
                            "Resource.name",
                            "Resource.email",
                            "Resource.jobTitle"
                            ],
                        "timeDimensions": [],
                        "filters": []
                        }}
                    cubejsApi={cubejsApi}
                render={renderChart(resourceRender)}
                />
                <button className="btn btn-primary" onClick={() => this.update()}>Actualizar</button>
            </div>
        )
    };
}
export default Home;