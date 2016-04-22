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
            title={this.props.item.nom}
            subtitle={this.props.item.prenom}
            
          />
          <CardTitle title={this.props.item.nom} subtitle="Card subtitle" />
          <CardActions>
            <FlatButton linkButton={true} href={`/services/${this.props.item.id}`} label="Détails" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
