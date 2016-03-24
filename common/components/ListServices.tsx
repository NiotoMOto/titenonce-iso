'use strict';

import * as React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';

import ServiceItem from './ServiceItem';

const { Component } = React;

interface IProps {
  items: Array<any>;
}


export default class ListServices extends Component<IProps, void> {
  render(): JSX.Element {
    return (
      <div className="list-services">
      {
        this.props.items.map((el, key) => {
          return (
            <ServiceItem key={key} className="col-xs-3" item={el} />
          )
        })
      }
      </div>
    );
  }
}
