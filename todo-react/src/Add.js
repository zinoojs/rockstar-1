import React from 'react';

const buttonStyle = {
    padding: 4
  }
const inputStyle ={
    padding:4
  }
const allStyle={
    padding : 10,
    background:"#eee"
}
  class Add extends React.Component{
    render() {
      return (
        <div>
          <div style={allStyle}>
            <input style={inputStyle} type="text" ref = {this.input} />
            <button style={buttonStyle}>+</button>
          </div>
        </div>
      );
    }
  }

export default Add;