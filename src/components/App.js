import React, { Component } from 'react';
import MemeInput from './MemeInput';
import MemeDisplay from './MemeDisplay';

export default class App extends Component {
  state = {
    header:'',
    imgURL:'',
    footer:''
  };

  handleChange= ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { header, imgURL, footer } = this.state;
    return (
    <>
      <h1>Meme-orizer</h1>
      <MemeInput header={header} imgURL={imgURL} footer={footer} handleChange={this.handleChange}/>
      <MemeDisplay header={header} imgURL={imgURL} footer={footer}/>
    </>
    );
  }
}
