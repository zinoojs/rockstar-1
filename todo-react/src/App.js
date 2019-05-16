import React from 'react';
import Add from './Add';
import Header from './Header';
import Todo from './Todo';
import Done from './Done';

const AppStyle={
    fontFamily: 'Courier New', 
    width: 600,
    margin: '40px auto',
    borderRadius: 8,
    background: 'rgb(241, 230, 206)',
    border: '3px solid #ddd'
}
const Content={
    padding: 18,
    marginLeft: 8
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo:[
            {"_id": 1, "subject":"something todo"},
            {"_id": 2, "subject":"another something todo"},
            {"_id": 3, "subject":"more something todo"},
      ],
      done:[
        {"_id": 3, "subject":"other something todo"},
        {"_id": 4, "subject":"forever another something todo"},
        
      ]
    }
  }
  render(){

    return (
      <div style={AppStyle}>
      <Header count={this.state.todo.length} />
      <div style={Content}>
      <Add/>
      <Todo todo={this.state.todo} />
      <hr/>
      <Done done={this.state.done} />
      </div>
      </div>
    )
  }
}

export default App;
