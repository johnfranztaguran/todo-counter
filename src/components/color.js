import React, { Component } from 'react';

class Color extends Component {
    constructor(){
        super()
        this.state = {
            color: '' 
        }
        
      }
    handleClick(color){
        this.setState({
            color
        })
    }  
      
    render() { 
        const colors = ['red', 'blue', 'violet']
        const { color } = this.state
        return ( 
            <div>
                <h1 style={{color}}>Hello</h1>
                {
                    colors.map(color => <button onClick={() => this.handleClick(color)}>{color}</button>)
                }
            </div>
         );
    }
}
 
export default Color;