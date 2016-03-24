'use strict';

import * as React from 'react';
import {Toolbar, ToolbarGroup, TextField} from 'material-ui';
import {IconMenu, IconButton, FontIcon, MenuItem} from 'material-ui';
const { Component } = React;

interface IProps {
  children?: React.ReactNode;
  title: string;
}

export default class Layout extends Component<IProps, void> {
  render(): JSX.Element {
    return (
      <div>
        <Toolbar className="main-toolbar">
          <ToolbarGroup className="brand-title" firstChild={true} float="left">
            <h4>Titenonce</h4>
          </ToolbarGroup>
          <ToolbarGroup  float="left">
            <TextField hintText="recherche" className="seach"/>
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <IconMenu
              iconButtonElement= {
                <IconButton iconClassName="muidocs-icon-custom-github" />
              }
              targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem index={1} href="/logout" primaryText="Sign out" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <div className="main-container">
          {this.props.children}
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}
