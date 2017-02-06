import React, { Component } from 'react';
import Header from './Header';
import Timeline from './Timeline';


class Home extends Component {
  render() {    
    return (
    <div id="root">
      <div className="main">
        <Header store={this.context.store}/>
        <Timeline login={this.props.params.login}/>
      </div>
    </div>
    );
  }
}

Home.contextTypes = {
  store : React.PropTypes.object.isRequired
}

export default Home;