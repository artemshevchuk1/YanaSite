import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <div className="center-block">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="dark">Link</Button>
      </div>
    );
  }
}
