import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
};