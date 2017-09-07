import React, { Component } from 'react';

class History extends Component {
  render() {
    console.log("aaa");
    console.log(this.props);
    return (
      <div>
          <span>{this.props.match.params.value}</span>
        <h2>History</h2>
      </div>
    );
  }
}

export default History;