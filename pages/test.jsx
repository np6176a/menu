import React, { Component } from 'react';
import Layout from '../common/Layout';

export default class Test extends Component {
  render() {
    return (
      <Layout title="Test">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <h2 className="col-md-12">
              A Sample Of Another Page Created by React
            </h2>
          </div>
        </div>
      </Layout>
    );
  }
}