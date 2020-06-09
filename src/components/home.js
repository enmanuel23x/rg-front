import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
const axios = require('axios').default;

class Home extends Component {
    constructor(props) {
      super(props);
      this.setState({
          clients:[],
          projects:[],
          resources:[],
          booking:[]
        });
    }
    render() {
        return(
            <div className="container">
                <table id="booking" className="table table-striped table-bordered table-hover">
                    <caption>Tabla booking</caption>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Client_id</th>
                            <th>Resource_id</th>
                            <th>Project_id</th>
                            <th>Duration</th>
                            <th>Booker_id</th>
                            <th>Booker_email</th>
                            <th> % </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>a@a.a</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                <table id="projects" className="table table-striped table-bordered table-hover">
                    <caption>Tabla project</caption>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Name</th>
                            <th>Project_code</th>
                            <th>Notes</th>
                            <th>Client_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>a@a.a</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                <table id="clients" className="table table-striped table-bordered table-hover">
                    <caption>Tabla client</caption>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                </table>
                <table id="resources" className="table table-striped table-bordered table-hover">
                    <caption>Tabla resource</caption>
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job_title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>a@a.a</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">Actualizar</button>
            </div>
        )
    };
}
export default Home;