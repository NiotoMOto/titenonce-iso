'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import GoogleMap = require('google-map-react');
import {Paper, List, ListItem} from 'material-ui';

import { id } from '../services/util';

import Layout from '../components/Layout';

import services from '../fake/services';

const { Component } = React;

interface IProps {
  serviceId: string;
}

interface IState {
  service?: any;
  lat?: any;
  long?: any;
}


@connect(id)
export default class Service extends Component<IProps, IState> {
  state = {
    service: services[0],
    lat: '10',
    long:'10',
  }

  tilesData = [
  {
    title: 'Breakfast',
    author: 'jill111',
  },
  {

    title: 'Tasty burger',
    author: 'pashminu',
  },
  {

    title: 'Camera',
    author: 'Danson67',
  },
  {

    title: 'Morning',
    author: 'fancycrave1',
  },
  {

    title: 'Hats',
    author: 'Hans',
  },
  {

    title: 'Honey',
    author: 'fancycravel',
  },
  {

    title: 'Vegetables',
    author: 'jill111',
  },
  {

    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

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

  render(): JSX.Element {
    return (
      <Layout title="HOME">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-center">
          </div>
        </div>
        <div className="row">
          <Paper className="col-sm-8 no-padding">
            <List
            >
              {this.tilesData.map(tile => (
                <ListItem
                  key={tile.title}
                  primaryText={tile.title}
                >
                </ListItem>
              ))}
            </List>
          </Paper>
          <Paper className="col-sm-4 no-padding">
            <div style={{width:'100%',height:'600px'}}>
              <GoogleMap
                bootstrapURLKeys={{key: 'AIzaSyBSpdnsV7268FmZmj5dFng0-VOyR_RiyD4'}}
                center={[+this.state.lat, +this.state.long]}
                zoom={9}
                minZoom={4}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </Paper>
        </div>
        <div>
          <input type="number" onChange={this.geoChange.bind(this, 'lat')} value={this.state.lat} />
          <input type="number" onChange={this.geoChange.bind(this, 'long')} value={this.state.long} />
        </div>
      </Layout>
    );
  }
}
