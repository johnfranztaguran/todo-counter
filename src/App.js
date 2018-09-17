import React, { Component } from 'react';
import Compo from './components/compo';
//import Input from './components/input';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            input:'',
            items: []
        }
        this.allHere = this.allHere.bind(this)
        
        // this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(input){
        console.log(this.state.input)
        this.setState({
            input: input
        })
        
    }
    onSubmit(input){
        let listItem = this.state.items
        listItem.push(input)
        this.setState({
            items: listItem
        })
        this.state.input = ""
    }

    allHere(hand, operator){
        console.log(operator)
        this.setState({
             count: operator === "plus" ? hand +1 : hand -1
        })
        
        // if(operator === "plus"){
        //     hand++
        // }else{
        //     hand--
        // }
        // this.setState({
        //     count: hand
        // })
       
    }
    render() { 
        return ( 
            <div>
                <Compo
                    allHere={this.allHere}
                    changeHere={this.state.count}
                />
                <div>
                <input onChange={(e) => this.onChange(e.target.value)} 
                        value={this.state.input}
                        type="text" />
                <button onClick={() => this.onSubmit(this.state.input)}>click</button>
                <ul>
                    {this.state.items.map((val) => <li key={val}>{val}</li>)}
                </ul>
                </div>
            </div>
         );
    }
}
 
export default App;



{/* <button type="button" name="increment" className="login-btn" onClick={() =>this.allHere("plus")} >+</button>
                <button type="button" name="decrement" className="login-btn" onClick={() =>this.allHere("minus")}>-</button>
                <div>{this.state.count}</div> */}

    // increment(){
    //     this.setState({
    //       count: this.state.count + 1
    //     })
    //   }
    //   decrement(){
        
    //     this.setState({
    //       count: this.state.count - 1
    //     })
    //   }




















// changeMe={(e) => this.changeMe(e.target.value)}
// submitMe={() => this.submitMe(this.state.input)}

// increment={() => this.increment()}
//                    decrement={() => this.decrement()}