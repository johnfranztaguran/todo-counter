import React from 'react';

class Dating extends React.Component {
    constructor(){
        super()
        this.state = { 
            here:[],
            girl: '',
            boy: ''
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleChangeB = this.handleChangeB.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }
    //  handleChangeG(event){
    //      console.log("select", event.target.value)
    //     this.setState({
    //         girl: event.target.value
    //     })
    //  }
     handleChange(event){
         const { name, value } = event.target
        console.log({ name, value })
       this.setState({
           [name]: value
       })
    }
    //  handleClick(gender){
    //      const sel = this.state.here
    //      sel.push(gender)
    //      this.setState({
    //          here: sel
    //      })
    //  }
    
    render() { 
        const girls = ['megan fox', 'marian rivera', 'pokwang', 'Arci']
        const boys = ['master sensie', 'sensie', 'senpai keneth', 'ako']
        return ( 
            <div>
                <label>Hot Babes:</label>
                <select name='girl' onClick={this.handleChange}>
                     {
                        girls.map(y => <option>{y}</option>)
                     }
                </select>
                <br/>
                <hr/>
                <label>Hanks:</label>
                <select name='boy' onClick={this.handleChange}>
                     {
                        boys.map(y => <option>{y}</option>)
                     }
                </select>
                <div>{this.state.girl}   LOVE   {this.state.boy}</div>
                
                
                {/* <button onClick={this.handleClick(this.state.selected)}>let the war begin</button>
                <div>
                <ul>
                    {this.state.here.map((val) => <li key={val}>{val}</li>)}
                </ul>
                </div> */}
            </div>
         );
    }
}
 
export default Dating;