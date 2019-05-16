import React from 'react';

class Done extends React.Component{
    render(){
      return(
        <div>
          <ul>
          { this.props.done.map((item)=>{
              return(
                <li key={this._id}>
                  {item.subject}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
export default Done;  