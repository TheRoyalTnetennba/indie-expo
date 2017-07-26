import React from 'react';

export class LeftNavButton extends React.Component {
  render() {
    return (<i onClick={this.props.onClick} className="fa fa-angle-left index-card-arrows" aria-hidden="true" />);
  }
}

export class RightNavButton extends React.Component {
  render() {
    return (<i onClick={this.props.onClick} className="fa fa-angle-right index-card-arrows" aria-hidden="true" />);
  }
}
