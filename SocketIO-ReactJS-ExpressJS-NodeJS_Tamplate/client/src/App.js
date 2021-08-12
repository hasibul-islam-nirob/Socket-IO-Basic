import React, {Component} from 'react';
import io from 'socket.io-client';

class App extends Component {

  componentDidMount() {
      const socket = io.connect('/');
  }

  render() {
        return (
            <div>
                <h1>Hy ! I'm From Client Side</h1>
            </div>
        );
    }
}

export default App;