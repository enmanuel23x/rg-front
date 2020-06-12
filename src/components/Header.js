import React, {useState} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Menu, Button } from "antd";
import axios from "axios";



const Header = ({ location }) => {
  const [fecha, setFecha] = useState("Actualizando..");
  function updateDB(){
    axios.get("http://localhost:5000/test1")
        .then((data) => {
            // alert(data.data)
            //console.log("DB Up to date")
        })
        .catch((err) => {
            console.error(err)
        })

}
function updateFecha(){
  axios.get("http://localhost:5000/getUpdateTime")
        .then((data) => {
            // alert(data.data)
            setFecha(data.data)
        })
        .catch((err) => {
            console.error(err)
        })

}
updateFecha()
  return(
  <Layout.Header
    style={{
      padding: "0 32px"
    }}
  >
    <div
      style={{
        float: "left"
      }}
    >
        <img src={require('../assets/logo.png')} style={{marginRight: "20px"}} alt="logo" />
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        lineHeight: "64px",
      }}>



        {window.location.pathname !== '/static' ?
            <Menu.Item key="/explore" className="customclass">
                <Link to="/explore">Crear Reportes</Link>
            </Menu.Item>
            : null}

        {window.location.pathname !== '/static' ?
            <Menu.Item key="/" className="customclass">
                <Link to="/">Dashboard</Link>
            </Menu.Item>
            : null}
        {window.location.pathname === '/static' ?
            <Menu.Item key="/static" className="customclass">
                <Link to="/static">Reporte General RG</Link>
            </Menu.Item>
            : null}
            <div style={{float: "right"}}>
            <small>Ultima Actualización: {fecha}</small>
        </div>
            <Button type="primary" onClick={() => updateDB()} style={{ backgroundColor: "#08979c", borderColor: "#08979c", float: "right", margin: '16px' }}>Actualizar BD</Button>
    </Menu>
  </Layout.Header>
);
    };
export default withRouter(Header);
