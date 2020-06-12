import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./body.css";
import "antd/dist/antd.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { Layout } from "antd";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import client from "./graphql/client";
import Header from "./components/Header";
import WebSocketTransport from '@cubejs-client/ws-transport';
import config from './config/config'
const API_URL = config.webSocket;
const CUBEJS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE3MTgzNjYsImV4cCI6MTU5MTgwNDc2Nn0.A97-l_DYw9lRxezNx2aMzhmUrQkeU5MkODEyVlw3opc";
const cubejsApi = cubejs({
  transport: new WebSocketTransport({ authorization: CUBEJS_TOKEN, apiUrl: API_URL })
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: "100%"
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <AppLayout>{children}</AppLayout>
    </ApolloProvider>
  </CubeProvider>
);

export default App;
