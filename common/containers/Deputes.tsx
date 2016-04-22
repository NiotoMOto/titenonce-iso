'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import GoogleMap = require('google-map-react');
import {Paper, List, ListItem} from 'material-ui';
import {Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton, CardText} from 'material-ui';
import { id } from '../services/util';

import Layout from '../components/Layout';
import ServiceItem from '../components/ServiceItem';

import services from '../fake/services';

const { Component } = React;

interface IProps {
  deputes: Array<any>;
}

interface IState {
  lat?: any;
  long?: any;
}


@connect(id)
export default class Service extends Component<IProps, IState> {
  state = {
    lat: '10',
    long:'10',
  }
  pageProps = {
    height: 0
  }

  geoChange(type, ev){
    this.setState({
      [type]: ev.target.value
    });
  }

  handleChange(a, b, c, d){
    this.setState({
      lat: a.center.lat,
      long: a.center.lng,
    });
  }

  constructor(props){
    super(props);
    // this.pageProps.height = document.getElementById('mapContainer').offsetHeight;
    // console.log(this.pageProps);
  }

  render(): JSX.Element {
    return (
      <Layout title="HOME">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-center">
          </div>
        </div>
        <div className="row" style={{height: '100%'}}>
          <Paper className="col-sm-7 no-padding h-100">
            {this.props.deputes.map(elu => (
              <ServiceItem className="col-sm-12 col-md-2" item={elu} />
            ))}
          </Paper>
          <Paper className="col-sm-5 no-padding map-container">
            <div style={{width:'100%',height:'100%'}}>
              <GoogleMap
                bootstrapURLKeys={{key: 'AIzaSyBSpdnsV7268FmZmj5dFng0-VOyR_RiyD4'}}
                center={[+this.state.lat, +this.state.long]}
                zoom={9}
                minZoom={4}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </Paper>
          <div>
            <input type="number" onChange={this.geoChange.bind(this, 'lat')} value={this.state.lat} />
            <input type="number" onChange={this.geoChange.bind(this, 'long')} value={this.state.long} />
          </div>
        </div>
      </Layout>
    );
  }
}
