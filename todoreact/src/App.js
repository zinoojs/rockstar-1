import React from 'react';
import './App.css';


class Fruit extends React.Component {
  render () {
    var index = this.props.index;
    return (
      <div>
        <li>{this.props.name} - ${this.props.price}
        <a href="#" onClick={(index)=>{
          this.props.remove(index)
        }}>&times;</a>
        </li>
      </div>
    )
  }
}
class Fruits extends React.Component{
    
    render(){
      return(
       <div>
          <ul>
          {
            this.props.data.map((item, index)=> { 
            return <Fruit 
            key = {index}
            id = {index}
            name={item.name} 
            price={item.price}
            remove = {this.props.remove}
            />
            })}
        </ul>
       </div>
      )
    }
}
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data : [
          {name : "apple", price : 20},
          {name : "apple", price : 20},
          {name : "apple", price : 20},
        ]
      }
      this.inputData = React.createRef();
      this.remove = this.remove.bind(this)
    }
    remove(index){
        var list = this.state.data
        list.splice(index, 1)
        this.setState({
          data : list
        })
    }
    render(){

      return (
        <div>
          <input type="text" ref={this.inputData} />
          <button onClick = {()=>{
            var list = this.state.data
            list.push({
              name:this.inputData.current.value,
              price:20
            })
            this.setState({
              data:list
            })
            this.inputData.current.value=""
            this.inputData.current.focus()
          }}>
            +
          </button>
          <Fruits data={this.state.data} remove={this.remove} />
        </div>
        )
      }
    
    }
export default App;
