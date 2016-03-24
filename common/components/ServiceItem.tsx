'use strict';

import * as React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import {FlatButton} from 'material-ui';

const { Component } = React;

interface IProps {
  item: any;
  className?: string;
}


export default class ServiceItem extends Component<IProps, void> {

  constructor(props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className={this.props.className + ' service-item'}>
        <Card>
          <CardHeader
            title={this.props.item.title}
            subtitle={this.props.item.subtitle}
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>

          </CardText>
          <CardActions>
            <FlatButton linkButton={true} href={`/service/${this.props.item.id}`} label="Détails" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
