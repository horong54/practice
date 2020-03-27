import React, {Component} from 'react';
import Subject from './components/Subject';
import Contents from './components/Contents';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: {title: "찢어진 바지",author: "스폰지밥"}
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} author={this.state.subject.author}></Subject>
        <Contents></Contents>
      </div>
    );
  }
}

export default App;
