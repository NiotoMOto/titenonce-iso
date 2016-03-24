'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import {Divider, Paper, TextField} from 'material-ui';

import Layout from '../components/Layout';
import ListServices from '../components/ListServices';

import services from '../fake/services';


const { Component } = React;

interface IProps {
  cheers: string;
}

interface IStates {
  textFilter: string;
}

@connect(id)
export default class Home extends Component<IProps, IStates> {
  elements: Array<any>;
  constructor(){
    super();
    this.elements = services;
  }

  onchangeFilter(search) {
    console.log(search);
  }

  render(): JSX.Element {
    return (
      <Layout title="ok">
        <div className="row">
          <Paper className="col-sm-offset-2 col-sm-8 col-sm-offset-2">
            <TextField onChange={this.onchangeFilter} hintText="Recherche" fullWidth={true}/>
          </Paper>
        </div>
        <div className="row container-service">
        </div>
      </Layout>
    );
  }
}
