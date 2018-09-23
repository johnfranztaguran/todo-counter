import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
        this.handleonChange = this.handleonChange.bind(this)
    }
    handleonChange(event){
        this.setState({
            text:event.target.value
        })
    }
    handleOnSumbit = () => {
        this.props.onSubmit(this.state.text)
    }
    render() { 
     
        return ( 
            <div>
            
            <input type="text"  placeholder="enter..." onChange={this.handleonChange} />
            <button onClick={this.handleOnSumbit} type="submit">Enter</button>
        
            </div>
         );
    }
}
 
export default Input;
