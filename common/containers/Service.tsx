'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import {Paper, List, ListItem} from 'material-ui';
import { id } from '../services/util';

import Layout from '../components/Layout';

import services from '../fake/services';

const { Component } = React;

interface IProps {
  serviceId: string;
}

@connect(id)
export default class Service extends Component<IProps, void> {

  render(): JSX.Element {
    return (
      <Layout title="HOME">
        <Paper>
          <h1>{this.props.serviceId}</h1>
        </Paper>
      </Layout>
    );
  }
}
