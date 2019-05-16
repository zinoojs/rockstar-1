import React from 'react';
class Todo extends React.Component{
    render(){
      return(
        <div>
          <ul>
            { this.props.todo.map((item)=>{
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

  export default Todo;