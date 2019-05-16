import React from 'react';

const HeaderStyle= {
    background: 'rgb(41, 94, 238)',
    padding: 12,
    fontSize: 20,
    margin: 0,
    textAlign: 'center',
    color: 'aliceblue', 
}
class Header extends React.Component{
    render(){
      return(
        <div>
          <h1 style={HeaderStyle}>TODO List ({this.props.count}) </h1>
        </div>
      )
    }
  }

  export default Header;