import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from '../../lib/index.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen : false
    }
    this.openModal = this.openModal.bind(this);
  }

  openModal () {
    this.setState({isOpen:true});
  }

  render () {
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId="dJcBBY0IlKU"></ModalVideo>
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);