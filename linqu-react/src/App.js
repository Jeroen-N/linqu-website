import React, { Component } from 'react';
import header from './Pug/header.pug';
import video from './Pug/video.pug';
import photos from './Pug/photographs.pug';
import service from './Pug/service.pug';
import todo from './Pug/whattodo.pug';
import contact from './Pug/contact.pug';
import footer from './Pug/footer.pug';

export class Body extends Component {
  render() {
    return [
      header.call(this),
      todo.call(this),
      service.call(this),
      photos.call(this),
      video.call(this),
      contact.call(this),
      footer.call(this)
    ];
  }
}
